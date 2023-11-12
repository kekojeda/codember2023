const MESSAGE = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

const challenge2 = () => {
    const messageArray = MESSAGE.split("")

    let num = 0;
    let result = ""

    messageArray.map((char) => {
        char === "#" && num++;
        char === "@" && num--;
        char === "*" && (num = num * num);
        char === "&" && (result = result + num.toString());
    })

    console.log(result)
}

challenge2()