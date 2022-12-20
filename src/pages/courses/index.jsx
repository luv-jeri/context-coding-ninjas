import React from 'react';
import style from './style.module.css';
import Card from '../../components/card';
import useCart from '../../context/Cart.context';

const coursesData = [
  {
    id: 1,
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    img: 'https://cdn-icons-png.flaticon.com/512/3334/3334886.png',
  },
  {
    id: 2,
    title: 'Node',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment .',
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
  },
  {
    id: 3,
    title: 'Azur',
    description: 'Azure is a cloud computing service created by Microsoft.',
    img: 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
  },
  {
    id: 4,
    title: 'SQL',
    description:
      'SQL is a standard language for storing, manipulating and retrieving data in databases.',
    img: 'https://cdn-icons-png.flaticon.com/512/8452/8452873.png',
  },
];

function Courses() {
  const { cart, addToCart, isInCart } = useCart();
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Popular Courses</h1>
        <h4>Choose you katana ⚔️</h4>
      </div>
      <div className={style.courses}>
        {coursesData.map((course, index) => {
          return (
            <div key={index} className={style.card_container}>
              <Card
                key={course.id}
                id={course.id}
                isIn={isInCart(course)}
                title={course.title}
                description={course.description}
                img={course.img}
                onClick={() => addToCart(course)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
