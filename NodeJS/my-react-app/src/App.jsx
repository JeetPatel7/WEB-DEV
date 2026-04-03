
// import Header from "./Header";
// function App()
// {
//   const name = "Jeet";
//   return(
    
//     <div>
//       <Header/>
//       <h1>HEllO {name}</h1>
//       <p>THis is our first react app</p>
//     </div>
//   );

// }
// export default App;

function App()
{
  return<Welcome name = "Jeet" age={20}/>;
}

function Welcome(props){
  return <h1>Hello {props.name} : {props.age}</h1>;
}

export default App;



// function App()
// {
//   return(
//     <div>
//       <Student name = "Jeet" course = "CS" marks = {98}/>
//       <Student name = "Meet" course = "CS" marks = {12}/>

//     </div>
//   );
// }

// function Student(props)
// {
//   return(
//     <div>
//     <h2>Name : {props.name}</h2>
//     <p>course : {props.course}</p>
//     <p>marks : {props.marks}</p>
//     </div>
//   );
// }

// export default App;




// function App()
// {
//   return(
//     <div>
//       <Greeting name = "Jeet/Urvil"/>
//     </div>
//   );
// }

// function Greeting(props)
// {
//   return(
//     <div>
//       <h2>Hello {props.name}</h2>
//     </div>
//   );
// }



// export default App;



// import Car from "./Car";

// function App()
// {
//   return(
//     <>
//       {/* <h1>Hello Jeet</h1> */}
//       <Car/>
//     </>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function update() {
//     setCount(count+1);
//   }

//   function dec()
//   {
//     setCount(count-1);
//   }
  
//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={update}>Increase Count</button> <br/><br/>
//       <button onClick={dec}>decrease count</button>
//     </>
//   );
// }

// export default App;




// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   function update(e) {
//     setName(e.target.value);
//   }

//   return (
//     <>
//       <form>
//         <label>Name : </label>
//         <input type="text" value={name} onChange={update} />
//         <p>Current name : {name}</p>
//       </form>
//     </>
//   );
// }

// export default App;
