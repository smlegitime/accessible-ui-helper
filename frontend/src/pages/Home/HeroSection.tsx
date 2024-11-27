/**
 * @fileoverview Hero Section that contains the text description and upload panel
 * @author Jiecheng(Jason) Chen
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { UploadPanel } from './UploadPanel';

export function HeroSection() {
  return (
    <section id='HeroSection'  className='flex justify-evenly items-center gap-20 max-w-7xl min-h-[50rem]'>
      <div id='HeroText' className='max-w-xl w-full'>
        <h1 className='text-5xl mb-4 font-bold leading-tight'>🚀 Enhance Your <br/> Website’s <span className='bg-primary-300 text-black px-2 rounded-sm'>Accessibility</span></h1>
        <p className='text-1xl mb-8'>
          Scan, review, and implement code fixes to improve your website’s accessibility to reach a wider audience
        </p>
        <ul className='text-1xl'>
          <li className='flex items-center gap-2'>
            <svg width="15" height="13" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.91711 15.2529C6.52658 15.6434 5.89342 15.6434 5.50289 15.2529L0.707107 10.4571C0.316583 10.0666 0.316582 9.43342 0.707107 9.04289L2.12185 7.62815C2.51278 7.23722 3.14675 7.23769 3.53711 7.6292L5.50254 9.60044C5.89303 9.99209 6.52728 9.9924 6.91815 9.60113L15.3829 1.12782C15.7734 0.73696 16.4068 0.736799 16.7975 1.12746L18.2129 2.54289C18.6034 2.93342 18.6034 3.56658 18.2129 3.9571L6.91711 15.2529Z" fill="#E4FD90"/>
            </svg>
            Meet WCAG Guidelines
          </li>
          <li className='flex items-center gap-2'>
            <svg width="15" height="13" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.91711 15.2529C6.52658 15.6434 5.89342 15.6434 5.50289 15.2529L0.707107 10.4571C0.316583 10.0666 0.316582 9.43342 0.707107 9.04289L2.12185 7.62815C2.51278 7.23722 3.14675 7.23769 3.53711 7.6292L5.50254 9.60044C5.89303 9.99209 6.52728 9.9924 6.91815 9.60113L15.3829 1.12782C15.7734 0.73696 16.4068 0.736799 16.7975 1.12746L18.2129 2.54289C18.6034 2.93342 18.6034 3.56658 18.2129 3.9571L6.91711 15.2529Z" fill="#E4FD90"/>
            </svg>
            Customized Accessibility Fixes
          </li>
          <li className='flex items-center gap-2'>
            <svg width="15" height="13" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.91711 15.2529C6.52658 15.6434 5.89342 15.6434 5.50289 15.2529L0.707107 10.4571C0.316583 10.0666 0.316582 9.43342 0.707107 9.04289L2.12185 7.62815C2.51278 7.23722 3.14675 7.23769 3.53711 7.6292L5.50254 9.60044C5.89303 9.99209 6.52728 9.9924 6.91815 9.60113L15.3829 1.12782C15.7734 0.73696 16.4068 0.736799 16.7975 1.12746L18.2129 2.54289C18.6034 2.93342 18.6034 3.56658 18.2129 3.9571L6.91711 15.2529Z" fill="#E4FD90"/>
            </svg>
            Boost Website Performance
          </li>
          <li className='flex items-center gap-2'>
            <svg width="15" height="13" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.91711 15.2529C6.52658 15.6434 5.89342 15.6434 5.50289 15.2529L0.707107 10.4571C0.316583 10.0666 0.316582 9.43342 0.707107 9.04289L2.12185 7.62815C2.51278 7.23722 3.14675 7.23769 3.53711 7.6292L5.50254 9.60044C5.89303 9.99209 6.52728 9.9924 6.91815 9.60113L15.3829 1.12782C15.7734 0.73696 16.4068 0.736799 16.7975 1.12746L18.2129 2.54289C18.6034 2.93342 18.6034 3.56658 18.2129 3.9571L6.91711 15.2529Z" fill="#E4FD90"/>
            </svg>
            Easy To Use
          </li>
        </ul>
      </div>
      <UploadPanel />
    </section>
  );
}