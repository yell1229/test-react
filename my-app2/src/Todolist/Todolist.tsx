import React,{useState} from 'react';

interface Todo {
    key: number;
    todoText: string;
    isCompleted : boolean;
}
let global_id = 0;
export default function Todolist() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState<Todo[]>([
        {key:0, todoText : '밥 먹기', isCompleted: false},
        {key:1, todoText : '숨쉬기', isCompleted: false},
        {key:2, todoText : '잠자기', isCompleted: false}
    ])


    return (
        <main className='container'>
            <h2>해야할 일</h2>
            <form onSubmit={(e:React.FormEvent) => {
                e.preventDefault();
                // if(inputValue !== ""){
                //     setTodoList([...todoList, {
                //         todoText : inputValue, 
                //         isCompleted: false
                //     }])
                // }
            }}>
                <fieldset role="group">
                    <input type="text" name="text" placeholder="해야할 일을 적어주세요"
                    value={inputValue}
                    onChange={(e) => {setInputValue(e.target.value)}} />
                    <input type="submit" value="추가" />
                </fieldset>
            </form>
            <div>
                <ul>
                    {
                        todoList.map((todo, index) => (
                            <li 
                            style={{textDecoration : todo.isCompleted ? "line-through" : "none"}}
                            onClick={() => {
                                todo.isCompleted ?
                            }}
                            >{todo.todoText}</li>
                        ))
                    }
                </ul>
            </div>
        </main>
    );
}

