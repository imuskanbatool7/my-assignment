

import ParentComponent from "./ParentComponent"

const ChildComponents = (pros: any) => {
    console.log(pros)
  return (
    <div className="text-2xl pt-10  pl-10  bg-purple-100 min-h-screen font-semibold fontFamily:&apos;Times New border-4 border-purple-200 sm:text-2xl md:text-3xl lg:text-4xl ">
      <h1 className="border-2 border-white inline-block"> Name: {pros.name}</h1>
      <br />
      <h1 className="border-2 border-white inline-block"> Age:  {pros.age}</h1>
      <br />
      <h1 className="border-2 border-white inline-block"> Favorite Color: {pros.favcolor}</h1>
    </div>
  )
}

export default ChildComponents
