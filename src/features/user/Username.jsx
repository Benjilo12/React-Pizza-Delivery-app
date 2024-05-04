import { useSelector } from "react-redux";

//we use useselector to get state from the store
function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
