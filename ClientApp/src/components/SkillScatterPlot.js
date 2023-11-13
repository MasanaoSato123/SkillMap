import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// モックデータ
const mockData = [
    { skill: 'Skill1', level: 5 },
    { skill: 'Skill2', level: 3 },
    // 他のスキルデータ
];

const SkillScatterPlot = () => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // 既存の描画をクリア

        // モックデータを使って散布図を描画
        svg.selectAll("circle")
            .data(mockData)
            .enter()
            .append("circle")
            .attr("cx", d => d.level * 40) // 仮のX座標
            .attr("cy", d => Math.random() * 200) // 仮のY座標
            .attr("r", 5) // 半径
            .style("fill", "blue");
    }, []);

    return <svg ref={svgRef} width="400" height="400" />;
};

export default SkillScatterPlot;
