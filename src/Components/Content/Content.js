import React from 'react';
import fakeData from '../../fakeData';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Content = () => {
    const [cart, setCart] = useState([]);
    const handleEnrollNow = (courses) => {
        console.log(courses.name)
        const newCart = [...cart, courses];
        setCart(newCart);
    }

    return (
        <div className="content">
            <div className="row">
                <Courses courses={fakeData} handleEnrollNow={handleEnrollNow}></Courses>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Content;