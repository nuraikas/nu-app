import React, { useState, useContext } from 'react'
import './styles/Homepage.css';
import { Navigate } from 'react-router-dom'
import { AuthContext } from "../App";

export function HomePage() {
    const { state, dispatch } = useContext(AuthContext);

    const { avatar_url, name, login, email, company, location, bio, html_url} = state.user 
    const [inputData, setInputData] = useState('')

    if (!state.isLoggedIn) {
        return <Navigate replace to="/login" />;
    }

    const changeName = () => {
        name = inputData
        setInputData('')
    }
    const changePlace = () => {
        location = inputData
        setInputData('')
    }
    const changeCompany = () => {
        company = inputData
        setInputData('')
    }

    const changeBio = () => {
        bio = inputData
        setInputData('')
    }

    return (
        <div className='home'>
            <h1>Home</h1>
            <div className='pageBody'>
                <div>
                    <img src={avatar_url} />
                </div>
                <div className='info'>
                    <div className='info_inner'>
                        <h6>Name</h6>
                        <p>{name}</p>
                        <input type="text"  onChange={e => setInputData(e.target.value)}/>
                        <button onClick={changeName}></button>
                    </div>
                    <h6>Login</h6>
                    <p>{login}</p>
                    <h6>Email</h6>
                    <p>{email}</p>
                    <div className='info_inner'>
                        <h6>Company</h6>
                        <p>{company}</p>
                        <input type="text"  onChange={e => setInputData(e.target.value)}/>
                        <button onClick={changeCompany}></button>
                    </div>
                    <div className='info_inner'>
                        <h6>Location</h6>
                        <p>{location}</p>
                        <input type="text"  onChange={e => setInputData(e.target.value)}/>
                        <button onClick={changePlace}></button>
                    </div>
                    <h6>Описание</h6>
                    <p>{bio}</p>
                    <input className='textarea'  onChange={e => setInputData(e.target.value)} type="text" placeholder='Расскажите о себе' />
                    <button onClick={changeBio}></button>
                    <p>{html_url}</p>
                </div>
            </div>
        </div>
    )

}