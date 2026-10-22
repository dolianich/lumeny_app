import SectionTitle from '../components/SectionTitle/SectionTitle';
import CardsSection from '../components/CardsSection/CardsSection';
import courses from '../mockData/data';

import type { LessonsList } from '../types/types';

const CoursesPage = () => {
  
  return (
    <div>
      {courses?.map((course) => (
        <div>
          <SectionTitle
            key={course.id}
            title={course.title}
            description={course.description}
          />
          <CardsSection lessons={course.lessons as LessonsList} />
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
