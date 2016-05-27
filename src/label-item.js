import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'Labels',
  toggleEdit() {
    this.props.label.editing = !this.props.label.editing;
  },
  render() {
    const {label} = this.props
    let content
    const cssColor = '#'+ label.color
    // editing
    if (label.editing) {
      content = ( 
        <form className='label'>
        <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
        <input name='name'/>
        <input name='color'/>
        <button type='submit' className='button button-small'>Save</button>
        <button type='button' className='button button-small button-unstyled'>cancel</button>
      </form> )
    } else {
      content = (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span className='octicon octicon-pencil' onClick={this.toggleEdit}></span>
          <span className='octicon octicon-x'></span>
        </div>
      )
    }
    return (
        <div>{content}</div>
      )
  }
})