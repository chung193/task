
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
    render() {
        var data = this.props.data;
        var arr = [];
        data.forEach(function(item, index){
            arr.push(item.WorkLine);
        });
        return (
            <DataGrid
                dataSource={data}
                allowColumnReordering={true}
                rowAlternationEnabled={true}
                showBorders={true}
                onContentReady={this.onContentReady}
                defaultColumns={arr}
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