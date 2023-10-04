import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useProducts } from "../../hooks/useProducts";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { priceFormat } from "../../utils/PriceFormat";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { data, isPending } = useProducts(
    "https://dummyjson.com/products/category/smartphones?limit=5"
  );

  const onProductClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className="mx-auto w-11/12 my-4">
        <h1 className="font-extrabold text-lg text-center md:text-left">
          Featured Products
        </h1>
        <div className="grid md:grid-cols-4 gap-4 my-4">
          {isPending && <h1>Loading...</h1>}
          {/* {data
            ? data?.products.map((val, i) => <h1 key={val.id}>{val.title}</h1>)
            : null} */}
          {data?.products.length > 0
            ? data?.products.map((product) => {
                return (
                  <div key={product.id}>
                    <Card sx={{ width: 300, margin: "auto" }} elevation={10}>
                      <CardActionArea
                        onClick={() => onProductClick(product.id)}
                      >
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="140"
                          image={product.thumbnail}
                          sx={{
                            height: 150,
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>

                      <CardActions>
                        <p className="mr-4 ml-2 font-bold text-lg">
                          {/* &#8377;{product.price * 80} */}
                          {priceFormat().format(product.price * 80)}
                        </p>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<ShoppingCartRoundedIcon />}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
