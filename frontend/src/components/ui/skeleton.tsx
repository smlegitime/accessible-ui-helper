/**
 * @fileoverview shadCN skeleton component
 * @author shadCN
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { cn } from "../../lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
