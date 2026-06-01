interface CaseFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CaseFilter({ categories, activeCategory, onCategoryChange }: CaseFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 text-sm font-ui tracking-wide rounded-full border transition-all duration-300 ${
            activeCategory === cat
              ? 'bg-gold text-obsidian border-gold'
              : 'bg-transparent text-gray-light border-gold/20 hover:border-gold/50 hover:text-gold'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
