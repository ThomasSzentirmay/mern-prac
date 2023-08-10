import { useStore } from '../store';

function Landing() {
    const { tasks } = useStore();

    return (
        <>
            <h1>Task Manager</h1>

            <div className='tasks'>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <p>Task: {task.text}</p>
                        <p>Username: {task.username}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Landing;