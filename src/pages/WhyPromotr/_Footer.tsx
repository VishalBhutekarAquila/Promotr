import FooterSection from '../../components/sections/FooterSection/FooterSection'

const Footer = () => {
  return (
    <>
      <div className="pt-10 pb-7 text-white bg-radial from-[#420300] to-[#080101]">
        <FooterSection />
        <h4 className="text-center font-semibold text-lg mt-10">
          © 2025 Promotr Events & Marketing. All rights reserved.
        </h4>
        <h6 className="text-center font-light italic text-lg">
          Built to empower events. Driven by people.
        </h6>
      </div>
    </>
  )
}

export default Footer
