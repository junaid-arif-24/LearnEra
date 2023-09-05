import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Card, Typography} from '@mui/material';
import {userState} from '../store/atoms/userAtom';
import {useRecoilState} from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const onSubmitHandler = async() => {
    try{
      const res = await axios.post('https://learn-era-backend.vercel.app/user/login',{
       username: user.email, password: user.password
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
      console.log("error", err);
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
            SignIn
          </Button>
        </Card>
      </div>
    </>
  );
};

export default SignIn;
