import LogoWhite from "@shared/ui/icons/logo/logoWhite";

export const Footer = () => {
  return (
    <footer className="bg-footer py-[64px]">
      <div className="container">
        <div className="flex justify-between items-center mb-[42px] pb-[38px] border-b-[1px] border-b-[#fff]">
          <LogoWhite />
          <div>
            <p className="text-sm text-end text-gray w-[340px]">
              Отличная платформа для поиска работы для тех, кто увлечен
              стартапами. Найдите свою мечту о работе легче.
            </p>
          </div>
        </div>
        <p className="text-sm text-text">
          2021 @ JobHuntly. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
