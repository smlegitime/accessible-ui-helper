import React from 'react';
import '../../styles/globals.css';
import { HeroSection } from './HeroSection';

export function Home() {
  return (
    <div id='HomePage' className='flex flex-col items-center'>
      <h2 className='fixed'>AccUI</h2>
      <HeroSection />
    </div>
  );
}