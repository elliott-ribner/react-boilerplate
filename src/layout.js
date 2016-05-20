import React from 'react';
import NavHelper from './nav-helper'
import amperSandMixin from 'ampersand-react-mixin'
export default React.createClass({
  mixins: [amperSandMixin],
  displayName: 'Layout',
  render() {
    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Labelr</li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'><a href='/logout'>Logout</a>{this.props.me.login}</li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
      )
  }
})