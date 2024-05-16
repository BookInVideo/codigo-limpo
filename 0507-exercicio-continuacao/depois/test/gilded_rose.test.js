const {Shop, Item} = require("../src/gilded_rose");

describe("Common item", function() {
  it("decrease sellIn and quality of common item", function() {
    const gildedRose = new Shop([new Item("foo", 2, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(9);
  });

  it("negative sellIn", function() {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].sellIn).toBe(-1);
  });

  it("quality never negative", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(0);
  });

  it("quality degrades by two when sellIn is over", function() {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(8);
  });

  it("quality never negative when degrades by two", function() {
    const gildedRose = new Shop([new Item("foo", -1, 1)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(0);
  });
});


describe('Backstage passes', function() {
  it('increases quality by 2 when sellIn is 10 or less', function() {
    const gildedRose = new Shop([new Item(
      "Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(12);
  });

  it('increases quality by 3 when sellIn is 5 or less', function() {
    const gildedRose = new Shop([new Item(
      "Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(13);
  });

  it('prevent exceed quality limit when increment 2', function() {
    const gildedRose = new Shop([new Item(
      "Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(50);
  });

  it('prevent exceed quality limit when increment 3', function() {
    const gildedRose = new Shop([new Item(
      "Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(50);
  });

  it('drops quality to zero after sellIn passed is negative', function() {
    const gildedRose = new Shop([new Item(
      "Backstage passes to a TAFKAL80ETC concert", 0, 50)]);
    const items = gildedRose.updateItems();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  })

  it('prevent quality to pass the limit', function() {
    const gildedRose = new Shop([new Item(
      "Backstage passes to a TAFKAL80ETC concert", 1, 50)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(50);
  })
});

describe('Sulfuras', function() {
  it('immutable', function() {
    const gildedRose = new Shop([new Item(
      "Sulfuras, Hand of Ragnaros", 10, 80)]);
    gildedRose.updateItems();
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(10);
  });
})

describe('Aged brie', function() {
  it('increases in Quality the older it gets', function() {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(11);
  });

  it('never exceed quality limit', function() {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(50);
  });

  it('increases quality by 2 when sellIn days passed', function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(12);
  });

  it('prevent exceed quality limit when increment 2', function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 49)]);
    const items = gildedRose.updateItems();
    expect(items[0].quality).toBe(50);
  });
})