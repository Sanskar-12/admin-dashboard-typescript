import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill ,RiCoupon3Fill} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import {FaChartBar,FaChartPie,FaChartLine,FaStopwatch,FaGamepad} from "react-icons/fa"


const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo.</h2>
      <Div1 location={location}/>
      <Div2 location={location}/>
      <Div3 location={location}/>
    </aside>
  );
};

interface LocationProps{
    location:Location
}

const Div1=({location}:LocationProps)=>{
    return (
        <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            location={location}
            Icon={RiDashboardFill}
          />
          <Li
            url="/admin/products"
            text="Product"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          <Li
            url="/admin/customers"
            text="Customer"
            location={location}
            Icon={IoIosPeople}
          />
          <Li
            url="/admin/transaction"
            text="Transaction"
            location={location}
            Icon={AiFillFileText}
          />
        </ul>
      </div>
    )
}


const Div2=({location}:LocationProps)=>{
    return (
        <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/chart/bar"
            text="Bar"
            location={location}
            Icon={FaChartBar}
          />
          <Li
            url="/admin/chart/pie"
            text="Pie"
            location={location}
            Icon={FaChartPie}
          />
          <Li
            url="/admin/chart/line"
            text="Line"
            location={location}
            Icon={FaChartLine}
          />
          
        </ul>
      </div>
    )
}


const Div3=({location}:LocationProps)=>{
    return (
        <div>
        <h5>Apps</h5>
        <ul>
          <Li
            url="/admin/app/stopwatch"
            text="Stopwatch"
            location={location}
            Icon={FaStopwatch}
          />
          <Li
            url="/admin/app/coupon"
            text="Coupon"
            location={location}
            Icon={RiCoupon3Fill}
          />
          <Li
            url="/admin/app/toss"
            text="Toss"
            location={location}
            Icon={FaGamepad}
          />
          
        </ul>
      </div>
    )
}

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
