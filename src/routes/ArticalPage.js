import React from 'react';
import { Layout, Icon, Button } from 'antd';
import Header from '../components/jiu-header/jiu-header';
import Footer from '../components/jiu-footer/jiu-footer';
import style from './ArticalPage.less';
import Artical from '../components/artical/artical';
import AuthorIntro from '../components/author-intro/author-intro';

function ArticalPage(props) {
  return (
    <Layout>
      <Header />
      <Layout.Content className={style['main-content']}>
        <Artical path={props.match.params.path} />
        <AuthorIntro />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}
export default ArticalPage;
