import React from "react";
function Card({
   card,
   onCardClick 
}) {
   function handleCardClick() {
      onCardClick(card);
    }
   return (
      <li className="elements__card">
         <img
            className="elements__image"
            src={card.link}
            alt={card.name}
            onClick={handleCardClick} />
         <div className="elements__info">
            <h2 className="elements__name">{card.name}</h2>
            <div className="elements__btn">
               <button
                  className="elements__like"
                  type="button"
               ></button>
               <div className="elements__like-sum">{card.likes.length}</div>
            </div>
         </div>
         <button
            className="elements__del"
            type="button"></button>
      </li>
   )
}

export default Card;