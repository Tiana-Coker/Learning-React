import Students from './Students'

function App() {
  

  return (
    <>
      <Students name="Damilola Coker" age={"23"} isStudent={true}/>
      <Students name="Segun Olalere" age={42} isStudent={false}/>
      <Students name="Emeka Okafor" age={35} isStudent={false}/>
      <Students name="Aminat Aminu" age={24} isStudent={true}/>
      <Students/>
    </>
  )
}

export default App
