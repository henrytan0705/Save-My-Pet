import * as yup from "yup";

export const fullSchema = yup.object().shape({
  // Step 1: Report Info
  status: yup.string().required("Status is required."),
  name: yup.string().required("Pet name is required."),
  location: yup.string().required("Location is required."),
  additionalInfo: yup.string(),
  medicalHistory: yup.string(),
  microchipped: yup.string().required("Micro-chipped status is required."),

  // Step 2: Email
  email: yup.string().email("Invalid email").required("Email is required."),

  // Step 3: Contact Info
  firstName: yup.string().required("Contact first name is required."),
  lastName: yup.string().required("Contact last name is required."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
  // Step 4 : Photo
  //   img: yup
  //     .mixed()
  //     .test("fileSize", "The file is too large", (value) => {
  //       if (!value?.[0]) return true; // no file selected
  //       return value[0].size <= 5 * 1024 * 1024; // 5MB limit
  //     })
  //     .test("fileType", "Unsupported file format", (value) => {
  //       if (!value?.[0]) return true;
  //       return ["image/jpeg", "image/png", "image/webp"].includes(value[0].type);
  //     }),
  // Step 5 - Animal Info
  animalType: yup.string().required("Pet type is required."),
  breed: yup.string().required("Pet breed is required."),
  color: yup.string().required("Pet color is required."),
  sex: yup.string().required("Please select an option."),
});
