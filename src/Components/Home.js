import React,{useState} from 'react'
import {Header} from './Header'
import {auth, db} from '../Config/Config'
import { Todos } from './Todos';
import { Modal } from './Modal';

export const Home = ({currentUser, todos, deleteTodo,
editTodoValue, editModal, updateTodoHandler}) => {

  const [todo, setTodo]=useState('');
  const [todoError, setTodoError]=useState('');

  const handleTodoSubmit=(e)=>{
    e.preventDefault();
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('todos of ' + user.uid).add({
          Todo: todo
        }).then(setTodo('')).catch(err=>setTodoError(err.message))
      }
      else{
        console.log('user is not signed in to add todo to database');
      }
    })
  }

    return (
        <div className='wrapper'>
          <Header currentUser={currentUser}/>
          <br></br>
          <br></br>
          <div className='container'>
            <form autoComplete='off' className='form-group'
            onSubmit={handleTodoSubmit}>

            {currentUser&&<>
              <input type="text" placeholder="Enter TODO's"
                className='form-control' required
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
              />
              <br></br>
              <div style={{width: 100+'%',
              display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                  style={{width: 100+'%'}}>
                   ADD
                </button>
              </div>
              
            </>}

            {!currentUser&&<>
              <input type="text" placeholder="Enter TODO's"
                className='form-control' required disabled
              />
              <br></br>
              <div style={{width: 100+'%',
              display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                disabled style={{width: 100+'%'}}>
                   ADD
                </button>
              </div>
              <div className='error-msg'>
                Please register your account or login to use application
              </div>
            </>}
            
            </form>
            {todoError&&<div className='error-msg'>{todoError}</div>}
            <Todos todos={todos} deleteTodo={deleteTodo}
             editModal={editModal}/>
            </div>

            {editTodoValue&&<Modal editTodoValue={editTodoValue}
              editModal={editModal} updateTodoHandler={updateTodoHandler}
            />} 
              
        </div>
    )
}
