"use client"

import { m } from "framer-motion"
import { useState } from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useTheme, styled } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { bgGradient } from "src/theme/css"
import { varFade, MotionViewport } from "src/components/animate"

const StyledContainer = styled(Box)(({ theme }) => ({
  ...bgGradient({
    direction: "135deg",
    startColor: theme.palette.primary.main,
    endColor: theme.palette.primary.dark,
  }),
  borderRadius: "24px",
  padding: theme.spacing(6),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)
    `,
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}))

const FloatingElement = styled(m.div)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
}))

export default function HomeAdvertisement() {
  const theme = useTheme()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setEmail("")
  }

  const renderDescription = (
    <Box
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
        maxWidth: { md: "50%" },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="overline"
          sx={{
            color: "rgba(255,255,255,0.8)",
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: "block",
          }}
        >
          STAY UPDATED
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            color: "common.white",
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          Subscribe to Our Newsletter!
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255,255,255,0.9)",
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          Get the latest updates on new courses, industry insights, and exclusive offers delivered straight to your
          inbox.
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            maxWidth: 500,
          }}
        >
          <TextField
            fullWidth
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255,255,255,0.95)",
                borderRadius: "12px",
                fontSize: "1rem",
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255,255,255,0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "16px 20px",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              minWidth: { xs: "100%", sm: "140px" },
              backgroundColor: "rgba(255,255,255,0.95)",
              color: "primary.main",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "12px",
              px: 3,
              py: 2,
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              "&:hover": {
                backgroundColor: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              },
              "&:disabled": {
                backgroundColor: "rgba(255,255,255,0.7)",
                color: "primary.main",
              },
            }}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </Box>
      </m.div>
    </Box>
  )

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade().inUp}
      alignItems="center"
      sx={{
        flex: 1,
        position: "relative",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Box
        component={m.img}
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        alt="newsletter"
        src="/assets/images/home/rocket.webp"
        sx={{
          maxWidth: 320,
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
        }}
      />
    </Stack>
  )

  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
      }}
    >
      <Container
        maxWidth="lg"
        component={MotionViewport}
        sx={{
          textAlign: "center",
          width: "100%",
          position: "relative",
          padding: { xs: "0 16px", md: "0 24px" },
        }}
      >
        <StyledContainer>
          <FloatingElement
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            sx={{
              width: 100,
              height: 100,
              top: "10%",
              right: "10%",
            }}
          />

          <FloatingElement
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            sx={{
              width: 60,
              height: 60,
              bottom: "20%",
              left: "15%",
            }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={{ xs: 4, md: 6 }}
            sx={{ position: "relative", zIndex: 2 }}
          >
            {renderDescription}
            {renderImg}
          </Stack>
        </StyledContainer>
      </Container>
    </Box>
  )
}
