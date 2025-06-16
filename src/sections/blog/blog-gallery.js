"use client"

import { useState } from "react"
import { m } from "framer-motion"

import {
  Box,
  Grid,
  Card,
  Stack,
  Avatar,
  Divider,
  CardMedia,
  Typography,
  CardContent,
  Chip,
  Container,
} from "@mui/material"
import { styled } from "@mui/material/styles"

import { useRouter } from "src/routes/hooks"
import { cardData } from "src/_mock/_courseDetails"
import { varFade } from "src/components/animate"

// Styled components for modern blog design
const StyledContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  background: `
    radial-gradient(ellipse 1200px 800px at 50% -20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse 800px 600px at 80% 80%, rgba(147, 197, 253, 0.02) 0%, transparent 50%),
    linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)
  `,
  minHeight: "100vh",
  paddingTop: "2rem",
  paddingBottom: "4rem",
}))

const ModernCard = styled(Card)(({ theme, featured = false }) => ({
  borderRadius: "24px",
  overflow: "hidden",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  boxShadow: featured
    ? "0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 4px 25px 0px rgba(0, 0, 0, 0.04)"
    : "0 10px 25px -5px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  "&:hover": {
    transform: featured ? "translateY(-12px)" : "translateY(-8px)",
    boxShadow: featured
      ? "0 32px 64px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.05)"
      : "0 20px 40px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.05)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: featured ? "6px" : "4px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover::before": {
    opacity: 1,
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
    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.05) 100%)",
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover::after": {
    opacity: 1,
  },
})

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.5rem",
  marginBottom: "2rem",
  background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    borderRadius: "2px",
  },
}))

const CategoryChip = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%)",
  color: "#3b82f6",
  fontWeight: 600,
  fontSize: "0.75rem",
  height: "28px",
  border: "1px solid rgba(59, 130, 246, 0.2)",
  "&:hover": {
    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.15) 100%)",
  },
}))

const AuthorSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "1.5rem",
  padding: "1rem",
  background: "rgba(248, 250, 252, 0.5)",
  borderRadius: "16px",
  border: "1px solid rgba(0, 0, 0, 0.03)",
})

const StyledAvatar = styled(Avatar)({
  width: 48,
  height: 48,
  marginRight: "12px",
  border: "2px solid rgba(59, 130, 246, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    borderColor: "rgba(59, 130, 246, 0.3)",
  },
})

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
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

const BlogGallery = () => {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState(null)

  const featuredArticle = cardData[0]
  const popularArticles = cardData.slice(1, 4)
  const latestArticles = cardData.slice(4, 10)

  const handleCardClick = (blogId) => {
    router.push(`/blog/${blogId}`)
  }

  return (
    <StyledContainer maxWidth="xl">
      {/* Header Section */}
      <m.div variants={varFade().inUp} initial="hidden" animate="visible">
        <Stack
          spacing={4}
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            pt: { xs: 6, md: 8 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Chip
              label="Stay Updated"
              sx={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%)",
                color: "#3b82f6",
                fontWeight: 600,
                fontSize: "14px",
                height: "32px",
                border: "1px solid rgba(59, 130, 246, 0.2)",
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
                Blogs
              </Box>
            </Typography>
          </m.div>

          <Typography
            variant="h6"
            sx={{
              mx: "auto",
              maxWidth: "600px",
              color: "text.secondary",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
            }}
          >
            Discover insights, tutorials, and industry trends to accelerate your learning journey
          </Typography>
        </Stack>
      </m.div>

      {/* Main Content */}
      <m.div variants={containerVariants} initial="hidden" animate="visible">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Featured Article */}
          <Grid item xs={12} lg={8}>
            <SectionTitle>Featured Article</SectionTitle>
            <m.div variants={cardVariants}>
              <ModernCard
                featured
                onMouseEnter={() => setHoveredCard(featuredArticle.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(featuredArticle.id)}
              >
                <ImageContainer>
                  <CardMedia
                    component="img"
                    height="400"
                    image={featuredArticle.imageSrc || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    sx={{
                      transition: "transform 0.4s ease",
                      transform: hoveredCard === featuredArticle.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </ImageContainer>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    <CategoryChip label={featuredArticle.category} size="small" />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#1e293b",
                      lineHeight: 1.3,
                    }}
                  >
                    {featuredArticle.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                    }}
                  >
                    {featuredArticle.description}
                  </Typography>
                  <Divider sx={{ my: 3, background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      {featuredArticle.date}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                      5 min read
                    </Typography>
                  </Box>
                </CardContent>
              </ModernCard>
            </m.div>
          </Grid>

          {/* Popular Articles */}
          <Grid item xs={12} lg={4}>
            <SectionTitle sx={{ mt: { xs: 4, lg: 0 } }}>Most Popular</SectionTitle>
            <Stack spacing={3}>
              {popularArticles.map((blog, index) => (
                <m.div key={blog.id} variants={cardVariants} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <ModernCard
                    onMouseEnter={() => setHoveredCard(blog.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(blog.id)}
                    sx={{
                      display: "flex",
                      height: "140px",
                    }}
                  >
                    <CardContent sx={{ flex: 1, p: 3 }}>
                      <CategoryChip label={blog.category} size="small" sx={{ mb: 1.5 }} />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: "1rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                        {blog.date}
                      </Typography>
                    </CardContent>
                    <ImageContainer sx={{ width: "120px", flexShrink: 0 }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                          transform: hoveredCard === blog.id ? "scale(1.1)" : "scale(1)",
                        }}
                        image={blog.imageSrc || "/placeholder.svg"}
                        alt={blog.title}
                      />
                    </ImageContainer>
                  </ModernCard>
                </m.div>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Latest Articles */}
        <Box sx={{ mt: 8 }}>
          <SectionTitle>Latest Articles</SectionTitle>
          <Grid container spacing={4}>
            {latestArticles.map((blog, index) => (
              <Grid item xs={12} key={blog.id}>
                <m.div variants={cardVariants} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <ModernCard
                    onMouseEnter={() => setHoveredCard(blog.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(blog.id)}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      height: { xs: "auto", md: "280px" },
                    }}
                  >
                    <ImageContainer sx={{ width: { xs: "100%", md: "40%" }, flexShrink: 0 }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          height: { xs: "240px", md: "100%" },
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                          transform: hoveredCard === blog.id ? "scale(1.05)" : "scale(1)",
                        }}
                        image={blog.imageSrc || "/placeholder.svg"}
                        alt={blog.title}
                      />
                    </ImageContainer>
                    <CardContent sx={{ flex: 1, p: 4, display: "flex", flexDirection: "column" }}>
                      <Box sx={{ mb: 2 }}>
                        <CategoryChip label={blog.category} size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: 500 }}>
                          {blog.date}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: "#1e293b",
                          lineHeight: 1.3,
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          mb: "auto",
                          lineHeight: 1.6,
                          fontSize: "1rem",
                        }}
                      >
                        {blog.description}
                      </Typography>
                      <AuthorSection>
                        <StyledAvatar src={blog.authorImage || "/placeholder.svg"} alt={blog.author} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#1e293b" }}>
                            {blog.author}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                            {blog.authorRole}
                          </Typography>
                        </Box>
                      </AuthorSection>
                    </CardContent>
                  </ModernCard>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </m.div>
    </StyledContainer>
  )
}

export default BlogGallery
