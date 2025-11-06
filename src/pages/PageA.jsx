import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navberiot from "../components/Navberiot";
import mony from "./..//assets/mony.png";

export default function PageA() {
  return (
    <div>
      <Navberiot />
      <Headeriot wow="หน้า A" woo="^_^" />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto
                      roundeb-lg shadow-xl">
        <h1 className="text-center text-2xl text-green-600 font-bold">
          Mony Shared
        </h1>
        
        <img src="{money}" alt="รูปเงิน" className="w-30 mx-auto mt-5" />

        <h3 className="font-bold mt-5">
          มียอดเงิน
        </h3>
        <input type="text" placeholder="Input mony...." 
                className="p-2 border border-gray-300 ronded w-full mt-2"/>
        <h3 className="font-bold mt-5">
          ป้อนค้นหา
        </h3>
        <input type="text" placeholder="Input mony...." 
                className="p-2 border border-gray-300 ronded w-full mt-2"/>
        <div className="flex mt-5">
          <button className="p-3 bg-blue-500 hover:bg-blue-700
                            roundeb-lg w-full text-white cursor-pointer">
            คำนวณ
          </button>
          <button className="p-3 bg-red-500 hover:bg-red-700
                            roundeb-lg w-full text-white cursor-pointer">
            ยกเลิก
          </button>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          หารกันคนละ
          <span className="text-3xl text-red-500 font-bold">
            0.00
          </span>
          บาท
        </div>
      </div>

      {/* ....................... */}
      <Footeriot />
    </div>
  );
}
