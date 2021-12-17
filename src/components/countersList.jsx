import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
        console.log("handle reset");
    };
    const handleDecrement = (id) => {
         const Decrement = counters.map((i)=>{
            i.value = i.id===id?i.value-1:i.value
            return i
        });
         setCounters(Decrement)
    };
    const handleIncrement = (id) => {
        const Increment = counters.map((i)=>{
            i.value = i.id===id?i.value+1:i.value
            return i
       });
        setCounters(Increment)
   };

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} 
                onDecrement={handleDecrement} 
                onIncrement={handleIncrement} 
                onDelete={handleDelete} {...count} />
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};
export default CountersList;
