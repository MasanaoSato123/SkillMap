import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import SkillFilter from './SkillFilter';
import SkillScatterPlot from './SkillScatterPlot';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <SkillFilter />  {/* SkillFilter �R���|�[�l���g��ǉ� */}
                <SkillScatterPlot />  {/* SkillScatterPlot �R���|�[�l���g��ǉ� */}
                <Container tag="main">
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
