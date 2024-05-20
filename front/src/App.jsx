import { useState } from 'react';
import { hospitales, pacientes } from '../hospitals.json';

function Home() {
  const [hospital, setHospital] = useState([]);
  const [paciente, setPaciente] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      setHospital();
      setPaciente();
      const fullHospital = hospitales.filter(
        (hospital) => hospital.codigo === formData.get('HospitalID'),
      );
      setHospital(fullHospital);

      const fullPaciente = pacientes.filter(
        (paciente) => paciente.hospital === formData.get('HospitalID'),
      );
      setPaciente(fullPaciente);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-10">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Bienbenido al COA Hospital Management System
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Aqui podras consultar de manera rapida y sencilla la informacion
              relacionada con el hospital de tu preferencia, solo ingresa el ID
              del hospital y listo (H001 - H020).
            </p>
            <div className="flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="w-4/6 flex flex-col justify-center items-center"
                action=""
              >
                <h3 className="mb-4 text-2xl font-semibold dark:text-white ">
                  Ingresa el ID del Hospital
                </h3>
                <div className="flex items-center justify-center w-40 rounded-full border border-gray-100 shadow dark:border-gray-600">
                  <input
                    className="h-10 w-full text-center decoration-none px-4 rounded-l-full bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-0 "
                    type="text"
                    name="HospitalID"
                    id="HospitalID"
                  />
                  <button className="h-9 w-9 rounded-full flex items-center justify-center text-secondary-900">
                    🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* tarjestas de informacio */}
            <div className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Pacientes {hospital[0]?.nombre}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Consulta la informacion de los pacientes del hospital.
              </p>
              <table className="min-w-full ">
                <thead className="dark:bg-gray-800">
                  <tr className="dark:bg-gray-800">
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Registro
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Sala
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Numero de cama
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Diagnostico
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paciente.map((paciente) => (
                    <tr className="dark:bg-gray-600">
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {paciente.nombre}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {paciente.numero_de_registro}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {paciente.sala}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {paciente.numero_de_cama}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {paciente.diagnosticos.map((diagnostico) => (
                          <p>{diagnostico.tipo}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {paciente.diagnosticos.map((diagnostico) => (
                          <p>{diagnostico.fecha}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Salas {hospital[0]?.nombre}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Consulta la informacion de las salas del hospital.
              </p>
              <table className="min-w-full ">
                <thead className="dark:bg-gray-800">
                  <tr className="dark:bg-gray-800">
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Codigo
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Cantidad de camas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hospital.map(() => (
                    <tr className="dark:bg-gray-600">
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.salas.map((sala) => (
                          <p>{sala.nombre}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.salas.map((sala) => (
                          <p>{sala.codigo}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.salas.map((sala) => (
                          <p>{sala.cantidad_de_camas}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Laboratorios {hospital[0]?.nombre}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Consulta la informacion de los Laboratorios del hospital.
              </p>
              <table className="min-w-full ">
                <thead className="dark:bg-gray-800">
                  <tr className="dark:bg-gray-800">
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Codigo
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Servicios
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      dirección
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      telefono
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hospital.map(() => (
                    <tr className="dark:bg-gray-600">
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.laboratorios.map((lab) => (
                          <p>{lab.nombre}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.laboratorios.map((lab) => (
                          <p>{lab.codigo}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.laboratorios[0].servicios.map((lab) => (
                          <p>{lab.descripcion}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.laboratorios.map((lab) => (
                          <p>{lab.direccion}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.laboratorios.map((lab) => (
                          <p>{lab.telefono}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Medicos {hospital[0]?.nombre}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Consulta la informacion de los Medicos del hospital.
              </p>
              <table className="min-w-full ">
                <thead className="dark:bg-gray-800">
                  <tr className="dark:bg-gray-800">
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Identificación
                    </th>
                    <th className="px-6 py-3 bg-gray-700 text-center text-xs leading-4 font-medium uppercase tracking-wider">
                      Especialidad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hospital.map(() => (
                    <tr className="dark:bg-gray-600">
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.medicos.map((med) => (
                          <p>{med.nombre}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.medicos.map((med) => (
                          <p>{med.cedula_de_identidad}</p>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-center">
                        {hospital[0]?.medicos.map((med) => (
                          <p>{med.especialidad}</p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Home;
