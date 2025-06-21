import React from "react";
import Navbar from "@/app/components/Navbar";

export default function Add_client() {
   return (
      <div
         style={{
            minHeight: "100vh",
            width: "100vw",
            padding: "2rem",
            background: "linear-gradient(135deg, #14532d 50%, #22c55e 100%)",
            boxSizing: "border-box",
         }}
      >
         <Navbar x={2} />
      </div>
   );
}