import React from 'react';
import Student from './components/student/Student';
import StudentReview from './components/student/StudentReview';
const MainBody = () => {

    const totalLectures = 3;
  
    return(
      <div style={{minHeight: "70vh"}} className='container'>
        <p>In this course, we will learn React JS by building taskopedia</p>
        <p>Total Lectures - {totalLectures}</p>
        <ul>
          <li>Basic Foundations</li>
          <li>Functional and class components</li>
        </ul>
        <div className='container row'>Students Enrolled</div>   
        <Student experience={2} name="Harshil Parekh">
          <StudentReview />
        </Student>

        <Student experience={3} name="Jay Mehta">
          <StudentReview />
        </Student>

        <Student experience={4} name="Akshay Mehta"/>
      </div>
    )
  }

export default MainBody;