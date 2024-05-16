const CommonItem = require('./shopItems/CommonItem');
const Sulfuras = require('./shopItems/Sulfuras');
const AgedBrie = require('./shopItems/AgedBrie');
const BackstagePasses = require('./shopItems/BackstagePasses');

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateItems() {
    this.items.forEach((item) => {
      const shopItem = this._createShopItem(item.name);
      item.sellIn = shopItem.updatedSellIn(item);
      item.quality = shopItem.updatedQuality(item);
    })

    return this.items;
  }

  _createShopItem(itemName) {
    switch(itemName) {
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePasses();
      case 'Aged Brie':
        return new AgedBrie();
      case 'Sulfuras, Hand of Ragnaros':
        return new Sulfuras();
      default:
        return new CommonItem();
    }
  }
}

module.exports = {
  Item,
  Shop
}
