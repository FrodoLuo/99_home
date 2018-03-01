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
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    from: 0,
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
    const ci = this.state.currentIndex;
    this.setState({
      from: this.state[index],
      [index]: 0,
      [this.state.currentIndex]: this.state[index],
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
    const photoStyle = ['item0', 'item1', 'item2', 'item3'];
    const fromStyle = [{}, { left: 0 }, { left: 0, right: 0, margin: 'auto' }, { right: 0 }];
    return (
      <div
        className={commonStyle['card-wrap']}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className={style['content-wrap']}>
          <div className={style['photo-wrap']}>
            <span
              className={this.state[0] === 0 ? style['photo-list-item-active'] : style[photoStyle[this.state[0]]]}
              style={this.state[0] === 0 ? fromStyle[this.state.from] : null}
              onClick={() => { this.switchTo(0); }}
            >
              <img src={this.state.storys[0].image} role="presentation" />
            </span>
            <span
              className={this.state[1] === 0 ? style['photo-list-item-active'] : style[photoStyle[this.state[1]]]}
              style={this.state[1] === 0 ? fromStyle[this.state.from] : null}
              onClick={() => { this.switchTo(1); }}
            >
              <img src={this.state.storys[1].image} role="presentation" />
            </span>
            <span
              className={this.state[2] === 0 ? style['photo-list-item-active'] : style[photoStyle[this.state[2]]]}
              style={this.state[2] === 0 ? fromStyle[this.state.from] : null}
              onClick={() => { this.switchTo(2); }}
            >
              <img src={this.state.storys[2].image} role="presentation" />
            </span>
            <span
              className={this.state[3] === 0 ? style['photo-list-item-active'] : style[photoStyle[this.state[3]]]}
              style={this.state[3] === 0 ? fromStyle[this.state.from] : null}
              onClick={() => { this.switchTo(3); }}
            >
              <img src={this.state.storys[3].image} role="presentation" />
            </span>
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
                style={{ transform: 'scale(0.8)', left: '-2rem', fontSize: '1.4rem' }}
                text="了解更多"
                dark
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
