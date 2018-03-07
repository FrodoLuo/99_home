import React from 'react';

import commonStyle from './common-style.less';
import style from './group.less';
import bg from '../../assets/image/about/a_06.jpg';

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
          height: '45%',
          width: '65%',
          left: 0,
          right: 0,
          top: '5%',
          bottom: 0,
          margin: 'auto',
        }}
        titleStyle={{
          fontSize: '2rem',
          width: '50%',
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
                    玖久顾问
                  </div>
                  <div className={style['intro']}>
                    <p>
                      负责前期沟通需求，并为最终的建议和解决方案负责
                    </p>
                  </div>
                </div>
                <div className={style['divider']}>+</div>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>2</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    行业专家
                  </div>
                  <div className={style['intro']}>
                    <p>
                      与玖久亲密合作的行业专家，确保玖久对商业的理解和洞察行之有效
                    </p>
                  </div>
                </div>
                <div className={style['divider']}>+</div>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>5</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    学生顾问
                  </div>
                  <div className={style['intro']}>
                    <p>
                      位于全国各大高校，经过玖久商业培训和项目历练，拥有熟练的研究和调研能力
                    </p>
                  </div>
                </div>
              </div>
            ),
          }, {
            title: <div style={{ opacity: 0, pointerEvents: 'none' }}>1</div>,
            content: null,
          }, {
            title: '管理团队',
            content: (
              <div className={style['content-wrap']}>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>6</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    企业精英
                  </div>
                  <div className={style['intro']}>
                    <p>
                      由有知名咨询/互联网公司（如尼尔森/网易/欧莱雅/京东等）工作背景的企业精英组成
                    </p>
                  </div>
                </div>
                <div className={style['divider']}>+</div>
                <div className={style['content-single']}>
                  <div className={style['circle']}>
                    <span className={style['num']}>20</span><span className={style['count']}>人</span>
                  </div>
                  <div className={style['occupation']}>
                    学生青年领袖
                  </div>
                  <div className={style['intro']}>
                    <p>
                      由来自全国知名学府（如北大/南大/港中文/台大...），拥有创业、文化交流、青年实践活动等多元经历的学生领袖组成
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
