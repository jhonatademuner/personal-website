"use client";

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface EducationCardProps {
  education: {
    title: string;
    institution: string;
    period: string;
    description: string;
    photo: StaticImageData;
  }
}

const EducationCard = ({education} : EducationCardProps) => {
  return (
    <div className="flex gap-4 w-full">
    <Image src={education.photo} width={64} height={64} alt="Company Logo" className="flex rounded-full w-16 h-16 object-cover border-2 border-background-700 p-1"/>
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center flex-wrap">
        <p className="md:text-xl text-lg font-bold">
          {education.title}
        </p>
        <p className="md:text-base text-sm font-semibold">{education.period}</p>
      </div>
      <span className="text-primary-200 text-base">{education.institution}</span>
      <p className="text-base text-text-200">{education.description}</p>
    </div>
  </div>
  )
}

export default EducationCard