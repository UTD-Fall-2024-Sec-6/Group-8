//https://react-icons.github.io/react-icons/search/#q=settings
//npm install react-icons
//https://stackoverflow.com/questions/43768629/how-to-scale-large-font-awesome-icons-from-the-react-icons-package

import SideMenu from "./components/sidemenu";
import Grid from "./components/grid";

export default function Home() {
  return (
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
