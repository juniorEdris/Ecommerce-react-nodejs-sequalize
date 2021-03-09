import React from 'react';
import { connect } from 'react-redux';
import { homeprod3 } from '../../Data';
import Product from '../../PrimaryComponents/Product/Product';

const PrductSecion = (props) => {
  return (
    <div className="product_section col-12">
      {homeprod3.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrductSecion);
