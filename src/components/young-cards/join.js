import React from 'react';
import { connect } from 'dva';
import commonStyle from './common-style.less';
import style from './join.less';
import bg from '../../assets/image/youth/y_09.jpg';
import Button from '../button/button';

import join1 from '../../assets/image/youth/join_1.jpg';
import join2 from '../../assets/image/youth/join_2.jpg';
import join3 from '../../assets/image/youth/join_3.jpg';
import join4 from '../../assets/image/youth/join_4.jpg';

import storm from '../../assets/image/storm.png';
import advicer from '../../assets/image/advicer.png';
import market from '../../assets/image/market.png';
import think from '../../assets/image/think.png';


import { join } from '../../assets/article';

function Join(props) {
  const caseData = [
    {
      bg: join1,
      intro: `
      日常而稳定的现有工作难以满足我对能力提升和价值创造的需求，我希望有更大的平台，让我不受限地在商业世界迅速生长。
      `,
      logo: advicer,
      title: '青年顾问',
    }, {
      bg: join2,
      intro: `
      我想找到一个深度接触商业、接触创业内部的平台。<br/>我想沉下心来获得赋能，拥有低成本试错、对标优秀前辈的机会。
      `,
      logo: market,
      title: '企业成员',
    }, {
      bg: join3,
      intro: `
        我想突破地域的局限，在真实的商业环境中寻找适合自己的方向；<br />
        我想短时间了解商业前沿，观察资深咨询顾问如何解决商业问题。
      `,
      logo: think,
      title: '咨询PTA',
    }, {
      bg: join4,
      intro: `
      我想建立系统的思维体系，成为思维模型和工具的主人，运用它们高效解决问题，让困扰不再是困扰，让挑战升级。
      `,
      logo: storm,
      title: '思维训练者',
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
            <p dangerouslySetInnerHTML={{ __html: item.intro }} />
            <Button
              onClick={() => {
                window.location.hash = item.title;
                props.dispatch({
                  type: 'article/setContent',
                  payload: join,
                });
              }} style={{ transform: 'scale(0.8)' }} text="了解更多"
            />
          </div>
          <div className={style['case-logo-mask']}>
            <div className={style['logo-wrapper']}>
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
export default connect()(Join);
