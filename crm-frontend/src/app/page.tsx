import Image from "next/image";
import Login from "@/app/login/page";
import Navbar from "@/app/components/Navbar";
import Dashboard from "@/app/dashboard/page";
import Client_list from "@/app/client-list/page";
import Add_client from "@/app/add-client/page";


export default function Home() {
  return (
   <>
    <Login />
   </>
  );
}
