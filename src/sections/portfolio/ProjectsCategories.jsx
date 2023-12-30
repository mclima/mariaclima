import { useState, useEffect } from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({ categories, onFilterProjects, initialCategory }) => {
const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');

  useEffect(() => {
    setActiveCategory(initialCategory || 'all');
  }, [initialCategory]);

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className='portfolio__categories'>
      {categories.map(category => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
