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

    return (
        <>
            <h1>Task Manager</h1>

            <p>{title}</p>

            <button onClick={changeTitle}>Change</button>
        </>
    )
}

export default Landing;