import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';

export default function Enterprise() {
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header />
      <FullScreenScroll>
        <div style={{ backgroundColor: 'gray' }} title="第一页面">
          page1
        </div>
        <div style={{ backgroundColor: 'purple' }} title="第二页面">
          page2
        </div>
        <div style={{ backgroundColor: 'purple' }} title="第二页面">
          page2
        </div>
        <div style={{ backgroundColor: 'purple' }} title="第二页面">
          page2
        </div>
        <div data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
