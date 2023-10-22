const Course = ({course}) => {

    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
    //console.log(parts)
    //this part should implement a map for each part in parts
  
    return (
      parts.map((part) => {
        return (<Part key={part.id} part={part} />)
      })
    )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total = ({ parts }) => {
    //console.log(course)
  
    const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
    //console.log(totalExercises)
  
    return (
      <p><strong>total of {totalExercises} exercises</strong></p>
    )
}


export default Course
