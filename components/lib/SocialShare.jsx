import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { Button } from "../ui/button";

const socialMedia = [
  {
    href: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    icon: <FaFacebook size={28} />,
  },
  {
    href: `https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    icon: <FaTwitter size={28} />,
  },
  {
    href: `https://t.me/share/url?url=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    icon: <FaTelegram size={28} />,
  },
  {
    href: `https://wa.me/?text=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    icon: <FaWhatsapp size={28} />,
  },
];

const SocialSharePage = () => {
  return (
    <div className="p-4 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 dark:text-white  max-w-xs">
      {socialMedia.map((media, index) => (
        <Link href={media.href} passHref key={index}>
          <Button className="flex items-center justify-center space-x-2 px-2 py-2 dark:bg-blue-600  text-white  transition-colors rounded shadow">
            {media.icon}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default SocialSharePage;
