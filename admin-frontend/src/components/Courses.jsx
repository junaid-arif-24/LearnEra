import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/admin/courses`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        );
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [courses]);

  const courseDeleteHandler = async (id) => {
    const confirmation = window.confirm(
      'Are you sure you want to delete this course?'
    );

    if (confirmation) {
      try {
        const response = await axios.delete(
          `${BASE_URL}/admin/course/${id}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        );

        if (response.status === 200) {
          navigate('/courses');
          alert('Course Deleted Successfully');
        } else {
          console.log('Course deletion failed.');
        }
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  return (
    <div
      style={{
        padding: '30px',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course._id}>
            <Card
              sx={{
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 3,
              }}
            >
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
                }}
              >
                <Typography variant="h6" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  ${course.price}
                </Typography>
              </CardContent>
              <CardActions style={{ alignSelf: 'flex-end' }}>
                <Button
                  startIcon={<EditIcon />}
                  size="small"
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate(`/UpdateCourse/${course._id}`);
                  }}
                >
                  Update
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    courseDeleteHandler(course._id);
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Courses;
