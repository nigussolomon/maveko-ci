import React, {useState} from 'react'
import LeftDrawer from '../components/Drawer'
import { UilArchway } from '@iconscout/react-unicons'
import ItemTable from '../components/itemTable/itemtable'

const ItemsTable = () => {

  const [title, setTitle] = useState("ItemTable");
  const [titleIcon, setTitleIcon] = useState(<UilArchway />);
  const [subTitle, setSubTitle] = useState("> List of Items");


  return (
    <>
      <LeftDrawer
        title={title}
        setTitle={setTitle}
        sub={subTitle}
        titleIcon={titleIcon}
        setTitleIcon={setTitleIcon}
      />
      <ItemTable/>
    </>
  )
}

export default ItemsTable