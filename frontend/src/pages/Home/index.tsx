/**
 * Description: Root component of the home page
 * Created: Jiecheng(Jason) Chen
 * Created date: Oct 14, 2024 | Updated date: Nov 13, 2024 
 */

import React from 'react';
import '../../styles/globals.css';
import { HeroSection } from './HeroSection';

export function Home() {
  return (
    <div id='HomePage' className='flex flex-col items-center bg-black text-white'>
      <h2 className='fixed'>AccUI</h2>
      <HeroSection />
    </div>
  );
}