
class FrameworkHelpers {

    public ExtractJsonData(JsonKey1: string, JsonKey2?: string) {
        if (JsonKey2 != undefined) {
            const fs = require('fs');
            let RawData = fs.readFileSync('src/test-data/Test.json');
            var testData = JSON.parse(RawData);
            var result = testData[JsonKey1][JsonKey2];
            console.log(result);
        }
        else {
            const fs = require('fs');
            let RawData = fs.readFileSync('src/test-data/Test.json');
            var testData = JSON.parse(RawData);
            var result = testData[JsonKey1];
            console.log(result);
        }
        return result;
    }
} export default new FrameworkHelpers();