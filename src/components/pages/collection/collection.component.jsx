import { React } from "react";
import "./collection.styles.scss";
import { selectCollection } from "./../../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "./../../collection-item/collection-item.component";

import "./collection.styles.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, eut) => ({
  collection: selectCollection(eut.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
