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

export default faqs;
