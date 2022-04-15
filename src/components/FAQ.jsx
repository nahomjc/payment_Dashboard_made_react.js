import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt,FaMoneyCheckAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import{MdTransferWithinAStation} from "react-icons/md";
import{GrTransaction} from "react-icons/gr";

import {RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiGroup,BiTransfer } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from "./ReusableStyles"; 
export default function FAQ() {
  return (
   <Section>
   <div className="analytic">
     <div className="content">
       <h5>Transfer</h5>
       

     </div>
     <div className="logo">

       <MdTransferWithinAStation/>
     </div>
   </div>
<div className="analytic">

  <div className="content">
    <h5>pay bill and Top-up</h5>
    
  </div>
  <div className="logo">
  <RiMoneyDollarCircleLine/>
</div>
  
</div>

<div className="analytic">

  <div className="content">
    <h5>Remittance</h5>
  
  </div>
  <div className="logo">
  <BiTransfer/>
</div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Pay for merchant </h5>
   
  </div>
  <div className="logo">
    <GiReceiveMoney/>
  </div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Cash Mangment</h5>
   
  </div>
  <div className="logo">
    <GiMoneyStack/>
  </div>
  
</div>
<div className="analytic">

  <div className="content">
    <h5>Transaction</h5>
   
  </div>
  <div className="logo">
    <FaMoneyCheckAlt/>
  </div>
  
</div>

   </Section>
  )
}
const Section= styled.section`
display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    border-radius: 5rem 5rem 5rem 5rem ;
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