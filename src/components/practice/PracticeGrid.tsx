import { practiceAreas } from '../../data/practiceAreas';
import PracticeCard from './PracticeCard';

export default function PracticeGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {practiceAreas.map((area, index) => (
        <PracticeCard key={area.slug} area={area} index={index} />
      ))}
    </div>
  );
}
