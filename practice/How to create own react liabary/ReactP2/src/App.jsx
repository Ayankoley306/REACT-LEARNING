function Input(){
  const userName='Enter Your Name';
  return(
    <>
    <input
    type="text"
    placeholder={userName}/>
    </>
  );
}



function App() {
  return (
   <Input/>
  )
}

export default App
