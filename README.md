# Приложение по выводу погоды по запросу юзера

![PR Sanity Check](https://github.com/RomanMenderov/js-myweather/workflows/PR%20Sanity%20Check/badge.svg)
![Add codesandbox link](https://github.com/RomanMenderov/js-myweather/workflows/Add%20codesandbox%20link/badge.svg)
[![codecov](https://codecov.io/gh/RomanMenderov/js-myweather/branch/addweathermap/graph/badge.svg?token=TWVNITZ00C)](https://codecov.io/gh/RomanMenderov/js-myweather)

При заходе юзера на страницу отрисовывается верстка функцией `addWeatherForm`
запускается поиск истории пользователя `getUserHistory` и ее отрисовка `showUserHistory`
помимо этого мы сразу отображаем текущее местоположение и погоду `showMyWeather`

Для получения погоды используется функция `getWeatherCity` что принимает название города
Название города получаем в функции `getUserCity`

Получаем карту в функции `getMapCityUrl` по координатам полученным в `getWeatherCity`
