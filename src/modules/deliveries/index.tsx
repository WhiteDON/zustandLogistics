import { useEffect } from "react";
import useDeliveriesStore from "../../stores/deliveries.store";
import OrderCard from "./components/OrderCard";
import styles from "./deliveries.module.scss";
import { shallow } from "zustand/shallow";

const Deliveries = () => {
  const orders = useDeliveriesStore((state) => (state.orders), shallow);
  const fetchOrders = useDeliveriesStore((state) => (state.fetchOrders), shallow);

  useEffect(() => {
    fetchOrders("");
  }, []);

  return (
    <div className={styles.mainDeliveriesBlock}>
      <OrderCard props={orders} />
    </div>
  );
};

export default Deliveries;
