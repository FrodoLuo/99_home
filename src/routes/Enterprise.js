import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';

import ServiceAspect from '../components/enterprise-cards/service-aspect';
import Insight from '../components/enterprise-cards/insight';
import ThinkDepth from '../components/enterprise-cards/think-depth';


export default function Enterprise() {
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header />
      <FullScreenScroll>
        <ServiceAspect title="服务方向" />
        <Insight title="玖久洞察-方法论" />
        <ThinkDepth title="玖久洞察-思考深度" />
        <div data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
