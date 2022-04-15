import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from "./ReusableStyles"; 
export default function Analytics() {
  return (
   <Section>
   <div className="analytic">
     <div className="content">
       <h5>SEND</h5>
       

     </div>
     <div className="logo">

       <FaMoneyBillAlt/>
     </div>
   </div>
<div className="analytic">
<div className="logo">
  <BsFillArrowUpCircleFill/>
</div>
  <div className="content">
    <h5>Withdraw</h5>
    <h2>12599.15 birr</h2>
  </div>
  
</div>

<div className="analytic">
<div className="logo">
  <GiPayMoney/>
</div>
  <div className="content">
    <h5>PAY</h5>
  
  </div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Deposit</h5>
   
  </div>
  <div className="logo">
    <BsFillArrowDownCircleFill/>
  </div>
  
</div>

   </Section>
  )
}
const Section= styled.section`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
      
    }
}`;