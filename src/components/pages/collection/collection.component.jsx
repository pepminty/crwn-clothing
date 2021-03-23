import { React } from "react";
import "./collection.styles.scss";
import { selectCollection } from "./../../../redux/shop/shop.selector";
import { connect } from "react-redux";

const Collection = ({ collection }) => {
  console.log(collection);
  return <div className="collection"></div>;
};

const mapStateToProps = (state, eut) => ({
  collection: selectCollection(eut.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
