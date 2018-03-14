import React from 'react';
import style from './focus.less';
import Carousel from '../carousel/carousel';
import leftbg from '../../assets/image/500241064.png';
import rightbg from '../../assets/image/index/idols.jpg';
import mask99 from '../../assets/image/index/jiujiu_hug.png';
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
              backgroundColor: '#156db7',
            }}
          >
            <img src={leftbg} alt="" />
            <img
              src={mask99} alt=""
              className={style['mask-99']}
            />
            <div className={style['sub-left-content']}>
              <h1>玖久关注</h1>
              <p>
                变革学生参与商业实践的方式<br />
                培养学生洞察及解决问题的能力
              </p>
              <Button onClick={() => { window.location.href = '/young'; }} text="了解更多" />
            </div>
          </div>
          <div
            className={style['sub-content-wrap']}
          >
            <img src={rightbg} alt="" style={{ opacity: 1 }} />
            {/* <div className={style['line']} /> */}
            <div className={style['sub-right-content']}>
              <Carousel
                dots
                arrows
              >
                <a href="/young?index=3" className={style['intro-people']}>
                  {/* <img src={avatar} role="presentation" /> */}

                  <h2>
                    玖久送给了我一份<br />从学生时代到工作<br />一直能回味的成人礼
                </h2>
                  <h3>
                    <span>罗杨</span> <span>南京大学</span>
                  </h3>
                </a>
                <a href="/young?index=3" className={style['intro-people']}>

                  <h2>
                    在玖久<br />完成社会化的最后一里路
                </h2>
                  <h3>
                    <span>潘毅斌</span> <span>台湾大学</span>
                  </h3>
                </a>
                <a href="/young?index=3" className={style['intro-people']}>

                  <h2>
                    不对可能性说不<br />过无法复制的人生
                </h2>
                  <h3>
                    <span>尹钰华</span> <span>中南大学</span>
                  </h3>
                </a>
                <a href="/young?index=3" className={style['intro-people']}>

                  <h2>
                    玖久让我遇见更好的自己
                </h2>
                  <h3>
                    <span>汪邦威</span> <span>中山大学</span>
                  </h3>
                </a>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
