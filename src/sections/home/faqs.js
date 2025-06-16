"use client"

import { useState } from "react"
import { m } from "framer-motion"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { Container } from "@mui/system"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { styled } from "@mui/material/styles"
import Iconify from "src/components/iconify"
import { _faqs } from "src/_mock/_courseDetails"
import { useRouter } from "src/routes/hooks"

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: "none",
  boxShadow: "none",
  borderRadius: "16px !important",
  marginBottom: "16px",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.95)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
  },
  "&.Mui-expanded": {
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
  },
  "&:before": {
    display: "none",
  },
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: "72px",
  padding: "0 24px",
  borderRadius: "16px",
  "&.Mui-expanded": {
    minHeight: "72px",
  },
  "& .MuiAccordionSummary-content": {
    margin: "16px 0",
    "&.Mui-expanded": {
      margin: "16px 0",
    },
  },
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "0 24px 24px 24px",
  borderTop: "1px solid rgba(0, 0, 0, 0.08)",
}))

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
}

const Faqs = () => {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleNavigate = () => {
    router.push("/faqs")
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
          paddingX: { xs: 2, md: 4 },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          <m.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Box sx={{ textAlign: "left", position: "sticky", top: 100 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block",
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  lineHeight: 1.2,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "60px",
                    height: "4px",
                    background: "linear-gradient(90deg, #0052A5 0%, #0078D7 100%)",
                    bottom: "-12px",
                    left: 0,
                    borderRadius: "2px",
                  },
                }}
              >
                Your Questions, <span style={{ color: "#0052A5" }}>Our Expertise</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "text.secondary",
                  lineHeight: 1.6,
                  mt: 4,
                }}
              >
                Have some questions before you get started? Check out our FAQs or let's talk :)
              </Typography>

              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Button
                  variant="contained"
                  onClick={handleNavigate}
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: "16px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #0052A5 0%, #0078D7 100%)",
                    boxShadow: "0 8px 16px rgba(0, 82, 165, 0.3)",
                    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 24px rgba(0, 82, 165, 0.4)",
                    },
                  }}
                  endIcon={<Iconify icon="eva:arrow-forward-fill" />}
                >
                  View All FAQs
                </Button>
              </m.div>
            </Box>
          </m.div>

          <m.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {_faqs.slice(0, 4).map((accordion, index) => (
              <m.div key={accordion.id} variants={item}>
                <StyledAccordion expanded={expanded === accordion.id} onChange={handleChange(accordion.id)}>
                  <StyledAccordionSummary
                    expandIcon={
                      <IconButton
                        sx={{
                          backgroundColor: expanded === accordion.id ? "primary.main" : "grey.100",
                          color: expanded === accordion.id ? "white" : "text.primary",
                          width: 40,
                          height: 40,
                          transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        {expanded === accordion.id ? <RemoveIcon /> : <AddIcon />}
                      </IconButton>
                    }
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        color: expanded === accordion.id ? "primary.main" : "text.primary",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {accordion.heading}
                    </Typography>
                  </StyledAccordionSummary>
                  <StyledAccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {accordion.detail}
                    </Typography>
                  </StyledAccordionDetails>
                </StyledAccordion>
              </m.div>
            ))}
          </m.div>
        </Box>
      </Container>
    </Box>
  )
}

export default Faqs
