import React from "react";
import Festival from "./Festival";
import WeatherComponent from "./Weather";
import CarbonFootprint from "./CarbonFootprint";

export default function Vaayusoul() {
  return (
    <div>
      <div class="vaayusoulcont">
        <CarbonFootprint />
        <WeatherComponent state="Andhra Pradesh" />
      </div>
      <div>
        <Festival />
      </div>
    </div>
  );
}
