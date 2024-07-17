
import Students from './Students'

function App() {
  const students = [
    {name: 'Emeka Okafor', age: 35, isStudent: false},
    {name: 'Aminat Aminu', age: 24, isStudent: true},
  ]

  return (
    <>
      {
        students.map((student, index) => (
          <Students key={index} name={student.name} age={student.age} isStudent={student.isStudent}/>
        ))
      }
      
    </>
  )
}

export default App
