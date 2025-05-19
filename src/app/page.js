"use client";

import { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebase";
import { Container, Button, Typography, Avatar, Box } from "@mui/material";

export default function HomePage() {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Next.js + MUI Google Sign-Up
      </Typography>

      {user ? (
        <Box>
          <Avatar
            alt={user.displayName}
            src={user.photoURL}
            sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
          />
          <Typography variant="h6">Hello, {user.displayName}</Typography>
          <Button variant="contained" color="error" onClick={handleSignOut} sx={{ mt: 3 }}>
            Sign Out
          </Button>
        </Box>
      ) : (
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          Sign In with Google
        </Button>
      )}
    </Container>
  );
}
