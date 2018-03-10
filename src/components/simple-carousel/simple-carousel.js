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
          visibility: index === this.state.currentIndex ? 'visible' : 'hidden',
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
          key={index} className={`${index === this.state.currentIndex ? style['dot-active'] : style['dot']}`}
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
  backgroundRender = () => {
    const backgrounds = [];
    for (const item of this.props.children) {
      backgrounds.push(
        <div
          className={style['background']}
          key={backgrounds.length}
          style={{
            backgroundImage: `url(${item.props['data-background']})`,
            clip: backgrounds.length <= this.state.currentIndex ? 'rect(auto auto auto 0vw)' : 'rect(auto auto auto 100vw)',
          }}
        />,
      );
    }
    return backgrounds;
  }
  render() {
    const children = [];
    for (const item of this.props.children) {
      children.push(this.childRender(item, children.length));
    }
    return (
      <div className={style['whole-wrap']}>
        <div className={style['carousel-wrap']}>
          <div className={style['children-wrap']}>
            {children}
          </div>
          <div className={style['dots-wrap']}>
            {this.dotsRender()}
          </div>
        </div>
        <div className={style['background-wrap']}>
          {this.backgroundRender()}
        </div>
      </div>
    );
  }
}
