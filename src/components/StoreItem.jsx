import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import "../pages/Store.css";
import { useState } from "react";

export function StoreItem({ id, name, price, imgUrl }) {
  const [mouse, setMouse] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 
  const handleMove = async () => {
    await delay(300);
    setMouse(false)
  };

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="card" onMouseLeave={() => handleMove()}>
      <Card.Img
        onMouseEnter={() => setMouse(true)}
        variant="top"
        src={imgUrl}
        height="400px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className={mouse ? "card-body" : "card-body-hidden"}>
        <Card.Title className="title   align-items-center mb-4">
          <span className="fs-2">{name}</span>

          <span className="ms-2 text-white ">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto  bottom">
          {quantity === 0 ? (
            <Button
              className="btn someClass"
              onClick={() => increaseCartQuantity(id)}
            >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column "
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  className="small-btn d-flex justify-content-center align-items-center"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <Button
                  className="small-btn  d-flex justify-content-center align-items-center"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </div>
  );
}

/*   <Button
                className="btn  omg"
                onClick={() => removeFromCart(id)}
       
              >
                Remove
              </Button> */
