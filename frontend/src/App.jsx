import React, { useState, useEffect } from 'react';
import './App.css';
import ItemsList from './ItemsList';
import ItemListItem from './ItemListItem';
import NewItem from './NewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCheckCircle, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    console.log("Fetching items..");

    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch(`http://localhost:5000/api/v1/items`);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItemHandler = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItemHandler = (itemName) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const updateQuantityHandler = (itemName, quantityChange) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + quantityChange),
            }
          : item
      )
    );
  
    if (quantityChange < 1 && items.find((item) => item.name === itemName)?.quantity + quantityChange < 1) {
      window.alert('The minimum amount you can buy is one item! \nPlease delete an item if you dont plan on buying it.');
    }
  };
  
  

  const totalItems = items.reduce((total, item) => total + (item.quantity || 1), 0);

  let content = <p>No items found!</p>;

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (isLoading) {
    content = <p>Fetching items...</p>;
  }

  if (items.length > 0) {
    content = (
      <ItemsList
        items={items}
        onRemove={removeItemHandler}
        onUpdateQuantity={updateQuantityHandler}
      />
    );
  } else {
    content = <p>There are no items on the list!</p>;
  }

  return (
    <div className="app-background">
      <div className="main-container">
        <h1 className="title">Shopping list:</h1>
		<div id="NewItem" className="add-item-box">
          <NewItem addItem={addItemHandler} />
        <p className="total">Total Items: {totalItems}</p>
        <ul className="item-list">{content}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
