import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import SkillDetail from './components/skillDetail/index';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Link to="/skillDetail">SkillDetail</Link>
                <Layout>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}
                        <Route path="/skillDetail" element={<SkillDetail />} />
                    </Routes>
                </Layout>
            </div>
        );
    }
}
