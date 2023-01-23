import React from 'react'

export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const confirmar = confirm('¿Deseas eliminar este paciente?')
    if(confirmar) {
      eliminarPaciente(id)
    }
  }

  return (
      <div className="mt-5 w-full border py-4 px-5 rounded shadow-lg">
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre: <span className='font-light text-gray-500 dark:text-gray-400'>{ nombre }</span></p>

          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Propietario: <span className='font-light text-gray-500 dark:text-gray-400'>{ propietario }</span></p>

          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: <span className="font-light text-gray-500 dark:text-gray-400'">{ email }</span></p>

          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha alta: <span className="font-light text-gray-500 dark:text-gray-400'">{ fecha }</span></p>

          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-justify">Síntomas: <span className='font-light text-gray-500 dark:text-gray-400'>{ sintomas }</span></p>

          <div className='sm:flex justify-end mt-3'>
            <div className='flex gap-5'>
              <button className="bg-blue-600 text-white text-sm rounded py-1 px-6 font-semibold cursor-pointer hover:bg-blue-700 transition-colors w-full sm:w-auto"
              onClick={() => setPaciente(paciente)}
              >Editar</button>
              <button className="bg-red-600 text-white text-sm rounded py-1 px-6 font-semibold cursor-pointer hover:bg-red-700 transition-colors w-full sm:w-auto"
              onClick={handleEliminar}
              >Eliminar</button>
            </div>
          </div>
        </div>
      </div>
  )
}
