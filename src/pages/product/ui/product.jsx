import { HeaderProfile } from "@widgets/headerProfile";
import { Button } from "../../../shared/ui/button";
import Dropbox from "@shared/ui/icons/companies/dropbox";
import Check from "../../../shared/ui/icons/check/check";

export const ProductPage = () => {
  return (
    <div className="w-full h-full">
      <HeaderProfile title="Описание вакансии" />
      <div className="container-2">
        <section className="pb-[32px] border-b border-b-gray">
          <div className="flex flex-col border border-gray mt-[32px] p-[24px]">
            <div className="flex items-center justify-between">
              <div className="bg-white flex justify-between items-center w-[450px] p-[16px]">
                <Dropbox />
                <div>
                  <p className="text-[32px] text-second font-semibold">
                    Ассистент по социальным медиа
                  </p>
                  <div className="flex items-center text-lg text-link gap-[20px]">
                    <p>Stripe</p>
                    <p>Париж, Франция</p>
                    <p>Полная занятость</p>
                  </div>
                </div>
              </div>
              <Button
                label="Подать заявку"
                className="bg-button w-[164px] h-[57px] py-[14px] px-[56px]"
                labelStyle="text-white"
              />
            </div>
          </div>
        </section>
        <section className="p-[32px]">
          <div className="flex flex-1 gap-[32px]">
            <div className="flex flex-col gap-[40px] w-[815px]">
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">Описание</h3>
                <p className="text-sm text-link font-[400]">
                  Stripe ищет эксперта по маркетингу в социальных сетях для
                  помощи в управлении нашими онлайн-сетями. Вы будете
                  ответственны за мониторинг наших социальных медиа-каналов,
                  создание контента, поиск эффективных способов взаимодействия с
                  сообществом и стимулирования других к активному участию в
                  наших каналах.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">
                  Обязанности
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Взаимодействие с сообществом для поддержки его и активного
                      представления в онлайне
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Фокус на разработке и публикации контента в социальных
                      медиа
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Поддержка маркетинга и стратегии
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Следить за тенденциями в социальных медиа и предлагать
                      идеи контента команде
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Взаимодействие с онлайн-сообществами
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">Кто вы</h3>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Вы получаете энергию от людей и создания идеальной рабочей
                      среды
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      У вас есть чувство прекрасных пространств и офисного опыта
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Вы уверенный офисный менеджер, готовый к дополнительным
                      обязанностям
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Вы ориентированы на детали и креативны
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Вы маркетолог по росту и знаете, как вести кампании
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-xl text-second font-semibold">
                  Плюсом будет
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Свободное владение английским языком
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Навыки управления проектами
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Check />
                    <p className="text-sm text-link font-[400]">
                      Навыки редактирования текстов
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-[24px] border-b border-b-gray pb-[40px]">
                <h3 className="text-xl text-second font-semibold">Категории</h3>
                <div className="flex gap-[8px]">
                  <span className="py-[6px] px-[16px] bg-lightYellow text-yellow text-xs rounded-[80px]">
                    Маркетинг
                  </span>
                  <span className="py-[6px] px-[16px] bg-lightGreen text-green text-xs rounded-[80px]">
                    Дизайн
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <h3 className="text-xl text-second font-semibold">
                  Требуемые навыки
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                    Управление проектами
                  </span>
                  <div className="flex gap-[8px]">
                    <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                      Копирайтинг
                    </span>
                    <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                      Английский
                    </span>
                  </div>
                  <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                    Маркетинг в социальных медиа
                  </span>
                  <span className="py-[6px] w-fit px-[16px] bg-input text-primary text-sm font-[400] rounded-[80px]">
                    Редактирование текстов
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
