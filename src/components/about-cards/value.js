import React from 'react';

import commonStyle from './common-style.less';
import style from './value.less';
import bg from '../../assets/image/about/a_05.jpg';

import Button from '../button/button';
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
          height: '40%',
          width: '50%',
          left: 0,
          right: 0,
          top: '2rem',
          bottom: 0,
          margin: 'auto',
        }}
        index={1}
        data={[
          {
            title: '愿景',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  <ul>
                    <li>
                      未来1-3年，玖久期望通过持续通过连接商业力量（企业、商业人和新青年）的方式构建玖久自身和提供服务
                    </li>
                    <li>
                      对企业，玖久将致力于成长为“企业人力（智力）资源配置解决方案提供商“，为企业提供差异化的人资配置方案，
                    帮助企业在成本可控的情况下，大幅增加深度思考体量，优化流程性思考的人员效率（详情参考玖久企业服务）。
                    </li>
                    <li>
                      玖久认为，商业价值的创造，依托了的两种工作/思考方式——“深度思考”和“流程性思考”。
                    </li>
                    <li>
                      深度思考的企业需求：由于大量深度思考由企业内部员工（中高层）完成，少量/中量由外部专业公司完成，
                      但另一方面企业对深度思考的需求量是无止境的，最大的障碍点是成本（人才=钱），这种缺乏导致了专业思考的本质稀缺。
                    </li>
                    <li>
                      流程性思考的企业需求：由于大多数流程性（基于模板、范式，常规性的）思考由内部员工完成，且不分层级
                      （低层员工流程性思考最多，中高层员工也有一定量的流程化思考），少量由实习生完成，极少量外包。但另
                      一方面企业对流程化思考的需求量是相对稳定的，最大的问题是效率（单位时间、单位成本完成的流程化工作
                      量）问题，目前总体效率偏低（员工抱怨大量的流程化工作，无法把更多时间投入到专业思考中；而因为流程
                      化思考太多，外包会导致成本大幅增加；其次是实习生可用性低，招募成本高）。
                    </li>
                    <li>
                      玖久的发展方式是：在确保有一定深度贡献的情况下，提供极低成本和极高人资灵活性的服务，以及有巨大差
                      异化价值，中等成本的深度思考服务，解决企业对日渐增长的思考量和思考成本的需求。
                    </li>
                    <li>
                      对新青年，玖久将为青年学生提供海量商业实践机会，并同步打造一所面向新青年的商业思维学堂，以前所未
                      有的方式，为新青年提供一系列思维成长课程和思维习得体验，帮助新青年大幅提升独立思考、创造商业价值
                      的未来能力（详情参考玖久思维业务）
                    </li>
                  </ul>
                </p>
                <Button
                  colorful
                  style={{
                    transform: 'scale(0.7)',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    bottom: '-30px',
                  }} text="了解更多"
                />
              </div>
            ),
          }, {
            title: '使命',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  <ul>
                    <li>
                      致力于连接商业力量，为企业创造价值，为青年赋能。
                    </li>
                    <li>
                      在理解和逐步融入企业、商业人和新青年的基础上，玖久通过将多方需求进行连接和匹配，
                    最大限度的调动各方优势，创造新价值。玖久将这种连接和融入的方式称为“结构洞“，且玖久
                    作为”结构洞“的中心，将持续为三方提供最优质的服务，以解决多方的成长和自我实现需求。
                    </li>
                    <li>
                      与此同时，玖久自身也将努力探索这种商业模式下的发展潜力和空间，践行玖久关注事物本质的价值观。
                    </li>
                  </ul>
                </p>
                <Button
                  colorful
                  style={{
                    transform: 'scale(0.7)',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    bottom: '-30px',
                  }} text="了解更多"
                />
              </div>
            ),
          }, {
            title: '价值观',
            content: (
              <div className={style['content-wrap']}>
                <p>
                  致力于引领工业革命和信息革命后的另一次革命: 智慧革命.
                  基于对人类资源和当前社会与商业形态的重新思考.
                  玖久致力于以全新的方式构建商业组织: 建立全新
                  的智慧平台型组织, 高效使用所有可以集中起来的智慧资源
                </p>
                <Button
                  colorful
                  style={{
                    transform: 'scale(0.7)',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    bottom: '-30px',
                  }} text="了解更多"
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
