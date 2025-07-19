import React from 'react';
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="text-center  py-4 bg-green-200 text-gray-700 text-sm shadow-inner">
        স্বত্ব © 2025 <span className="font-medium">নিঃস্বার্থ সমাজকল্যাণ যুব সংগঠন</span> - সর্ব স্বত্ব সংরক্ষিত। কারিগরি সহায়তায় <span className="font-semibold">Zayed Khan</span>।<br />
        <a href="#" className="underline hover:text-green-600">পরিষেবার শর্তাবলী</a> | <a href="#" className="underline hover:text-blue-600">গোপনীয়তা নীতি</a>
      </div>
    </div>
  );
};

export default Footer;