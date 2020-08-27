import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart.price)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }
    return (
        <div className="cart col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Courses Ordered: {cart.length}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Total Amount: {total}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;