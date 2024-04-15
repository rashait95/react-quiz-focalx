import React, { useCallback, useState } from 'react'


const List =React.memo((props)=>{
    console.log("list component rendered!");
    return props.items.map((item)=><div key={item}>{item}</div>);
});

export default function App() {
    const [items,setItems]=useState([1,2,3]);
    const[count,setCount]=useState(0);
    const addItem=useCallback(()=>{
        setItems([...items,items.length+1]);
    },[items]);
  return (
    <div>
      <List items={items}/>
      <button onClick={addItem}>Add Item</button>
      <button onClick={()=>setCount(count+1)}>Increment Count </button>
      <p>{count}</p>
    </div>
  );
}
