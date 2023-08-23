import React, {useState} from 'react'
import LeftDrawer from '../components/Drawer'
import { UilArchway } from '@iconscout/react-unicons'

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
    </>
  )
}

export default Warehouse