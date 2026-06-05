import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* Footer credit */}
      <p>
        <span>▷</span> Designed and built by Anushri Pramanik with the help of Artificial Intelligence &copy; {currentYear}
      </p>
      <p>All views are my own</p>
    </footer>
  );
};

export default Footer;
