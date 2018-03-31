import React from 'react';
import commonStyle from './common-style.less';
import style from './methodology.less';
import bg from '../../assets/image/enterprise/e_02.jpg';
import Button from '../button/button';
import logo from '../../assets/image/brain-storm.png';

export default function () {
  const caseData = [
    {
      bg,
      intro: `
      企业方法论
      `,
      logo,
      title: '创业初期',
    }, {
      bg,
      intro: `
      企业方法论      
      `,
      logo,
      title: '快速增长期',
    }, {
      bg,
      intro: `
      企业方法论
      `,
      logo,
      title: '成熟转型期',
    },
  ];
  const cases = [];
  for (const item of caseData) {
    cases.push(
      <div className={style['case-wrap']}>
        <div
          className={style['case-bg']}
          style={{
            backgroundImage: `url(${item.bg})`,
          }}
        >
          <div className={style['case-logo-mask']}>
            <div className={style['content']}>
              <p className={style['title']}>{item.title}</p>
              <span className={style['intro']}>{item.intro}</span>
            </div>
            <div className={style['btn']}>
              <Button style={{ transform: 'scale(0.5)', height: '5rem', width: '15rem' }} text="详细了解" />
            </div>
          </div>
        </div>
      </div>,
    );
  }
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style['content-wrap']}>
        {cases}
      </div>
    </div>
  );
}
