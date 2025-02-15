import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import CustomAccordion from "./Accordion/CustomAccordion";
import GithubFinder from "./GitHubFinder/GithubFinder";
import ImageSlider from "./ImageSlider/ImageSlider";
import { Brightness4 } from "@mui/icons-material";
import { useColorMode } from "../../../ThemeContext";
import LoadMoreData from "./LoadMoreDate/LoadMoreData";

const Projects = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Container>
      {/* Dark Mode Toggle Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}>
        <IconButton onClick={toggleColorMode} color="inherit">
          <Brightness4 />
        </IconButton>
      </Box>

      <CustomAccordion />
      <GithubFinder />
      <ImageSlider url="https://picsum.photos/v2/list" page={1} limit={5} />
      <LoadMoreData />
    </Container>
  );
};

export default Projects;
