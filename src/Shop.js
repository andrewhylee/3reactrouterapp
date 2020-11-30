import './App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Shop() {


    useEffect(() => {
        fetchItems();
    },[])


    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

        const fetcheditems = await data.json();
        console.log(fetcheditems.data[0]);
        setItems(fetcheditems.data);
    }


  return (
    <div className="App">
      <h1>Shop</h1>
      <h1>{typeof(items)}</h1>
      {items.map( (arritem) => (
          <h1 key={arritem.itemId}> 
            <Link to={`/shop/${arritem.itemId}`}> {arritem.item.name} </Link>
          </h1>
      ))}

    </div>
  );
}

export default Shop;
