import * as React from 'react'
import { countries } from 'country-flag-icons'
import * as List from 'country-flag-icons/string/3x2';

const Country = ({code}) => {
const CCode = code || "US"; // passed prop 
return (
  <div className="App">
    {countries.map(c => {
      return c === CCode && (
        <div>
          <pre>{JSON.stringify(c)}</pre>
          <img alt={c}
            src={`//purecatamphetamine.github.io/country-flag-icons/3x2/${c}.svg`} />
        </div>
        )
    })
  }
  </div>
)
}
function App() {
  console.log(List);

  return (
    <div>
      <Country />
      <Country code="RO" />
    </div>
  )
  
}

export default App
