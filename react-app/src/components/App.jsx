import React        from 'react';
import ProductsList from './ProductList';
import Header       from './Header';
import Cart         from '../lib/Cart';
import Footer       from './Footer';
import Slider       from './Slider';





class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }

  // Render
  render() {
    return (
      <div className='App'>
       
        <Header cart={this.state.cart} />
        <Slider  cart={this.state.cart} />
        <ProductsList cart={this.state.cart} />
       
       
        <Footer cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
