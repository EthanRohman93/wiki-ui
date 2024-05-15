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

interface LastPosition {
  x: number | null;
  y: number | null;
}


const InteractionTracker = () => {
    const globalState = useContext(MyGlobalStateContext);
    const [currentPath, setCurrentPath] = useState<string>('');
    const interactions: Interaction[] = [];
    let lastPosition: LastPosition = { x: null, y: null };

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        if (!globalState) {
            console.error("Global state is not available!");
            return;
        }

        const eventTypes = ['click', 'touchend', 'mouseover', 'mousemove', 'scroll', 'keypress', 'resize'];
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

            if (event.type === 'mousemove') {
                // Check if current and last positions are not null before calculating distance
                if (lastPosition.x !== null && lastPosition.y !== null && baseDetails.x !== null && baseDetails.y !== null) {
                    const dist = Math.sqrt(Math.pow(baseDetails.x - lastPosition.x, 2) + Math.pow(baseDetails.y - lastPosition.y, 2));
                    if (dist <= 50) return; // Skip logging if distance is not more than 50px
                }
                // Update lastPosition with new coordinates only if they are not null
                if (baseDetails.x !== null && baseDetails.y !== null) {
                    lastPosition.x = baseDetails.x;
                    lastPosition.y = baseDetails.y;
                }
            }

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

        eventTypes.forEach(eventType => {
            document.addEventListener(eventType, logInteraction as EventListener);
        });

        const intervalId = setInterval(sendBatch, 15000); // Log batch every 15 seconds
        const stopTimer = setTimeout(() => {
            eventTypes.forEach(eventType => {
                document.removeEventListener(eventType, logInteraction as EventListener);
            });
            clearInterval(intervalId);
            sendBatch(); // Send any remaining interactions before stopping
        }, 600000); // Stop after 10 minutes

        return () => {
            eventTypes.forEach(eventType => {
                document.removeEventListener(eventType, logInteraction as EventListener);
            });
            clearInterval(intervalId);
            clearTimeout(stopTimer);
        };
    }, [globalState, currentPath]);

    const sendBatch = (): void => {
        if (interactions.length === 0) return; // Prevent sending empty batches

        console.log('Sending interactions:', interactions);

        fetch('http://18.220.173.252/log-interactions/', {
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
