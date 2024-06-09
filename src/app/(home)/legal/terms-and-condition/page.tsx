import styles from "./page.module.css";

const TermsCondition = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading2}>Terms and Condition</h1>
        </div>
        <ul className={styles.tcLists}>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(1). End User License Agreement (EULA)</h4>
            <p className={styles.tcContent}>
              This End User License Agreement (EULA or Agreement) is a legal agreement between You
              (Licensee or you) and Asset Matrix Microfinance Bank Limited (Cash Matrix, the
              Licensor or We). This Agreement governs your use of the CashMatrix mobile banking
              application on all platforms such as web and mobile, including all related technology
              provided by Cash Matrix (the Mobile Application).
            </p>
            <ul className={styles.tcSubLists}>
              <li className={styles.tcSubList}>
                Cash Matrix provides you with the Mobile Application to enable you to access
                financial services offered by Cash Matrix.
              </li>
              <li className={styles.tcSubList}>
                We license the use of the Mobile Application to you on the basis of this Agreement.
                We do not sell the Mobile Application to you. We remain the owners of the Mobile
                Application at all times.
              </li>
              <li className={styles.tcSubList}>
                Please read the EULA properly and carefully before clicking the “I AGREE” button,
                installing or using this Mobile Application.
              </li>
              <li className={styles.tcSubList}>
                By clicking the “I AGREE” button, or installing or downloading or otherwise using
                this Mobile Application, you:
              </li>
              <li className={styles.tcSubList}>
                Acknowledge that you have read and understood this Agreement
              </li>
              <li className={styles.tcSubList}>
                Represent that there are no legal restrictions on your ability to use the Mobile
                Application; and accept this Agreement and agree that you are bound by the terms and
                conditions of this EULA. If you are entering into this EULA on behalf of an entity,
                you represent that you have the authority to bind such entity.
              </li>
              <li className={styles.tcSubList}>
                If you do not agree to the terms and conditions of this Agreement, then the Licensee
                may not click on the “I AGREE” button nor install nor download nor use the Mobile
                Application
              </li>
            </ul>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(2). Grant And Scope Of License</h4>
            <p className={styles.tcContent}>
              In consideration of you agreeing to abide by the terms of this Agreement, the Licensor
              hereby grants you a non-exclusive, non-transferable license to download, install and
              use the Mobile Application for your personal, non-commercial use on a mobile device
              owned or otherwise controlled by you, strictly in accordance with the Mobile
              Application’s documentation; and access, download and use on such technology device,
              the Content and Services (as defined in Clause 6) made available in or otherwise
              accessible through the Mobile Application, strictly in accordance with this Agreement
              and the Terms and Conditions applicable to such Content and Services
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(3). License Restrictions</h4>
            <p className={styles.tcContent}>The License shall not:</p>
            <ul className={styles.tcSubLists}>
              <li className={styles.tcSubList}>
                Copy the Mobile Application, except as expressly permitted by this license;
              </li>
              <li className={styles.tcSubList}>
                Modify, translate, adapt, or otherwise create derivative works or improvements,
                whether or not patentable, of the Mobile Application
              </li>
              <li className={styles.tcSubList}>
                Reverse engineer, disassemble, decompile, decode, or otherwise attempt to derive or
                gain access to the source code of the Mobile Application or any part thereof;
              </li>
              <li className={styles.tcSubList}>
                Remove, delete, alter, or obscure any trademarks or any copyright, trademark,
                patent, or other intellectual property or proprietary rights notices from the
                application, including any copy thereof;
              </li>
              <li className={styles.tcSubList}>
                Rent, lease, lend, sell, sublicense, assign, distribute, publish, transfer, or
                otherwise make available the Mobile Application, or any features or functionality of
                the Mobile Application, to any third party for any reason, including by making the
                Mobile Application available on a network where it is capable of being accessed by
                more than one device at any time;
              </li>
              <li className={styles.tcSubList}>
                Remove, disable, circumvent, or otherwise create or implement any workaround to any
                copyright protection, rights management, or security features in or protecting the
                Mobile Application; or
              </li>
              <li className={styles.tcSubList}>
                Use the Mobile Application in, or in association with, the design, construction,
                maintenance, or operation of any hazardous environments or systems, including any
                power generation systems; aircraft navigation or communication systems, air traffic
                control systems, or any other transport management systems; safety-critical
                applications, including medical or life-support systems, vehicle operation
                applications or any police, fire, or other safety response systems; and military or
                aerospace applications, weapons systems, or environments
              </li>
            </ul>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(4). Intellectual Property Rights</h4>
            <p className={styles.tcContent}>
              You acknowledge that all intellectual property rights in the Mobile Application belong
              to the Licensor, that rights in the Mobile Application are licensed (not sold) to you,
              and that you have no intellectual property rights in, or to, the Mobile Application
              other than the right to use the Mobile Application in accordance with the terms of
              this Agreement. You acknowledge that you have no right to have access to the Mobile
              Application in source code form other than as expressly provided in this Agreement.
            </p>
            <p className={styles.tcContent}>
              Cash Matrix and its 3rd party service providers reserve and shall retain their entire
              right, title, and interest in and to the Mobile Application, including all copyrights,
              trademarks, and other intellectual property rights therein or relating thereto, except
              as expressly granted to you in this Agreement.
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(5). Collection And Use Of Your Information</h4>
            <p className={styles.tcContent}>
              You acknowledge that when you download, install, or use the Mobile Application, We may
              use automatic means (including, for example, cookies and web beacons) to collect
              information about your mobile device and about your use of the Mobile Application. You
              also may be required to provide certain information about yourself as a condition to
              downloading, installing, or using the Mobile Application or certain of its features or
              functionality.
            </p>
            <p className={styles.tcContent}>
              All information we collect through or in connection with this Mobile Application is
              subject to our Privacy Policy. By downloading, installing, using, and providing
              information to or through this Mobile Application, you consent to all actions taken by
              us with respect to your information in compliance with the Privacy Policy
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(6). Content And Services</h4>
            <p className={styles.tcContent}>
              The Mobile Application may provide you with access to products and services accessible
              thereon, including
            </p>
            <ul className={styles.tcSubLists}>
              <li className={styles.tcSubList}>(i) Airtime & Data Topup;</li>
              <li className={styles.tcSubList}>(ii) loans;</li>
              <li className={styles.tcSubList}>(iii) fixed deposit;</li>
              <li className={styles.tcSubList}>(iv) bill payment;</li>
              <li className={styles.tcSubList}>
                (vi) savings accounts; on Cash Matrix’s website located at www.cashmatrix.ng (the
                Website),and certain features, functionality, and content accessible on or through
                the Mobile Application which may be hosted on the Website (collectively, “Content
                and Services“).
              </li>
              <p className={styles.tcContent}>
                Your access to and use of such Content and Services are governed by the Website’s
                Terms and Conditions and Privacy Policy located at https://Cash
                Matrix.ng/terms-conditions-for-debit-cards and
                https://cashmatrix.ng/mobile-app-privacy-policy which are incorporated herein by
                this reference. Your access to and use of such Content and Services may require you
                to acknowledge your acceptance of such Terms and Conditions and Privacy Policy
                and/or to register with the Website, and your failure to do so may restrict you from
                accessing or using certain of the Mobile Application’s features and functionality.
              </p>
              <p className={styles.tcContent}>
                Any violation of these terms of use will also be deemed a violation of this
                Agreement.
              </p>
            </ul>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>7. Geographic Restrictions</h4>
            <p className={styles.tcContent}>
              The Content and Services are based in Nigeria and provided for access and use only by
              persons located in Nigeria. You acknowledge that you may not be able to access all or
              some of the Content and Services outside of Nigeria and that access thereto may not be
              legal by certain persons or in certain countries. If you access the Content and
              Services from outside Nigeria, you are responsible for compliance with local laws. The
              Licensor will not be liable for your access and use of the Contents and Services
              outside Nigeria
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(8). Updates</h4>
            <p className={styles.tcContent}>
              Cash Matrix may from time to time in its sole discretion develop and provide Mobile
              Application updates, which may include upgrades, bug fixes, patches, other error
              corrections, and/or new features (collectively, including related documentation,
              “Updates“). Updates may also modify or delete in their entirety certain features and
              functionality. You agree that Cash Matrix has no obligation to provide any Updates or
              to continue to provide or enable any particular features or functionality.
            </p>
            <p className={styles.tcContent}>
              Based on the settings of your technology device, when your device is connected to the
              internet either:
            </p>
            <ul className={styles.tcSubLists}>
              <li className={styles.tcSubList}>
                The Mobile Application will automatically download and install all available
                Updates; or
              </li>
              <li className={styles.tcSubList}>
                you may receive notice of or be prompted to download and install available Updates.
              </li>
              <li className={styles.tcSubList}>
                You shall promptly download and install all Updates and acknowledge and agree that
                the Mobile Application or portions thereof may not properly operate should you fail
                to do so. You further agree that all Updates will be deemed part of the Mobile
                Application and be subject to all terms and conditions of this Agreement.
              </li>
            </ul>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(9). Third-Party Materials</h4>
            <p className={styles.tcContent}>
              The Mobile Application may display, include, or make available third-party content
              (including data, information, applications, and other products, services, and/or
              materials) or provide links to third-party websites or services, including through
              third-party advertising (“Third-Party Materials“).
            </p>
            <p className={styles.tcContent}>
              You acknowledged and agree that Cash Matrix is not responsible for Third-Party
              Materials, including their accuracy, completeness, timeliness, validity, copyright
              compliance, legality, decency, quality, or any other aspect thereof. Cash Matrix does
              not assume and will not have any liability or responsibility to you or any other
              person or entity for any Third-Party Materials. Third-Party Materials and links
              thereto are provided solely as a convenience to you, and you access and use them
              entirely at your own risk and subject to such third parties’ terms and conditions.
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(10). No Guarantees</h4>
            <p className={styles.tcContent}>
              This Mobile Application is provided “as is” with no representation, guarantee or
              agreement of any kind as to its functionality. We cannot guarantee that access to the
              Mobile Application will be uninterrupted or that there will be no delays or failures.
              We cannot also guarantee that no viruses or other contaminating or destructive
              properties will be transmitted or that no damage will occur to your technology
              device..
            </p>
            <p className={styles.tcContent}>
              You are responsible for adequate protection and back up of data and/or equipment and
              for undertaking reasonable and appropriate precautions to scan for viruses or other
              destructive properties. We are not responsible if you incur any loss as a result of
              any of the matters set out in this Clause10..
            </p>
            <p className={styles.tcContent}>
              We are not responsible for any third-party software that may be used in connection
              with the Mobile Application.
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(11). Disclaimer Of Warranties</h4>
            <p className={styles.tcContent}>
              THE MOBILE APPLICATION IS PROVIDED TO END USERS “AS IS” AND WITH ALL FAULTS AND
              DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE
              LAW, Cash Matrix, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND ITS THIRD
              PARTY SERVICE PROVIDERS, EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED,
              STATUTORY, OR OTHERWISE, WITH RESPECT TO THE MOBILE APPLICATION, INCLUDING ALL IMPLIED
              WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
              NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF
              PERFORMANCE, USAGE, OR TRADE PRACTICE. WITHOUT LIMITATION TO THE FOREGOING.
            </p>
            <p className={styles.tcContent}>
              Cash Matrix PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY
              KIND THAT THE MOBILE APPLICATION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED
              RESULTS, BE COMPATIBLE, OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS, OR
              SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS,
              OR BE ERROR-FREE, OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED. SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR
              THE LIMITATIONS ON THE APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO SOME OR ALL OF
              THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(12). Limitation Of Liability</h4>
            <p className={styles.tcContent}>
              To the fullest extent permitted by applicable law, in no event will Cash Matrixor its
              affiliates, or any of its or their respective third party service providers, have any
              liability arising from or related to your use of or inability to use the application
              or the Content and Services for:
            </p>
            <p className={styles.tcContent}>
              personal injury, property damage or loss, lost profits, cost of substitute goods or
              services, loss of data, loss of goodwill, business interruption, computer failure or
              malfunction, or any other consequential, incidental, indirect, exemplary, special, or
              punitive damages. direct damages in amounts that in the aggregate exceed the amount
              actually paid by you for the Mobile Applicatio
            </p>
            <p className={styles.tcContent}>
              The foregoing limitations will apply whether such damages arise out of breach of
              contract, tort (including negligence), or otherwise and regardless of whether such
              damages were foreseeable, or the Licensor was advised of the possibility of such
              damages. Some jurisdictions do not allow certain limitations of liability so some or
              all of the above limitations of liability may not apply to you.
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(13). Personal Data Protection Principles</h4>
            <p className={styles.tcContent}>
              Personal data is all information that directly or indirectly may refer to the Mobile
              Application user which he/she has provided in the course of this Agreement or use of
              the Mobile Application. Such includes:
            </p>
            <ul className={styles.tcSubLists}>
              <li className={styles.tcSubList}>
                contact information [name, title, address, email address, mobile phone number etc,
                Date of birth];
              </li>
              <li className={styles.tcSubList}>
                employment information [name, address, phone number and email address of employee];
                or
              </li>
              <li className={styles.tcSubList}>
                financial information [information about the Client’s income and any charges, where
                available].
              </li>
            </ul>
            <p className={styles.tcContent}>
              Where necessary, we will process the personal data in order to provide a simplified
              service and in order to improve user experience. We will process the personal data for
              confirming your identity, administering the customer relationship, preventing misuse
              or improper use of our Mobile Application, for the prevention of money laundering,
              customer analysis, assessment, risk analysis and management, business development, for
              commercial and marketing purposes and for complying with applicable laws.
            </p>
            <p className={styles.tcContent}>
              By accepting the terms of the Mobile Application, you agree that we may use and/or
              reuse data provided or previously provided and we may carry out enquiries to help on
              your use of the Mobile Application. Where available, we will use such information to
              confirm your identity and simplify the use of our service.
            </p>
            <p className={styles.tcContent}>
              We adhere to the principles relating to Processing of Personal Data set out in the
              Nigerian Data Protection Regulation 2019 (NDPR) which requires personal data to be:
            </p>
            <ul className={styles.tcSubLists}>
              <li className={styles.tcSubList}>
                processed lawfully, fairly and in a transparent manner;
              </li>
              <li className={styles.tcSubList}>
                collected only for specified, explicit and legitimate;
              </li>
              <li className={styles.tcSubList}>
                adequate, relevant and limited to what is necessary in relation to the purposes for
                which it is processed;
              </li>
              <li className={styles.tcSubList}>accurate and where necessary kept up to date;</li>
              <li className={styles.tcSubList}>
                not kept in a form which permits your identification for longer than is necessary
                for the purposes for which the data is processed;
              </li>
              <li className={styles.tcSubList}>
                processed in a manner that ensures its security using appropriate technical and
                organisational measures to protect against unauthorised or unlawful Processing and
                against accidental loss, destruction or damage;
              </li>
              <li className={styles.tcSubList}>
                not transferred to another country without your consent of the and appropriate
                safeguards being in place; or
              </li>
              <li className={styles.tcSubList}>
                made available to you and allow you to exercise certain rights in relation to your
                personal data.
              </li>
              <li className={styles.tcSubList}>
                We are responsible for and must be able to demonstrate compliance with the data
                protection principles listed above.
              </li>
            </ul>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(14). Severability & Governing Law</h4>
            <p className={styles.tcContent}>
              If any provision of this Agreement is illegal or unenforceable under applicable law,
              the remainder of the provision will be amended to achieve as closely as possible the
              effect of the original term and all other provisions of this Agreement will continue
              in full force and effect.
            </p>
            <p className={styles.tcContent}>
              This Agreement is governed by and construed in accordance with the laws of the Federal
              Republic of Nigeria without giving effect to any choice or conflict of law provision
              or rule.
            </p>
            <p className={styles.tcContent}>
              Any legal suit, action, or proceeding arising out of or related to this Agreement or
              the Mobile Application shall be instituted exclusively in the Nigerian Courts within
              the applicable jurisdiction
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(15). Entire Agreement & Waiver</h4>
            <p className={styles.tcContent}>
              This Agreement, the Terms and Conditions and our Privacy Policy constitute the entire
              agreement between you and Cash Matrix with respect to the Mobile Application and
              supersede all prior or contemporaneous understandings and agreements, whether written
              or oral, with respect to the Mobile Application.
            </p>
            <p className={styles.tcContent}>
              No failure to exercise, and no delay in exercising, on the part of either party, any
              right or any power hereunder shall operate as a waiver thereof, nor shall any single
              or partial exercise of any right or power hereunder preclude further exercise of that
              or any other right hereunder.
            </p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>(16). Indemnification</h4>
            <p className={styles.tcContent}>
              You agree to indemnify, defend, and hold harmless Asset Matrix MFB Limited and its
              officers, representatives, directors, employees, agents, affiliates, successors, and
              assigns from and against any and all losses, damages, liabilities, deficiencies,
              claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or
              expenses of whatever kind, including attorneys’ fees, arising from or relating to your
              use or misuse of the Mobile Application or your breach of this Agreement, including
              but not limited to the content you submit or make available through this Mobile
              Application.
            </p>
            <p className={styles.tcContent}></p>
          </li>
          <li className={styles.tcList}>
            <h4 className={styles.tcHeading}>Communication Between Us</h4>
            <p className={styles.tcContent}>
              If you are a user, and you wish to contact us in writing, or if any condition in this
              Agreement requires you to give us notice in writing, you can send this to us by email
              hello@cashmatrix.ng or support@cashmatrix.ng We will confirm receipt of this by
              contacting you in writing, normally by email.
            </p>
            <p className={styles.tcContent}>
              If we have to contact you or give you notice in writing, we will do so by email or
              receive a call from the bank.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default TermsCondition;
