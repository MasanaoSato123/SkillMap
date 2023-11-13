import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// ���b�N�f�[�^
const mockData = [
    { skill: 'Skill1', level: 5 },
    { skill: 'Skill2', level: 3 },
    // ���̃X�L���f�[�^
];

const SkillScatterPlot = () => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // �����̕`����N���A

        // ���b�N�f�[�^���g���ĎU�z�}��`��
        svg.selectAll("circle")
            .data(mockData)
            .enter()
            .append("circle")
            .attr("cx", d => d.level * 40) // ����X���W
            .attr("cy", d => Math.random() * 200) // ����Y���W
            .attr("r", 5) // ���a
            .style("fill", "blue");
    }, []);

    return <svg ref={svgRef} width="400" height="400" />;
};

export default SkillScatterPlot;
