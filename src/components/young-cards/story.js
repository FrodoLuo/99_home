import React from 'react';
import { connect } from 'dva';

import Button from '../button/button';

import commonStyle from './common-style.less';
import style from './story.less';
import bg from '../../assets/image/youth/y_07.jpg';

import driven from '../../assets/svg/driven.svg';
import hat from '../../assets/svg/hat.svg';

import ly from '../../assets/image/youth_story/ly.jpg';
import wbw from '../../assets/image/youth_story/wbw.jpg';
import pyb from '../../assets/image/youth_story/pyb.jpg';
import yyh from '../../assets/image/youth_story/yyh.jpg';

import { luoYang, yinYuHua, wangBangWei } from '../../assets/article';

class Story extends React.Component {
  state = {
    currentIndex: 0,
    storys: [
      {
        name: '罗杨',
        occupation: 'HRT & EO部门Head',
        image: ly,
        tag: '团队核心',
        story: '从时代的诉求思考问题的习惯、为无数灵感落地的努力，以及无法被解释的好奇心',
        article: luoYang,
      }, {
        name: '潘毅斌',
        occupation: '管理团队，思维培训部Member',
        image: pyb,
        tag: '职场老司机',
        story: '好奇心猎手 学术小混混 中度中二病患者 思维海军陆战队',
      }, {
        name: '尹钰华',
        occupation: '商业项目PTA',
        image: yyh,
        tag: '业务精英',
        story: '成就感Max、冒险挑战、独创性',
        article: yinYuHua,
      }, {
        name: '汪邦威',
        occupation: '管理团队，企业运营部Member',
        image: wbw,
        tag: '业务精英',
        story: '成就感Max、冒险挑战、独创性',
        article: wangBangWei,
      },
    ],
  }
  switchTo = (index) => {
    this.setState({
      currentIndex: index,
    });
  }
  showArticle = () => {
    console.log('a');
    this.props.dispatch({
      type: 'article/setContent',
      payload: this.state.storys[this.state.currentIndex].article,
    });
  }
  render() {
    const item = this.state.storys[this.state.currentIndex];
    const matrix = [[1, 2, 3], [0, 2, 3], [0, 1, 3], [0, 1, 2]];
    const m = matrix[this.state.currentIndex];
    return (
      <div
        className={commonStyle['card-wrap']}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style['content-wrap']}>
          <div className={style['photo-wrap']}>
            <div className={style['current-photo-wrap']}>
              <img src={item.image} role="presentation" />
            </div>
            <div className={style['photo-list-wrap']}>
              <span
                className={style['photo-list-item']}
                onClick={() => { this.switchTo(m[0]); }}
              >
                <img src={this.state.storys[m[0]].image} role="presentation" />
              </span>
              <span
                className={style['photo-list-item']}
                onClick={() => { this.switchTo(m[1]); }}
              >
                <img src={this.state.storys[m[1]].image} role="presentation" />
              </span>
              <span
                className={style['photo-list-item']}
                onClick={() => { this.switchTo(m[2]); }}
              >
                <img src={this.state.storys[m[2]].image} role="presentation" />
              </span>
            </div>
          </div>
          <div className={style['intro-wrap']}>
            <div className={style['intro']}>
              <div className={style['identity']}>
                <span><h1>{item.name}</h1></span><span className={style['occupation']}>{item.occupation}</span>
              </div>
              <div className={style['identity-icon']}>
                <div className={style['img-wrap']}>
                  <img src={driven} role="presentation" />
                </div>
                <div className={style['hat-wrap']}>
                  <div className={style['img-wrap']}>
                    <img src={hat} role="presentation" />
                  </div>
                  <span>{this.state.storys[this.state.currentIndex].tag}</span>
                </div>
              </div>
              <div className={style['intro-phrase']}>
                <p>{item.story}</p>
              </div>
              <Button
                style={{ transform: 'scale(0.8)', left: '-20px' }}
                color="black"
                text="了解更多"
                onClick={this.showArticle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Story);
