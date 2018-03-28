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
              市场洞察新模式
            </h1>
            <Button onClick={() => { window.location.href = '/enterprise'; }} text="玖久业务" />
          </div>
        </div>
        <div className={style['content-right-container']}>
          <div className={style['content-right']}>
            <div className={style['insight-wrap']}>
              <Carousel
                arrows
              >
                <div className={style['insight']}>
                  <a href="/enterprise?index=2">
                    <h1>
                      玖久洞察<vr />我们对于
                    </h1>
                    <h1>
                      商业的理解
                    </h1>
                    <h2>
                      玖久对商业的理解 01
                    </h2>
                  </a>
                </div>
                <div className={style['insight']}>
                  <a>
                    <h1>
                      玖久洞察|我们对于
                    </h1>
                    <h1>
                      商业的理解
                    </h1>
                    <h2>
                      玖久对商业的理解 01
                    </h2>
                  </a>
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
                  <a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">
                    <div className={style['brand']}>
                      <h2>玖久合作伙伴</h2>
                      <h3>百度</h3>
                    </div>
                    <img src={companies.baidu} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a href="http://www.xiaojukeji.com/index/index" target="_blank" rel="noopener noreferrer">
                    <div className={style['brand']}>
                      <h2>玖久合作伙伴</h2>
                      <h3>滴滴</h3>
                    </div>
                    <img src={companies.didi} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a href="http://www.163.com/" target="_blank" rel="noopener noreferrer">
                    <div className={style['brand']}>
                      <h2>玖久合作伙伴</h2>
                      <h3>网易</h3>
                    </div>
                    <img src={companies.netease} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a href="http://www.nielsen.com/cn/zh.html" target="_blank" rel="noopener noreferrer">
                    <div className={style['brand']}>
                      <h2>玖久合作伙伴</h2>
                      <h3>尼尔森</h3>
                    </div>
                    <img src={companies.nielsen} role="presentation" />
                  </a>
                </div>
                <div className={style['company']} style={{ backgroundColor: '#485ee2' }}>
                  <a href="https://www.58.com" target="_blank" rel="noopener noreferrer">
                    <div className={style['brand']}>
                      <h2>玖久合作伙伴</h2>
                      <h3>58同城</h3>
                    </div>
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

