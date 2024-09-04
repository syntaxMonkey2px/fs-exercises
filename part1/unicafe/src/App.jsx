import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const handleGoodClick = () =>{
    console.log('good click working')

    return(
      setGood( good + 1 ),
      setAll(all + 1)
    )
    
  }

  const handleNeutralClick = () =>{
    console.log('neutral click working')

    return(
      setNeutral(neutral+1),
      setAll(all + 1)
    )

  }

  const handleBadClick = () =>{
    console.log('bad click working')
    return(
      setBad(bad+1),
      setAll(all + 1)
    )

  }

  const StatisticLine = ({text, value}) =>{
    console.log('stat lines are working')
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }


    const Statistics = (props) =>{
        console.log('stat is working')

        if (all == 0) {
          console.log('no feedback')
          return(
            <p>no feedback given</p>
          )
        }else{

        return(
        <table>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={(all / 3).toFixed(2)}/>
          <StatisticLine text="positive" value={`${(good / all * 100).toFixed(2)}%`} />

          {/* <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{all / 3}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{good / all * 100}% </td>
          </tr> */}
        </table>
          )
        }
  }

  const Button = ({handleClick, text}) =>{
    return(
    <button onClick={handleClick}> {text} </button>
    )
  }

  console.log('clicks working')

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good"/> 
      <Button handleClick={handleNeutralClick} text="Neutral"/> 
      <Button handleClick={handleBadClick} text="Bad"/>
      <h2>statistics</h2>
      <Statistics />
    </div>
  )
}


export default App