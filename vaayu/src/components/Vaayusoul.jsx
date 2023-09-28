import React from "react";
import Festival from "./Festival";
import WeatherComponent from "./Weather";
import CarbonFootprint from "./CarbonFootprint";
import { useAuth } from "../Authcontext";

export default function Vaayusoul() {
  const auth = useAuth();
  const cState = auth.stateRegion?auth.stateRegion:"Hyderabad"

  return (
    <div>
      <div className="vaayusoulcont">
        <CarbonFootprint />
        <WeatherComponent state={cState} />
      </div>
      <div>
        <Festival />
      </div>
    </div>
  );
}
