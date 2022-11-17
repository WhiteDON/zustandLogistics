const Tabs = () => {
  return (
    <div className="py-[22px]">
    <ul className="flex justify-between flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
      <li className="mr-0">
          <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent" type="button">Детали заказа</button>
      </li>
      <li className="mr-0">
          <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button">Заказчик</button>
      </li>
      <li className="mr-0">
          <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button">Водитель</button>
      </li>
      <li className="mr-0">
          <button className="inline-block p-4 rounded-t-lg border-b-2 border-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button">Транспорт</button>
      </li>
    </ul>
  </div>
  )
}

export default Tabs