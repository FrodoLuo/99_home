import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import style from './IndexPage.css';
import Article from '../components/artical/artical';
import Footer from '../components/jiu-footer/jiu-footer';
import Header from '../components/jiu-header/jiu-header';
import Cover from '../components/cover/cover';
import YoundAndEnterprise from '../components/young-and-enterprise/young-and-enterprise';
import ForceTo from '../components/force-to/force-to';
import Business from '../components/business/business';
import Focus from '../components/focus/focus';

class IndexPage extends React.Component {
  state = {
    toTop: 0,
    opacity: 0,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
  scrollHandler = () => {
    const scrollY = window.scrollY;
    const clientHeight = (window.document.body.clientHeight) / 1.4;
    let opacity = (scrollY / clientHeight) - 0.2;
    opacity = opacity >= 1 ? 1 : opacity;
    // opacity = opacity <= 0 ? 0 : opacity;
    this.setState({
      opacity,
    });
  };
  render() {
    return (
      <Layout style={{ display: 'flex' }}>
        <Header fixed />
        <Layout.Content className={style['main-container']}>
          <Cover opacity={this.state.opacity} />
          <div style={{ opacity: this.state.opacity }} className={style['gradient']} />
          <div style={{ opacity: this.state.opacity }} className="card-container" id="main-pane">
            <YoundAndEnterprise />
            <ForceTo />
            <Business />
            <Focus />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}


export default connect()(IndexPage);
