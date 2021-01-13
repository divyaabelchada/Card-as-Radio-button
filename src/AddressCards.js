import { Card, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Address from "./Address";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Close, Edit } from "@material-ui/icons";

const useStyles = makeStyles({
  card_body: {
    padding: "2em"
  }
});

const addresses = [
  {
    name: "divya",
    address_line_1: "lorem ipsum dorem",
    address_line_2: "adress line 2 lorem",
    city: "mumbai",
    state: "maharashtra",
    pincode: "400089",
    contact: "7771895256"
  },
  {
    name: "div",
    address_line_1: "lorem ipsum dorem",
    address_line_2: "adress line 2 lorem",
    city: "mumbai ",
    state: "maharashtra",
    pincode: "400089",
    contact: "7771895256"
  }
];

function AddressCard() {
  const classes = useStyles();
  const [value, setValue] = useState(addresses[0].name);
  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <div>
      <Card maxWidth="sm" className={classes.card_body}>
        <h3>Choose your address</h3>
        <hr />
        {addresses.map((adress, key) => (
          <Card
            style={
              value === addresses[key].name
                ? {
                    maxWidth: 450,
                    padding: "1em",
                    margin: "1.5em",
                    position: "relative",
                    top: 0,
                    border: "1px solid #b40000"
                  }
                : {
                    maxWidth: 450,
                    padding: "1em",
                    margin: "1.5em",
                    position: "relative",
                    top: 0
                  }
            }
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: "5%",
                right: "5%"
              }}
            >
              <Edit style={{ cursor: "pointer" }} /> &nbsp;
              <Close style={{ cursor: "pointer" }} />
            </div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Address</FormLabel>
              <RadioGroup
                aria-label="address"
                name="address"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={addresses[key].name}
                  label={
                    <Address
                      name={adress.name}
                      address_line_1={adress.address_line_1}
                      address_line_2={adress.address_line_2}
                      city={adress.city}
                      state={adress.state}
                      pincode={adress.pincode}
                      contact={adress.contact}
                    />
                  }
                  labelPlacement="start"
                  control={
                    <Radio
                      style={{
                        opacity: 1,
                        color: "#b40000",
                        marginLeft: "3em"
                      }}
                    />
                  }
                />
              </RadioGroup>
            </FormControl>
          </Card>
        ))}
      </Card>
    </div>
  );
}

export default AddressCard;
