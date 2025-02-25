import React from "react";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <blockquote className="italic">
        <p className="text-lg mb-4">
          <strong>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</strong> -{" "}
          {process.env.NEXT_PUBLIC_TAG_LINE}
        </p>
        <p className="mb-4">
          Welcome to <strong>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</strong>,
          your go-to resource for{" "}
          <strong>
            personal finance insights, loan information, credit card guides, and
            financial tools
          </strong>
          . We strive to simplify complex financial concepts and help you make
          informed money decisions.
        </p>
        <p className="mb-4">
          Our blog features{" "}
          <strong>
            expert advice, financial calculators, and step-by-step guides
          </strong>{" "}
          to empower you with the knowledge to manage your money wisely. Whether
          you're looking for the best loan options, credit card comparisons, or
          investment strategies, we've got you covered.
        </p>
        <p className="mb-4">
          Explore our <strong>free financial tools and calculators</strong> to
          estimate loans, interest rates, credit card rewards, and more. Stay
          informed, take control of your finances, and build a secure financial
          future with us.
        </p>
        <p>By -</p>
        <p>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</p>
        <p>Last Updated: 25 Feb 2025</p>
      </blockquote>
    </div>
  );
};

export default AboutPage;
