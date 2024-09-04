const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [ 
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
}


  const Header = (props) => {
    console.log('header is working')
    return (
      <h1>{course.name}</h1>
    )
  }

  const Part = (props) =>{
    return(
      <p>{props.name} : <b>{props.exercise}</b></p>
    )
  }

  const Content = () => {
    console.log('content is passing.')
    return (
      <div>
        <Part name = {course.parts[0].name} exercise = {course.parts[0].exercises} />
        <Part name = {course.parts[1].name} exercise = {course.parts[1].exercises} />
        <Part name = {course.parts[2].name} exercise = {course.parts[2].exercises} />
      </div>
    )
  }

  const Total = () => {
    console.log('total is coming up')
    // const exercisesValue = parts.map(parts => [parts.exercises])
    const totalValue = course.parts.reduce((sum, part)=> sum + part.exercises, 0)
    return(
      
        <h4>Total number of exercises : {totalValue}</h4>
    )
  }
  console.log('the whole thing')

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total />
    </div>
  )
}

export default App