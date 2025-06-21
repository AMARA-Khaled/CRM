"use client"
import clients from "@/app/data/clients.json"
import { Phone, Mail, User, Calendar, X } from "lucide-react"

export default function Profile({ id, show, onClose }: { id: number; show: boolean; onClose: () => void }) {
  if (!show) return null
  const TheOne = clients.find((client) => String(client.id) === String(id))

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 text-gray-800 backdrop-blur-sm p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 w-full relative">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
            <User className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-0 sm:mr-4 md:mr-6 text-blue-600 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl break-words">
                {TheOne?.firstName} <span className="font-bold">{TheOne?.lastName}</span>
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex items-start">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-gray-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base break-all">{TheOne?.email}</span>
            </div>

            <div className="flex items-center">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-gray-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">{TheOne?.phone}</span>
            </div>

            <div className="flex items-start">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-gray-600 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-sm sm:text-base">Joined: {TheOne?.createdAt}</span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="font-semibold mr-3 text-sm sm:text-base flex-shrink-0">Address:</span>
              <span className="text-sm sm:text-base break-words min-w-0">{TheOne?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
