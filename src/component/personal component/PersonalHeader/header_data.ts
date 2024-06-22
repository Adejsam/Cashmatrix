const HeaderLinks: Array<HeaderLinksInterface> = [
    {
        link: "/personal",
        label: "Personal",
        children: [],
        icon: "",
        iconPath: "",
        iconId: ""
    },
    {
        link: "/business/discover-business",
        label: "Business",
        children: [
            {
                label: "Discover Business", link: "/business/discover-business", children: [],
                icon: "fa-solid fa-building-columns", iconId: "icon1",
                iconPath: ""
            },
            {
                label: "POS", link: "/business/pos", children: [],
                iconPath: "/icons/POS icon.png", iconId: "icon2",
                icon: ""
            },
            {
                label: "Payout API", link: "/business/payout-API", children: [],
                icon: "fa-solid fa-wallet", iconId: "icon3",
                iconPath: ""
            }
        ],
        icon: "fa-solid fa-caret-down",
        iconId: "",
        iconPath: ""
    },
    {
        link: "/company/about-us",
        label: "Company",
        children: [
            {
                label: "About Us", link: "/company/about-us", children: [],
                icon: "fa-solid fa-address-card", iconId: "icon1",
                iconPath: ""
            },
            {
                label: "Blog", link: "/company/blog", children: [],
                icon: "fa-solid fa-blog", iconId: "icon2",
                iconPath: ""
            },
            {
                label: "Join Our Team", link: "/company/join-our-team", children: [],
                icon: "fa-solid fa-user-plus", iconId: "icon3",
                iconPath: ""
            }
        ],
        icon: "fa-solid fa-caret-down",
        iconId: "",
        iconPath: ""
    },
    {
        link: "help/get-help",
        label: "Help",
        children: [
            {
                label: "Get Help", link: "/help/get-help", children: [],
                icon: "fa-brands fa-hire-a-helper", iconId: "icon1",
                iconPath: ""
            },
            {
                label: "Contact Us", link: "/help/contact-us", children: [],
                icon: "fa-solid fa-address-book", iconId: "icon2",
                iconPath: ""
            },
            {
                label: "FAQ", link: "/help/faqs", children: [],
                icon: "fa-solid fa-circle-question", iconId: "icon3",
                iconPath: ""
            }
        ],
        icon: "fa-solid fa-caret-down",
        iconId: "",
        iconPath: ""
    },
]

interface HeaderLinksInterface {
    link: string;
    label: string;
    children: Array<HeaderLinksInterface>;
    icon: string;
    iconPath: string;
    iconId: string
  }
  
  export default HeaderLinks;