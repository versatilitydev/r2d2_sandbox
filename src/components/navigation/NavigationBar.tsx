import { useState, useCallback, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import MainHeader from "../general/Header";
import { ProfilePhoto } from "../../settings/constants";
import NavigationLinks from "./NavigationLinks";

const NavBar = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("selectedOption") || "Dashboard"
  );

  const [navigation, setNavigation] = useState([
    { name: "Dashboard", href: "Dashboard", current: true },
    { name: "Components", href: "Components", current: false },
    { name: "Sandbox", href: "Sandbox", current: false },
    { name: "Sandbox2", href: "Sandbox2", current: false },
    { name: "Sandbox3", href: "Sandbox3", current: false },
    { name: "Sandbox4", href: "Sandbox4", current: false },
  ]);

  const updateNavigationCurrent = useCallback(
    (
      option: string,
      navigationData: { name: string; href: string; current: boolean }[]
    ) => {
      return navigationData.map(
        (item: { name: string; href: string; current: boolean }) => ({
          ...item,
          current: item.name === option,
        })
      );
    },
    []
  );

  useEffect(() => {
    const option = location.pathname.slice(1);

    const updatedNavigation = updateNavigationCurrent(
      option.split("/")[0],
      navigation
    );

    setNavigation(updatedNavigation);

    setSelectedOption(option.split("/")[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, updateNavigationCurrent]);

  const handleOptionClick = useCallback(
    (option: string) => {
      const updatedNavigation = updateNavigationCurrent(option, navigation);
      setSelectedOption(option);
      setNavigation(updatedNavigation);
      localStorage.setItem("selectedOption", option);
    },
    [updateNavigationCurrent, navigation]
  );

  return (
    <>
      <div className="bg-gray-100 w-screen">
        <Disclosure as="nav" className="bg-gray-900 mx-auto">
          {({ open }) => (
            <>
              <div className="mx-auto h-40 max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-40 items-center justify-center mx-auto">
                  <div className="flex items-center ju">
                    <Logo />
                    <NavigationLinks
                      roleBasedNavigation={navigation}
                      handleOptionClick={handleOptionClick}
                    />
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={ProfilePhoto}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white"></div>
                      <div className="text-sm font-medium leading-none text-gray-400"></div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <MainHeader selectedOption={selectedOption} />
      </div>
    </>
  );
};

export default NavBar;
