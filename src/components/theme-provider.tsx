"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
/**
 * 🚀 If you find this project useful, please ⭐️ it on GitHub and share it!  
 * 🔗 GitHub: https://github.com/kanuj21  
 * 💖 Your support keeps this project growing!  
 */