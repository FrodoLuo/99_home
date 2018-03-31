import React from 'react';
import style from './force-to.less';
import jiujiu from '../../assets/image/index/JIUJIU.png';
import Button from '../button/button';
import jiu9 from '../../assets/image/index/99.png';

export default class ForceTo extends React.Component {
  render() {
    return (
      <div className="card-wrap">
        <div className={style['content-wrap']}>
          <div
            className={style['sub-content-wrap-left']}

          >
            <img className={style['jiujiu']} src={jiujiu} alt="" />
            <div className={style['sub-left-content']}>
              <h2>
                基于连接的未来形态
              </h2>
              <h2>
                助企业洞见未来
              </h2>
              <Button onClick={() => { window.location.href = '/about'; }} text="了解玖久" color="#ffffff" />
            </div>
          </div>
          <div
            className={style['sub-content-wrap-right']}
          >
            <div className={style['sub-right-content']}>
              <img src={jiu9} alt="" style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, margin: 'auto', width: '80%', height: 'auto' }} />
              <div style={{ textAlign: 'center', zIndex: 10 }}>
                <h1>
                玖久使命
              </h1>
                <h2>
                致力于连接商业力量
              </h2>
                <h2>
                为企业创造价值
              </h2>
                <h2 style={{ marginBottom: '40px' }}>
                为新青年赋能
              </h2>
              </div>
              <Button onClick={() => { window.location.href = '/about?index=2'; }} dark text="了解更多" color="#000000" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
