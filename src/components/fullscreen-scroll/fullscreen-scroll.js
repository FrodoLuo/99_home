import React from 'react';
import { Icon } from 'antd';
import style from './fullscreen-scroll.less';

class FullScreenScroll extends React.Component {
  state = {
    currentIndex: 2,
    next: true,
    clientHeight: 0,
  }
  componentDidMount() {
    this.header = window.document.getElementById('header');
  }
  data = {
    startX: 0,
    endX: 0,
    startY: 0,
    endY: 0,
  }
  header = null;
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
        next: true,
      });
    }
  }
  scrollPrev = (event) => {
    const index = this.state.currentIndex;
    if (index > 0) {
      event.preventDefault();
      this.setState({
        currentIndex: index - 1,
        next: false,
      });
    }
  }
  wrapChildren = () => {
    const children = [];
    let os = 0;
    if (this.state.currentIndex === this.props.children.length - 1) {
      os = '522px';
    }
    const last = this.state.currentIndex === this.props.children.length - 1;
    // this.headerFade(!last);
    for (const child of this.props.children) {
      const index = children.length;
      const over = children.length < this.state.currentIndex;
      const at = children.length === this.state.currentIndex;
      const below = children.length > this.state.currentIndex;
      const beforeLast = children.length === this.props.children.length - 2;
      const atLast = children.length === this.props.children.length - 1;
      children.push(
        <div
          onWheel={at || beforeLast ? this.handleScroll : null}
          key={children.length}
          style={{
            clip: (at || below) ? 'rect(auto auto 100vh auto)' : (last && beforeLast) ? 'rect(auto auto 100vh auto)' : 'rect(auto auto 0vh auto)',
            zIndex: atLast ? 0 : (this.props.children.length - children.length - 1) * 100,
            bottom: last && beforeLast ? '522px' : 0,
            transitionDelay: at ? '0s' : '0.1s',
          }}
          className={style['child-wrap']}
        >
          {child}
          {beforeLast ? (
            <div
              className={style['masking']}
              style={{
                visibility: last ? 'visible' : 'hidden',
                opacity: last ? 1 : 0,
              }}
            />
          ) : null}
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
  headerFade = (flag) => {
    console.log(this.header);
    // window.document.getElementById('header').style.opacity = flag ? 1 : 0;
    // window.document.getElementById('header').style.visibility = flag ? 'visible' : 'hidden';
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <div
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
