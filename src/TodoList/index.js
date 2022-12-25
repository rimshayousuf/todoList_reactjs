import React, { useState } from "react";
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListCom from "../ListCom";

const TodoList = () =>{
   
    const [item,setItem] = useState("");
    const [NewItem, listNewItem] = useState([]);

    const itemEvent = (e) =>{
        setItem(e.target.value)
    }

    const itemList = () =>{
        listNewItem((prevItem) =>{
            return [...prevItem, item]
        });
        setItem("");
    }

    const deleteItems = (id) =>{
      console.log("deleted");
      listNewItem((prevItem) =>{
        return prevItem.filter((arrElem, index) =>{
            return index !== id;
        })
      })
    }
 return(
   <div className="main_div">
      <div className="center_div">
        <br />
        <h1> Todo List</h1>
        <br/>
        <input type="text" 
        value={item} placeholder="Add an item" 
        onChange={itemEvent}/>
        <Button className="newBtn" onClick={itemList}>
           <AddCircleIcon />
        </Button>
        <br />
            <ol>
                {
                    //index tells about current data of index
                    NewItem.map((Val, index)=>{
                      return <ListCom key={index} 
                      text ={Val}
                      id = {index}
                      onSelect = {deleteItems}  
                      />
                    })
                }
            </ol>
        <br />
      </div>
   </div>
 );
}
export default TodoList;