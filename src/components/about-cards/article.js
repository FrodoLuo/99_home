import React from 'react';
import commonStyle from './common-style.less';
import style from './article.less';
import bg from '../../assets/image/500332575.png';

export default function () {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style['content-wrap']}>
        <div className={style['left']}>
          <div className={style['content']}>
            <h1>
              数字化营销报告
            </h1>
            <h3>2017/06/12</h3>
          </div>
        </div>
        <div className={style['right-top']}>
          <div className={style['content']}>
            <h1>
              数字化营销报告
        </h1>
            <h3>2017/06/12</h3>
          </div>
        </div>
        <div className={style['right-bottom-left']}>
          <div className={style['content']}>
            <h1>
              数字化营销报告
        </h1>
            <h3>2017/06/12</h3>
          </div>
        </div>
        <div className={style['right-bottom-right']}>
          <div className={style['content']}>
            <h1>
              数字化营销报告
        </h1>
            <h3>2017/06/12</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
