import { UilSignout } from '@iconscout/react-unicons'
import { UilArchway } from '@iconscout/react-unicons'

export const menus = [
  {
    id: 1,
    name: "Analysis",
    link: "/dashboard",
    icon: <UilArchway />,
    description: "list of all available suppliers",
  },
  {
    id: 1,
    name: "Warehouse",
    link: "/warehouse",
    icon: <UilArchway />,
    description: "list of all available suppliers",
  },
  {
    id: 1,
    name: "Items",
    link: "/items",
    icon: <UilArchway />,
    description: "Items inside the customers warehouse",
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