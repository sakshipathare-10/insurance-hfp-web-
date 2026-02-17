import { getInsurancePlans } from "@/lib/services/insurance.service";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function PlanDetailPage({ params }: PageProps) {
  const plans = getInsurancePlans();

  const plan = plans.find(
    (item) => item.id === params.id
  );

  if (!plan) {
    notFound(); // Proper Next.js 404
  }

  return (
    <div className="max-w-4xl mx-auto px-4 mt-12">
      <h1 className="text-2xl font-semibold">
        {plan.planName}
      </h1>

      <p className="text-gray-500 mt-1">
        By {plan.company}
      </p>

      <div className="mt-4 space-y-2">
        <p><strong>Sum Insured:</strong> {plan.sumInsured}</p>
        <p><strong>Premium:</strong> {plan.premium}</p>
        <p><strong>Rating:</strong> ⭐ {plan.rating}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold mb-2">
          Key Features
        </h2>

        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <button className="mt-6 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
        Buy Now
      </button>
    </div>
  );
}
