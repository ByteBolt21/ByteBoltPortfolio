import { Fragment, useState, useRef, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Button from './Button';

const services = [
    { name: 'PRICING PLAN', href: '#' },
    { name: 'APPOINTMENT', href: '#' },
];

const pages = [
    { name: 'ABOUT US', href: '#' },
    { name: 'TEAM', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'BLOG', href: '#' },
    { name: 'SINGLE POST', href: '#' },
    { name: 'ERROR 404', href: '#' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const servicesButtonRef = useRef(null);
    const pagesButtonRef = useRef(null);

    useEffect(() => {
        const handleServicesMouseEnter = () => setServicesOpen(true);
        const handleServicesMouseLeave = () => setServicesOpen(false);
        const handlePagesMouseEnter = () => setPagesOpen(true);
        const handlePagesMouseLeave = () => setPagesOpen(false);

        if (servicesButtonRef.current) {
            // eslint-disable-next-line 
            servicesButtonRef.current.addEventListener('mouseenter', handleServicesMouseEnter);
            // eslint-disable-next-line 
            servicesButtonRef.current.addEventListener('mouseleave', handleServicesMouseLeave);
        }

        if (pagesButtonRef.current) {
            // eslint-disable-next-line 
            pagesButtonRef.current.addEventListener('mouseenter', handlePagesMouseEnter);
            // eslint-disable-next-line 
            pagesButtonRef.current.addEventListener('mouseleave', handlePagesMouseLeave);
        }

        return () => {
            if (servicesButtonRef.current) {
                // eslint-disable-next-line 
                servicesButtonRef.current.removeEventListener('mouseenter', handleServicesMouseEnter);
                // eslint-disable-next-line 
                servicesButtonRef.current.removeEventListener('mouseleave', handleServicesMouseLeave);
                // eslint-disable-next-line 
            }

            if (pagesButtonRef.current) {
                // eslint-disable-next-line 
                pagesButtonRef.current.removeEventListener('mouseenter', handlePagesMouseEnter);
                // eslint-disable-next-line 
                pagesButtonRef.current.removeEventListener('mouseleave', handlePagesMouseLeave);
            }
        };
    }, []);

    return (
        <header className="bg-customDarkGray">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8  py-2 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/">
                        <span className="sr-only">Your Company</span>
                        <img className="h-14 w-auto" src="https://newkit.moxcreative.com/vittor/wp-content/uploads/sites/4/elementor/thumbs/logo_vittor-pre1buru2i302mjw5qnv2f7yo2wobdo35cmsgxyrcw.png" alt="" />
                    </a>
                </div>
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="/" className="text-sm text-white hover:text-customhoverPink">
                        HOMEPAGE
                    </a>
                    <Popover className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                        <Popover.Button
                            ref={servicesButtonRef}
                            className="flex items-center gap-x-1 text-sm text-white hover:text-customhoverPink"
                        >
                            SERVICES
                            <ChevronDownIcon className="h-5 w-5 flex-none text-white hover:text-customhoverPink" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            show={servicesOpen}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 mt-3 max-w-sm overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div>
                                    {services.map((item) => (
                                        <div key={item.name} className="group flex items-center gap-x-6 p-2 text-sm hover:bg-customhoverPink h-70">
                                            <div className="flex-auto text-center text-md hover:text-white">
                                                <a href={item.href} className="block font-semibold hover:text-white min-w-40">
                                                    {item.name}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a href="/" className="text-sm text-white hover:text-customhoverPink">
                        GALLERY
                    </a>
                    <a href="/" className="text-sm text-white hover:text-customhoverPink">
                        CONTACT US
                    </a>
                    <Popover className="relative" onMouseEnter={() => setPagesOpen(true)} onMouseLeave={() => setPagesOpen(false)}>
                        <Popover.Button
                            ref={pagesButtonRef}
                            className="flex items-center gap-x-1 text-sm text-white hover:text-customhoverPink"
                        >
                            PAGES
                            <ChevronDownIcon className="h-5 w-5 flex-none text-white hover:text-customhoverPink" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            show={pagesOpen}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 mt-3 max-w-sm overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div>
                                    {pages.map((item) => (
                                        <div key={item.name} className="group flex items-center gap-x-6 p-2 text-sm hover:bg-customhoverPink h-70">
                                            <div className="flex-auto text-center text-md hover:text-white">
                                                <a href={item.href} className="block font-semibold hover:text-white min-w-40">
                                                    {item.name}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>

                <div className="ml-5 hidden md:block ">
                    <Button isGradient={true} gradientColors={['pink-600', 'pink-600', 'customGradientPurple']} text={"Get Started"} />
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden text-black" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-customDarkGray text-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                                                Pages
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...pages].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...services].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    Gallery
                                </a>
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    HomePage
                                </a>
                            </div>

                            <div className="py-6">
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
