export interface FormData {
    firstName?: string;
    lastName?: string;
    gender?: string;
    dateOfBirth?: string;
    height?: string;
    weight?: string;
    phone?: string;
    email?: string;
    city?: string;
    company?: string;
    designation?: string;
}

export const validateStep1 = (data: FormData) => {
    const errors: string[] = [];
    if (!data.firstName) errors.push("First Name is required");
    if (!data.lastName) errors.push("Last Name is required");
    if (!data.gender) errors.push("Gender is required");
    return errors;
};

export const validateStep2 = (data: FormData) => {
    const errors: string[] = [];
    if (!data.dateOfBirth) errors.push("Date of Birth is required");
    if (!data.height) errors.push("Height is required");
    if (!data.weight) errors.push("Weight is required");
    return errors;
};

export const validateStep3 = (data: FormData) => {
    const errors: string[] = [];
    if (!data.phone) errors.push("Phone number is required");
    if (!data.email) errors.push("Email is required");
    if (!data.city) errors.push("City is required");
    return errors;
};

export const validateStep4 = (data: FormData) => {
    const errors: string[] = [];
    if (!data.company) errors.push("Company/College is required");
    if (!data.designation) errors.push("Designation is required");
    return errors;
};


export const isFormValid = (errors: FormData) => {
    return Object.keys(errors).length === 0;
};

export const validEmail = (email: string) => {
    if (typeof email !== "undefined" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
    return false;
};