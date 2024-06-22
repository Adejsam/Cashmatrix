import { Content } from "next/font/google";

export interface faq {
  heading: string;
  content: string;
  content1: string;
  content2: string;
  id: string;
}
const faqs: faq[] = [
  {
      heading: "Is Cashmatrix a registered Bank?",
      content: "Yes, we have a microfinance banking license from the Central Bank of Nigeria.",
      content1: "",
      content2: "",
      id: "0"
  },
  {
      heading: "What do I need to open a Cashmatrix account?",
      content: "All you need is your Bank Verification Number (BVN). In Case you don't have a BVN or the BVN portal is down, you can use you National Identification Number (NIN)",
      content1: "",
      content2: "",
      id: "1"
  },
  {
      heading: "Where can I open an account",
      content: "You can open an account by download the cashmatrix app from Google play store or Apple app store",
      content1: "",
      content2: "",
      id: "2"
  },
  {
      heading: "Can I use the web application",
      content: "Yes, you can log in on the web but you cannot create an account on the web. You have to download the app to create an account",
      content1: "",
      content2: "",
      id: "3"
  },
  {
      heading: "What do you need my BVN for?",
      content: "We ask you to confirm your BVN so we can be sure no one is pretending to be you. When you confirm your BVN, we match your details with the information on the national BVN database owned by the Central Bank.",
      content1: "",
      content2: "",
      id: "4"
  },
  {
      heading: "What kind of account do I get?",
      content: "If you create an account with just your BVN, you get a Tier 1 account with a minimum withdrawal of 50,000 Naira.",
      content1: "If you upload your valid ID and passport photograph, you get a Tier 2 account with a minimum withdrawal of 200,000.",
      content2: " If you upload your valid ID, passport paragraph, utility bill and signature, you get a Tier 3 account with a minimum withdrawal of 350,000 that can be increased when you contact the customer care line",
      id: "5"
  },
  {
      heading: "Is my money safe with Cashmatrix?",
      content: "Yes, your money is safe with us. We secure all accounts with the same high-security encryption used by regular banks.",
      content1: "",
      content2: "",
      id: "6"
  },
  {
      heading: "Is there a minimum balance?",
      content: "There is no minimum balance. you can deposit as much as you want",
      content1: "",
      content2: "",
      id: "7"
  },
  {
      heading: "Is there a minimum withdrawal?",
      content: "Yes. If you account is Tier 1, your minimum withdrawal is 50,000 naira.",
      content1: "For Tier 2, your minimum withdrawal is 200,000 niara.",
      content2: "  For Tier 3, your minimum withdrawal is 350,000 naira which can be increased when you contact the customer care",
      id: "8"
  },
  {
      heading: "How is cashmatrix different from other Banks?",
      content: "Cashmatrix is fully digital and can be accessed on the app and web which means less stress and lesser transfer fee for you",
      content1: "",
      content2: "",
      id: "9"
  },
  {
      heading: "What can I do on the Cashmatrix app?",
      content: "You can make transfer, buy airtime or data, make cable subscription, pay electricity bill and make savings",
      content1: "",
      content2: "",
      id: "10"
  },
  {
      heading: "Will I get account statements?",
      content: "Yes, you can get account statement by logging in on the web using the link cashmatrix.app, navigate to generate statment, select date and clicking generate statment",
      content1: "",
      content2: "",
      id: "11"
  },
];

const posFaqs: faq[] = [
    {
        heading: "How much do I pay for a Cashmatrix POS terminal?",
        content: "",
        content1: "",
        content2: "",
        id: "0"
    },
    {
        heading: "How long does it take to get Cashmatrix POS terminal?",
        content: "You will get your POS within 48 hours of request",
        content1: "",
        content2: "",
        id: "1"
    },
    {
        heading: "What card can Cashmatix POS Terminal accept?",
        content: "Cashmatrix POS can accept any card",
        content1: "",
        content2: "",
        id: "2"
    },
    {
        heading: "Can I accept transfer with my Cashmatrix POS terminal?",
        content: "Yes you can",
        content1: "",
        content2: "",
        id: "3"
    },
    {
        heading: "Do I need special training to use Cashmatrix POS terminal?",
        content: "No, but you can always contact customer support if you need any help",
        content1: "",
        content2: "",
        id: "4"
    },
];

const businessFaqs: faq[] =[
    {
        heading: "Can I open multiple Cashmatrix Business accounts?",
        content: "Yes, you can.",
        content1: "",
        content2: "",
        id: "0"
    },
    {
        heading: " Does Cashmatrix charge an account maintenance fee on business accounts?",
        content: "No, we don't",
        content1: "",
        content2: "",
        id: "1"
    },
    {
        heading: "Does Cashmatrix Business assign account officers to customers?",
        content: "No, we don’t assign account officers to customers but our support team is always available to attend to you.",
        content1: "",
        content2: "",
        id: "2"
    },
    {
        heading: " Can I make foreign transactions with my Kuda Business account?",
        content: "No, you can only make local transaction",
        content1: "",
        content2: "",
        id: "3"
    },
    // {
    //     heading: "",
    //     content: "",
    //     content1: "",
    //     content2: "",
    //     id: ""
    // },
];

export {faqs, posFaqs, businessFaqs};
