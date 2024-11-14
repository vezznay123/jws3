"use client"

import * as React from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300",
                  "hover:text-white",
                  "group flex items-center px-4 py-2",
                  pathname === link.href ? "text-white" : "text-foreground"
                )}
              >
                <span className="relative z-10">
                  {link.label}
                </span>
                <div
                  className={cn(
                    "absolute inset-0 -z-[1] rounded-md",
                    "bg-[#15afb7] opacity-0 blur-[2px]",
                    "transition-all duration-300 ease-out",
                    "scale-[0.8] group-hover:scale-[1.1] group-hover:opacity-100",
                    "after:absolute after:inset-0",
                    "after:bg-[radial-gradient(circle_at_30%_50%,transparent_3px,#15afb7_4px)] after:bg-[length:8px_8px]",
                    "after:opacity-0 group-hover:after:opacity-50",
                    pathname === link.href && "opacity-100 after:opacity-50 scale-[1.1]"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 -ml-2 rounded-full hover:bg-accent transition-colors duration-300">
                <Menu className="h-5 w-5 text-[#15afb7]" />
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-[280px] bg-background/95 backdrop-blur-md border-r border-border"
              >
                <motion.nav 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -100 }
                  }}
                  className="flex flex-col mt-8 space-y-2"
                >
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-lg text-base font-medium",
                          "transition-all duration-300 hover:scale-105",
                          "flex items-center",
                          pathname === link.href 
                            ? "bg-primary text-primary-foreground" 
                            : "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}