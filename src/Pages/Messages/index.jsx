import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ChatContainer from "../../components/ChatContainer";
import ChatForm from "../../components/ChatForm";
import ChatHeader from "../../components/ChatHeader";
import { readMessage } from "../../store/actions";
import { useDispatch } from "react-redux";
import styles from "./Messages.module.scss";

const Messages = () => {
  const dispatch = useDispatch();
  const stateFromLink = useLocation();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(
      readMessage({
        myId: user._id,
        friendId: stateFromLink.state.id
          ? stateFromLink.state.id
          : stateFromLink.state.roomOwner,
      })
    );
  }, [
    stateFromLink.state.id,
    stateFromLink.state.roomOwner,
    user._id,
    dispatch,
  ]);

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
