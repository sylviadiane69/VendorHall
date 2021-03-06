import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StorePage from './pages/StorePage';
import AllStores from './pages/AllStores';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';

import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import history from './utils/history';
import Footer from './components/Footer';
import UploadProducts from './pages/UploadProduct';
import Sidebar from './components/Sidebar';
import Vendor from './components/Vendor/index';
import './App.css';
import Breadcrumbs from './components/Breadcrumb/Breadcrumbs';
//The RB css import code
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/ProductCard';
import SingleProduct from './components/SingleProduct';


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
          <Breadcrumbs />
         
        </header>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={AllStores} />
          <Route path="/profile" component={Profile} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/vendor/:id" component={Vendor} />
          <Route exact path="/user/products/:id">
            <StorePage />
          </Route>
          <Route exact path="/upload">
            <UploadProducts />
          </Route>
          <Route exact path="/products">
            <AllStores />
          </Route>
          <Route path="/product/:id" component={SingleProduct} />
        </Switch>
        <PrivateRoute path="/profile" component={Profile} />
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
