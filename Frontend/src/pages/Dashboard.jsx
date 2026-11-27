import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SystemBanner from '../components/SystemBanner';
import IssueCard from '../components/IssueCard';
import './Dashboard.css';

const Dashboard=() =>{

    const issues = [
        {
            id: 1,
            title: 'Road Damage',
            location: 'Coimbatore',
            category: 'Road',
            priority: 'High',
            status: 'Pending'
        },
        {
            id: 2,
            title: 'Water Leakage',
            location: 'Gudalur',
            category: 'Water Supply',
            priority: 'Medium',
            status: 'In Progress'
        },
        {
            id: 3,
            title: 'Street Light Failure',
            location: 'Ooty',
            category: 'Electricity',
            priority: 'Low',
            status: 'Resolved'
        },
         {
            id: 4,
            title: 'Insufficient Water-Supply',
            location: 'Chennai',
            category: 'Water Supply',
            priority: 'High',
            status: 'Pending'
        }
    ];

    return (
        <div className="dashboard">

        <Navbar />

       <div className="dashboard-layout">

        <Sidebar />

        <main className="dashboard-main">
    <div className="dashboard-heading">
     <h1>Dashboard</h1>
     <p>Public Infrastructure Issue Overview</p>
    </div>

       <SystemBanner />

    

    <div className="stats-container">

     <div className="stat-card">
     <h3>Total Issues</h3>
     <h2>125</h2>
    </div>

    <div className="stat-card">
    <h3>Pending Issues</h3>
     <h2>45</h2>
     </div>

    <div className="stat-card">
     <h3>In Progress</h3>
    <h2>30</h2>
    </div>
 <div className="stat-card">
<h3>Resolved Issues</h3>
 <h2>50</h2>
</div>

</div>

<h2 className="section-title">
Recent Infrastructure Issues
</h2>

<div className="issues-container">

{issues.map((issue) => (
<IssueCard
   key={issue.id}
       title={issue.title}
        location={issue.location}
        category={issue.category}
        priority={issue.priority}
        status={issue.status}
        />
        ))}

     </div>

    </main>

    </div>
    </div>
            );
}

export default Dashboard;