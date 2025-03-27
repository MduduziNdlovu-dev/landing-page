"use client";
import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const Email = () => {
  const [isValid, setIsValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email: string) => {
    setIsValid(emailRegex.test(email));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: { xs: "1rem", sm: "0.5rem" },
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <Input
        placeholder="Your email address..."
        type="email"
        required
        sx={{
          border: `1px solid ${isValid ? "#88c7ed" : "#ff5466"}`,
          borderRadius: "2rem",
          color: "#BBC7ED",
          width: { xs: "100%", sm: "70%" },
          padding: "0.75rem 1rem",
        }}
        onChange={(e) => validateEmail(e.target.value)}
      />

      <Button
        sx={{
          backgroundColor: "#4c7bf3",
          color: "white",
          borderRadius: "2rem",
          padding: "0.75rem 1rem",
          width: { xs: "100%", sm: "30%" },
          height: "3rem",
          "&:hover": { backgroundColor: "#3a65c3" },
        }}
      >
        Notify Me!
      </Button>

      {!isValid && (
        <Typography sx={{ color: "#ff5466", fontSize: "0.75rem", textAlign: "center", mt: "0.5rem" }}>
          Please provide a valid email
        </Typography>
      )}
    </Box>
  );
};

export default Email;
