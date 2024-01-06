import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NewItem = (props) => {


    const [items,setItems] = useState({

        name:'',
        quantity:1,
    });

   const ItemChangeHandler = (event) => {
    setItems((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const updateQuantityHandler = (event) => {
    setItems((prevState) => ({
      ...prevState,
      quantity: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();


    if (!items.name.trim()) {
        console.error("Item cannot be empty!");
        alert('Please fill in the item name!');
        return;
      }


    props.addItem(items);
    setItems({
      name: '',
      quantity: 1,
    });
  };



      return (
        <form onSubmit={submitHandler}>
          <p>
            <label>Add Item: </label>
            <input type="text" onChange={ItemChangeHandler} value={items.name} />
          </p>
          <button type="submit">➕ ADD</button>
        </form>
      );
};

export default NewItem;
