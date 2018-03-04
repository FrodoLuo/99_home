import React from 'react';
import style from './force-to.less';
import leftbg from '../../assets/image/force-left.png';
import rightbg from '../../assets/image/force-right.png';
import Button from '../button/button';

export default class ForceTo extends React.Component {
  render() {
    return (
      <div className="card-wrap">
        <div className={style['content-wrap']}>
          <div
            className={style['sub-content-wrap']}

          >
            <img className={style['bg-left-img']} src={leftbg} alt="" />
            <div className={style['sub-left-content']}>
              <h2>
                基于连接的未来形态
              </h2>
              <h2>
                助企业洞见未来
              </h2>
              <Button text="了解玖久" color="#ffffff" />
            </div>
          </div>
          <div
            className={style['sub-content-wrap']}
          >
            <img className={style['bg-right-img']} src={rightbg} alt="" />
            <div className={style['sub-right-top']}>
              <h1>
                玖久使命
              </h1>
            </div>
            <div className={style['sub-right-bottom']}>
              <h2>
                我们致力于
              </h2>
              <h2>
                为企业创造价值
              </h2>
              <h2 style={{ marginBottom: '40px' }}>
                为新青年赋能
              </h2>
              <Button dark text="玖久价值观" color="#000000" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
