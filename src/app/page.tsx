import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Image src="/images/logo.svg" alt="logo" width={90} height={39}/>
      <Typography variant="h1" sx={{color: "#969696", fontWeight: 400}}>
        We are launching {" "} <span style={{color: "#15202A", fontWeight:600}}>soon!</span>
      </Typography>
      <Typography sx={{
        color: "#15202A", fontSize:"1.25rem"
      }}>
        Subscribe and get notified
      </Typography>

      
    </Box>
  );
}
