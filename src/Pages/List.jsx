import React from 'react';
import ListItem from './ListItem'


const List = ({reposes}) =>{
    return (
        <div className="list">
            {reposes.map((item, index) => <ListItem 
            key = {index}
            name = {item.name}
            git_url = {item.git_url}
            />)}
        </div>
    );
}

export default List