import React, {Component} from 'react';
import Header from './HeaderComponent';
import JumbotronPart from './JumbotronPartComponent';
import Footer from './FooterComponent'; 
import Home from './HomeComponent';
import Cake from './CakeComponent';
import Cakedetail from './CakedetailComponent';
import Cart from './CartComponent';
import { connect } from 'react-redux';
import { Switch , Route , Redirect, withRouter } from 'react-router-dom';
import { postReview, fetchReviews, fetchCakes, postCart, fetchCarts } from '../redux/ActionCreators';

const mapStatetoProps = (state) => {
    return{
        cakes: state.cakes,
        reviews: state.reviews,
        carts: state.carts
    }
};

const mapDispatchToProps = (dispatch) => ({
    postReview: (cakeId, rating, author, review) => dispatch(postReview(cakeId, rating, author, review)),
    fetchReviews: () => {dispatch(fetchReviews())},
    fetchCakes: () => {dispatch(fetchCakes())},
    postCart: (cakeId, cakeName, cakePrice) => dispatch(postCart(cakeId, cakeName, cakePrice)),
    fetchCarts: () => {dispatch(fetchCarts())},

});



class Main extends Component{

    componentDidMount() {
        this.props.fetchCakes();
        this.props.fetchReviews();
        this.props.fetchCarts();

    }


    render(){

            const HomePage = () => {
                const cakesArray = this.props.cakes.cakes.filter((cake) => cake.featured);
                console.log('cakesArray '+ cakesArray);
                    return  cakesArray.map((cake) => {
                        return (
                            <Home 
                                cake={cake}
                                cakesLoading={this.props.cakes.isLoading}
                                cakeErrMess={this.props.cakes.errMess}               
                            />
                        );
                                    
                    });
            }

          const CakeWithId = ({match}) => {
            return(
                <Cakedetail
                    cake={this.props.cakes.cakes.filter((cake) => cake.id === parseInt(match.params.cakeId,10))[0]}
                    isLoading={this.props.cakes.isLoading}
                    errMess={this.props.cakes.errMess}
                    reviews={this.props.reviews.reviews.filter((review) => review.cakeId === parseInt(match.params.cakeId,10))}
                    reviewsErrMess={this.props.reviews.errMess}
                    postReview={this.props.postReview}
                />

            );
          }
          const CartPage = ({match}) => {
            return(
                <Cart
                cake={this.props.cakes.cakes.filter((cake) => cake.id === parseInt(match.params.cakeId,10))[0]}
                isLoading={this.props.cakes.isLoading}
                errMess={this.props.cakes.errMess}  
                carts={this.props.carts.carts.filter((cart) => cart.cakeId === parseInt(match.params.cakeId,10))}
                cartsErrMess={this.props.carts.errMess}
                postCart={this.props.postCart}
                />
            );
          }

        return (
            <div>
              <Header />  
              <JumbotronPart />
              <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/cakes' component = {() => <Cake cakes={this.props.cakes}/>} />
              <Route path= '/cakes/:cakeId' component = {CakeWithId} />
              <Route path='/cart/:cakeId' component = {CartPage}/>

              <Redirect to="/home" />
          </Switch>
              <Footer />
              </div>
          );
    }

}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));
