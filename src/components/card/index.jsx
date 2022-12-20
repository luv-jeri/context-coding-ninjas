import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import useCart from './../../context/Cart.context';

function Card({ title, onClick, img, id }) {
  const { cart, addToCart, removeFromCart, clearCart, isInCart } = useCart();
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    setIsIn(isInCart({ id }));
  }, [cart, id, isInCart]);

  return (
    <div
      className={style.card_container}
      onClick={() => {
        if (isIn) {
          removeFromCart({ id });
        } else {
          addToCart({ id });
        }
      }}
    >
      <div className={style.card_image}>
        <div className={style.image_container}>
          <img src={img} alt='icons' />
        </div>
      </div>
      <div className={style.card_content}>
        <h1 className={style.card_title}>{title}</h1>
      </div>
    </div>
  );
}

export default Card;
