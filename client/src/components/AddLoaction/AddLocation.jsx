import React from "react";
import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useCountries from "../hooks/useCountries";
import { Map } from "../Map/Map";

export const AddLocation = ({ propertyDetails, setPropertyDetails,nextStep }) => {
  const { getAllCountries } = useCountries();
  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },

    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { country, city, address } = form.values;

  const submitHandler=()=>{
    const {hasErrors}=form.validate()

    if(!hasErrors){
        setPropertyDetails((prev)=>({...prev,city,address,country}))
        nextStep()
    }
  }

  return (
    <form
    onSubmit={(event)=>{
        event.preventDefault();
        submitHandler();
    }}
    >
      {/* left side */}

      <div
        className="flexCenter"
        style={{
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "3rem",
          flexDirection: "row",
        }}
      >
        {/*form inputs */}
        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable="true"
            data={getAllCountries()}
            searchable
            {...form.getInputProps("country", { type: "input" })}
          />
          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            clearable="true"
            searchable="true"
            {...form.getInputProps("city", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="address"
            clearable="true"
            searchable="true"
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>

        {/* right side */}
        <div style={{ flex: 1 }}>
          <Map address={address} city={city} country={country} />
        </div>
      </div>
      <Group position="center" mt={"xl"}>
        <Button type="submit">
            Proceed To Next Step
        </Button>

      </Group>

    </form>
  );
};
