import React from 'react';
import style from './focus.less';
import Carousel from '../carousel/carousel';
import leftbg from '../../assets/image/500241064.png';
import rightbg from '../../assets/image/50032123.png';
import avatar from '../../assets/image/avatar.png';
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
              <p>变革学生参与商业实践的方式<br />培养学生洞察及解决问题的能力</p>
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
                arrows
              >
                <div className={style['intro-people']}>
                  {/* <img src={avatar} role="presentation" /> */}
                  <h3>
                    <span>李凡</span><span>中央财经大学</span>
                  </h3>
                  <h2>
                    &quot;玖久让我走上非凡之路&quot;
                </h2>
                </div>
                <div className={style['intro-people']}>
                  <h3>
                    <span>李凡</span><span>中央财经大学</span>
                  </h3>
                  <h2>
                    &quot;玖久让我走上非凡之路&quot;
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
