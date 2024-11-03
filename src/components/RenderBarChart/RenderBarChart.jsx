import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const RenderBarChart = () => {
    const markDataType =[
        { "id": 50000, "name": "Alice", "science": 84, "history": 79, "geography": 92 },
        { "id": 60000, "name": "Bob", "science": 90, "history": 88, "geography": 85 },
        { "id": 70000, "name": "Charlie", "science": 78, "history": 91, "geography": 87 },
        { "id": 80000, "name": "David", "science": 85, "history": 76, "geography": 80 },
        { "id": 90000, "name": "Eve", "science": 92, "history": 83, "geography": 89 },
        { "id": 90000, "name": "Frank", "science": 74, "history": 80, "geography": 78 },
        { "id": 80000, "name": "Grace", "science": 88, "history": 89, "geography": 93 },
        { "id": 60000, "name": "Henry", "science": 81, "history": 85, "geography": 82 },
        { "id": 5000, "name": "Ivy", "science": 86, "history": 87, "geography": 84 },
        { "id": 100000, "name": "Jack", "science": 90, "history": 92, "geography": 91 }
      ]
    return (
        <div>
            <BarChart width={150} height={80} data={markDataType}>
                 <Bar dataKey="id" fill='#8884d8'>

                 </Bar>
            </BarChart>
        </div>
    );
};

export default RenderBarChart;