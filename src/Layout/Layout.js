import React, {useEffect, useState} from 'react';

import './LayoutStyle.css';
import Block from "../components/Block/Block";
import url from "../constants/url";


const Layout = () => {
    const [currency1, setCurrency1] = useState('UA');
    const [currency2, setCurrency2] = useState('USD');
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(req => {
                setArray(req);
                console.log(req);
            })
            .catch(err => {
                alert('Не вийшло отримати дані від сервера!');
            })
    }, []);

    const onChangePrice1 = (value) => {
        // const newArr = array.filter(obj => currency2 === obj.cc);
        // console.log(newArr);
        setPrice1(value)
        // setPrice2(value * newArr[0].rate);
    }

    const onChangePrice2 = (value) => {
        setPrice2(value)
    }


    return (
        <div className={'layout'}>
            <h1>currency exchange</h1>

            <h2>{array[0]?.exchangedate}</h2>

            <div className={'layout-blocks'}>
                <Block
                    value={price1}
                    currency={currency1}
                    onChangeCurrency={setCurrency1}
                    onChangeValue={onChangePrice1}
                />

                <Block
                    value={price2}
                    currency={currency2}
                    onChangeCurrency={setCurrency2}
                    onChangeValue={onChangePrice2}
                />
            </div>
        </div>
    );
};

export default Layout;