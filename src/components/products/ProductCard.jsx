import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Rating,
} from "@mui/material";
import { priceFormat } from "../../utils/PriceFormat";
import { useNavigate } from "react-router-dom";

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
  return (
    <>
      <Card sx={{ width: 350, margin: "auto" }} elevation={8}>
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
          <p className="text-lg">{priceFormat().format(product.price * 80)}</p>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card-title cursor-pointer hover:underline"
            onClick={() => onProductClick(product.id)}
          >
            {product.title}
          </Typography>

          <div className="flex">
            <Rating defaultValue={product.rating} precision={0.5} readOnly />
            <p>({ratingValue})</p>
          </div>
        </CardContent>
        <CardActions className="card-btn" onClick={null}>
          <p className="font-bold">Add to Cart</p>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
