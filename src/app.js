import Router from './router';
import Styles from './styles/styles.styl'
import app from 'ampersand-app' // using signleton pattern as referenced here https://github.com/AmpersandJS/ampersand-app

window.app = app // optional -- adding app to window so we can work with it in console for convenience

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start();
  }
})

app.init();