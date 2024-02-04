import React from "react";

function Footer() {
  return (
    <div className="mt-12 flex w-full bg-white/60  h-16 border border-slate-400/30">
      <div className="flex flex-col md:flex-row justify-between my-auto items-center w-full max-w-5xl mx-auto">
        <div className="text-gray-300 italic">Social Media handles here</div>
        <div className="font-mont text-slate-600 font-xs">
          &#169; Indian Institute of Gandhinagar
        </div>
      </div>
    </div>
  );
}

export default Footer;
