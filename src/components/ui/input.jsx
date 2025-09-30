import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
 return (
 <input
 type={type}
 className={cn(
 "flex h-11 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
 className
 )}
 ref={ref}
 autoComplete={type === 'password' ? 'current-password' : undefined}
 {...props}
 />
 )
})
Input.displayName = "Input"

export { Input }