"use client"

import React from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
    components: {
        options: {
            chart: {
                id: string
            },
            xaxis: {
                categories: string[]
            },
            colors?: string[],
        },
        series: {
            name: string,
            data: number[]
        }[],
        height: number
    }[],
}

function Graph({ components }: Props) {
    return (
        <>
            {components.map(component => (
                <Chart
                    key={component.options.chart.id}
                    className={`w-full pt-4 px-6`}
                    options={component.options}
                    series={component.series}
                    type="bar"
                    height={component.height}
                />
            ))}
        </>
    )
}

export default Graph;