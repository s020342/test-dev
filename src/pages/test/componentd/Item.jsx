import React, { useState } from 'react';
import './Item.scss';


function Item (props) {
    const [computed, setCompoted] = useState(props.item.computed);
    const clickHandle = () => {
        setCompoted(!computed);
    };
    return (
        <div className="item" onClick={clickHandle}>
            {
                !computed
                    ? <p >{props.item.val}</p>
                    : <s >{props.item.val}</s>
            }
        </div>
    );
}

export default Item;