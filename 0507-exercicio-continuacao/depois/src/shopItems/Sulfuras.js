const AbstractItem = require('./AbstractItem');

class Sulfuras extends AbstractItem {
  updatedSellIn(item) {
    return item.sellIn;
  }

  updatedQuality(item) {
    return item.quality;
  }
}

module.exports = Sulfuras;