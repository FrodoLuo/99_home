import React from 'react';
import style from './cover.less';
import coverVideo from '../../assets/video/temp_video.mp4';
import arrow from '../../assets/image/arrow_down.png';

export default (props) => {
  return (
    <div
      className={style['cover-wrap']}
      id="cover"
    >
      <div className={style['cover-background']}>
        {/* <img src={coverBackground} role="presentation" /> */}
        <video src={coverVideo} loop autoPlay muted />
      </div>
      <div className={style['cover-content']}>
        <div className={style['cover-content-title']} style={{ opacity: 1 - props.opacity }}>
          <h1>
            玖久
          </h1>
          <h2>
            让企业与新青年遇见
          </h2>

        </div>
        <div className={style['cover-arrow']}>
          {/* <span className={style['arrow-title']}>向下滑动</span> */}
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
