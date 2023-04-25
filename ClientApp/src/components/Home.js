import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import './styles.css';

const employeeData = [
    {
        id: 1,
        name: '山田太郎',
        age: 30,
        department: '営業',
        skills: { java: 3, 'C#': 5, PHP: 2, クラウド: 1, DB: 5 }
    },
    {
        id: 2,
        name: '鈴木次郎',
        age: 25,
        department: '総務',
        skills: { java: 1, 'C#': 3, PHP: 4, クラウド: 4, DB: 2 }
    },
    {
        id: 3,
        name: '佐藤正直',
        age: 24,
        department: '技術',
        skills: { java: 2, 'C#': 4, PHP: 5, クラウド: 5, DB: 2 }
    },
    {
        id: 4,
        name: '田中花子',
        age: 28,
        department: '技術',
        skills: { java: 5, 'C#': 5, PHP: 1, クラウド: 0, DB: 0 }
    },
    {
        id: 5,
        name: '山本健太',
        age: 27,
        department: '技術',
        skills: { java: 4, 'C#': 3, PHP: 2, クラウド: 3, DB: 1 }
    },
    {
        id: 6,
        name: '伊藤文子',
        age: 33,
        department: '営業',
        skills: { java: 2, 'C#': 1, PHP: 5, クラウド: 1, DB: 3 }
    },
    {
        id: 7,
        name: '高橋太一',
        age: 31,
        department: '総務',
        skills: { java: 3, 'C#': 4, PHP: 3, クラウド: 2, DB: 4 }
    },
    {
        id: 8,
        name: '岡田美香',
        age: 26,
        department: '技術',
        skills: { java: 4, 'C#': 2, PHP: 4, クラウド: 3, DB: 1 }
    },
    {
        id: 9,
        name: '渡辺拓郎',
        age: 29,
        department: '営業',
        skills: { java: 1, 'C#': 2, PHP: 3, クラウド: 5, DB: 3 }
    },
    {
        id: 10,
        name: '中村恵子',
        age: 23,
        department: '総務',
        skills: { java: 5, 'C#': 1, PHP: 2, クラウド: 1, DB: 2 }
    },
];

const Home = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'radar',
        },
        xaxis: {
            categories: ['Java', 'C#', 'PHP', 'クラウド', 'DB'],
        },
        yaxis: {
            min: 0,
            max: 5,
            tickAmount: 5,
        },
    });
    const [chartSeries, setChartSeries] = useState([]);

    const handleSelectEmployee = (employee) => {
        const newChartSeries = [
            {
                name: '5:得意~0:不得意',
                data: Object.values(employee.skills),
            },
        ];
        const newChartOptions = {
            ...chartOptions,
            xaxis: {
                categories: ['Java', 'C#', 'PHP', 'クラウド', 'DB'],
            },
            yaxis: {
                min: 0,
                max: 5,
                tickAmount: 5,
            },
        };

        setSelectedEmployee(employee);
        setChartSeries(newChartSeries);
        setChartOptions(newChartOptions);
    };

    const handleClosePopup = () => {
        setSelectedEmployee(null);
        setChartSeries([]);
        setChartOptions({
            chart: {
                type: 'radar',
            },
            xaxis: {
                categories: ['Java', 'C#', 'PHP', 'クラウド', 'DB'],
            },
            yaxis: {
                min: 0,
                max: 5,
                tickAmount: 5,
            },
        });
    };

    const employeesByDepartment = employeeData.reduce((acc, employee) => {
        if (!acc[employee.department]) {
            acc[employee.department] = [employee];
        } else {
            acc[employee.department].push(employee);
        }
        return acc;
    }, {});


    return (
        <div>
            <h2>社員一覧</h2>
            <div style={{ display: 'flex' }}>
                {Object.keys(employeesByDepartment).map((department) => (
                    <div key={department} style={{ padding: '0 10px' }}>
                        <h2>{department}</h2>
                        <ul>
                            {employeesByDepartment[department].map((employee) => (
                                <li key={employee.id} onClick={() => handleSelectEmployee(employee)}>
                                    {employee.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {selectedEmployee && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>{selectedEmployee.name}</h3>
                            <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" alt="社員の写真"></img>
                            <p>年齢：{selectedEmployee.age}</p>
                            <p>部署：{selectedEmployee.department}</p>
                            <button onClick={handleClosePopup}>閉じる</button>
                            <div>
                                <ApexCharts options={chartOptions} series={chartSeries} type="radar" height={350} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};


export { Home };
