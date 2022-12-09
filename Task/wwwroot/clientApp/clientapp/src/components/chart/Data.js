import {
    Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export,
} from 'devextreme-react/chart';
import React from 'react';
import axios from 'axios';
class Data extends React.Component {
    render() {
        var data = this.props.data;
        return (
            <Chart id="chart"
                title="Task"
                dataSource={data}
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

export default Data;