/**
 * @fileoverview  Root component of the home page
 * @author Jiecheng(Jason) Chen
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import '../../styles/globals.css';
import { DisclaimerCard } from './Disclaimer';
import { HeroSection } from './HeroSection';

export function Home() {
  return (
    <div id='HomePage' className='flex flex-col items-center bg-black text-white h-screen'>
      <h2 className='fixed'>AccUI</h2>
      <HeroSection />
      <DisclaimerCard />
    </div>
  );
}