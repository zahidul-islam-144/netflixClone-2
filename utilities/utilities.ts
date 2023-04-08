import { formInputType, NavLinkType } from "./types";

export const navLinkMenu: NavLinkType[] = [
  {
    linkName: "Home",
  },
  {
    linkName: "TV Shows",
  },
  {
    linkName: "Movies",
  },
  {
    linkName: "New & Popular",
  },
  {
    linkName: "My List",
  },
];


export const formInputService:formInputType[] = [
  {
      id: 1,
      type: 'text',
      placeholder: "Email or Phone Number",
      name: 'phn_email',
  },
  {
      id: 2,
      type: 'password',
      placeholder: 'password',
      name: 'password',
  },
]

export const checkLists:formInputType[] = [
  {
    id: 1,
    title: 'Remember me.',
    name: 'rememberMe'
  },
  // {
  //   id: 2,
  //   listName: 'Remember me.'
  // },
  // {
  //   id: 3,
  //   listName: 'Remember me.'
  // },
]

export const textTruncate = (str: string | any, n: number): string => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};


export const capitalizeFirstLetter = (str: string): string => {
  const splitCamelcase = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  const capitalized = splitCamelcase.charAt(0).toUpperCase() + splitCamelcase.slice(1);
  return capitalized;
};
