import '../styles/globals.css'
import {ThemeProvider, themeProvider} from "next-themes"
import {fuchsia} from "tailwindcss/colors"

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute='class'>
      <Component{...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
