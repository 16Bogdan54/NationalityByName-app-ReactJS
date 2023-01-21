import React from "react";

export default function Nationality({ data }) {
  return (
    <div>
      <p>Max probability is 1</p>
      {Object.values(data).map((item, index) => {
          if(item.probability > 0) {
              return (
                  <p key={index} style={{ margin: ".5rem 0rem" }}>
                      {item.country_id}
                      <span>
              <img
                  alt={item.country_id}
                  width="30px"
                  height="15px"
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.country_id}.svg`}
              />
            </span>
                      <span>{Math.floor(item.probability * 100) / 100}</span>
                  </p>
              );
          }
      })}
    </div>
  );
}
