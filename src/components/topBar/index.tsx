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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import { useState } from "react";

interface TopBarProps {
  handleHeroeByName(value: string): void;
}

export function TopBar({ handleHeroeByName }: TopBarProps) {
  const [search, setSearch] = useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Marvel
          </Typography>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="search-heroe-field">Buscar herói...</InputLabel>
            <OutlinedInput
              id="search-heroe-field"
              type="text"
              onChange={(event) => setSearch(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="campo para busca de herói"
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
              label="Password"
              value={search}
            />
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
