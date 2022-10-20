import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import JobCardList from "./JobCardList";
import axios from "axios";
import { useEffect, useState } from "react";

const JobCardContainer = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [dataOk, setDataOk] = useState(false);

  useEffect(() => {
    axios
      .get("https://s4-07-m-reactnative.herokuapp.com/api/jobcards")
      .then((response) => {
        setJobs(response.data);
      })
      .finally(() => {
        setDataOk(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    jobs.forEach((job, index) => {
      axios
        .get(
          `https://s4-07-m-reactnative.herokuapp.com/api/users/${job.userId}`
        )
        .then((response) => {
          setJobs((jobs) => {
            const newJobs = [...jobs];
            newJobs[index].provincia = response.data.provincia;
            newJobs[index].contratador = response.data.nombreCompleto;
            newJobs[index].ciudad = response.data.ciudad;
            return newJobs;
          });
          console.log(jobs);
        })
        .finally(() => {
          if (index === jobs.length - 1) {
            setLoading(false);
          }
        })
        .catch((error) => console.log(error));
    });
  }, [dataOk]);

  if (loading) {
    return (
      <View className="flex h-full m-auto justify-center">
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }
  return <JobCardList jobs={jobs} />;
};

export default JobCardContainer;
