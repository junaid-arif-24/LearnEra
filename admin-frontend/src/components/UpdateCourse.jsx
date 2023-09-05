import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AddCourse from './AddCourse';
const UpdateCourse = () => {
  const {courseId} = useParams();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    const getCourseDetails = async () => {
        try {
          const response = await fetch(`http://localhost:3000/admin/course/${courseId}`, {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          });
      
          if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            setCourse(data);
          }
        } catch (error) {
          console.error(error);
        }
      };
      
    getCourseDetails();
  }, [courseId]);

  return (
    <div>
     {course !== null && <AddCourse course={course} isUpdate={true} />} 
    </div>
  );
};

export default UpdateCourse;
