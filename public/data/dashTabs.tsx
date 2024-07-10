import { IconBellRinging, IconCreditCard, IconCreditCardOff, IconHistory, IconLogout, IconSettings, IconUser, IconWallet } from "@tabler/icons-react";
import React from "react";

export const dashboardTabs = [
  {
    id: 1,
    tabname: "Deposit",
    icon: <IconWallet className="ti ti-wallet fs-five n5-color" />,
  },
  {
    id: 2,
    tabname: "Withdrawal",
    icon: <IconCreditCard className="ti ti-credit-card fs-five n5-color" />,
  },
  {
    id: 3,
    tabname: "Cancel withdrawal",
    icon: <IconCreditCardOff
      className="ti ti-credit-card-off fs-five n5-color" />,
  },
  {
    id: 4,
    tabname: "Balance History",
    icon: <IconHistory
      className="ti ti-history fs-five n5-color" />,
  },
  {
    id: 5,
    tabname: "Profile",
    icon: <IconUser
      className="ti ti-user fs-five n5-color" />,
  },
  {
    id: 6,
    tabname: "Settings",
    icon: <IconSettings
      className="ti ti-settings fs-five n5-color" />,
  },
  {
    id: 7,
    tabname: "Notifications",
    icon: <IconBellRinging
      className="ti ti-bell-ringing fs-five n5-color" />,
  },
  {
    id: 8,
    tabname: "Log out",
    icon: <IconLogout
      className="ti ti-logout fs-five n5-color" />,
  },
];