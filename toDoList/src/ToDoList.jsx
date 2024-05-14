
import React, {useState} from "react";
import './ToDoList.css';

function ToDoList(){
    
    const [Lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...Lista, {text: novoItem, isCompleted: false}]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();

    }
    
    return (

        <div>
            <h1>Lista de tarefas!</h1>
            <form onSubmit={adicionaItem}>
                <input id="input-entrada" type="text" value={novoItem} onChange={(e)=>{setNovoItem(e.target.value)}} placeholder="Adicione uma tarefa..." />
                <button className="add" type="submit">Adicionar</button>
            </form>
            <div className="listaTarefas">
                {
                    Lista.length < 1 ?
                }
                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>      
            
                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>
                <button type="button" className="deleteAll">Deletar Todos</button>
            </div>
        </div>

    )
}

export default ToDoList