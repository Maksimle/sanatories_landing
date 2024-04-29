// Путь к XML файлу
const xmlFilePath = "data.xml";

// Функция для загрузки XML из файла
function loadXMLDoc(filePath) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(this);
        }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
}

// Функция для разбора XML
function parseXML(xml) {
    const xmlDoc = xml.responseXML;
    const tags = xmlDoc.getElementsByTagName("tag");
    const tagsContainer = document.getElementById("tagsContainer");

    // Создание HTML элементов
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        const name = tag.getElementsByTagName("name")[0].textContent;
        const description = tag.getElementsByTagName("description")[0].textContent;
        const link = tag.getElementsByTagName("link")[0].textContent;

        const tagElement = document.createElement("a");
        tagElement.href = link;
        tagElement.classList.add("tag");

        const nameElement = document.createElement("h5");
        nameElement.textContent = name;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;

        tagElement.appendChild(nameElement);
        tagElement.appendChild(descriptionElement);
        tagsContainer.appendChild(tagElement);
    }
}

// Загрузка XML из файла
loadXMLDoc(xmlFilePath);