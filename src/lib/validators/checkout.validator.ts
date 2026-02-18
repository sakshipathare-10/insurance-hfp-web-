export interface CheckoutFormData {
  fullName: string;
  email: string;
  mobile: string;
  age: string;
}

export const validateCheckoutForm = (
  data: CheckoutFormData
) => {
  const errors: Record<string, string> = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!data.email.includes("@")) {
    errors.email = "Valid email is required";
  }

  if (!/^[0-9]{10}$/.test(data.mobile)) {
    errors.mobile = "Enter valid 10 digit mobile number";
  }

  if (!data.age || Number(data.age) < 18) {
    errors.age = "Age must be 18+";
  }

  return errors;
};
