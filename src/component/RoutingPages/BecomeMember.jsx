import React from 'react';

const BecomeMember = () => {
  return (
    <div>
      <div className="w-8/12 mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4  text-green-600 ">আবেদন ফরম</h2>

        <form className="space-y-1">

          <div>
            <label className="block text-sm font-medium">* সদস্যের ধরন:</label>
            <select className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400">
              <option>সদস্য</option>
              <option> আজীবন সদস্য </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">* নাম:</label>
            <input type="text" placeholder=" হোসেন" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
          </div>


          <div>
            <label className="block text-sm font-medium">* ফোন নম্বর:</label>
            <input type="text" placeholder="01XXXXXXXXX" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
          </div>

          <div>
            <label className="block text-sm font-medium">* ইমেইল:</label>
            <input type="email" placeholder="zayed@email.com" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
          </div>


          <div>
            <label className="block text-sm font-medium">* পেশা:</label>
            <select placeholder="পেশা সিলেক্ট করুন" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400">
              <option>ছাত্র</option>
              <option>চাকরিজীবী</option>
              <option>
                ব্যবসায়ী
              </option>
            </select>
          </div>


          <div>
            <label className="block text-sm font-medium">* ঠিকানা:</label>
            <input type="text" placeholder="কাঞ্চন বাজার , রূপগঞ্জ , নারায়ণগঞ্জ" className="w-full border rounded px-3 py-2 mt-1 focus:ring focus:border-blue-400" />
          </div>



          <p className="text-red-600 text-xs mt-2">
            * যাচাই করা ছাড়া কোনো তথ্য গ্রহণযোগ্য নয়, অন্যথায় আবেদন বাতিল হবে।
          </p>

          <p className="text-xs text-gray-600">
            সম্মানিত সদস্যদের সকল তথ্য আমাদের জন্য গুরুত্বপূর্ণ। সদস্যগণের তথ্য অন্য কোনো কাজে প্রকাশ করা হবে না।
          </p>

          <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            প্রেরণ করুন
          </button>

        </form>
      </div>

    </div>
  );
};

export default BecomeMember;