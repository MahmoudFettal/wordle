import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

function NavBar(props) {
  return (
    <div className="navbar flex w-100 justify-between items-center py-3 text-black dark:text-white">
      <div className="flex gap-3">
        <HelpOutlineIcon
          onClick={() => {
            props.help(true);
          }}
        />
        <HelpOutlineIcon className="text-white dark:text-zinc-800" />
      </div>
      <h1 className="text-3xl font-bold tracking-wider">WORDLE</h1>
      <div className="flex gap-3">
        <BarChartIcon />
        <SettingsIcon
          onClick={() => {
            props.darkness(!props.dark);
          }}
        />
      </div>
    </div>
  );
}

export default NavBar;
