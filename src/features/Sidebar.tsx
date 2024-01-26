import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../redux/configure-store";
import { updateIsSidebarOpen } from "../redux/slices/common";

type Props = {
  id: string;
  heading: string;
  descripiton: string | React.ReactNode;
  children: JSX.Element;
};

export default function Sidebar({
  heading,
  children,
  id,
  descripiton,
}: Props) {
  const dispatch = useAppDispatch()
  const SelectIsSidebarOpen = useAppSelector(
    (state) => state.common.isSidebarOpen
  );
  return (
    <div
      className={`w-full flex justify-center text-black `}
    >
      <Transition.Root show={SelectIsSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            dispatch(updateIsSidebarOpen(false))

          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-screen-3xl pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-3xl">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                    </Transition.Child>

                    <div
                      className="flex h-full flex-col overflow-y-scroll bg-white py-4 shadow-xl"
                      id={id}
                    >
                      <div className="px-4 sm:px-6">
                        <div className=" w-full">


                          <div className=" mb-4">
                            <div className="flex justify-between items-center">

                              <Dialog.Title className="text-lg md:text-2xl font-bold text-gray-900 w-full ">
                                {heading}
                              </Dialog.Title>


                              <button type="button"

                                id="close-sidebar"
                                onClick={() => {
                                  dispatch(updateIsSidebarOpen(false))
                                }}
                                className="py-3 px-4 flex justify-center items-center h-[2.875rem] w-[2.875rem] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                X
                              </button>
                            </div>

                            {descripiton && (
                              <Dialog.Description className=" text-gray-500 ml-2  text-sm w-full">
                                {descripiton}
                              </Dialog.Description>
                            )}
                          </div>

                        </div>
                      </div>
                      <div className="relative mt-3 flex-1 px-4 sm:px-6">
                        <div className="absolute inset-0 px-4 pb-3 sm:px-6">
                          {children}
                        </div>
                      </div>
                    </div>


                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
