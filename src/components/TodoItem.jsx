
function TodoItem(props) {
    return(
        <li className="w-52 flex justify-between items-center">
            <ion-icon name="checkmark-circle-outline" onClick={props.onComplete}></ion-icon>
            <p className={props.completed &&  "line-through"}>{props.text}</p>
            <ion-icon name="close-circle-outline" onClick={props.onDelete}></ion-icon>
        </li>
    )
}

export default TodoItem;