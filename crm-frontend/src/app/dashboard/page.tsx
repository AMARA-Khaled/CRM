import Navbar from "@/app/components/Navbar"
import { Poppins } from "next/font/google"
import clients from "@/app/data/clients.json"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-900 to-green-500 p-4 sm:p-6 lg:p-8 ">
      <Navbar x={0} />

      <div className="flex flex-col items-center gap-6 lg:gap-8 justify-center  lg:mt-16 mb-20 sm:mb-10vh sm:mt-0 -mt-15">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl ">
          {/* Total Sales Card */}
          <div className="bg-[#0D0D12] rounded-2xl p-4 sm:p-6 h-auto min-h-[180px] sm:min-h-[200px] flex items-center justify-center">
            <img className="w-full h-auto max-w-[250px] sm:max-w-[300px]" src="/ee.svg" alt="Total Sales" />
          </div>

          {/* Average Sale Value Card */}
          <div className="bg-[#0D0D12] rounded-2xl p-4 sm:p-6 h-auto min-h-[180px] sm:min-h-[200px] flex items-center justify-center">
            <img className="w-full h-auto max-w-[250px] sm:max-w-[300px]" src="/zz.svg" alt="Avg. Sale value" />
          </div>

          {/* Total Clients Card */}
          <div className="bg-[#0D0D12] rounded-2xl p-4 sm:p-6 h-auto min-h-[180px] sm:min-h-[200px] flex flex-col justify-between md:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-center mb-4">
              <img src="/icon.svg" alt="Total Clients" className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="text-center">
              <div className={`${poppins.className} text-gray-500 text-sm sm:text-base mb-2`}>Total Clients</div>
              <div className={`${poppins.className} text-white text-2xl sm:text-3xl lg:text-4xl font-semibold`}>
                {clients.length}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="w-full max-w-7xl bg-[#0D0D12] rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="w-full h-auto max-w-full" src="/Chart.svg" alt="Chart" />
          </div>
        </div>
      </div>
    </div>
  )
}
