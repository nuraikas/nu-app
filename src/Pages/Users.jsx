import React, { useState, useEffect} from 'react'
import './styles/Users.css'

export function Users() {
    const [userInput, setUserInput] = useState('/')
    const [user, setUser] = useState([])
    const [count, setCount] = useState('')
    
    //https://api.github.com/search/users?q=abc
    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    useEffect(() => {
        fetch('https://api.github.com/search/users?q=' + userInput)
        .then(res=>res.json())
        .then(data=> {
            setUser(data.items)
            setCount(data.total_count) 
            console.log(data.items);       
        })        
    }, [userInput])


    return (
        <div className='home'>
        <h1>Users</h1>
        <div className='search'>
            <input type="search" placeholder='Search' onChange={handleSearch}/>
            <div className='btnContainer'>
                <button></button>
            </div>
        </div>
        
        <p>Количество пользователей {count}</p>
        <ul>
            {user.map(e => {
                return (
                <li key={e.id}>
                    <a href={e.html_url+'?tab=repositories'}>{e.login}</a>
                </li>
                )
            })}
        </ul>
        </div>
    )
}

export default Users;