import * as React from 'react';
import MUIDataTable from "mui-datatables";
import {useEffect} from "react";


const options = {
    onRowsDelete:false
};
 const TableView = ({testData,data,name}) => {
     useEffect(()=>{

     },[data])

    return (
        <div style={{height: 400, width: '100%',marginTop:'20px'}}>
            {data  !== null ?
                <MUIDataTable
                    title={`Дані у ${name}`}
                    data={testData}
                    columns={data}
                    options={options}
                /> : <Loader />}

        </div>
    );
}

const Loader = ()=>{
     return (
         <div>
             loading
         </div>
     )
}
export default TableView;