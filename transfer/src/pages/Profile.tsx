import React, { useEffect, useState } from "react";
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
import Img13 from "../img/image 26.png";
import Img14 from "../img/Ellipse 22.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Slider } from "antd";
import type { SliderMarks } from "antd/es/slider";
import { IoMdClose } from "react-icons/io";

const marks: SliderMarks = {
  0: {
    style: {
      color: "#3E3E3E",
      fontWeight: "100",
    },
    label: <strong>0%</strong>,
  },
  25: {
    style: {
      color: "#3E3E3E",
      fontWeight: "100",
    },
    label: <strong>25%</strong>,
  },
  50: {
    style: {
      color: "#3E3E3E",
      fontWeight: "100",
    },
    label: <strong>50%</strong>,
  },
  75: {
    style: {
      color: "#3E3E3E",
      fontWeight: "100",
    },
    label: <strong>75%</strong>,
  },
  100: {
    style: {
      color: "#3E3E3E",
      fontWeight: "100",
    },
    label: <strong>100%</strong>,
  },
  // 100: {
  //   style: {
  //     color: "#f50",
  //   },
  //   label: <strong>100°C</strong>,
  // },
};

const Profile: React.FC = () => {
  const [name1, setName1] = useState("");
  const [network, setNetwork] = useState("Network");
  const [allSumm, setAllSumm] = useState(0.0);
  const [mlSumm, setMlSumm] = useState(0.0);
  const [bitcoin, setBitcoin] = useState(0.0201);
  const [Etherium, setEtherium] = useState(0.1472);
  const [BNB, setBNB] = useState(1.001);
  const [solana, setSolana] = useState(2.35);
  const [XRP, setXRP] = useState(78.687);
  const [cardano, setCardano] = useState(15.42);
  const [ totalSumm, setTotalSumm ] = useState(0)
  useEffect(() => {
    if (bitcoin === 0.0201) {
      setTotalSumm(0)
    } else if(bitcoin !== 0.0201) {
      setTotalSumm(totalSumm + bitcoin)
    }
    else if (Etherium === 0.1472) {
      setTotalSumm(totalSumm)
    } else if(Etherium !== 0.1472) {
      setTotalSumm(totalSumm + Etherium)
    }
    else if (BNB === 1.001) {
      setTotalSumm(totalSumm)
    } else if(BNB !== 1.001) {
      setTotalSumm(totalSumm + BNB)
    }
    else if (solana === 2.35) {
      setTotalSumm(totalSumm)
    } else if(solana !== 2.35) {
      setTotalSumm(totalSumm + solana)
    }
    else if (XRP === 78.687) {
      setTotalSumm(totalSumm)
    } else if(XRP === 78.687) {
      setTotalSumm(totalSumm + XRP)
    }
    else if (cardano === 15.42) {
      setTotalSumm(totalSumm)
    } else if(cardano !== 15.42) {
      setTotalSumm(totalSumm + cardano)
    }
  }, [])
  // const rangeInput = document.getElementById("myRange") as HTMLInputElement;

  // function resetSliderPosition() {
  //   rangeInput.value = rangeInput.min;
  // }

  // window.addEventListener("load", resetSliderPosition);
  function openPortfolioFull() {
    const portfol = document.querySelector(".Portfolio_pr") as HTMLDivElement;
    portfol.style.display = "none";
    const portfol2 = document.querySelector(".Portfolio_pr2") as HTMLDivElement;
    portfol2.style.display = "block";
  }

  function openCrypto() {
    const cryp = document.querySelector(".crypto_div") as HTMLDivElement;
    cryp.style.display = "flex";
  }
  function closeCrypto() {
    const cryp = document.querySelector(".crypto_div") as HTMLDivElement;
    cryp.style.display = "none";
  }

  const handleSliderChange = (value: number) => {
    console.log(value);
    // setBitcoin(bitcoin + value);
    if (value === 0) {
      setBitcoin(0.0201);
      // setTotalSumm(0)
    } else if (value === 25) {
      setBitcoin(0.0201 + 25);
      // setTotalSumm(0.0201+25)
    } else if (value === 50) {
      setTotalSumm(0.0201+50)
      // setBitcoin(0.0201 + 50);
    } else if (value === 75) {
      setTotalSumm(0.0201+75)
      // setBitcoin(0.0201 + 75);
    } else if (value === 100) {
      setTotalSumm(0.0201+100)
      // setBitcoin(0.0201 + 100);
    }
  };

  const handleSliderChange2 = (value: number) => {
    console.log(value);
    // setEtherium(bitcoin + value);
    if (value === 0) {
      setEtherium(0.1472);
    } else if (value === 25) {
      setEtherium(0.1472 + 25);
    } else if (value === 50) {
      setEtherium(0.1472 + 50);
    } else if (value === 75) {
      setEtherium(0.1472 + 75);
    } else if (value === 100) {
      setEtherium(0.1472 + 100);
    }
  };
  const handleSliderChange3 = (value: number) => {
    console.log(value);
    // setBNB(bitcoin + value);
    if (value === 0) {
      setBNB(1.001);
    } else if (value === 25) {
      setBNB(1.001 + 25);
    } else if (value === 50) {
      setBNB(1.001 + 50);
    } else if (value === 75) {
      setBNB(1.001 + 75);
    } else if (value === 100) {
      setBNB(1.001 + 100);
    }
  };
  
  const handleSliderChange4 = (value: number) => {
    console.log(value);
    // setSolana(bitcoin + value);
    if (value === 0) {
      setSolana(2.35);
    } else if (value === 25) {
      setSolana(2.35 + 25);
    } else if (value === 50) {
      setSolana(2.35 + 50);
    } else if (value === 75) {
      setSolana(2.35 + 75);
    } else if (value === 100) {
      setSolana(2.35 + 100);
    }
  };
  const handleSliderChange5 = (value: number) => {
    console.log(value);
    // setXRP(bitcoin + value);
    if (value === 0) {
      setXRP(78.687);
    } else if (value === 25) {
      setXRP(78.687 + 25);
    } else if (value === 50) {
      setXRP(78.687 + 50);
    } else if (value === 75) {
      setXRP(78.687 + 75);
    } else if (value === 100) {
      setXRP(78.687 + 100);
    }
  };
  const handleSliderChange6 = (value: number) => {
    console.log(value);
    // setXRP(bitcoin + value);
    if (value === 0) {
      setCardano(15.42);
    } else if (value === 25) {
      setCardano(15.42 + 25);
    } else if (value === 50) {
      setCardano(15.42 + 50);
    } else if (value === 75) {
      setCardano(15.42 + 75);
    } else if (value === 100) {
      setCardano(15.42 + 100);
    }
  };
  return (
    <div style={{ background: "#000" }}>
      <div className="crypto_div">
        <div className="Crypto">
          <IoMdClose onClick={() => closeCrypto()} className="close_crypto" />
          <div className="Cryp_div2">
            <h1>CONFIRM SWAP</h1>
            <p>(You pay)</p>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img13} alt="" />
              <h2>0.769725 BTC</h2>
              <p>($32,103.4979)</p>
            </div>
            <div className="bitcoin_pr">
              <img src={Img7} alt="" />
              <h2>24.55 BNB</h2>
              <p>($5,644.7815)</p>
            </div>
            <p className="You_reci">(You receive)</p>
            <div className="image_bit">
              <h1>$</h1>
              <h2>37,748.2794</h2>
            </div>
            <div className="showMore">
              <div className="line"></div>
              <p>Show more</p>
            </div>
            <div className="rate_pr">
              <p>(Rate)</p>
              <div className="rate_mini">
                <p>1 BTC = $41,732.27</p>
                <p>1 BNB = $229.66</p>
              </div>
            </div>
            <div className="rate_pr">
              <p>(Fee)</p>
              <p>$0</p>
            </div>
            <div className="rate_pr">
              <p>(Network cost)</p>
              <p>$22.5</p>
            </div>
            <button className="confirm_swap">CONFIRM SWAP</button>
          </div>
        </div>
      </div>
      {/* <div>
        <h4>included=true</h4>
        <Slider marks={marks} defaultValue={37} />
        <Slider range marks={marks} defaultValue={[26, 37]} />

        <h4>included=false</h4>
        <Slider marks={marks} included={false} defaultValue={37} />

        <h4>marks & step</h4>
        <Slider marks={marks} step={10} defaultValue={37} />

        <h4>step=null</h4>
        <Slider marks={marks} step={null} defaultValue={37} />
      </div> */}
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
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("Etherium");
            }}
          >
            <img src={Img3} alt="" />
            <div className="texts5_pr">
              <p>Etherium</p>
              <div className="texts6_pr">
                <h1>$1,642</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("Arbitrum");
            }}
          >
            <img src={Img4} alt="" />
            <div className="texts5_pr">
              <p>Arbitrum</p>
              <div className="texts6_pr">
                <h1>$348</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("ZkSync");
            }}
          >
            <img src={Img5} alt="" />
            <div className="texts5_pr">
              <p>ZkSync</p>
              <div className="texts6_pr">
                <h1>$122</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("Polygon");
            }}
          >
            <img src={Img10} alt="" />
            <div className="texts5_pr">
              <p>Polygon</p>
              <div className="texts6_pr">
                <h1>$92</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("BSC");
            }}
          >
            <img src={Img6} alt="" />
            <div className="texts5_pr">
              <p>BSC</p>
              <div className="texts6_pr">
                <h1>$56</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("Base");
            }}
          >
            <img src={Img7} alt="" />
            <div className="texts5_pr">
              <p>Base</p>
              <div className="texts6_pr">
                <h1>$52</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("Optimism");
            }}
          >
            <img src={Img8} alt="" />
            <div className="texts5_pr">
              <p>Optimism</p>
              <div className="texts6_pr">
                <h1>$37</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
          <div
            className="card_pr"
            onClick={() => {
              openPortfolioFull();
              setName1("Linea");
            }}
          >
            <img src={Img10} alt="" />
            <div className="texts5_pr">
              <p>Linea</p>
              <div className="texts6_pr">
                <h1>$12</h1>
                <p>69.6%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Portfolio_pr2">
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "20%",
                  marginLeft: 10,
                }}
                className="div_pr"
              >
                <img src={Img9} alt="" />
                <div className="text_portfol_pr">
                  <p>Bitcoin (BTS)</p>
                  <h1>0.0201</h1>
                </div>
              </div>
              <div className="Slider_range_pr">
                <Slider
                  id="markk"
                  onChange={handleSliderChange}
                  marks={marks}
                  step={75}
                  defaultValue={0}
                />
              </div>
              {/* <input type="range" id="myRange" min={0} max={4} /> */}
              <div className="nol_pr">
                <p>max</p>
                <h1>{bitcoin}</h1>
              </div>
            </div>
            <div className="portfolios_divs_pr">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "20%",
                  marginLeft: 10,
                }}
                className="div_pr"
              >
                <img src={Img3} alt="" />
                <div className="text_portfol_pr">
                  <p>Etherium (ETH)</p>
                  <h1>0.1472</h1>
                </div>
              </div>
              <div className="Slider_range_pr">
                <Slider
                  marks={marks}
                  onChange={handleSliderChange2}
                  step={75}
                  defaultValue={0}
                />
              </div>
              {/* <input type="range" id="myRange" min={0} max={4} /> */}
              <div className="nol_pr">
                <p>max</p>
                <h1>{Etherium}</h1>
              </div>
            </div>
            <div className="portfolios_divs_pr">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "20%",
                  marginLeft: 10,
                }}
                className="div_pr"
              >
                <img src={Img4} alt="" />
                <div className="text_portfol_pr">
                  <p>BNB (BNB)</p>
                  <h1>1.001</h1>
                </div>
              </div>
              <div className="Slider_range_pr">
                <Slider marks={marks}
                  onChange={handleSliderChange3}
                  step={75} defaultValue={0} />
              </div>
              {/* <input type="range" id="myRange" min={0} max={4} /> */}
              <div className="nol_pr">
                <p>max</p>
                <h1>{BNB}</h1>
              </div>
            </div>
            <div className="portfolios_divs_pr">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "20%",
                  marginLeft: 10,
                }}
                className="div_pr"
              >
                <img src={Img5} alt="" />
                <div className="text_portfol_pr">
                  <p>Solana (SOL)</p>
                  <h1>2.35</h1>
                </div>
              </div>
              <div className="Slider_range_pr">
                <Slider
                  onChange={handleSliderChange4}
                  marks={marks} step={75} defaultValue={0} />
              </div>
              {/* <input type="range" id="myRange" min={0} max={4} /> */}
              <div className="nol_pr">
                <p>max</p>
                <h1>{solana}</h1>
              </div>
            </div>
            <div className="portfolios_divs_pr">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "20%",
                  marginLeft: 10,
                }}
                className="div_pr"
              >
                <img src={Img6} alt="" />
                <div className="text_portfol_pr">
                  <p>XRP (XRP)</p>
                  <h1>78.687</h1>
                </div>
              </div>
              <div className="Slider_range_pr">
                <Slider
                  onChange={handleSliderChange5}
                  marks={marks} step={75} defaultValue={0} />
              </div>
              {/* <input type="range" id="myRange" min={0} max={4} /> */}
              <div className="nol_pr">
                <p>max</p>
                <h1>{XRP}</h1>
              </div>
            </div>
            <div className="portfolios_divs_pr">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "20%",
                  marginLeft: 10,
                }}
                className="div_pr"
              >
                <img src={Img7} alt="" />
                <div className="text_portfol_pr">
                  <p>Cardano (ADA)</p>
                  <h1>15.42</h1>
                </div>
              </div>
              <div className="Slider_range_pr">
                <Slider marks={marks}
                  onChange={handleSliderChange6}
                  step={75} defaultValue={0} />
              </div>
              {/* <input type="range" id="myRange" min={0} max={4} /> */}
              <div className="nol_pr">
                <p>max</p>
                <h1>{cardano}</h1>
              </div>
            </div>
          </div>
          <div className="portfolio_mini_div_pr2">
            {/* <div className="port_mni_pr">
                    <img src={Img12} alt="" />
                    </div> */}
            <h1>Transfer</h1>
            <p>(Convert from)</p>
            <input type="text" value={name1} />

            <p>(Total amount)</p>
            <input type="text" value={"$" + totalSumm} />

            <p>(Convert to)</p>
            <input type="text" value={network} />
            <br />
            <input type="text" value="Token" />
            <br />
            <input type="text" value={"$" + mlSumm} />
            <p>Add adress</p>
            <button onClick={() => openCrypto()}>
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
};

export default Profile;
