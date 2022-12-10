import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from '../components/chart/Data';
import Pie from '../components/chart/Pie';
import Grid from '../components/chart/Grid';
class Home extends React.Component {
    state = {
        data: [],
        pie: [],
        pie1: [],
        pie2: [],
        datatable: []
    }

    loadData() {
        axios.get('https://localhost:7147/api/api/getdata/slide11')
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
            .catch(error => console.log(error));
    }

    loadPie() {
        axios.get('https://localhost:7147/api/api/getdata/slide12')
            .then(res => {
                var pie = res.data;
                pie = this.handleData(pie);
                this.setState({ pie });
            })
            .catch(error => console.log(error));
    }

    loadPie1() {
        axios.get('https://localhost:7147/api/api/getdata/slide13')
            .then(res => {
                const pie1 = res.data;
                this.setState({ pie1 });
            })
            .catch(error => console.log(error));
    }

    loadPie2() {
        axios.get('https://localhost:7147/api/api/getdata/slide14')
            .then(res => {
                const pie2 = res.data;
                this.setState({ pie2 });
            })
            .catch(error => console.log(error));
    }

    loadGrid() {
        axios.get('https://localhost:7147/api/api/getdata/slide15')
            .then(res => {
                const datatable = res.data;
                this.setState({ datatable });
            })
            .catch(error => console.log(error));
    }

    handleData(data){
        var sum = 0;
        data.forEach(function (item) {
            sum+= item.Value ;
        });
        data.forEach(function (item) {
            item.Value = Math.floor((item.Value/sum)*100);
        });
        return data;
    }

    componentDidMount() {
        this.loadData();
        this.loadPie();
        this.loadPie1();
        this.loadPie2();
        this.loadGrid();
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <Data data={this.state.data}/>
                    </Col>
                    <Col sm={12} md={4}>
                        <Pie data={this.state.pie}/>
                        <Pie data={this.state.pie1}/>
                        <Pie data={this.state.pie2}/>
                        <Grid data={this.state.datatable}/>
                    </Col>
                </Row>
            </Container>

        );
    }
}
export default Home;
