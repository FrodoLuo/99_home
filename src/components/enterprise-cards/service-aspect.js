import React from 'react';
import commonStyle from './common-style.less';
import SimpleCarousel from './simple-carousel';
import bg from '../../assets/image/500459742.png';
import bg2 from '../../assets/image/500268728.png';
import bg3 from '../../assets/image/500241064.png';
import Button from '../button/button';

import style from './service-aspect.less';

export default function ServiceAspect(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SimpleCarousel>
        <div className={style['content-card']} background={bg}>
          <div className={style['intro']}>
            <h1>对话年轻群体</h1>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button text="了解更多" />
        </div>
        <div className={style['content-card']} background={bg2}>
          <div className={style['intro']}>
            <h1>对话年轻群体</h1>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button text="了解更多" />
        </div>
        <div className={style['content-card']} background={bg3}>
          <div className={style['intro']}>
            <h1>对话年轻群体</h1>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button text="了解更多" />
        </div>
      </SimpleCarousel>
    </div>
  );
}
