"use client"

import { useScroll } from "framer-motion"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Container from "@mui/material/Container"
import MainLayout from "src/layouts/main"
import ScrollProgress from "src/components/scroll-progress"
import Faqs from "../faqs"
import HomeHero from "../home-hero"
import WhyChooseUs from "../whyChoose"
import HomeMinimal from "../homeCourses"
import HomeAdvertisement from "../home-advertisement"

const StyledPolygon = styled("div")(({ anchor = "top", theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: "100%",
  position: "absolute",
  clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
  backgroundColor: theme.palette.background.default,
  lineHeight: 0,
  ...(anchor === "top" && {
    top: -1,
    transform: "scale(-1, -1)",
  }),
  ...(anchor === "bottom" && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}))

const MeshBackground = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  opacity: 0.4,
  background: `
    radial-gradient(circle at 20% 80%, rgba(0, 82, 165, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(0, 82, 165, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, rgba(245, 247, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)
  `,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 82, 165, 0.03) 2px,
        rgba(0, 82, 165, 0.03) 4px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(0, 82, 165, 0.03) 2px,
        rgba(0, 82, 165, 0.03) 4px
      )
    `,
  },
})

const FloatingElements = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  pointerEvents: "none",
  "& .floating-circle": {
    position: "absolute",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(0, 82, 165, 0.1), rgba(0, 82, 165, 0.05))",
    animation: "float 20s ease-in-out infinite",
  },
  "& .floating-circle:nth-of-type(1)": {
    width: "300px",
    height: "300px",
    top: "10%",
    right: "-150px",
    animationDelay: "0s",
  },
  "& .floating-circle:nth-of-type(2)": {
    width: "200px",
    height: "200px",
    bottom: "20%",
    left: "-100px",
    animationDelay: "7s",
  },
  "& .floating-circle:nth-of-type(3)": {
    width: "150px",
    height: "150px",
    top: "60%",
    right: "10%",
    animationDelay: "14s",
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0px) rotate(0deg)",
    },
    "33%": {
      transform: "translateY(-30px) rotate(120deg)",
    },
    "66%": {
      transform: "translateY(20px) rotate(240deg)",
    },
  },
})

export default function HomeView() {
  const { scrollYProgress } = useScroll()

  return (
    <MainLayout>
      <MeshBackground />
      <FloatingElements>
        <div className="floating-circle" />
        <div className="floating-circle" />
        <div className="floating-circle" />
      </FloatingElements>

      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          bgcolor: "transparent",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: { xs: "0 16px", md: "0 24px" },
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <WhyChooseUs />
          <HomeMinimal />
          <Faqs />
          <HomeAdvertisement />
        </Container>
      </Box>
    </MainLayout>
  )
}
