import React from "react";

function Typing({ users }) {
  return users.length > 0 ? (
    <div>
      {users.join(", ")} {users.length === 1 ? "is" : "are"} typing...
    </div>
  ) : (
    <></>
  );
}

export default Typing;