// import axios from "axios";
// import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  // const [chats, setChats] = useState([]);
  const [fetchAgain, setFetchAgain] = useState([]);

  const { user } = ChatState();

  // const fetchChats = async () => {
  //   const { data } = await axios.get("/api/chat");
  //   setChats(data);
  // };

  // useEffect(() => {
  //   fetchChats();
  // }, []);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
