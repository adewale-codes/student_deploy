
import Dashboard from "layouts/dashboards/analytics";
import Departments from "layouts/dashboards/departments";
import ProfileOverview from "layouts/pages/profile/profile-overview";


import Icon from "@mui/material/Icon";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Adewale",
  //   key: "adewale",
  //   collapse: [
  //     {
  //       name: "My Profile",
  //       key: "my-profile",
  //       route: "/pages/profile/profile-overview",
  //       component: <ProfileOverview />,
  //     },
  //   ],
  // },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Reports",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Home",
        key: "home",
        route: "/",
        component: <Dashboard />,
      },
      {
        name: "Departments",
        key: "departments",
        route: "/departments",
        component: <Departments />,
      },
    ],
  },
];

export default routes;
