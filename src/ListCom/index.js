import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ListCom = (props) =>{
 
    return( 
    <div className="todoList">
    <span onClick={() =>{
          props.onSelect(props.id)
         } }
       >
    <DeleteIcon className="deleteIcon" /> 
    </span>
     <li>{props.text}</li>
    </div>
    );
}
export default ListCom;