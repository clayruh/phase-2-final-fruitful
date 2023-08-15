import {useState, useEffect} from 'react'
import TreeList from './TreeList'

export default function FruitfulPage() {

    const apiKey = 'JBhAMR3I4ALlGzuwHuJ9N7Pv4'
    const requestOptions = {
    headers: {
      'X-App-Token': apiKey
    }
    }
    const [treeArray, setTreeArray] = useState([])

    useEffect( () => {
        fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json', requestOptions)
        .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok')
        }
        return res.json()
        })
        .then(trees => setTreeArray(trees))
        .catch(error => {
        console.error('Fetch error: ', error)
        })
    }, [])


    return (
        <div>
            <TreeList treeArray={treeArray}/>
        </div>
    )
}