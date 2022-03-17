import React from 'react';

const ListItem = (props) =>{
    return (
        <div className="list_item">
            <title>{props.name}</title>
            <title>{props.git_url}</title>
        </div>
    );
}

export default ListItem