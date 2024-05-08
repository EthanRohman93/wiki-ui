'use client'
import React, { useEffect, useContext, useState } from 'react';
import { MyGlobalStateContext } from './GlobalState';

interface InteractionDetail {
    x: number | null;
    y: number | null;
    tag: string | null;
    id: string | null;
    key: string | null;
    button: number | null;
    scrollDepth: number | null;
    width: number | null;
    height: number | null;
    [key: string]: any;
}

interface Interaction {
    username: string;
    type: string;
    timestamp: string;
    details: InteractionDetail;
}

const InteractionTracker: React.FC = () => {
    const globalState = useContext(MyGlobalStateContext);
    const [currentPath, setCurrentPath] = useState<string>('');

    const interactions: Interaction[] = [];

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        if (!globalState) {
            console.error("Global state is not available!");
            return;
        }

        const setupListeners = () => {
            const eventTypes = ['click', 'touchend', 'mouseover', 'mousemove', 'scroll', 'keypress', 'resize'];
            eventTypes.forEach(eventType => {
                document.addEventListener(eventType, throttledLogInteraction as EventListener);
            });
        };

        const removeListeners = () => {
            const eventTypes = ['click', 'touchend', 'mouseover', 'mousemove', 'scroll', 'keypress', 'resize'];
            eventTypes.forEach(eventType => {
                document.removeEventListener(eventType, throttledLogInteraction as EventListener);
            });
        };

        setupListeners();
        const intervalId = setInterval(sendBatch, 15000); // Log batch every 15 seconds

        return () => {
            removeListeners();
            clearInterval(intervalId);
        };
    }, [globalState, currentPath]);

    const throttle = <F extends (...args: any[]) => void>(func: F, limit: number): ((...args: Parameters<F>) => void) => {
        let lastFunc: NodeJS.Timeout | undefined;
        let lastRan = 0; // Initialize to 0 to avoid undefined

        return (...args: Parameters<F>) => {
            const now = Date.now();
            if (!lastRan || (now - lastRan >= limit)) {
                if (lastFunc) {
                    clearTimeout(lastFunc);
                }
                lastFunc = setTimeout(() => {
                    func(...args);
                    lastRan = now;
                }, limit);
            }
        };
    };

    const logInteraction = (event: MouseEvent & KeyboardEvent & TouchEvent, additionalDetails: object = {}) => {
        const baseDetails: InteractionDetail = {
            x: 'clientX' in event ? event.clientX : null,
            y: 'clientY' in event ? event.clientY : null,
            tag: event.target instanceof HTMLElement ? event.target.tagName : null,
            id: event.target instanceof HTMLElement ? event.target.id : null,
            key: 'key' in event ? event.key : null,
            button: 'button' in event ? event.button : null,
            scrollDepth: window.scrollY,
            width: window.innerWidth,
            height: window.innerHeight,
            page: currentPath,
            ...additionalDetails
        };

        const interaction: Interaction = {
            username: globalState?.username || "LandingPage",
            type: event.type,
            timestamp: new Date().toISOString(),
            details: baseDetails
        };

        interactions.push(interaction);

        if (interactions.length >= 1000) {
            sendBatch();
        }
    };

    const throttledLogInteraction = throttle(logInteraction, 3000); // Throttle to run every 3 seconds

    const sendBatch = (): void => {
        if (interactions.length === 0) return; // Prevent sending empty batches

        console.log('Sending interactions:', interactions);

        fetch('http://localhost:8000/log-interactions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(interactions)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            interactions.length = 0; // Clear interactions after successful send
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return null;
};

export default InteractionTracker;

