import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'Labels',
  getInitialState() {
    const {name, color} = this.props.label
    return {
      name: name,
      color: color 
    }
  },
  showEdit(event) {
    event.preventDefault();
    this.props.label.editing = true;
  },
  dontShowEdit(event) {
    event.preventDefault();
    this.props.label.editing = false;
    this.setState(this.getInitialState())
  },
  clearLabel() {
    // event.preventDefault();
    // this.props.label.destroy({
    //   success: function() {
    //     alert('label removed');
    //   },
    //   error: function() {
    //     alert('There was an error destroying the label');
    //   }
    // })
    alert('label would be removed but this is commented out so i dont edit these.')
  },
  onNameChange(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  },
  onColorChange(event) {
    event.preventDefault();
    this.setState({
      color: event.target.value
    })
  },
  onSubmit(event) {
    event.preventDefault();
    const {label} = this.props
    label.update(this.state);
    label.editing = false;
  },
  render() {
    const {label} = this.props
    let content
    const {color} = this.state 
    const cssColor = '#' + color

    // editing
    if (label.editing) {
      content = ( 
        <form onSubmit={this.onSubmit} className='label'>
        <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
        <input name='name' onChange={this.onNameChange} value={this.state.name}/>
        <input name='color' onChange={this.onColorChange}value={this.state.color}/>
        <button type='submit' className='button button-small'>Save</button>
        <button type='button' className='button button-small button-unstyled' onClick={this.dontShowEdit}>cancel</button>
      </form> )
    } else {
      content = (
        <div className='label'>
          <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span className='octicon octicon-pencil' onClick={this.showEdit}></span>
          <span className='octicon octicon-x' onClick={this.clearLabel}></span>
        </div>
      )
    }
    return (
        <div>{content}</div>
      )
  }
})