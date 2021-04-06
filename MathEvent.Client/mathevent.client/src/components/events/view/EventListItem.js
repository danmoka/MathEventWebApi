import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ListItem from "../../_common/ListItem";
import { selectEvent, fetchEvents } from "../../../store/actions/event";

const EventListItem = ({ event, isSelected, index }) => {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(selectEvent(event));

        if (event.hierarchy) {
            dispatch(fetchEvents(event));
        }

    }, [dispatch, event]);

    return (
        <ListItem
            primaryText={event.name}
            secondaryText={event.startDate}
            isSelected={isSelected}
            index={index}
            onClick={handleClick}
        />
    );
};

export default EventListItem;