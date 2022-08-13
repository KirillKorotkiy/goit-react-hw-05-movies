import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <ul>
      <NavigationLink className='color' to="/">Home</NavigationLink>
      <NavigationLink className='color' to="/movies">Movies</NavigationLink>
    </ul>
  );
};