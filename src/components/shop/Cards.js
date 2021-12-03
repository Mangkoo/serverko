import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItemRare from './CardItemRare';

function Cards() {
  return (
    <div className='cards'>
      <h1>Support the community by purchings some merch! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Placeholder'
              label='Adventure'
              path='/donate'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Placeholder'
              label='Rare'
              path='/donate'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Placeholder'
              label='Mystery'
              path='/donate'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Placeholder'
              label='$25.00'
              path='/staff'
            />
            <CardItemRare
              src='images/img-8.jpg'
              text='Placeholder'
              label='$20.00'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
