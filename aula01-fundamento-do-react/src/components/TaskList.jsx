const TaskList = ({ tasks }) => {
     if (tasks.length === 0 ){
    return <p>Não ha tarefas para mostrar</p>
 }
    return (
      // retorno condicional

    <>
      <div>
        <h4>Lista de tarefas:</h4>
        <ol>
          {tasks.map((tasks) => (
            <li key={tasks.id}>
              {TaskList.id} - {tasks.text}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
export default TaskList;
