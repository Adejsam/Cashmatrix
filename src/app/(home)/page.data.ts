import { StaticImageData } from "next/image";

export interface testimaonial{
    content: string;
    name: string;
    imgSrc: string | StaticImageData;
}

const testimonials: testimaonial[] = [
    {
        content: "Transact with ease on the app. So simple and direct with little charges.",
        name: "Olapeju Fagbemi",
        imgSrc: "/a/ACg8ocKr5qhElKAtl-q9wonZv4U12r4Hu4QBmpk34gma1q5O3Htunw=s32-rw-mo",  
    },
    {
        content: "Great user interface. Exceptional customer service and seamless transactions.",
        name: "Babatunde Adegbite",
        imgSrc: "/a/ACg8ocJoP9ddGOcgmKmRJ6u0r_qsCzzJmWgPLoBudpL4-uIbJHLAiw=s32-rw-mo",
    },
    {
        content: "Good financial app, easy to navigate and exceptional customer service.",
        name: "Mayowa Adebowale",
        imgSrc: "/a-/ALV-UjV_K8G3sFoaWaUF3833uRfCVjB48uUPfMyTVtVj-hGRCG9lQYo=s32-rw",
    },
    {
        content: "Very good, easy to navigate and transact. Highly recommended!!..👍",
        name: "Tochi Joan",
        imgSrc: "/a/ACg8ocIEtVxgJS--8_W7OfhPGTIu1DpRDVZ1hdActGuAOUfXyGpfxQ=s32-rw-mo",
    },
    {
        content: "I love the interface, and the support line response to issues on time. It has been a wonderful to have you cashmatrix. Do more to keep your customers and more to come.",
        name: "Toyin David",
        imgSrc: "/a/ACg8ocK4AFgx5QXiFWYZqC_znywbCNIUyo7H1dzbr-PSeqIFT3-gGw=s32-rw-mo",
    },
    {
        content: "I love the new interface with unique account details,fast and utility bills payment confirmation. What a wonderful friendly app.👍👍👍👍👍",
        name: "Abass Opeyemi",
        imgSrc: "/a-/ALV-UjVpgxYNuv1aBDuwuBNSMWvSEuAcjFJd70fXnzYjMbDecIRrlNrb=s32-rw",
    },
    {
        content: "The user experience on this update is superb. The share receipt feature and the investment feature makes me feel super cool.",
        name: "Prince Ayotunde Yusuf (Prince Tunde)",
        imgSrc: "/a-/ALV-UjW64IsMOnIJCD6yMZXedPzZY-pmPIXetXMDH8D_NxaznPQAVOQk=s32-rw",
    },
    {
        content: "Using Cashmatrix makes transfer of money very simple and it is easy to navigate and understand how to use the APP.",
        name: "Davies Yinka",
        imgSrc: "/a-/ALV-UjVH2kNxuwwQ3EpS05x55sgDEDPMazKuZcbGmkd1W0Pm5jd_jAY=s32-rw",
    },
];
export default testimonials;