export default function GenerateSalt() {
    var res = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charL = chars.length;
    for (var i = 0; i < 64; i++) {
        res += chars.charAt(Math.floor(Math.random() * charL));
    }
    return res;
}