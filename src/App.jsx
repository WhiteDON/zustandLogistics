import { ActiveOrder, RoutesInfo, CarInfo, Tabs, Map, Menu } from "./components";

function App() {
  return (
    <>
      <Menu />
      <div className="flex h-full" style={{width: 'calc(100% - 16rem)', marginLeft: '16rem'}}>
        <div className="px-[44px] py-[22px] container h-screen">
          <ActiveOrder />
          <Tabs />
          <CarInfo />
          <RoutesInfo />
        </div>
        <div className="pr-[22px] pt-[22px] pb-[17px] container rounded-lg">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
