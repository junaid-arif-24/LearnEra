import {Typography, Card, TextField, Button} from '@mui/material';
import {adminState} from '../store/atoms/adminAtom';
import { useRecoilState} from 'recoil';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useRecoilState(adminState);

  const onSubmitHandler = async(event) => {
   event.preventDefault();
    try{
      const res = await axios.post( "https://learn-era-backend.vercel.app/admin/signup",{
        username: admin.email, password: admin.password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isLoggedIn', true);
      setAdmin({
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
            value={admin.email}
            variant="outlined"
            onChange={e =>
              setAdmin({
                ...admin,
                email: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="password"
            value={admin.password}
            variant="outlined"
            onChange={e =>
              setAdmin({
                ...admin,
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
