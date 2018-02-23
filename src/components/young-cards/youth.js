import React from 'react';
import commonStyle from './common-style.less';
import SimpleCarousel from './simple-carousel';
import bg from '../../assets/image/youth/y_01.jpg';
import bg2 from '../../assets/image/youth/y_02.jpg';
import bg3 from '../../assets/image/youth/y_03.jpg';
import bg4 from '../../assets/image/youth/y_04.jpg';


import Button from '../button/button';

import style from './youth.less';

export default function (props) {
  return (
    <div
      className={commonStyle['card-wrap']}
    >
      <SimpleCarousel>
        <div className={style['content-card']} background={bg}>
          <div className={style['intro']}>
            <h1>青年顾问</h1>
            <p>
              全职工作外的能量来源与价值输出地。
            作为咨询顾问或行业专家参与咨询项目，自选岗位参与玖久孵化的创业子项目。
            在开放平台中结交精英，获得洞见，输出价值。
            </p>
          </div>
          <Button style={{ transform: 'scale(0.7)', left: '-5%', position: 'relative' }} text="了解更多" />
        </div>
        <div className={style['content-card']} background={bg2}>
          <div className={style['intro']}>
            <h1>企业成员</h1>
            <p>
              作为企业的一员，跳脱出学生视角，从商业实战的角度，与内部成员一起相互配合，参与到企业从0到1的各业务线搭建过程
            </p>
          </div>
          <Button style={{ transform: 'scale(0.7)', left: '-5%', position: 'relative' }} text="了解更多" />
        </div>
        <div className={style['content-card']} background={bg3}>
          <div className={style['intro']}>
            <h1>咨询PTA</h1>
            <p>
              你可能有机会为某BAT开展app受众定性调研，也可能为某大型车企研究消费者行为，还可能为某二手交易app刻画流失用户画
              像……在这里了解商业前沿动态，洞察商业现象背后的隐秘。
            </p>
          </div>
          <Button style={{ transform: 'scale(0.7)', left: '-5%', position: 'relative' }} text="了解更多" />
        </div>
        <div className={style['content-card']} background={bg4}>
          <div className={style['intro']}>
            <h1>思维训练者</h1>
            <p>
              帮你明晰组成经典思维模型的基本元素，让你成为思维模型和工具的主人。让你与优秀思考者一起思考、讨论前沿商业现象，提升
            商业敏感度，培养说服力。我们为你提供理论学习和实践机会，让你的思维落地为现实。
            </p>
          </div>
          <Button style={{ transform: 'scale(0.7)', left: '-5%', position: 'relative' }} text="了解更多" />
        </div>
      </SimpleCarousel>
    </div>
  );
}
