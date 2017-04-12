var all = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.#-?").split('');

function encrypt(str) {
    var sEncode = str.split('');
    var result = '';
    var oKey = "Pio";
    for (var i = 0; i < sEncode.length; i++) {
        result += all[(all.indexOf(sEncode[i]) - all.indexOf(oKey) + all.length - 1) % all.length];
        oKey = sEncode[i];
    }
    return result;
}

function decrypt(str) {
    var sEncode = str.split('');
    var result = '';
    var oKey = "Pio";
    for (var i = 0; i < sEncode.length; i++) {
        oKey = all[(all.indexOf(sEncode[i]) + all.indexOf(oKey) + 1) % all.length];
        result += oKey;
    }
    return result;
}