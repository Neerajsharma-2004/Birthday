import React, { useState } from "react";
import messages from "./messages";
import "./styles/MessageApp.css";

export default function MessageApp({ onClose }) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [input, setInput] = useState("");

  if (!selectedChat) {
    return (
      <div className="message-modal">
        <div className="modal-header">
          <h3>Messages</h3>
          <button onClick={onClose}>×</button>
        </div>
        <ul className="chat-list">
          {messages.map((chat) => (
            <li key={chat.id} onClick={() => setSelectedChat(chat)}>
              <img src={chat.profile} className="avatar" />
              <div>
                <strong>{chat.name}</strong>
                <p>{chat.messages[chat.messages.length - 1].text.slice(0, 50)}{chat.messages[chat.messages.length - 1].text.length > 50 ? "..." : ""}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="message-modal">
  <div className="modal-header">
  {selectedChat ? (
    <div className="chat-header">
      <button className="back-button" onClick={() => setSelectedChat(null)}>←</button>
      <img src={selectedChat.profile} className="avatar" />
      <h3>{selectedChat.name}</h3>
    </div>
  ) : (
    <>
      <h3>Messages</h3>
      <button onClick={onClose}>×</button>
    </>
  )}
</div>

  <div className={`modal-body ${selectedChat ? 'slide-in' : ''}`}>
    {!selectedChat ? (
      <ul className="chat-list">
        {messages.map((chat) => (
          <li key={chat.id} onClick={() => setSelectedChat(chat)}>
            <img src={chat.profile} className="avatar" />
            <div>
              <strong>{chat.name}</strong>
              <p>
                {chat.messages[chat.messages.length - 1].text.slice(0, 50)}
                {chat.messages[chat.messages.length - 1].text.length > 50 ? "..." : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div className="chat-screen">
        <div className="chat-window">
          {selectedChat.messages.map((msg, idx) => (
            <div key={idx} className="chat-row">
              <img src={selectedChat.profile} className="avatar-small" />
              <div className="chat-bubble received">
                <p>{msg.text}</p>
                <span className="time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled>Send</button>
        </div>
      </div>
    )}
  </div>
</div>

  );
}
