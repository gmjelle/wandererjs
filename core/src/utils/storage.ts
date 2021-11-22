import { Step, Theme } from "../@types";
import { warn } from "./logger";

const STORAGE_KEY = "ACTIVE_TRIP";

type StoredTrip = {
  steps: Step[];
  theme: Theme;
  currentIndex: number;
};

export function storeTrip(trip: StoredTrip) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trip));
}

export function updateIndex(newIndex: number) {
  try {
    const trip: StoredTrip = JSON.parse(localStorage.getItem(STORAGE_KEY));
    trip.currentIndex = newIndex;
    storeTrip(trip);
  } catch (err) {
    warn(err);
  }
}

export function retrieveTrip(): StoredTrip {
  try {
    const trip: StoredTrip = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return trip;
  } catch (err) {
    warn(err);
  }
}

export function removeTrip() {
  localStorage.removeItem(STORAGE_KEY);
}
