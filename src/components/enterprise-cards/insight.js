import React from 'react';
import commonStyle from './common-style.less';
import bg from '../../assets/image/537222.png';
import style from './insight.less';

export default function Insight() {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style['content-wrap']}>
        <div className={`${style['left']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              初创企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
        <div className={`${style['right-top']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              大型企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
        <div className={`${style['right-bottom-left']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              巨头企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
        <div className={`${style['right-bottom-right']} ${style['sub-card']}`}>
          <div className={style['title']}>
            <h1>
              其他企业
            </h1>
            <h2>
              方法论
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
