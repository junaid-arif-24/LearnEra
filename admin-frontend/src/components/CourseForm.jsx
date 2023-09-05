import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  CardActions,
} from '@mui/material';

const CourseForm = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  imageLink,
  setImageLink,
  published,
  setPublished,
  handleAddCourse,
  handleUpdateCourse,
  isUpdate,
}) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding:"20px" // Set a minimum height for the container
      }}>
      <Card
        elevation={5}
        sx={{
          width: '100%', // Make the card width 100% for responsiveness
          maxWidth: '500px', // Set a maximum width to avoid excessive stretching
          padding: '20px',
        }}>
        <CardContent>
          <Typography textAlign="center" variant="h5" gutterBottom>
            {isUpdate ? 'Update the course' : 'Add a New Course'}
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
            rows={4} // Adjust the number of rows as needed
          />
          <TextField
            label="Image Link"
            variant="outlined"
            fullWidth
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            value={price}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            onChange={(e) => setPrice(e.target.value)}
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Published</InputLabel>
            <Select
              value={published}
              onChange={(e) => setPublished(e.target.value)}
              label="Published">
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions
          container
          sx={{ paddingBottom: '20px' ,display:"flex",justifyContent:"center"}}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              isUpdate ? handleUpdateCourse() : handleAddCourse();
            }}>
            {isUpdate ? 'Update Course' : 'Add Course'}
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default CourseForm;
