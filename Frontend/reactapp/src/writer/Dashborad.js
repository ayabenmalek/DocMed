import React from 'react'
import Navwriter from '../components/Navwriter'
import { BiBook } from 'react-icons/bi'
import { FaFileAlt } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { TEChart } from "tw-elements-react"

export default function Dashboard() {
  return (
    <div className="h-[1000] bg-neutral-50 p-4 sm:p-8">
      {/* Centered heading with bottom margin */}
      <div className="text-Left text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
        <h1>Resumer des activites</h1>
      </div>

      {/* Row with gaps between items, responsive layout */}
      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* Blogs Card */}
        <div className="bg-white rounded-sm p-3 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <BiBook className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Blogs au Total</span>
            <div className="flex items-center">
              <strong className="text-lg text-gray-700 font-semibold">$1234</strong>
              <span className="text-sm text-green-300 pl-2">+265</span>
            </div>
          </div>
        </div>

        {/* Theses Card */}
        <div className="bg-white rounded-sm p-3 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <FaFileAlt className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Theses au Total</span>
            <div className="flex items-center">
              <strong className="text-lg text-gray-700 font-semibold">$20.766</strong>
              <span className="text-sm text-red-300 pl-2">+730</span>
            </div>
          </div>
        </div>

        {/* Courses Card */}
        <div className="bg-white rounded-sm p-3 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <MdSchool className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Cours au Total</span>
            <div className="flex items-center">
              <strong className="text-lg text-gray-700 font-semibold">$30009</strong>
              <span className="text-sm text-green-300 pl-2">+300</span>
            </div>
          </div>
        </div>
      </div>

      {/* Render the table below the cards */}
      <div className="text-Left text-xl sm:text-2xl lg:text-2xl font-bold mt-10 mb-6 sm:mb-8">
        <h3>Tableau Comparatif des Ecrits</h3>
        <App />
      </div>
      
     
      <div className="text-Left text-xl sm:text-xl lg:text-2xl font-bold mt-10 mb-6 sm:mb-8">
        <h3>Section Graphiques</h3>
        <div className="flex flex-4 gap-4 overflow-y h-[500px]">
          <PieChart 
            title="Nombre des Écrits déposant 20 Livres" 
            data={[20, 80]} 
            backgroundColors={["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"]} 
            labels={["Déposés", "Autres"]} 
          />
          <PieChart 
            title="Nombre des Écrits avec 5 Commentaires" 
            data={[5, 95]} 
            backgroundColors={["rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)"]} 
            labels={["Avec Commentaires", "Sans"]} 
          />
          <PieChart 
            title="Nombre des Écrits inscrivant 10 Étudiants" 
            data={[10, 90]} 
            backgroundColors={["rgba(255, 205, 86, 0.5)", "rgba(201, 203, 207, 0.5)"]} 
            labels={["Inscrits", "Autres"]} 
          />
        </div>
      </div>
      
    </div>
  )
}

// Separate App component containing the table
function App() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead
                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-200 dark:bg-neutral-300">
                <tr>
                  <th scope="col" className=" px-6 py-4">Titre des Ecrits</th>
                  <th scope="col" className=" px-6 py-4">Type</th>
                  <th scope="col" className=" px-6 py-4">Inrolled</th>
                  <th scope="col" className=" px-6 py-4">Commentaires</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">CLOUD</td>
                  <td className="whitespace-nowrap  px-6 py-4">Informatique</td>
                  <td className="whitespace-nowrap  px-6 py-4">2345</td>
                  <td className="whitespace-nowrap  px-6 py-4">9000</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">BDD</td>
                  <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                  <td className="whitespace-nowrap  px-6 py-4">2001</td>
                  <td className="whitespace-nowrap  px-6 py-4">57892</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">Resaux</td>
                  <td className="whitespace-nowrap  px-6 py-4 ">Fat</td>
                  <td className="whitespace-nowrap  px-6 py-4">3333</td>
                  <td className="whitespace-nowrap  px-6 py-4">09876</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function PieChart({ title, data, backgroundColors, labels }) {
  return (
    <div className="w-full max-w-xs p-2 bg-white rounded-md shadow-md">
      <h4 className="text-center text-md font-semibold mb-2">{title}</h4>
      <TEChart
        type="pie"
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColors,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}