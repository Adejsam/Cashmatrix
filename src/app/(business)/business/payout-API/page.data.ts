import { StaticImageData } from "next/image";
import azureBackg from "../../../../../public/images/azure backg.png";
import brownBackg from "../../../../../public/images/brown backg.png";
import cornsmilkBackg from "../../../../../public/images/cornsmilk backg.png";

export interface apiFeature{
    heading: string;
    content: string;
    link: string;
    buttonName : string;
    src: StaticImageData ;
}

const apiFeatures: apiFeature[] = [
    {
        heading:"Explore, test and build with Casmatrix payout APIs.",
        content:"Cashmatrix payout APIs empower developers to explore, test, and create innovative solutions for seamless financial transactions",
        link: "/business/create-account",
        buttonName: "Get Cashmatrix Business",
        src: azureBackg
    },
    {
        heading: "Accelerate development using Cashmatrix payment services.",
        content: "By integrating with Cashmatrix payout APIs, businesses can enhance their transfer processes and offer a more convenient experience to their users.",
        link: "/business/create-account",
        buttonName: "Get Cashmatrix Business",
        src: brownBackg
    },
    {
        heading: "Achieve instant settlement within your agent network.",
        content: "Our payout API enables instant settlement for agency banking aggregators within their agent network after every POS transaction therefore, eliminating delays and enhancing cash flow.",
        link: "/business/create-account",
        buttonName: "Get Cashmatrix Business",
        src: cornsmilkBackg
    }
];

export default apiFeatures;