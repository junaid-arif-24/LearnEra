import {Link, Grid, IconButton, styled, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const FooterContainer = styled('footer')({
  backgroundColor: '#1976D2',
  color: 'white',
  padding: '16px',
  textAlign: 'center',
  width: '100%',
 
});


const SocialIconButton = styled(IconButton)({
  margin: '8px',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container justifyContent="center">
        <SocialIconButton
          component={Link}
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedInIcon />
        </SocialIconButton>
        <SocialIconButton
          component={Link}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer">
          <InstagramIcon />
        </SocialIconButton>
        <SocialIconButton
          component={Link}
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer">
          <TwitterIcon />
        </SocialIconButton>
       
      </Grid>
      <Typography variant='body1'>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
