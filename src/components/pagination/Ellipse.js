import classes from "./Pagination.module.css";

const Ellipse = ({ filled, path, onPathUpdate }) => {
  const pathUpdate = () => {
    onPathUpdate(path);
  };

  return (
    <button
      onClick={pathUpdate}
      type="submit"
      className={`${classes.ellipse} ${
        filled ? classes["ellipse-filled"] : ""
      }`}
    ></button>
  );
};

export default Ellipse;
