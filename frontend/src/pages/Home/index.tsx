/**
 * @fileoverview  Root component of the home page
 * @author Jiecheng(Jason) Chen
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import '../../styles/globals.css';
import { DisclaimerCard } from './Disclaimer';
import backgroundImg from '../../images/abstractBackground.webp'
import { HeroSection } from './HeroSection';

export function Home() {
  return (
    <>
      <h2 className='fixed left-1/2 -translate-x-1/2 mt-2.5 z-10
        flex items-center gap-2 
        text-2xl font-extrabold text-white'>
        <svg width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9.5" cy="9.5" r="9.5" fill="#E4FD90"/>
        </svg>
        AccUI
      </h2>
      <div 
        id='HomePage' 
        className='fixed top-[0] left-[0] w-full h-full 
        flex flex-col items-center justify-center 
        bg-black bg-cover bg-center text-white'
      >
        <HeroSection />
        <img src={backgroundImg} alt="background images" 
          className='fixed max-w-[1300px] z-0 opacity-55 filter blur-[2px]'
        />
      </div>
      <DisclaimerCard />
      <svg className='fixed bottom-0 w-screen opacity-75' width="1920" height="132" viewBox="0 0 1920 132" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_552_2129)">
        <ellipse cx="960" cy="218" rx="960" ry="55" fill="black"/>
        </g>
        <defs>
        <filter id="filter0_d_552_2129" x="-120" y="0" width="2160" height="350" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="20" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_552_2129"/>
        <feOffset dy="-43"/>
        <feGaussianBlur stdDeviation="50"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.894118 0 0 0 0 0.992157 0 0 0 0 0.564706 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2129"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2129" result="shape"/>
        </filter>
        </defs>
      </svg>
      <DisclaimerCard />
    </>

  );
}