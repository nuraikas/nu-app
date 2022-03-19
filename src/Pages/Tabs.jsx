import { useState, useEffect } from "react";
import "./styles/Tabs.css";
import {getLocalStorage} from '../store/localStorage'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [reposes, setReposes] = useState([]);
  const [storageData, setStorageData] = useState(getLocalStorage())

    useEffect(()=>{
        fetch(`https://api.github.com/users/${storageData}`)
        .then(res=>res.json())
        .then(data=> {
          fetch(data.repos_url)
          .then(res=>res.json())
          .then(data => {
              setReposes(data)
          })
        })
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
            No
          </p>
        </div>

      </div>
    </div>
  );
}

export default Tabs;