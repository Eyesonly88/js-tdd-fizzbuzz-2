if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['c:\\Users\\Mohammed\\Documents\\GitHub\\js-tdd-fizzbuzz\\test\\fizzbuzz.js']) {
   __coverage__['c:\\Users\\Mohammed\\Documents\\GitHub\\js-tdd-fizzbuzz\\test\\fizzbuzz.js'] = {"path":"c:\\Users\\Mohammed\\Documents\\GitHub\\js-tdd-fizzbuzz\\test\\fizzbuzz.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":31}}},"2":{"name":"(anonymous_2)","line":5,"loc":{"start":{"line":5,"column":22},"end":{"line":5,"column":40}}},"3":{"name":"(anonymous_3)","line":11,"loc":{"start":{"line":11,"column":21},"end":{"line":11,"column":39}}},"4":{"name":"(anonymous_4)","line":17,"loc":{"start":{"line":17,"column":29},"end":{"line":17,"column":47}}},"5":{"name":"(anonymous_5)","line":23,"loc":{"start":{"line":23,"column":14},"end":{"line":23,"column":26}}},"6":{"name":"(anonymous_6)","line":26,"loc":{"start":{"line":26,"column":17},"end":{"line":26,"column":29}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":41,"column":3}},"2":{"start":{"line":2,"column":1},"end":{"line":2,"column":14}},"3":{"start":{"line":3,"column":1},"end":{"line":40,"column":5}},"4":{"start":{"line":6,"column":3},"end":{"line":8,"column":4}},"5":{"start":{"line":7,"column":4},"end":{"line":7,"column":16}},"6":{"start":{"line":9,"column":3},"end":{"line":9,"column":16}},"7":{"start":{"line":12,"column":3},"end":{"line":14,"column":4}},"8":{"start":{"line":13,"column":4},"end":{"line":13,"column":16}},"9":{"start":{"line":15,"column":3},"end":{"line":15,"column":16}},"10":{"start":{"line":18,"column":3},"end":{"line":20,"column":4}},"11":{"start":{"line":19,"column":4},"end":{"line":19,"column":16}},"12":{"start":{"line":21,"column":3},"end":{"line":21,"column":16}},"13":{"start":{"line":24,"column":3},"end":{"line":24,"column":31}},"14":{"start":{"line":27,"column":3},"end":{"line":37,"column":4}},"15":{"start":{"line":28,"column":4},"end":{"line":36,"column":5}},"16":{"start":{"line":29,"column":5},"end":{"line":29,"column":34}},"17":{"start":{"line":30,"column":11},"end":{"line":36,"column":5}},"18":{"start":{"line":31,"column":5},"end":{"line":31,"column":30}},"19":{"start":{"line":32,"column":11},"end":{"line":36,"column":5}},"20":{"start":{"line":33,"column":5},"end":{"line":33,"column":30}},"21":{"start":{"line":35,"column":5},"end":{"line":35,"column":27}},"22":{"start":{"line":38,"column":3},"end":{"line":38,"column":23}}},"branchMap":{"1":{"line":6,"type":"if","locations":[{"start":{"line":6,"column":3},"end":{"line":6,"column":3}},{"start":{"line":6,"column":3},"end":{"line":6,"column":3}}]},"2":{"line":12,"type":"if","locations":[{"start":{"line":12,"column":3},"end":{"line":12,"column":3}},{"start":{"line":12,"column":3},"end":{"line":12,"column":3}}]},"3":{"line":18,"type":"if","locations":[{"start":{"line":18,"column":3},"end":{"line":18,"column":3}},{"start":{"line":18,"column":3},"end":{"line":18,"column":3}}]},"4":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":7},"end":{"line":18,"column":37}},{"start":{"line":18,"column":41},"end":{"line":18,"column":72}}]},"5":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":4},"end":{"line":28,"column":4}},{"start":{"line":28,"column":4},"end":{"line":28,"column":4}}]},"6":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":11},"end":{"line":30,"column":11}},{"start":{"line":30,"column":11},"end":{"line":30,"column":11}}]},"7":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":11},"end":{"line":32,"column":11}},{"start":{"line":32,"column":11},"end":{"line":32,"column":11}}]}}};
}
var __cov_NGqNRFe3kH_$gp9WAaW73A = __coverage__['c:\\Users\\Mohammed\\Documents\\GitHub\\js-tdd-fizzbuzz\\test\\fizzbuzz.js'];
__cov_NGqNRFe3kH_$gp9WAaW73A.s['1']++;YUI.add('fizzbuzz',function(Y){__cov_NGqNRFe3kH_$gp9WAaW73A.f['1']++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['2']++;'use strict';__cov_NGqNRFe3kH_$gp9WAaW73A.s['3']++;Y.FizzBuzz={numbers:[],isDivisibleByThree:function(number){__cov_NGqNRFe3kH_$gp9WAaW73A.f['2']++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['4']++;if(number%3===0){__cov_NGqNRFe3kH_$gp9WAaW73A.b['1'][0]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['5']++;return true;}else{__cov_NGqNRFe3kH_$gp9WAaW73A.b['1'][1]++;}__cov_NGqNRFe3kH_$gp9WAaW73A.s['6']++;return false;},isDivisibleByFive:function(number){__cov_NGqNRFe3kH_$gp9WAaW73A.f['3']++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['7']++;if(number%5===0){__cov_NGqNRFe3kH_$gp9WAaW73A.b['2'][0]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['8']++;return true;}else{__cov_NGqNRFe3kH_$gp9WAaW73A.b['2'][1]++;}__cov_NGqNRFe3kH_$gp9WAaW73A.s['9']++;return false;},isDivisibleByFiveAndThree:function(number){__cov_NGqNRFe3kH_$gp9WAaW73A.f['4']++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['10']++;if((__cov_NGqNRFe3kH_$gp9WAaW73A.b['4'][0]++,this.isDivisibleByFive(number))&&(__cov_NGqNRFe3kH_$gp9WAaW73A.b['4'][1]++,this.isDivisibleByThree(number))){__cov_NGqNRFe3kH_$gp9WAaW73A.b['3'][0]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['11']++;return true;}else{__cov_NGqNRFe3kH_$gp9WAaW73A.b['3'][1]++;}__cov_NGqNRFe3kH_$gp9WAaW73A.s['12']++;return false;},getNumbers:function(){__cov_NGqNRFe3kH_$gp9WAaW73A.f['5']++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['13']++;return this.createNumbers();},createNumbers:function(){__cov_NGqNRFe3kH_$gp9WAaW73A.f['6']++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['14']++;for(var i=0;i<100;i++){__cov_NGqNRFe3kH_$gp9WAaW73A.s['15']++;if(this.isDivisibleByFiveAndThree(i+1)){__cov_NGqNRFe3kH_$gp9WAaW73A.b['5'][0]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['16']++;this.numbers[i]='FizzBuzz';}else{__cov_NGqNRFe3kH_$gp9WAaW73A.b['5'][1]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['17']++;if(this.isDivisibleByThree(i+1)){__cov_NGqNRFe3kH_$gp9WAaW73A.b['6'][0]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['18']++;this.numbers[i]='Fizz';}else{__cov_NGqNRFe3kH_$gp9WAaW73A.b['6'][1]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['19']++;if(this.isDivisibleByFive(i+1)){__cov_NGqNRFe3kH_$gp9WAaW73A.b['7'][0]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['20']++;this.numbers[i]='Buzz';}else{__cov_NGqNRFe3kH_$gp9WAaW73A.b['7'][1]++;__cov_NGqNRFe3kH_$gp9WAaW73A.s['21']++;this.numbers[i]=i+1;}}}}__cov_NGqNRFe3kH_$gp9WAaW73A.s['22']++;return this.numbers;}};});