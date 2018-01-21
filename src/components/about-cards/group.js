import React from 'react';

import commonStyle from './common-style.less';
import style from './group.less';
import bg from '../../assets/image/500553231.png';

import SimpleTab from '../simple-tab/simple-tab';

export default function () {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <SimpleTab
        style={{
          height: '55%',
          width: '70%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto',
        }}
        data={[
          {
            title: '咨询团队',
            content: (
              <div className={style['content-wrap']}>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>1</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    项目总监
                  </div>
                  <div className={style['intro']}>
                    <p>
                      blablablablablablablablablablabl
                      ablablablablablablablablablablab
                      lablablablablablabla
                    </p>
                  </div>
                </div>
                <div className={style['divider']}>+</div>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>1</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    项目总监
                  </div>
                  <div className={style['intro']}>
                    <p>
                      blablablablablablablablablablablablablablablablab
                      lablablablablablablablablablablabl
                    </p>
                  </div>
                </div>
                <div className={style['divider']}>+</div>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>1</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    项目总监
                  </div>
                  <div className={style['intro']}>
                    <p>
                      blablablablablablablablablablablablablablablablab
                      lablablablablablablablablablablabl
                    </p>
                  </div>
                </div>
              </div>
            ),
          }, {
            title: '客服团队',
            content: (
              <div className={style['content-wrap']}>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>1</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    项目总监
                  </div>
                  <div className={style['intro']}>
                    <p>
                      blablablablablablablablablablabla
                      blablablablablablablablablablablab
                      lablablablablabla
                    </p>
                  </div>
                </div>
                <div className={style['divider']}>+</div>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>1</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    项目总监
                  </div>
                  <div className={style['intro']}>
                    <p>
                      blablablablablablablablablablablablablablablablab
                      lablablablablablablablablablablabl
                    </p>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
