import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import '@static/css/all.scss';
import Container from '@components/app/Container';
import { wrapper } from '@/store';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Container args={pageProps?.args}>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
};

export default MyApp;