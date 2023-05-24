import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './BundleItem.css';

function BundleItem(props) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const savedCheckboxValue = Cookies.get(props.id);
        setIsChecked(savedCheckboxValue === 'true');
    }, []);

    const handleCheckboxChange = (event) => {
        const { checked } = event.target;
        setIsChecked(checked);
        Cookies.set(props.id, checked);
    }

    return (
        <div>
            <input
                type="checkbox"
                id={props.id}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label for={props.id} class="tooltip">
                <img src={require(`../images/${props.id}.png`)} />
                {Cookies.get(props.id) == 'true' ? <s>{props.name}</s> : props.name}
                <span class="tooltiptext">{props.tooltip}</span>
            </label>
        </div>
    );
};

export default BundleItem;