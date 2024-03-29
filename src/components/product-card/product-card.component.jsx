// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { CartContext } from "../../contexts/cart.context";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../buton/button.component";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  // const { addItemToCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  // const addProductToCart = () => addItemToCart(product);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
