import { removeSession } from "@/redux/states";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
export function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeSession());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => navigate("/Home")}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/Album")}
          >
            Album
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            SALIR
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
