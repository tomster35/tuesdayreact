import React       from 'react';
import Product     from './Product';
import * as Config from '../config.json'

class ProductList extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    // Note: this is our array of products that will be
    // rendered. It starts life as a null object, this will
    // be updated when the component mounts --  see
    // componentDidMount event handler method
    products          : null,
    productsRequested : false
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    // Indicates there request to /products has been made, but
    // there was some form of error
    if (this.state.products === null && this.state.productsLoaded === true) {
      return (
        <p className='text-center alert alert-warning mr-4 ml-4'>Error loading products. Try again later.</p>
      );
    }

    // While the products array is null (meaning no attempt has
    // yest been made to attempt to load the products from
    // the php script)
    else if (this.state.products === null) {
      return (
        <p className='text-center'>Loading products...</p>
      );
    }

    // If the products array is set, but is empty.
    else if (this.state.products.length === 0) {
      return (
        <p className='text-center'>Sorry, no products are available</p>
      );
    }

    // Or, if there are items in the product list
    else {
      return (
        // For each product in the products array, we create
        // a Product component (passing each product as a prop)
        <div className='product-list pt-3 pl-3 pr-3'>
          {this.state.products.map(product => (
            <Product product={product} cart={this.props.cart} key={`product-${product.id}`} />
          ))}
        </div>
      )
    }
  }

  // Invoked when the component is created in the DOM (like an onLoad)
  componentDidMount() {
    // Fetch from PHP script and update the products state value
    // React will automatically 'react' to this change and re-render
    // the ProductList component.
    fetch(Config.api.getProducts)
      .then (res  => res.json())
      .then (json => {
        this.setState({products: json});
        this.setState({productsLoaded: true});
      })
      .catch(err => {
        this.setState({productsLoaded: true});
      })
  }

}

export default ProductList;