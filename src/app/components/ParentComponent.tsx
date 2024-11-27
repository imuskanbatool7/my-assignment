
import ChildComponents from './ChildComponents'
import React from 'react'

const ParentComponent = () => {
    let name = "Muskan Batool";
    let age = 21;
    let favcolor = "Teal";
  return (
    <div>
      <ChildComponents name={name} age={age} favcolor={favcolor}/>
    </div>
  )
}

export default ParentComponent
