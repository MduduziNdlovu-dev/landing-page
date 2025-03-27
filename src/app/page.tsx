import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Email from "../../components/Email";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        gap: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        px: { xs: "1rem", sm: "2rem", md: "3rem" }, 
      }}
    >
      
      <Image src="/images/logo.svg" alt="logo" width={90} height={29} />

      
      <Typography
        variant="h3"
        sx={{
          color: "#969696",
          fontWeight: 400,
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
        }}
      >
        We are launching{" "}
        <span style={{ color: "#15202A", fontWeight: 600 }}>soon!</span>
      </Typography>

     
      <Typography
        sx={{
          color: "#15202A",
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        Subscribe and get notified
      </Typography>

      
      <Email />

      
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "90%", sm: "70%", md: "60%", lg: "50%" }, 
          mt: { xs: "1rem", sm: "2rem" }, 
        }}
      >
        <Image
          src="/images/illustration-dashboard.png"
          alt="illustration-dashboard"
          width={640}
          height={383}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
