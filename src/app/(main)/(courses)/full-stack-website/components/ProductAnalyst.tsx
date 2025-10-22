export default function ProductAnalyst() {
  return (
    <section className="w-full bg-[#1b0944] text-white py-16 px-4 flex flex-col items-center">
      <div className="text-center">
        <p className="text-sm uppercase tracking-wide text-gray-300">
          Your Future Job Title
        </p>

        <h2 className="text-4xl font-bold mt-2">Product </h2>
        <h2 className="text-4xl font-bold mt-2"> Analyst</h2>

        <div className="mt-3 w-64 h-[2px] bg-white mx-auto"></div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-2">
        {/* Average Salary Card */}
        <div className="bg-[#5a1cc4] px-24 py-8 rounded-l text-center min-w-[320px] shadow-lg">
          <p className="text-l text-gray-200">Average Analyst Salary</p>
          <h3 className="text-4xl font-bold mt-1">8-10 Lakhs</h3>
        </div>

        {/* Highest Salary Card */}
        <div className="bg-[#742bff] px-24 py-8 rounded-l text-center min-w-[320px] shadow-lg">
          <p className="text-l text-gray-200">Highest Salary at NextLeap</p>
          <h3 className="text-4xl font-bold mt-1">31 Lakhs</h3>
        </div>
      </div>
    </section>
  );
}
