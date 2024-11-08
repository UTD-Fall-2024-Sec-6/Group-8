import SideMenu from "../components/sidemenu";
import Grid from "../components/grid";

export default function GridPage() {
  return(
    <>
      <div style={{
        display: 'flex',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("images/7.png")`,
      }}>
        <SideMenu/>
        <Grid/>
      </div>
    </>
  );
}