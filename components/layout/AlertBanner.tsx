'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Alert {
    id: string;
    text: string;
    type: 'info' | 'warning' | 'error' | 'success';
    link?: string;
}

const alerts: Alert[] = [
    {
        id: '1',
        text: 'Admission Open for Academic Year 2025-26',
        type: 'info',
        link: '/admission'
    },
    {
        id: '2',
        text: 'Last date for scholarship application submission is August 15, 2025',
        type: 'warning',
        link: '/scholarship'
    },
    {
        id: '3',
        text: 'New course on Artificial Intelligence starting from September 2025',
        type: 'info',
        link: '/courses'
    }
];

const AlertBanner = () => {
    const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

    const getAlertColor = (type: Alert['type']) => {
        switch (type) {
            case 'info':
                return 'bg-blue-600';
            case 'warning':
                return 'bg-yellow-500';
            case 'error':
                return 'bg-red-600';
            case 'success':
                return 'bg-green-600';
            default:
                return 'bg-blue-600';
        }
    };

    return (
        <div className={`w-full ${getAlertColor(alerts[currentAlertIndex].type)} text-white relative overflow-hidden`}>
            <div className="max-w-7xl mx-auto relative">
                <div className="flex items-center justify-between py-2 px-4">
                    <div className="flex-1 flex items-center overflow-hidden">
                        <motion.div
                            key={alerts[currentAlertIndex].id}
                            initial={{ x: '100%' }}
                            animate={{ x: '-100%' }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                            className="whitespace-nowrap flex items-center"
                        >
                            <span className="text-sm font-medium mr-8">
                                {alerts[currentAlertIndex].text}
                            </span>
                            {/* Repeat the text for continuous scroll */}
                            <span className="text-sm font-medium mr-8">
                                {alerts[currentAlertIndex].text}
                            </span>
                        </motion.div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                        <button
                            onClick={() => setCurrentAlertIndex((prev) =>
                                prev === 0 ? alerts.length - 1 : prev - 1
                            )}
                            className="p-1 hover:bg-white/20 rounded"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentAlertIndex((prev) =>
                                prev === alerts.length - 1 ? 0 : prev + 1
                            )}
                            className="p-1 hover:bg-white/20 rounded"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertBanner;
