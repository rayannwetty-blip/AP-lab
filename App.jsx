const Header = ({ course }) => {
    return <h1>{course}</h1>
}

const Part = ({ part, exercises }) => {
    return (
        <p>
            {part} : {exercises}
        </p>
    )
}

const Content = ({
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3
}) => {
    return (
        <div>
            <Part part={part1} exercises={exercises1} />
            <Part part={part2} exercises={exercises2} />
            <Part part={part3} exercises={exercises3} />
        </div>
    )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
    return (
        <h3>
            Total Exercises:
            {exercises1 + exercises2 + exercises3}
        </h3>
    )
}

/* Bonus Component */
const StudentCard = ({ name, major, gpa }) => {
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                width: "250px"
            }}
        >
            <h2>{name}</h2>
            <p>Major: {major}</p>
            <p>GPA: {gpa}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack Development'

    const part1 = 'React Basics'
    const exercises1 = 10

    const part2 = 'Using Props'
    const exercises2 = 7

    const part3 = 'Component State'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />

            <Content
                part1={part1}
                exercises1={exercises1}
                part2={part2}
                exercises2={exercises2}
                part3={part3}
                exercises3={exercises3}
            />

            <Total
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3}
            />

            <hr />

            <h1>Students</h1>

            <StudentCard
                name="Rayan"
                major="Software Engineering"
                gpa={3.8}
            />

            <StudentCard
                name="Sara"
                major="Artificial Intelligence"
                gpa={3.6}
            />

            <StudentCard
                name="Ahmad"
                major="Computer Science"
                gpa={3.2}
            />
        </div>
    )
}

export default App