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
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: 'url("images/bg3.png")',
          overflowX: "auto",
          
        }}
      >
        <SideMenu />

        <div style = {{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
          <Grid onGenerateData={handleGridData} />
          {gridData && <GoalList gridId={gridData} />} 
        </div>
        
      </div>
    </>
  );
}
