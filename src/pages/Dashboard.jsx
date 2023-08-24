import React, { useState } from "react";
import { UilSitemap } from "@iconscout/react-unicons";
import LeftDrawer from "../components/Drawer";
import Cards from "../components/dashboard/Cards";

const Dashboard = () => {
  const [subTitle, setSubTitle] = useState("> Analysis");
  const [title, setTitle] = useState("Dashboard");
  const [titleIcon, setTitleIcon] = useState(<UilSitemap />);

  return (
    <>
      <LeftDrawer
        sub={subTitle}
        title={title}
        setTitle={setTitle}
        titleIcon={titleIcon}
        setTitleIcon={setTitleIcon}
      />

      <div style={{marginLeft: "15%", marginTop: "2%"}}>
        <Cards />
      </div>
    </>
  );
};

export default Dashboard;
