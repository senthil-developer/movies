'use client'
import { ThemeProvider} from 'next-themes'
// import { Theme } from '@radix-ui/themes'

const Provider = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class' >
            {children}
        {/* <Theme>
        </Theme> */}
    </ThemeProvider>
  )
}

export default Provider