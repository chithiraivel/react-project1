import React from 'react'
import Profile1 from '../Profile1/Profile1'
const Header = (props) => {
    // const obj={name:'react111',feature:'props11'};
  return (
    <div>Header {props.obj.feature} <Profile1 obj={props.obj}/></div>
  )
}

export default Header