import group from "../../../../assets/businesspage/CTA/group.svg";
import React from "react";

const EventCTASection = () => {
  return (
    <section className="w-full bg-[#180000] py-20 flex flex-col items-center text-center px-6">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
        Ready to Power Your Event?
      </h2>

      <img
        src={group}
        // Replace with your actual file:
        // src="/mnt/data/6d27069b-b376-4787-ab12-3264d9eaa584.png"
        alt="Promotr Team"
        className="w-[260px] sm:w-[320px] lg:w-[580px] mt-10"
      />

      <p className="text-white/90 text-lg sm:text-xl max-w-3xl mt-8 leading-relaxed">
        Transform your event staffing. Save time. Ensure quality.
        <br />
        Book India’s best — the Promotr way.
      </p>

      <div className="flex gap-24 mt-10 flex-wrap justify-center">
        <button className="bg-[#FFD400] hover:bg-neutral-400 rounded-bl-none text-black cursor-pointer px-6 py-3 rounded-full text-sm sm:text-lg! font-medium">
          Book Your Team Now
        </button>

        <button className="border border-white hover:bg-neutral-700 rounded-br-none text-white cursor-pointer px-6 py-3 rounded-full text-sm sm:text-lg! font-medium">
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
};

export default EventCTASection;
