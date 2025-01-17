import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  console.log(
    "🚀 ~ DashboardNavbar ~ pathname:-----------------------------p",
    pathname
  );
  const pathParts = pathname.split("/").filter((el) => el !== "");
  const layout = pathParts[0];
  const page = pathParts.slice(1).join(" / ");

  return (
    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
      <div className="capitalize">
        <Breadcrumbs
          className={`bg-transparent p-0 transition-all ${
            fixedNavbar ? "mt-1" : ""
          }`}
        >
          <Link to={`/${layout}`}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
            >
              {layout}
            </Typography>
          </Link>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {page}
          </Typography>
        </Breadcrumbs>
        <Typography variant="h6" color="blue-gray">
          {page}
        </Typography>
      </div>
      <div className="flex items-center">
        <IconButton
          variant="text"
          color="blue-gray"
          className="grid xl:hidden"
          onClick={() => setOpenSidenav(dispatch, !openSidenav)}
        >
          <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
        </IconButton>
        {/* <Link to="/auth/sign-in">
          <Button
            variant="text"
            color="blue-gray"
            className="hidden items-center gap-1 px-4 xl:flex normal-case"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Log out
          </Button>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
        </Link> */}
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
        </IconButton>
      </div>
    </div>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
