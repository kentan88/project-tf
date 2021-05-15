/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import {Fragment} from "react";
import {Link} from "react-router-dom"
import {BellIcon, MenuIcon, XIcon} from "@heroicons/react/outline";
import {Disclosure, Menu, Transition} from "@headlessui/react";

const navigation = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "VSM", path: "/vsm" }
]
const profile = ['Your Profile', 'Settings', 'Sign out']

const TopNavBar = () => {
  return (
    <Disclosure as="nav" tw="bg-gray-800">
      {({open}) => (
        <>
          <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div tw="flex items-center justify-between h-16">
              <div tw="flex items-center">
                <div tw="flex-shrink-0">
                  <img
                    tw="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div tw="hidden md:block">
                  <div tw="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      return (
                        <Link key={item.path} to={item.path} tw="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                          {item.name}
                        </Link>
                      )
                    })
                    }
                  </div>
                </div>
              </div>
              <div tw="hidden md:block">
                <div tw="ml-4 flex items-center md:ml-6">
                  <button
                    tw="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span tw="sr-only">View notifications</span>
                    <BellIcon tw="h-6 w-6" aria-hidden="true"/>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" tw="ml-3 relative">
                    {({open}) => (
                      <>
                        <div>
                          <Menu.Button
                            tw="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span tw="sr-only">Open user menu</span>
                            <img
                              tw="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            tw="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {profile.map((item) => (
                              <Menu.Item key={item}>
                                {({active}) => (
                                  <a
                                    href="#"
                                    tw='block px-4 py-2 text-sm text-gray-700'
                                  >
                                    {item}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              <div tw="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  tw="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span tw="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon tw="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <MenuIcon tw="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel tw="md:hidden">
            <div tw="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={item}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="#" tw="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                      {item}
                    </a>
                  </Fragment>
                ) : (
                  <a
                    key={item}
                    href="#"
                    tw="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div tw="pt-4 pb-3 border-t border-gray-700">
              <div tw="flex items-center px-5">
                <div tw="flex-shrink-0">
                  <img
                    tw="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div tw="ml-3">
                  <div tw="text-base font-medium leading-none text-white">Tom Cook</div>
                  <div tw="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
                <button
                  tw="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span tw="sr-only">View notifications</span>
                  <BellIcon tw="h-6 w-6" aria-hidden="true"/>
                </button>
              </div>
              <div tw="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <a
                    key={item}
                    href="#"
                    tw="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default TopNavBar
