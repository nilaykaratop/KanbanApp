import React from 'react';
import Card from './card';

function Column ({columns}){
    console.log(columns);
    return columns.map((column) => {
        return (
          <div className="column" key={column.columnId} >
            <h3 id="title-id">{column.title}</h3>
            <Card
              cards={column.cards}
            />
          </div>
        );
    });
}
export default Column;