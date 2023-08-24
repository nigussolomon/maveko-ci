import React from "react";
import {useState, useEffect} from 'react'
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CartIcon from "../../assets/CartIcon.svg";
import InventoryIcon from "../../assets/InventoryIcon.svg";
import ItemBoxIcon from "../../assets/ItemBoxIcon.svg";
import ItemList from "../../assets/ItemList.svg";

const OuterCard = ({ outerText, innerCardProps }) => {
  const outerCardStyle = {
    width: 506,
    height: 300,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    marginRight: "5%",
    marginTop: '-7%'
  };

  return (
    <Card style={outerCardStyle}>
      <CardContent>
        <Typography variant="h6" align="center">
          {outerText}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: 14,
          }}
        >
          {innerCardProps.map((innerCard, index) => (
            <InnerCard key={index} {...innerCard} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const InnerCard = ({ imageSrc, innerText, number, categoryOptions }) => {
  const innerCardStyle = {
    width: 290,
    height: 200,
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
    margin: "8px",
    backgroundColor: "#F6F8FA",
    position: "relative", // add position relative for the inner card
  };

  const contentContainerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  };

  const imageStyle = {
    width: "30%",
    marginBottom: "5%",
    ...(imageSrc === ItemBoxIcon && { marginTop: "10px" }),
    ...(imageSrc === ItemList && { width: "25%", marginTop: "8%" }),
  };

  const formControlStyle = {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)", // center the dropdown horizontally
  };
  return (
    <Card style={innerCardStyle}>
      <CardContent>
        <div style={contentContainerStyle}>
          <img src={imageSrc} alt="" style={imageStyle} />
          <Typography variant="body2" align="center">
            {innerText}
          </Typography>
        </div>
        <Typography
          variant="body1"
          align="center"
          style={{ fontWeight: "bold", fontSize: "24px" }}
        >
          {number}
        </Typography>
        <FormControl style={formControlStyle} size="small">
          <Select
            value=""
            displayEmpty
            style={{ fontSize: "15px", marginBottom: "5%" }}
          >
            <MenuItem value="" disabled>
              Category
            </MenuItem>
            {/* Dynamically render the options based on the categoryOptions prop */}
            {categoryOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

const Cards = () => {
  const [reservedQuantity, setReservedQuantity] = useState(null);
  const [availableQuantity, setAvailableQuantity] = useState(null);
  const [totalQuantity, setTotalQuantity] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/quantity/available')
      .then(response => response.json())
      .then(data => setAvailableQuantity(data.total_available_quantity))
      .catch(error => console.error('Error fetching available quantity:', error));

    fetch('http://localhost:8000/quantity/reserved')
      .then(response => response.json())
      .then(data => setReservedQuantity(data.total_reserved_quantity))
      .catch(error => console.error('Error fetching reserved quantity:', error));

    fetch('http://localhost:8000/quantity/total')
      .then(response => response.json())
      .then(data => setTotalQuantity(data.total_quantity))
      .catch(error => console.error('Error fetching available quantity:', error));

  }, []);
  const outerCardProps = [
    {
      outerText: "Inventory Summary",
      innerCardProps: [
        {
          imageSrc: InventoryIcon,
          innerText: "Total Product",
          number:  totalQuantity !== null ? totalQuantity : 'Loading...',
          categoryOptions: [
            { value: 10, label: "Option 1" },
            { value: 20, label: "Option 2" },
            { value: 30, label: "Option 3" },
          ],
        },
        {
          imageSrc: ItemBoxIcon,
          innerText: "Item in Hand",
          number: availableQuantity-reservedQuantity !== null ? availableQuantity-reservedQuantity : 'Loading...',
          categoryOptions: [
            { value: 40, label: "Option A" },
            { value: 50, label: "Option B" },
            { value: 60, label: "Option C" },
          ],
        },
      ],
    },
    {
      outerText: "Data Analysis",
      innerCardProps: [
        {
          imageSrc: ItemList,
          innerText: "Reserved Items",
          number: reservedQuantity !== null ? reservedQuantity : 'Loading...',
          categoryOptions: [
            { value: 20, label: "Option X" },
            { value: 40, label: "Option Y" },
            { value: 60, label: "Option Z" },
          ],
        },
        {
          imageSrc: CartIcon,
          innerText: "Item",
          number:  availableQuantity !== null ? availableQuantity : 'Loading...',
          categoryOptions: [
            { value: 10, label: "Option P" },
            { value: 30, label: "Option Q" },
            { value: 50, label: "Option R" },
          ],
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "60vh",
        gap: "16px",
      }}
    >
      {outerCardProps.map((props, index) => (
        <OuterCard key={index} {...props} />
      ))}
    </div>
  );
};

export default Cards;