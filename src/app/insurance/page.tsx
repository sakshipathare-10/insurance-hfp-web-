import Plans from "@/components/insurance/Plans";

export default function InsurancePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          Compare Health Insurance Plans
        </h1>
        <p className="text-gray-500 mt-2">
          Choose from top insurance providers.
        </p>
      </div>

      <Plans />
    </div>
  );
}
