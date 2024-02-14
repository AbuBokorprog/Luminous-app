"use client";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  const { fields, append, remove } = useFieldArray({
    control,
    name: "benefits", // Name of the array field
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Benefits</label>
          {fields.map((field, index) => (
            <div key={field.id}>
              <input
                type="text"
                {...register(`benefits.${index}`)}
                defaultValue={field.value} // Set default value if needed
              />
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => append("")}>
            Add Benefit
          </button>
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
