import { Box, Flex, Image } from "@chakra-ui/react";
import { useState ,useEffect} from "react";
import Lottie from 'lottie-react';
import { ChatState } from "../context/ChatProvider";
import { ChatBox, MyChats, SideDrawer } from "../components";
import chatanimation from "../components/Authentication/assets/lastanime.json";
const Chat = () => {
  const { user } = ChatState();
  const [displayAnimation, setDisplayAnimation] = useState(true);

  const [fetchAgain, setFetchAgain] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
        setDisplayAnimation(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className>
            {displayAnimation && (
                <div className="w-full h-full flex  flex-col justify-center items-center relative ">
                    <Lottie animationData={chatanimation} className="w-1/2 h-1/3" />
                    <div className='absolute bottom-20'>
                        <h1 className='font-monteserrat text-2xl'>Loading ....</h1>
                    </div>
                </div>
            )}
    {!displayAnimation && (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex>
      <Box
        display="flex"
        // justifyContent="space-between"
        w="70%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        w="30%"
        h="91.5vh"
        p="10px"
      >
       <Image src='data:image/jpeg;base64,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' alt='Dan Abramov' />
      </Box>

      </Flex>
    </div>
   )} 
  </div>  
  );
};

export default Chat;
