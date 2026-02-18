"use client";

import { useSearchParams, useParams, useRouter } from "next/navigation";
import { getInsurancePlans } from "@/lib/services/insurance.service";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();

  const name = searchParams.get("name");
  const plans = getInsurancePlans();
  const plan = plans.find((p) => p.id === params.id);

  if (!plan) return <div className="p-10">Plan not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">

        <div className="text-4xl text-green-600 mb-4">✓</div>

        <h1 className="text-xl font-bold">Payment Successful</h1>

        <p className="mt-2 text-gray-600">
          Thank you <span className="font-semibold">{name}</span> for purchasing{" "}
          <span className="font-semibold">{plan.planName}</span>.
        </p>

        <button
          onClick={() => router.push("/insurance")}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Explore More Plans
        </button>
      </div>
    </div>
  );
}
