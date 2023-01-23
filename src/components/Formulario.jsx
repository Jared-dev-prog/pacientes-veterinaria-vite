import { useState, useEffect } from 'react'
import Alerta from './Alerta'

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [ nombre, setNombre ] = useState('')
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ fecha, setFecha ] = useState('')
  const [ sintomas, setSintomas ] = useState('')
  const [ alerta, setAlerta ] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length !== 0) {
      const { nombre, propietario, email, fecha, sintomas } = paciente
      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
    }
  }, [paciente])

  const generarId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    const fields = [ nombre, propietario, email, fecha, sintomas ]

    if(fields.includes('')) {
      console.log('Todos los campos son obligatorios')
      setAlerta(true)
      return
    }

    setAlerta(false)

    const datosPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas, 
    }

    if(paciente.id) {
      datosPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? datosPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      datosPaciente.id = generarId()
      setPacientes([...pacientes, datosPaciente])
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='sm:w-2/5'>
      <h1 className="text-lg text-center mt-5 font-extrabold leading-none tracking-tight text-gray-900 sm:text-xl dark:text-white">Seguimiento pacientes</h1>
      <p className="mt-2 text-center font-semibold">Añade pacientes y <span className="text-indigo-500">administralos</span></p>

      <form action="" className="mt-5 w-full border py-4 px-5 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        { alerta && <Alerta>Todos los campos son obligatorios.</Alerta>}
        <div>
          <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre mascota</label>
          <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre de la mascota"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          ></input>
        </div>

        <div className='mt-5'>
          <label htmlFor="propietario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre propietario</label>
          <input type="text" id="propietario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del propietario"
          value={propietario}
          onChange={e => setPropietario(e.target.value)}
          ></input>
        </div>

        <div className='mt-5'>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo eléctronico</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo de contacto"
          value={email}
          onChange={e => setEmail(e.target.value)}
          ></input>
        </div>

        <div className='mt-5'>
          <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alta</label>
          <input type="date" id="fecha" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={fecha}
          onChange={e => setFecha(e.target.value)}
          ></input>
        </div>     

        <div className='mt-5'>
          <label htmlFor="sintomas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Síntomas</label>
          <textarea id="sintomas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe los síntomas"
          onChange={e => setSintomas(e.target.value)}
          value={sintomas}
          ></textarea>
        </div>    

        <div className="sm:flex justify-end mt-5">
          <input type="submit" value={ paciente.id ? 'Guardar cambios' : 'Agregar paciente'} className="bg-blue-600 text-white text-sm rounded py-1 px-3 font-semibold cursor-pointer hover:bg-blue-700 transition-colors w-full sm:w-auto"/>
        </div>
      </form>
    </div>
  )
}
