import { Avatar, Card, CardContent } from "@mui/material";

const CartTile = () => {
  return (
    <>
      <div>
        <Card className="md:w-[90%] w-full" elevation={8}>
          <CardContent className="flex md:flex-row flex-col items-center gap-x-4">
            <Avatar sx={{ width: 200, height: 100 }} variant="square">
              <img
                src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
                alt="name"
              />
            </Avatar>
            <p>Title</p>
            <p>price</p>
            <p>quantity</p>
            <p>dlete</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CartTile;
