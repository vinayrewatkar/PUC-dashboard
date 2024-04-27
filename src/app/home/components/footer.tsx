import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 mb-8 lg:mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Terms and Policies</h3>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Hyperlink Policy</li>
                <li>Website Policies</li>
                <li>Content Policies</li>
                <li>Contingency Plan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Sitemap</li>
                <li>Terms of Use</li>
                <li>MoRTH</li>
                <li>CMVR 1989</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Fees and User Charges</li>
                <li>Act, Rules and Policies</li>
                <li>Permit Fees and Period</li>
                <li>Manual</li>
                <li>Homologation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Need Help</h3>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Frequently Asked Questions</li>
                <li>Raise a concern</li>
                <li>Calendar</li>
                <li>Web Information Manager</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex justify-end">
          <img src="logo.svg" alt="Logo" className="max-h-full" />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-gray-400">
        <p>This Website belongs to Ministry of Road Transport &amp; Highways (MoRTH) Government of India</p>
        <p>Designed, Developed and Hosted by: NIC, Government of India &copy; 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;