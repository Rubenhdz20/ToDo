import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";

function TodoItem(props) {
    return(
        <li className="w-[16rem] flex justify-between items-center rounded-md">
            <p className={props.completed ? "line-through" : ""}>{props.text}</p>
            <div className="flex justify-center items-center">
                <MdCheck className="mr-2 hover:cursor-pointer hover:bg-green-500 hover:rounded-lg" onClick={props.onComplete}/>
                <MdClose className="hover:cursor-pointer hover:bg-red-500 hover:rounded-lg" onClick={props.onDelete}/>
            </div>
        </li>
    )
}

export default TodoItem;