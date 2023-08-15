import {useEffect} from 'react'
import './App.css';

function App() {

  const apiKey = 'JBhAMR3I4ALlGzuwHuJ9N7Pv4'
  const requestOptions = {
    headers: {
      'X-App-Token': apiKey
    }
  }

  useEffect( () => {
    fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json', requestOptions)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    })
    .then(data => console.log(data))
    .catch(error => {
      console.error('Fetch error: ', error)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
