import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { IconArrowBadgeDownFilled, IconCheck } from "@tabler/icons-react";
import Image from 'next/image';

const people = [
  { srcImage: "/images/icon/lang-usa.png", name: "English" },
  { srcImage: "/images/icon/lang-china.png", name: "China" },
  { srcImage: "/images/icon/lang-brazil.png", name: "Brazil" },
  { srcImage: "/images/icon/lang-canada.png", name: "Canada" },
  { srcImage: "/images/icon/lang-france.png", name: "France" },
  { srcImage: "/images/icon/lang-italy.png", name: "Italy" }
];

export default function Language() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="langu position-relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="langu__head mt-3 mt-sm-2 mt-md-1">
          <Listbox.Button className="d-flex align-items-center relative w-full">
            <Image className="rounded-5 me-1" width={16} height={16} src={selected.srcImage} alt="icon" />
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IconArrowBadgeDownFilled className="h-5 w-5 n5-color" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="langu__items p2-bg mt-5 max-h-60 w-full overflow-auto rounded-md focus:outline-none px-5 cpoint">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? '' : ''
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <div className='d-flex flex-nowrap'>
                      <Image className="rounded-5 me-3 object-fit-contain" width={16} height={16} src={person.srcImage} alt="icon" />
                      <span className={`block text-nowrap ${selected ? 'font-medium' : 'font-normal'}`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex pl-3">
                          <IconCheck className="h-5 w-5 ms-1" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
