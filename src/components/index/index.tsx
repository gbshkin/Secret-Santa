import React from 'react';
import {isMobile, mobileSelector} from "@modules/site";
import { useSelector } from "react-redux";
import Mobile from '@components/index/mobile';
import Desktop from '@components/index/desctope';

interface Meta {
  title: string;
}

const Index: React.FC = () => {
  const isMobile = useSelector(mobileSelector);
  const meta: Meta = {
    title: 'Заголовок',
  };
  console.log(isMobile);
  return (
    <>
      {isMobile ?
        <Mobile />
        :
        <Desktop />
      }
</>
);
};

export default Index;