import { useEffect, useState } from "react";
import {
  Button,
  Container,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count * 20}`
        );
        const result = await response.json();

        if (result?.products?.length) {
          setProducts((prevData) => [...prevData, ...result.products]);
        }

        setLoading(false);
      } catch (e) {
        setError("Failed to load products. Please try again...");
        setLoading(false);
      }
    };

    if (!disableButton) fetchProducts();
  }, [count, disableButton]);

  useEffect(() => {
    if (products.length >= 100) setDisableButton(true);
  }, [products]);

  return (
    <Container
      sx={{
        background: "#f5f5f5",
        padding: 3,
        borderRadius: 3,
        boxShadow: 3,
        my: 2,
      }}
    >
      {" "}
      <Typography
        variant="h4"
        color="secondary"
        textAlign="center"
        gutterBottom
      >
        Load More Data
      </Typography>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        {error && <Typography color="error">{error}</Typography>}

        <Grid container spacing={3} justifyContent="center">
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  maxWidth: 300,
                  bgcolor: "background.paper",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.thumbnail || "https://via.placeholder.com/150"}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div style={{ marginTop: "2rem" }}>
          {!disableButton && (
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={() => setCount(count + 1)}
            >
              {loading ? <CircularProgress size={24} /> : "Load More Products"}
            </Button>
          )}
          {disableButton && (
            <Button variant="contained" color="secondary" disabled>
              You have reached 100 products
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default LoadMoreData;
