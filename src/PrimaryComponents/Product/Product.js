import React from 'react';
import './product.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Product = (props) => {
  const count = 0;
  return (
    <div className="product-section col col-md-3">
      <div className={`product-item `} id={props.product.id}>
        <div className="product-thumb">
          <Link to={`/productdetails?id=${props.product.id}`}>
            <img
              src={`assets/images/products/${props.product.image}`}
              className="pri-img"
              alt={props.product.name}
            />
          </Link>

          <div className="box-label">
            <div className="label-product label_sale">
              <span>{props.product.sale ? `-${props.product.sale}%` : ''}</span>
            </div>
          </div>
        </div>
        <div className="product-caption">
          <div className="product-name">
            <h4>
              <Link
                to={`/productdetails?id=${props.product.id}`}
                title={props.product.name}>
                {props.product.name}
              </Link>
            </h4>
          </div>
          <div className="manufacture-product">
            <span>
              <Link to={`/`}>by {props.product.brand}</Link>
            </span>
          </div>
          <div className="price-box">
            <span className="regular-price">
              <span className={` ${props.product.special && 'special-price'}`}>
                £{props.product.price}
              </span>
            </span>
            <span className="old-price">
              <span>MRP:</span>
              <del>
                {props.product.previous_price
                  ? `£${props.product.previous_price}`
                  : ''}
              </del>
            </span>
          </div>
          {count > 0 ? (
            <div className="single_product_qty mr-3">
              <span class="dec qtybtn">
                <i class="fa fa-minus"></i>
              </span>
              <input type="text" readOnly defaultValue={0} className="" />
              <span class="inc qtybtn">
                <i class="fa fa-plus"></i>
              </span>
            </div>
          ) : (
            <button className="btn-cart" type="button">
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
