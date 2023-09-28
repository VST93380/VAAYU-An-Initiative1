import React from "react";
import Festival from "./Festival";
import WeatherComponent from "./Weather";
import CarbonFootprint from "./CarbonFootprint";
import { useAuth } from "../Authcontext";

export default function Vaayusoul() {
  const auth = useAuth();

  return (
    <div>
      <div className="vaayusoulcont">
        <CarbonFootprint />
        <WeatherComponent state={auth.stateRegion} />
      </div>
      <div>
        <Festival />
      </div>
    </div>
  );
}
