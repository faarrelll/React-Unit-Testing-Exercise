import { Typography, Button, IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const ProductModal = ({
  open,
  onClose,
  product,
  quantity,
  onQuantityIncrease,
  onQuantityDecrease,
}) => {
  const { language, translations } = useLanguage();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      onClose(); 
      navigate('/login');
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      })
    );
    onClose();
  };

  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="modal-content">
        {/* Image Section */}
        <div className="image-section">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        {/* Content Section */}
        <div className="content-section">
          <Typography variant="h6" component="h2" className="product-title">
            {product.name}
          </Typography>

          <Typography variant="body2" className="product-category">
            {product.category}
          </Typography>

          <Divider className="divider" />

          <Typography variant="h6" className="product-price">
            Rp {product.price.toLocaleString()}
          </Typography>

          {/* Quantity Controls */}
          <div className="quantity-control">
            <IconButton
              onClick={onQuantityDecrease}
              size="small"
              className="quantity-button"
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography className="quantity-text">{quantity}</Typography>
            <IconButton
              onClick={onQuantityIncrease}
              size="small"
              className="quantity-button"
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </div>

          <Typography className="total-price">
            Total: Rp {(product.price * quantity).toLocaleString()}
          </Typography>

          <Button
            variant="contained"
            onClick={handleAddToCart}
            className="add-to-cart-button"
          >
            {translations[language].addToCart}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;