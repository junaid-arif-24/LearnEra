import * as React from 'react';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import LaptopChromebookTwoToneIcon from '@mui/icons-material/LaptopChromebookTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {useNavigate} from 'react-router-dom';
import {openState} from '../store/atoms/adminAtom';
import {useRecoilState} from 'recoil';

export default function DrawerMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(openState);
  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={porps.function(true)}>toggele</Button> */}
        <Drawer
          anchor={'left'}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}>
          <Box
            sx={{width: 250}}
            role="presentation"
            onClick={() => {
              setIsOpen(false);
            }}
            onKeyDown={() => {
              setIsOpen(false);
            }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={()=>{
                  navigate('/')
                }}>
                  <ListItemIcon>
                    <HomeTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Home'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={()=>{
                  navigate('/add')
                }}>
                  <ListItemIcon>
                    <LaptopChromebookTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Add Courses'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={()=>{
                  navigate('/courses')
                }}>
                  <ListItemIcon>
                    <LocalLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary={'All Courses'} />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider/>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
