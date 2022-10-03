import Header from "./src/components/Header";
import Notification from "./src/screens/Notifications";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import Welcome from "./src/screens/Welcome";

export default function App() {
  const [Load, setLoad] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    },5000)
  },[])

  if(Load){
    return(<Welcome/>)
  }
  
  return (
    <>
    <Header />
    <Notification />
    <Navigation />
    </>
    
  )
    
}
