import {Typography, Card, TextField, Button} from '@mui/material';
import {userState} from '../store/atoms/userAtom';
import { useRecoilState} from 'recoil';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
import axios from 'axios';
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const onSubmitHandler = async(event) => {
   event.preventDefault();
    try{
      const res = await axios.post(`${BASE_URL}/user/signup`,{
        username: user.email, password: user.password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isLoggedIn', true);
      setUser({
        email: "",
        passowrd: "",
        isLoggedIn: true,
      });
      navigate("/")
    }
    catch(err){
      console.error("error", err);
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffff',
          width: '100vw',
          height: '100vh',
        }}>
        <Typography variant="h5" gutterBottom>
          Welcome to the LearnEra
        </Typography>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            border: '1px solid',
            padding: '2rem',
            height: '300px',
            width: '300px',
          }}>
          <TextField
            id="outlined-basic"
            label="email"
            value={user.email}
            variant="outlined"
            onChange={e =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="password"
            value={user.password}
            variant="outlined"
            onChange={e =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />
          <Button variant="contained" onClick={onSubmitHandler}>
            SignUp
          </Button>
        </Card>
      </div>
    </>
  );
};
export default SignUp;
