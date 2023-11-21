'use client'
import React from 'react'
import { ThemeProvider} from 'next-themes'
import { Theme } from '@radix-ui/themes'

const Provider = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class' >
        <Theme>
            {children}
        </Theme>
    </ThemeProvider>
  )
}

export default Provider