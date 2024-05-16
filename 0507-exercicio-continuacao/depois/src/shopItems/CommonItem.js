const AbstractItem = require('./AbstractItem');

class CommonItem extends AbstractItem {
    updatedQuality(item) {
        const copy = {...item};
        copy.quality -= 1;
        if (copy.sellIn < 0) {
            copy.quality -= 1;
        }
        return this._ensureValidQuality(copy.quality);
    }
}

module.exports = CommonItem;