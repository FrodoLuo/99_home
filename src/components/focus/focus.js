import React from 'react';
import style from './focus.less';
import Carousel from '../carousel/carousel';
import leftbg from '../../assets/image/500241064.png';
import rightbg from '../../assets/image/50032123.png';
// import avatar from '../../assets/image/avatar.png';
import Button from '../button/button';

export default class ForceTo extends React.Component {
  render() {
    return (
      <div className="card-wrap">
        <div className={style['content-wrap']}>
          <div
            className={style['sub-content-wrap']}
            style={{
              backgroundImage: `url(${leftbg})`,
            }}
          >
            <div className={style['sub-left-content']}>
              <h1>玖久关注</h1>
              <p>年轻人的成长</p>
              <Button text="了解更多" />
            </div>
          </div>
          <div
            className={style['sub-content-wrap']}
            style={{
              backgroundImage: `url(${rightbg})`,
            }}
          >
            <div className={style['sub-right-content']}>
              <Carousel
                dots
              >
                <div className={style['intro-people']}>
                  {/* <img src={avatar} role="presentation" /> */}
                  <h3>
                    <span>罗杨</span> <span>南京大学</span>
                  </h3>
                  <h2>
                    玖久送给了我一份从学生时代到工作一直能回味的成人礼
                </h2>
                </div>
                <div className={style['intro-people']}>
                  <h3>
                    <span>潘毅斌</span> <span>台湾大学</span>
                  </h3>
                  <h2>
                    在玖久，完成社会化的最后一里路
                </h2>
                </div>
                <div className={style['intro-people']}>
                  <h3>
                    <span>尹钰华</span> <span>中南大学</span>
                  </h3>
                  <h2>
                    不对可能性说不，过无法复制的人生
                </h2>
                </div>
                <div className={style['intro-people']}>
                  <h3>
                    <span>汪邦威</span> <span>中山大学</span>
                  </h3>
                  <h2>
                    玖久让我遇见更好的自己
                </h2>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
