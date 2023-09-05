import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import CourseForm from './CourseForm';
const AddCourse = props => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [published, setPublished] = useState(false);
  const [price, setPrice] = useState('');
console.log("this is props",props)
useEffect(() => {
  if (props.isUpdate) {
    setTitle(props.course.course.title);
    setDescription(props.course.course.description);
    setImageLink(props.course.course.imageLink);
    setPublished(props.course.course.published);
    setPrice(props.course.course.price);
    console.log("UseEffect chal gya and updation values set ho gyi");
    
  }
}, [props.course]);

  const handleAddCourse = () => {
    if(title.trim().length === 0 && description.trim().length === 0 && price.trim().length === 0 && published === false){
      alert("Fill up the required fields");
      return;
    }
    const newCourse = {
      title,
      description,
      price,
      imageLink,
      published,
    };
    axios
      .post('http://localhost:3000/admin/courses', newCourse, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json', // Specify content type
        },
      })
      .then(res => {
        console.log('Success', res);
        alert('Course Added Successfully');
      })
      .then(err => console.error(err));

    setTitle('');
    setDescription('');
    setImageLink('');
    setPrice('');
    setPublished(false);
    navigate('/courses');
  };
  
  const handleUpdateCourse = async () => {
    if(title.trim().length === 0 && description.trim().length === 0 && price.trim().length === 0 && published === false){
      alert("Fill up the required fields")
    }
    const updatedData = {
      title,
      description,
      price,
      imageLink,
      published,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/admin/courses/${props.course.course._id}`,
        updatedData,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (response.status === 200) {
        alert('Course Updated Successfully');
        setTitle('');
        setDescription('');
        setImageLink('');
        setPrice('');
        setPublished(false);
        navigate('/courses');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CourseForm
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      imageLink={imageLink}
      setImageLink={setImageLink}
      published={published}
      setPublished={setPublished}
      price={price}
      setPrice={setPrice}
      isUpdate={props.isUpdate}
      handleAddCourse={handleAddCourse}
      handleUpdateCourse={handleUpdateCourse}
    />
  );
};

export default AddCourse;
