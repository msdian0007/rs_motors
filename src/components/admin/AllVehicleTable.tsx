"use client";

import { Vehicle } from "@/types";
import { GetProp, MenuProps, Table, TableProps, Tag } from "antd";
import { SorterResult } from "antd/es/table/interface";
import React, { useEffect, useState } from "react";
import qs from "qs";
import { baseURL } from "@/constants";
import axios from "axios";
import Link from "next/link";
import useHelper from "@/hooks/useHelper";
import Dropdown from "antd/es/dropdown/dropdown";
import { CiMenuKebab } from "react-icons/ci";
import { markSoldUnsold } from "@/utils/vehicleServices";
import { ModalLayout } from "../layout/Modal";
import { SpinnerLg } from "../common/Spinner";

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

  const { getOwnerSup } = useHelper();

  const handleSoldUnsold = async (id: string) => {
    const response = await markSoldUnsold(id);
    if (response.status === 200) {
      const result = data?.map((obj) => {
        if (obj._id === id) {
          return { ...obj, isSold: !obj.isSold };
        } else {
          return obj;
        }
      });
      setData(result);
    }
  };

  const columns: ColumnsType<Vehicle> = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (_, record) => (
        <Link href={`details/${record._id}`}>
          {record.brand}-{record.modelName}
        </Link>
      ),
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
      render: (_, record) => (
        <span>
          {record.owner}
          {getOwnerSup(record.owner)}
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, { price }) => <>{price.toLocaleString()}</>,
    },
    {
      title: "IsSold",
      dataIndex: "isSold",
      key: "isSold",
      render: (_, { isSold, _id }) => (
        <>
          {_id && (
            <div
              className="cursor-pointer"
              onClick={() => handleSoldUnsold(_id)}
            >
              <Tag color={isSold ? "green-inverse" : "orange-inverse"}>
                {isSold ? "SOLD" : "PENDING"}
              </Tag>
            </div>
          )}
        </>
      ),
    },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    // },
  ];

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
    if (response.data) {
      setData(response.data.data);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: response.data.count,
        },
      });
    }
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
    <>
      {loading ? (
        <ModalLayout>
          <SpinnerLg />
        </ModalLayout>
      ) : (
        <div className="overflow-auto">
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
      )}
    </>
  );
};

export default AllVehicleTable;
