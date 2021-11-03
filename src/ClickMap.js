const dict = [
    {id: "STP", name: "г. Санкт-Петербург"},
    {id: "SVP", name: "г. Севастополь"},
    {id: "KRM", name: "Крымская область"},
    {id: "KAR", name: "Р. Карелия"},
    {id: "LEN", name: "Ленинградская область"},
    {id: "ADI", name: "Р. Адыгея"},
    {id: "KHK", name: "Р. Хакасия"},
    {id: "KEM", name: "Кемеровская область"},
    {id: "TOM", name: "Томская область"},
    {id: "TMR", name: "Таймырский автономный округ"},
    {id: "KYA", name: "Красноярский край"},
    {id: "VNK", name: "Эвенкийский автономный округ"},
    {id: "SAK", name: "Якутская область"},
    {id: "KHM", name: "Ханты-Мансийск автономный округ"},
    {id: "SVE", name: "Свердловская область"},
    {id: "IRK", name: "Иркутская область"},
    {id: "UST", name: "Усть-Орднский автономный округ"},
    {id: "ZBK", name: "Забакальский край"},
    {id: "ABT", name: "Агинский-Бурятский автономный округ"},
    {id: "BUR", name: "Р. Бурятия"},
    {id: "PER", name: "Пермский край"},
    {id: "KOM", name: "Р. Коми"},
    {id: "UDM", name: "Р. Удмуртия"},
    {id: "TAT", name: "Р. Татарстан"},
    {id: "MEL", name: "Р. Марий-Эл"},
    {id: "KIR", name: "Кировская область"},
    {id: "CUK", name: "Чувашская республика"},
    {id: "NIZ", name: "Нижегородская область"},
    {id: "VLA", name: "Владимирская область"},
    {id: "IVA", name: "Ивановская область"},
    {id: "KOS", name: "Костромская область"},
    {id: "YAR", name: "Ярославская область"},
    {id: "VLG", name: "Вологодская область"},
    {id: "BAK", name: "Р. Башкортостан"},
    {id: "KGN", name: "Курганская область"},
    {id: "SAM", name: "Самарская область"},
    {id: "ULY", name: "Ульяновская область"},
    {id: "SAR", name: "Саратовская область"},
    {id: "PNZ", name: "Пензенская область"},
    {id: "MOR", name: "Р. Мордовия"},
    {id: "TAM", name: "Тамбовская область"},
    {id: "RYA", name: "Рязанская область"},
    {id: "TUL", name: "Тульская область"},
    {id: "LIP", name: "Липецкая область"},
    {id: "ORL", name: "Орловская область"},
    {id: "AST", name: "Астраханская область"},
    {id: "ROS", name: "Ростовская область"},
    {id: "VGG", name: "Волгоградская область"},
    {id: "KBB", name: "Кабардино-Балкарская республика"},
    {id: "CEC", name: "Чеченская республика"},
    {id: "STA", name: "Ставропольский край"},
    {id: "KDA", name: "Краснодарский край"},
    {id: "KHA", name: "Хабаровский край"},
    {id: "YAN", name: "Ямало-Ненецкий автономный округ"},
    {id: "MOW", name: "г. Москва"},
    {id: "MOS", name: "Московская область"},
    {id: "TVE", name: "Тверская область"},
    {id: "NGR", name: "Новгородская область"},
    {id: "KLU", name: "Калужская область"},
    {id: "KGD", name: "Калининградская область"},
    {id: "CHU", name: "Чукотский автономный округ"},
    {id: "KAM", name: "Камчатский край"},
    {id: "KRK", name: "Корякский автономный округ"},
    {id: "KUI", name: "Курильские острова"},
    {id: "SHL", name: "Сахалинская область"},
    {id: "ARK", name: "Архангелская область"},
    {id: "MAG", name: "Магаданская область"},
    {id: "PRI", name: "Приморский край"},
    {id: "YEV", name: "Еврейская автономная область"},
    {id: "AMU", name: "Амурская область"},
    {id: "TYV", name: "Р. Тыва"},
    {id: "GLT", name: "Горно-Алтайская автономная область"},
    {id: "ALT", name: "Алтайский край"},
    {id: "NVS", name: "Новосибирская область"},
    {id: "TYM", name: "Тюменская область"},
    {id: "OMS", name: "Омская область"},
    {id: "CHE", name: "Челябинская область"},
    {id: "ORE", name: "Оренбургская область"},
    {id: "KLM", name: "Р. Калмыкия"},
    {id: "DAG", name: "Р. Дагестан"},
    {id: "ING", name: "Р. Ингушетия"},
    {id: "SEO", name: "Р. Северная-Осетия"},
    {id: "KCR", name: "Карачаево-Черкесская республика"},
    {id: "VOR", name: "Воронежская область"},
    {id: "BEL", name: "Бельгородская область"},
    {id: "KRS", name: "Курская область"},
    {id: "BRY", name: "Брянская область"},
    {id: "SMO", name: "Смоленская область"},
    {id: "PSK", name: "Псковская область"},
    {id: "MUR", name: "Мурманская область"},
    {id: "NEN", name: "Ненецкий автономный округ"}
];

export function ClickMap (e) {

    const idToSearch = e.target.getAttribute("id");

    function b (needId) {
        return dict.filter(item => {
                return item.id === needId
            }
        ).map(item =>{
            return item.name
        })
    }

    return(
        alert (b(idToSearch))
    )
}