import React from 'react';

import commonStyle from './common-style.less';
import style from './feedback.less';
import Carousel from '../carousel/carousel';

import bg from '../../assets/image/enterprise/e_06.jpg';
import logo from '../../assets/image/36kr.png';

export default function (props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style['content-wrap']}>
        <div className={style['carousel-wrap']}>
          <Carousel
            arrows
            fade
            index={1}
            arrowPosition={'10rem'}
          >
            <div className={style['client-wrap']}>
              <div className={style['client-content-wrap']}>
                <div className={style['client-content-logo']}>
                  <img src={logo} role="presentation" />
                </div>
                <div className={style['body-wrap']}>
                  <div className={style['client-content-title']}>blabla</div>
                  <div className={style['client-content-intro']}>
                    <div className={style['equot']}><span>“</span><span>”</span></div>
                    blblblblblblblblblblblblblblblb blbl blbl blblbl   blbl</div>
                </div>
              </div>
            </div>
            <div className={style['client-wrap']}>
              <div className={style['client-content-wrap']}>
                <div className={style['client-content-logo']}>
                  <img src={logo} role="presentation" />
                </div>
                <div className={style['body-wrap']}>
                  <div className={style['client-content-title']}>36氪</div>
                  <div className={style['client-content-intro']}>
                    <div className={style['equot']}><span>“</span><span>”</span></div>
                    战略调整下发现千亿机会，玖久让我们的团队更智慧。
                  </div>
                  <div className={style['client-content-footer']}>——投资部负责人张明凯</div>
                </div>
              </div>
            </div>
            <div className={style['client-wrap']}>
              <div className={style['client-content-wrap']}>
                <div className={style['client-content-logo']}>
                  <img src={logo} role="presentation" />
                </div>
                <div className={style['body-wrap']}>
                  <div className={style['client-content-title']}>blabla</div>
                  <div className={style['client-content-intro']}>
                    <div className={style['equot']}><span>“</span><span>”</span></div>
                    blblblblblblblblblblblblblblblb blbl blbl blblbl   blbl</div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
