import React from 'react'
import Features from '../components/Features';
import InfoSection from '../components/InfoSection'
import { InfoDataTwo } from '../data/InfoData';

const PrettyPerks = () => {
    return (
    <>

<Features/>
<InfoSection {...InfoDataTwo} />

    </>

    )};


export default PrettyPerks
