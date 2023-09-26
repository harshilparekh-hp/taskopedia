import React from 'react';
import {faker} from '@faker-js/faker';

const Student = (props) => {
  const fullName = "Kris Walley";
    const programmingExp = 2;
  
    return(
      <div className='col-4 p-1'>
        
        <div className='row border'>
          <div className='col-2'>
            <img src={faker.image.avatar()} className='w-100'></img>
          </div>
          <div className='col-8'>
            {props.name}<br />
            Programming Experience {props.experience} years
          </div>
          <div className='col-2'>
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Student;