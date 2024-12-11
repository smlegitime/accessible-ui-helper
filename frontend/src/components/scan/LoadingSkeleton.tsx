/**
 * @fileoverview Loading Skeleton for scan page to display when fix call 
 * is happening
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { Skeleton } from "../ui/skeleton"

export function LoadingSkeleton() {
    return (
        <div className="flex flex-col space-y-3 w-89 h-96 justify-center items-center">
            <Skeleton className="h-[50%] w-[60%] rounded-xl bg-slate-200" />
            <div className="flex flex-col w-full h-20 space-y-2 items-center justify-center">
                <Skeleton className="h-[20%] w-[60%] bg-slate-200" />
                <Skeleton className="h-[20%] w-[60%] bg-slate-200" />
            </div>
        </div>
    )
}
