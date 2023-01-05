import React from "react";
import { ActiveMode } from "../interfaces";

interface IViewOptions {
  activeMode: string;
  setActiveMode: React.Dispatch<React.SetStateAction<ActiveMode>>;
}

const ViewOptions = ({ activeMode, setActiveMode }: IViewOptions) => {
  const handleClickModeBig = () => {
    setActiveMode(ActiveMode.big);
  };

  const handleClickModeSmall = () => {
    setActiveMode(ActiveMode.small);
  };

  return (
    <div className="view-mode">
      <div
        className={`view-mode_big ${
          activeMode === ActiveMode.big ? " active" : ""
        }`}
        onClick={handleClickModeBig}
      >
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
        <div className="view-mode_big-sqare"></div>
      </div>
      <div
        className={`view-mode_small ${
          activeMode === ActiveMode.small ? " active" : ""
        }`}
        onClick={handleClickModeSmall}
      >
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
        <div className="view-mode_small-sqare"></div>
      </div>
    </div>
  );
};

export default ViewOptions;
