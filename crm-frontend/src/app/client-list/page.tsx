"use client"

import React, { useState } from "react"
import Navbar from "@/app/components/Navbar"
import clients from "@/app/data/clients.json"
import { User, ListFilter } from "lucide-react"
import Profile from "@/app/components/client-profile"

export default function ClientList() {
  const [showPopup, setShowPopup] = useState(Array(clients.length).fill(false))

  const setIndexPopup = (index: number) => {
    const newPopupState = [...showPopup]
    newPopupState[index] = !newPopupState[index]
    setShowPopup(newPopupState)
  }
  const [search, setSearch] = useState("")
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const [orderedClients, setOrderedClients] = useState(false)
  const toggleOrder = () => {
    setOrderedClients(!orderedClients)
  }
const orderedClientsList = (clientList: typeof clients) => {
   // Example: order by firstName if orderedClients is true
   if (orderedClients) {
      return [...clientList].sort((a, b) => a.firstName.localeCompare(b.firstName))
   }
   return clientList
}
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-900 to-green-500 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <Navbar x={1} />
      <section className="flex flex-col items-center justify-center lg:mt-8 pb-20 md:pb-4 sm:mt-0 -mt-5">
        <div className="w-full max-w-4xl flex items-center">
          <button
         className="mr-3 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition"
         type="button"
         onClick={toggleOrder}
          >
            <ListFilter className="w-5 h-5" />
          </button>
          <input
         type="text"
         placeholder="Search clients..."
         className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
         onChange={handleChangeSearch}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center sm:mt-6 lg:mt-8 pb-20 md:pb-4 -mt-5">
        {clients.filter(item => item.firstName.toLowerCase().startsWith(search.toLowerCase())).length === 0 ? (
          <div
            className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center px-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            No clients found.
          </div>
        ) : (
          <div className="w-full max-w-4xl space-y-3 sm:space-y-4">
            
            {orderedClientsList(clients).filter(item => item.firstName.toLowerCase().startsWith(search.toLowerCase())).map((client) => (
              <React.Fragment key={client.id}>
                <button
                  className="w-full bg-gradient-to-r from-white to-gray-800 p-4 sm:p-6 rounded-lg shadow-lg flex items-center justify-between transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                  onClick={() => setIndexPopup(client.id - 1)}
                >
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <h1
                      className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl truncate w-full"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {client.firstName} {client.lastName}
                    </h1>
                    <h2 className="text-gray-500 text-xs sm:text-sm mt-1" style={{ fontFamily: "Roboto, sans-serif" }}>
                      {client.createdAt}
                    </h2>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <User
                      size={48}
                      className="sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                    />
                  </div>
                </button>

                <Profile id={client.id} show={showPopup[client.id - 1]} onClose={() => setIndexPopup(client.id - 1)} />
              </React.Fragment>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
