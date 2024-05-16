const AbstractItem = require('./AbstractItem');

class BackstagePasses extends AbstractItem {
  updatedQuality(item) {
    const itemCopy = {...item};

    if (itemCopy.sellIn < 0)
      itemCopy.quality = 0;
    else
      itemCopy.quality = this._calcQuality(itemCopy)

    return this._ensureValidQuality(itemCopy.quality);
  }

  _calcQuality(item) {
    let result = item.quality + 1;
    if (item.sellIn < 11)
      result += 1;
    if (item.sellIn < 6)
      result += 1;
    return result;
  }
}

module.exports = BackstagePasses;