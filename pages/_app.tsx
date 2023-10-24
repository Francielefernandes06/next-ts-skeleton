import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import DefaultLayout from '@/layouts/default-layout';
import store from '@/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}
