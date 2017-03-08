function Logic() {
    var data = {
        arX : null,
        arY : null,
        maxY:null,
        minY:null
    };
    var e = 0.0001;
    this.calc = function (a, b, k) {
        data.arX = [];
        data.arY = [];
        while(a<=b+e){
            data.arX.push(a);
            data.arY.push(f(a));
            a+=k;
        }
        
    };
    
    this.getMaxY = function () {
        if(data.arY ==( null || [])) return undefined;
        var max = data.arY[0];
        var index = 0;
        for (var i = 1; i < data.arY.length; i++) {
            if(data.arY[i]>max){
                max=data.arY[i];
                index = i;
            }
        }
        data.maxY = index;
        return index;
    };

    this.getMinY = function () {
        if(data.arY == (null || [])) return undefined;
        var min = data.arY[0];
        var index = 0;
        for (var i = 1; i < data.arY.length; i++) {
            if(data.arY[i]<min){
                min=data.arY[i];
                index = i;
            }
        }
        data.minY = index;
        return index;
    };
    
    this.init = function (a, b, k) {
        this.calc(a,b,k);
        this.getMaxY()
        this.getMinY();
    };
    
    this.getData = function () {
        return data;
    };
    
    function f(x) {
        var t = 2.2;
        if (x < 0.9) {
            return (Math.pow(Math.log(x), 3) + x * x ) / Math.sqrt(x + t);
        }
        if (x > 0.9 - e && x < 0.9 + e) {
            return Math.sqrt(x + t) + 1 / x;
        }
        if (x > 0.9) {
            return Math.cos(x) + Math.sin(x) * Math.sin(x)*t;
        }
    }

    this.getArY = function () {
        return data.arY;
    };
    this.getArX = function () {
        return data.arX;
    };
}

module.exports = new Logic();
