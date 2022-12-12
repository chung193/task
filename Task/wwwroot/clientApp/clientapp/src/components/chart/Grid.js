
import React from 'react';
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel,
  } from 'devextreme-react/data-grid';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            columns:[]
        }
        console.log("props", this.props.data);
    }

    componentWillMount() {
        console.log("will mount", this.props.data);
        this.gridConfig(this.props.data);
        //console.log("====",this.state.data);
    }

    componentDidMount(){
        console.log("did mount", this.props.data);
    }

    gridConfig(ds) {
        let sortedDS = ds.sort((a, b) => { return (a.WorkLine.length - b.WorkLine.length) || (a.WorkLine.localeCompare(b.WorkLine)) });
        let rowData = { Name: "生产效率<br>Hiệu suất" };
        let valueProp;
        if (this.samCalculationFormula === "1") {
            valueProp = "TotalStyleCMSam";
        }
        else {
            valueProp = "TotalGxSam";
        }
        let cols = [
            {
                dataField: "Name",
                caption: "线别Chuyền",
                encodeHtml: false
            }
        ];
        let totalSAM = 0;
        let totalWorktime = 0;
        sortedDS.forEach(function(item){
            rowData[item.WorkLine] = item[valueProp] / item.TotalWorkTime;
            totalSAM += item[valueProp];
            totalWorktime += item.TotalWorkTime;
            cols.push({
                dataField: item.WorkLine,
                caption: item.WorkLine.substr(item.WorkLine.indexOf('-') + 1, item.WorkLine.length),
                format: {
                    type: "percent",
                    precision: 2
                }
            })
        });

        rowData["ZZZZZTotal"] = totalSAM / totalWorktime;
        cols.push({
            dataField: "ZZZZZTotal",
            caption: "总计Tổng kết",
            format: {
                type: "percent",
                precision: 2
            }
        })
        // console.log(rowData);
        this.setState({
            data: rowData,
            columns: cols
        });
    }

    render() {
        console.log("data", this.state.data);
        return (
            <DataGrid
                dataSource={this.state.data}
                allowColumnReordering={true}
                rowAlternationEnabled={true}
                showBorders={true}
                onContentReady={this.onContentReady}
                defaultColumns={this.state.columns}
            >
                {/* <GroupPanel visible={true} />
                <SearchPanel visible={true} highlightCaseSensitive={true} />
                <Grouping autoExpandAll={false} /> */}

                <Column 
                dataField="WorkLine" 
                caption="WorkLine"
                dataType="string"
                alignment="right"
                 />
                <Column
                dataField="TotalGxSam"
                caption="TotalGxSam"
                dataType="number"
                alignment="right"
                />
                {/* <Column
                dataField="Discount"
                caption="Discount %"
                dataType="number"
                format="percent"
                alignment="right"
                allowGrouping={false}
                cellRender={DiscountCell}
                cssClass="bullet"
                />
                <Column dataField="SaleDate" dataType="date" />
                <Column dataField="Region" dataType="string" />
                <Column dataField="Sector" dataType="string" />
                <Column dataField="Channel" dataType="string" />
                <Column dataField="Customer" dataType="string" width={150} /> */}

                <Pager allowedPageSizes={10} showPageSizeSelector={true} />
                <Paging defaultPageSize={10} />
            </DataGrid>
        );
    }
}

export default Grid;