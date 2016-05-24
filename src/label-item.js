import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'Labels',

  render() {
    const {label} = this.props
    return (
        <li>{label.name}</li>
      )
  }
})