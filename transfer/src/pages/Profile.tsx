import React from "react";
import "./css/Profile.css";
import Img1 from "../img/IMG_1489 1.png";
import Img2 from "../img/Vector 21 (Stroke).png";
import Img3 from "../img/image 12.png";
import Img4 from "../img/Group 22.png";
import Img5 from "../img/Group 23.png";
import Img6 from "../img/image 14.png";
import Img7 from "../img/image 15.png";
import Img8 from "../img/Group 24.png";
import Img9 from "../img/image 20.png";
import Img10 from "../img/Group 25.png";
import Img11 from "../img/Group 1.png";
import Img12 from "../img/Group 42.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Profile() {
  return (
    <div style={{ background: "#000" }}>
      <div className="header_pr">
        <div className="Main_pr">
          <div className="Image_div">
            <img src={Img1} alt="" />
          </div>
          <div className="texts_pr">
            <h1>Wallet</h1>
            <h1>0xE07eA.....519BF</h1>
            <div className="texts2_pr">
              <p>Change main wallet</p>
              <p>Add wallet</p>
            </div>
          </div>
        </div>
        <div className="Mini_pr">
          <h1>Your funds</h1>
          <img src={Img2} alt="" />
          <div className="texts3_pr">
            <div className="texts4_pr">
              <h1>$2,361</h1>
              <h3>+12.3%</h3>
            </div>
            <p>(month)</p>
          </div>
        </div>
      </div>
      <div className="Network_pr">
        <h1>Networks</h1>
        <div className="cards_pr">
          <div className="card_pr">
            <img src={Img3} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img4} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img5} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img10} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img6} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img7} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img8} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img10} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img7} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img8} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div className="card_pr">
            <img src={Img10} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Portfolio_pr">
        <div className="p_text_pr">
          <h1>PORTFOLIO1</h1>
          <FaArrowLeftLong size={25} />
        </div>
        <div className="porfolio_m_pr2">
          <div className="portfolio_max_div_pr2">
            <div className="inp_pr">
              <CiSearch className="close_icon" />
              <input type="text" />
              <p>All the zero</p>
              <p>All the max</p>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
            <div className="portfolios_divs_pr">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20%', marginLeft: 10 }}>
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <input type="text" />
              <p>max</p>
              <h1>0</h1>
            </div>
          </div>
          <div className="portfolio_mini_div_pr2">
            {/* <div className="port_mni_pr">
                    <img src={Img12} alt="" />
                    </div> */}
            <h1>Transfer</h1>
            <p>(Convert from)</p>
            <input type="text" />

            <p>(Convert from)</p>
            <input type="text" />

            <p>(Convert from)</p>
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <p>Add adress</p>
            <button>
              <img src={Img11} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="Portfolio_pr">
        <div className="p_text_pr">
          <h1>PORTFOLIO2</h1>
          <FaArrowLeftLong size={25} />
        </div>
        <div className="porfolio_m_pr">
          <div className="portfolio_mini_pr">
            <div className="mini_txt_pr">
              <p>(Choose any available network to continue)</p>
            </div>
            <div className="portfolio_mini_div_pr">
              <div className="port_mni_pr">
                <img src={Img12} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
