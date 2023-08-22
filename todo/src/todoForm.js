import { useState, useRef } from "react";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

function Form() {
    var [input, setInput] = useState('');
    var [add, setAdd] = useState([]);
    var [edit, setEdit] = useState(true);
    var [id, setId] = useState();
    var [input2, setInput2] = useState('');
    var InputRef = useRef();
    function hanleAdd() {
        setAdd([...add, input])
        setInput('');
        InputRef.current.focus();
    }

    function hanleRemove(index) {
        setAdd(add.filter((item, indes) => indes != index))
    }

    function hanleEdit(id) {
        setEdit(!edit);
        setId(id);
    }

    function hanleUpdate(index) {
        add[index] = input2;
        setInput2('');
        setEdit(!edit);
    }

    return (<form className='form-todo'>
        <input type='text' ref={InputRef} className='input-todo' size='39' placeholder="What is your task tody ?" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='button' className="todo-btn" onClick={() => hanleAdd()}>Add task</button>
        <ul>
            {
                add.map((item, index) => {
                    if (edit && id == index) {
                        return (
                            <div>
                                <input type='text' ref={InputRef} className='update-todo' size='39' placeholder="Update todo?" value={input2} onChange={(e) => setInput2(e.target.value)} />
                                <button type='button' className="todo-btn" onClick={() => hanleUpdate(index)}>Update task</button>
                            </div>
                        )
                    } else {
                        return (
                            < li key={index} className='li-todo' > {item}
                                < span >
                                    <AiFillEdit onClick={() => { hanleEdit(index) }} />
                                    <AiFillCloseCircle onClick={() => { hanleRemove(index) }}
                                    />
                                </span></li>
                        )
                    }

                })
            }
        </ul >
    </form >)
}

export default Form;