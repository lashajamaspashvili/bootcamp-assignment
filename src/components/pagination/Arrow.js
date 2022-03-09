import classes from "./Pagination.module.css";

const Arrow = ({ direction, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={classes.outer}>
      <span
        className={
          direction === "previous"
            ? classes["inner-previous"]
            : direction === "next"
            ? classes["inner-next"]
            : ""
        }
      ></span>
    </button>
  );
};

export default Arrow;
