import "./styles/Career.css";

const projects = [
  {
    name: "Adecco – Enterprise HR & Staffing Integration",
    period: "Sep 2025 – Present",
    points: [
      "Architected 15+ IICS CAI workflows using Process Objects and Service Connectors, enabling real-time API-based data exchange across 8 enterprise HR systems for a Fortune 500 staffing client.",
      "Designed event-driven CAI integrations reducing data latency from overnight batch cycles to near real-time synchronization; automated 10+ business processes, cutting manual intervention by 30%.",
      "Implemented error-handling, retry logic, and audit logging achieving 99.9% uptime SLA; conducted end-to-end unit testing and SIT for all CAI integrations before production deployment.",
    ],
  },
  {
    name: "Kinaxis – Supply Chain Data Integration",
    period: "Apr 2024 – Aug 2025",
    points: [
      "Engineered 40+ IICS CDI mappings and taskflows processing 5M+ records per daily batch cycle from SQL Server, flat files, and cloud sources into the Kinaxis supply chain platform.",
      "Designed CDI transformations (Router, Joiner, Lookup, Expression, Aggregator) for data quality and KPI aggregation; automated SFTP via Shell scripting cutting delivery time by 40%.",
      "Managed full ETL lifecycle across DEV/SIT/PROD environments; utilized IICS Taskflows for scheduling ensuring 98% on-time batch delivery; resolved 50+ production incidents within SLA.",
    ],
  },
  {
    name: "Avnet – PowerCenter to IICS CDI Migration",
    period: "Feb 2023 – Mar 2024",
    points: [
      "Led migration of 200+ production ETL workflows from Informatica PowerCenter to IICS CDI, preserving 100% of business logic across 6 source systems (Salesforce, Oracle, SQL Server).",
      "Built complex IICS CDI mappings loading into Oracle data warehouse and flat files; implemented pushdown optimization (PDO) for 30+ mappings, reducing execution time by 35%.",
      "Achieved 60% faster migration velocity using RPA-assisted tooling; deployed all workflows via GitHub Actions CI/CD with zero-downtime; authored documentation reducing support effort by 50%.",
    ],
  },
  {
    name: "Capital Group – Data Warehousing & Analytics",
    period: "Sep 2021 – Feb 2023",
    points: [
      "Developed scalable ETL pipelines feeding an enterprise data warehouse; created 10+ Power BI dashboards and SSRS reports used by 100+ business users for investment management insights.",
      "Managed Power BI Service and SQL Server production deployments; trained 3 business teams accelerating self-service analytics adoption.",
    ],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Infosys Entry */}
          <div className="career-info-box career-info-box--expanded">
            <div className="career-info-left">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Infosys Ltd.</h5>
                <h5>Pune, India</h5>
              </div>
              <h3>2021–<br />Now</h3>
            </div>
            <div className="career-projects">
              {projects.map((project) => (
                <div className="career-project" key={project.name}>
                  <div className="career-project-header">
                    <span className="career-project-name">{project.name}</span>
                    <span className="career-project-period">{project.period}</span>
                  </div>
                  <ul className="career-project-points">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
