import React from 'react';
import commonStyle from './common-style.less';
import SimpleCarousel from './simple-carousel';
import bg from '../../assets/image/about/a_02.jpg';
import bg2 from '../../assets/image/about/a_03.jpg';
import bg3 from '../../assets/image/about/a_04.jpg';


import Button from '../button/button';

import style from './brief.less';

export default function (props) {
  return (
    <div
      className={commonStyle['card-wrap']}
    >
      <SimpleCarousel>
        <div className={style['content-card']} background={bg}>
          <div className={style['intro']}>
            <h1>助力企业获得全新商业洞察力</h1>
            <p>
              玖久自创立以来，不断思考商业和服务的本质，以及如何为企业创造新价值。
              而如今，这些思考的结果是：玖久拥有一套完全区别于传统市场调研的方法论，
              洞悉细微的同时，支持业务的快速迭代，为有志于决胜商业的企业提供新能量。
            </p>
          </div>
        </div>
        <div className={style['content-card']} background={bg2}>
          <div className={style['intro']}>
            <h1>与最前沿企业的决策速度接轨</h1>
            <p>
              已经为百度、网易、腾讯、58同城等前沿巨头提供敏捷且有保障的服务、
            并为尼尔森等全球领先的咨询服务公司提供智力支持，玖久的服务速度、
            专业度、商业认知和服务品质均受到最前沿客户的认可。
            </p>
          </div>
        </div>
        <div
          className={style['content-card']}
          background={bg3}
          floatComponents={[(<div style={{ position: 'absolute', height: 20, widti: 20, backgroundColor: 'white' }}>1</div>)]}
        >
          <div className={style['intro']}>
            <h1 >自营调研资源覆盖全国主要城市</h1>
            <p>
              玖久的调研资源（访谈员和访谈能力、研究员和研究能力等）
              覆盖全国超过30+主要城市，最大程度的支持企业在中国业务的发展，
              而“全自营”的管理模式可以让整个调研流程完全透明化，确保所有流程可监管和评估。
            </p>
          </div>
        </div>
      </SimpleCarousel>
    </div>
  );
}
