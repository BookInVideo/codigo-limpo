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
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this._isCommonItem(this.items[i]) && this.items[i].quality > 0) {
        this.items[i].quality = this.items[i].quality - 1;
      } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          
          if (this._shouldIncrementQualityByTwo(this.items[i])) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this._shouldIncrementQualityByThree(this.items[i])) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      } else if (this.items[i].name == 'Aged Brie' && this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }


      
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  _isCommonItem(item) {
    return (
      item.name != 'Aged Brie' && 
      item.name != 'Backstage passes to a TAFKAL80ETC concert' &&
      item.name != 'Sulfuras, Hand of Ragnaros'
    )
  }

  _shouldIncrementQualityByTwo(item) {
    return item.sellIn < 11 && item.quality < 50;
  }

  _shouldIncrementQualityByThree(item) {
    return item.sellIn < 6 && item.quality < 50
  }
}

module.exports = {
  Item,
  Shop
}
