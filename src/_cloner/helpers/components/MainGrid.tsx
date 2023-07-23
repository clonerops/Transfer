import { FC, useMemo, useEffect, useCallback, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
// import "../../assets/css/agGrid.css"; // Core grid CSS, always needed

interface IProps {
    data?: any;
    columnDefs?: any;
    rowSelection?: any;
    ref?: any;
    rowMultiSelectWithClick?: boolean;
    selectedCars?: any;
    setSelectedCars?: any;
}

const MainGrid: FC<IProps> = ({
    data,
    columnDefs,
    ref,
    rowSelection,
    rowMultiSelectWithClick,
    selectedCars,
    setSelectedCars,
}) => {

    const [gridApi, setGridApi] = useState<any>(null);


    const output = document.getElementById("ag-4-start-page");
    if (output) output.innerText = "صفحه";
    const output_Of = document.getElementById("ag-4-of-page");
    if (output_Of) output_Of.innerText = "از";
    const output_to = document.getElementById("ag-4-to");
    if (output_to) output_to.innerText = "به";
    const output_of1 = document.getElementById("ag-4-of");
    if (output_of1) output_of1.innerText = "از";

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            minWidth: 200,
            resizable: true,
            floatingFilter: true,
        };
    }, []);

    useEffect(() => {
        // Filtered
        let filtered = data?.filter((item: any) => {
            return selectedCars
                .map((item: any) => item.proD_NO)
                .includes(item.proD_NO);
        });
        filtered?.map((item: any) => (item.selected = true));
        // notFiltered
        let notFiltered = data?.filter((item: any) => {
            return !selectedCars
                .map((item: any) => item.proD_NO)
                .includes(item.proD_NO);
        });
        notFiltered?.map((item: any) => (item.selected = false));
    }, []);

    const onSelectionChanged = useCallback((event: any) => {
        setSelectedCars(event.api.getSelectedRows());
        // eslint-disable-next-line
    }, []);

    const onGridReady = (event: any) => {
        event.api.forEachNode((node: any) =>
            node.data.selected === true
                ? node.setSelected(true)
                : node.setSelected(false)
        );
    };

    return (
        <div
            className="ag-theme-alpine"
            style={{ height: "500px", width: "100%" }}
        >
            <AgGridReact
                rowData={data}
                className="font-Vazir"
                columnDefs={columnDefs}
                ref={ref}
                enableRtl={true}
                overlayNoRowsTemplate="داده ای برای نمایش وجود ندارد"
                overlayLoadingTemplate="...در حال بارگزاری"
                rowSelection={rowSelection}
                rowMultiSelectWithClick={rowMultiSelectWithClick}
                pagination={true}
                cacheQuickFilter={true}
                suppressHorizontalScroll={true}
                paginationPageSize={10}
                onSelectionChanged={onSelectionChanged}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                suppressRowVirtualisation={true}
                suppressColumnVirtualisation={true}
                suppressAggFuncInHeader={true}
                suppressRowDeselection={true}
                cacheBlockSize={50}
                maxBlocksInCache={10}
            ></AgGridReact>
        </div>
    );
};

export default MainGrid;
