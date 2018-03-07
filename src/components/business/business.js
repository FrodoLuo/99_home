import React from 'react';
import { Icon } from 'antd';
import style from './business.less';
import Carousel from '../carousel/carousel';
import Button from '../button/button';
import companies from './companies';

export default () => {
  return (
    <div className="card-wrap">
      <div className={style['content-wrap']}>
        <div className={style['content-left-container']}>
          <div className={style['business']}>
            <h1>
              时代呼唤<br />
              市场洞察模式
            </h1>
            <Button text="玖久业务" />
          </div>
        </div>
        <div className={style['content-right-container']}>
          <div className={style['content-right']}>
            <div className={style['insight-wrap']}>
              <Carousel
                arrows
              >
                <div className={style['insight']}>
                  <div>
                    <h1>
                      玖久洞察|我们对于
                    </h1>
                    <h1>
                      商业的理解
                    </h1>
                    <h2>
                      玖久对商业的理解 01
                    </h2>
                  </div>
                </div>
                <div className={style['insight']}>
                  la
                </div>
              </Carousel>
            </div>
          </div>
          <div className={style['content-right']}>
            <div className={style['company-wrap']}>
              <Carousel
                arrows
              >
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a>
                    <img src={companies.baidu} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a>
                    <img src={companies.didi} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a>
                    <img src={companies.netease} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a>
                    <img src={companies.nielsen} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a>
                    <img src={companies.wuba} role="presentation" />
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

