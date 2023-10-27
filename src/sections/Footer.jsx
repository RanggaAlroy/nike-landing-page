import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={48} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center bg-white p-4 rounded-full">
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="text-white-400 py-1 hover:text-slate-gray font-montserrat cursor-pointer">
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-16 max-sm:flex-col">
        <div className="flex flex-row flex-1 gap-1">
          <img src={copyrightSign} width={18} height={18} />
          <p className="font-montserrat text-white-400 text-l">
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="font-montserrat text-white-400 text-l">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
