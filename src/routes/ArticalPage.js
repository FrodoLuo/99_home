import React from 'react';
import { Layout } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import style from './ArticalPage.less';


class ArticalPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content className={style['main-content']}>
          div
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
export default ArticalPage;
