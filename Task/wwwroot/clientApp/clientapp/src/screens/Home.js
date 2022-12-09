import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from '../components/chart/Data';
import Pie from '../components/chart/Pie';

class Home extends React.Component {
    state = {
        data: [],
        pie: []
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
                const pie = res.data;
                this.setState({ pie });
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.loadData();
        this.loadPie();
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
                    </Col>
                </Row>
            </Container>

        );
    }
}
export default Home;
