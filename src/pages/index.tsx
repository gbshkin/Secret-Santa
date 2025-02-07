import Index from '@components/index';
import getConfig from 'next/config';
import { isMobile } from '@modules/site';
import MobileDetect from 'mobile-detect';
import { wrapper } from '@store/index';
import { NextPageContext } from 'next';

const Page = (props: any) => <Index {...props} />;

Page.getInitialProps = wrapper.getInitialPageProps((store) => async (context: NextPageContext) => {
  const { req } = context;
  const { publicRuntimeConfig } = getConfig();

  if (req) {
    const userAgent = (req.headers['user-agent'] || '') as string;
    const md = new MobileDetect(userAgent);

    const mobile = !!md.mobile();
    console.log('User Agent:', userAgent);
    console.log('Detected Mobile:', mobile);

    if (store.getState()?.site?.mobile !== mobile) {
      console.log('Updating mobile state:', mobile);
      store.dispatch(isMobile(mobile));
    }
  }
  return { };
});

export default Page;