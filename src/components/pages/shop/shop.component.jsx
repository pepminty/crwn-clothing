import React, { Component } from "react";
import CollectionPreview from "../../collection-preview/collection-preview.component.jsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "./../../../redux/shop/shop.selector";

const ShopePage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopePage);
