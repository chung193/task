import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from '../components/chart/Data';
import Pie from '../components/chart/Pie';
import Grid from '../components/chart/Grid';
class Slide2 extends React.Component {
    state = {
        pie: [],
        pie1: [],
        datatable: []
    }

    loadGrid() {
        axios.get('https://localhost:7147/api/api/getdata/slide21')
            .then(res => {
                const datatable = res.data;
                this.setState({ datatable });
            })
            .catch(error => console.log(error));
    }

    loadPie() {
        axios.get('https://localhost:7147/api/api/getdata/slide22')
            .then(res => {
                var pie = res.data;
                pie = this.handleData(pie);
                this.setState({ pie });
            })
            .catch(error => console.log(error));
    }

    loadPie1() {
        axios.get('https://localhost:7147/api/api/getdata/slide23')
            .then(res => {
                const pie1 = res.data;
                this.setState({ pie1 });
            })
            .catch(error => console.log(error));
    }

    handleData(data) {
        var sum = 0;
        data.forEach(function (item) {
            sum += item.Value;
        });
        data.forEach(function (item) {
            item.Value = Math.floor((item.Value / sum) * 100);
        });
        return data;
    }

    componentDidMount() {
        this.loadPie();
        this.loadPie1();
        this.loadGrid();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} md={12}>
                        <Grid data={this.state.datatable} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <Pie data={this.state.pie} />
                    </Col>
                    <Col sm={12} md={6}>
                        <Pie data={this.state.pie1} />
                    </Col>
                </Row>
            </Container>

        );
    }
}
export default Slide2;
