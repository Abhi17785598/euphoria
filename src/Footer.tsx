import AppleLogo from "././assets/svgs/AppStoreIcon.svg"; 
import DownArrowIcon from "././assets/svgs/downarrow.svg";
import FacebookIcon from "././assets/svgs/facebookIcon.svg";
import InstagramIcon from "././assets/svgs/instaIcon.svg";
import LinkedInIcon from "././assets/svgs/Linkedinicon.svg";
import GooglePlayLogo from "././assets/svgs/playstoreIcon.svg"; 
import TwitterIcon from "././assets/svgs/TwitterIcon.svg";

export default function Footer() {
  return (
    <footer className="bg-[#3C4242] text-white text-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 justify-items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Need Help</h3>
            <div className="space-y-4 text-[#F6F6F6]">
              <div>Contact Us</div>
              <div>Track Order</div>
              <div>Returns & Refunds</div>
              <div>FAQ’s</div>
              <div>Career</div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Company</h3>
            <div className="space-y-4 text-[#F6F6F6]">
              <div>About Us</div>
              <div>euphoria Blog</div>
              <div>euphoriastan</div>
              <div>Collaboration</div>
              <div>Media</div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">More Info</h3>
            <div className="space-y-4 text-[#F6F6F6]">
              <div>Term and Conditions</div>
              <div>Privacy Policy</div>
              <div>Shipping Policy</div>
              <div>Sitemap</div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <div className="space-y-4 text-[#F6F6F6]">
              <div>support@euphoria.in</div>
              <div>Eklingpura Chouraha, Ahmedabad Main Road</div>
              <div>(NH 8 - Near Mahadev Hotel) Udaipur, India - 313002</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 mx-15 ">
          <div className="flex gap-4">
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
              (icon, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-2 flex items-center justify-center w-10 h-10"
                >
                  <img src={icon} alt="Social Icon" className="w-5 h-5" />
                </div>
              )
            )}
          </div>

          <div className="mx-32 ">
            <h3 className="text-2xl font-semibold mb-4 px-12">
              Download The App
            </h3>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3">
              <div className="flex items-center gap-3 rounded-lg px-4 py-2 shadow-xl hover:shadow-lg transition">
                <img
                  src={GooglePlayLogo}
                  alt="Google Play"
                  className="w-6 h-6"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-white">GET IT ON</span>
                  <span className="text-lg font-semibold text-white">
                    Google Play
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg px-4 py-2 shadow-xl hover:shadow-lg transition ">
                <img src={AppleLogo} alt="App Store" className="w-6 h-6" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-white">
                    Download on the
                  </span>
                  <span className="text-lg font-semibold text-white">
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="border-t border-gray-500 mt-5 pt-6 flex justify-between items-center">
            <span className="text-xl font-bold px-10">Popular Categories</span>
            <img
              src={DownArrowIcon}
              alt="Down Arrow"
              className="w-5 h-5 mx-6"
            />
          </div>

          <div className="border-t border-gray-500 mt-5 pt-6 text-center text-[#F6F6F6] text-sm font-bold">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
