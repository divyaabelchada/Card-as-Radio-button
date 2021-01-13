import { Container } from "@material-ui/core";

import React from "react";

function Address({
  name,
  address_line_1,
  address_line_2,
  city,
  state,
  pincode,
  contact
}) {
  return (
    <Container>
      <p>
        {name}
        <br />
        {address_line_1}
        <br />
        {address_line_2}
        <br />
        {city}
        {pincode}
        <br />
        {state}
        <br />
        Mobile Number: {contact}
      </p>
    </Container>
  );
}

export default Address;
