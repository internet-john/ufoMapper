import SearchBar from "./components/searchbar/SearchBar";
import StateList from "./components/stateList/StateList";

export default function Home() {
  return (
    <main>
      <header className="text-xl">ufoMapper 🛸</header>
      <SearchBar />
      <StateList />
    </main>
  );
}
