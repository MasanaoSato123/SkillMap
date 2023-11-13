import React from 'react';

const SkillFilter = ({ onFilterChange }) => {
    return (
        <div>
            <label htmlFor="skillSelect">スキルを選択: </label>
            <select id="skillSelect" onChange={onFilterChange}>
                <option value="all">全て</option>
                <option value="skill1">スキル1</option>
                <option value="skill2">スキル2</option>
            </select>
        </div>
    );
};

export default SkillFilter;
