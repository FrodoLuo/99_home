import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';

import ServiceAspect from '../components/enterprise-cards/service-aspect';
import Insight from '../components/enterprise-cards/insight';
import ThinkDepth from '../components/enterprise-cards/think-depth';
import Cases from '../components/enterprise-cards/cases';
import Feedback from '../components/enterprise-cards/feedback';

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

export default function Enterprise() {
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Header enterprise />
      <FullScreenScroll>
        <ServiceAspect title="服务方向" />
        <Insight title="玖久洞察-方法论" />
        <ThinkDepth title="玖久洞察-思考深度" />
        <Cases title="案例展示" caseData={caseData} />
        <Feedback title="用户反馈" />
        <div data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
