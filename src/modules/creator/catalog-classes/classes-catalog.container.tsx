import { useClassesCatalog } from '../hooks/useClassesCatalog';
import { ClassesCatalogComponent } from './classes-catalog.component';

export const ClassesCatalog = () => {
  const classesCatalog = useClassesCatalog();
  return (
    <ClassesCatalogComponent
      title={classesCatalog.data?.creator?.classes_catalog.title}
      classes={classesCatalog.data?.creator?.classes_catalog.classes || []}
    />
  );
};
