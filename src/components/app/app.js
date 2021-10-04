import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from "../error";
// import styled from 'styled-components';
import './app.css';


export default class App extends Component {
    state = {
        onToggleRandom: true,
        error: false,
        selectedChar: 130,
    }

    onDisplay = () => {
        this.setState({
            onToggleRandom: !this.state.onToggleRandom
        });
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
        });
    }

    render () {
        if (this.state.setState) {
            return <ErrorMessage/>
        }
        const {onToggleRandom} = this.state;
        const randomChar = onToggleRandom ? <RandomChar/> : null
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {/* <RandomChar/> */}
                            {randomChar}
                            <button
                                type="button"
                                className="btn_toggle rounded"
                                onClick={this.onDisplay}>
                                > Toggle Random Character 
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

