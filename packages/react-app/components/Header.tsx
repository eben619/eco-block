import { useSocialConnect } from "@/SocialConnect/useSocialConnect";
import SocialConnectUI from "@/components/SocialConnectUI";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import HomeContent from "@/tabs/HomeContent";
import SortingGuideContent from "@/tabs/SortingGuideContent";
import RequestPickup from "@/tabs/RequestPickup";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const [activeTab, setActiveTab] = useState("Home"); // Active tab state
  const { account, connected, lookupAddress } = useSocialConnect();

  const { data: session } = useSession();
  const { connect } = useConnect();

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect({ connector: injected({ target: "metaMask" }) });
    }
  }, [connect]);

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <div><HomeContent/></div>;
      case "Sorting Guide":
        return <div><SortingGuideContent/></div>;
      case "Request Pickup":
        return <div><RequestPickup/></div>;
      case "Dashboard":
        return <div>Dashboard Content</div>;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <>
      <SocialConnectUI
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
      <Disclosure as="nav" className="bg-slate-300 border-green-600">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-green-600 focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-green-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="px-2 self-center font-bold text-lg">
                    <p>
                      <span className="text-green-600">Eco</span>
                      <span className="">Block</span>
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      className="block h-14 w-auto sm:block lg:block"
                      src="/ecoblock.png"
                      width="24"
                      height="24"
                      alt=""
                    />
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-around">
                    {["Home", "Sorting Guide", "Request Pickup", "Dashboard"].map((tab) => (
                      <a
                        key={tab}
                        href="#"
                        onClick={() => setActiveTab(tab)}
                        className={`inline-flex items-center px-1 pt-1 text-gray-900 font-bold text-lg ${
                          activeTab === tab ? "border-b-2 border-green-600" : ""
                        }`}
                      >
                        {tab}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!hideConnectBtn && (
                    <ConnectButton
                      showBalance={{ smallScreen: true, largeScreen: false }}
                    />
                  )}
                </div>
                {connected && account && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-xl text-base px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600"
                    >
                      Social Connect
                    </button>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-4">
                {["Home", "Sorting Guide", "Request Pickup", "Dashboard"].map((tab) => (
                  <Disclosure.Button
                    key={tab}
                    as="a"
                    href="#"
                    onClick={() => setActiveTab(tab)}
                    className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium text-black ${
                      activeTab === tab ? "border-green-600" : "border-transparent"
                    }`}
                  >
                    {tab}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Render the content of the active tab */}
      <div className="p-4">{renderContent()}</div>
    </>
  );
}
