import { useAppDispatch, useAppSelector } from "../redux/configure-store";
import { updateIsModalOpen } from "../redux/slices/common";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  id: string;
  heading: string;
  descripiton: string | React.ReactNode;
  children: JSX.Element;
};

export default function Modal({ heading, children, id, descripiton }: Props) {
  const dispatch = useAppDispatch();

  const SelectIsModelOpen = useAppSelector((state) => state.common.isModalOpen);

  function closeModal() {
    dispatch(updateIsModalOpen(false));
  }

  return (
    <>
      <Transition appear show={SelectIsModelOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto" id={id}>
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className=" flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div>{heading}</div>
                      <div className=" text-sm">{descripiton}</div>
                    </Dialog.Title>
                    <button
                      className="
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                    dark:focus:ring-offset-gray-800
                    dark:focus:ring-white
                    rounded-md
                    p-2
                    transition
                    duration-300
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    "
                      onClick={closeModal}
                    >
                      <IoCloseSharp />
                    </button>
                  </div>

                  <hr className="border-gray-800 dark:border-white my-2" />

                  <div className="mt-6">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
