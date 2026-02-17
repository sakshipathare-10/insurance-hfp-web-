"use client";

import { useRouter } from "next/navigation";

const PlanCard = ({ plan }: any) => {
  const router = useRouter();

  const handleViewPlan = () => {
    router.push(`/insurance/${plan.id}`);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between">

      {/* Top Section */}
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {plan.company}
            </h3>
            <p className="text-sm text-gray-500">
              {plan.planName}
            </p>
          </div>

          <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
            ★ {plan.rating}
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100"></div>

        {/* Sum Insured */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Sum Insured</p>
          <p className="font-semibold text-gray-800">
            {plan.sumInsured}
          </p>
        </div>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xl font-bold text-gray-900">
              {plan.premium}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                / month
              </span>
            </p>
            <p className="text-xs text-gray-400">incl. GST</p>
          </div>

          <button
            onClick={handleViewPlan}
            className="bg-blue-700 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
          >
            View Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
