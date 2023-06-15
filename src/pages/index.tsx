import Stack from "@mui/material/Stack";
import Image from "next/image";
import { Button } from "@mui/material";

const Home = () => {
  return (

    <section>

   
    <Stack
      direction={"row"}
      sx={{ justifyContent: "space-between" }}
      padding={2}
    >
      <h2>logo</h2>
      <Button
        color="success"
        onClick={() => {
          alert("clicked");
        }}
        variant="outlined"
      >
        Login
      </Button>
   
    </Stack>
    </section>
  );
};

export default Home;
