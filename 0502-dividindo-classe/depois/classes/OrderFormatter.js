const { XMLBuilder } = require("fast-xml-parser");

class OrderFormatter {
    formatToXml(processedOrder) {
        const xmlBuilder = new XMLBuilder();
        const xmlString = xmlBuilder.build({ Order: processedOrder });
        return xmlString;
    }
}

module.exports = OrderFormatter;