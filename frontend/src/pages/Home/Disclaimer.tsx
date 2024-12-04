/**
 * @fileoverview Accessibilty disclaimer component
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { useState } from "react";
import { IoWarning } from "react-icons/io5";

export function DisclaimerCard() {
    const [open, setOpen] = useState(true)
    let returnedComponent = open ?
         <section className={`fixed max-w-2xl p-4 mx-auto bg-primary-200 border 
            border-gray-200 md:gap-x-4 left-12 bottom-16 dark:bg-gray-900 md:flex 
            md:items-center dark:border-gray-700 rounded-2xl`}>
                <div className="flex items-center gap-x-4">
                    <span className="inline-flex p-2 text-black rounded-lg shrink-0">
                    <IoWarning />
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300"> 
                        Please note that the website is not a legal guarantee of 
                        accessibility. We are not endorsed by W3C. 
                        <a href="https://www.deque.com/axe/" 
                        className="text-blue-500 hover:underline"> Read more</a>. 
                        </p>
                </div>
                <div className="flex items-center mt-6 gap-x-4 shrink-0 lg:mt-0">
                    <button className={`text-xs w-1/2 md:w-auto font-medium 
                        bg-gray-800 rounded-lg hover:bg-gray-700 text-white px-4 
                        py-2.5 duration-300 transition-colors focus:outline-none`}
                        onClick={()=> {setOpen(false)}}>
                        Accept
                    </button>
                </div>
            </section> :  <></>
    return returnedComponent
}