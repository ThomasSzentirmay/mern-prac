import {useStore} from '../store';

function Form(props) {
    const {title} = useStore();

    return (
        <>
            <h1>Add a Task</h1>

            <p>{title}</p>
        </>
    )
}

export default Form;