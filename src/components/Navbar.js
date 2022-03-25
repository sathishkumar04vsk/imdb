import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PublicIcon from "@mui/icons-material/Public";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState({ ["left"]: open });
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="nav-items">
          <img
            width={74}
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="IMDB logo"
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
          <Button className="nav-btn" color="inherit">
            Signin
          </Button>
          <Button>Mode</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const list = () => (
  <Box sx={{ width: 500 }} role="presentation">
    <List>
      {lists.map(({ text, icon }, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["Add Movie", "More"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <AddCircleOutlineIcon /> : <MoreHorizIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const lists = [
  { text: "Movies", icon: <LocalMoviesIcon /> },
  { text: "TV Shows", icon: <TvIcon /> },
  { text: "Watch", icon: <VideoLibraryIcon /> },
  { text: "Community", icon: <PublicIcon /> },
];

export default Navbar;
