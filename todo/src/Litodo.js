import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
function Litodo({ item, hanleEdit, hanleRemove ,index}) {
    return (<li className='li-todo' >{item}
        <span>
            <AiFillEdit onClick={() => { hanleEdit(index) }} />
            <AiFillCloseCircle onClick={() => { hanleRemove(index) }}
            />
        </span></li>)
}


export default Litodo