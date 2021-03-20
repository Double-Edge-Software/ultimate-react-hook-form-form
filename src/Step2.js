import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useData } from "./DataContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Header } from './components/Header';
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'


const schema = yup.object().shape({
  taxYear: yup
  .string()
  .matches(/^([^A-Za-z]*)$/, 'Tax Year should only contain numbers')
  .required('Tax Year is a required Field'),
})

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };

  return (
    <>
      <MainContainer>
        <Typography component='h2' variant='h5'>
          Please Provide Your Tax Year
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            ref={register}
            name="taxYear"
            label="Tax Year"
            error = {!!errors.taxYear}
            helperText={errors?.taxYear?.message}
          />
          <PrimaryButton type="submit">Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};
