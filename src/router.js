import React from 'react';
import Router from 'ampersand-router';
import Public from './public';
import Repos from './repos';
import Layout from './layout.js';

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if(opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
        )
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'public',
    'repos': 'repos',
  },
  public() {
    this.renderPage(<Public />, {layout: false});
    console.log('public');
  },
  repos() {
    this.renderPage(<Repos />)
    console.log('repos');
  }
})