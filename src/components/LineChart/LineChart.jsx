import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { "id": 1, "name": "Alice", "math": 78, "bangla": 85, "english": 90 },
        { "id": 2, "name": "Bob", "math": 85, "bangla": 88, "english": 87 },
        { "id": 3, "name": "Charlie", "math": 72, "bangla": 70, "english": 70 },
        { "id": 4, "name": "David", "math": 76, "bangla": 80, "english": 82 },
        { "id": 5, "name": "Eve", "math": 58, "bangla": 84, "english": 86 },
        { "id": 6, "name": "Frank", "math": 61, "bangla": 78, "english": 60 },
        { "id": 7, "name": "Grace", "math": 94, "bangla": 92, "english": 91 },
        { "id": 8, "name": "Henry", "math": 49, "bangla": 66, "english": 83 },
        { "id": 9, "name": "Ivy", "math": 90, "bangla": 89, "english": 88 },
        { "id": 10, "name": "Jack", "math": 86, "bangla": 52, "english": 85 }
    ];
    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='bangla' stroke='orange'></Line>
                <Line dataKey='english' stroke='blue'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;