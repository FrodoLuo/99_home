import React from 'react';
import 'jquery';
import style from './business.less';


export default () => {
  return (
    <div className="card-wrap">
      <div className={style['content-wrap']}>
        <div className={style['content-left-container']}>
          1
        </div>
        <div className={style['content-right-container']}>
          <div className={style['content-right']}>
            <div className={style['insight-wrap']}>
              3
            </div>
          </div>
          <div className={style['content-right']}>
            <div className={style['company-wrap']}>
              <Carousel>
                <div className={style['company']}>
                  网易云
                </div>
                <div className={style['company']}>
                  阿里云
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class Carousel extends React.Component {
  state = {
    currentIdex: 0,
    children: [],
  }
  componentWillMount() {
    const c = [];
    for (const item of this.props.children) {
      c.push(React.cloneElement(item, {
        style: {
          ...item.props.style,
          position: 'absolute',
          left: 0,
          top: 0,
        },
      }));
    }
    this.setState({
      children: c,
    });
  }
  componentDidMount() {
    setInterval(this.next, 1000);
    for (const item of this.state.children) {
      console.log(item);
    }
  }
  componentWillUpdate() {
    window.document.getElementsByClassName(style['company'])[this.state.currentIdex].style.opacity = 0;
    window.document.getElementsByClassName(style['company'])[this.nextIndex(this.state.currentIdex)].style.opacity = 0;
  }
  componentDidUpdate() {
    window.document.getElementsByClassName(style['company'])[this.state.currentIdex].style.opacity = 1;
  }

  next = () => {
    const index = this.state.currentIdex;
    this.setState({
      currentIdex: index === this.state.children.length - 1 ? 0 : index + 1,
    });
  }
  prev = () => {
    const index = this.state.currentIdex;
    this.setState({
      currentIdex: index === 0 ? this.state.children.length - 1 : index - 1,
    });
  }
  nextIndex = (index) => {
    return index === this.state.children.length - 1 ? 0 : index + 1;
  }
  prevIndex = (index) => {
    return index === 0 ? this.state.children.length - 1 : index - 1;
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
          {this.state.children}
        </div>
      </div>
    );
  }
}
