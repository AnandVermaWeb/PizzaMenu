import React from 'react'
import pizzadatas from '../pizza/pizzaData/pizzadatas'
 const Pizza = () => {
  console.log(pizzadatas,"pizzadatas")
  return (
    <div>
      { pizzadatas && pizzadatas?.map((pizza:any, index:any) => (
        <div key={index}>
          <h2>{pizza.name}</h2>
          <p>{pizza.ingredients}</p>
          <p>Price: ${pizza.price}</p>
          {!pizza.soldOut ? (
            <img src={pizza.photoName} alt={pizza.name} />
          ) : (
            <p>Sold Out</p>
          )}
        </div>
      ))}
    </div>
  );
}
export default Pizza