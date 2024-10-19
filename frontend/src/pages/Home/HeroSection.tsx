import React from 'react';
import { HeroText } from './HeroText';
import { UploadPanel } from './UploadPanel';

export function HeroSection() {
  return (
    <section id='HeroSection'  className='flex justify-evenly items-center max-w-7xl min-h-[50rem]'>
      <HeroText />
      <UploadPanel />
    </section>
  );
}