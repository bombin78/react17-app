import { lazy } from 'react';

// !!! Импортируемый внутри lazy() компонент должен экспортироваться из файла по дефолту
export const MainPageAsync = lazy(() => import('../ui/MainPage'));
