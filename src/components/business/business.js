import React from 'react';
import style from './business.less';
import Carousel from '../carousel';

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
              <Carousel>
                <div className={style['company']} style={{ backgroundColor: '#456789' }}>
                  网易云
                </div>
                <div className={style['company']} style={{ backgroundColor: '#987654' }}>
                  阿里云
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

