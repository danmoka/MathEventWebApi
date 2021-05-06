import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import {
    navigateToEventsStatistics,
    navigateToOrganizationsStatistics
} from "../../utils/navigator";
import routes from "../../utils/routes";
import TabPanel from "../_common/TabPanel";
import "./Statistics.scss";
import EventStatisticsPanel from "./event/EventStatisticsPanel";
import OrganizationStatisticsPanel from "./organization/OrganizationStatisticsPanel";

const tabRoutes = [
    routes.statistics.event,
    routes.statistics.organization
];

const tabs = [
    { label: "События", onClick: () => navigateToEventsStatistics() },
    { label: "Организации", onClick: () => navigateToOrganizationsStatistics() }
];

const Statistics = () => {
    const currentRoute = useSelector((state) => state.router.location.pathname);

    return (
        <div className="statistics">
            <div className="statistics__tabs">
                <TabPanel tabs={tabs} value={tabRoutes.indexOf(currentRoute)}/>
            </div>
            <div className="statistics__content">
            <Route
                path={routes.statistics.event}
                component={EventStatisticsPanel}
            />
            <Route
                path={routes.statistics.organization}
                component={OrganizationStatisticsPanel}
            />
            </div>
        </div>
    );
};

export default Statistics;