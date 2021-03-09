import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { decor } from '../../Data';
import { Product } from '../../PrimaryComponents/Product/Product';

const DecoreProducts = (props) => {
  return (
    <div className="decor_product row">
      {decor.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DecoreProducts);
