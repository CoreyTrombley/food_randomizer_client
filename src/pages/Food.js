import React, { Component } from  'react';
import { connect } from 'react-redux';

import FoodItem from '../components/FoodItem';
import {
  getFoodById
} from '../actions/food';

class Food extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch = () => null, id = 1 } = this.props;
    dispatch(getFoodById(id));
  }

  render() {
    return (
      <div>
        <FoodItem foodItem={this.props.foodItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foodItem: state.foodStore.foodItem
  };
}

export default connect(mapStateToProps)(Food);
