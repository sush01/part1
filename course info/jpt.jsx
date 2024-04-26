const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a
      href = 'https://github.com/sush01'> Sushila </a>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  const friend = ["John", " Rose"]
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "Sushila" age = {26 + 10} />
      <Hello name = {name} age = {age}/>


      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friend}</p>
      <p>{friend[0]} {friend[1]}</p>
      <Footer/>
    </div>
  )
}

export default App