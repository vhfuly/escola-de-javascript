
module.exports = {
    
    get oneUA(){ return 149587870},

    converter(valueUA) {
        return valueKm = valueUA * this.oneUA
    }
}
