"use client"
import { redirect } from "next/navigation"
import Navbar from "@/app/components/Navbar"
import { useState } from "react"
import Clients from "@/app/data/clients.json"

const handleSubmission = () => {
   const element = document.getElementById("success")
   if (element) {
      element.innerHTML = "Client added successfully!"
   }
}



export default function AddClient() {
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [form, setForm] = useState({id: Clients.length + 1, firstName: "", lastName: "", email: "", phone: "", createdAt: "", History: []});
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };
   const handleSubmit = async (e: any) => {
      setIsSubmitting(true)
      e.preventDefault();
      form.id = Clients.length + 1;
      form.createdAt = new Date().toISOString().slice(0, 10);
      const res = await fetch('/api/clients', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(form),
      });
      setIsSubmitting(false)
      e.target.reset();
      handleSubmission()
   };
   return (
      <div
         className="min-h-screen w-full p-8"
         style={{
            background: "linear-gradient(135deg, #14532d 50%, #22c55e 100%)",
         }}
      >
         <Navbar x={2} />

         <div className="max-w-md mx-auto sm:mt-8 -mt-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
               <h1 className="text-2xl font-bold text-white mb-6 text-center">Add New Client</h1>
               <h2 className="text-center text-gray-800" id="success"></h2>
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                     <label className="block text-sm font-medium text-white mb-2">First Name</label>
                     <div className="p-[2px] rounded-lg bg-gradient-to-r from-gray-800 to-white">
                        <input
                           type="text"
                           name="firstName"
                           className="w-full p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                           placeholder="Enter client first name"
                           onChange={handleChange}
                           required
                           disabled={isSubmitting}
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                     <div className="p-[2px] rounded-lg bg-gradient-to-r from-gray-800 to-white">
                        <input
                           type="text"
                           name="lastName"
                           className="w-full p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                           placeholder="Enter client last name"
                           onChange={handleChange}
                           required
                           disabled={isSubmitting}
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-white mb-2">Email</label>
                     <div className="p-[2px] rounded-lg bg-gradient-to-r from-gray-800 to-white">
                        <input
                           type="email"
                           name="email"
                           className="w-full p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                           placeholder="Enter client email"
                           onChange={handleChange}
                           required
                           disabled={isSubmitting}
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                     <div className="p-[2px] rounded-lg bg-gradient-to-r from-gray-800 to-white">
                        <input
                           type="tel"
                           name="phone"
                           className="w-full p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                           placeholder="Enter client phone number"
                           onChange={handleChange}
                           required
                           disabled={isSubmitting}
                        />
                     </div>
                  </div>

                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     {isSubmitting ? "Adding Client..." : "Add Client"}
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}
