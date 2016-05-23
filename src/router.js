import React from 'react';
import Router from 'ampersand-router';
import Public from './public';
import Repos from './repos';
import Layout from './layout.js';
import qs from 'qs';
import xhr from 'xhr';
import app from 'ampersand-app';
import RepoDetail from './repo-detail.js';

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if(opts.layout) {
      page = (
        <Layout me={app.me}>
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
    'logout': 'logout',
    'auth/callback?:query': 'authCallback',
    'repo/:owner/:name': 'repoDetail'
  },
  public() {
    this.renderPage(<Public />, {layout: false});
    console.log('public');
  },
  repos() {
    this.renderPage(<Repos repos={app.me.repos} />)
    console.log('repos');
  },
  login() {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '2876002badfff69aa3f7',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    })
  },
  logout() {
    window.localStorage.clear();
    window.location = '/';
  },
  repoDetail(owner, name) {
    const model = app.me.repos.getByFullName(owner + '/' + name);
    this.renderPage(<RepoDetail repo={model}/>)
  },
  authCallback(query) {
    query = qs.parse(query);

    xhr({
      url: 'https://masters-react.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err,req,body) => {
      console.log(body);
      app.me.token = body.token;
      this.redirectTo('/repos');
    })
  }
})