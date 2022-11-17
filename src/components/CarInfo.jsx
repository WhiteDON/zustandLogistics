import { useState } from "react";
import Skeleton from "./Skeleton";

import carFinder from "../template/images/cars";

const CarBlock = (info) => {
  return (
    <div className="bg-blue-50 py-5 pl-6 flex justify-between rounded-lg">
      <div className="min-w-[200px]">
        <div className="font-medium">{info.props.title}</div>
        <div className="flex py-4">
          <div className="flex flex-col pr-9">
            <div className="text-xs text-gray-400">Загружен</div>
            <div className="font-medium">{info.props.full} кг</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-gray-400">Места занято</div>
            <div className="font-medium">{info.props.space} кв м³</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-400">Гос. Номер</div>
          <div className="font-medium">{info.props.numbers}</div>
        </div>
      </div>
      <div className="self-center">
        <Image
          src={carFinder(info.props.carId)}
          alt={info.props.title}
          className=""
        />
      </div>
    </div>
  );
};

const CarInfo = () => {
  const [data = [], setData] = useState([]);
  const [loading, setloading] = useState(false);
  const param = 0;

  return (
    <>
      {!loading ? (
        <Skeleton className="bg-blue-50 py-5 px-6 flex justify-between rounded-lg w-full h-32" width={'100%'} height={'100%'}/>
      ) : (
        data?.map((info) => {
          return <CarBlock props={info} key={info._id} />;
        })
      )}
    </>
  );
};

export default CarInfo;
