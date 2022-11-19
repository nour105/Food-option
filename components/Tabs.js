import React from "react";
import { useState } from "react"
import Image from "next/image";


function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="Tabs">
      <div className="tabsList">
        <div className={`tabsHead ${openTab === 0 ? 'active' : null}`} onClick={() => { setOpenTab(0) }}>
          <Image src="/1.png" width="50" height="50" alt="Message" />
          <div className="tab-title">
            <a>MESSAGE</a>
          </div>
        </div>
        <div className={`tabsHead ${openTab === 0 ? 'active' : null}`} onClick={() => { setOpenTab(1) }}>
          <Image src="/2.png" width="50" height="50" alt="Message" />
          <div className="tab-title">
            <a>VISION</a>
          </div>
        </div>
        <div className={`tabsHead ${openTab === 0 ? 'active' : null}`} onClick={() => { setOpenTab(2) }} >
          <Image src="/3.png" width="50" height="50" alt="Message" />
          <div className="tab-title">
            <a>GOALS</a>
          </div>
        </div>
        <div className={`tabsHead ${openTab === 0 ? 'active' : null}`} onClick={() => { setOpenTab(3) }}>
          <Image src="/4.png" width="50" height="50" alt="Message" />
          <div className="tab-title">
            <a>SCOPE OF WORK</a>
          </div>
        </div>
      </div>
      <div className="tabContent" hidden={openTab != 0}>
        <h style={{textAlign: 'left'}}>
        Providing high-quality products by investing in the food and beverage industry.
        </h>
      </div>
      <div className="tabContent" hidden={openTab != 1}>
        <p style={{textAlign: 'justify'}}>
        To create an environment where guest satisfaction and delight are our highest priority. Food options restaurants and cafes will be the best choice in the local and international market.
        </p>
      </div>
      <div className="tabContent" hidden={openTab != 2}>
        <ul>
          <li style={{textAlign: 'justify'}}> 
            1. Continuous development of our products to provide added value to achieve the satisfaction of our guests.<br />
            2. Creating Saudi concepts and brands that compete in the global market. <br />
            3. Aspiring to create local and international partnerships in the field of food and beverages. <br />
          </li>

        </ul>

      </div>
      <div className="tabContent" hidden={openTab != 3}>
        <ul>
          <li style={{textAlign: 'justify'}}>
        1. Creating varieties of brands characterized by creativity to be offered internationally.<br />
        2. Management and operation of brands of the highest quality and with high professionalism.<br />
        3. Providing consultations in establishing and developing restaurants and cafes by innovative means to achieve aspirations of partners and investors.<br />
        </li>
        </ul>
      </div>
    </div>

  )
}
export default Tabs