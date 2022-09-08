import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'; 
import Home from './HomeComponent';
import Cake from './CakeComponent';

// import Cakedetail from './CakedetailComponent';
import { connect } from 'react-redux';
import { Switch , Route , Redirect, withRouter } from 'react-router-dom';
import { fetchCakes } from '../redux/ActionCreators';

const mapStatetoProps = state => {
    return{
        cakes: state.cakes
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchCakes: () => {dispatch(fetchCakes())}
});



class Main extends Component{

    componentDidMount() {
        this.props.fetchCakes();
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

        //   const CakeWithId = ({match}) => {
        //     return(
        //         <Cakedetail
        //             dish={this.props.cakes.cakes.filter((cake) => cake.id === parseInt(match.params.cakeId,10))[0]}
        //             isLoading={this.props.cakes.isLoading}
        //             errMess={this.props.cakes.errMess}
        //         />

        //     );
        //   }

        return (
            <div>
              <Header />  
              <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/cakes' component = {() => <Cake cakes={this.props.cakes}/>} />

              {/* <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> */}
              <Redirect to="/home" />
          </Switch>
              <Footer />
              </div>
          );
    }

}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));
