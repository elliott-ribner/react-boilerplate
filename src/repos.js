import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  render() {
    const {repos} = this.props
    return (
        <div className='container'>
          <h1>Repos</h1>
          <ul>
          {repos.map((repo) => {
            return (<li key={repo.id}><a href={repo.html_url}>{repo.full_name}</a></li>)
          })}
          </ul>
        </div>
      )
  }
})