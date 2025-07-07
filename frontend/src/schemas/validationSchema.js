import * as yup from "yup";

export const fullSchema = yup.object().shape({
  // Step 1: Report Info
  status: yup.string().required("Status is required."),
  petname: yup.string().required("Pet name is required."),
  location: yup.string().required("Location is required."),
  additionalInfo: yup.string(),
  medicalHistory: yup.string(),
  chipped: yup.boolean(),

  // Step 2: Email
  email: yup.string().email("Invalid email").required("Email is required."),

  // Step 3: Contact Info
  firstName: yup.string().required("Contact first name is required."),
  lastName: yup.string().required("Contact last name is required."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),

  // Step 5 - Animal Info
  animalType: yup.string().required("Pet type is required."),
  breed: yup.string(),
  color: yup.string().required("Pet color is required."),
  sex: yup.string().required("Please select an option."),
});
