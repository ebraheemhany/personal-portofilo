import { Outlet } from "react-router"
import {Navpar} from "./Navpar/Navpar"
import {Themes} from "./Themes/Themes"
export const AppLayout = () => {
  return (
    <>
    
    <Navpar />
    <Outlet />
     <Themes />

    </>
  )
}
