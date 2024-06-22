import { StaticImageData } from "next/image";
import azureBackg from "../../../../../public/images/azure backg.png";
import posPayment from "../../../../../public/images/pos payment.png"
import posSucess from "../../../../../public/images/payment success.png"
import instantPay from "../../../../../public/images/instantPay.png"
import posSecurity from "../../../../../public/images/pos security.png"
import posHelp from "../../../../../public/images/pos help.png"

export interface feature{
    heading: string;
    content: string;
    link1: string;
    buttonName1 : string;
    src: string|StaticImageData ;
}

const features: feature[] = [
    {
        heading:" Recieve card payment and transfers",
        content:"Process direct transfers on your POS terminal and generate customer receipts.",
        link1: "/business/pos/request-pos",
        buttonName1: "Request a POS",
        src: posPayment
    },
    {
        heading: "Instant Settlement",
        content: "Receive payments instantly in your account without any delays.",
        link1: "/business/pos/request-pos",
        buttonName1: "Request a POS",
        src: instantPay
    },
    {
        heading: "Always Reliable",
        content: "With a high success rate we cater for your businesses financial needs, ensuring convenience in every transaction",
        link1: "/business/pos/request-pos",
        buttonName1: "Request a POS",
        src: posSucess
    },
    {
        heading: "Your Security and Protection is Our Priority",
        content: "Cashmatrix employs state-of-the-art security technology to safeguard your information and prevent unauthorized acces.Your funds are also insured for up to N250,000 by the Nigerian Deposit Insurance Corporation.",
        link1: "",
        buttonName1: "",
        src: posSecurity
    },
    {
        heading: "Support available anytime, anywhere.",
        content: "Our support team is available via phone, email, in-app chat, or the Help Center—whichever works best for you!",
        link1: "/help/get-help",
        buttonName1: "Get Help",
        src: posHelp
    },
];

export default features;