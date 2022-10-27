import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaWarehouse,
  FaQrcode,
} from "react-icons/fa";

const itemList = {
  superUserList: [
    {
      path: "/home",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/users",
      name: "Usuarios",
      icon: <FaUserAlt />,
    },
    {
      path: "/empresas",
      name: "Empresas",
      icon: <FaRegChartBar />,
    },
    {
      path: "/empresas/sedes",
      name: "Sedes",
      icon: <FaWarehouse></FaWarehouse>,
    },
  ],
  adminList: [
    {
      path: "/home",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/empresas/sedes",
      name: "Sedes",
      icon: <FaWarehouse></FaWarehouse>,
    },
  ],
  userList: [
    {
      path: "/home",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/code",
      name: "QR Code",
      icon: <FaQrcode></FaQrcode>,
    },
  ],
};

export default itemList;
