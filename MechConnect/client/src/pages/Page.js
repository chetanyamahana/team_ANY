import { useNavigate } from "react-router-dom";

const Page = () => {
    const navigate = useNavigate();

        return (
            <div>
            <button
              onClick={() => {
                navigate("/chats");
              }}>
              Add a little more style!
            </button>
            </div>
          );
  };
  
  export default Page;
  