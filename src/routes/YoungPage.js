import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';

import Youth from '../components/young-cards/youth';
import Create from '../components/young-cards/create';
import ThinkingValue from '../components/young-cards/thinking-value';
import Story from '../components/young-cards/story';
import Comment from '../components/young-cards/comment';

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
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header young />
      <FullScreenScroll>
        <Youth title="玖久青年" />
        <Create title="青年创造" />
        <ThinkingValue title="思维价值" />
        <Story title="青年故事" />
        <Comment title="企业评价" />
        <div data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
