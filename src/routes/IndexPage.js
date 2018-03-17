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

function IndexPage() {
  return (
    <Layout style={{ display: 'flex' }}>
      <Header fixed />
      <Layout.Content className={style['main-container']}>
        <Cover />
        <div className="card-container">
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

IndexPage.propTypes = {
};

export default connect()(IndexPage);
