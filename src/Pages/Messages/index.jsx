import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ChatContainer from "../../components/ChatContainer";
import ChatForm from "../../components/ChatForm";
import ChatHeader from "../../components/ChatHeader";
import { httpPOST } from "../../libs/http";
import styles from "./Messages.module.scss";

const Messages = () => {
  const stateFromLink = useLocation();
  const user = useSelector(state => state.user);

  useEffect(() => {
    httpPOST("/readmessage", {
      myId: user._id,
      friendId: stateFromLink.state.id
        ? stateFromLink.state.id
        : stateFromLink.state.roomOwner,
    });
  }, [stateFromLink.state.id, stateFromLink.state.roomOwner, user._id]);

  return (
    <div className={styles.main}>
      <ChatHeader
        interlocutor={
          stateFromLink.state.id
            ? stateFromLink.state.id
            : stateFromLink.state.roomOwner
        }
        roomInfo={user.roomId.roomId ? user.roomId : stateFromLink.state}
      />
      <ChatContainer
        interlocutor={
          stateFromLink.state.id
            ? stateFromLink.state.id
            : stateFromLink.state.roomOwner
        }
      />
      <ChatForm
        interlocutor={
          stateFromLink.state.id
            ? stateFromLink.state.id
            : stateFromLink.state.roomOwner
        }
      />
    </div>
  );
};

export default Messages;
