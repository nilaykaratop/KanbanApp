import React from 'react';

function Card({ cards = ['any'] }) {
  // console.log(Cards[0]);
  return cards.map((card, i) => {
    if (card !== 'any') {
      return (
        <div className="card" key={card.topicName + i}>
                    <div className="card-topicName">{card.topicName} </div>
                    <div className="card-description">{card.description}</div>
                    <input type="checkbox" id="checkId"></input>
                </div>
      );
    }
    return <div key={card}>Etkinlik Yok</div>;

  });
}
export default Card;
