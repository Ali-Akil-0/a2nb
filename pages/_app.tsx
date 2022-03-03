import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
 
function MyApp({ Component, pageProps }: AppProps) {
  const progress = new ProgressBar({
  // Numeric values get converted to px.
  size: 2,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: "#FE595E",

  // Class name used for the progress bar element.
  className: "bar-of-progress z-50",

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 80,

  }

  );

  Router.events.on('routeChangeStart',progress.start)
  Router.events.on('routeChangeComplete',progress.finish)
  Router.events.on('routeChangeError',progress.finish)
  

  return <Component {...pageProps} />
}

export default MyApp
