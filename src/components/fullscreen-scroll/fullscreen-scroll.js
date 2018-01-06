import React from 'react';
import { Icon } from 'antd';
import style from './fullscreen-scroll.less';

class FullScreenScroll extends React.Component {
  state = {
    currentIndex: 2,
  }
  data = {
    startX: 0,
    endX: 0,
    startY: 0,
    endY: 0,
  }
  scrollTo = (index) => {
    let i = index < 0 ? 0 : index;
    i = i >= this.props.children.length ? this.props.children.length - 1 : i;
    console.log(i);
    this.setState({
      currentIndex: i,
    });
  };
  handleScroll = (event) => {
    if (event.deltaY > 0) {
      this.scrollNext(event);
    } else {
      this.scrollPrev(event);
    }
  }
  handleTouchStart = (event) => {
    console.log(event.targetTouches);
  }
  handleTouchEnd = (event) => {
    console.log(event.changedTouches);
  }
  scrollNext = (event) => {
    const index = this.state.currentIndex;
    if (index < this.props.children.length - 1) {
      event.preventDefault();
      this.setState({
        currentIndex: index + 1,
      });
    }
  }
  scrollPrev = (event) => {
    const index = this.state.currentIndex;
    if (index > 0) {
      event.preventDefault();
      this.setState({
        currentIndex: index - 1,
      });
    }
  }
  wrapChildren = () => {
    const children = [];
    for (const child of this.props.children) {
      children.push(
        <div
          key={children.length}
          style={{ bottom: this.state.currentIndex >= children.length ? 0 : '-100%' }}
          className={style['child-wrap']}
        >
          {child}
        </div>,
      );
    }
    return children;
  }
  wrapDot = () => {
    const dots = [];
    for (let i = 0; i < this.props.children.length; i += 1) {
      if (!this.props.children[i].props['data-ignore']) {
        dots.push(
          <div
            key={i}
            className={`${style['dot']} ${i === this.state.currentIndex ? style['active'] : ''}`}
            onClick={() => { this.scrollTo(i); }}
          >
            <div
              className={`${style['dot-ahead']} ${i === this.state.currentIndex ? style['active-dot'] : ''}`}
            >
              <span>{this.props.children[i].props.title || null}</span>
            </div>
          </div>,
        );
      }
    }
    return dots;
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div
          onWheel={this.handleScroll}
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
          className={style['scroll-wrap']}
        >
          {this.wrapChildren()}

        </div>
        <div
          className={style['dots-wrap']}
          style={{ opacity: this.state.currentIndex === this.props.children.length - 1 ? 0 : 1 }}
        >
          {this.wrapDot()}
        </div>
        <div
          className={style['button-wrap']}
          style={{ opacity: this.state.currentIndex === this.props.children.length - 1 ? 0 : 1 }}
        >

          <div className={style['button']}>
            <Icon type="edit" />
          </div>
          <div className={style['button']}>
            <Icon type="scan" />
          </div>
        </div>
      </div>
    );
  }
}
export default FullScreenScroll;
