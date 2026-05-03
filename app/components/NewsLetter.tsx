"use client";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function NewsLetter() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <TextField
        id="newsletter-email"
        label="Votre e-mail"
        variant="filled"
        type="email"
        autoComplete="email"
        sx={{
          input: { backgroundColor: '#FFFFFF', color: '#000' },
          width: { xs: '100%', sm: 280 },
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#BFA75C',
          textTransform: 'none',
          color: '#fff',
          border: 'none',
          width: { xs: '100%', sm: 140 },
          '&:hover': {
            backgroundColor: '#a98f4e',
            border: 'none',
          },
        }}
      >
        Envoyer
      </Button>
    </div>
  );
}

export default NewsLetter;
