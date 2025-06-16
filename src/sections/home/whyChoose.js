"use client"
import { m } from "framer-motion"
import { styled } from "@mui/material/styles"
import { Box, Card, Grid, Container, Typography, CardContent } from "@mui/material"
import { cardsData } from "src/_mock/_courseDetails"
import { varFade } from "src/components/animate"

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "320px",
  padding: "5px",
  textAlign: "center",
  borderRadius: "24px",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.06)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden",
  transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
  border: "1px solid rgba(145, 158, 171, 0.08)",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 25px 50px rgba(0, 82, 165, 0.15)",
    background: "rgba(255, 255, 255, 0.95)",
    "& .icon-wrapper": {
      transform: "translateY(-8px) translateX(-50%) scale(1.1)",
      boxShadow: "0 15px 25px rgba(0, 82, 165, 0.25)",
    },
    "& .card-content": {
      transform: "translateY(-5px)",
    },
  },
}))

const IconWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  width: "110px",
  height: "110px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
  transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
  boxShadow: "0 10px 20px rgba(0, 82, 165, 0.2)",
  className: "icon-wrapper",
}))

const WhyChooseUs = () => (
  <Box
    sx={{
      position: "relative",
      py: 10,
      overflow: "hidden",
    }}
  >
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        width: "100%",
        position: "relative",
        padding: { xs: "0 16px", md: "0 24px" },
      }}
    >
      <Box sx={{ width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <m.div variants={varFade().inDown}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 2,
              mb: 1,
              display: "block",
            }}
          >
            WHAT SETS US APART
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: "40px",
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
            Why Choose <span style={{ color: "#0052A5" }}>CareerEdge?</span>
          </Typography>
        </m.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard>
                  <IconWrapper>
                    <m.img
                      src={card.icon}
                      alt={card.title}
                      style={{ width: "55px", height: "55px" }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </IconWrapper>
                  <CardContent
                    className="card-content"
                    sx={{
                      flexGrow: 1,
                      marginTop: { xs: "100px", lg: "130px", md: "110px" },
                      transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      position: "relative",
                      zIndex: 1,
                      px: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        background: "linear-gradient(90deg, #0052A5 0%, #0078D7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
)

export default WhyChooseUs
