import React from "react";
import "./US-Visa-Rescheduler.css";

const USVisaRescheduler = () => (
    <div className="Rescheduler">
        <h1 className="USVisaRescheduler-Title">US B2 Visa Rescheduler</h1>
        <p className="USVisaRescheduler-Titlesummary">
            Wait times for a Non-Immigrant US Visa appointment are incredibly long. The
            Re - Scheduler attempts to automatically reschedule the appointment to an earlier time
        </p>
        <div className="USVisaRescheduler-TitleImage"/>

        <h2 className="USVisaRescheduler-Selenium">Selenium</h2>
        <div className="USVisaRescheduler-SeleniumLogo"/>
        <p className="USVisaRescheduler-SeleniumText">
            The process of rescheduling normally involves manually checking the embassy website and hoping that an
            earlier
            slot is open at the time of checking. Using selenium, the entire process can be automated.
        </p>
        <div id="Polling">
            <h2 className="USVisaRescheduler-Polling">Polling</h2>
            <p className="USVisaRescheduler-PollingText">
                The scheduler polls the website and checks for open slots in fixed time intervals
            </p>
            <div className="USVisaRescheduler-PollingDiagram"/>
        </div>

        <h2 className="USVisaRescheduler-Webscraping">Web Scraping</h2>
        <p className="USVisaRescheduler-WebscrapingText">
            Using selenium, we can interact with HTML elements and collect data from the page by identifying the
            corresponding x path or css selectors
            <br/>
            The required buttons are identified using Dev Tools on a browser
        </p>

        <div className="WebScraping-Images">
            <div className= "WebScraping-Image Webscraping-DevToolsLogo"/>
            <div className= "WebScraping-Image Webscraping-HtmlLogo"/>
        </div>

        <div id="DataProcessing">
            <h2 className="USVisaRescheduler-DataProcessing">Data Processing</h2>
            <p className="USVisaRescheduler-DataProcessingText">
                The following flow chart describes the flow of logic used to dictate how the scraper interacts with the
                website
            </p>
            <div className="USVisaRescheduler-DataProcessingImage"/>
        </div>

        <h2 className="USVisaRescheduler-FutureImprovements">Future Improvements</h2>
        <p className="USVisaRescheduler-FutureImprovementsText">
            The polling technique is better than manual checking, however it does not guarantee that a slot will be booked.
            <br/>
            A better approach would be to use an observer pattern and trigger the bot when a slot opens up on the website.
        </p>
        <div className="USVisaRescheduler-FutureImprovementsDiagram"/>
    </div>
);

export default USVisaRescheduler