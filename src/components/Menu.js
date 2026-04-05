import React, { useState } from "react";

export default function Menu(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function test(e) {
    e.preventDefault();
    alert(`Form submitted : ${name}`);
  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", backgroundColor: "white" }}>






    </div>
  );
}