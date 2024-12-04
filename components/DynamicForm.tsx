// components/DynamicForm.tsx
"use client"; // This directive ensures this component is a Client Component

import { useState, useEffect } from "react";

interface DynamicFormProps {
  fields: any[]; // Array of dynamic fields
  currentLang: string; // Language to decide field labels
  submitForm: () => void; // Function to handle form submission
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, currentLang, submitForm }) => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    // Initialize form data based on fields
    const initialData = fields.reduce((acc: any, field: any) => {
      acc[field.fieldName] = ""; // Set initial empty values for fields
      return acc;
    }, {});
    setFormData(initialData);
  }, [fields]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data submitted:", formData);
    // You can send this data to the server or perform other actions
  };

  // Expose the submit function for use in parent component
  const submit = () => {
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);  // Simulate the event to call handleSubmit
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        {fields.map((field: any) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.fieldName} className="text-white">
              {currentLang === "ar" ? field.fieldName : field.fieldNameEn}
            </label>
            <input
              type={field.fieldType}
              id={field.fieldName}
              name={field.fieldName}
              value={formData[field.fieldName] || ""}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full rounded-lg border border-gray-300"
              placeholder={currentLang === "ar" ? `${field.fieldName}` : `${field.fieldNameEn}` }
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default DynamicForm;
