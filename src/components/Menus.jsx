import { UilSitemap } from "@iconscout/react-unicons";
import { UilSignout } from '@iconscout/react-unicons'
import { UilArchway } from '@iconscout/react-unicons'

export const menus = [
  {
    id: 1,
    name: "Warehouse",
    link: "/warehouse",
    icon: <UilArchway />,
    description: "list of all available suppliers",
  },
];

export const subMenus = [
  {
    id: 1,
    name: " ",
    link: "/",
    account: true,
    // icon: <UilUserSquare />,
    description: "list of all available suppliers",
  },
  {
    id: 1,
    logout: true,
    name: "Logout",
    link: "/",
    icon: <UilSignout />,
    description: "list of all available customers",
  },
];