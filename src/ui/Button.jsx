import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-lg hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursur-not-allowed ";

  const styles = {
    primary: base + "py-3 px-4 sm:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      " uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-lg hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursur-not-allowed bg-transparent border-2 border-stone-300 py-2.5 px-4 sm:px-6 md:py-3.5 hover:text-stone-800 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]), // Adjust the allowed values as needed
};
export default Button;
