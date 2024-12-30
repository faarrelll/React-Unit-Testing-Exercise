import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/CartSlice";
import { useLanguage } from "../context/LanguageContext";

const Cart = () => {
  const {language, translations} = useLanguage();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f0efee",
          marginBottom: "2rem",
          borderRadius: "0 0 100px 100px",
        }}
      >
        <h2 className="form-title" style={{ color: "rgb(49, 48, 48)" }}>
          {translations[language].cart}
        </h2>
      </div>
      <div className="cart-page ">
        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>{translations[language].cartInfo}</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Rp {item.price.toLocaleString()}</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    {translations[language].buttonRemove}
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Total: Rp {calculateTotal().toLocaleString()}</h3>
              <button className="checkout-button">{translations[language].buttonCheckout}</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
