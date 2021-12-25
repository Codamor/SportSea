import React from "react";
import "./Sidebar.scss";

import meditationLogo from "../../assets/img/meditation.png";
import swimmingLogo from "../../assets/img/swimming.png";
import bikingLogo from "../../assets/img/biking.png";
import weightsLogo from "../../assets/img/weights.png";

/**
 * Component for showing the sidebar
 *
 * @component
 * @example
 * <SideBar />
 */
class Sidebar extends React.Component{
    render() {
        return (
            <aside className="sidebar">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <a className="sidebar__link" href="/#">
                            <img src={meditationLogo} alt="Meditation" title="Meditation"/>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link" href="/#">
                            <img src={swimmingLogo}  alt="Natation" title="Natation"/>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link" href="/#">
                            <img src={bikingLogo}  alt="Cyclisme" title="Cyclisme"/>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a className="sidebar__link" href="/#">
                            <img src={weightsLogo}  alt="Altères" title="Altères"/>
                        </a>
                    </li>
                </ul>
                <div className="sidebar__copyright">
                    Copyright, SportSee 2020
                </div>
            </aside>
        );
    }
}

export default Sidebar ;