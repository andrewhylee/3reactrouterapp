import './App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function ItemDetail( { match }) {


    useEffect(() => {
        fetchItem();
        console.log(match)
    },[])


    const [item, setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const fetchedItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = (await fetchedItem.json()).data.item

        setItem(item);
        console.log(item);

    }


  return (
    <div className="App">
        <h1>{item.name}</h1>
        <img src={item.images.background} alt=""/>
    </div>
  );
}

export default ItemDetail;
