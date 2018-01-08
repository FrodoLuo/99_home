import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';

import caseBg from '../assets/image/500186530.png';
import caseLogo from '../assets/image/ferrari.png';

const caseData = [{
  logo: caseLogo,
  bg: caseBg,
  title: 'Ferrari',
}, {
  logo: caseLogo,
  bg: caseBg,
  title: 'Ferrari',
}, {
  logo: caseLogo,
  bg: caseBg,
  title: 'Ferrari',
}, {
  logo: caseLogo,
  bg: caseBg,
  title: 'Ferrari',
}];

export default function Young() {
  console.log('123');
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header young />
      <FullScreenScroll>
        <div>
          123
        </div>
        <div data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
