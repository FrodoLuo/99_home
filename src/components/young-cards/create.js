import React from 'react';
import commonStyle from './common-style.less';
import style from './create.less';

import brainStorm from '../../assets/image/brain-storm.png';
import bg from '../../assets/image/500332575.png';

export default function () {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style['content-wrap']}>
        <div className={style['content']}>
          <div className={style['logo']}>
            <img src={brainStorm} role="presentation" />
          </div>
          <div className={style['title']}>
            内部创造
          </div>
          <div className={style['intro']}>
            <p>
              巴拉巴拉巴拉巴拉巴拉巴
              拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴
              拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴
              拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴拉巴拉
            </p>
          </div>
        </div>
        <div className={style['content']}>
          <div className={style['logo']}>
            <img src={brainStorm} role="presentation" />
          </div>
          <div className={style['title']}>
            内部创造
          </div>
          <div className={style['intro']}>
            <p>
              巴拉巴拉巴拉巴拉巴拉巴
              拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴
              拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴
              拉巴拉巴拉巴拉巴拉巴拉
              巴拉巴拉巴拉巴拉巴拉巴拉巴拉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
