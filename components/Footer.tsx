"use client";
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time on client side
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <footer className="p-2 border-t border-custom-green bg-black text-xs text-custom-green font-mono flex justify-between items-center">
      <span>hajdaraj@portfolio:~$</span>
      <span>{currentTime ? `${formatDate(currentTime)}, ${formatTime(currentTime)}` : ''}</span>
    </footer>
  );
} 