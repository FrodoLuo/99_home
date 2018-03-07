import React from 'react';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';

import Brief from '../components/about-cards/brief';
import Value from '../components/about-cards/value';
import Group from '../components/about-cards/group';
import Cover from '../components/about-cards/cover';
import Article from '../components/about-cards/article';

export default function () {
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header about />
      <FullScreenScroll enterprise withCover>
        <Cover />
        <Brief title="基本介绍" />
        <Value title="价值观" />
        <Group title="团队构成" />
        <Article title="文章精选" />
        <div data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
