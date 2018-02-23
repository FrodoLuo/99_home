import React from 'react';
import commonStyle from './common-style.less';
import style from './comment.less';
import bg from '../../assets/image/youth/y_08.jpg';
// import avatar from '../../assets/image/avatar.png';

export default function () {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style['content-wrap']}>
        <div className={style['single-wrap']}>
          <div className={style['avatar-wrap']}>
            {/* <img role="presentation" src={avatar} /> */}
          </div>
          <div className={style['intro-wrap']}>
            <span className={style['name']}>宗世杰</span>
            <span className={style['title']}>高级投资经理</span>
          </div>
          <div className={style['intro']}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className={style['comment']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
          Lorem ipsum dolor sit amet, consectetur adipisicing
          Lorem ipsum dolor sit amet, consectetur adipisicing
          Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
        </div>
        <div className={style['single-wrap']}>
          <div className={style['avatar-wrap']}>
            {/* <img role="presentation" src={avatar} /> */}
          </div>
          <div className={style['intro-wrap']}>
            <span className={style['name']}>宗世杰</span>
            <span className={style['title']}>高级投资经理</span>
          </div>
          <div className={style['intro']}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className={style['comment']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
          Lorem ipsum dolor sit amet, consectetur adipisicing
          Lorem ipsum dolor sit amet, consectetur adipisicing
          Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </ div>
  );
}
