import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Context/Authentication/AuthContext';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)
import { Doughnut } from 'react-chartjs-2';

const PatchChart = () => {
    const { theme } = useContext(AuthContext);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "left",
            },
        },
        maintainAspectRatio: false,
    }
    const labels = [
        'Hardware Devices', 'Patched Devices', 'Pending Patches'
    ]
    const data = {
        //      
        labels,
        datasets: [
            {
                data: [34, 28, 6],
                backgroundColor: ["#29ABCA", "#2ECC71", "#F0F0F0"],
                hoverBackgroundColor: ["#1E84A3", "#27AE60", "#E0E0E0"],
                circumference: 180,
                rotation: 270,
            },]
    }
    return (
        <Doughnut
            data={data}
            options={options}
            style={{ height: "120px" }}
        />
    )
}

export default PatchChart