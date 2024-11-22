import SideMenu from "../components/grid/sidemenu";
import Grid from "../components/grid/gridmenu";

export default function GridPage() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 4fr",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("images/7.png")`,
        }}
      >
        <SideMenu />
        <Grid />
      </div>
    </>
  );
}
