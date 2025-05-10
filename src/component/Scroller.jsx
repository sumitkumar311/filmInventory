import { useEffect , useState } from "react"


const Scroller = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div> {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-white text-black px-3 cursor-pointer py-2 rounded-full shadow-md hover:bg-gray-300 transition-all"
          title="Go to Top"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      )}</div>
  )
}

export default Scroller