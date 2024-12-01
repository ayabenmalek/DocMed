import React from 'react'
import doc1 from '../photos/doctor3.jpg'
import doc2 from '../photos/doctor2.jpg'
import doc3 from '../photos/doctor4.jpg'
import value from '../photos/value3.jpg'
export default function About() {
  const doctors = [
    {
        name: 'Dr louis berber',
        speciality: 'Neurology',
        job: 'Chief Medical Officer',
        image : doc1
    },
    {
        name: 'Dr souad mohsen',
        speciality: 'Cardiology',
        job: 'CEO',
        image : doc2
    },
    {
        name: 'Dr lana del ray',
        speciality: 'Orthopedics',
        job: 'Lead Surgeon',
        image : doc3 
    },
]




return (
  <div className="bg-gray-100 text-gray-800 py-10 px-4 sm:px-16">
    {/* Hero Section */}
    <section className="text-center mb-10">
      <h1 className="text-4xl font-bold text-cbluef">About DocMed</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        At <span className="font-semibold text-cblue">DocMed</span>, our mission is to connect people with reliable healthcare solutions
        and provide accurate, trustworthy medical information at your fingertips.
      </p>
    </section>

    {/* Our Mission Section */}
    <section className="flex flex-col sm:flex-row items-center mb-10">
      <img
        src= {value}
        alt="Mission Illustration"
        className="w-full sm:w-1/2 rounded-lg mb-6 sm:mb-0 sm:mr-8"
      />
      <div>
        <h2 className="text-2xl font-bold text-cbluef mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          To provide accessible, reliable, and personalized healthcare services while empowering individuals with
          the knowledge they need to make informed medical decisions.
        </p>
      </div>
    </section>

    {/* Our Team Section */}
    <section className="text-center mb-10">
    <h2 className="text-3xl font-bold text-center mb-8">Meet Our Doctors</h2>
  <div className="flex flex-wrap justify-around gap-6">
    {doctors.map((doctor, index) => (
      <div key={index} className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{doctor.speciality}</p>
          <p className="text-sm text-gray-500 mt-1">{doctor.job}</p> 

        </div>
      </div>
    ))}
  </div>
    </section>

    {/* Values Section */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-cbluef mb-6 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold text-cblue">Integrity</h3>
          <p className="text-gray-600">We uphold the highest ethical standards and prioritize trust.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold text-cblue">Compassion</h3>
          <p className="text-gray-600">We provide care with empathy and respect for all.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold text-cblue">Innovation</h3>
          <p className="text-gray-600">We harness technology to enhance healthcare solutions.</p>
        </div>
      </div>
    </section>

  </div>
);

}
