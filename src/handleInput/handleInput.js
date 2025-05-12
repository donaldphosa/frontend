// utils/inputValidator.js

export function handleInputValidation(e) {
  const value = e.target.value;
  const inputType = e.target.type;

  // If the input type is "number"
  if (inputType === "number") {
    // Allow only numbers (integers)
    if (!/^\d*$/.test(value)) {
      e.target.value = value.slice(0, -1); // Remove the last invalid character
    }
  }

  // If the input type is "text"
  if (inputType === "text") {
    // Allow only alphabetic characters and spaces
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      e.target.value = value.slice(0, -1); // Remove the last invalid character
    }
  }
}


// utils/inputValidator.js
export function allowOnlyNumbers(event) {
  const { value } = event.target;
  // Accepts empty string, integer, or decimal (like 123 or 123.45)
  const isValid = /^(\d+\.?\d*|\.\d*)?$/.test(value);
  if (!isValid) {
    event.preventDefault();
    return false;
  }
  return true;
}
