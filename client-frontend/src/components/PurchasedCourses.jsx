import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography,
    Grid,
  } from '@mui/material';
  import DetailsIcon from '@mui/icons-material/Details';
  import {useEffect, useState} from 'react';
  import axios from 'axios';
  import {useNavigate} from 'react-router-dom';
  import { BASE_URL } from '../config';
  const PurchasedCourses = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/user/purchasedCourses`, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          });
          setCourses(response.data.purchasedCourses);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchCourses();
    }, [courses]);
  
    return (
      <div
        style={{
          padding: '30px',
          minHeight: '100vh',
          backgroundColor: '#ffffff',
        }}>
    
        <Grid container spacing={3}>
          {courses.map(course => (
            <Grid item xs={12} sm={6} md={4} key={course._id}>
              <Card
                sx={{
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: 3,
                }}>
                <CardMedia
                  component="img"
                  height="140"
                  src={course.imageLink}
                  alt={course.title}
                />
                <CardContent
                  onClick={() => {
                    navigate(`/courses/${course._id}`);
                  }}
                  style={{
                    flex: '1 0 auto',
                    height: '4.5em', // Adjust the height to control the number of lines displayed
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                  <Typography variant="h6" component="h2">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {course.description}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="h5" color="textSecondary">
                    ${course.price}
                  </Typography>
                </CardContent>
                <CardActions style={{alignSelf: 'center'}}>
                  <Button
                    startIcon={<DetailsIcon />}
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      navigate(`/courses/${course._id}`);
                    }}
                    sx={{
                      background:
                        'linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%)',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      transition: '0.5s',
                      backgroundSize: '200% auto',
                      color: 'white',
                      boxShadow: '0 0 20px #eee',
                      borderRadius: '10px',
                      '&:hover': {
                        backgroundPosition: 'right center',
                        color: '#fff',
                        textDecoration: 'none',
                      },
                    }}>
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default PurchasedCourses;
  