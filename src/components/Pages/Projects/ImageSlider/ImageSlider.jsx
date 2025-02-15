import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  CircularProgress,
  Typography,
  Pagination,
  Fade,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

      const data = await response.json();
      console.log("Fetched Images:", data); // Debugging line

      if (Array.isArray(data)) {
        setImages(data);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (e) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, page, limit]);

  function handlePrevious() {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleNext() {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }

  if (loading)
    return <CircularProgress sx={{ display: "block", margin: "auto" }} />;

  if (errorMsg)
    return (
      <Typography textAlign="center" color="error">
        Error: {errorMsg}
      </Typography>
    );

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
      <Typography
        variant="h4"
        color="secondary"
        textAlign="center"
        gutterBottom
      >
        Image Slider
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "80%",
            height: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "#ddd",
          }}
        >
          {images.length > 0 &&
            images.map((imageItem, index) => (
              <Fade
                in={currentSlide === index}
                timeout={500}
                key={imageItem.id}
              >
                <img
                  src={imageItem.download_url}
                  alt={imageItem.alt_description || "Image"}
                  title={imageItem.id}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: currentSlide === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
              </Fade>
            ))}

          {/* Left Arrow Button */}
          <Button
            onClick={handlePrevious}
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "primary",
              "&:hover": { bgcolor: "rgba(23, 26, 196, 0.88)" },
            }}
          >
            <ArrowBack />
          </Button>

          {/* Right Arrow Button */}
          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "primary",
              "&:hover": { bgcolor: "rgba(23, 26, 196, 0.88)" },
            }}
          >
            <ArrowForward />
          </Button>
        </Box>

        {/* Pagination Indicators */}
        {images.length > 1 && (
          <Pagination
            count={images.length}
            page={currentSlide + 1}
            onChange={(_, value) => setCurrentSlide(value - 1)}
            color="primary"
          />
        )}
      </Box>
    </Container>
  );
}
