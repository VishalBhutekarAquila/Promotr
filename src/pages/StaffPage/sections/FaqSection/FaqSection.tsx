import { useState } from "react";
import { Box, Card, Button } from "@mantine/core";

const faqItems = [
  {
    question: "Q: Can Promotr provide specialist logistics crew?",
    answer:
      "A: Yes, we have trained logistics teams for setup, guest management, and technical support.",
  },
  {
    question: "Q: Do you offer on-site support during events?",
    answer:
      "A: Every client gets a dedicated coordinator and live helpdesk for event day support.",
  },
  {
    question: "Q: How quickly can the team be mobilized?",
    answer: "A: Major cities within 24 hours; other locations within 48 hours.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Box className="relative w-full bg-[#290000] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <img
            className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] object-cover flex-shrink-0"
            alt="FAQ icon"
            src="/image-129.png"
          />
          <h2 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12 mb-12 sm:mb-24">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="w-full bg-transparent"
              styles={{
                root: {
                  border: "1px solid #ff6f00",
                  backgroundColor: "rgba(26, 10, 10, 0.5)",
                  borderRadius: "15px",
                },
              }}
            >
              <div className="p-6 sm:p-10 lg:p-16">
                <div className="flex items-start justify-between gap-6 sm:gap-8">
                  <div className="flex-1">
                    <h3 className="font-medium text-white text-xl sm:text-2xl lg:text-3xl mb-4">
                      {item.question}
                    </h3>
                    {openIndex === index && (
                      <p className="font-medium text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed pt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <Button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    styles={{
                      root: {
                        backgroundColor: "#ff6f00",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50px",
                        padding: 0,
                        "&:hover": { backgroundColor: "#ff6f00", opacity: 0.9 },
                      },
                    }}
                  >
                    <span className="font-semibold text-white text-5xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16 justify-center">
          <img
            className="w-[220px] h-[260px] sm:w-[250px] sm:h-[300px] lg:w-[284px] lg:h-[341px] object-cover"
            alt="FAQ decoration"
            src="/image-130.png"
          />
          <Card
            className="w-full sm:w-[500px] lg:w-[675px] bg-transparent"
            styles={{
              root: {
                minHeight: "140px",
                backgroundColor: "#390a00",
                borderRadius: "25px",
                border: "1px solid #ff6f00",
              },
            }}
          >
            <div className="flex items-center justify-between p-6 sm:p-8 h-full">
              <span className="font-medium text-white text-lg sm:text-2xl lg:text-3xl">
                Question goes here
              </span>
              <span className="font-medium text-white text-4xl sm:text-5xl lg:text-6xl">
                +
              </span>
            </div>
          </Card>
        </div>
      </div>
    </Box>
  );
};

export default FaqSection;
