import React from 'react';
import style from './simple-carousel.less';

export default class SimpleCarousel extends React.Component {
  state = {
    currentIndex: 0,
  }
  next = () => {
    let index = this.state.currentIndex;
    index = index < this.props.children.length - 1 ? index + 1 : 0;
    this.setState({
      currentIndex: index,
    });
  }
  prev = () => {
    let index = this.state.currentIndex;
    index = index > 0 ? index - 1 : this.props.children.length - 1;
    this.setState({
      currentIndex: index,
    });
  }
  to = (index) => {
    this.setState({
      currentIndex: index,
    });
  }
  childRender = (child, index) => {
    return (
      <div
        className={style['child-wrap']}
        style={{
          opacity: index === this.state.currentIndex ? 1 : 0,
        }}
        key={index}
      >
        {child}
      </div>
    );
  }
  dotsRender = () => {
    const dots = [];
    for (const item of this.props.children) {
      const index = dots.length;
      dots.push(
        <span
          key={index} className={style['dot']}
          onClick={() => {
            this.to(index);
          }}
        >
          0{dots.length + 1}
        </span>,
      );
    }
    return dots;
  }
  render() {
    const children = [];
    for (const item of this.props.children) {
      children.push(this.childRender(item, children.length));
    }
    return (
      <div className={style['carousel-wrap']}>
        <div className={style['children-wrap']}>
          {children}
        </div>
        <div className={style['dots-wrap']}>
          {this.dotsRender()}
        </div>
      </ div>
    );
  }
}
