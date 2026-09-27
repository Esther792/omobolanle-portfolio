// Source: corrected Phase 5 workbook, P3_Cholera_Weekly_Signal!A2:I27.
// Values are preserved as reported; absent initial thresholds are not zeroes.
export const weekly = [
  [1,18,0,null,null],[2,7,0,null,null],[3,1,0,null,null],[4,5,0,null,null],
  [5,18,2,7.75,20.35],[6,6,0,7.75,20.35],[7,10,0,7.5,20.18],[8,4,0,9.75,19.99],
  [9,5,0,9.5,20.22],[10,5,1,6.25,10.81],[11,7,1,6,10.7],[12,5,0,5.25,7.43],
  [13,6,0,5.5,7.24],[14,4,0,5.75,7.41],[15,12,0,5.5,7.74],[16,36,3,6.75,12.97],
  [17,9,0,14.5,40.02],[18,5,0,15.25,39.89],[19,8,0,15.5,39.68],[20,5,0,14.5,39.5],
  [21,1,1,6.75,10.33],[22,10,1,4.75,9.73],[23,10,1,6,12.78],[24,8,0,6.5,14.04],
  [25,3,0,7.25,14.65],[26,9,0,7.75,13.47],
] as const;

// PPT_Disease_Summary!A2:D5 and PPT_Age_Summary!A2:B9.
export const diseases = [
  {name:'Measles',cases:366,cfr:'1.1%'}, {name:'Cholera',cases:217,cfr:'4.6%'},
  {name:'Meningitis',cases:70,cfr:'7.1%'}, {name:'Lassa fever',cases:43,cfr:'16.3%'},
];
export const ages = [['0–4',92],['5–14',129],['15–24',167],['25–34',154],['35–44',91],['45–54',44],['55–64',16],['65+',3]] as const;
export const capabilities = ['Data quality assessment','Descriptive epidemiology','Person-place-time analysis','CFR interpretation','Signal detection','Reporting-timeliness assessment','Operational prioritization','Public-health decision support'];
