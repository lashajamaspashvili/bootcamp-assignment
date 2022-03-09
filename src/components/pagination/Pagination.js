import classes from "./Pagination.module.css";
import Arrow from "./Arrow";
import Ellipse from "./Ellipse";
const pages = Array(5).fill("_");
console.log("Outer");

const paths = [
  "/personal-info",
  "/technical-issues",
  "/covid",
  "/redberry-internal",
  "/submit",
];

const Pagination = ({ values, onPathUpdate }) => {
  return (
    <div className={classes["pagination-container"]}>
      <div className={classes.pagination}>
        <Arrow direction="previous" />
        {pages.map((item, index) => {
          return (
            <Ellipse
              key={index}
              values={values}
              onPathUpdate={onPathUpdate}
              path={paths[index]}
              filled
            />
          );
        })}
        <Arrow direction="next" />
      </div>
    </div>
  );
};

export default Pagination;
