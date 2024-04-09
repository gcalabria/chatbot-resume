// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { fakeResponse } from "./mocks";
// import { LinkedInProfile } from "./interfaces";
import { ThemeProvider } from "./components/ThemeProvider";
import ChatBoard from "./components/chat/ChatBoard";
// import axios from "axios";

function App() {
  // const [profile, setProfile] = useState<LinkedInProfile | null>(null);
  // const handleClick = async () => {
  //   // const response = await axios.get("https://linkedin-api8.p.rapidapi.com/", {
  //   //   headers: {
  //   //     "X-RapidAPI-Key": "b551f4841amsh8279ccf4c2a4582p1937c2jsnd5fea3ce5a6b",
  //   //     "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
  //   //   },
  //   //   params: {
  //   //     username: "gcalabria",
  //   //   },
  //   // });
  //   const response = fakeResponse;
  //   const _profile = response.data;
  //   setProfile(_profile);
  // };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ChatBoard />
    </ThemeProvider>
  );
}

export default App;
