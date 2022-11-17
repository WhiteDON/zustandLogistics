// @ts-nocheck
'use client';
import { useEffect, useState } from 'react';
import { useOrdersQuery } from "../../redux/services/ordersApi";

import Skeleton from '../Skeleton';

const InfoBlock = (props) => {
  return (
    <div className="flex container flex-col bg-blue-50 min-w-[450px] rounded-lg py-5 px-6">
      <div className="flex container justify-between">
        <div className="text-blue-500 font-medium text-lg">{props.props._id}</div>
        <div
          className={
            'font-medium py-1 px-3 rounded-md' +
            (props.props.state ? ' bg-green-200 text-green-600' : ' bg-gray-200 text-gray-600')
          }>
          {props.props.state ? "Доставка" : "Доставлено"}
        </div>
      </div>
      <div className="font-medium text-2xl">{props.props.title}</div>
    </div>
  );
};

const ActiveOrder = () => {
  const { data = [], error, isLoading, isFetching, isSuccess } = useOrdersQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      data: data?.filter((item) => item.title.endsWith('2')),
      error,
      isLoading
    }),
    pollingInterval: 0,
  });


  const [loading, setloading] = useState(false);
  const param = '';

  return (
    <>
      {!loading ? (
        <Skeleton className="bg-blue-50 py-5 px-6 flex justify-between rounded-lg w-full h-32" width={'100%'} height={'100%'}/>
      ) : (
        data?.map((info) => {
          if (info.state) {
            return <InfoBlock props={info} key={info._id} />;
          }
        })
      )}
    </>
  );
};

export default ActiveOrder;
