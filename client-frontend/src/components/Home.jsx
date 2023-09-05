import {Box, Button, Grid, Typography} from '@mui/material';
import {userLoginState} from '../store/selectors/isLoginSelector';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(userLoginState);
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        // padding:"20px",
        display: 'flex',
        justifyContent: 'center',
        // alignItems:'center'
      }}>
      <Grid container spacing={2} p={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '50px',
          }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              background:
                'radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              maxWidth: 'max-content',
              fontWeight:1000
            }}>
            Welcome to 
            LearnEra
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              navigate(isLoggedIn ? '/courses' : '/signin');
            }}>
            {isLoggedIn ? ' Go to Courses ' : 'Login Here'}
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '50px',
          }}>
          <Box
            component="img"
            sx={{
              height: 'auto', // Allow the height to adjust automatically
              width: '100%', // Set the width to 100% to fit its container
              maxWidth: '100%', // Add this to ensure the image doesn't exceed the container width
              maxHeight: 'auto', // Allow the height to adjust automatically
            }}
            alt="home page image."
            src="https://i.ibb.co/Mk2V1jj/17.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
