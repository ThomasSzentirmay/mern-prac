import {useStore} from '../store';

function Landing(props) {
    const {title, setGlobalState} = useStore();

    const changeTitle = () => {
        setGlobalState(oldState => {
            return {
                ...oldState,
                title: 'Something else'
            }
        });
    }

    const toggleDarkMode = () => {
        setGlobalState(oldState => {
            return {
                ...oldState,
                darkMode: !oldState.darkMode
            }
        });
    }

    return (
        <>
            <h1>Task Manager</h1>

            <p>{title}</p>

            <button onClick={changeTitle}>Change</button>

            <div>
                <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            </div>
        </>
    )
}

export default Landing;