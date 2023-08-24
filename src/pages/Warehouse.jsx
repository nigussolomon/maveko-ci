import React, {useState} from 'react'
import LeftDrawer from '../components/Drawer'
import { UilArchway } from '@iconscout/react-unicons'

import WarehouseTable from "../components/warehouse/WarehouseTable"
const Warehouse = () => {

  const [title, setTitle] = useState("Warehouse");
  const [titleIcon, setTitleIcon] = useState(<UilArchway />);
  const [subTitle, setSubTitle] = useState("> Warehouse Items");


  return (
    <>
      <LeftDrawer
        title={title}
        setTitle={setTitle}
        sub={subTitle}
        titleIcon={titleIcon}
        setTitleIcon={setTitleIcon}
      />

      <div style={{marginLeft: "15%", width: "80%", marginTop: "5%"}}>
        <WarehouseTable />
      </div>
    </>
  )
}

export default Warehouse