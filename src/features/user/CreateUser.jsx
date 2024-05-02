import { useState } from "react";
import Button from "../../ui/Button";
function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-2xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-80 h-10 mb-8 input"
      />

      {username !== "" && (
        <div>
          <Button type="primary">start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
