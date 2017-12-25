import React from 'react';
import style from './cover.less';
import coverBackground from '../../assets/image/cover_background.jpg';
import coverVideo from '../../assets/video/Hummingbird 1080p.mp4';
import arrow from '../../assets/image/arrow_down.png';

export default () => {
  return (
    <div
      className={style['cover-wrap']}
      id="cover"
    >
      <div className={style['cover-background']}>
        <img src={coverBackground} role="presentation" />
        {/* <video src={coverVedio} loop autoPlay muted /> */}
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
            <span className={style['arrow']}>
              <img src={arrow} role="presentation" />
            </span>
            <span className={style['arrow-shadow']}>
              <img src={arrow} role="presentation" />
            </span>
          </div>
        </div>
      </div>
    </div >
  );
};
