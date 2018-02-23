import React from 'react';
import commonStyle from './common-style.less';
import style from './join.less';
import bg from '../../assets/image/youth/y_09.jpg';
import Button from '../button/button';
import logo from '../../assets/image/brain-storm.png';

export default function (props) {
  const caseData = [
    {
      bg,
      intro: `我想找到一个深度接触商业、接触创业内部的平台。
      我想沉下心来获得赋能、并且有相当的试错机会，让我时间自我认知，并不断提升。
      我还是一个学生，无法走出校园，看到各行各业的景观，我想冲破身份、地域、时间、空间的限制，尝试接触未来、接触工作环境的真实操作空间。
      我想体验归属感，想体验被鼓励、鞭策着茁壮成长的充实感。
      `,
      logo,
      title: '青年顾问',
    }, {
      bg,
      intro: `我想找到一个深度接触商业、接触创业内部的平台。
      我想沉下心来获得赋能、并且有相当的试错机会，让我时间自我认知，并不断提升。
      我还是一个学生，无法走出校园，看到各行各业的景观，我想冲破身份、地域、时间、空间的限制，尝试接触未来、接触工作环境的真实操作空间。
      我想体验归属感，想体验被鼓励、鞭策着茁壮成长的充实感。
      `,
      logo,
      title: '青年顾问',
    }, {
      bg,
      intro: `我想找到一个深度接触商业、接触创业内部的平台。
      我想沉下心来获得赋能、并且有相当的试错机会，让我时间自我认知，并不断提升。
      我还是一个学生，无法走出校园，看到各行各业的景观，我想冲破身份、地域、时间、空间的限制，尝试接触未来、接触工作环境的真实操作空间。
      我想体验归属感，想体验被鼓励、鞭策着茁壮成长的充实感。
      `,
      logo,
      title: '青年顾问',
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
          <div className={style['case-content']}>
            <p>
              {item.intro}
            </p>
            <Button style={{ transform: 'scale(0.8)' }} text="了解更多" />
          </div>
          <div className={style['case-logo-mask']}>
            <div>
              <img src={item.logo} role="presentation" />
            </div>
            <div>
              {item.title}
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
