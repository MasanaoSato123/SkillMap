import React, { Component } from 'react';
import SkillFilter from './SkillFilter';
import SkillScatterPlot from './SkillScatterPlot';

// モックデータ
const mockData = [
    { skill: 'Skill1', level: 5 },
    { skill: 'Skill2', level: 3 },
    // 他のスキルデータ
];

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSkill: 'all', // 選択されたスキル
            filteredData: mockData, // フィルタリングされたデータ
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
                {/* その他のコンテンツ */}
            </div>
        );
    }
}
