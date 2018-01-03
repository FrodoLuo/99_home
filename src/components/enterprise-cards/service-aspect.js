import React from 'react';
import commonStyle from './common-style.less';
import bg from '../../assets/image/500459742.png';

export default function ServiceAspect(props) {
  return (
    <div
      className={commonStyle['card-wrap']}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SimpleCarousel>
        <div>rua</div>
      </SimpleCarousel>
    </div>
  );
}

const carouselStyle = {
  carouselWrap: {
    height: 429,
    width: 769,
    backgroundColor: 'rgba(0, 96, 178, 0.96)',
    position: 'absolute',
    left: '15%',
    top: '30%',
    borderRadius: 24,
  },
  childWrap: {
    height: '100%',
    width: '100%',
    transition: 'all ease 0.4s',
  },
};

class SimpleCarousel extends React.Component {
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
  childRender = (child, index) => {
    return (
      <div
        style={{
          ...carouselStyle.childWrap,
          opacity: index === this.state.currentIndex ? 1 : 0,
          zIndex: index === this.state.currentIndex ? 10000 : 0,
        }}
      >
        {child}
      </div>
    );
  }
  render() {
    return (
      <div style={carouselStyle.carouselWrap}>
        placeholder
      </div>
    );
  }
}
