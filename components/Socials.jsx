import Link from "next/link";

import { RiGithubLine, RiLinkedinLine, RiCodepenLine } from "react-icons/ri";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/harsh4477",
    Icon: RiGithubLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/harshpatel05/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Codepen",
    link: "https://codepen.io/harsh0501",
    Icon: RiCodepenLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={` transition-all duration-300 hover:text-accent`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
