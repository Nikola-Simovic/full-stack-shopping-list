import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ItemListItem = ({ item, onRemove, onUpdateQuantity }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.name);
    }
  };

  const handleUpdateQuantity = (quantityChange) => {
    onUpdateQuantity(item.name, quantityChange);
  };

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between' }}>
      <div>
      <button onClick={handleButtonClick}>
  <FontAwesomeIcon
    icon={isClicked ? faCheckCircle : faCircle}
    className={isClicked ? 'clicked' : 'not-clicked'}
  />
</button>
        <span>{item.name}</span>
        <span> (Amount: {item.quantity})</span>
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
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
