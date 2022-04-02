import React, { useState, useEffect} from 'react'
import './styles/Users.css'

export function Users() {
    const [userInput, setUserInput] = useState('')
    const [user, setUser] = useState([])
    const [count, setCount] = useState('')
    
    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    async function fetchData () {
        let result = await fetch(`https://api.github.com/search/users/q=${userInput}`)
    }

    useEffect(() => {
        fetchData()
        .then(res=>res.json())
        .then(data=> {
            setUser(data.items)
            setCount(data.total_count)
        })
    }, [userInput])

    return (
        <div className='home'>
        <h1>Users</h1>
        <div className='search'>
            <input type="search" placeholder='Search' onChange={handleSearch}/>
        </div>
        
        <p>Количество пользователей {count}</p>
        {user ? 
        (<ul>
            {user.map(e => {
                return (
                <li key={e.id}>
                    <a href={e.html_url+'?tab=repositories'}>{e.login}</a>
                </li>
                )
            })}
        </ul>) : (null)}
        </div>
    )
}

export default Users;