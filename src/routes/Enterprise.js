import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import FullScreenScroll from '../components/fullscreen-scroll/fullscreen-scroll';
import Article from '../components/artical/artical';
import ServiceAspect from '../components/enterprise-cards/service-aspect';
// import Methodology from '../components/enterprise-cards/methodology';
import ThinkDepth from '../components/enterprise-cards/think-depth';
// import Cases from '../components/enterprise-cards/cases';
// import Feedback from '../components/enterprise-cards/feedback';

// import caseBg from '../assets/image/500186530.png';
// import caseLogo from '../assets/image/ferrari.png';

// const caseData = [{
//   logo: caseLogo,
//   bg: caseBg,
//   title: 'Ferrari',
// }, {
//   logo: caseLogo,
//   bg: caseBg,
//   title: 'Ferrari',
// }, {
//   logo: caseLogo,
//   bg: caseBg,
//   title: 'Ferrari',
// }, {
//   logo: caseLogo,
//   bg: caseBg,
//   title: 'Ferrari',
// }];

export default function Enterprise() {
  return (
    <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
      <Article />
      <Header enterprise />
      <FullScreenScroll enterprise>
        <ServiceAspect key="1" title="服务方向" />
        {/* <Methodology key="2" title="玖久方法论" /> */}
        <ThinkDepth key="3" title="玖久洞察" />
        {/* <Cases key="4" title="优秀案例" caseData={caseData} /> */}
        {/* <Feedback key="5" title="客户反馈" /> */}
        <div key="6" data-ignore style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end' }}>
          <Footer />
        </div>
      </FullScreenScroll>
    </div>
  );
}
