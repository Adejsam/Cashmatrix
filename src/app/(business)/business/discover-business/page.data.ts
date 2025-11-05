import { StaticImageData } from "next/image";

import openBusiness from "../../../../../public/images/open business.png";
import manageBusiness from "../../../../../public/images/manage business.png"
import boostBusiness from "../../../../../public/images/boost business.png"
import protectBusiness from "../../../../../public/images/protect business.png";
import helpBusiness from "../../../../../public/images/help business.png";


export interface feature1{
    heading: string;
    content: string;
    link1: string;
    link2: string
    buttonName1 : string;
    buttonName2: string;
    src: StaticImageData ;
    checkIcon : string;
    arrowIcon: string;
    featureButton1: string;
    featureButton2: string;
    listData: string[],
}

const features1: feature1[] = [
    {
        heading: "Open a Cashmatrix Business account with no paperwork",
        content: "Setup an account anytime and anywhere. All you need in your:",
        link1: "/business/create-account",
        link2: "",
        buttonName1: "Open Cashmatrix Business Account",
        buttonName2: "",
        src: openBusiness,
        listData: ["CAC (Customer acquisition cost)", "Valid BVN(Bank Verification Number)", "Valid phone number", "Utility Bill"],
        checkIcon: "fa-solid fa-check",
        arrowIcon: "fa-solid fa-angle-right",
        featureButton1: "button1",
        featureButton2: ""
    },
    {
        heading: "Manage all your business expenses conveniently in a single place.",
        content: "Effortlessly handle bill payments and airtime purchases without switching platforms,ensuring seamless organization and smooth business operations.",
        link1: "/business/create-account",
        link2: "",
        buttonName1: "Explore Bill Payment",
        buttonName2: "",
        src: manageBusiness,
        checkIcon: "",
        arrowIcon: "fa-solid fa-angle-right",
        featureButton1: "button1",
        featureButton2: "",
        listData: []
    },
    {
        heading: "Boost your earnings with the Cashmatrix POS",
        content: "Effortlessly accept card and transfers payment using a dependable point-of-saleterminal. Experience instant settlements, instant dispute resolution, and immediate payments every time.",
        link1: "/business/create-account",
        link2: "/business/pos",
        buttonName1: "Request for POS",
        buttonName2: "Learn More",
        src: boostBusiness,
        checkIcon: "",
        arrowIcon: "fa-solid fa-angle-right",
        featureButton1:"button1" ,
        featureButton2: "button2",
        listData: []
    },
    {
        heading: "Protect your business from fraud",
        content: "We protect your business againt fraud through User Authentication and Verification, Transaction Monitoring, Secure Payment Processing and Fraud Detection Algorithms. Benefit from round-the-clock anti-fraud vigilance, ensuring your operations staysecure at all times",
        link1: "",
        link2: "",
        buttonName1: "",
        buttonName2: "",
        src: protectBusiness,
        checkIcon: "",
        arrowIcon: "",
        featureButton1: "button1",
        featureButton2: "",
        listData: []
    },
    {
        heading: "We are always here to help you.",
        content: "You can always count on our team of professional to assit you in ensuring smooth operation 24/7. Unlock valuable business insights and additional features with Cashmatrix business account.",
        link1: "/help/get-help",
        link2: "",
        buttonName1: "Get Help",
        buttonName2: "",
        src: helpBusiness,
        checkIcon: "",
        arrowIcon: "fa-solid fa-angle-right",
        featureButton1: "button1",
        featureButton2: "",
        listData: []
    },
];

export default features1;