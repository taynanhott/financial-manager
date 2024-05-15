"use client"

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Graph() {

    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1, 5, 10, 15, 20, 25, 30]
            }
        },
        series: [
            {
                name: "Mês atual",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "Mês anterior",
                data: [15, 67, 40, 20, 39, 60, 83, 88]
            }
        ]
    })

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Chart
            className="mx-auto items-center w-full max-w-xl"
            options={state.options}
            series={state.series}
            type="bar"
        />
    )
}