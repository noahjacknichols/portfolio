import React, { useEffect, useRef, useState } from "react";
const Contact = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState(0);
  const [copied, setCopied] = useState(false);
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

  useEffect(() => {
    if (copied === true) {
      // setTimeout(() => setCopied(false), 3000);
    }
  }, [copied]);
  return (
    <div
      className={"contact"}
      style={{ marginTop: "1rem", marginBottom: "400px", height: "400px" }}
    >
      <div className="header mb-1">
        <i>Let's get in contact</i>
      </div>
      <div
        onClick={() => {
          window.location = "mailto:hello@njnichols.dev";
        }}
        className={"sub-header"}
      >
        hello@njnichols.dev
      </div>
    </div>
  );
};

export default Contact;
