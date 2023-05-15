const zodiac = document.getElementById("zodiac");

const backColor = document.body;

const changeBackground = () =>
{
     switch (zodiac.value)
     {
        case "aries":
            backColor.style.backgroundColor = "red";
        break;

        case "taurus":
            backColor.style.backgroundColor = "yellowgreen";
        break;

        case "capricorn":
            backColor.style.backgroundColor = "orange";
        break;

        case "sagittarius":
            backColor.style.backgroundColor = "pink";
        break;

        case "leo":
            backColor.style.backgroundColor = "yellow";
        break;

        case "libra":
            backColor.style.backgroundColor = "aqua";
        break;

        case "virgo":
            backColor.style.backgroundColor = "aquamarine";
        break;

        case "pisces":
            backColor.style.backgroundColor = "violet";
        break;

        case "aquarius":
            backColor.style.backgroundColor = "brown";
        break;

        case "scorpio":
            backColor.style.backgroundColor = "grey";
        break;

        case "cancer":
            backColor.style.backgroundColor = "aliceblue";
        break;

        case "gemini":
            backColor.style.backgroundColor = "black";
        break;


        default:
            backColor.style.backgroundColor = "white";
            break;
     }

}