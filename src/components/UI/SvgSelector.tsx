import React from 'react';

interface Props {
  id: string;
}

function SvgSelector({ id }: Props) {
  switch (id) {
    case "shopping-cart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5.50835165,12.5914912 C5.5072855,12.5857255 5.50631828,12.5799252 5.5054518,12.5740921 L4.28533671,5.25340152 C4.16478972,4.53011956 3.53900455,4 2.80574582,4 L2.5,4 C2.22385763,4 2,3.77614237 2,3.5 C2,3.22385763 2.22385763,3 2.5,3 L2.80574582,3 C3.99756372,3 5.0190253,3.84029234 5.25525588,5 L21.5,5 C21.8321894,5 22.0720214,5.31795246 21.980762,5.63736056 L19.980762,12.6373606 C19.9194332,12.8520113 19.7232402,13 19.5,13 L6.59023021,13 L6.71466329,13.7465985 C6.83521028,14.4698804 7.46099545,15 8.19425418,15 L19.5,15 C19.7761424,15 20,15.2238576 20,15.5 C20,15.7761424 19.7761424,16 19.5,16 L8.19425418,16 C6.97215629,16 5.92918102,15.1164674 5.72826937,13.9109975 L5.5083519,12.5914927 L5.50835165,12.5914912 Z M5.42356354,6 L6.42356354,12 L19.1228493,12 L20.837135,6 L5.42356354,6 Z M8,21 C6.8954305,21 6,20.1045695 6,19 C6,17.8954305 6.8954305,17 8,17 C9.1045695,17 10,17.8954305 10,19 C10,20.1045695 9.1045695,21 8,21 Z M8,20 C8.55228475,20 9,19.5522847 9,19 C9,18.4477153 8.55228475,18 8,18 C7.44771525,18 7,18.4477153 7,19 C7,19.5522847 7.44771525,20 8,20 Z M17,21 C15.8954305,21 15,20.1045695 15,19 C15,17.8954305 15.8954305,17 17,17 C18.1045695,17 19,17.8954305 19,19 C19,20.1045695 18.1045695,21 17,21 Z M17,20 C17.5522847,20 18,19.5522847 18,19 C18,18.4477153 17.5522847,18 17,18 C16.4477153,18 16,18.4477153 16,19 C16,19.5522847 16.4477153,20 17,20 Z" />
        </svg>
      );
    case "magnifier":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.9994165,16.2923098 L20.8535534,20.1464466 C21.0488155,20.3417088 21.0488155,20.6582912 20.8535534,20.8535534 C20.6582912,21.0488155 20.3417088,21.0488155 20.1464466,20.8535534 L16.2923098,16.9994165 C14.8819612,18.2444908 13.0292099,19 11,19 C6.581722,19 3,15.418278 3,11 C3,6.581722 6.581722,3 11,3 C15.418278,3 19,6.581722 19,11 C19,13.0292099 18.2444908,14.8819612 16.9994165,16.2923098 Z M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z" />
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <path d="M34.865,39.83l-10.25-5.621-10.153,5.8,2.091-11.647L7.99,20.335l11.542-1.577L24.394,8l5.042,10.672L41,20.047l-8.426,8.173Z" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
}

export default SvgSelector;
