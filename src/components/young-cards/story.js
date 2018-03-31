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

import { luoYang, yinYuHua, wangBangWei, panYiBin } from '../../assets/article';
import { luoyang, yinyuhua, wangbangwei, panyibin } from '../../assets/author';
import { special, core, curiosity, handed, leadership, elite, fresher } from '../../assets/labels';


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
        occupation: '玖久创始团队成员',
        author: luoyang,
        image: ly,
        tag: ['独特洞见', '团队核心'],
        labels: [special, core],
        story: `“你是不是有足够的潜力来和我共事？” 这是每一位企业面试官都希望求职者能够向自己说明的问题。
        越来越多的求职者也努力尝试以无数的实习、商赛、交换经历来证明自己解决商业问题的潜力。
        但其实你还有一种可能：把潜力变成事实，告诉他“我的能力，毋庸置疑。”
        `,
        article: luoYang,
      }, {
        name: '潘毅斌',
        occupation: '管理团队，思维培训部Member',
        author: panyibin,
        image: pyb,
        tag: ['好奇心猎手', '职场老司机'],
        labels: [curiosity, handed],
        story: `我来自福建，旅台5年，对台湾问题有迷之执念和思考
        我是文科出身，却喜欢数理分析和建模，是技术流+历史流的双线性选手；
        我喜欢不同层次的思考，以及和不同价值观或知识背景的人嘴炮；还喜欢美食、游泳和重训。
        这样的我，想和你说说“玖久与我”。
        `,
        article: panYiBin,
      }, {
        name: '尹钰华',
        occupation: '人力资源部Leader',
        author: yinyuhua,
        image: yyh,
        tag: ['领导力MAX', '业务精英'],
        labels: [leadership, elite],
        story: (<p>从最开始的浮躁，到学会深入学习、领悟、思考。某一天，发现自己开始陶醉于追求严谨细致系统考量、追求学习生活更加充实立体可感可塑。在行为习惯、任务安排的背后，是逻辑框架层层肢解，重新用更密实的材料、通过更精密的推算、摸索，逐步的拼接、完善。
        <br />#不甘的心 永远在颤动# 可以来到玖久，真好。</p>),
        article: yinYuHua,
      }, {
        name: '汪邦威',
        occupation: '管理团队，企业运营部Member',
        author: wangbangwei,
        image: wbw,
        tag: ['独特洞见', '职场新手'],
        labels: [special, fresher],
        story: '加入玖久是我大学阶段最幸运的事情。在无所适从的成长迷茫期，玖久里面优秀的共事者和玖久基于自身独特定位而产生的高效工作氛围给了我极大的启发。作为成长道路中灯塔一样的存在，玖久于我将永远是一段如数家珍般的经历。',
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
    this.props.dispatch({
      type: 'article/setContentWithAuthor',
      payload: {
        content: this.state.storys[this.state.currentIndex].article,
        author: this.state.storys[this.state.currentIndex].author,
      },
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
                <span className={style['name']}>{item.name}</span><span className={style['occupation']}>{item.occupation}</span>
              </div>
              <div className={style['tags']}>
                <div className={style['tag-wrap']}>
                  <div className={style['img-wrap']}>
                    <img src={this.state.storys[this.state.currentIndex].labels[0]} role="presentation" />
                  </div>
                  <span>{this.state.storys[this.state.currentIndex].tag[0]}</span>
                </div>
                <div className={style['tag-wrap']}>
                  <div className={style['img-wrap']}>
                    <img src={this.state.storys[this.state.currentIndex].labels[1]} role="presentation" />
                  </div>
                  <span>{this.state.storys[this.state.currentIndex].tag[1]}</span>
                </div>
              </div>
              <div className={style['intro-phrase']}>
                <p>{item.story}</p>
              </div>
              <Button
                style={{ transform: 'scale(0.7)', left: '-2rem', fontSize: '1.4rem' }}
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
