import React from 'react';
import style from './young-and-enterprise.less';
import background1 from '../../assets/image/500553231.png';
import background2 from '../../assets/image/500592072.jpg';
import Button from '../button/button';

export default class NewYounger extends React.Component {
  state = {
    currentIndex: 0,
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentIndex: this.state.currentIndex === 1 ? 0 : this.state.currentIndex + 1,
      });
    }, 5000);
  }
  render() {
    const contents = [
      (<div className={style['content-wrap']}>
        <h1>我是新青年</h1>
        <p>
          突破学生身份的局限试探成长的边界，发现全新的自己
        </p>
        <Button text="了解更多" color="white" />
      </div>
      ),
      (<div className={style['content-wrap']}>
        <h1>我是企业</h1>
        <p>重新定义市场洞察模式提供源源不断的高效决策与创新能量</p>
        <Button text="了解更多" color="white" />
      </div>
      ),
    ];
    const switchers = [];
    for (let i = 0; i < contents.length; i += 1) {
      const index = switchers.length;
      switchers.push(
        <div
          key={index}
          className={`${style['switcher']} ${this.state.currentIndex === i ? style['active'] : ''}`}
          onClick={() => {
            this.setState({
              currentIndex: i,
            });
          }}
        />,
      );
    }
    const src = [background1, background2];
    return (
      <div
        style={{
          backgroundImage: `url(${src[this.state.currentIndex]})`,
        }}
        className="card-wrap"
      >
        <div className={style['switch-bar-wrap']}>
          {switchers}
        </div>
        <div className={style['content-container-wrap']}>
          <div
            className={style['content-container']}
            style={{
              left: (this.state.currentIndex * (-100)).toString().concat('%'),
            }}
          >
            {contents}
          </div>
        </div>
      </div>
    );
  }
}
