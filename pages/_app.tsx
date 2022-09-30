import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import createEmotionCache from '../components/createEmotionCache';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darktheme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {

  const [activeTheme, setActiveTheme] = React.useState(lightTheme);
const [selectedTheme, setSelectedTheme] = React.useState<'light' | 'dark'>('light');

function getActiveTheme(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

React.useEffect(() => {
   setActiveTheme(getActiveTheme(selectedTheme))
}, [selectedTheme]);

const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
  console.log('entroeee');
  console.log(selectedTheme);
  
  
  const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';

  setSelectedTheme(desiredTheme);
};


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </CacheProvider>
    </Provider>
  );
}
