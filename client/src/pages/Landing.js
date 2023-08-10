import {useStore} from './store';

function Landing(props) {
    const {title} = useStore();

    return (
        <>
            <h1>Task Manager</h1>

            <p>{title}</p>
        </>
    )
}

export default Landing;