import React,{useState} from 'react'
import { Icon } from 'react-icons-kit'
import {xCircle} from 'react-icons-kit/feather/xCircle'
import { auth, db } from '../Config/Config';

export const Modal = ({editTodoValue, editModal, updateTodoHandler}) => {

    const [editTodo,setEditTodo]=useState(editTodoValue.Todo);

    const handleClose=()=>{
        editModal(null)
    }

    const handleEditTodoSubmit=(e)=>{
        e.preventDefault();
        handleClose();
        updateTodoHandler(editTodo, editTodoValue.id);
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('todos of ' + user.uid).doc(editTodoValue.id).update({
                    Todo: editTodo
                })
            }
            else{
                console.log('user is not signed in to update todo')
            }
        })
    }

    return (
        <div className='modal-container'>
            <div className='modal'>
                <div className='header'>
                        <div className='update-text'>
                        Update your todo
                        </div>
                        <div className='close-btn'
                        onClick={handleClose}>
                            <Icon size={28} icon={xCircle}
                                style={{color: 'rgb(165, 2, 2)'}}
                            />
                        </div>
                </div>
                <div className='container-fluid'>
                    <form autoComplete="off" className='form-group'
                    onSubmit={handleEditTodoSubmit}>
                        <input type="text" className='form-control'
                            required placeholder="Update your todo"
                            value={editTodo}
                            onChange={(e)=>setEditTodo(e.target.value)}
                        />
                        <br></br>
                        <button type="submit" className='btn btn-success btn-lg'>
                           UPDATE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
