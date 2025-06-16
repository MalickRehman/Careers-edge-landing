"use client"

/* eslint-disable react/prop-types */
import Link from "next/link"
import { m } from "framer-motion"
import { useState } from "react"

import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { Box, Card, Button, Container, Typography, Chip } from "@mui/material"
import { styled } from "@mui/material/styles"

import { coursesDetails } from "src/_mock/_courseDetails"

import { varFade } from "src/components/animate"

// Styled components for modern design with true gradient mesh
const StyledContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  background: `
    radial-gradient(ellipse 1000px 800px at 10% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse 800px 600px at 90% 10%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse 600px 800px at 20% 90%, rgba(34, 197, 94, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse 900px 700px at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
    radial-gradient(ellipse 700px 900px at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 1200px 600px at 30% 60%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
    radial-gradient(ellipse 800px 1000px at 70% 30%, rgba(6, 182, 212, 0.25) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
  `,
  filter: "blur(0.5px)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(ellipse 600px 400px at 25% 75%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
      radial-gradient(ellipse 500px 700px at 75% 25%, rgba(139, 92, 246, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 400px 500px at 60% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)
    `,
    pointerEvents: "none",
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.4)",
    pointerEvents: "none",
    zIndex: 1,
  },
}))

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 2,
})

const ModernCard = styled(Card)(({ theme, selected }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: selected
    ? "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)"
    : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)",
    background: "rgba(255, 255, 255, 0.9)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
    opacity: selected ? 1 : 0,
    transition: "opacity 0.3s ease",
  },
}))

const ImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)",
    pointerEvents: "none",
  },
})

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "12px",
  textTransform: "none",
  fontWeight: 600,
  padding: "10px 24px",
  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  border: "none",
  color: "white",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "left 0.5s",
  },
  "&:hover": {
    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
    "&::before": {
      left: "100%",
    },
  },
}))

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export default function CoursesGallery() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleCardClick = (course) => {
    setSelectedCourse(course)
  }

  return (
    <StyledContainer
      maxWidth="xl"
      sx={{
        textAlign: "center",
        position: "relative",
        padding: { xs: "20px 16px", md: "40px 24px" },
      }}
    >
      <ContentWrapper>
        {/* Header Section */}
        <m.div variants={headerVariants} initial="hidden" animate="visible">
          <Stack
            spacing={4}
            sx={{
              textAlign: "center",
              mb: { xs: 6, md: 12 },
              pt: { xs: 8, md: 12 },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Chip
                label="Elevate Your Skills"
                sx={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.15) 100%)",
                  color: "#3b82f6",
                  fontWeight: 600,
                  fontSize: "14px",
                  height: "32px",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Explore Our{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Courses
                </Box>
              </Typography>
            </m.div>

            <Typography
              variant="h6"
              sx={{
                mx: "auto",
                maxWidth: "700px",
                color: "text.secondary",
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Discover a wide range of courses to enhance your knowledge and skills. Click on a course to explore more
              details and start your learning journey.
            </Typography>
          </Stack>
        </m.div>

        {/* Courses Grid */}
        <m.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {coursesDetails.map((course, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <m.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(course)}
                >
                  <ModernCard selected={selectedCourse === course}>
                    <ImageContainer>
                      <Box
                        component="img"
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        sx={{
                          width: "100%",
                          height: "240px",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </ImageContainer>

                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          color: "#1e293b",
                          fontSize: "1.4rem",
                        }}
                      >
                        {course.title}
                      </Typography>

                      <Chip
                        label={course.category}
                        size="small"
                        sx={{
                          mb: 2,
                          background:
                            "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.15) 100%)",
                          color: "#3b82f6",
                          fontWeight: 600,
                          border: "1px solid rgba(59, 130, 246, 0.3)",
                          backdropFilter: "blur(10px)",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "text.secondary",
                          mb: 3,
                          fontSize: "0.95rem",
                          fontWeight: 500,
                        }}
                      >
                        {course.duration} • {course.format}
                      </Typography>

                      <Link href={`/courses/${course?.id}`} passHref>
                        <StyledButton variant="contained" fullWidth size="large">
                          Explore Course
                        </StyledButton>
                      </Link>
                    </Box>
                  </ModernCard>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </m.div>
      </ContentWrapper>
    </StyledContainer>
  )
}
