import React from 'react';

const Marque = () => {
  return (
    <div className="bg-green-800 overflow-hidden whitespace-nowrap">
      <div
        className="inline-block text-white font-semibold"
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          transform: 'translateX(100%)',
          animation: 'marquee 20s linear infinite',
        }}
      >
        আমাদের অনলাইনের সকল কার্যক্রম ইন্টারনেট চালু হয়েছে। দ্রুততম সময়ে তথ্যটি পেতে সরাসরি ওয়েবসাইট থেকে অর্ডার করুন।
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Marque;
