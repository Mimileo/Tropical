// _app.js:
// use this component to keep state when navigating between pages, 
// or to add global styles 
// * restart the development server when adding _app.js
import '../styles/global.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}