import React,{useState,useEffect} from 'react'
import todoLogo from '../Images/todo-list.png'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'

export const Header = ({currentUser}) => {

    const [date, setDate]=useState(null);
    const [month, setMonth]=useState(null);
    const [year, setYear]=useState(null);
    const [day, setDay]=useState(null);

    useEffect(()=>{
        const myDate = new Date();
        const myMonth = myDate.toLocaleString('default', { month: 'long' });
        const myDate2 = myDate.getDate();
        const myYear = myDate.getFullYear();
        const myDay = myDate.toLocaleDateString('default', { weekday: 'long' });

        setMonth(myMonth);
        setDate(myDate2);
        setYear(myYear);
        setDay(myDay);
    },[])

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            window.location.reload();
        });
    }
   
    return (
        <div className='header-box'>
            <div className='leftside'>
                <div className='img'>
                  <img src={todoLogo} alt="todologo"/>
                </div>
                <div className='content'>
                    <div className='heading-big'>
                    Lots of work to do?
                    </div>
                    <div className='heading-small'>
                    Lets make a list
                    </div>
                </div>
            </div>
            <div className='rightside'>
                
            {!currentUser&&<>
                    <Link className='btn btn-primary btn-md' to="signup">
                     SIGN UP
                    </Link>
               
               
                  <Link className='btn btn-secondary btn-md' to="login">
                     LOGIN
                  </Link>

                  <br></br>
                  <div className='date-section'>
                      <span>{date}</span>
                      <span>{month}</span>
                      <span>{year}</span>
                      <span>{day}</span>
                  </div>
                 
                </>}
                {currentUser&&<div className='welcome-div'>

                    <h2>WELCOME</h2>
                    <h5>{currentUser}</h5>
                    <br></br>
                    <div className='date-section'>
                      <span>{date}</span>
                      <span>{month}</span>
                      <span>{year}</span>
                      <span>{day}</span>
                    </div>
                    <br></br>
                    <button className='btn btn-danger'
                    onClick={handleLogout}>LOGOUT</button>
                </div>} 
              
             </div>
        </div>
    )
}
