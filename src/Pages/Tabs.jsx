import { useState, useEffect } from "react";
import "./styles/Tabs.css";
import {getLocalStorage} from '../store/localStorage'

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [reposes, setReposes] = useState([]);
  const [reposesUrl, setReposesUrl] = useState([]);
  const [reposesName, setReposesName] = useState([]);
  const [reposeUrl, setReposeUrl] = useState('');
  const [storageData, setStorageData] = useState(getLocalStorage())

    useEffect(()=>{
        fetch(`https://api.github.com/users/${storageData}`)
        .then(res=>res.json())
        .then(data=> {
            setUrl(data);
        })
    }, []);

    useEffect(() => {
        fetch(`${reposesUrl}`)
        .then(res=>res.json())
        .then(data => {
            data.map(e => {
                setReposesName(e.name)
                setReposeUrl(e.html_url)
                addRepose(reposesName, reposeUrl)
            })
        })
    }, [])

    console.log(reposes);

    const addRepose = (reposesName, reposeUrl) => {
        setReposes([
            {
                name: reposesName,
                url: reposeUrl
            }
        ])
    }
    const setUrl= ({repos_url}) => {
        setReposesUrl(repos_url)
    }

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
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>Я получила данные, но не смогла вывести их на экран(((<br/>
          <a href={reposesUrl}>Вот ссылка на данные репозиториев</a>
          </p>
          <ul>
              {reposesName}
          </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
            No
          </p>
        </div>

      </div>
    </div>
  );
}

export default Tabs;