import Navigation from "../Navigation";
import classe from "./layout.module.css";
import useStore from "@/store";

function Layout({ children }) {
  const isDarkTheme = useStore(state => state.isDarkTheme);

  return (
    <div className={classe.layoutContainer}>
      <header>
        <Navigation />
      </header>

      <main className={classe.mainContent}>
        {children}
      </main>

      <footer className={`${classe.footer} ${isDarkTheme ? classe.dark : classe.light}`}>
        <p>Art Gallery - Ritterstraße 12-14, 10969 Berlin - &copy; 2023</p>
      </footer>
    </div>
  );
}

export default Layout;
