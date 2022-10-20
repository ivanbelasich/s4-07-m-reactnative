import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import JobCardList from "./JobCardList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobsData } from "../../features/jobs/JobSlice";


const JobCardContainer = () => {
    const [loading, setLoading] = useState(true);
    const jobs = useSelector(state => state.jobs)
    const [dataOk, setDataOk] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get("https://s4-07-m-reactnative.herokuapp.com/api/jobcards")
            .then((response) => {
                dispatch(addJobsData(response.data))
                console.log(jobs,"esto es la data 2++++")
            })
            .finally(() => {
                
                setDataOk(true)
            })
            .catch((error) => {
                console.log(error);
            });

          
    }, []);



   /*  useEffect(() => {
            
            jobs.forEach((job, index) => {
                axios
                    .get(
                        `https://s4-07-m-reactnative.herokuapp.com/api/users/${job.userId}`
                    )
                    .then((response) => {
                        dispatch((jobs) => {
                            const newJobs = [...jobs];
                            newJobs[index].provincia = response.data.provincia;
                            newJobs[index].contratador = response.data.nombreCompleto;
                            newJobs[index].ciudad = response.data.ciudad;
                            return newJobs;
                        });
                        console.log(jobs);
                    })
                    .finally(() => {
                        if(index === jobs.length - 1){
                        setLoading(false);
                        }
                    })
                    .catch((error) => console.log(error));
            });
            
        
    }, [dataOk]);
 */
    if (loading) {
        return <ActivityIndicator size="large" color="purple" />;
    }
    return <JobCardList jobs={jobs}  />;
};

export default JobCardContainer;
