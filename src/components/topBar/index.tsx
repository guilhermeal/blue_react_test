import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import { useState } from "react";

interface TopBarProps {
  handleHeroeByName(value: string): void;
}

export function TopBar({ handleHeroeByName }: TopBarProps) {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["MARVEL", "", "Heroes", "Comics", "Series"];

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1rem" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                height: "90vh",
                width: "50ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            MARVEL
          </Typography>
          <FormControl sx={{ m: 1, width: "30ch" }} variant="filled">
            <InputLabel htmlFor="search-heroe-field">
              Find your hero...
            </InputLabel>
            <OutlinedInput
              id="search-heroe-field"
              type="text"
              onChange={(event) => setSearch(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="field to find your hero"
                    onClick={() => {
                      handleHeroeByName(search);
                    }}
                    onMouseDown={() => {
                      handleHeroeByName(search);
                    }}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
              label="Busca"
              value={search}
            />
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
