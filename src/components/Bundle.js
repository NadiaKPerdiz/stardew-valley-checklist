import './Bundle.css';

function Bundle(props) {
    return (
        <div className='card'>
            <h3>{props.title}</h3> {props.children}
        </div>
    );
};

export default Bundle;