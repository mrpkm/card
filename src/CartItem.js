import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="img" />
                </div>
                <div className="right-block">
                    <div>phone</div>
                    <div>Rs 999</div>
                    <div>Qty: 1</div>
                    <div className="cart-item-action">
                       {/* buttoms */}

                    </div>
                </div>
            </div>
            
        )
    }
}


export default CartItem;