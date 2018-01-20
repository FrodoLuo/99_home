import React from 'react';

import Button from '../button/button';

import commonStyle from './common-style.less';
import style from './story.less';
import bg from '../../assets/image/500473530.jpg';

import driven from '../../assets/svg/driven.svg';
import hat from '../../assets/svg/hat.svg';

import photo from '../../assets/image/photo.png';

export default class extends React.Component {
  state = {
    currentIndex: 0,
    storys: [
      {
        name: '李凡',
        occupation: '市场部实习生',
        image: photo,
        tag: '业务精英',
        story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }, {
        name: '李凡',
        occupation: '市场部实习生',
        image: photo,
        tag: '业务精英',
        story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }, {
        name: '李凡',
        occupation: '市场部实习生',
        image: photo,
        tag: '业务精英',
        story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  }
  switchTo = (index) => {
    this.setState({
      currentIndex: index,
    });
  }
  render() {
    const item = this.state.storys[this.state.currentIndex];
    return (
      <div
        className={commonStyle['card-wrap']}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style['content-wrap']}>
          <div className={style['photo-wrap']}>
            <div className={style['current-photo-wrap']}>
              <img src={item.image} role="presentation" />
            </div>
            <div className={style['photo-list-wrap']}>
              <span
                className={style['photo-list-item']}
                onClick={() => { this.switchTo(0); }}
              >
                <img src={this.state.storys[0].image} role="presentation" />
              </span>
              <span
                className={style['photo-list-item']}
                onClick={() => { this.switchTo(1); }}
              >
                <img src={this.state.storys[0].image} role="presentation" />
              </span>
              <span
                className={style['photo-list-item']}
                onClick={() => { this.switchTo(2); }}
              >
                <img src={this.state.storys[0].image} role="presentation" />
              </span>
            </div>
          </div>
          <div className={style['intro-wrap']}>
            <div className={style['intro']}>
              <div className={style['identity']}>
                <span><h1>{item.name}</h1></span><span className={style['occupation']}>{item.occupation}</span>
              </div>
              <div className={style['identity-icon']}>
                <div className={style['img-wrap']}>
                  <img src={driven} role="presentation" />
                </div>
                <div className={style['hat-wrap']}>
                  <div className={style['img-wrap']}>
                    <img src={hat} role="presentation" />
                  </div>
                  <span>行业精英</span>
                </div>
              </div>
              <div className={style['intro-phrase']}>
                <p>{item.story}</p>
              </div>
              <Button style={{ transform: 'scale(0.8)', left: '-20px' }} color="black" text="了解更多" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
