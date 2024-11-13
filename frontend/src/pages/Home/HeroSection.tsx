/**
 * Description: Hero Section that contains the text description and upload panel
 * Created: Jiecheng(Jason) Chen
 * Created date: Oct 14, 2024 | Updated date: Oct 26, 2024 
 */

import React from 'react';
import { HeroText } from './HeroText';
import { UploadPanel } from './UploadPanel';

export function HeroSection() {
  return (
    <section id='HeroSection'  className='flex justify-evenly items-center gap-24 max-w-7xl min-h-[50rem]'>
      <HeroText />
      <UploadPanel />
    </section>
  );
}