import React, { useState } from 'react'
import './styles/Homepage.css';
import { setLocalStorage, getLocalStorage } from '../store/localStorage';

export function HomePage() {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [bio, setBio] = useState('')
    const [avatar, setAvatar] = useState('')
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')
    const [inputData, setInputData] = useState('')
    const [userInput, setUserInput] = useState('')

        // useEffect(()=>{
    //     fetch(`https://api.github.com/users/example`)
    //     .then(res=>res.json())
    //     .then(data=> {
    //         setData(data);
    //     })
    // }, []);



    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res=>res.json())
        .then(data=> {
            if (data.message){
                setError(data.message)
            }
            else {
                setData(data);
                console.log(data);
            }

        })
        setLocalStorage(userInput)
    }


    const setData= (
        {name, 
        login, 
        email, 
        company, 
        location, 
        bio,
        avatar_url,
        html_url
    }
    ) => {
        setName(name)
        setLogin(login)
        setEmail(email)
        setCompany(company)
        setLocation(location)
        setBio(bio)
        setAvatar(avatar_url)
        setUrl(html_url)
    }

    const changeName = () => {
        setName(inputData)
        setInputData('')
    }
    const changePlace = () => {
        setLocation(inputData)
        setInputData('')
    }
    const changeCompany = () => {
        setCompany(inputData)
        setInputData('')
    }

    const changeBio = () => {
        setBio(inputData)
        setInputData('')
    }

    return (
        <div className='home'>
            <h1>Home</h1>
            <div className='search'>
            <input type="search" placeholder='Введите логин' onChange={handleSearch}/>
            <div className='btnContainer'>
                <button onClick={handleSubmit}></button>
            </div>
        </div>
        {userInput ?  (
            <div className='pageBody'>
                <div>
                    <img src={avatar} />
                </div>
                <div className='info'>
                    <div className='info_inner'>
                        <h6>Name</h6>
                        <p contentEditable="true">{name}</p>
                    </div>
                    <div className='info_inner'>
                        <h6>Login</h6>
                        <p>{login}</p>
                    </div>
                    <div className='info_inner'>
                        <h6>Email</h6>
                        <p>{email}</p>
                    </div>
                    <div className='info_inner'>
                        <h6>Company</h6>
                        <p contentEditable="true">{company}</p>
                    </div>
                    <div className='info_inner'>
                        <h6>Location</h6>
                        <p contentEditable="true">{location}</p>
                    </div>
                    <div className='info_inner'>
                        <h6>Описание</h6>
                        <p>{bio}</p>
                    </div>
                    <input className='textarea'  onChange={e => setInputData(e.target.value)} type="text" placeholder='Расскажите о себе' />
                    <button onClick={changeBio}></button>
                    
                    <p>{url}</p>
                </div>
            </div>
        ) : (<h1>{error}</h1>)}
        </div>
    )

}