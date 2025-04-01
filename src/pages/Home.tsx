import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/animations/PageTransition';
import { ValueProposition } from '../components/ValueProposition';
import { JobSeekerFeatures } from '../components/JobSeekerFeatures';
import { EmployerFeatures } from '../components/EmployerFeatures';
import { CallToAction } from '../components/CallToAction';
export function Home() {
  return <PageTransition>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <ValueProposition />
        <JobSeekerFeatures />
        <EmployerFeatures />
        <CallToAction />
      </motion.div>
    </PageTransition>;
}