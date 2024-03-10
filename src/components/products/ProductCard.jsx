import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Rating,
  Grow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  };

  const ratingValue = useMemo(
    () => round(product?.rating, 1),
    [product?.rating]
  );

  const price = useMemo(() => {
    const value = `₹${(product.price * 80).toLocaleString()}`;
    return value;
  }, [product?.price]);
  return (
    <>
      <Grow in={true} unmountOnExit>
        <Card sx={{ width: 325, margin: "auto" }} elevation={8}>
          <CardActionArea onClick={() => onProductClick(product.id)}>
            <CardMedia
              component="img"
              alt={product.title}
              image={product.thumbnail}
              sx={{
                height: 150,
                width: "100%",
                objectFit: "cover",
              }}
            />
          </CardActionArea>

          <CardContent>
            <p className="text-lg">{price}</p>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="card-title"
              onClick={() => onProductClick(product.id)}
            >
              {product.title}
            </Typography>

            <div className="flex">
              <Rating defaultValue={product.rating} precision={0.5} readOnly />
              <p>({ratingValue})</p>
            </div>
          </CardContent>

          <AddToCart type="card" product={product} quantity={1} />
        </Card>
      </Grow>
    </>
  );
};

export default ProductCard;
