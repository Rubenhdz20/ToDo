
function TodoItem(props) {
    return(
        <li className="w-52 flex justify-between">
            <ion-icon name="checkmark-circle-outline" className="cursor-pointer"></ion-icon>
            <p>{props.text}</p>
            <ion-icon name="close-circle-outline"></ion-icon>
        </li>
    )
}

export default TodoItem;