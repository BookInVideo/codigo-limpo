class AbstractItem {
  updatedSellIn(item) {
    return item.sellIn - 1;
  }

  _ensureValidQuality(quality) {
    if (quality < 0)
      return 0;
    else if (quality > 50) 
      return 50;
    else 
      return quality;
  }
}

module.exports = AbstractItem;