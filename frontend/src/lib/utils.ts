/**
 * @fileoverview shadCN library utilites file
 * @author shadCN
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
