/** @format */

export function convertKelvinToCelsius(tempInKelvin: number): number {
    const tempInCelsius = tempInKelvin - 273.15;
    return Math.round(tempInCelsius); // Removes decimal part and keeps integer part
  }