import React    from 'react';
import ViewCart from './ViewCart';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Product Shop</h1>
        <p>A basic React app showing how products can be rendered from a JSON object retrieved from a PHP script</p>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;