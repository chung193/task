import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export,
} from 'devextreme-react/pie-chart';
import React from 'react';
import axios from 'axios';

class Pie extends React.Component {
    render() {
        var data = this.handleData(this.props.data);
        return (
            <PieChart
                id="pie"
                dataSource={data}
                palette="Bright"
                title="Area of Countries"
                onPointClick={this.pointClickHandler}
                onLegendClick={this.legendClickHandler}
            >
                <Series
                    argumentField="Param"
                    valueField="Value"
                >
                    <Label visible={true}>
                        <Connector visible={true} width={1} />
                    </Label>
                </Series>

                <Size width={500} />
                <Export enabled={true} />
            </PieChart>
        );
    }

    handleData(data){
        var sum = 0;
        data.forEach(function (item) {
            sum+= item.Value ;
        });
        console.log(sum);
        data.forEach(function (item) {
            item.Value = Math.floor((item.Value/sum)*100);
            item.Value = item.Value.toString()+'%';
        });
        return data;
    }

    pointClickHandler(e) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e) {
        const arg = e.target;
        const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    toggleVisibility(item) {
        item.isVisible() ? item.hide() : item.show();
    }
}

export default Pie;