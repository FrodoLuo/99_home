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
          >
            <div className={style['client-wrap']}>
              <div className={style['client-content-wrap']}>
                <div className={style['client-content-logo']}>
                  <img src={logo} role="presentation" />
                </div>
                <div>
                  <div className={style['client-content-title']}>blabla</div>
                  <div className={style['client-content-intro']}>blblblblblblblblblblblblblblblb blbl blbl blblbl   blbl</div>
                </div>
              </div>
            </div>
            <div className={style['client-wrap']}>
              <div className={style['client-content-wrap']}>
                <div className={style['client-content-logo']}>
                  <img src={logo} role="presentation" />
                </div>
                <div>
                  <div className={style['client-content-title']}>blabla</div>
                  <div className={style['client-content-intro']}>blblblblblblblblblblblblblblblb blbl blbl blblbl   blbl</div>
                </div>
              </div>
            </div>
            <div className={style['client-wrap']}>
              <div className={style['client-content-wrap']}>
                <div className={style['client-content-logo']}>
                  <img src={logo} role="presentation" />
                </div>
                <div>
                  <div className={style['client-content-title']}>blabla</div>
                  <div className={style['client-content-intro']}>blblblblblblblblblblblblblblblb blbl blbl blblbl   blbl</div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
