import React from 'react';
import { connect } from 'dva';

import { openThoughtBase, openThoughtPro } from '../../assets/article';
import commonStyle from './common-style.less';
import style from './thinking-value.less';
import bg from '../../assets/image/youth/y_06.jpg';
import Button from '../button/button';

import posterBg from '../../assets/image/poster.png';

function tv(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style['content-wrap']}>
        <div className={style['text-intro-wrap']}>
          <h1>思维训练系列课程</h1>
          <p>
            无论在什么场景中，思维能力都是产出结果的决定性因素。
            通过开放和展现商业现象及背后思考，让将要进入职场或身处职场的你获得商业思维的提升。
            我们不止为你提供优质的商业信息和知识，同时让你习得把知识和信息内化为思维体系的能力，
            使你成长为职场中最具影响力和说服力的问题思考者和解决者。
            还原真实商业世界，呈现幕后商业思考。
          </p>
        </div>
        <div className={style['poster-container']}>
          <div
            className={style['poster-wrap']}
            style={{ backgroundImage: `url(${posterBg})` }}
          >
            <div className={style['poster-intro-wrap']}>
              <p>
                为你呈现隐藏在幕后的优质思考全过程，从而让你了解并习得思维的激发、产生与展现，提升你的“思维竞争力”
              </p>
            </div>
            <div className={style['poster-title-wrap']}>
              <h1>“开放思维”平台课</h1>
            </div>
            <div className={style['button']}>
              <Button
                onClick={() => {
                  props.dispatch({
                    type: 'article/setContent',
                    payload: openThoughtBase,
                  });
                }}
                colorful text={'了解更多'} backgroundColor="#00b3ee"
              />
            </div>
          </div>
          <div
            className={style['poster-wrap']}
            style={{ backgroundImage: `url(${posterBg})` }}
          >
            <div className={style['poster-intro-wrap']}>
              <p>
                在压力训练环境下，实时参与、观察优质商业问题的思考和解决，了解不同行业思考问题的多元角度，提升你的“思维爆发力”。
              </p>
            </div>
            <div className={style['poster-title-wrap']}>
              <h1>“开放思维”进阶课</h1>
            </div>
            <div className={style['button']}>
              <Button
                onClick={() => {
                  props.dispatch({
                    type: 'article/setContent',
                    payload: openThoughtPro,
                  });
                }}
                colorful text={'了解更多'} backgroundColor="#00b3ee"
              />
            </div>
          </div>
        </div>
      </div>
    </ div>
  );
}
export default connect()(tv);
