import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import {collatedTasksExist} from '../helpers'
import moment from 'moment'

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "mtgZ6L8s8tfpLihLn5XZ");
    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, []);
};
