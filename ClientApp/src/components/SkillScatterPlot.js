import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SkillScatterPlot = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        console.log(data);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => d.level * 40)
            .attr("cy", d => Math.random() * 200)
            .attr("r", 5)
            .style("fill", "blue");
    }, [data]);

    return <svg ref={svgRef} width="400" height="400" />;
};

export default SkillScatterPlot;
