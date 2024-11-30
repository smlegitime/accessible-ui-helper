/**
 * @fileoverview Error message popup if the fix api call returns an error
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */
import { IoIosCloseCircle } from "react-icons/io";

export function ErrorFlag(
    { setDisplayError }:
        { setDisplayError: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <section className={`fixed max-w-2xl p-4 mx-auto bg-secondary-200 
        border border-gray-200 md:gap-x-4 place-self-center top-16 
        dark:bg-gray-900 md:flex md:items-center dark:border-gray-700 
        rounded-2xl`}>
            <div className="flex items-center gap-x-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Error rendering fix. Please try again later.
                </p>
                <span className="inline-flex p-2 text-black rounded-lg shrink-0">
                    <button onClick={() => setDisplayError(false)}>
                        <IoIosCloseCircle />
                    </button>
                </span>
            </div>
        </section>
    )
}