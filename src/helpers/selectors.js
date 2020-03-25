// import InterviewerList from "components/InterviewerList";

export function getAppointmentsForDay(state, day) {
  let filteredDays = state.days.filter(currentDay => currentDay.name === day);
  if (filteredDays === [] || !day || filteredDays[0] === undefined) {
    return [];
  }
  const appointments = filteredDays[0].appointments;

  const result = [];

  for (let appointment of Object.values(state.appointments)) {
    if (appointments.includes(appointment.id)) {
      result.push(appointment);
    }
  }
  return result;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  let id = interview.interviewer;
  let interviewerObj = state.interviewers[id];
  let obj = { student: interview.student, interviewer: interviewerObj };
  return obj;
}

export function getInterviewersForDay(state, day) {
  const currentDay = state.days.find(stateDay => day === stateDay.name);
  if (!currentDay || currentDay.interviewers.length === 0) {
    return [];
  }
  const foundInterviewers = currentDay.interviewers.map(interviewer => {
    return state.interviewers[interviewer];
  });
  return foundInterviewers;
}
