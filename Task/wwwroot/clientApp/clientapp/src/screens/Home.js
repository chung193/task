import React from 'react';
import {
    Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
  } from 'devextreme-react/chart';
import { grossProductData } from './data.js';
import axios from 'axios';

class Home extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://localhost:7147/api/api/getdata/slide11')
          .then(res => {
            console.log(res);
            const data = res;
            this.setState({ data });
            
          })
          .catch(error => console.log(error));
    }

    render(){
        return (
            <Chart id="chart"
            title="Task"
            dataSource={this.state.data}
            onPointClick={this.onPointClick}
          >
            <CommonSeriesSettings
              argumentField="Workline"
              type="bar"
              hoverMode="allArgumentPoints"
              selectionMode="allArgumentPoints"
            >
              <Label visible={true}>
                <Format type="fixedPoint" precision={0} />
              </Label>
            </CommonSeriesSettings>
            <Series
              argumentField="Workline"
              valueField="TargetQty"
              name="Target Qty"
            />
            <Series
              valueField="OutputQty"
              name="Output Qty"
            />
            <Series
              valueField="QcOutputQty"
              name="Qc Output Qty"
            />
            <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
            <Export enabled={true} />
          </Chart>
        );
      }
      onPointClick(e) {
        e.target.select();
      }
}
export default Home;
