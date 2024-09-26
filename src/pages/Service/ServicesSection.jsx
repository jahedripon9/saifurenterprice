// src/components/ServicesSection.js
import React, { useState } from "react";
import './ServiceSection.css'
import ServiceCard from "./ServiceCard";
import air_ticket from "../../assets/air_ticket.jpg";
import Visa_Processing from "../../assets/Visa_Processing.jpg";
import Hajj_Umrah from "../../assets/Hajj_Umrah.jpeg";
import Main_Power from "../../assets/BMET.jpg";
import Tourist_Visa from "../../assets/Tourist_Visa.jpg";
import Passport from "../../assets/Passport.jpeg";
import Appointment from "../../assets/Appointment.jpg";
import Hotel_Booking from "../../assets/Hotel_Booking.jpg";

// Images for services
const serviceImages = {
  "Air Ticket": air_ticket,
  "Visa Processing": Visa_Processing,
  "Hajj & Umrah Package": Hajj_Umrah,
  "Any VFS Appointment": Appointment,
  "Hotel Booking": Hotel_Booking,
  "Main Power": Main_Power,
  "Tourist Visa": Tourist_Visa,
  "Passport": Passport,
};

// Detailed information for services
const serviceDetails = {
  "Air Ticket": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - বিশেষ অফার ও ডিসকাউন্ট: Saifur Enterprise সময়-সময়ে বিভিন্ন এয়ারলাইন কোম্পানির বিশেষ অফার এবং ডিসকাউন্ট প্রদান করে, যা আপনার টিকেটের মূল্য কমাতে সাহায্য করতে পারে।
      - বিশেষজ্ঞ সহায়তা: আপনার যাত্রা পরিকল্পনার জন্য বিশেষজ্ঞ সহায়তা ও পরামর্শ। তারা আপনার প্রয়োজন অনুযায়ী সঠিক এবং উপযুক্ত টিকেট খুঁজে বের করতে সহায়তা করবে।
      - সহজ বুকিং প্রক্রিয়া: Saifur Enterprise-এর মাধ্যমে টিকেট বুকিং প্রক্রিয়া সহজ এবং দ্রুত। আপনি ফোন কল বা ইমেইলের মাধ্যমে দ্রুত টিকেট বুক করতে পারেন।
      - টিকেট পরিবর্তনের সুবিধা: কখনো কখনো আপনার পরিকল্পনায় পরিবর্তন আসতে পারে। Saifur Enterprise টিকেট পরিবর্তন এবং বাতিলের প্রক্রিয়া নিয়ে আপনাকে সাহায্য করবে।
      - যাত্রাপথ ও সময়ের নির্বাচন: আপনার প্রয়োজন অনুযায়ী বিভিন্ন এয়ারলাইনের যাত্রাপথ ও সময়ের বিকল্প প্রদান করে, যাতে আপনি আপনার সুবিধামত টিকেট বেছে নিতে পারেন।
      - গ্রাহক সেবা: Saifur Enterprise ২৪/৭ গ্রাহক সেবা প্রদান করে, তাই যেকোনো সমস্যা বা প্রশ্ন থাকলে আপনি তাদের সাথে সহজেই যোগাযোগ করতে পারেন।
      - সম্পূর্ণ প্যাকেজ: এয়ার টিকেট ছাড়াও তারা ভিসা প্রসেসিং, হোটেল বুকিং এবং অন্যান্য ভ্রমণ সেবা প্রদান করে, যা আপনার পুরো ভ্রমণ পরিকল্পনা সহজতর করে।
  `,
  "Visa Processing": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - বিশেষজ্ঞ পরামর্শ: Saifur Enterprise-এর অভিজ্ঞ টিম আপনাকে ভিসা প্রক্রিয়া সম্পর্কে বিস্তারিত তথ্য এবং পরামর্শ প্রদান করবে, যা আপনার জন্য খুবই সহায়ক হতে পারে।
      - দ্রুত এবং সহজ প্রক্রিয়া: তারা ভিসা প্রক্রিয়াকে সহজ এবং দ্রুত করতে সহায়তা করে। আপনি খুব দ্রুত প্রয়োজনীয় কাগজপত্র সংগ্রহ করতে পারেন এবং সময় বাঁচাতে পারেন।
      - সম্পূর্ণ সেবা: Saifur Enterprise বিভিন্ন দেশের ভিসা, যেমন পর্যটন, ব্যবসা, শিক্ষা ইত্যাদির জন্য সহায়তা প্রদান করে। তারা প্রয়োজনীয় ফর্ম পূরণ এবং কাগজপত্র প্রস্তুত করতে সহায়তা করবে।
      - প্রয়োজনীয় তথ্যের আপডেট: বিভিন্ন দেশের ভিসা নীতিমালা পরিবর্তিত হয়। Saifur Enterprise আপনাকে সর্বশেষ আপডেট এবং নিয়মাবলী সম্পর্কে জানিয়ে রাখবে।
      - কাগজপত্র যাচাই: আপনার সমস্ত কাগজপত্র সঠিক এবং পূর্ণাঙ্গ কিনা তা যাচাই করার জন্য তারা আপনাকে সাহায্য করবে, যাতে ভিসা আবেদন পেতে কোন সমস্যা না হয়।
      - সম্ভাব্য সমস্যা সমাধান: যদি আপনার আবেদন প্রক্রিয়ায় কোন সমস্যা হয়, Saifur Enterprise এর দক্ষ টিম তা সমাধানে সহায়তা করবে।
      - ট্র্যাকিং সুবিধা: আবেদন করার পর, তারা আপনার ভিসা প্রক্রিয়ার অগ্রগতি ট্র্যাক করার সুযোগ প্রদান করে, যাতে আপনি জানেন কখন আপনার ভিসা আসবে।
      - সাশ্রয়ী মূল্য: Saifur Enterprise প্রতিযোগিতামূলক মূল্য সহ বিভিন্ন ভিসা প্রসেসিং প্যাকেজ প্রদান করে, যা আপনার বাজেটের সাথে মানানসই।
  `,
  "Hajj & Umrah Package": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - বিশেষ প্যাকেজ: Saifur Enterprise নির্দিষ্ট সময়ের মধ্যে Hajj এবং Umrah-এর জন্য বিশেষ প্যাকেজ অফার করে, যা আপনার ভ্রমণকে আরও সাশ্রয়ী করে।
      - পরিপূর্ণ সেবা: তারা হজ ও উমরার সকল প্রক্রিয়ায় সহায়তা করে, যেমন হোটেল বুকিং, যাতায়াত এবং অন্যান্য প্রস্তুতি।
      - অভিজ্ঞ গাইড: Saifur Enterprise অভিজ্ঞ গাইডের মাধ্যমে আপনার জন্য একটি সুষ্ঠু এবং সঠিক হজ বা উমরা পালনের সুযোগ প্রদান করে।
      - নিরাপত্তা ও সুবিধা: তারা আপনার ভ্রমণের জন্য সর্বোচ্চ নিরাপত্তা নিশ্চিত করে এবং সকল প্রয়োজনীয় সুবিধা প্রদান করে।
  `,
  "Any VFS Appointment": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - বিশেষজ্ঞ সহায়তা: Saifur Enterprise VFS অ্যাপয়েন্টমেন্টের জন্য প্রয়োজনীয় তথ্য ও নির্দেশনা প্রদান করে, যাতে আপনার আবেদন প্রক্রিয়া সহজ হয়।
      - শিডিউল ব্যবস্থাপনা: তারা আপনার সময়সূচি অনুযায়ী অ্যাপয়েন্টমেন্ট নির্ধারণে সহায়তা করে, যাতে আপনাকে দীর্ঘ সময় অপেক্ষা করতে না হয়।
      - সকল প্রয়োজনীয় নথি যাচাই: আবেদন করার আগে আপনার সকল নথি সঠিক কিনা তা যাচাই করার জন্য সহায়তা করে, যাতে আবেদন প্রক্রিয়া কোনো জটিলতার সম্মুখীন না হয়।
  `,
  "Hotel Booking": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - বিশেষ অফার ও ডিসকাউন্ট: Saifur Enterprise বিভিন্ন হোটেলের জন্য বিশেষ অফার এবং ডিসকাউন্ট প্রদান করে, যা আপনার বাজেটে মানানসই।
      - সম্পূর্ণ সেবা: তারা আপনার পছন্দের এলাকায় সঠিক হোটেল খুঁজে পেতে সহায়তা করে এবং বুকিং প্রক্রিয়া সহজ করে।
      - গ্রাহক সেবা: যেকোনো সমস্যা বা প্রশ্নের জন্য ২৪/৭ গ্রাহক সেবা প্রদান করে, তাই আপনি সহজেই যোগাযোগ করতে পারেন।
  `,
  "Main Power": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - বহির্গামী শ্রমিকদের জন্য সহায়তা: Saifur Enterprise বিদেশে কাজ করার জন্য BMET প্রক্রিয়া এবং নথিপত্রের সমস্ত বিষয়ে সহায়তা করে।
      - বিস্তারিত তথ্য প্রদান: তারা আপনাকে বিদেশে কাজ করার জন্য প্রয়োজনীয় শর্তাদি ও নিয়মাবলী সম্পর্কে সচেতন করে।
      - নথিপত্র প্রস্তুতি: আপনার নথিপত্র সঠিকভাবে প্রস্তুত করতে সাহায্য করে, যাতে কোনো সমস্যা না হয়।
  `,
  "Tourist Visa": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - সহজ ও দ্রুত প্রক্রিয়া: Saifur Enterprise ভ্রমণ ভিসার জন্য আবেদন প্রক্রিয়া সহজ করে, যাতে আপনি দ্রুত ভিসা পেতে পারেন।
      - অভিজ্ঞতার সহায়তা: তাদের অভিজ্ঞ টিম আপনাকে ভিসা আবেদন সম্পর্কে বিস্তারিত তথ্য ও পরামর্শ প্রদান করবে।
      - নথিপত্র যাচাই: আপনার সকল কাগজপত্র সঠিক এবং পূর্ণাঙ্গ কিনা তা যাচাই করার জন্য তারা সহায়তা করবে।
  `,
  "Passport": `
      কেন Saifur Enterprise-এর সাথে যোগাযোগ করবেন:
      - পাসপোর্ট আবেদন প্রক্রিয়া: Saifur Enterprise পাসপোর্ট আবেদন ও নবায়নের প্রক্রিয়া সম্পর্কে বিস্তারিত তথ্য প্রদান করে।
      - কাগজপত্র প্রস্তুতির সহায়তা: পাসপোর্টের জন্য প্রয়োজনীয় নথি প্রস্তুত করতে এবং জমা দিতে সহায়তা করে।
      - সম্ভাব্য সমস্যা সমাধান: যদি আপনার পাসপোর্টের আবেদন প্রক্রিয়ায় কোন সমস্যা হয়, Saifur Enterprise তা সমাধানে সহায়তা করবে।
  `,
};


const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="py-10 bg-gray-50 rounded-lg">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 fade-in">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8 fade-in">
        {Object.keys(serviceImages).map((service) => (
          <ServiceCard
            key={service}
            title={service}
            image={serviceImages[service]}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>

      {/* Detailed Information Modal or Section */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10 fade-in">
        <div className="bg-gradient-to-tr from-white to-gray-100 rounded-lg shadow-2xl p-8 max-w-md mx-auto transition-transform transform scale-100">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
            {selectedService}
          </h3>
          <ol className="mt-2 text-gray-800 my-3 list-decimal list-outside text-justify">
            {serviceDetails[selectedService]
              .trim() // Trim any leading/trailing whitespace
              .split('\n') // Split by new line to create an array
              .map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
          </ol>
          <div className="flex justify-center mt-6"> {/* Centering the button */}
            <button
              className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default ServicesSection;
