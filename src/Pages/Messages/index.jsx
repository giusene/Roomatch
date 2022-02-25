import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ChatContainer from "../../components/ChatContainer";
import ChatForm from "../../components/ChatForm";
import ChatHeader from "../../components/ChatHeader";
import { readMessage } from "../../store/actions";
import { useDispatch } from "react-redux";
import styles from "./Messages.module.scss";

const Messages = ({ setVisible }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    stateFromLink.state.id
      ? // eslint-disable-next-line react-hooks/exhaustive-deps
        user.messages[stateFromLink.state.id]?.discussion.length
      : // eslint-disable-next-line react-hooks/exhaustive-deps
        user.messages[stateFromLink.state.roomOwner]?.discussion.length,
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
        setVisible={setVisible}
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
