"use client";
import { useState, useCallback } from "react";

export default function SoapCustomizer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [ingredient, setIngredient] = useState("Neem & Tulsi (Purifying)");
  const [customIngredient, setCustomIngredient] = useState("");

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
  }, []);

  const handleApply = useCallback(() => {
    if (!selectedShape || !selectedWeight) {
      alert("Please select both a shape and a weight.");
      return;
    }
    let ing = ingredient;
    if (ingredient === "custom") {
      ing = customIngredient.trim();
      if (!ing) {
        alert("Please enter your custom ingredient.");
        return;
      }
    }
    const msg = `Hello! I would like to order a custom Artisan Soap.\n\nShape: ${selectedShape}\nWeight: ${selectedWeight}\nIngredient: ${ing}`;
    navigator.clipboard.writeText(msg).then(() => {
      alert("Your custom order details have been copied to your clipboard!\n\nJust Paste (Ctrl+V or Long-Press) them in our Instagram chat to send your order.");
      window.location.href = "https://ig.me/m/_green.herbalz_";
    }).catch(() => {
      window.location.href = "https://ig.me/m/_green.herbalz_";
    });
  }, [selectedShape, selectedWeight, ingredient, customIngredient]);

  const shapes = ["Oval", "Square", "Round"];
  const weights = ["50g", "100g", "150g"];
  const ingredients = [
    "Neem & Tulsi (Purifying)",
    "Sandalwood & Turmeric (Glowing)",
    "Aloe Vera & Mint (Cooling)",
    "Charcoal & Tea Tree (Detox)",
  ];

  return (
    <>
      <section className="py-20 md:py-32 px-4 md:px-8 max-w-screen-2xl mx-auto bg-surface-container-lowest" id="soaps">
        <div className="flex flex-col gap-12 items-center text-center">
          <div className="reveal">
            <span className="text-tertiary-fixed-dim uppercase tracking-[0.2em] text-[10px] font-bold mb-3 block">
              Bespoke Cleansing
            </span>
            <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6 italic">
              Artisan Soaps.
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-10 leading-relaxed font-light px-4 max-w-2xl mx-auto">
              Discover our new collection of handcrafted botanical soaps. Tailor
              your cleansing ritual by choosing your preferred shape, weight, and
              key botanical ingredients.
            </p>
            <button
              onClick={openDrawer}
              className="mx-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all btn-magnetic font-label text-sm uppercase tracking-widest shadow-xl"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Customize Options
            </button>
          </div>
          <div className="w-full max-w-4xl relative aspect-video rounded-3xl overflow-hidden reveal-scale shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d2e5ce] to-[#526351]"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white/80 font-headline italic text-3xl md:text-4xl">
              Handcrafted
            </div>
          </div>
        </div>
      </section>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[85%] sm:w-96 bg-surface z-[110] transform transition-transform duration-500 shadow-2xl flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-surface-container">
          <h2 className="font-headline text-2xl text-primary flex items-center gap-2">
            <span className="material-symbols-outlined">dashboard</span>
            Customize Soap
          </h2>
          <button onClick={closeDrawer} className="text-on-surface-variant hover:text-primary text-xl">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-8 flex-1 overflow-y-auto">
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-on-surface">Shape</h3>
            <div className="flex gap-2">
              {shapes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedShape(s)}
                  className={`flex-1 py-3 border rounded-lg text-sm transition-colors ${
                    selectedShape === s
                      ? "bg-primary-container text-on-primary border-primary"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-on-surface">Weight</h3>
            <div className="flex flex-wrap gap-2">
              {weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-5 py-3 border rounded-lg text-sm transition-colors ${
                    selectedWeight === w
                      ? "bg-primary-container text-on-primary border-primary"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-on-surface">Main Ingredient</h3>
            <select
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="w-full p-4 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-primary focus:border-primary text-sm appearance-none cursor-pointer"
            >
              {ingredients.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
              <option value="custom">Enter your own ingredient</option>
            </select>
            {ingredient === "custom" && (
              <input
                type="text"
                value={customIngredient}
                onChange={(e) => setCustomIngredient(e.target.value)}
                placeholder="Type your custom ingredient..."
                className="w-full mt-3 p-4 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-primary focus:border-primary text-sm"
              />
            )}
          </div>
        </div>
        <div className="p-8 border-t border-outline-variant bg-surface-container-low">
          <button
            onClick={handleApply}
            className="w-full py-4 bg-primary text-on-primary rounded-full font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-colors btn-magnetic text-sm"
          >
            Apply &amp; Order
          </button>
        </div>
      </div>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 bg-black/50 z-[105] cursor-pointer transition-opacity duration-500"
        />
      )}
    </>
  );
}
