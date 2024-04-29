          ymaps.ready(init);

function init() {
    // Создаем карту с центром в Беларуси
    var myMap = new ymaps.Map("map", {
        center: [53.7098, 27.9534], // Координаты центра карты (центр Беларуси)
        zoom: 7 // Масштаб карты
    });

    // Массив санаториев и их координат
    var sanatoriums = [
        { name: "Санаторий Надежда", coordinates: [54.507838, 26.814569] },
        { name: "Санаторий Налибокская пуща", coordinates: [54.002106, 26.688861] },
        { name: "Санаторий Жемчужина", coordinates: [53.640172, 23.848298] },
        { name: "Санаторий Зубрёнок", coordinates: [54.800203, 26.785496] }
    ];

    // Добавляем метки на карту для каждого санатория
    for (var i = 0; i < sanatoriums.length; i++) {
        var sanatorium = sanatoriums[i];
        var placemark = new ymaps.Placemark(sanatorium.coordinates, {
            hintContent: sanatorium.name,
            balloonContent: sanatorium.name
        });
        myMap.geoObjects.add(placemark);
    }
}