import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Fade } from 'reactstrap';
import _ from 'lodash';

import {
  fetchSuggestion,
  setSuggestion,
  fetchSuggestionsIfNeeded,
} from '../../actions/suggestions';
import { setLocation } from '../../actions/location';
import FoodItem from '../FoodItem';

class Randomizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestion: null,
      fadeIn: false,
    };

    this.handleSpin = this.handleSpin.bind(this);
    this.fetchSuggestion = this.fetchSuggestion.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.setGeoLoc = this.setGeoLoc.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSuggestionsIfNeeded());
  }

  // button click handler
  handleSpin() {
    this.fetchSuggestion();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLoc);
    }
  }

  setGeoLoc(position) {
    const { dispatch } = this.props;
    dispatch(setLocation(position));
    dispatch(fetchSuggestionsIfNeeded());
  }

  fetchSuggestion() {
    const { dispatch } = this.props;
    dispatch(setSuggestion());
  }

  // display the card if there is a suggestion to display
  renderCard() {
    if (this.props.suggestion) {
      return <FoodItem suggestion={this.props.suggestion} />;
    }
    return null;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Randomizer</h3>
          </Col>
          <Col>
            <Button onClick={this.handleSpin}>Spin to Win</Button>
          </Col>
          <Col>
            <Button onClick={this.getLocation}>Get Location</Button>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            {this.renderCard()}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mstp(state) {
  return {
    lat: state.defaultStore.lat,
    lon: state.defaultStore.lon,
    suggestionIsFetching: state.foodStore.suggestionIsFetching,
    suggestionStatus: state.foodStore.suggestionStatus,
    suggestions: state.foodStore.suggestions,
    suggestion: state.foodStore.suggestion,
    suggestionError: state.foodStore.suggestionError
  };
}

export default connect(mstp)(Randomizer);
