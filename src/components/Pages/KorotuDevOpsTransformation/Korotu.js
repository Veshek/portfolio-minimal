import React from "react";
import "./Korotu.css";

const Korotu = () => (
    <div className="Korotu">
        <h1 className="Korotu-Title">Startup DevOps Transformation</h1>
        <p className="Korotu-TitleSummary">
            Initiated the transition to a cloud development environment for the
            software team at Korotu-Technology
        </p>
        <div className="Korotu-TitleImage"/>

        <h2 className="Korotu-ProblemTitle">The Problem</h2>
        <p className="Korotu-ProblemSummary">
            During my co-op at Korotu, the conda environments used could not be perfectly cloned across different OS systems.
            This would cause particular calculations to fail on some OS systems and succeed on others, making debugging
            very difficult.
        </p>
        <div className="Korotu-ProblemImage"/>
        <div id="Korotu-Consequences">
            <h2 className="Korotu-Consequences">Consequences</h2>
            <p className="Korotu-Consequences">
                Large lead times for new features and bug fixes
                Environment conflicts made setup times for new developers needlessly long and taxing
            </p>
            <div className="Korotu-ConsequencesDiagram"/>
        </div>

        <div className="Korotu-SolutionsTitle">
        <h2>Cloud Transition</h2>
        </div>
        <p className="Korotu-SolutionsText">
            I suggested the transition to Azure Servers for development purposes, and recommended dropping further
            development on Windows and MacOS to simplify the development process
        </p>

        <div className="Korotu-SolutionImages">
            <div className="Korotu-DevCard">
                <h3 className="Korotu-DevCardTitle">Local Development (Old)</h3>
                <div className="Korotu-LocalDevImage"/>
                <p> Developers write code on their local machines, and changes are pushed to the cloud </p>
            </div>

            <div className="Korotu-DevCard">
                <h3 className="Korotu-DevCardTitle">Cloud Development (New) </h3>
                <div className="Korotu-CloudDevImage"/>
                <p style={{marginBottom:"1rem"}}> Each Developer SSHs into Identical Linux Servers, development happens on these servers</p>
            </div>
        </div>

        <div className="Korotu-Outcomes">
            <h2 className="Korotu-OutcomesTitle">Benefits</h2>
            <ul className="Korotu-OutcomesList">
                <li className="Korotu-OutcomesItem btn btn--plain">Focused Development on one OS</li>
                <li className="Korotu-OutcomesItem btn btn--plain">Cross compatibility errors mitigated</li>
                <li className="Korotu-OutcomesItem btn btn--plain">Leveraging flexible virtual infrastructure</li>
                <li className="Korotu-OutcomesItem btn btn--plain">Server cloning to reduce setup time</li>
                <li className="Korotu-OutcomesItem btn btn--plain">Dynamic Compute Power with Azure</li>
            </ul>
            <div className="Korotu-OutcomesImage"/>
        </div>

    </div>
);

export default Korotu