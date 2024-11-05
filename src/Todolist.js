import React, { useState } from 'react';
import todolistCss from './Todolist.module.css';

const Todolist = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    console.log(todo);
    const writeTodo = (e) => {
        setTodo(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        if(todo === ''){
            return;
        }else{
            // setList([todo, ...list])
            // setList(() =>[todo, ...list])
            // setList((currentlist) =>[todo, ...currentlist])
            // setList((currentlist) =>[todo, ...list])
            setList((li) =>[todo, ...li])
            // setList((['배열']) => ['추가', '배열'])
            setTodo('')
        }
    }
    console.log(list);
    let today = new Date();
    let yy = today.getFullYear() % 100;
    let mm = (today.getMonth() + 1) < 10 ? `0${(today.getMonth() + 1)}` : (today.getMonth() + 1) ;
    let dd = (today.getDay()) < 10 ? `0${(today.getDay())}` : (today.getDay());
    let dateIndex = today.getDate();
    const dateArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let date = dateArr[dateIndex];
    console.log(yy, mm, dd, date);

  return (
    <>
        <h2>To do List</h2>
        <p>개수 : {list.length}</p>
        <form onSubmit={onSubmit}>
            <input onChange={writeTodo} value={todo} type='text' placeholder='to do'/>
            <button>add</button>
        </form>
        <ul>
            {list.map((item, idx) => {
                return(
                <li key={idx}>
                    {/* <small>{yy}.{mm}.{dd}({date})</small> */}
                    <label htmlFor={`todo${idx}`}>
                        <input className={todolistCss.checkbox} id={`todo${idx}`} type='checkbox' />{item}
                    </label>
                </li>)
            })}
        </ul>
    </>
  )
}

export default Todolist;