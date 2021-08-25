import React, { useEffect, useRef, useState } from "react";
const Contact = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState(0);
  const textAreaRef = useRef();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (view === 0) {
        if (title !== "") {
          setView(1);
        } else {
          submit();
        }
      }
    }
  };

  useEffect(() => {
    if (view === 1) {
      textAreaRef.current.focus();
    }
  }, [view]);
  const submit = () => {
    console.log("submitted");
    setView(2);
  };
  return (
    <div
      className={"contact"}
      style={{ marginTop: "1rem", marginBottom: "400px", height: "400px" }}
    >
      <div className="header mb-4">
        <i>Got a project?</i>
      </div>
      {view === 0 && (
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder={"Catchy title..."}
        />
      )}
      {view === 1 && (
        <div
          ref={textAreaRef}
          className={"textbox stretch"}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder={"Description..."}
          contentEditable
        />
      )}
      {view > 1 && <div className={"thank-you"}>Thank you</div>}
      {view < 2 && (
        <div
          className={"cursor-pointer"}
          onClick={
            view === 0
              ? () => {
                  setView(1);
                }
              : submit
          }
        >
          {view === 0 ? "Continue" : "Submit"}
        </div>
      )}
    </div>
  );
};

export default Contact;
