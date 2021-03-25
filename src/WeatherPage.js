import React from 'react';
import { useState } from "react";
import WeatherTable from "./WeatherTable";
import Sidebar from "./Sidebar";
import HamburgerButton from './HamburgerButton';
import SortButtons from './SortButtons';
import { useParams } from 'react-router-dom';
import './WeatherPage.css';

const WeatherPage = () => {
    const [sortBy, setSortBy] = useState("temperature");
    const [showSidebar, setShowSidebar] = useState(false);
    const params = useParams();

    return (
      <div>
        <Sidebar visible={showSidebar} />
        <HamburgerButton showSidebar={showSidebar} setSidebarVisible={() => setShowSidebar(true)} setSidebarHidden={() => setShowSidebar(false)} />
        <h1>Temperaturen i {params.place}</h1>
        <SortButtons onChangeSort={(sortBy) => setSortBy(sortBy)} />
        <WeatherTable sortBy={sortBy} place={params.place}></WeatherTable>
      </div>
    );
}

export default WeatherPage;