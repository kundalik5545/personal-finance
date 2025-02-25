import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact Us",
};

const ContactUsPage = () => {
  return (
    <div className="contact-us min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="italic">
        <p className="text-lg mb-4">
          <strong>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</strong> -{" "}
          {process.env.NEXT_PUBLIC_TAG_LINE}
        </p>
        <p className="mb-4">
          Have{" "}
          <strong>
            questions about loans, credit cards, or personal finance?
          </strong>{" "}
          We are here to help! Whether you're looking for the
          <strong>
            {" "}
            best financial tools, loan comparisons, or investment strategies
          </strong>{" "}
          , our team is dedicated to providing{" "}
          <strong>accurate, reliable, and up-to-date financial insights</strong>
          .
        </p>
        <p className="mb-4">
          At <strong>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</strong>, we believe
          in <strong>financial empowerment</strong>. Our mission is to simplify
          complex financial topics so you can make informed decisions with
          confidence.
        </p>
        <div>
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p>
            If you have any questions, suggestions, or feedback, feel free to
            reach out to us at:
          </p>
          <p>
            Email:{" "}
            <Link
              className="underline text-blue-500"
              href={`mailto:${process.env.NEXT_PUBLIC_MAIL}`}
              aria-label="Contact via Email"
            >
              Contact Us
            </Link>
          </p>
        </div>
        <p className="pt-3">By -</p>
        <p>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</p>
      </div>
    </div>
  );
};

export default ContactUsPage;
