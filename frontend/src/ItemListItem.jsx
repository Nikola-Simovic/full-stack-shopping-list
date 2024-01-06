import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ItemListItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.name);
    }
  };

  const handleUpdateQuantity = (quantityChange) => {
    onUpdateQuantity(item.name, quantityChange);
  };

  return (
    <li>
      <div>
        <span>{item.name}</span>
        <span> (Quantity: {item.quantity})</span>
      </div>
      <div>
        <button onClick={() => handleUpdateQuantity(-1)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button onClick={() => handleUpdateQuantity(1)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </li>
  );
};

export default ItemListItem;
