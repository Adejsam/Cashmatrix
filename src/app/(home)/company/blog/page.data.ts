import { StaticImageData } from "next/image";

export interface post {
  title: string;
  content: string[];
  image: string | StaticImageData;
  author: string;
  slug: string;
  date: string;
  listHeading: string;
  listDesc: string;
  listItem: string[];
  content2: string[];
  listHeading2: string;
  listDesc2: string;
  listItem2: string[];
  listsInfo: string[]
}

const posts: post[] = [
  {
    slug: "fund-your-betting-account-in-a-snap",
    title: "FUND YOUR BETTING ACCOUNT IN A SNAP",
    content: [
      "We have some exciting news for you! Cashmatrix, the leading digital bank in Nigeria, has just launched a new payment option that allows you to fund your betting account with ease.",
      "You can now top-up your betting account with Cashmatrix at no charge.This new payment option is a fast, secure, and convenient way to top-up your betting account, giving you the ultimate betting experience.",
      "In this blog post, we will show the simple ways to fund your betting account from the Cashmatrix app.",
    ],
    image: "/images/betting platforms.png",
    author: "By Cashmatrix",
    date: " April 26, 2023",
    listHeading: "How to fund your bet account with Cashmatrix",
    listDesc: "To start funding your betting account and enjoy seamless transactions, download the CashMatrix app from your Google Playstore or App Store and create a Cashmatrix account. Once you have set up your account, follow these simple steps:",
    listItem: [
      "Log into your Cashmatrix account on mobile or the web.",
      "After logging in, you can view your account number on the home page.",
      "Fund your Cashmatrix Account with your desired amount (there is no limit to the amount you can fund your Cashmatrix account with)",
      "Go to the ‘Bet’ option on the homepage.",
      "Click on it, then “Select Provider” by choosing your preferred betting site from the drop-down.",
      "Enter your Bet Account ID.",
      "Input your desired betting amount.",
      "Enter your 4-digit transaction pin.",
      "Click on ‘Fund Bet Wallet’",
      "Your Betting Account will be funded immediately.",
    ],
    content2: [
      "Apart from the easy and seamless funding of betting accounts, you can also use CashMatrix to send money to any bank account in Nigeria, make instant payments, and top-up your airtime and data.",
      "In addition, Cashmatrix pays you a commission each time you refer a friend to join the convenient and easy digital banking.",
      "Download the CashMatrix app today, fund your betting account, and enjoy super-fast & safe transactions.",
    ],
    listHeading2: "Advantages of using Cashmatrix to Fund Your Betting Account",
    listDesc2: "There are plenty of advantages to using Cashmatrix to fund your betting account. Here are some of them;",
    listItem2: ["No Charges: There are no charges when you use Cashmatrix to fund your betting account directly. This service is free of charge. ",
      "Safe & Secure: CashMatrix offers a seamless and secure payment experience, allowing you to fund your betting account without worrying about security issues. You can rest assured that your funds are safe and secure, as CashMatrix employs the latest encryption and security measures to protect your transactions.",
      "Fast Transactions: Transactions are instant with Cashmatrix. You can expect your betting account to be funded immediately."
    ],
    listsInfo: []
  },
  // {
  //   slug: "cashmatrix-watsapp-banking",
  //   title: "CASHMATRIX WHATSAPP BANKING",
  //   content: [
  //     "WhatsApp Banking is a new way of banking that enables customers to carry out transactions using their WhatsApp accounts.",
  //     "With Cashmatrix WhatsApp Banking, you can now enjoy banking services directly from your mobile phone! This new service enables customers to perform various banking transactions, such as fund transfers, bill payments, airtime purchases, and so much more, from their WhatsApp accounts."
  //   ],
  //   image: "",
  //   author: "",
  //   date: "",
  //   listHeading: "",
  //   listDesc: "",
  //   listItem: [],
  //   listContent:[],
  //   content2: [],
  //   listHeading2: "",
  //   listDesc2: "",
  //   listItem2: [],
  // },
  {
    slug: "earn-big-with-cashmatrix-referral",
    title: "EARN BIG WITH CASHMATRIX REFERRAL",
    content: [
      "Are you looking for how to earn extra cash without leaving the comfort of your home? Then keep reading.",
      "With CashMatrix, you can earn big simply by referring your friends, family, and colleagues to sign up using your referral code.",
      "CashMatrix offers its users a commission on every referral they make. It’s a win-win situation for you and your network! You get to earn extra cash while your referrals enjoy the benefits of CashMatrix.",
    ],
    image: "/images/referral.png",
    author: "By Cashmatrix",
    date: "March 21, 2023",
    listHeading: "Here’s how it works",
    listDesc: "",
    listItem: [
      "Download the Cashmatrix app, sign up, and get your unique referral code.",
      "Share your referral code with your friends, family, and anyone else who might be interested in using CashMatrix.",
      "Your referral downloads the Cashmatrix app, signs up using your referral code, and funds their account with at least #500.",
      "You immediately get your commission of #100.",
      "The more people you refer, the more money you can mak",
      "If you already have a Cashmatrix account, log into your account to get your referral code. Then you can start sharing it with your network and start earning.",
    ],
    listHeading2: "How do I get my referral code?",
    listDesc2: "To get your referral code on the mobile app, follow these steps;",
    listItem2: [
      " Log into your Cashmatrix account via the mobile app.",
      " Go to your settings, and select the ‘Referral code’ option.",
      "Copy your referral code, or write it somewhere you can easily remember.",
    ],
    content2: [
      "You earn a commission each time you refer someone who completes this process. And the best part is there is no limit to how much you can earn. The more referrals you get, the more money you make!",
      "But that’s not all. CashMatrix is not only about earning extra income. It’s also about providing a convenient and secure way for you to bank. With CashMatrix, you can easily send and receive money, pay for your electricity and cable TV, buy airtime/data, and even access quick loans.",
      "CashMatrix also offers a range of other features such as; Real-time transaction updates, alerts, and notifications to help you stay on top of your finances. And with the app’s 24/7 customer support, you can rest assured that any issues you encounter will be swiftly resolved.",
      "So, spread the word about CashMatrix today, and get rewarded for every successful referral you make to Cashmatrix! It’s a great way to make some extra cash and also help those around you discover the amazing benefits of our digital banking a",
    ],
    listsInfo: []
  },
  {
    slug: "feature-of-the-cashmatrix-app",
    title: "FEATURES OF THE CASHMATRIX APP",
    content: [
      "With just a few clicks, you can send money, pay bills, top up your phone or data, and much more. In this blog post, we will explore some of the features of the Cashmatrix App.",
      "If you are yet to open a Cashmatrix account, please refer to this post on how to create a Cashmatrix Account online in 3 minutes.",
      "Now, here’s what you can expect to enjoy on the Cashmatrix app;"
    ],
    image: "/images/blog feature.jpg",
    author: "By Cashmatrix",
    date: "March 8, 2023",
    listHeading: "",
    listDesc: "",
    listItem: [],
    listsInfo:["Instant Money Transfers:", "Gone are the days when you had to visit the bank to send money. With Cashmatrix, you can transfer money easily to any Nigerian bank account in just a few seconds. The best part is that the transfer fees are low, making it an affordable option for everyone.",
      " Bill Payments:","Pay your bills instantly directly from the app. Whether it’s your electricity or cable subscription, you can make payments in just a few clicks.",
      "Data/Airtime Top-Up", "Running out of data or airtime can be frustrating, especially when you need it the most. With the Cashmatrix app, you can easily top up your phone or data from anywhere, at any time. Whether you need to make an important call or send an urgent message or access the internet, Cashmatrix got you covered.",
      "Transaction Reports:", "If you’ve ever needed your transaction history, you know how much of a hassle it can be to get it. With the Cashmatrix app, you can access your transaction history with just a few clicks. Simply click on the “transaction history” button on the app, and you’ll get your transaction reports directly in your email.",
      "Hide Your Account Balance:", "Privacy is essential, and that’s why the Cashmatrix app allows you to hide your account balance from prying eyes. With just a click of a button, you can hide your balance from anyone who might be looking over your shoulder.",
    ],
    content2: [
      "In conclusion, the Cashmatrix app is a convenient and user-friendly way to access financial services. With its user-friendly interface and innovative features, it’s no surprise that it’s becoming increasingly popular. Whether you’re looking to send money, pay bills, or top up your phone, the Cashmatrix app has got you covered. So why not try it out today and experience the convenience for yourself?",
      "Download the Cashmatrix app on the Google Play Store or App store, or visit app.cashmatrix.ng to get started."
    ],
    listHeading2: "",
    listDesc2: "",
    listItem2: [],
  }
];

export default posts;
