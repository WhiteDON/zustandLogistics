import useDeliveriesStore from "../../../stores/deliveries.store";
import styles from "../deliveries.module.scss";
import { shallow } from "zustand/shallow";
import { MenuProps, Timeline, Button, Dropdown, message } from "antd";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Удалить",
  },
  {
    key: "2",
    label: "Передвинуть",
    children: [
      {
        key: "2-1",
        label: "Назад",
      },
      {
        key: "2-2",
        label: "Вперед",
      },
    ],
  },
];

const OrderCard = ({ props = [] }) => {
  const deleteOrder = useDeliveriesStore((state) => state.deleteOrder, shallow);
  const changeOrderStatus = useDeliveriesStore(
    (state) => state.changeOrderStatus,
    shallow
  );

  const [itemID, setItemID] = useState(0);
  const [itemStatus, setItemStatus] = useState(0);
  const [itemChanges, setItemChanges] = useState([0, 0, 0]);
  const [messageApi, contextHolder] = message.useMessage();
  enum statusList {
    "Проверка",
    "В пути",
    "Доставлено",
  }

  const error = (messageText = "Ошибка, нельзя произвести это действие") => {
    messageApi.open({
      type: "error",
      content: messageText,
    });
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    let newStatus = itemStatus;

    switch (e.key) {
      case "1":
        deleteOrder(itemID);
        break;
      case "2-1":
        if (itemStatus <= 2 && itemStatus != 0) {
          newStatus--;
          itemChanges[newStatus + 1] = 0;
        } else {
          error();
          return;
        }

        changeOrderStatus(
          itemID,
          {
            status: newStatus,
            orderStatusChanges: itemChanges,
          },
          messageApi
        );
        break;
      case "2-2":
        if (itemStatus < 2 && itemStatus >= 0) {
          newStatus++;
          itemChanges[newStatus] = Date.now();
        } else {
          error();
          return;
        }

        changeOrderStatus(
          itemID,
          {
            status: newStatus,
            orderStatusChanges: itemChanges,
          },
          messageApi
        );
        break;
    }
  };

  return (
    <>
      {contextHolder}
      {props.map((item) => {
        return (
          <div className={styles.orderCard} key={item.id}>
            <div className={styles.orderCardHeader}>
              <div className="">Номер заказа: {item.id}</div>
              <div className="">{statusList[item.status]}</div>
              <Dropdown
                menu={{ items, onClick: handleMenuClick }}
                placement="bottomRight"
                arrow
              >
                <Button
                  onClick={() => {
                    setItemID(item.id);
                    setItemStatus(item.status);
                    setItemChanges(item.orderStatusChanges);
                  }}
                >
                  ...
                </Button>
              </Dropdown>
            </div>
            <div className="">
              <Timeline mode={"left"}>
                {item.orderStatusChanges.map((date, i) => {
                  return (
                    <Timeline.Item
                      color={date != 0 ? "#1b54fe" : "gray"}
                      label={
                        date != 0 ? new Date(date).toLocaleDateString() : ""
                      }
                    >
                      {statusList[i]}
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OrderCard;
