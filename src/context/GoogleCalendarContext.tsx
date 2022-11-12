import { GoogleCalendarContextInterface } from "@/types";
import React, { useState } from "react";

export const GoogleCalendarContext = React.createContext<GoogleCalendarContextInterface | null>(null);

interface Props {
    children: React.ReactNode;
}

const GoogleCalendarContextProvider: React.FC<Props> = ({children}) => {
  React.useEffect(() => {
    const fetchCalendarEventData = async () => {
      try {
        const res = await fetch("https://content.googleapis.com/calendar/v3/calendars/bowling.ship%40gmail.com/events?key=AIzaSyD6o2WHQV2nX1AnAwJcAqHhgcMxbT0po6s");
        const stuff = await res.json();
        console.log(stuff);
      } catch (err) {
        throw new Error(err as string);
      }
    };

    fetchCalendarEventData();
  }, []);

  return <GoogleCalendarContext.Provider value={{}}>{children}</GoogleCalendarContext.Provider>
}

export default GoogleCalendarContextProvider;






