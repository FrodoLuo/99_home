import React from 'react';

import commonStyle from './common-style.less';
import style from './thinking-value.less';
import bg from '../../assets/image/youth/y_06.jpg';
import Button from '../button/button';

import posterBg from '../../assets/image/poster.png';

export default function () {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style['content-wrap']}>
        <div className={style['text-intro-wrap']}>
          <h1>思维训练系列课程</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur
           adipisicing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis
             aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
          </p>
        </div>
        <div className={style['poster-container']}>
          <div
            className={style['poster-wrap']}
            style={{ backgroundImage: `url(${posterBg})` }}
          >
            <div className={style['poster-intro-wrap']}>
              <p>
                我们把组成各种经典思维模型的基本元素称为“元思维”。思维培训课程将会向你展示11种元思维，并让你了解它们是如何帮助你构建属于你自己的思维模型。
              </p>
            </div>
            <div className={style['poster-title-wrap']}>
              <h1>A4纸训练系列课程</h1>
            </div>
            <div className={style['button']}>
              <Button text={'了解更多'} backgroundColor="#00b3ee" />
            </div>
          </div>
          <div
            className={style['poster-wrap']}
            style={{ backgroundImage: `url(${posterBg})` }}
          >
            <div className={style['poster-intro-wrap']}>
              <p>
                我们把组成各种经典思维模型的基本元素称为“元思维”。思维培训课程将会向你展示11种元思维，并让你了解它们是如何帮助你构建属于你自己的思维模型。
              </p>
            </div>
            <div className={style['poster-title-wrap']}>
              <h1>A4纸训练系列课程</h1>
            </div>
            <div className={style['button']}>
              <Button text={'了解更多'} backgroundColor="#00b3ee" />
            </div>
          </div>
        </div>
      </div>
    </ div>
  );
}
