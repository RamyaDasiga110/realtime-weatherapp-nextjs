/** @format */

import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { GiWindSlap } from "react-icons/gi";
import { TbSunrise, TbSunset } from "react-icons/tb";
import { MdAir, MdVisibility, MdWaterDrop } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export interface WeatherDetailProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    visability = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6.20",
    sunset = "18:48"
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<MdVisibility />}
        information="Visability"
        value={visability}
      />
      <SingleWeatherDetail
        icon={<MdWaterDrop />}
        information="Humidity"
        value={humidity}
      />
      <SingleWeatherDetail
        icon={<GiWindSlap />}
        information="Wind speed"
        value={windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air Pressure"
        value={airPressure}
      />
      <SingleWeatherDetail
        icon={<TbSunrise />}
        information="Sunrise"
        value={sunrise}
      />
      <SingleWeatherDetail
        icon={<TbSunset />}
        information="Sunset"
        value={sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}