import { getInsurancePlans } from "@/lib/services/insurance.service";
import PlanCard from "../Cards";

const Plans = () => {
  const plans = getInsurancePlans();

  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default Plans;
