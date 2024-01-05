/*
* export type EventSeason = {
  id: string;
  type: SeasonalType;
  durationDays: number;
  theme: string;
  serviceYear: number;
  seasonYears: string;
  durationText: string;
};

export type SeasonalEvent = {
  id: string;
  seasonalType: SeasonalType;
  startDate: string;
  eventLanguage: string;
  event_season: {
    serviceYear: number;
    seasonYears: string;
    type: SeasonalType;
    theme: string;
  };
};
*/

export function getEventsAndSeasons() {
    const seasons = [
        {
            id: "1",
            type: "REG",
            durationDays: 3,
            theme: "REG-Theme",
            serviceYear: 2024,
            seasonYears: "1",
            durationText: "3 days",
        },
    ]; 
    
    
    
    const events = [
        {
            id: "1",
            seasonalType: "REG",
            startDate: "20240101",
            eventLanguage: "EN",
            event_season: {
                serviceYear: 2024,
                seasonYears: "1",
                type: "REG",
                theme: "REG-Theme",
            }
        },
        {
            id: "2",
            seasonalType: "REG",
            startDate: "20240105",
            eventLanguage: "EN",
            event_season: {
                serviceYear: 2024,
                seasonYears: "1",
                type: "REG",
                theme: "REG-Theme",
            }
        },
        {
            id: "3",
            seasonalType: "REG",
            startDate: "20240106",
            eventLanguage: "EN",
            event_season: {
                serviceYear: 2024,
                seasonYears: "1",
                type: "REG",
                theme: "REG-Theme",
            }
        }
    ];

    return [seasons, events];
}

export default {getEventsAndSeasons};