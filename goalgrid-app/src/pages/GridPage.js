import { useState } from "react";
import Header from "../components/grid/header";
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
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: 'url("images/7.png")',
          overflowX: "auto",
        }}
      >
        <Header />
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <div
            style={{
              flex: "0 0 300px",
              borderRight: "1px solid #ccc",
            }}
          >
            <Grid onGenerateData={handleGridData} />
          </div>
          <div style={{ flex: "1", padding: "1rem" }}>
            {gridData && <GoalList gridId={gridData} />}
          </div>
        </div>
      </div>
    </>
  );
}
