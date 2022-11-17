import { useEffect, useState, useRef } from "react";
import Skeleton from "../Skeleton";
import dayjs from "dayjs";
import { useOrdersQuery } from "../../redux/services/ordersApi";

const OrderBlock = (order) => {
  return (
    <div className="pt-5 pr-4">
      <div
        className={
          "flex container flex-col ring-2 " +
          (order.props.state ? "" : "ring-gray-200") +
          " min-w-[450px] rounded-lg py-5 px-6"
        }
      >
        <div className="flex container justify-between">
          <div className="text-blue-500 font-medium text-lg">
            {order.props.id}
          </div>
          <div
            className={
              "font-medium py-1 px-3 rounded-md" +
              (order.props.state
                ? " bg-green-200 text-green-600"
                : " bg-gray-200 text-gray-600")
            }
          >
            {order.props.state ? "Доставка" : "Доставлено"}
          </div>
        </div>
        <div className="font-medium text-2xl">{order.props.title}</div>
        <div className="pt-3 pl-2">
          <ol className="relative border-l border-blue-400 border-dashed dark:border-gray-700">
            <li className="mb-4 ml-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {order.props.routeStart}
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {dayjs(order.props.created).format("DD.MM.YYYY")}
              </time>
            </li>
            <li className="mb-0 ml-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {order.props.routeEnd}
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {dayjs(order.props.updated).format("DD.MM.YYYY")}
              </time>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

const RoutesInfo = () => {
  const [search, setSearch] = useState("");
  const { data = [], error, isLoading, isFetching, isSuccess } = useOrdersQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      data: data?.filter((item) => item.title.endsWith(search)),
      error,
      isLoading
    }),
    pollingInterval: 0,
  });

  const [searchState, setSearchState] = useState(false);
  const inputEl = useRef(null);

  const handleClick = () => {
    setSearchState(!searchState);
    setTimeout(() => {
      inputEl?.current?.focus();
    }, 0);
  };


  return (
    <div className="flex flex-col container">
      <div className="flex justify-between items-center pb-5 pt-8 px-6">
        <div className="font-medium text-lg min-w-[200px]">
          История маршрутов
        </div>
        <input
          type={searchState ? "text" : "hidden"}
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          ref={inputEl}
          className="block p-2 mr-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="button"
          onClick={() => {
            handleClick();
          }}
          className="text-white bg-blue-50 hover:bg-blue-100 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#5198ED"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto overflow-hidden h-96 p-1 scrollbar-thin scrollbar-thumb-blue-100 scrollbar-track-gray-100 pb-12">
      {isLoading ? (
        <div>
          <div className="pb-5">
            <Skeleton className="bg-blue-50 py-5 px-6 flex justify-between rounded-lg w-full h-48" width={'100%'} height={'100%'}/>
          </div>
          <div>
            <Skeleton className="bg-blue-50 py-5 px-6 flex justify-between rounded-lg w-full h-48" width={'100%'} height={'100%'}/>
          </div>
        </div>
      ) : (
        data?.map((order) => {
          return <OrderBlock props={order} key={order._id} />;
        })
      )}
      </div>
    </div>
  );
};

export default RoutesInfo;
