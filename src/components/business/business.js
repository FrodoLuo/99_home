import React from 'react';
import { Carousel } from 'antd';
import style from './business.less';


export default () => {
  return (
    <div className="card-wrap">
      <div className={style['content-wrap']}>
        <div className={style['content-left-container']}>
          1
        </div>
        <div className={style['content-right-container']}>
          <div className={style['content-right']}>
            <div className={style['insight-wrap']}>
              3
            </div>
          </div>
          <div className={style['content-right']}>
            <div className={style['company-wrap']}>
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
