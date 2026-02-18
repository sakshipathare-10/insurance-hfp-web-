import { getInsurancePlans } from "@/lib/services/insurance.service";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    notFound(); 
  }
return (
  <div className="bg-gray-50 min-h-screen pb-24 md:pb-0">
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">


      <div className="md:col-span-2 space-y-6">

       
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {plan.planName}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Offered by <span className="font-medium">{plan.company}</span>
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Sum Insured</p>
              <p className="font-semibold text-base">
                {plan.sumInsured}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Premium</p>
              <p className="font-semibold text-green-600 text-base">
                {plan.premium}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Rating</p>
              <p className="font-semibold text-yellow-500 text-base">
                ⭐ {plan.rating}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">
            Key Benefits
          </h2>

          <ul className="space-y-3 text-sm text-gray-700">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>

      
      <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6 hidden md:block">
        <p className="text-sm text-gray-500">
          Starting at
        </p>

        <p className="text-3xl font-bold text-green-600 mt-1">
          {plan.premium}
        </p>

<Link
  href={`/insurance/${plan.id}/checkout`}
  className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition block text-center"
>
  Buy Now
</Link>


        <p className="text-xs text-gray-500 text-center mt-4">
          ✔ Secure & Trusted Platform
        </p>
      </div>
    </div>

    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center md:hidden">
      <div>
        <p className="text-xs text-gray-500">Starting at</p>
        <p className="font-semibold text-green-600">
          {plan.premium}
        </p>
      </div>

      <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
        Buy Now
      </button>
    </div>
  </div>
);


}
