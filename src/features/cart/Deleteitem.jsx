import Button from "../../ui/Button";
import { deleteItem } from "./cartslice";
import { useDispatch } from "react-redux";

function Deleteitem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default Deleteitem;
