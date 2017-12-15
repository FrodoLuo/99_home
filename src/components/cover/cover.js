import React from 'react';
import style from './cover.less';
import coverBackground from '../../assets/image/cover_background.jpg';

export default () => {
  return (
    <div
      className={style['cover-wrap']}
    >
      <div className={style['cover-background']}>
        <img src={coverBackground} role="presentation" />
        {/* <vedio /> */}
      </div>
      <div className={style['cover-content']}>
        <div className={style['cover-content-title']}>
          <h1>
            玖久
          </h1>
          <h2>
            企业与新青年的新纽带
          </h2>
        </div>
        <div className={style['cover-arrow']}>
          <span className={style['arrow-title']}>向下滚动</span>
          <div className={style['arrows-wrap']}>
            <span>
              k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
