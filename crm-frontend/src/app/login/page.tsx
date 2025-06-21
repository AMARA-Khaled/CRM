import Link from "next/link";


export default function Login() {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background: linear-gradient(45deg, #f0fdf4, #dcfce7, #bbf7d0); }
          50% { background: linear-gradient(45deg, #dcfce7, #bbf7d0, #86efac); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(10vw, 10vh) rotate(0deg); }
          33% { transform: translate(80vw, 20vh) rotate(120deg); }
          66% { transform: translate(70vw, 80vh) rotate(240deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(80vw, 70vh) rotate(0deg); }
          33% { transform: translate(20vw, 60vh) rotate(120deg); }
          66% { transform: translate(10vw, 30vh) rotate(240deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(60vw, 20vh) rotate(0deg); }
          33% { transform: translate(30vw, 80vh) rotate(120deg); }
          66% { transform: translate(90vw, 50vh) rotate(240deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translate(20vw, 80vh) rotate(0deg); }
          33% { transform: translate(90vw, 30vh) rotate(120deg); }
          66% { transform: translate(40vw, 10vh) rotate(240deg); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translate(70vw, 60vh) rotate(0deg); }
          33% { transform: translate(10vw, 70vh) rotate(120deg); }
          66% { transform: translate(80vw, 10vh) rotate(240deg); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .animate-float-1 { animation: float-1 20s linear infinite; }
        .animate-float-2 { animation: float-2 25s linear infinite; }
        .animate-float-3 { animation: float-3 18s linear infinite; }
        .animate-float-4 { animation: float-4 22s linear infinite; }
        .animate-float-5 { animation: float-5 28s linear infinite; }
      `}</style>

      <div
        className="relative flex flex-row items-center justify-center gap-30 min-h-screen p-6 overflow-hidden"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute w-20 h-20 bg-green-200/30 rounded-full blur-sm animate-float-1"></div>
          <div className="floating-element absolute w-32 h-32 bg-green-300/20 rounded-full blur-sm animate-float-2"></div>
          <div className="floating-element absolute w-16 h-16 bg-green-400/25 rounded-full blur-sm animate-float-3"></div>
          <div className="floating-element absolute w-24 h-24 bg-green-500/15 rounded-full blur-sm animate-float-4"></div>
          <div className="floating-element absolute w-28 h-28 bg-green-600/10 rounded-full blur-sm animate-float-5"></div>
        </div>

        {/* Login Form */}
        <div
          className="relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg backdrop-blur-sm"
          style={{ background: "linear-gradient(135deg, #14532d 50%, #22c55e 100%)" }}
        >
          <h1 className="text-3xl font-bold text-center text-white">Login</h1>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-white" htmlFor="username">
                Email or Username
              </label>
              <input
                className="rounded w-full py-2 px-3 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-black border-0"
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-white" htmlFor="password">
                Password
              </label>
              <input
                className=" rounded w-full py-2 px-3 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-black border-0"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <Link href={"/dashboard"}>
            <button
              className="text-white w-full font-bold py-2 px-4 rounded-2xl hover:scale-105 transition-transform duration-200 border-2 border-white/20 "
              type="submit"
              style={{ background: "linear-gradient(135deg, #1f2937 0% , #14532d 100%)" }}
            >
              Login
            </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
