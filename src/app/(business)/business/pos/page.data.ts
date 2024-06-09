import { StaticImageData } from "next/image";

export interface feature{
    heading: string;
    content: string;
    link1: string;
    buttonName1 : string;
    src: StaticImageData | string;
}

const features: feature[] = [
    {
        heading:" Recieve card payment and transfers",
        content:"Process direct transfers on your POS terminal and generate customer receipts.",
        link1: "",
        buttonName1: "Request a POS",
        src: ""
    },
    {
        heading: "Instant Settlement",
        content: "Receive payments instantly in your account without any delays.",
        link1: "",
        buttonName1: "Request a POS",
        src: ""
    },
    {
        heading: "Always Reliable",
        content: "With a high success rate we cater for your businesses financial needs, ensuring convenience in every transaction",
        link1: "",
        buttonName1: "Request a POS",
        src: ""
    },
    {
        heading: "Your Security and Protection is Our Priority",
        content: "Cashmatrix employs state-of-the-art security technology to safeguard your information and prevent unauthorized acces.Your funds are also insured for up to N250,000 by the Nigerian Deposit Insurance Corporation.",
        link1: "",
        buttonName1: "",
        src: ""
    },
    {
        heading: "Support available anytime, anywhere.",
        content: "Our support team is available via phone, email, in-app chat, or the Help Center—whichever works best for you!",
        link1: "",
        buttonName1: "Get Help",
        src: ""
    },
];

export default features;