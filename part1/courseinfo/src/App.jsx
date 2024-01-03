const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  
  const parts = props.parts.map(a => 
      <Part part={a.name} exercises={a.exercises} key={a.name}/>
    )
  
    return parts
}

const Total = (props) => {
  return (
    <>
    <p>Number of excersises {props.parts.reduce((a,cur) =>  a + cur.exercises,0)}</p>
    </>
  )
  
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App