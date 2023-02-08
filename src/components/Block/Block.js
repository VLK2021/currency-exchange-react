import React from 'react';

import './BlockStyle.css';
import arrDefault from "../../constants/arrayDefault";


const Block = ({onChangeCurrency, onChangeValue, value, currency}) => {

    return (
        <div className={'block'}>
            <ul>
                {
                    arrDefault.map(current => <li
                        key={current}
                        className={currency === current ? 'active' : ''}
                        onClick={() => onChangeCurrency(current)}
                    >{current}</li>)
                }
            </ul>

            <input
                type="number"
                placeholder={0}
                value={value}
                onChange={e => onChangeValue(e.target.value)}
            />

        </div>
    );
};

export default Block;