import React,{useEffect,useState } from 'react';
import styled from 'styled-components';
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi,FaCcAmazonPay } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
 
  return (
  
<>
<Section>

  <div className="top">
    <div className="brand">
      <FaCcAmazonPay/>
      
      <span>Baz Pay</span>


    </div>
    <div className="toggle">
      <div className="links">
        <ul>
          <li onClick={()=>setCurrentLink(1)} className={currentLink ===1 ? "active":""}><a href="#">
           
            <MdSpaceDashboard/>
            <span>Dashboard</span>
            </a></li>
            <li onClick={()=>setCurrentLink(2)} className={currentLink ===2 ? "active":""}><a href="#">
            <RiDashboard2Fill/>
            <span>Profile</span>
            </a></li>
            <li onClick={()=>setCurrentLink(3)} className={currentLink ===3 ? "active":""}><a href="#">
            <FaAddressCard/>
            <span>Payment Details</span>
            </a></li>
            <li onClick={()=>setCurrentLink(4)} className={currentLink ===4 ? "active":""}><a href="#">
            <GiTwirlCenter/>
            <span>Learning</span>
            </a></li>
            <li onClick={()=>setCurrentLink(5)} className={currentLink ===5 ? "active":""}><a href="#">
            <BsFillChatTextFill/>
            <span>FAQs</span>
            </a></li>
            <li onClick={()=>setCurrentLink(6)} className={currentLink ===6 ? "active":""}><a href="#">
            <IoSettings/>
            <span>Settings</span>
            </a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="logout">
    <a href="">
      <FiLogOut/>
      <span className='logout'>Logout</span>
    </a>
  </div>
</Section>
<ResponsiveNav state={navbarState} className={navbarState ? "show":""}>
  <div className="responsive_link">
  <ul>
          <li onClick={()=>setCurrentLink(1)} className={currentLink ===1 ? "active":""}><a href="#">
           
            <MdSpaceDashboard/>
            <span>Dashboard</span>
            </a></li>
            <li onClick={()=>setCurrentLink(2)} className={currentLink ===2 ? "active":""}><a href="#">
            <RiDashboard2Fill/>
            <span>Profile</span>
            </a></li>
            <li onClick={()=>setCurrentLink(3)} className={currentLink ===3 ? "active":""}><a href="#">
            <FaAddressCard/>
            <span>Payment Details</span>
            </a></li>
            <li onClick={()=>setCurrentLink(4)} className={currentLink ===4 ? "active":""}><a href="#">
            <GiTwirlCenter/>
            <span>Learning</span>
            </a></li>
            <li onClick={()=>setCurrentLink(5)} className={currentLink ===5 ? "active":""}><a href="#">
            <BsFillChatTextFill/>
            <span>FAQs</span>
            </a></li>
            <li onClick={()=>setCurrentLink(6)} className={currentLink ===6 ? "active":""}><a href="#">
            <IoSettings/>
            <span>Settings</span>
            </a></li>
        </ul>
  </div>
</ResponsiveNav>

</>
    
  )
}
const Section=styled.section`
position:fixed;
left:0;
background-color:#212121;
height:100vh;
width:18vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding: 2rem 0;
gap:2rem;
.top{

  display:flex;
  flex-direction:column;
  gap:2rem;
  width:100%;
  .toggle{
    displaly:none;
  }
  
.brand{
  width:100%;
  display:flex;
  justify-content:center;
  align-item:center;
  gap:2rem;
svg{
  color: #ffc107;
  font-size:2rem;
}
span{
  font-size:2rem;
  color:#ffc107;
   font-family: 'Permanent Marker', cursive; 
}
}
.links{
  display:flex;
  justify-content:center;
  
ul{
  list-style-type:none;
  display:flex;
  flex-direction:column;
  gap:1rem;
  li{
     padding:0.6rem 1rem;
     border-radius:0.6rem;
     &:hover{
       background-color:#ffc107;
       a{
         color:black;
       }
     }
     a{
       text-decoration:none;
       display:flex;
       gap:1rem;
       color:white;
     }
  }
  .active{
    background-color: #ffc107;
    a{
      color:black;
    }
  }
}
}
}
.logout{
    padding:0.3rem 1rem;
    border-radius:0.6rem;
    &:hover{
      background-color:#ffc107;
    }
    a{
      text-decoration:none;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      color: white;
    } 
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.nav``