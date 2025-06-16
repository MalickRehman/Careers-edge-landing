import { Box, Container, Grid, Link, Typography, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Logo from "src/components/logo"
import { paths } from "src/routes/paths"

// Styled components for modern footer design
const StyledFooter = styled(Box)(({ theme }) => ({
  position: "relative",
  background: `
    linear-gradient(135deg, 
      #0f172a 0%, 
      #1e293b 25%, 
      #334155 50%, 
      #1e293b 75%, 
      #0f172a 100%
    )
  `,
  color: "#e2e8f0",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(ellipse 800px 600px at 20% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse 600px 800px at 80% 100%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 400px 400px at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)",
  },
}))

const ContentWrapper = styled(Container)({
  position: "relative",
  zIndex: 1,
})

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.1rem",
  marginBottom: "1.5rem",
  background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-8px",
    left: 0,
    width: "30px",
    height: "2px",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    borderRadius: "1px",
  },
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#94a3b8",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.75rem",
  fontSize: "0.95rem",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  paddingLeft: "0px",
  "&:hover": {
    color: "#60a5fa",
    paddingLeft: "8px",
    transform: "translateX(4px)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-8px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "#3b82f6",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover::before": {
    opacity: 1,
  },
}))

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#94a3b8",
  backgroundColor: "rgba(59, 130, 246, 0.1)",
  border: "1px solid rgba(59, 130, 246, 0.2)",
  margin: "0 8px 8px 0",
  width: "44px",
  height: "44px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
    transition: "left 0.5s",
  },
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px -8px rgba(59, 130, 246, 0.3)",
    "&::before": {
      left: "100%",
    },
  },
}))

const ContactItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
  color: "#94a3b8",
  fontSize: "0.95rem",
  "& .MuiSvgIcon-root": {
    marginRight: "12px",
    color: "#60a5fa",
    fontSize: "1.2rem",
  },
})

const CompanyDescription = styled(Typography)({
  color: "#94a3b8",
  lineHeight: 1.7,
  marginBottom: "2rem",
  fontSize: "0.95rem",
})

const CopyrightSection = styled(Box)(({ theme }) => ({
  marginTop: "3rem",
  paddingTop: "2rem",
  borderTop: "1px solid rgba(59, 130, 246, 0.1)",
  textAlign: "center",
  background: "rgba(15, 23, 42, 0.5)",
  backdropFilter: "blur(10px)",
  borderRadius: "12px",
  padding: "1.5rem",
}))

export default function Footer() {
  return (
    <StyledFooter sx={{ pt: 8, pb: 4 }}>
      <ContentWrapper>
        <Box sx={{ mb: 6 }}>
          <Logo sx={{ mb: 2, filter: "brightness(0) invert(1)" }} />
        </Box>

        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <SectionTitle variant="h6">CareerEdge</SectionTitle>
            <CompanyDescription variant="body1">
              Unlock your potential and shape your future by mastering the IT skills that are driving today's digital
              transformation. Join thousands of professionals advancing their careers.
            </CompanyDescription>

            <Box sx={{ mb: 3 }}>
              <ContactItem>
                <EmailIcon />
                <span>hello@careeredge.com</span>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon />
                <span>San Francisco, CA 94102</span>
              </ContactItem>
            </Box>

            <Typography variant="body2" sx={{ color: "#64748b", mb: 2 }}>
              Follow us on social media
            </Typography>
            <Box>
              <SocialIconButton href="#" aria-label="Twitter">
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="Facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="Instagram">
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton href="#" aria-label="GitHub">
                <GitHubIcon />
              </SocialIconButton>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle variant="h6">Services</SectionTitle>
            <StyledLink href={paths.courses.root}>All Courses</StyledLink>
            <StyledLink href="#">Web Development</StyledLink>
            <StyledLink href="#">Data Science</StyledLink>
            <StyledLink href="#">Cloud Computing</StyledLink>
            <StyledLink href="#">Cybersecurity</StyledLink>
            <StyledLink href="#">AI & Machine Learning</StyledLink>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle variant="h6">Company</SectionTitle>
            <StyledLink href={paths.about}>About Us</StyledLink>
            <StyledLink href={paths.contact}>Contact Us</StyledLink>
            <StyledLink href={paths.blog}>Blog</StyledLink>
            <StyledLink href={paths.faqs}>FAQs</StyledLink>
            <StyledLink href="#">Careers</StyledLink>
            <StyledLink href="#">Press Kit</StyledLink>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle variant="h6">Support</SectionTitle>
            <StyledLink href="#">Help Center</StyledLink>
            <StyledLink href="#">Community</StyledLink>
            <StyledLink href="#">Documentation</StyledLink>
            <StyledLink href="#">API Reference</StyledLink>
            <StyledLink href="#">Status Page</StyledLink>
            <StyledLink href="#">Report Bug</StyledLink>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle variant="h6">Legal</SectionTitle>
            <StyledLink href={paths.terms}>Terms of Service</StyledLink>
            <StyledLink href={paths.privacy}>Privacy Policy</StyledLink>
            <StyledLink href="#">Cookie Policy</StyledLink>
            <StyledLink href="#">GDPR</StyledLink>
            <StyledLink href="#">Accessibility</StyledLink>
            <StyledLink href="#">Licenses</StyledLink>
          </Grid>
        </Grid>

        <CopyrightSection>
          <Typography variant="body2" sx={{ color: "#94a3b8", mb: 1 }}>
            © 2024 CareerEdge Inc. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.85rem" }}>
            Empowering careers through technology education since 2018
          </Typography>
        </CopyrightSection>
      </ContentWrapper>
    </StyledFooter>
  )
}
