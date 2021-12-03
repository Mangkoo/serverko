import React from 'react';
import './CardsStaff.css';
import CardItemStaff from './CardItemStaff';

function CardsStaff() {
  return (
    <div className='cards'>
        <h1>Founders</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItemStaff
              src='images/flooblegoo.jpg'
              text='Placeholder'
              label='Flooblegoo'
              path='/donate'
            />
            <CardItemStaff
              src='images/skeg.jpg'
              text='Placeholder'
              label='Skeg'
              path='/donate'
            />
            <CardItemStaff
              src='images/mangko.jpg'
              text='Placeholder'
              label='Mangko'
              path='/donate'
            />
          </ul>
        </div>
          </div>

          <h1>Admins</h1>
        <div className='cards__container'>
              <div className='cards__wrapper'>
                 
          <ul className='cards__items'>
            <CardItemStaff
              src='images/img-placeholder.jpg'
              text='Placeholder'
              label='????'
              path='/donate'
            />
            <CardItemStaff
              src='images/img-placeholder.jpg'
              text='Placeholder'
              label='????'
              path='/staff'
            />
            <CardItemStaff
              src='images/img-placeholder.jpg'
              text='Placeholder'
              label='????'
              path='/sign-up'
            />
            <CardItemStaff
                src='images/img-placeholder.jpg'
               text='Placeholder'
                label='????'
                path='/sign-up'
           />
          </ul>
        </div>
      </div >          
          <h1>Moderators</h1>
        <div className='cards__container'>
              <div className='cards__wrapper'>
                 
          <ul className='cards__items'>
            <CardItemStaff
              src='images/img-placeholder.jpg'
              text='Placeholder'
              label='????'
              path='/donate'
            />
            <CardItemStaff
              src='images/img-placeholder.jpg'
              text='Placeholder'
              label='????'
              path='/staff'
            />
            <CardItemStaff
              src='images/img-placeholder.jpg'
              text='Placeholder'
              label='????'
              path='/sign-up'
            />
            <CardItemStaff
                src='images/img-placeholder.jpg'
               text='Placeholder'
                label='????'
                path='/sign-up'
           />
          <CardItemStaff
                src='images/img-placeholder.jpg'
               text='Placeholder'
                label='????'
                path='/sign-up'
           />
          <CardItemStaff
                src='images/img-placeholder.jpg'
               text='Placeholder'
                label='????'
                path='/sign-up'
          />
          </ul>
        </div>
      </div >

    </div>
  );
}

export default CardsStaff;
