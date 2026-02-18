"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getInsurancePlans } from "@/lib/services/insurance.service";
import {
  validateCheckoutForm,
  CheckoutFormData,
} from "@/lib/validators/checkout.validator";

export default function CheckoutPage() {
  const router = useRouter();
  const params = useParams();

  const plans = getInsurancePlans();
  const plan = plans.find((p) => p.id === params.id);

  if (!plan) {
    return <div className="p-10">Plan not found</div>;
  }

  const [form, setForm] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    mobile: "",
    age: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateCheckoutForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      router.push(`/insurance/${plan.id}/success?name=${form.fullName}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-2xl font-bold mb-6">
          Complete Your Purchase
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {["fullName", "email", "mobile", "age"].map((field) => (
            <div key={field}>
              <input
                type={field === "age" ? "number" : "text"}
                name={field}
                placeholder={field}
                value={(form as any)[field]}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors[field]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}
