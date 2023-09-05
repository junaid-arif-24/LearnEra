import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Button,
} from '@mui/material';

const CourseDetail = () => {
  const {courseId} = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [purchased, setPurchased] = useState(false);
  useEffect(() => {
    fetch(`https://learn-era-backend.vercel.app/user/course/${courseId}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data.course);
        setLoading(false);
      });
  }, [courseId]);

  const coursePurchasing = () => {
    fetch(`https://learn-era-backend.vercel.app/user/courses/${courseId}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setPurchased(true);
      });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
      }}>
      <Box sx={{flex: '1'}}>
        <Container maxWidth="lg">
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '60vh',
              }}>
              <CircularProgress />
            </Box>
          ) : (
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                borderRadius: '10px',
                margin: '20px auto',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{display: 'flex', alignItems: 'center', gap: 4}}>
                  <img
                    src={data.imageLink}
                    alt={data.title}
                    style={{
                      width: '100%',
                      height: '400px',
                      border: '2px solid grey',
                      borderRadius: '10px',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <Typography
                    variant="h4"
                    sx={{fontWeight: 700, fontStyle: 'italic'}}>
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      wordWrap: 'break-word',
                      maxWidth: '100%',
                      overflowWrap: 'break-word', // Ensure words break before the limit
                    }}>
                    {data.description}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      fontSize: '2rem',
                      backgroundColor: 'orange',
                      padding: '0px 20px',
                      borderRadius: '15px',
                      color: 'white',
                    }}>
                    $ {data.price}
                  </Typography>
                  {!purchased && (
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        background:
                          'linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%)',
                        margin: '10px',
                        padding: '15px 45px',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        transition: '0.5s',
                        backgroundSize: '200% auto',
                        color: 'white',
                        boxShadow: '0 0 20px #eee',
                        borderRadius: '10px',
                        display: 'block',
                        '&:hover': {
                          backgroundPosition: 'right center',
                          color: '#fff',
                          textDecoration: 'none',
                        },
                      }}
                      onClick={coursePurchasing}>
                      Purchase Now
                    </Button>
                  )}
                </Grid>
              </Grid>
              {purchased && (
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    background:
                      'radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    maxWidth: 'max-content',
                    fontWeight: 800,
                  }}>
                  Thanks for purchasing the course
                </Typography>
              )}
            </Paper>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default CourseDetail;
