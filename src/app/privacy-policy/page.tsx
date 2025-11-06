"use client";
import React from "react";

const privacyPolicyContent = [
  {
    title: "Information We Collect",
    description: [
      "We collect personal information that you provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.",
    ],
  },
  {
    title: "How We Use Your Information",
    description: [
      "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
    ],
  },
  {
    title: "Sharing Your Information",
    description: [
      "We may process or share your data that we hold based on the following legal basis:",
      "Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.",
      "Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.",
      "Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.",
      "Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).",
    ],
  },
  {
    title: "Data Security",
    description: [
      "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.",
    ],
  },
  {
    title: "Your Privacy Rights",
    description: [
      "You may review, change, or terminate your account at any time. If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.",
    ],
  },
  {
    title: "Contact Us",
    description: [
      "If you have questions or comments about this policy, you may email us at info@edurup.com or by post to:",
      "Edurup",
      "1234 Street Address",
      "City, State, ZIP Code",
      "Country",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      {privacyPolicyContent.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.description.map((desc, idx) => (
            <p key={idx} className="mb-4">
              {desc}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
