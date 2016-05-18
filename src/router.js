import React from 'react';
import Router from 'ampersand-router';
import Public from './public';
import Repos from './repos';
import Layout from './layout.js';
import qs from 'qs'
import xhr from 'xhr'

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
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },
  public() {
    this.renderPage(<Public />, {layout: false});
    console.log('public');
  },
  repos() {
    this.renderPage(<Repos />)
    console.log('repos');
  },
  login() {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '2876002badfff69aa3f7',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    })
  },
  authCallback(query) {
    query = qs.parse(query);
    console.log(query)

    xhr({
      url: 'https://masters-react.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err,req,body) => {
      console.log(body);
    })
  }
})