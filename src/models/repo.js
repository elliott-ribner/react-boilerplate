import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import labelCollection from './label-collection'

export default Model.extend(githubMixin, {
  url () {
    return "https://api.github.com/repos/" + this.full_name;
  },
  props: {
    id: 'number',
    name: 'string',
    full_name: 'string',
    html_url: 'string'
  },
  derived: {
    appUrl: {
      deps: ['full_name'],
      fn() {
        return '/repo/' + this.full_name
      }
    }
  },
  collections: {
    labels: labelCollection
  },
  fetch() {
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
  }

})