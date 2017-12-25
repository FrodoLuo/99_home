import React from 'react';
import { Icon } from 'antd';
import style from './business.less';
import Carousel from '../carousel';

import companies from './companies';

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
              <Carousel
                arrows
              >
                <div className={style['company']} style={{ backgroundColor: '#00a1d6' }}>
                  <a>
                    <img src={companies.bilibili} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a>
                    <img src={companies.aliyun} role="presentation" />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

