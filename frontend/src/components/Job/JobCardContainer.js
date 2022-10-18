import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import JobCardList from './JobCardList'
import axios from 'axios'
import { useEffect, useState } from 'react'


const JobCardContainer = () => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    useEffect(()=> {
        axios.get('https://s4-07-m-reactnative.herokuapp.com/api/jobcards')
        .then((response)=> {
            setJobs(response.data)
        })
        .finally(()=> {
            setLoading(false)
        })
        .catch((error)=> {
            console.log(error)
        })

    },[])

    if (loading) {
        return <ActivityIndicator size="large" color="purple" />
    }
  return (
   <JobCardList jobs = {jobs}/>
  )
}

export default JobCardContainer