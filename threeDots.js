const ages=[22,34,5,32,23,53]
const ages2=[34,74,54,53,20];
const ages3=[44,12,15,14,20];
const allAges=ages.concat(ages3).concat(ages2);
const allAges2=[...ages ,...ages2 ,...ages3]
console.log(allAges2)
const minister=650;
const sochib=540;
const businessMan=230;
const takaPoisa=[234,750,345];
const result=Math.max(...takaPoisa);
console.log(result)