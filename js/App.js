import React from 'react'
import NavLink from './widgets/NavLink'
import { Link } from 'react-router'
import Toolbar from './widgets/Toolbar'
import TopNav from './widgets/TopNav'
import models from './models/all_models'

export default React.createClass({

  propTypes: {
    params: React.PropTypes.object
  },

  render() {
    var id='', e='';
    if(this.props.params){
      e = this.props.params.entity || ''
    }
    var isNew = window.location.pathname.endsWith('/new/')

    return (
      <div>
        <TopNav>
          <div className="pull-right RightNav">
            <Link to="/todo/list" id="todo" className={e==='todo'?'active':''}> todo</Link> - 
            <Link to="/contact/list" id="contact" className={e==='contact'?'active':''}> contacts</Link> - 
            <Link to="/comics/cards" id="comics" className={e==='comics'?'active':''}> comics</Link>
          </div>
          <h2 className="pull-left">React-Evolutility</h2>
          {models[e] ? (
            <h2 className="pull-left evol-entity">{models[e].title || models[e].label}</h2>
          ):null}

          <div className="clearer"/>
          <Toolbar key="tb" entity={e} params={this.props.params} isNew={isNew}/>
        </TopNav>
        <div className="TopNavComplement"/>
        {this.props.children}
      </div>
    )
  }
})
