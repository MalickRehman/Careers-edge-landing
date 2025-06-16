"use client"

import Link from "next/link"
import Slider from "react-slick"
import { m } from "framer-motion"
import { useState } from "react"
import { HiArrowRight } from "react-icons/hi2"
import Stack from "@mui/material/Stack"
import { Box, Card, Button, Container, Typography, Chip, Rating } from "@mui/material"
import { Clock, Users, Monitor } from "lucide-react"
import { useRouter } from "src/routes/hooks"
import { coursesDetails } from "src/_mock/_courseDetails"
import { varFade } from "src/components/animate"

const sliderSettings = {
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.25, 0.8, 0.25, 1)",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
      },
    },
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
}

export default function CoursesCarousel() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleNavigate = () => {
    router.push("/courses")
  }

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              ELEVATE YOUR SKILLS
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #0052A5 0%, #0078D7 100%)",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "2px",
                },
              }}
            >
              Most Popular <span style={{ color: "#0052A5" }}>Courses</span>
            </Typography>
          </m.div>

          <Typography
            variant="body1"
            sx={{
              mx: "auto",
              maxWidth: "700px",
              mt: 4,
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            Whether you prefer the convenience of learning from home or the advantages of direct sessions on campus with
            our expert instructors, we have got you covered!
          </Typography>
        </Stack>

        <Box sx={{ position: "relative", "& .slick-dots": { bottom: "-60px" } }}>
          <Slider {...sliderSettings}>
            {coursesDetails.map((course, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <m.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card
                    sx={{
                      height: "480px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      transform: hoveredCard === index ? "translateY(-12px)" : "none",
                      "&:hover": {
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                        "& .course-image": {
                          transform: "scale(1.1)",
                        },
                        "& .course-overlay": {
                          opacity: 0.7,
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <Box
                        className="course-image"
                        component="img"
                        src={course.image}
                        alt={course.title}
                        sx={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        }}
                      />
                      <Box
                        className="course-overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)",
                          opacity: 0.5,
                          transition: "opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        }}
                      />
                      <Chip
                        label={course.category}
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          backgroundColor: "rgba(255,255,255,0.95)",
                          fontWeight: 600,
                          color: "primary.main",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 3, height: "280px", display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1.5,
                          fontWeight: 600,
                          textAlign: "left",
                          lineHeight: 1.3,
                          height: "60px",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {course.title}
                      </Typography>

                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Rating value={4.5} precision={0.5} readOnly size="small" sx={{ mr: 1 }} />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          (125 reviews)
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderTop: "1px solid rgba(0,0,0,0.08)",
                          pt: 2,
                          mt: "auto",
                          mb: 2,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Clock size={16} style={{ marginRight: "4px", opacity: 0.7 }} />
                          <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            {course.duration}
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Monitor size={16} style={{ marginRight: "4px", opacity: 0.7 }} />
                          <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            {course.format}
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Users size={16} style={{ marginRight: "4px", opacity: 0.7 }} />
                          <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            2.5k+
                          </Typography>
                        </Box>
                      </Box>

                      <Link href={`/courses/${course.id}`} passHref style={{ textDecoration: "none" }}>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            py: 1.5,
                            background: "linear-gradient(90deg, #0052A5 0%, #0078D7 100%)",
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                            "&:hover": {
                              background: "linear-gradient(90deg, #003d7a 0%, #0066cc 100%)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 8px 16px rgba(0, 82, 165, 0.3)",
                            },
                          }}
                        >
                          Explore Course
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                </m.div>
              </Box>
            ))}
          </Slider>
        </Box>

        <Stack
          spacing={2}
          sx={{
            textAlign: "center",
            mt: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <m.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleNavigate}
              size="large"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "16px",
                background: "linear-gradient(135deg, #0052A5 0%, #0078D7 100%)",
                boxShadow: "0 8px 16px rgba(0, 82, 165, 0.3)",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 24px rgba(0, 82, 165, 0.4)",
                },
              }}
            >
              <HiArrowRight size={20} style={{ marginRight: "8px" }} />
              Browse All Courses
            </Button>
          </m.div>
        </Stack>
      </Container>
    </Box>
  )
}
