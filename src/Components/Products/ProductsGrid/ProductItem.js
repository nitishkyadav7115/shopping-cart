import { Divider } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <Fragment>
      {/* <div className={classes.itemWrapper}>
        <div className={classes.productImg}>
          <Link to={`${props.id}`}>
            <img src={props.image} alt={props.title} />
          </Link>
        </div>

        <Divider light />
        <div className={classes.productDetail}>
          <div className={classes.title}>
            <Link to={`${props.id}`}>{props.title}</Link>
          </div>
          <div className={classes.category}>
            <li>{props.category}</li>
          </div>
          <div className={classes.price}>
            <li>{props.price}</li>
          </div>
        </div>
      </div> */}

      <div className={classes.itemWrapper}>
        <div className={classes.imgContainer}>
          <Link to={`${props.id}`} className={classes.imgLink}>
            <img
              src={props.image}
              alt={props.title}
              className={classes.productImg}
            />
          </Link>
          {/* <hr /> */}
        </div>

        <div className={classes.productData}>
          <li className={classes.title}>
            <Link to={`${props.id}`}>{props.title}</Link>
          </li>
          <li>{props.category}</li>
          <li>{props.price}</li>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItem;
