import "./YearUpdates.css";
const YearUpdates = () => {
  const updatesData = [
    {
      title: "Inbound – Lead Generation",
      description: "Leads | Location Ontario, Canada - HVAC",
      progress: 100,
    },
    {
      title: "Game-Changing Virtual Deals",
      description: "Pre Closed | Location Ontario, Canada - HVAC, Solar",
      progress: 75,
    },
    {
      title: "Highest Conversion – Money Making",
      description: "Hot Leads | Location United States - Solar",
      progress: 50,
    },
    {
      title: "Expanding – New Market",
      description: "Hot Leads | Location Quebec, Canada - HVAC",
      progress: 25,
    },
    {
      title: "Top Selling – Various Prices",
      description:
        'New Tier "A","B","C" Leads | Location Ontario, Canada - HVAC',
      progress: 60,
    },
  ];
  return (
    <div className="year-updates-container">
      <div className="year-updates-content">
        <h1 className="year-updates-header">2024 UPDATES</h1>
        <p className="year-updates-subheader">
          To increase our clients sales revenue and push their average workflow
          estimates, our company is developing.
        </p>
        <p className="year-updates-description">
          And will launch a wider variety of Lead-Gen models, Digital sales
          opportunities, & ultra targeted Telemarketing services in the near
          future. Here’s a sneak peek at what’s in the works.
        </p>
      </div>
      <div className="year-updates-list">
        {updatesData.map((update, index) => (
          <div key={index} className="year-update-item">
            <h2 className="year-update-title">{update.title}</h2>
            <p className="year-update-description">{update.description}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${update.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearUpdates;
