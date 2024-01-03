import logo from "@/assets/images/technet-logo-white.png";
import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="bg-[#242630] text-secondary px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mx-auto">
          <div>
            <img className="h-10" src={logo} alt="Logo" />
          </div>
          <div className="  gap-20">
            <ul className="space-y-2">
              <li>Upcoming</li>
              <li>Shipping</li>
              <li>How it works</li>
            </ul>
            <ul className="space-y-2">
              <li>Support</li>
              <li>Careers</li>
            </ul>
            <ul className="space-y-2">
              <li>List your gear</li>
              <li>Contact team</li>
            </ul>
          </div>
          <div className="flex gap-2 text-2xl">
            <RiFacebookBoxFill />
            <RiInstagramLine />
          </div>
        </div>
      </div>

      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; TechNet {year}</p>
      </div>
    </>
  );
};

export default Footer;
