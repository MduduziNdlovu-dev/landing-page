import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import Email from "../../components/Email";

export default function Home() {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      gap:"2rem"
    }}>
      <Image src="/images/logo.svg" alt="logo" width={90} height={29}/>
      <Typography variant="h1" sx={{color: "#969696", fontWeight: 400}}>
        We are launching {" "} <span style={{color: "#15202A", fontWeight:600}}>soon!</span>
      </Typography>
      <Typography sx={{
        color: "#15202A", fontSize:"1.25rem"
      }}>
        Subscribe and get notified
      </Typography>

      <Email/>
      <Image src="/images/illustration-dashboard.png" alt="illustration-dashboard"
      width={640}
      height={383}
      />
    </Box>
  );
}
