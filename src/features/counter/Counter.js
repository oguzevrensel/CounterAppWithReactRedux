import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    selectCount,
    incrementByAmount,
    incrementByAmountAsync
} from './counterSlice';

import styles from './Counter.module.css'

const Counter = () => {
    const [amount, setAmount] = useState('2');
    const value = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>
            <div className={styles.row}>
                <button className={styles.button} onClick={() => dispatch(increment())}>
                    +
                </button>
                <span className={styles.value}>{value}</span>

                <button className={styles.button} onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>

            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementByAmountAsync(Number(amount) || 0))}
                    >
                        Add Async
                </button>
                
            </div>
        </div>
    )
}

export default Counter;