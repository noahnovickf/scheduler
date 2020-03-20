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
  let filteredDays = state.days.filter(currentDay => currentDay.name === day);
  if (filteredDays === [] || !day || filteredDays[0] === undefined) {
    return [];
  }

  const interviewer = [];

  for (let appointment of Object.values(state.appointments)) {
    if (
      appointment.interview &&
      !interviewer.includes(appointment.interview.interviewer)
    ) {
      interviewer.push(appointment.interview.interviewer);
    }
  }
  const newInterviewerArr = [];
  for (let id of interviewer) {
    if (id === state.interviewers[id].id) {
      newInterviewerArr.push(state.interviewers[id]);
    }
  }
  return newInterviewerArr;
}
