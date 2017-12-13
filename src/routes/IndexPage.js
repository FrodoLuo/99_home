import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import style from './IndexPage.css';

import Footer from '../components/jiu-footer/jiu-footer';
import Header from '../components/jiu-header/jiu-header';
import Cover from '../components/cover/cover';

function IndexPage() {
  return (
    <Layout style={{ height: '100%', display: 'flex' }}>
      <Header />
      <Layout.Content className={style['main-container']}>
        <Cover />
      </Layout.Content>
      <Footer />
    </Layout>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
