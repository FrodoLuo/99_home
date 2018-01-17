import React from 'react';

import Button from '../button/button';

import commonStyle from './common-style.less';
import style from './story.less';
import bg from '../../assets/image/500473530.jpg';

export default class extends React.Component {
  state = {
    currentIndex: 0,
  }
  render() {
    return (
      <div
        className={commonStyle['card-wrap']}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style['content-wrap']}>
          <div className={style['photo-wrap']}>
            <div className={style['current-photo-wrap']}>
              123
            </div>
            <div className={style['photo-list-wrap']}>
              123
            </div>
          </div>
          <div className={style['intro-wrap']}>
            <div className={style['intro']}>
              <div className={style['identity']}>
                <span><h1>李凡</h1></span><span>市场部实习生</span>
              </div>
              <div className={style['identity-icon']}>
                place holder
              </div>
              <div className={style['intro-phrase']}>
                <p>blablablabalbalbalbalbalbalbalbalbalabla</p>
              </div>
              <div className={style['button-wrap']}>
                <Button text="了解更多" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
