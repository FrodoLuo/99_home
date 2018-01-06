import React from 'react';

import commonStyle from './common-style.less';
import style from './cases.less';

import bg from '../../assets/image/2492010.png';

export default function (props) {
  const cases = [];
  for (const item of props.caseData) {
    console.log(item);
    cases.push(
      <div className={style['case-wrap']}>
        <div
          className={style['case-bg']}
          style={{
            backgroundImage: `url(${item.bg})`,
          }}
        >
          <div className={style['case-title']}>
            {item.title}
          </div>
          <div className={style['case-logo-mask']}>
            <img src={item.logo} role="presentation" />
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
