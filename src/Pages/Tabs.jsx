import { useState, useEffect,useContext } from "react";
import "./styles/Tabs.css";
import { AuthContext } from "../App";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [reposes, setReposes] = useState([]);
  const [reposesPrivate, setReposesPrivate] = useState([]);
  const { state, dispatch } = useContext(AuthContext);
  const {name} = state.user;


  async function fetchReposPrivate(){
    const headers = {
      "Authorization" : `Token ${process.env.PERSONAL_ACCESS_TOKEN}`
    }
    const url = `https://api.github.com/user/repos?q=type:private`
    const response = await fetch(url, {
      "method": "GET",
      "headers" : headers
    })
    const result = await response.json()
    console.log(result);
    setReposesPrivate(result)
  }
    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(res=>res.json())
        .then(data=> {
          fetch(data.repos_url)
          .then(res=>res.json())
          .then(data => {
              setReposes(data)
          })
        })
        fetchReposPrivate()
    }, []);

    useEffect(() => {
        
    }, [])

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Public
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Private
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <ul>
              {reposes.map(e => {
                return (
                  <div className="list_item">
                    <li><b>{e.name}</b><br/><a href={e.html_url}>{e.html_url}</a></li>
                  </div>
                )
              })}
          </ul>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"} >
          <p>
          <ul>
              {reposesPrivate.map(e => {
                return (
                  <div className="list_item">
                    <li><b>{e.name}</b><br/><a href={e.html_url}>{e.html_url}</a></li>
                  </div>
                )
              })}
          </ul>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Tabs;