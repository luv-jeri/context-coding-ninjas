import React from 'react';
import style from './style.module.css';
import useCart from '../../context/Cart.context';

function Nav() {
  const { cart } = useCart();
  return (
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src='https://cdn-icons-png.flaticon.com/512/4228/4228133.png'
            alt='logo'
          />
          <h3>Coding Samurai</h3>
        </div>
        <div className={style.nav_details}>
          <h4 className={style.name}>Hello Sanjay</h4>
          <div className={style.nav_icon_wrapper}>
            <div>
              <h4 className={style.cart_count}>{cart.length}</h4>
            </div>
            <div>
              <img
                alt='cart-icon'
                src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
                className={`${style.cart_icon} ${style.icon} `}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
