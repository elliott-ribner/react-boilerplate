import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import LabelItem from './label-item'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'RepoDetail',
  render() {
    const {repo} = this.props
    const {labels} = this.props
    return (
        <div className='container'>
          <h1>{repo.full_name}</h1>
          <p>Labels</p>
          <ul>
          {labels.map((label) => {
            return <LabelItem key={label.name} label={label}/>
          })}
          </ul>
        </div>
      )
  }
})