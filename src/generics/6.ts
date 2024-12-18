type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const formData: Params = {
  email: "test@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
};
