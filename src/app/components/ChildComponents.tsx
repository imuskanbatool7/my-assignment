

import ParentComponent from "./ParentComponent"

const ChildComponents = (props:any) => {
    console.log(props)
  return (
    
    
    <div className="text-center text-2xl pt-10  pl-10  bg-purple-100 min-h-screen font-bold font-serif border-2 border-purple-200 sm:text-2xl md:text-3xl lg:text-4xl ">
      <div className="p-6 m-4 bg-slate-50 inline-block bg-gradient-to-r from-teal-400 via-purple-300 to-blue-200 rounded-lg">
      <h1 > Name: {props.name}</h1>
      <br />
      <h1> Age:  {props.age}</h1>
      <br />
      <h1> Favorite Color: {props.favcolor}</h1>
    </div>
    </div>
  )
}

export default ChildComponents
