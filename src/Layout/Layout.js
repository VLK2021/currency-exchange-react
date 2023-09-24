import React, {useEffect, useState} from 'react';
import {AiOutlineArrowDown, AiOutlineArrowRight} from "react-icons/ai";

import './LayoutStyle.css';
import './LayoutStyleMedia.css';
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
            })
            .catch(err => {
                alert('Не вийшло отримати дані від сервера!');
            })
    }, []);

    const onChangePrice1 = (value) => {
        if (currency1 === currency2) {
            setPrice2(value);
        } else if (currency1 === 'UA') {
            const newArr = array.filter(obj => currency2 === obj.cc);
            setPrice1(value)
            setPrice2((value / newArr[0]?.rate).toFixed(3));
        } else if (currency2 === 'UA') {
            const newArr = array.filter(obj => currency1 === obj.cc);
            setPrice1(value)
            setPrice2((value * newArr[0]?.rate).toFixed(3));
        } else {
            const newArr = array.filter(obj => currency2 === obj.cc);
            const newArr1 = array.filter(obj => currency1 === obj.cc);
            setPrice1(value)
            setPrice2(((value / newArr[0]?.rate) * newArr1[0]?.rate).toFixed(3));
        }

    }


    useEffect(() => {
        onChangePrice1(price1);
    }, [currency2, price2, currency1, price1]);


    const onChangePrice2 = (value) => {
        setPrice2(value)
    }


    return (
        <div className={'layout'}>
            <h1>currency exchange</h1>

            <h2>{array[0]?.exchangedate}</h2>
            <h4>NBU</h4>

            <div className={'layout-blocks'}>
                <Block
                    value={price1}
                    currency={currency1}
                    onChangeCurrency={setCurrency1}
                    onChangeValue={onChangePrice1}
                />

                <div className={'arrow'}><AiOutlineArrowRight/></div>
                <div className={'arrowDown'}><AiOutlineArrowDown/></div>

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