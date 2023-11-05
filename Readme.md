

## Завдання «Пошук країн»

Створи базову маршрутизацію для застосунку пошуку і зберігання країн.

## API REST COUNTRIES

Для бекенду використовуй [[REST COUNTRIES]](https://restcountries.com/). У цій
роботі будуть використовуватися наступні ендпоінти.

- [/v3.1/region/europe](https://restcountries.com/v3.1/subregion/europe) перелік
  країн Європи для створення колекції на головній сторінці.
- [/v3.1/region/{region}](https://restcountries.com/#api-endpoints-v3-region)
  пошук країни по регіону на сторінці пошуку країн.
- [/v3.1/name/{name}](https://restcountries.com/#api-endpoints-v3-name) запит на
  повну інформацію про країну для сторінки країни.

## Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` - компонент `<Home>`, домашня сторінка зі переліком Європейських країн.
- `'/country'` - компонент `<CountrySearch>`, сторінка пошуку країн по регіону.
- `'/country/:countryId'` - компонент `<Country>`, сторінка з детальною
  інформацією про країну

## Програмна навігація

В застосунку повинно бути передбачена кнопка `Повернутись назад`, а також
редирект при некоректному введенні країни
