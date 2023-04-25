import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import Modal from 'react-modal';

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
    }
];

Modal.setAppElement('#root');

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
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
        setModalIsOpen(true);
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
        setModalIsOpen(false);
    };

    return (
        <div>
            <h2>社員一覧</h2>
            <ul>
                {employeeData.map((employee) => (
                    <li key={employee.id} onClick={() => handleSelectEmployee(employee)}>
                        {employee.name}
                    </li>
                ))}
            </ul>
            {selectedEmployee && (
                <Modal isOpen={modalIsOpen} onRequestClose={handleClosePopup}>
                    <div className="popup">
                        <div className="popup-content">
                            <h3>{selectedEmployee.name}</h3>
                            <p>年齢：{selectedEmployee.age}</p>
                            <p>部署：{selectedEmployee.department}</p>
                            <button onClick={handleClosePopup}>閉じる</button>
                            <div>
                                <ApexCharts options={chartOptions} series={chartSeries} type="radar" height={350} />
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};


export { Home };
