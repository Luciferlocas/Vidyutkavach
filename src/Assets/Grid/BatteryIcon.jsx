import React from "react";

const BatteryIcon = () => {
  return (
    <svg
      width={40}
      height={35}
      viewBox="0 0 463 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 177v-69.168c-10.552 1.438-19.876-.69-26.214-9.666-3.408-4.828-5.45-10.394-4.733-16.438.938-7.897 4.513-14.125 11.287-18.896C19.3 57.93 26.972 59.373 35 58.897c0-7.081-.023-14.017.007-20.953.026-5.947 1.99-7.903 7.939-7.938C47.76 29.977 52.576 30 58 30c0-7.094-.014-14.022.005-20.95.012-4.795 2.96-7.987 7.785-8.019 13.496-.09 26.994-.092 40.49.003 4.693.033 6.703 2.299 6.715 7.019.019 7.138.005 14.276.005 21.947 5.346 0 10.451-.046 15.556.013 5.419.062 7.432 2.075 7.441 7.316.012 6.992.003 13.985.003 21.324h192c0-6.954-.011-14.202.004-21.45.01-4.991 2.021-7.096 7.065-7.183 5.136-.09 10.275-.02 15.931-.02 0-7.532-.017-14.802.006-22.072.015-4.632 2.092-6.867 6.839-6.898 13.496-.086 26.994-.113 40.49.012 5.335.049 7.649 2.734 7.661 8.204.016 6.787.004 13.575.004 20.754 5.339 0 10.294-.028 15.249.008 5.291.037 7.709 2.405 7.741 7.63.041 6.964.01 13.928.01 21.483 10.972-.91 21.37-.316 28.651 9.068 3.662 4.72 5.602 10.173 5.331 16.225-.347 7.775-4.069 13.802-9.754 18.913-6.086 5.471-13.548 4.69-21.014 4.698v219.459c4.965.518 10.071.208 14.588 1.692 10.608 3.485 16.983 13.53 16.1 25.322-.726 9.691-7.622 19.189-18.62 21.487-2.364.494-4.791.973-7.189.974-136.966.046-273.933.063-410.9-.001-10.893-.005-18.889-4.999-23.255-15.257-4.203-9.875-1.765-18.954 4.737-26.515 3.784-4.399 9.306-7.538 15.856-7.208 2.635.133 5.282.022 8.469.022V177zm384.322 151c4.435.35 2.598-3.07 2.6-4.834.092-70.165.078-140.331.078-210.496v-4.439H45.233V328h371.089zM19.099 92.622c2.22.793 4.44 2.277 6.661 2.28 137.158.11 274.317.102 411.475.087 7.071-.001 11.76-4.643 11.765-11.443.005-6.87-4.618-11.532-11.672-11.533-136.825-.018-273.65-.014-410.475-.007-5.205 0-9.48 2.21-11.22 7.062-1.64 4.571-1.491 9.43 3.466 13.554zM252.5 364h178.468c1.833 0 3.677.13 5.497-.023 8.134-.682 12.15-5.582 12.655-10.144.875-7.906-5.546-12.947-12.916-12.939-136.475.145-272.95.106-409.425.106h-2c-4.358.009-7.465 2.745-8.58 6.215-1.03 3.202-1.006 7.497.323 10.538 2.41 5.515 8.002 6.253 13.519 6.253C103.86 363.997 177.68 364 252.5 364zM122.942 58.272V43.205h-73.74v15.74c24.478 0 48.763 0 73.74-.673zM393.5 43h-52.213v15.717h73.426V43H393.5zM100 18.635c-.167-1.62.84-3.742-2.377-3.685-8.44.152-16.883.051-25.376.051v14.75H100V18.634zm292 1.931v-5.299h-27.729v14.46H392v-9.16z"
        fill="currentColor"
      />
      <path
        d="M262.96 197c2.658 0 4.823-.013 6.987.002 6.642.048 10.003 5 7.415 11.129-8.782 20.802-17.65 41.567-26.44 62.366-4.048 9.578-7.962 19.214-11.997 28.799-1.595 3.789-4.291 6.369-8.669 5.624-4.373-.744-5.316-4.02-5.297-8.05.092-19.12.041-38.24.041-57.87-10.372 0-20.47.012-30.568-.004-7.798-.012-10.583-4.299-7.514-11.524 12.521-29.479 25.046-58.956 37.558-88.438.437-1.031.702-2.134 1.139-3.165 1.501-3.539 3.964-5.685 8.024-4.827 4.259.9 5.427 3.907 5.404 7.982-.101 17.485-.043 34.97-.043 52.455V197h23.96zm-10.926 34.708L261.51 210c-9.861 0-18.684.002-27.508-.001-6.218-.002-8.965-2.669-8.994-8.835-.035-7.315-.008-14.63-.008-21.998-3.183.586-19.123 34.661-21.678 45.834 8.535 0 17.025-.002 25.515 0 7.71.002 10.138 2.452 10.159 10.309.02 7.738.004 15.477.004 23.215l1.579.522c3.807-8.849 7.614-17.697 11.455-27.338zM85.773 164.03c-4.145-.027-7.809-.058-11.472-.023-4.31.042-6.336-2.074-6.316-6.361.022-4.469 2.018-6.588 6.523-6.637 3.975-.043 7.95-.009 12.492-.009 0-3.965-.038-7.733.009-11.5.062-5.066 3.082-8.477 7.444-8.5 4.15-.021 6.523 2.998 6.546 8.332.015 3.497.023 6.994.038 10.491.001.161.04.323.15 1.177 4.142 0 8.403.217 12.633-.058 4.754-.309 6.299 2.893 7.055 6.397.692 3.205-3.285 6.6-7.181 6.65-3.993.05-7.987.011-12.694.011 0 3.807.027 7.552-.007 11.297-.048 5.196-2.523 8.593-6.284 8.702-4.578.133-7.566-3.341-7.735-8.741-.116-3.738-.471-7.468-1.2-11.228zM371.999 151c6.318 0 12.137-.072 17.953.024 4.201.069 6.115 2.366 6.075 6.565-.04 4.232-1.967 6.413-6.251 6.412-13.132-.003-26.263.02-39.395-.014-3.964-.01-7.451-3.196-7.373-6.574.081-3.518 3.4-6.382 7.548-6.403 6.981-.036 13.962-.01 21.443-.01z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BatteryIcon;
