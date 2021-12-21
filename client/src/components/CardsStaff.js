import React from 'react';
import './CardsStaff.css';
import CardItemStaff from './CardItemStaff';

function CardsStaff() {
  return (
    <div className='cards'>
        <div className='cards__container'>

          <h1 className='section_header'>Founders</h1>

            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItemStaff
              src='images/flooblegoo.jpg'
              label='Flooblegoo'
              path='/donate'
            />

            <CardItemStaff
              src='images/skeg.jpg'
              label='Skeg'
              path='/donate'
            />

            <CardItemStaff
              src='images/mangko.jpg'
              label='Mangko'
              path='/donate'
            />

          </ul>

        </div>
    </div>



    <div className='cards__container'>

      <h1 className='section_header'>Admins</h1>
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

        <div className='cards__container'>
        <h1 className='section_header'>Moderators</h1>

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
