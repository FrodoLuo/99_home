import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import styles from './IndexPage.css';

import Footer from '../components/jiu-footer/jiu-footer';
import Header from '../components/jiu-header/jiu-header';

function IndexPage() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        content
      </Layout.Content>
      <Footer />
    </Layout>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
