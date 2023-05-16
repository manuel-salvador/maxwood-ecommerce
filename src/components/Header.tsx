import { BurgerMenuIcon, CartIcon, SearchIcon } from '@/components/shared/Icons';

export default function Header() {
  return (
    <header className="bg-white z-10 h-16 shadow-md px-6 fixed w-full flex items-center justify-between">
      <p className="font-bold text-2xl">MaxWood</p>
      <div className="flex items-center gap-4">
        <SearchIcon />
        <CartIcon />
        <BurgerMenuIcon />
      </div>
    </header>
  );
}
