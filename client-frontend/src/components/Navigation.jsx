import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';
import {useNavigate} from 'react-router-dom';
import {userState, openState} from '../store/atoms/userAtom';
import {useRecoilState} from 'recoil';

export default function Navigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(openState);

  const [user,setUser] = useRecoilState(userState)
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
            onClick={() => {
              setIsOpen(true);
            }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, cursor: 'pointer',fontWeight:"800"}}
            onClick={() => {
              navigate('/');
            }}>
            LearnEra
          </Typography>
          {!user.isLoggedIn ? (
            <>
              <Button
                color="inherit"
                onClick={() => {
                  navigate('/signin');
                }}>
                Login
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  navigate('/signup');
                }}>
                Signup
              </Button>
            </>
          ) : (
            <Button color="inherit"  onClick={() => {
                localStorage.setItem("token", "");
                setUser({
                  email: "",
                  password: "",
                  isLoggedIn: false,
                });
                navigate("/");
              }}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <DrawerMenu />
    </Box>
  );
}
