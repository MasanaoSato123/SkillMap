import React, { Component } from 'react';
import SkillFilter from './SkillFilter';
import SkillScatterPlot from './SkillScatterPlot';

// ���b�N�f�[�^
const mockData = [
    { skill: 'Skill1', level: 5 },
    { skill: 'Skill2', level: 3 },
    // ���̃X�L���f�[�^
];

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSkill: 'all', // �I�����ꂽ�X�L��
            filteredData: mockData, // �t�B���^�����O���ꂽ�f�[�^
        };
    }

    handleFilterChange = (event) => {
        const selectedSkill = event.target.value;
        this.setState({
            selectedSkill: selectedSkill,
            filteredData: selectedSkill === 'all' ? mockData : mockData.filter(d => d.skill === selectedSkill)
        });
    }

    render() {
        return (
            <div>
                <SkillFilter onFilterChange={this.handleFilterChange} />
                <SkillScatterPlot data={this.state.filteredData} />
                {/* ���̑��̃R���e���c */}
            </div>
        );
    }
}
