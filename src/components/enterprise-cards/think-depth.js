import React from 'react';

import commonStyle from './common-style.less';
import bg from '../../assets/image/1081956.png';
import style from './think-depth.less';
import listImg from '../../assets/image/500056635.png';

export default function ThinkDepth() {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style['content-wrap']}>
        <div className={style['left-wrap']}>
          <div className={style['content']}>
            <h1>商业评价</h1>
            <div className={style['list-wrap']}>
              <span style={{ alignSelf: 'flex-start', margin: '0 10px 0 0' }}>01</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <img src={listImg} role="presentation" />
            </div>
            <div className={style['list-wrap']}>
              <span style={{ alignSelf: 'flex-start', margin: '0 10px 0 0' }}>02</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <img src={listImg} role="presentation" />
            </div>
          </div>
        </div>
        <div className={style['right-wrap']}>
          <div className={style['content']}>
            <h1>商业评价</h1>
            <div className={style['list-wrap']}>
              <span style={{ alignSelf: 'flex-start', margin: '0 10px 0 0' }}>01</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <img src={listImg} role="presentation" />
            </div>
            <div className={style['list-wrap']}>
              <span style={{ alignSelf: 'flex-start', margin: '0 10px 0 0' }}>02</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <img src={listImg} role="presentation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
