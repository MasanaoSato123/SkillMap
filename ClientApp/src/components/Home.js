import React, { Component } from 'react';
import SkillFilter from './SkillFilter';
import SkillScatterPlot from './SkillScatterPlot';

const mockData = [
    { skill: 'skill1', level: 5,  },
    { skill: 'skill2', level: 3 },
];

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSkill: 'all',
            filteredData: mockData,
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
            </div>
        );
    }
}
