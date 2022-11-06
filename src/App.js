import { useEffect, useState } from "react";
import "./styles.css";

const App = ()=> {
  const[attr,setAttr] = useState(0)

  useEffect(()=>{
    console.log("A");    
  })
  useEffect(()=>{
    console.log("B");    
  },[])
  useEffect(()=>{
    console.log("C");    
  },[attr])
  return (
    <div className="App">
      <button onClick={()=> setAttr(attr+1)}> Click </button>
    </div>
  );
}
export default App;