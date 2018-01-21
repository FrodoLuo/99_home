import React from 'react';
import style from './simple-tab.less';

export default class extends React.Component {
  state = {
    currentIndex: 0,
  }
  switchTo = (index) => {
    this.setState({
      currentIndex: index,
    });
  }
  renderTitle = () => {
    const titles = [];
    for (const item of this.props.data) {
      const index = titles.length;
      titles.push(
        <span
          key={item.title}
          onClick={() => {
            this.switchTo(index);
          }}
          className={titles.length === this.state.currentIndex ? style['active-title'] : style['title']}
        >
          {item.title}
        </span>,
      );
    }
    return titles;
  }
  renderContent = () => {
    const list = [];
    for (const item of this.props.data) {
      list.push(
        <div
          className={list.length === this.state.currentIndex ? style['child-wrap-active'] : style['child-wrap']}
          key={item.title}
        >
          {item.content}
        </div>,
      );
    }
    return list;
  }
  render() {
    return (
      <div className={style['wrap']} style={this.props.style}>
        <div className={style['title-wrap']}>
          {this.renderTitle()}
        </div>
        {this.renderContent()}
      </div>
    );
  }
}
