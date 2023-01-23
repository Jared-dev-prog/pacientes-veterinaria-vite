import Paciente from "./Paciente"

export default function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <div className='sm:w-3/5'>

      { pacientes?.length !== 0 ? (
        <>
          <h1 className="text-lg text-center mt-5 font-extrabold leading-none tracking-tight text-gray-900 sm:text-xl dark:text-white">Listado pacientes</h1>
          <p className="mt-2 text-center font-semibold">Administra tus <span className="text-indigo-500">pacientes y citas</span></p>

          <div className="sm:h-screen overflow-y-scroll">
            {pacientes?.map( paciente => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ): (
        <>
          <h1 className="text-lg text-center mt-5 font-extrabold leading-none tracking-tight text-gray-900 sm:text-xl dark:text-white">No hay pacientes</h1>
          <p className="mt-2 text-center font-semibold">Agrega pacientes y se <span className="text-indigo-500">mostrarán en este apartado</span></p>      
        </>
      )}
    </div>
  )
}
