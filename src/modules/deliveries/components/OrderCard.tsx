const OrderCard = ({ props }) => {
  return (
    <>
      {props.map((item) => {
        console.log(item);

        return (
          <div className="">
            <div className="">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="">
              <ul>
                {item.orderStatusChanges.map((item) => {
                  return <li>
                    <span>{new Date(item).toLocaleDateString()}</span>
                  </li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OrderCard;
