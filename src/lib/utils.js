import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const base = import.meta.env.BASE_URL
export function asset(path) {
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}
