/**
 * @fileoverview  Root component of the home page
 * @author Jiecheng(Jason) Chen
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { Link } from 'react-router-dom';
import '../../styles/globals.css';
import { DisclaimerCard } from './Disclaimer';
import { HeroSection } from './HeroSection';

export function Home() {
  return (
    <div id='HomePage' className='flex flex-col items-center bg-black text-white h-screen'>
      {/* <h2 className='fixed'>AccUI</h2> */}
      <div className="flex items-start space-x-4 p-4">
        <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
        <Link to={"/"}><h1 className="text-white font-bold text-2xl">AccUI</h1></Link>
      </div>
      <HeroSection />
      <DisclaimerCard />
    </div>
  );
}