import React from 'react';
import ItemListItem from './ItemListItem';

const ItemsList = ({ items, onRemove, onUpdateQuantity }) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemListItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
