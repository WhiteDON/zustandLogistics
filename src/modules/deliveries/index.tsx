import { useEffect } from "react";
import useDeliveriesStore from "../../stores/deliveries.store";
import OrderCard from "./components/OrderCard";

const Deliveries = () => {
  const orders = useDeliveriesStore((state) => state.orders);
  const fetchOrders = useDeliveriesStore((state) => state.fetchOrders);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <OrderCard props={orders} />
    </div>
  );
};

export default Deliveries;
