import { networkInterfaces } from "os";
import { GOOGLE_AUTH_INSTANCE } from "./Login";

const calendarId = "primary";
const taskListId = "primary";

const event = {
  summary: "Google I/O 2015",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: "2023-05-28T00:00:00+09:00",
    timeZone: "America/Los_Angeles",
  },
  end: {
    dateTime: "2023-05-28T23:59:59+09:00",
    timeZone: "America/Los_Angeles",
  },
};

// const startTime: string =  
// const endTime: string = startTime + (1000 * 60 * 60 * 12);

const task = {
  // title: "A test task that does not have a time constraint.",
  description: "Testing the description of an all-day event aka. task",
  start: {
    dateTime: "2023-02-30T09:00:00-15:00",
    timeZone: "America/Los_Angeles",
  },
  end: {
    dateTime: "2023-02-30T23:59:59-15:00",
    timeZone: "America/Los_Angeles"
  }
};

export async function getCalendarList() {
  try {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/users/me/calendarList",
      {
        headers: {
          Authorization: "Bearer " + GOOGLE_AUTH_INSTANCE.accessToken,
        },
      }
    );
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getTasksList() {
  try {
    const response = await fetch(
      "https://www.googleapis.com/tasks/v1/users/@me/lists",
      {
        headers: {
          Authorization: "Bearer " + GOOGLE_AUTH_INSTANCE.accessToken,
        },
      }
    );
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function insertEvent() {
  if (GOOGLE_AUTH_INSTANCE.isSignedIn) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + GOOGLE_AUTH_INSTANCE.accessToken,
          },
          body: JSON.stringify(event),
        }
      );
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

export async function insertTask() {
  if (GOOGLE_AUTH_INSTANCE.isSignedIn) {
    console.log("Bearer " + GOOGLE_AUTH_INSTANCE.accessToken, taskListId);
    try {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + GOOGLE_AUTH_INSTANCE.accessToken,
          },
          body: JSON.stringify(task),
        }
      );
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
