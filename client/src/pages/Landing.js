import { useStore } from '../store';

function Landing() {
    const { tasks, setGlobalState } = useStore();

    const deleteTask = (index) => {
        const copy = [...tasks]
        copy.splice(index, 1);

        setGlobalState(oldState => {
            return {
                ...oldState,
                tasks: [...copy]
            }
        });
    }

    return (
        <>
            <h1>Task Manager</h1>

            <div className='tasks'>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <p>Task: {task.text}</p>
                        <p>Username: {task.username}</p>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Landing;