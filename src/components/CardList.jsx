import React from 'react';
import Card from './Card';
import '/src/assets/css/card_list.css';

const CardList = ({robots}) => {
    const cardDeck = robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />)

  return (
    <div className="list">
      {
        robots.map(robot => {
          return (
            <Card 
              key={robot.id} 
              id={robot.id} 
              name={robot.name} 
              email={robot.email} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;