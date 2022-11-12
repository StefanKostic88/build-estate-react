import CostumeLink from "../UI/CostumeLink/CostumeLink.js";
import classes from "./Footer.module.css";

const Footer = () => {
  const footerLinkData = [
    "Home",
    "About",
    "Services",
    "Stats",
    "Agents",
    "Reserved",
  ].map((el, index) => {
    return (
      <li key={index}>
        <CostumeLink class="footer-link" href="link">
          {el}
        </CostumeLink>
      </li>
    );
  });

  const copyRightYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <ul>{footerLinkData}</ul>
      <div>
        <h3 className={classes.copy}>
          <span> &#169;</span>
          {copyRightYear} Build Estate, All Rights Reserved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
