import React from 'react';
const Todos = ({todos, deleteTodo}) => {
    const TodoList = todos.length > 0 ? (
        todos.map((item) => {
            return (
                <div className="collection-item">
                    <span onClick={() => {deleteTodo(item.id)}}>{item.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">you don't have any todos</p>
    );
    return (
        <div className="todo collection">
            {TodoList}
        </div>
    )
}
export default Todos;