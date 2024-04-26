'use client'
import React, { useEffect } from 'react';

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
    [key: string]: any;  // Additional details as a flexible object
}

interface Interaction {
    type: string;
    timestamp: string;
    details: InteractionDetail;
}

const InteractionTracker = () => {
    const interactions: Interaction[] = [];

    useEffect(() => {
        setupListeners();
        const intervalId = setInterval(sendBatch, 15000); // Log batch every 15 seconds

        return () => {
            removeListeners();
            clearInterval(intervalId);
        };
    }, []);

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
            ...additionalDetails
        };

        const interaction: Interaction = {
            type: event.type,
            timestamp: new Date().toISOString(),
            details: baseDetails
        };

        interactions.push(interaction);

        if (interactions.length >= 100) {
            sendBatch();
        }
    };

    const sendBatch = (): void => {
        if (interactions.length === 0) return; // Prevent sending empty batches

        console.log('Sending interactions:', interactions);
        fetch('/api/log-interactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add your headers here, such as 'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(interactions)
        }).then(response => {
            if (response.ok) {
                console.log('Batch sent successfully.');
                interactions.length = 0; // Clear after sending
            }
        }).catch(error => console.error('Error sending batch:', error));
    };

    const setupListeners = (): void => {
        document.addEventListener('click', logInteraction as EventListener);
        document.addEventListener('touchend', logInteraction as EventListener);
        document.addEventListener('mouseover', logInteraction as EventListener);
        document.addEventListener('mousemove', logInteraction as EventListener);
        document.addEventListener('scroll', logInteraction as EventListener);
        document.addEventListener('keypress', logInteraction as EventListener);
        document.addEventListener('resize', logInteraction as EventListener);
    };

    const removeListeners = (): void => {
        document.removeEventListener('click', logInteraction as EventListener);
        document.removeEventListener('touchend', logInteraction as EventListener);
        document.removeEventListener('mouseover', logInteraction as EventListener);
        document.removeEventListener('mousemove', logInteraction as EventListener);
        document.removeEventListener('scroll', logInteraction as EventListener);
        document.removeEventListener('keypress', logInteraction as EventListener);
        document.removeEventListener('resize', logInteraction as EventListener);
    };

    return null;
};

export default InteractionTracker;

