import { useState } from "react";
import SideMenu from "../components/grid/sidemenu";
import Grid from "../components/grid/gridmenu";
import GoalList from "../components/grid/goallist";

export default function GridPage() {
  const [gridData, setGridData] = useState(null);
  const handleGridData = (data) => {
    setGridData(data);
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 4fr",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: 'url("images/bg3.png")',
          overflowX: "auto",
        }}
      >
        <SideMenu />
        <Grid onGenerateData={handleGridData} />
        {gridData && <GoalList gridId={gridData} />}
      </div>
    </>
  );
}
