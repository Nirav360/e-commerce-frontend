import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Skeleton,
} from "@mui/material";
import { useProducts } from "../../hooks/useProducts";
import { priceFormat } from "../../utils/PriceFormat";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/productsContext";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const {isLoading: isPending, featureProducts} = useProductContext();
  // const { data, isPending } = useProducts(
  //   "https://dummyjson.com/products/category/smartphones?limit=5"
  // );

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
          {(isPending ? Array.from(new Array(4)) : featureProducts || []).map(
            (product, i) => {
              return (
                <div key={i}>
                  {product ? (
                    <Card sx={{ width: 300, margin: "auto" }} elevation={10}>
                      <CardActionArea
                        onClick={() => onProductClick(product?.id)}
                      >
                        <CardMedia
                          component="img"
                          alt={product?.title}
                          image={product?.thumbnail}
                          sx={{
                            height: 150,
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />

                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product?.title}
                          </Typography>
                          <p className="font-bold text-lg">
                            {/* &#8377;{product?.price * 80} */}
                            {priceFormat().format(product?.price * 80)}
                          </p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ) : (
                    <>
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        height={150}
                      />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" width="20%" />
                    </>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
