import { useState } from "react";

export const BtnOlvidarContra = () => {
  const [showModal, setShowModal] = useState(false);
  return (
      <>
          <div className="Contra ">
              <a
                  className="btnContra rounded-md"
                  type="button"
                  onClick={() => setShowModal(true)}
              >
                  ¿Olvidó su contraseña?
              </a>
          </div>
          {showModal ? (
              <>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                          className="fixed inset-0 w-full h-full bg-black opacity-40"
                          onClick={() => setShowModal(false)}
                      ></div>
                      <div className="flex items-center min-h-screen px-4 py-8">
                          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                      <h4 className="text-lg font-medium text-gray-800">
                                          Contraseña olvidada
                                      </h4>
                                      <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                    Si ha olvidado la contraseña o el correo por favor acercarse al administrador para resolver esta situación.
                                      </p>
                                      {/*Botones*/}
                                      <div className="items-center gap-2 mt-3 sm:flex">
                                          <button
                                              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                              onClick={() =>
                                                  setShowModal(false)
                                              }
                                          >
                                              Aceptar
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
              </>
          ) : null}
      </>
  );
};
