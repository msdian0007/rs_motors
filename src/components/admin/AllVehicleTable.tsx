"use client";

import { Vehicle } from "@/types";
import { GetProp, Table, TableProps } from "antd";
import { SorterResult } from "antd/es/table/interface";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { baseURL } from "@/constants";
import axios from "axios";

// const dataSource = [
//   {
//     key: "1",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street",
//   },
//   {
//     key: "2",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street",
//   },
// ];

const columns: ColumnsType<Vehicle> = [
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "ModelYear",
    dataIndex: "modelYear",
    key: "modelYear",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "IsSold",
    dataIndex: "isSold",
    key: "isSold",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

type ColumnsType<T extends object = object> = TableProps<T>["columns"];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>["field"];
  sortOrder?: SorterResult<any>["order"];
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

const getRandomUserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const AllVehicleTable = () => {
  const [data, setData] = useState<Vehicle[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange: TableProps<Vehicle>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${baseURL}/vehicles/pagination?${qs.stringify(
        getRandomUserParams(tableParams)
      )}`
    );
    console.log(response);
    if (response.data) {
      setData(response.data.data);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: response.data.count,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    }
    // fetch(
    //   `${baseURL}/vehicles/pagination?${qs.stringify(
    //     getRandomUserParams(tableParams)
    //   )}`
    // )
    //   .then((res) => res.json())
    //   .then(({ results }) => {
    //     console.log(results);
    //     setData(results);
    //     setLoading(false);
    //     setTableParams({
    //       ...tableParams,
    //       pagination: {
    //         ...tableParams.pagination,
    //         total: 200,
    //         // 200 is mock data, you should read it from server
    //         // total: data.totalCount,
    //       },
    //     });
    //   });
  };

  useEffect(() => {
    fetchData();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);
  return (
    <div>
      <Table
        // components={components}
        // rowClassName={() => "editable-row"}
        // bordered
        // rowKey={(record) => record?._id}
        dataSource={data}
        columns={columns}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default AllVehicleTable;
