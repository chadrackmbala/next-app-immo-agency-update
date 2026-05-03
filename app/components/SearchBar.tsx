"use client";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: alpha('#ffffff', 0.1),
  '&:hover': {
    backgroundColor: alpha('#ffffff', 0.2),
  },
  width: '100%',
  maxWidth: '250px', // mobile par défaut
  transition: theme.transitions.create(['max-width'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:focus-within': {
    maxWidth: '320px', // focus sur mobile
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '300px', // desktop normal
    '&:focus-within': {
      maxWidth: '400px', // desktop focus
    },
  },
}));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#ffffff',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Recherche rapide..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SearchBar;