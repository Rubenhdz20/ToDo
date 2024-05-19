import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";

function TodoItem(props) {
    return(
        <li className="w-52 flex justify-between items-center">
            <MdCheck className="green-500 hover:cursor-pointer hover:bg-green-500 hover:rounded-lg" onClick={props.onComplete}/>
            <p className={props.completed ? "line-through" : ""}>{props.text}</p>
            <MdClose className="hover:cursor-pointer hover:bg-red-500 hover:rounded-lg" onClick={props.onDelete}/>
        </li>
    )
}

export default TodoItem;