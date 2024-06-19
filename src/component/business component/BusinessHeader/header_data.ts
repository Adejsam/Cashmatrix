import { StaticImageData } from "next/image";
import posIcon from "../../../../public/icons/pos icon.png";

const HeaderLinks = [
    {
        link: "/personal",
        label: "Personal",
        children: [],
        icon: "",
        iconId: ""
    },
    {
        link: "/business/discover-business",
        label: "Business",
        children: [
            {
                label: "Discover Business", link: "/business/discover-business", children: [],
                icon: "fa-solid fa-building-columns",iconId: "icon1"
            },
            {
                label: "POS", link: "/business/pos", children: [],
                icon: "../../../../public/icons/pos icon.png", iconId: "icon2"
            },
            {
                label: "Payout API", link: "/business/payout-API", children: [],
                icon: "fa-solid fa-wallet", iconId: "icon3"
            }
        ],
        icon: "fa-solid fa-caret-down",
        iconId: ""
    },
    {
        link: "company/about-us",
        label: "Company",
        children: [
            {
                label: "About Us", link: "/company/about-us", children: [],
                icon: "fa-solid fa-address-card", iconId: "icon1"
            },
            {
                label: "Blog", link: "/company/blog", children: [],
                icon: "fa-solid fa-blog", iconId: "icon2"
            },
            {
                label: "Join Our Team", link: "/company/join-out-team", children: [],
                icon: "fa-solid fa-user-plus", iconId: "icon3"
            }
        ],
        icon: "fa-solid fa-caret-down",
        iconId: ""
    },
    {
        link: "",
        label: "Help",
        children: [
            {
                label: "Get Help", link: "/help/get-help", children: [],
                icon: "fa-brands fa-hire-a-helper", iconId: "icon1"
            },
            {
                label: "Contact Us", link: "/help/contact-us", children: [],
                icon: "fa-solid fa-address-book", iconId: "icon2"
            },
            {
                label: "FAQ", link: "/help/faqs", children: [],
                icon: "fa-solid fa-circle-question", iconId: "icon3"
            }
        ],
        icon: "fa-solid fa-caret-down",
        iconId: ""
    },
]

  
  export default HeaderLinks;