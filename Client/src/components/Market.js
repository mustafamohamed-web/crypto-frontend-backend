import React, { useState, useEffect } from "react";
import "../styles/Market.css";
import axios from "axios";

const Market = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  //INPUT SEARCH
  const handleInput = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  };

  // API CALL
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  //FILTER THROUGH DATA

  const filteredData = data.filter((coin) => coin.symbol.includes(search));

  return (
    <div>
      <h2>Search currency</h2>
      <input className="search-input" type="text" onChange={handleInput} />

      {filteredData.slice(0, 10).map((info) => {
        return (
          <div className="coin-container">
            <div className="row">
              <div className="coin">
                <img className="coin-img" src={info.image} alt="" />
                <p className="coin-name">{info.name}</p>
                {/* <p className="coin-symbol">{info.symbol}</p> */}
              </div>
              <div className="coin-info">
                <p className="price">${info.current_price}</p>
                <p className="volume">${info.total_volume.toLocaleString()}</p>
                {info.price_change_percentage_24h < 0 ? (
                  <p className="price-change-red">
                    {info.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="price-change-green">
                    {info.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
                <p className="mcKap">
                  Mkt Cap:{info.market_cap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Market;
