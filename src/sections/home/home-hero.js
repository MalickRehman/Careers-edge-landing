"use client"

import { m, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { useRouter } from "src/routes/hooks"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"
import { alpha, styled, useTheme } from "@mui/material/styles"
import { paths } from "src/routes/paths"
import { RouterLink } from "src/routes/components"
import { useResponsive } from "src/hooks/use-responsive"
import { HEADER } from "src/layouts/config-layout"
import { bgBlur, bgGradient, textGradient } from "src/theme/css"
import Iconify from "src/components/iconify"
import { varFade, MotionContainer } from "src/components/animate"

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === "light" ? 0.9 : 0.94),
    imgUrl: "/assets/images/home/hero_bg.png",
  }),
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    position: "fixed",
  },
}))

const StyledWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}))

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.warning.main} 0%, ${theme.palette.info.main} 25%, ${theme.palette.warning.main} 50%, ${theme.palette.info.main} 75%, ${theme.palette.warning.main} 100%`,
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: "start",
  backgroundSize: "400%",
  fontSize: `${64 / 16}rem`,
  [theme.breakpoints.up("md")]: {
    fontSize: `${96 / 16}rem`,
  },
}))

const ParticleContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  zIndex: 1,
  "& .particle": {
    position: "absolute",
    width: "4px",
    height: "4px",
    backgroundColor: "rgba(0, 82, 165, 0.3)",
    borderRadius: "50%",
    animation: "particleFloat 15s linear infinite",
  },
  "@keyframes particleFloat": {
    "0%": {
      transform: "translateY(100vh) translateX(0px)",
      opacity: 0,
    },
    "10%": {
      opacity: 1,
    },
    "90%": {
      opacity: 1,
    },
    "100%": {
      transform: "translateY(-100px) translateX(100px)",
      opacity: 0,
    },
  },
})

const StyledEllipseTop = styled(m.div)(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: "50%",
  position: "absolute",
  filter: "blur(100px)",
  WebkitFilter: "blur(100px)",
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}))

const StyledEllipseBottom = styled(m.div)(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: "10%",
  right: "10%",
  borderRadius: "50%",
  position: "absolute",
  filter: "blur(100px)",
  WebkitFilter: "blur(100px)",
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}))

const StyledPolygon = styled("div")(({ opacity = 1, anchor = "left", theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: "50%",
  position: "absolute",
  clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
  ...(anchor === "left" && {
    left: 0,
    ...(theme.direction === "rtl" && {
      transform: "scale(-1, 1)",
    }),
  }),
  ...(anchor === "right" && {
    right: 0,
    transform: "scaleX(-1)",
    ...(theme.direction === "rtl" && {
      transform: "scaleX(1)",
    }),
  }),
}))

export default function HomeHero() {
  const router = useRouter()
  const mdUp = useResponsive("up", "md")
  const theme = useTheme()
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const [percent, setPercent] = useState(0)
  const lightMode = theme.palette.mode === "light"

  const y1 = useTransform(scrollY, [0, 300], [150, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const getScroll = useCallback(() => {
    let heroHeight = 0
    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight
    }
    scrollY.on("change", (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight
      setPercent(Math.floor(scrollPercent))
    })
  }, [scrollY])

  useEffect(() => {
    getScroll()
  }, [getScroll])

  const transition = {
    repeatType: "loop",
    ease: "linear",
    duration: 30,
    repeat: Number.POSITIVE_INFINITY,
  }

  const hide = percent > 120

  const renderParticles = () => {
    const particles = []
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />,
      )
    }
    return particles
  }

  const renderDescription = (
    <m.div style={{ y: y1, opacity }}>
      <Stack
        alignItems="start"
        justifyContent="start"
        sx={{
          height: 1,
          mx: "auto",
          maxWidth: 520,
          mt: {
            md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
          },
        }}
      >
        <m.div variants={varFade().in}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 3,
              mb: 2,
              textAlign: "start",
            }}
          >
            TRANSFORM YOUR FUTURE
          </Typography>
        </m.div>

        <m.div variants={varFade().in}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "start",
              fontWeight: 800,
              letterSpacing: 2,
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Start Your <br /> Future with
          </Typography>
        </m.div>

        <m.div variants={varFade().in}>
          <StyledTextGradient
            animate={{ backgroundPosition: "200% start" }}
            sx={{
              fontWeight: 900,
              letterSpacing: 4,
              lineHeight: 1.1,
              fontSize: { xs: "3rem", lg: "3rem" },
              mb: 3,
            }}
            transition={{
              repeatType: "reverse",
              ease: "linear",
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            CAREER EDGE
          </StyledTextGradient>
        </m.div>

        <m.div variants={varFade().in}>
          <Typography
            variant="h6"
            sx={{
              textAlign: "start",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              lineHeight: 1.6,
              fontFamily: "Poppins, sans-serif",
              color: (theme) => alpha(theme.palette.text.primary, 0.8),
              maxWidth: 480,
              mb: 4,
            }}
          >
            Open the door to endless opportunities with expert-guided courses that will drive your career to new
            heights.
          </Typography>
        </m.div>

        <m.div variants={varFade().in}>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }} sx={{ mt: 2 }}>
            <Button
              component={RouterLink}
              href={paths.enroll}
              color="primary"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="eva:flash-fill" width={24} />}
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
                borderRadius: "16px",
                background: "linear-gradient(135deg, #0052A5 0%, #0078D7 100%)",
                boxShadow: "0 12px 24px rgba(0, 82, 165, 0.3)",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 32px rgba(0, 82, 165, 0.4)",
                },
              }}
            >
              Start Learning
            </Button>

            <Button
              component={RouterLink}
              href={paths.courses.root}
              color="inherit"
              size="large"
              variant="outlined"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
                borderRadius: "16px",
                borderWidth: "2px",
                borderColor: "primary.main",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                "&:hover": {
                  borderColor: "primary.dark",
                  background: "rgba(0, 82, 165, 0.08)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              Explore Courses
            </Button>
          </Stack>
        </m.div>
      </Stack>
    </m.div>
  )

  const renderSlides = (
    <m.div style={{ y: y2, opacity }}>
      <Stack
        direction="row"
        alignItems="flex-start"
        sx={{
          height: "150%",
          position: "absolute",
          transform: `skew(${-16 - percent / 24}deg, ${4 - percent / 16}deg)`,
          ...(theme.direction === "rtl" && {
            transform: `skew(${16 + percent / 24}deg, ${4 + percent / 16}deg)`,
          }),
        }}
      >
        <Stack
          component={m.div}
          variants={varFade().in}
          sx={{
            width: 344,
            position: "relative",
          }}
        >
          <Box
            component={m.img}
            animate={{ y: ["0%", "100%"] }}
            transition={transition}
            alt={lightMode ? "light_1" : "dark_1"}
            src={lightMode ? `/assets/images/home/hero/newImage1 (2).png` : `/assets/images/home/hero/darkImage.png`}
            sx={{ position: "absolute", mt: -5 }}
          />
          <Box
            component={m.img}
            animate={{ y: ["-100%", "0%"] }}
            transition={transition}
            alt={lightMode ? "light_1" : "dark_1"}
            src={lightMode ? `/assets/images/home/hero/newImage1 (2).png` : `/assets/images/home/hero/darkImage.png`}
            sx={{ position: "absolute" }}
          />
        </Stack>

        <Stack component={m.div} variants={varFade().in} sx={{ width: 720, position: "relative", ml: -5 }}>
          <Box
            component={m.img}
            animate={{ y: ["100%", "0%"] }}
            transition={transition}
            alt={lightMode ? "light_2" : "dark_2"}
            src={
              lightMode ? `/assets/images/home/hero/Blue_and_White_Modern.png` : `/assets/images/home/hero/dark_2.webp`
            }
            sx={{ position: "absolute", mt: -1 }}
          />
          <Box
            component={m.img}
            animate={{ y: ["0%", "-100%"] }}
            transition={transition}
            alt={lightMode ? "light_2" : "dark_2"}
            src={
              lightMode ? `/assets/images/home/hero/Blue_and_White_Modern.png` : `/assets/images/home/hero/dark_2.webp`
            }
            sx={{ position: "absolute" }}
          />
        </Stack>
      </Stack>
    </m.div>
  )

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  )

  const renderEllipses = (
    <>
      {mdUp && (
        <StyledEllipseTop
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
      <StyledEllipseBottom
        animate={{
          x: [0, -20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </>
  )

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <ParticleContainer>{renderParticles()}</ParticleContainer>
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1, position: "relative", zIndex: 2 }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
              <Grid xs={12} md={6}>
                {renderDescription}
              </Grid>
              {mdUp && <Grid md={6}>{renderSlides}</Grid>}
            </Grid>
          </Container>
          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  )
}
