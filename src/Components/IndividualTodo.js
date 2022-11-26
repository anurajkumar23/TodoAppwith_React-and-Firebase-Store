import React from 'react'
import {Icon} from 'react-icons-kit'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'

export const IndividualTodo = ({individualTodo, deleteTodo,
editModal}) => {

    const handleDelete=()=>{
        deleteTodo(individualTodo.id);
    }

    const handleEditModal=()=>{
        editModal(individualTodo);
    }
    
    return (
        <div className='todo'>
            <div>
                {individualTodo.Todo}
            </div>
            <div className='actions-div'>
                <div onClick={handleEditModal}>
                   <Icon size={18} icon={edit2}/>
                </div>
                <div className='delete-btn' onClick={handleDelete}>
                   <Icon size={18} icon={trash}/>
                </div>
            </div>
        </div>
    )
}
