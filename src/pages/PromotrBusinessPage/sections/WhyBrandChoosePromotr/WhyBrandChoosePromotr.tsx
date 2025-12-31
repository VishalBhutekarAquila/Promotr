import React from "react";
import image1 from "../../../../assets/businesspage/WhyBrandChoosePromotrSection/image1.svg";
import image2 from "../../../../assets/businesspage/WhyBrandChoosePromotrSection/image2.svg";
import image3 from "../../../../assets/businesspage/WhyBrandChoosePromotrSection/image3.svg";
import image4 from "../../../../assets/businesspage/WhyBrandChoosePromotrSection/image4.svg";
import image5 from "../../../../assets/businesspage/WhyBrandChoosePromotrSection/image5.svg";
import Text from "../../../../components/common/Text/Text";

const benefits = [
  {
    title: "Direct Talent Access",
    desc: "Instantly find and book verified professionals for every role, from promoters to security staff.",
    icon: image1,
  },
  {
    title: "Booked & Ready — In Minutes",
    desc: "Post your event, receive matches, confirm, and get your team locked in via our smart web/app platform.",
    icon: image2,
  },
  {
    title: "Quality Assured",
    desc: "Every manpower profile is background-checked, skill-tested, and reviewed after every event.",
    icon: image3,
  },
  {
    title: "Flexible, Transparent Pricing",
    desc: "Hire for a few hours or ongoing. See rates upfront — no hidden costs.",
    icon: image4,
  },
  {
    title: "Real-Time Attendance & Tracking",
    desc: "Monitor workforce performance, see check-ins live, and track engagement from a single dashboard.",
    icon: image5,
  },
];

const WhyBrandChoosePromotr = () => {
  return (
    <section className="w-full bg-[#FFFAEC] py-18 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <Text className="text-6xl! md:text-4xl tracking-tighter font-semibold! text-gray-900">
          Why brands choose Promotr
        </Text>
        <p className="text-black mt-4 text-xl font-medium">
          Effortless Staffing. Exceptional Results.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 space-y-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200 px-6 py-3 flex justify-between items-start gap-4 hover:shadow-md transition-all"
          >
            <div className="my-auto">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-md">{item.desc}</p>
            </div>
            <img
              src={item.icon}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBrandChoosePromotr;
