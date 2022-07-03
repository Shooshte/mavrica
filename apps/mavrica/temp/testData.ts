const testData = [
  {
    bucket: '66',
    colors: [
      {
        hex: '#9d8e95',
        count: 1,
        relativeLuminance: 60.501748566739025,
      },
      {
        hex: '#8a9493',
        count: 1,
        relativeLuminance: 60.50676236406834,
      },
      {
        hex: '#9e8f88',
        count: 1,
        relativeLuminance: 60.5084768955239,
      },
      {
        hex: '#b48784',
        count: 1,
        relativeLuminance: 60.513446876914514,
      },
      {
        hex: '#899496',
        count: 1,
        relativeLuminance: 60.516108830291174,
      },
      {
        hex: '#7a979d',
        count: 1,
        relativeLuminance: 60.52049073592022,
      },
      {
        hex: '#a68b94',
        count: 1,
        relativeLuminance: 60.52514059837635,
      },
      {
        hex: '#94909e',
        count: 2,
        relativeLuminance: 60.525755905432604,
      },
      {
        hex: '#6d99a4',
        count: 1,
        relativeLuminance: 60.52839641001657,
      },
      {
        hex: '#c1827b',
        count: 1,
        relativeLuminance: 60.545066875335536,
      },
      {
        hex: '#7797a4',
        count: 1,
        relativeLuminance: 60.54747459874696,
      },
      {
        hex: '#7697a6',
        count: 2,
        relativeLuminance: 60.54965109154681,
      },
      {
        hex: '#a58c8f',
        count: 1,
        relativeLuminance: 60.55029655647138,
      },
      {
        hex: '#9a8f97',
        count: 1,
        relativeLuminance: 60.55974400294663,
      },
      {
        hex: '#7e988b',
        count: 1,
        relativeLuminance: 60.565834030550164,
      },
      {
        hex: '#a58c90',
        count: 1,
        relativeLuminance: 60.577320047281816,
      },
      {
        hex: '#7997a1',
        count: 1,
        relativeLuminance: 60.57932328582673,
      },
      {
        hex: '#7497ab',
        count: 2,
        relativeLuminance: 60.59273681879381,
      },
      {
        hex: '#7f969e',
        count: 1,
        relativeLuminance: 60.59880744006561,
      },
      {
        hex: '#a18f81',
        count: 1,
        relativeLuminance: 60.61088933659063,
      },
      {
        hex: '#95928b',
        count: 1,
        relativeLuminance: 60.614827254839696,
      },
      {
        hex: '#ac8a8b',
        count: 1,
        relativeLuminance: 60.61507895965141,
      },
      {
        hex: '#7c96a5',
        count: 2,
        relativeLuminance: 60.61746968687319,
      },
      {
        hex: '#899685',
        count: 1,
        relativeLuminance: 60.62643997263261,
      },
      {
        hex: '#869598',
        count: 1,
        relativeLuminance: 60.63149947716653,
      },
      {
        hex: '#96909c',
        count: 1,
        relativeLuminance: 60.632053234877944,
      },
      {
        hex: '#84959d',
        count: 1,
        relativeLuminance: 60.635507396607935,
      },
      {
        hex: '#8095a6',
        count: 1,
        relativeLuminance: 60.63773390746235,
      },
      {
        hex: '#92938b',
        count: 1,
        relativeLuminance: 60.642383592618174,
      },
      {
        hex: '#8e9397',
        count: 2,
        relativeLuminance: 60.65130766613005,
      },
      {
        hex: '#a48e83',
        count: 1,
        relativeLuminance: 60.673106540892846,
      },
      {
        hex: '#7c979e',
        count: 1,
        relativeLuminance: 60.68170536786063,
      },
      {
        hex: '#7a96ab',
        count: 1,
        relativeLuminance: 60.684905418292374,
      },
      {
        hex: '#a18d98',
        count: 1,
        relativeLuminance: 60.6878041182479,
      },
      {
        hex: '#86959a',
        count: 1,
        relativeLuminance: 60.69001594471254,
      },
      {
        hex: '#96909e',
        count: 1,
        relativeLuminance: 60.69253855324176,
      },
      {
        hex: '#969195',
        count: 1,
        relativeLuminance: 60.69747804828641,
      },
      {
        hex: '#93919e',
        count: 1,
        relativeLuminance: 60.71313879057395,
      },
      {
        hex: '#7398a8',
        count: 2,
        relativeLuminance: 60.718442985185305,
      },
      {
        hex: '#92938e',
        count: 1,
        relativeLuminance: 60.721058891219045,
      },
      {
        hex: '#9a8f9d',
        count: 2,
        relativeLuminance: 60.73682883361755,
      },
      {
        hex: '#7798a1',
        count: 1,
        relativeLuminance: 60.738907765786834,
      },
      {
        hex: '#6499b8',
        count: 1,
        relativeLuminance: 60.739669516127265,
      },
      {
        hex: '#7b97a2',
        count: 1,
        relativeLuminance: 60.73995547656655,
      },
      {
        hex: '#93919f',
        count: 2,
        relativeLuminance: 60.743700630315985,
      },
      {
        hex: '#949293',
        count: 1,
        relativeLuminance: 60.7465338529656,
      },
      {
        hex: '#86959c',
        count: 1,
        relativeLuminance: 60.7494242976023,
      },
      {
        hex: '#8b9499',
        count: 1,
        relativeLuminance: 60.75398146797106,
      },
      {
        hex: '#7e979c',
        count: 1,
        relativeLuminance: 60.754381541724044,
      },
      {
        hex: '#9c8f98',
        count: 1,
        relativeLuminance: 60.7638323024956,
      },
      {
        hex: '#98909b',
        count: 1,
        relativeLuminance: 60.7714568533092,
      },
      {
        hex: '#90929f',
        count: 1,
        relativeLuminance: 60.77303559091993,
      },
      {
        hex: '#82969d',
        count: 1,
        relativeLuminance: 60.77530976860723,
      },
      {
        hex: '#9b9188',
        count: 1,
        relativeLuminance: 60.77892288683782,
      },
      {
        hex: '#a18e92',
        count: 1,
        relativeLuminance: 60.7802097694115,
      },
      {
        hex: '#979195',
        count: 1,
        relativeLuminance: 60.78165848329938,
      },
      {
        hex: '#969198',
        count: 1,
        relativeLuminance: 60.78324113322026,
      },
      {
        hex: '#7f96a4',
        count: 1,
        relativeLuminance: 60.78608971345989,
      },
      {
        hex: '#929486',
        count: 1,
        relativeLuminance: 60.792246181530786,
      },
      {
        hex: '#96928f',
        count: 1,
        relativeLuminance: 60.80365918354036,
      },
      {
        hex: '#6f99a9',
        count: 1,
        relativeLuminance: 60.805049684299135,
      },
      {
        hex: '#939298',
        count: 1,
        relativeLuminance: 60.80616589422512,
      },
      {
        hex: '#8b949b',
        count: 1,
        relativeLuminance: 60.81280066820442,
      },
      {
        hex: '#8f92a3',
        count: 1,
        relativeLuminance: 60.81845954504284,
      },
      {
        hex: '#9b8f9d',
        count: 2,
        relativeLuminance: 60.82379603790804,
      },
      {
        hex: '#7a97a7',
        count: 1,
        relativeLuminance: 60.83526183716147,
      },
      {
        hex: '#6c9aa7',
        count: 1,
        relativeLuminance: 60.86041958260583,
      },
      {
        hex: '#9e9181',
        count: 1,
        relativeLuminance: 60.87407723381958,
      },
      {
        hex: '#7f9894',
        count: 1,
        relativeLuminance: 60.875608481906454,
      },
      {
        hex: '#9b9096',
        count: 1,
        relativeLuminance: 60.88482638861879,
      },
      {
        hex: '#7a98a0',
        count: 1,
        relativeLuminance: 60.89804857798046,
      },
      {
        hex: '#8a9597',
        count: 1,
        relativeLuminance: 60.89841645343243,
      },
      {
        hex: '#7f9895',
        count: 1,
        relativeLuminance: 60.903601658188705,
      },
      {
        hex: '#849793',
        count: 1,
        relativeLuminance: 60.90968025507104,
      },
      {
        hex: '#7798a7',
        count: 1,
        relativeLuminance: 60.92999108578347,
      },
      {
        hex: '#8d949a',
        count: 1,
        relativeLuminance: 60.93631301982717,
      },
      {
        hex: '#8f939e',
        count: 1,
        relativeLuminance: 60.93637931569472,
      },
      {
        hex: '#87978c',
        count: 1,
        relativeLuminance: 60.93801869943974,
      },
      {
        hex: '#9b9098',
        count: 1,
        relativeLuminance: 60.94198686285732,
      },
      {
        hex: '#9a909b',
        count: 1,
        relativeLuminance: 60.94288472483561,
      },
      {
        hex: '#ad8b8a',
        count: 1,
        relativeLuminance: 60.94407304691772,
      },
      {
        hex: '#a68d91',
        count: 1,
        relativeLuminance: 60.95868108604816,
      },
      {
        hex: '#7a98a2',
        count: 2,
        relativeLuminance: 60.96009107516801,
      },
      {
        hex: '#8f939f',
        count: 1,
        relativeLuminance: 60.966764159762704,
      },
      {
        hex: '#929582',
        count: 1,
        relativeLuminance: 60.973184417961036,
      },
      {
        hex: '#989199',
        count: 1,
        relativeLuminance: 60.98066163188905,
      },
      {
        hex: '#769a98',
        count: 1,
        relativeLuminance: 60.98386349133324,
      },
      {
        hex: '#9591a2',
        count: 1,
        relativeLuminance: 61.00075202333045,
      },
      {
        hex: '#739a9f',
        count: 1,
        relativeLuminance: 61.00974520649795,
      },
      {
        hex: '#a3907f',
        count: 1,
        relativeLuminance: 61.01510580000087,
      },
      {
        hex: '#639ab9',
        count: 1,
        relativeLuminance: 61.01622838572206,
      },
      {
        hex: '#92948f',
        count: 1,
        relativeLuminance: 61.02266441739694,
      },
      {
        hex: '#82979c',
        count: 1,
        relativeLuminance: 61.02737580530217,
      },
      {
        hex: '#9d8f9e',
        count: 1,
        relativeLuminance: 61.029391047018535,
      },
      {
        hex: '#97938a',
        count: 1,
        relativeLuminance: 61.029463242866385,
      },
      {
        hex: '#94929d',
        count: 2,
        relativeLuminance: 61.0349568021381,
      },
      {
        hex: '#9c918f',
        count: 1,
        relativeLuminance: 61.047140086431014,
      },
      {
        hex: '#96938e',
        count: 1,
        relativeLuminance: 61.049395587302655,
      },
      {
        hex: '#7899a0',
        count: 1,
        relativeLuminance: 61.05740468761218,
      },
      {
        hex: '#7d989f',
        count: 1,
        relativeLuminance: 61.06270509873944,
      },
      {
        hex: '#6e9ba1',
        count: 1,
        relativeLuminance: 61.07255602350736,
      },
      {
        hex: '#859797',
        count: 1,
        relativeLuminance: 61.092900486269855,
      },
      {
        hex: '#7499a9',
        count: 1,
        relativeLuminance: 61.098077268776834,
      },
      {
        hex: '#93948f',
        count: 1,
        relativeLuminance: 61.103312359460276,
      },
      {
        hex: '#6d9aad',
        count: 1,
        relativeLuminance: 61.1151425150361,
      },
      {
        hex: '#7498b2',
        count: 1,
        relativeLuminance: 61.11889288524101,
      },
      {
        hex: '#979298',
        count: 1,
        relativeLuminance: 61.13660208352522,
      },
      {
        hex: '#7399ac',
        count: 1,
        relativeLuminance: 61.138162512419,
      },
      {
        hex: '#9d9099',
        count: 1,
        relativeLuminance: 61.145736656462574,
      },
      {
        hex: '#a08f99',
        count: 2,
        relativeLuminance: 61.14913575100395,
      },
      {
        hex: '#7799a5',
        count: 1,
        relativeLuminance: 61.15141227488188,
      },
      {
        hex: '#8e968b',
        count: 2,
        relativeLuminance: 61.15712803923539,
      },
      {
        hex: '#7599a9',
        count: 1,
        relativeLuminance: 61.15834295805794,
      },
      {
        hex: '#949398',
        count: 1,
        relativeLuminance: 61.15955682285234,
      },
      {
        hex: '#8f9593',
        count: 1,
        relativeLuminance: 61.16897735116761,
      },
      {
        hex: '#80989c',
        count: 2,
        relativeLuminance: 61.17321564446992,
      },
      {
        hex: '#709aaa',
        count: 1,
        relativeLuminance: 61.183924058918336,
      },
      {
        hex: '#a78d96',
        count: 1,
        relativeLuminance: 61.19180509390095,
      },
      {
        hex: '#749aa3',
        count: 1,
        relativeLuminance: 61.192939208705,
      },
      {
        hex: '#6e9c9c',
        count: 1,
        relativeLuminance: 61.21361091836461,
      },
      {
        hex: '#7c999d',
        count: 2,
        relativeLuminance: 61.22202478236717,
      },
      {
        hex: '#b68984',
        count: 1,
        relativeLuminance: 61.22243865672982,
      },
      {
        hex: '#8f9595',
        count: 1,
        relativeLuminance: 61.22428032799576,
      },
      {
        hex: '#789a9c',
        count: 1,
        relativeLuminance: 61.224379788694435,
      },
      {
        hex: '#a88d94',
        count: 1,
        relativeLuminance: 61.231472227556836,
      },
      {
        hex: '#8696a3',
        count: 1,
        relativeLuminance: 61.24251986366593,
      },
      {
        hex: '#89969c',
        count: 1,
        relativeLuminance: 61.24774225732338,
      },
      {
        hex: '#a78d98',
        count: 1,
        relativeLuminance: 61.2485123376276,
      },
      {
        hex: '#809995',
        count: 1,
        relativeLuminance: 61.25665938014501,
      },
      {
        hex: '#9b919a',
        count: 1,
        relativeLuminance: 61.2661323738469,
      },
      {
        hex: '#95948f',
        count: 1,
        relativeLuminance: 61.26620744583319,
      },
      {
        hex: '#8397a2',
        count: 1,
        relativeLuminance: 61.278934998554135,
      },
      {
        hex: '#8b9698',
        count: 1,
        relativeLuminance: 61.28025216866786,
      },
      {
        hex: '#9891a3',
        count: 1,
        relativeLuminance: 61.281892626598946,
      },
      {
        hex: '#93939f',
        count: 1,
        relativeLuminance: 61.284630123496754,
      },
      {
        hex: '#a88e8d',
        count: 1,
        relativeLuminance: 61.30225377713525,
      },
      {
        hex: '#7b99a3',
        count: 1,
        relativeLuminance: 61.34040875783711,
      },
      {
        hex: '#ad8b99',
        count: 1,
        relativeLuminance: 61.35051406548669,
      },
      {
        hex: '#7699ad',
        count: 1,
        relativeLuminance: 61.35204945126884,
      },
      {
        hex: '#8098a2',
        count: 2,
        relativeLuminance: 61.354792308311744,
      },
      {
        hex: '#99929a',
        count: 1,
        relativeLuminance: 61.362500006467286,
      },
      {
        hex: '#6b9baf',
        count: 1,
        relativeLuminance: 61.362906385615176,
      },
      {
        hex: '#929687',
        count: 1,
        relativeLuminance: 61.37100771519613,
      },
      {
        hex: '#909598',
        count: 1,
        relativeLuminance: 61.386847489545076,
      },
      {
        hex: '#86979f',
        count: 1,
        relativeLuminance: 61.398635564626275,
      },
      {
        hex: '#769aa6',
        count: 1,
        relativeLuminance: 61.408340099258155,
      },
      {
        hex: '#919596',
        count: 1,
        relativeLuminance: 61.408960813187434,
      },
      {
        hex: '#95939e',
        count: 1,
        relativeLuminance: 61.4167550139434,
      },
      {
        hex: '#819999',
        count: 1,
        relativeLuminance: 61.437480509149125,
      },
      {
        hex: '#a0909a',
        count: 1,
        relativeLuminance: 61.440685902294874,
      },
      {
        hex: '#7899ac',
        count: 1,
        relativeLuminance: 61.44146507747611,
      },
      {
        hex: '#aa8e8b',
        count: 1,
        relativeLuminance: 61.44323223872637,
      },
      {
        hex: '#8597a3',
        count: 1,
        relativeLuminance: 61.45015163800949,
      },
      {
        hex: '#749ba2',
        count: 1,
        relativeLuminance: 61.450344063401275,
      },
      {
        hex: '#709ab2',
        count: 1,
        relativeLuminance: 61.455522925335174,
      },
      {
        hex: '#9892a0',
        count: 1,
        relativeLuminance: 61.45633350987465,
      },
      {
        hex: '#939592',
        count: 1,
        relativeLuminance: 61.45808955214213,
      },
      {
        hex: '#a19098',
        count: 1,
        relativeLuminance: 61.473110232312635,
      },
      {
        hex: '#80999d',
        count: 1,
        relativeLuminance: 61.48645572934268,
      },
      {
        hex: '#719ba9',
        count: 1,
        relativeLuminance: 61.49684591377812,
      },
      {
        hex: '#9294a0',
        count: 1,
        relativeLuminance: 61.506282515806575,
      },
      {
        hex: '#969495',
        count: 1,
        relativeLuminance: 61.51052533935676,
      },
      {
        hex: '#8f94a8',
        count: 1,
        relativeLuminance: 61.52164045641577,
      },
      {
        hex: '#8298a3',
        count: 1,
        relativeLuminance: 61.52167579934661,
      },
      {
        hex: '#9e919a',
        count: 2,
        relativeLuminance: 61.52717280849974,
      },
      {
        hex: '#9d919d',
        count: 1,
        relativeLuminance: 61.52736767838674,
      },
      {
        hex: '#86989a',
        count: 1,
        relativeLuminance: 61.53142000774508,
      },
      {
        hex: '#6e9bb0',
        count: 1,
        relativeLuminance: 61.56116332840183,
      },
      {
        hex: '#7e99a4',
        count: 1,
        relativeLuminance: 61.56647865124863,
      },
      {
        hex: '#8c96a0',
        count: 1,
        relativeLuminance: 61.59049955383992,
      },
      {
        hex: '#a09196',
        count: 2,
        relativeLuminance: 61.590657138428384,
      },
      {
        hex: '#9a929f',
        count: 1,
        relativeLuminance: 61.59463868909461,
      },
      {
        hex: '#7c99a9',
        count: 1,
        relativeLuminance: 61.59561314990229,
      },
      {
        hex: '#a39096',
        count: 1,
        relativeLuminance: 61.59814671023486,
      },
      {
        hex: '#7d9a9e',
        count: 1,
        relativeLuminance: 61.60224399786679,
      },
      {
        hex: '#94949e',
        count: 1,
        relativeLuminance: 61.60615980525638,
      },
      {
        hex: '#899895',
        count: 1,
        relativeLuminance: 61.60653403976798,
      },
      {
        hex: '#889898',
        count: 1,
        relativeLuminance: 61.61771748706646,
      },
      {
        hex: '#8b9891',
        count: 1,
        relativeLuminance: 61.64539808205265,
      },
      {
        hex: '#ac8d95',
        count: 1,
        relativeLuminance: 61.6458821251463,
      },
      {
        hex: '#959593',
        count: 1,
        relativeLuminance: 61.64648823285495,
      },
      {
        hex: '#969590',
        count: 1,
        relativeLuminance: 61.647784189129865,
      },
      {
        hex: '#8d9796',
        count: 1,
        relativeLuminance: 61.652449862972205,
      },
      {
        hex: '#a48f9e',
        count: 1,
        relativeLuminance: 61.65944763612619,
      },
      {
        hex: '#ac8e8c',
        count: 1,
        relativeLuminance: 61.6629424234786,
      },
      {
        hex: '#839a92',
        count: 1,
        relativeLuminance: 61.664419143387306,
      },
      {
        hex: '#9793a1',
        count: 1,
        relativeLuminance: 61.671436245354585,
      },
      {
        hex: '#84999a',
        count: 1,
        relativeLuminance: 61.672417483692385,
      },
      {
        hex: '#a2909c',
        count: 1,
        relativeLuminance: 61.67854620663125,
      },
      {
        hex: '#7f99a6',
        count: 1,
        relativeLuminance: 61.69532722503918,
      },
      {
        hex: '#759ba8',
        count: 1,
        relativeLuminance: 61.6988482426315,
      },
      {
        hex: '#749baa',
        count: 1,
        relativeLuminance: 61.704210512152414,
      },
      {
        hex: '#9d929a',
        count: 1,
        relativeLuminance: 61.70506204505186,
      },
      {
        hex: '#6e9cac',
        count: 1,
        relativeLuminance: 61.714993569263655,
      },
      {
        hex: '#7c9aa4',
        count: 1,
        relativeLuminance: 61.72027936066701,
      },
      {
        hex: '#7d9aa2',
        count: 1,
        relativeLuminance: 61.72302430771376,
      },
      {
        hex: '#9d9391',
        count: 1,
        relativeLuminance: 61.723074293381856,
      },
      {
        hex: '#969593',
        count: 1,
        relativeLuminance: 61.72792940252194,
      },
      {
        hex: '#709ca9',
        count: 1,
        relativeLuminance: 61.72857064377314,
      },
      {
        hex: '#a39288',
        count: 1,
        relativeLuminance: 61.75923471718683,
      },
      {
        hex: '#719bb1',
        count: 1,
        relativeLuminance: 61.76427031176915,
      },
      {
        hex: '#a69092',
        count: 1,
        relativeLuminance: 61.76522253228323,
      },
      {
        hex: '#99939f',
        count: 1,
        relativeLuminance: 61.77736302101903,
      },
      {
        hex: '#95968e',
        count: 1,
        relativeLuminance: 61.787943462841824,
      },
      {
        hex: '#789c9c',
        count: 1,
        relativeLuminance: 61.800887173416996,
      },
      {
        hex: '#7e9b99',
        count: 1,
        relativeLuminance: 61.80768889119527,
      },
      {
        hex: '#989590',
        count: 1,
        relativeLuminance: 61.81258011366923,
      },
      {
        hex: '#8f96a0',
        count: 1,
        relativeLuminance: 61.81815574908515,
      },
      {
        hex: '#7f9aa1',
        count: 1,
        relativeLuminance: 61.823344529840256,
      },
      {
        hex: '#a0938b',
        count: 1,
        relativeLuminance: 61.830785913024854,
      },
      {
        hex: '#a4909b',
        count: 1,
        relativeLuminance: 61.83120552504724,
      },
      {
        hex: '#949693',
        count: 1,
        relativeLuminance: 61.83943962367016,
      },
      {
        hex: '#8798a2',
        count: 1,
        relativeLuminance: 61.840150608532596,
      },
      {
        hex: '#799ba5',
        count: 1,
        relativeLuminance: 61.84723042361328,
      },
      {
        hex: '#a29199',
        count: 1,
        relativeLuminance: 61.853959096780216,
      },
      {
        hex: '#729caa',
        count: 1,
        relativeLuminance: 61.8750126986549,
      },
      {
        hex: '#a0938d',
        count: 1,
        relativeLuminance: 61.88143513772667,
      },
      {
        hex: '#9694a2',
        count: 1,
        relativeLuminance: 61.88861164109946,
      },
      {
        hex: '#8f9799',
        count: 1,
        relativeLuminance: 61.88886067971008,
      },
      {
        hex: '#8698a6',
        count: 1,
        relativeLuminance: 61.893332341321695,
      },
      {
        hex: '#849a98',
        count: 1,
        relativeLuminance: 61.898267365012,
      },
      {
        hex: '#86999d',
        count: 1,
        relativeLuminance: 61.899454911875466,
      },
      {
        hex: '#a1919e',
        count: 1,
        relativeLuminance: 61.909200484544414,
      },
      {
        hex: '#7d9aa8',
        count: 1,
        relativeLuminance: 61.91077974355852,
      },
      {
        hex: '#899996',
        count: 1,
        relativeLuminance: 61.914644938125065,
      },
      {
        hex: '#759ab7',
        count: 1,
        relativeLuminance: 61.9225020137026,
      },
      {
        hex: '#a29292',
        count: 1,
        relativeLuminance: 61.92461527816684,
      },
      {
        hex: '#6d9bbc',
        count: 1,
        relativeLuminance: 61.93341075632321,
      },
      {
        hex: '#9f929c',
        count: 1,
        relativeLuminance: 61.93705757790573,
      },
      {
        hex: '#aa8f94',
        count: 1,
        relativeLuminance: 61.937134864924985,
      },
      {
        hex: '#8d97a0',
        count: 1,
        relativeLuminance: 61.94134521399404,
      },
      {
        hex: '#9d92a2',
        count: 1,
        relativeLuminance: 61.94177279509648,
      },
      {
        hex: '#769ca5',
        count: 1,
        relativeLuminance: 61.950846997499866,
      },
      {
        hex: '#9a958f',
        count: 1,
        relativeLuminance: 61.95340609671884,
      },
      {
        hex: '#7a9c9d',
        count: 1,
        relativeLuminance: 61.954042481327704,
      },
      {
        hex: '#9295a6',
        count: 1,
        relativeLuminance: 61.96279865894118,
      },
      {
        hex: '#8d97a1',
        count: 1,
        relativeLuminance: 61.971433428529636,
      },
      {
        hex: '#a89189',
        count: 1,
        relativeLuminance: 61.9822366827096,
      },
      {
        hex: '#9b9682',
        count: 1,
        relativeLuminance: 61.9918088737314,
      },
      {
        hex: '#759d9f',
        count: 1,
        relativeLuminance: 61.99701931149583,
      },
      {
        hex: '#7b9ba6',
        count: 2,
        relativeLuminance: 62.003659262242394,
      },
      {
        hex: '#859b8f',
        count: 1,
        relativeLuminance: 62.00843736134527,
      },
      {
        hex: '#769ca7',
        count: 1,
        relativeLuminance: 62.01365347844825,
      },
      {
        hex: '#9b9683',
        count: 1,
        relativeLuminance: 62.01488659816239,
      },
      {
        hex: '#7c9c9b',
        count: 1,
        relativeLuminance: 62.022262559628984,
      },
      {
        hex: '#969694',
        count: 1,
        relativeLuminance: 62.027615724817295,
      },
      {
        hex: '#8599a4',
        count: 1,
        relativeLuminance: 62.04001012028624,
      },
      {
        hex: '#719da8',
        count: 1,
        relativeLuminance: 62.04211039010609,
      },
      {
        hex: '#ac8f91',
        count: 1,
        relativeLuminance: 62.04903425433645,
      },
      {
        hex: '#9894a2',
        count: 1,
        relativeLuminance: 62.05239326592526,
      },
      {
        hex: '#8299ab',
        count: 1,
        relativeLuminance: 62.056425981692584,
      },
      {
        hex: '#959698',
        count: 1,
        relativeLuminance: 62.05701179791912,
      },
      {
        hex: '#8b98a0',
        count: 1,
        relativeLuminance: 62.069181422979526,
      },
      {
        hex: '#7d9d90',
        count: 1,
        relativeLuminance: 62.07261874120388,
      },
      {
        hex: '#a7909a',
        count: 1,
        relativeLuminance: 62.07907927904185,
      },
      {
        hex: '#a291a1',
        count: 1,
        relativeLuminance: 62.08785838339347,
      },
      {
        hex: '#9a949e',
        count: 1,
        relativeLuminance: 62.099006285665496,
      },
      {
        hex: '#879a98',
        count: 1,
        relativeLuminance: 62.108082770815614,
      },
      {
        hex: '#649eb6',
        count: 1,
        relativeLuminance: 62.11775797660164,
      },
      {
        hex: '#a09581',
        count: 1,
        relativeLuminance: 62.12884947422512,
      },
      {
        hex: '#7d9ba6',
        count: 1,
        relativeLuminance: 62.1308805479501,
      },
      {
        hex: '#7b9baa',
        count: 1,
        relativeLuminance: 62.130953478294145,
      },
      {
        hex: '#809aa9',
        count: 1,
        relativeLuminance: 62.138663243684775,
      },
      {
        hex: '#779da0',
        count: 1,
        relativeLuminance: 62.14631163462903,
      },
      {
        hex: '#9d9497',
        count: 1,
        relativeLuminance: 62.15340613349552,
      },
      {
        hex: '#a5919a',
        count: 1,
        relativeLuminance: 62.15421657544434,
      },
      {
        hex: '#7f99b4',
        count: 1,
        relativeLuminance: 62.159799381544204,
      },
      {
        hex: '#9a968d',
        count: 1,
        relativeLuminance: 62.17344609032034,
      },
      {
        hex: '#7c9ab2',
        count: 1,
        relativeLuminance: 62.17756333521797,
      },
      {
        hex: '#7f9c9a',
        count: 1,
        relativeLuminance: 62.18727802253402,
      },
      {
        hex: '#769bb5',
        count: 1,
        relativeLuminance: 62.19441264500763,
      },
      {
        hex: '#6a9db8',
        count: 1,
        relativeLuminance: 62.20153220514692,
      },
      {
        hex: '#a2929c',
        count: 1,
        relativeLuminance: 62.20208196806442,
      },
      {
        hex: '#8e9993',
        count: 1,
        relativeLuminance: 62.202406755583624,
      },
      {
        hex: '#809ba2',
        count: 1,
        relativeLuminance: 62.202990426938186,
      },
      {
        hex: '#809aab',
        count: 1,
        relativeLuminance: 62.20311984626892,
      },
      {
        hex: '#9d9499',
        count: 1,
        relativeLuminance: 62.209197545462544,
      },
      {
        hex: '#8f97a4',
        count: 1,
        relativeLuminance: 62.21377171151951,
      },
      {
        hex: '#6f9ea8',
        count: 1,
        relativeLuminance: 62.21988415359223,
      },
      {
        hex: '#ab8f9b',
        count: 1,
        relativeLuminance: 62.22755887114995,
      },
      {
        hex: '#8b999c',
        count: 1,
        relativeLuminance: 62.229537279092796,
      },
      {
        hex: '#a2929d',
        count: 1,
        relativeLuminance: 62.231015745849604,
      },
      {
        hex: '#7e9c9e',
        count: 1,
        relativeLuminance: 62.2375645148649,
      },
      {
        hex: '#a6919a',
        count: 1,
        relativeLuminance: 62.24581465607652,
      },
      {
        hex: '#9b9597',
        count: 1,
        relativeLuminance: 62.25170969546225,
      },
      {
        hex: '#b38e88',
        count: 1,
        relativeLuminance: 62.25974801621008,
      },
      {
        hex: '#9e93a1',
        count: 1,
        relativeLuminance: 62.261842253439724,
      },
      {
        hex: '#8a99a0',
        count: 1,
        relativeLuminance: 62.27378230040347,
      },
      {
        hex: '#a59480',
        count: 1,
        relativeLuminance: 62.285542403035365,
      },
      {
        hex: '#9f939f',
        count: 1,
        relativeLuminance: 62.28886487757654,
      },
      {
        hex: '#869aa1',
        count: 1,
        relativeLuminance: 62.29835042147788,
      },
      {
        hex: '#a59296',
        count: 1,
        relativeLuminance: 62.30375285800865,
      },
      {
        hex: '#779da6',
        count: 1,
        relativeLuminance: 62.32915425595489,
      },
      {
        hex: '#a09494',
        count: 1,
        relativeLuminance: 62.33123742334064,
      },
      {
        hex: '#859d85',
        count: 1,
        relativeLuminance: 62.33329949028614,
      },
      {
        hex: '#9096ae',
        count: 1,
        relativeLuminance: 62.33672073137582,
      },
      {
        hex: '#849aa7',
        count: 1,
        relativeLuminance: 62.344163296968986,
      },
      {
        hex: '#8e9a8e',
        count: 1,
        relativeLuminance: 62.35113339205664,
      },
      {
        hex: '#9c94a1',
        count: 1,
        relativeLuminance: 62.35618309452407,
      },
      {
        hex: '#7c9baf',
        count: 1,
        relativeLuminance: 62.357863591773295,
      },
      {
        hex: '#7f9ca0',
        count: 1,
        relativeLuminance: 62.36134135986555,
      },
      {
        hex: '#9b94a4',
        count: 1,
        relativeLuminance: 62.36276686564641,
      },
      {
        hex: '#93998b',
        count: 1,
        relativeLuminance: 62.38045623008888,
      },
      {
        hex: '#a09496',
        count: 1,
        relativeLuminance: 62.38537715770818,
      },
      {
        hex: '#869c90',
        count: 1,
        relativeLuminance: 62.388325853913,
      },
      {
        hex: '#789da6',
        count: 3,
        relativeLuminance: 62.38942853812884,
      },
      {
        hex: '#a2939a',
        count: 1,
        relativeLuminance: 62.40782150694439,
      },
      {
        hex: '#989792',
        count: 1,
        relativeLuminance: 62.4095371873736,
      },
      {
        hex: '#93998d',
        count: 1,
        relativeLuminance: 62.430398233368564,
      },
      {
        hex: '#909996',
        count: 1,
        relativeLuminance: 62.434770065218444,
      },
      {
        hex: '#7b9cab',
        count: 1,
        relativeLuminance: 62.44694334377651,
      },
      {
        hex: '#7e9e91',
        count: 1,
        relativeLuminance: 62.45160289402537,
      },
      {
        hex: '#a8919b',
        count: 1,
        relativeLuminance: 62.45879909671861,
      },
      {
        hex: '#9197a7',
        count: 1,
        relativeLuminance: 62.45946971578883,
      },
      {
        hex: '#93998f',
        count: 1,
        relativeLuminance: 62.48118520425028,
      },
      {
        hex: '#7f9ca4',
        count: 1,
        relativeLuminance: 62.481705605715945,
      },
      {
        hex: '#799cb0',
        count: 1,
        relativeLuminance: 62.487766107882976,
      },
      {
        hex: '#96979b',
        count: 1,
        relativeLuminance: 62.49396040393749,
      },
      {
        hex: '#7c9cab',
        count: 1,
        relativeLuminance: 62.509570257652456,
      },
      {
        hex: '#7e9ca7',
        count: 1,
        relativeLuminance: 62.50980668463218,
      },
      {
        hex: '#7b9cad',
        count: 2,
        relativeLuminance: 62.511869303599724,
      },
      {
        hex: '#a5948a',
        count: 1,
        relativeLuminance: 62.51955147473659,
      },
      {
        hex: '#789ea1',
        count: 1,
        relativeLuminance: 62.524511967251655,
      },
      {
        hex: '#889aa4',
        count: 2,
        relativeLuminance: 62.52938906562028,
      },
      {
        hex: '#a6929b',
        count: 1,
        relativeLuminance: 62.53406205327397,
      },
      {
        hex: '#869ba0',
        count: 1,
        relativeLuminance: 62.54904977597238,
      },
      {
        hex: '#a79299',
        count: 1,
        relativeLuminance: 62.569349700427466,
      },
      {
        hex: '#7e9da0',
        count: 1,
        relativeLuminance: 62.581535953586425,
      },
      {
        hex: '#8f9a94',
        count: 1,
        relativeLuminance: 62.58265935874758,
      },
      {
        hex: '#879c95',
        count: 1,
        relativeLuminance: 62.59007017289822,
      },
      {
        hex: '#979892',
        count: 1,
        relativeLuminance: 62.601313053299094,
      },
      {
        hex: '#7b9da7',
        count: 1,
        relativeLuminance: 62.6045224384536,
      },
      {
        hex: '#799dab',
        count: 1,
        relativeLuminance: 62.60809934833095,
      },
      {
        hex: '#a0949e',
        count: 1,
        relativeLuminance: 62.61049941881731,
      },
      {
        hex: '#789f9a',
        count: 1,
        relativeLuminance: 62.61085586841246,
      },
      {
        hex: '#a3939e',
        count: 1,
        relativeLuminance: 62.61098342891596,
      },
      {
        hex: '#7f9d9f',
        count: 1,
        relativeLuminance: 62.61652452744049,
      },
      {
        hex: '#869c99',
        count: 1,
        relativeLuminance: 62.62999412801801,
      },
      {
        hex: '#8f9a96',
        count: 1,
        relativeLuminance: 62.63645356708899,
      },
      {
        hex: '#a9919e',
        count: 2,
        relativeLuminance: 62.63778792030156,
      },
      {
        hex: '#9996a1',
        count: 1,
        relativeLuminance: 62.640959760932546,
      },
      {
        hex: '#b98e7e',
        count: 1,
        relativeLuminance: 62.64806118684203,
      },
      {
        hex: '#869c9a',
        count: 1,
        relativeLuminance: 62.65791185012834,
      },
      {
        hex: '#a69397',
        count: 1,
        relativeLuminance: 62.68349621944536,
      },
      {
        hex: '#ac9196',
        count: 1,
        relativeLuminance: 62.69582191764354,
      },
      {
        hex: '#909b8b',
        count: 1,
        relativeLuminance: 62.70640580451844,
      },
      {
        hex: '#7c9cb1',
        count: 1,
        relativeLuminance: 62.706643345076586,
      },
      {
        hex: '#8e9b91',
        count: 1,
        relativeLuminance: 62.70787117025252,
      },
      {
        hex: '#9c9791',
        count: 1,
        relativeLuminance: 62.714307818053726,
      },
      {
        hex: '#9995ac',
        count: 1,
        relativeLuminance: 62.71454581704137,
      },
      {
        hex: '#839ca3',
        count: 3,
        relativeLuminance: 62.71523249805166,
      },
      {
        hex: '#7a9cb5',
        count: 1,
        relativeLuminance: 62.718702746456714,
      },
      {
        hex: '#799ea6',
        count: 1,
        relativeLuminance: 62.73644582859578,
      },
      {
        hex: '#8b9b9b',
        count: 2,
        relativeLuminance: 62.75857418912442,
      },
      {
        hex: '#809f8d',
        count: 1,
        relativeLuminance: 62.767247166005575,
      },
      {
        hex: '#b28f96',
        count: 1,
        relativeLuminance: 62.77005755166604,
      },
      {
        hex: '#989896',
        count: 1,
        relativeLuminance: 62.78847966227323,
      },
      {
        hex: '#9c9794',
        count: 1,
        relativeLuminance: 62.79298376667015,
      },
      {
        hex: '#839d9c',
        count: 1,
        relativeLuminance: 62.793219240151984,
      },
      {
        hex: '#b09095',
        count: 1,
        relativeLuminance: 62.799096880515734,
      },
      {
        hex: '#95989f',
        count: 1,
        relativeLuminance: 62.80134827343488,
      },
      {
        hex: '#b58f8c',
        count: 1,
        relativeLuminance: 62.81214797843205,
      },
      {
        hex: '#9b9982',
        count: 1,
        relativeLuminance: 62.812655318602424,
      },
      {
        hex: '#9b9798',
        count: 1,
        relativeLuminance: 62.817718103545204,
      },
      {
        hex: '#ba8e81',
        count: 1,
        relativeLuminance: 62.818812088318424,
      },
      {
        hex: '#759eb0',
        count: 1,
        relativeLuminance: 62.81892281057921,
      },
      {
        hex: '#859ca2',
        count: 1,
        relativeLuminance: 62.8205120101411,
      },
      {
        hex: '#7b9f9b',
        count: 1,
        relativeLuminance: 62.821911837423755,
      },
      {
        hex: '#ab919e',
        count: 1,
        relativeLuminance: 62.82489409780081,
      },
      {
        hex: '#889c9b',
        count: 1,
        relativeLuminance: 62.82521647755732,
      },
      {
        hex: '#8d9aa2',
        count: 1,
        relativeLuminance: 62.829257021046146,
      },
      {
        hex: '#9e978f',
        count: 2,
        relativeLuminance: 62.831710887373674,
      },
      {
        hex: '#ab9295',
        count: 1,
        relativeLuminance: 62.83182273298293,
      },
      {
        hex: '#a8929f',
        count: 1,
        relativeLuminance: 62.83197432584895,
      },
      {
        hex: '#77a09a',
        count: 1,
        relativeLuminance: 62.84104974926419,
      },
      {
        hex: '#78a098',
        count: 1,
        relativeLuminance: 62.84526468708732,
      },
      {
        hex: '#719faf',
        count: 1,
        relativeLuminance: 62.84564156994202,
      },
      {
        hex: '#a19690',
        count: 1,
        relativeLuminance: 62.8466847236635,
      },
      {
        hex: '#9f95a0',
        count: 1,
        relativeLuminance: 62.84711107871371,
      },
      {
        hex: '#8b9c94',
        count: 1,
        relativeLuminance: 62.84722311182412,
      },
      {
        hex: '#af9191',
        count: 1,
        relativeLuminance: 62.851467812305614,
      },
      {
        hex: '#a19879',
        count: 1,
        relativeLuminance: 62.85558828906919,
      },
      {
        hex: '#739fac',
        count: 1,
        relativeLuminance: 62.860318557428215,
      },
      {
        hex: '#809da5',
        count: 1,
        relativeLuminance: 62.86038459059729,
      },
      {
        hex: '#8c9c92',
        count: 1,
        relativeLuminance: 62.867041282438734,
      },
      {
        hex: '#899c9a',
        count: 1,
        relativeLuminance: 62.867616178627316,
      },
      {
        hex: '#999896',
        count: 1,
        relativeLuminance: 62.869617579385974,
      },
      {
        hex: '#959998',
        count: 1,
        relativeLuminance: 62.8765087667431,
      },
      {
        hex: '#859ca4',
        count: 1,
        relativeLuminance: 62.88051452859611,
      },
      {
        hex: '#9d969e',
        count: 1,
        relativeLuminance: 62.885195328954865,
      },
      {
        hex: '#759eb2',
        count: 1,
        relativeLuminance: 62.88566915750695,
      },
      {
        hex: '#7d9dac',
        count: 1,
        relativeLuminance: 62.88775377195563,
      },
      {
        hex: '#819e9a',
        count: 1,
        relativeLuminance: 62.888980486175186,
      },
      {
        hex: '#9299a1',
        count: 1,
        relativeLuminance: 62.89961847222183,
      },
      {
        hex: '#9b9891',
        count: 1,
        relativeLuminance: 62.90187693329901,
      },
      {
        hex: '#9a96a7',
        count: 1,
        relativeLuminance: 62.90469230878675,
      },
      {
        hex: '#899d91',
        count: 1,
        relativeLuminance: 62.907953842080246,
      },
      {
        hex: '#899ba5',
        count: 1,
        relativeLuminance: 62.90881155685143,
      },
      {
        hex: '#a7939c',
        count: 1,
        relativeLuminance: 62.913456832726155,
      },
      {
        hex: '#709fb3',
        count: 1,
        relativeLuminance: 62.92387028126117,
      },
      {
        hex: '#839e97',
        count: 1,
        relativeLuminance: 62.938641892608416,
      },
      {
        hex: '#a8939a',
        count: 1,
        relativeLuminance: 62.94864525945293,
      },
      {
        hex: '#9299a3',
        count: 1,
        relativeLuminance: 62.959028182506785,
      },
      {
        hex: '#889ba9',
        count: 1,
        relativeLuminance: 62.96211672728698,
      },
      {
        hex: '#909b95',
        count: 1,
        relativeLuminance: 62.96245491122593,
      },
      {
        hex: '#899ba7',
        count: 1,
        relativeLuminance: 62.970104109603525,
      },
      {
        hex: '#8a9ba5',
        count: 1,
        relativeLuminance: 62.979697846118796,
      },
      {
        hex: '#9d95aa',
        count: 1,
        relativeLuminance: 62.98194534730773,
      },
      {
        hex: '#6a9fbe',
        count: 1,
        relativeLuminance: 62.992687192241775,
      },
      {
        hex: '#a5949c',
        count: 1,
        relativeLuminance: 62.99376366373605,
      },
      {
        hex: '#8f9b99',
        count: 1,
        relativeLuminance: 62.99609410291811,
      },
      {
        hex: '#b2918c',
        count: 1,
        relativeLuminance: 63.01858931056883,
      },
      {
        hex: '#8d9c95',
        count: 1,
        relativeLuminance: 63.018885271819755,
      },
      {
        hex: '#a095a3',
        count: 1,
        relativeLuminance: 63.021583964110846,
      },
      {
        hex: '#9e988c',
        count: 1,
        relativeLuminance: 63.02675312423489,
      },
      {
        hex: '#ac938f',
        count: 1,
        relativeLuminance: 63.02861911319911,
      },
      {
        hex: '#979998',
        count: 1,
        relativeLuminance: 63.03487530062246,
      },
      {
        hex: '#ab9393',
        count: 1,
        relativeLuminance: 63.03751938109434,
      },
      {
        hex: '#919a9f',
        count: 1,
        relativeLuminance: 63.03935165058509,
      },
      {
        hex: '#7a9fa5',
        count: 1,
        relativeLuminance: 63.05293631299594,
      },
      {
        hex: '#799eb0',
        count: 1,
        relativeLuminance: 63.05526324261517,
      },
      {
        hex: '#889ca3',
        count: 1,
        relativeLuminance: 63.057145616556,
      },
      {
        hex: '#929a9d',
        count: 1,
        relativeLuminance: 63.05797641725401,
      },
      {
        hex: '#779fab',
        count: 1,
        relativeLuminance: 63.05961715165593,
      },
      {
        hex: '#999a88',
        count: 2,
        relativeLuminance: 63.06177603951885,
      },
      {
        hex: '#729fb4',
        count: 1,
        relativeLuminance: 63.06834189951874,
      },
      {
        hex: '#9898a0',
        count: 1,
        relativeLuminance: 63.06914837092775,
      },
      {
        hex: '#8d9c97',
        count: 1,
        relativeLuminance: 63.072544905230046,
      },
      {
        hex: '#8f9c92',
        count: 1,
        relativeLuminance: 63.0874182100288,
      },
      {
        hex: '#7d9fa0',
        count: 1,
        relativeLuminance: 63.08942873433857,
      },
      {
        hex: '#99989e',
        count: 1,
        relativeLuminance: 63.09199558163847,
      },
      {
        hex: '#849da4',
        count: 1,
        relativeLuminance: 63.094001522807815,
      },
      {
        hex: '#7b9db6',
        count: 1,
        relativeLuminance: 63.09606678867274,
      },
      {
        hex: '#a195a3',
        count: 1,
        relativeLuminance: 63.10771529785663,
      },
      {
        hex: '#809dad',
        count: 1,
        relativeLuminance: 63.11101021209717,
      },
      {
        hex: '#749fb2',
        count: 1,
        relativeLuminance: 63.11380702845119,
      },
      {
        hex: '#7c9fa3',
        count: 1,
        relativeLuminance: 63.115530461829266,
      },
      {
        hex: '#939c87',
        count: 1,
        relativeLuminance: 63.118476113074706,
      },
      {
        hex: '#af919b',
        count: 1,
        relativeLuminance: 63.12019508173094,
      },
      {
        hex: '#889e91',
        count: 1,
        relativeLuminance: 63.121007968421154,
      },
      {
        hex: '#8a9d97',
        count: 1,
        relativeLuminance: 63.137034826770204,
      },
      {
        hex: '#a0969e',
        count: 1,
        relativeLuminance: 63.13979048913808,
      },
      {
        hex: '#9d9894',
        count: 1,
        relativeLuminance: 63.14626275086877,
      },
      {
        hex: '#9599a2',
        count: 1,
        relativeLuminance: 63.16118751064421,
      },
      {
        hex: '#909c92',
        count: 1,
        relativeLuminance: 63.16192411640198,
      },
      {
        hex: '#8f9c95',
        count: 1,
        relativeLuminance: 63.16603454314769,
      },
      {
        hex: '#809ea6',
        count: 1,
        relativeLuminance: 63.17399353675073,
      },
      {
        hex: '#b09290',
        count: 1,
        relativeLuminance: 63.17847861562794,
      },
      {
        hex: '#859e9b',
        count: 1,
        relativeLuminance: 63.182902953508005,
      },
      {
        hex: '#829ea2',
        count: 1,
        relativeLuminance: 63.18402991316344,
      },
      {
        hex: '#a49693',
        count: 1,
        relativeLuminance: 63.18702448396799,
      },
      {
        hex: '#a2969a',
        count: 1,
        relativeLuminance: 63.1997830186112,
      },
      {
        hex: '#7e9eab',
        count: 1,
        relativeLuminance: 63.20181107988242,
      },
      {
        hex: '#7b9eb1',
        count: 1,
        relativeLuminance: 63.209594017232504,
      },
      {
        hex: '#a19889',
        count: 1,
        relativeLuminance: 63.21016161891394,
      },
      {
        hex: '#9e979e',
        count: 1,
        relativeLuminance: 63.23607376440505,
      },
      {
        hex: '#9c9a85',
        count: 1,
        relativeLuminance: 63.23743035299752,
      },
      {
        hex: '#829f9a',
        count: 1,
        relativeLuminance: 63.23959919933283,
      },
      {
        hex: '#959b91',
        count: 1,
        relativeLuminance: 63.24075107722314,
      },
      {
        hex: '#929b9a',
        count: 1,
        relativeLuminance: 63.249194816092626,
      },
      {
        hex: '#859da7',
        count: 1,
        relativeLuminance: 63.25228635130989,
      },
      {
        hex: '#7da09c',
        count: 1,
        relativeLuminance: 63.26171045087922,
      },
      {
        hex: '#9e979f',
        count: 4,
        relativeLuminance: 63.26472142105413,
      },
      {
        hex: '#a49696',
        count: 2,
        relativeLuminance: 63.26612329965286,
      },
      {
        hex: '#809ea9',
        count: 1,
        relativeLuminance: 63.26634892947499,
      },
      {
        hex: '#7d9eaf',
        count: 1,
        relativeLuminance: 63.26746875222578,
      },
      {
        hex: '#8b9ca3',
        count: 1,
        relativeLuminance: 63.26863305798274,
      },
      {
        hex: '#7e9fa4',
        count: 1,
        relativeLuminance: 63.27027663682986,
      },
      {
        hex: '#979b8c',
        count: 1,
        relativeLuminance: 63.27294155525527,
      },
      {
        hex: '#9c9992',
        count: 1,
        relativeLuminance: 63.28143494143856,
      },
      {
        hex: '#77a1a0',
        count: 1,
        relativeLuminance: 63.30132455856166,
      },
      {
        hex: '#70a0b6',
        count: 1,
        relativeLuminance: 63.31291657917005,
      },
      {
        hex: '#9a98a3',
        count: 1,
        relativeLuminance: 63.31877714882583,
      },
      {
        hex: '#859f96',
        count: 1,
        relativeLuminance: 63.33034237496061,
      },
      {
        hex: '#869e9e',
        count: 1,
        relativeLuminance: 63.3351755418653,
      },
      {
        hex: '#899e97',
        count: 1,
        relativeLuminance: 63.34821476936641,
      },
      {
        hex: '#9d97a5',
        count: 2,
        relativeLuminance: 63.357698727170586,
      },
      {
        hex: '#9e96ab',
        count: 1,
        relativeLuminance: 63.361118437100714,
      },
      {
        hex: '#989c81',
        count: 1,
        relativeLuminance: 63.373710780530516,
      },
      {
        hex: '#859ea2',
        count: 1,
        relativeLuminance: 63.38327863512538,
      },
      {
        hex: '#9a9a92',
        count: 1,
        relativeLuminance: 63.389594165353685,
      },
      {
        hex: '#75a0b0',
        count: 1,
        relativeLuminance: 63.39088087923653,
      },
      {
        hex: '#9e989a',
        count: 1,
        relativeLuminance: 63.391342267908584,
      },
      {
        hex: '#739fbc',
        count: 2,
        relativeLuminance: 63.4023070167909,
      },
      {
        hex: '#ae9581',
        count: 1,
        relativeLuminance: 63.407744940944895,
      },
      {
        hex: '#b1938b',
        count: 1,
        relativeLuminance: 63.407816386622756,
      },
      {
        hex: '#859ea3',
        count: 1,
        relativeLuminance: 63.41275056390664,
      },
      {
        hex: '#a5978e',
        count: 1,
        relativeLuminance: 63.413522260386145,
      },
      {
        hex: '#889e9c',
        count: 1,
        relativeLuminance: 63.415762801027995,
      },
      {
        hex: '#929ba0',
        count: 1,
        relativeLuminance: 63.418639526331276,
      },
      {
        hex: '#819eac',
        count: 1,
        relativeLuminance: 63.42495553788618,
      },
      {
        hex: '#8d9d9a',
        count: 1,
        relativeLuminance: 63.43349236851013,
      },
      {
        hex: '#a396a0',
        count: 1,
        relativeLuminance: 63.45618918879258,
      },
      {
        hex: '#ad939c',
        count: 1,
        relativeLuminance: 63.46829000149282,
      },
      {
        hex: '#a69697',
        count: 1,
        relativeLuminance: 63.47000014129139,
      },
      {
        hex: '#a39797',
        count: 1,
        relativeLuminance: 63.47005273314841,
      },
      {
        hex: '#82a098',
        count: 1,
        relativeLuminance: 63.47031902735522,
      },
      {
        hex: '#859ea5',
        count: 2,
        relativeLuminance: 63.472330113568816,
      },
      {
        hex: '#8a9da3',
        count: 1,
        relativeLuminance: 63.47618648790602,
      },
      {
        hex: '#a99597',
        count: 1,
        relativeLuminance: 63.478422812231415,
      },
      {
        hex: '#a296a4',
        count: 1,
        relativeLuminance: 63.486771405457475,
      },
      {
        hex: '#829eac',
        count: 1,
        relativeLuminance: 63.48981232040681,
      },
      {
        hex: '#7ba0a8',
        count: 1,
        relativeLuminance: 63.49114200550318,
      },
      {
        hex: '#a2979b',
        count: 1,
        relativeLuminance: 63.4923267296148,
      },
      {
        hex: '#7ea0a2',
        count: 1,
        relativeLuminance: 63.49620382129507,
      },
      {
        hex: '#a09a82',
        count: 1,
        relativeLuminance: 63.50495038175343,
      },
      {
        hex: '#9999a3',
        count: 1,
        relativeLuminance: 63.50710902864522,
      },
      {
        hex: '#8b9e98',
        count: 1,
        relativeLuminance: 63.515809503618044,
      },
      {
        hex: '#8a9f90',
        count: 1,
        relativeLuminance: 63.518671919591526,
      },
      {
        hex: '#799fb6',
        count: 1,
        relativeLuminance: 63.53961313057685,
      },
      {
        hex: '#8e9ca5',
        count: 1,
        relativeLuminance: 63.54430759454603,
      },
      {
        hex: '#7da291',
        count: 1,
        relativeLuminance: 63.54483328208998,
      },
      {
        hex: '#9e9996',
        count: 1,
        relativeLuminance: 63.55190927651519,
      },
      {
        hex: '#989b94',
        count: 1,
        relativeLuminance: 63.55407417248195,
      },
      {
        hex: '#9f97a6',
        count: 1,
        relativeLuminance: 63.554987904964875,
      },
      {
        hex: '#aa94a0',
        count: 1,
        relativeLuminance: 63.56041552532655,
      },
      {
        hex: '#919c9e',
        count: 1,
        relativeLuminance: 63.56154667326312,
      },
      {
        hex: '#b09395',
        count: 1,
        relativeLuminance: 63.56333119455924,
      },
      {
        hex: '#af9584',
        count: 1,
        relativeLuminance: 63.569352012127894,
      },
      {
        hex: '#9c98a6',
        count: 1,
        relativeLuminance: 63.57162909608077,
      },
      {
        hex: '#9d999a',
        count: 1,
        relativeLuminance: 63.576634637523966,
      },
      {
        hex: '#999a9c',
        count: 1,
        relativeLuminance: 63.576756990942954,
      },
      {
        hex: '#879ea4',
        count: 1,
        relativeLuminance: 63.57769814499396,
      },
      {
        hex: '#7e9fae',
        count: 1,
        relativeLuminance: 63.58010883157475,
      },
      {
        hex: '#8a9e9d',
        count: 1,
        relativeLuminance: 63.5829250256088,
      },
      {
        hex: '#ad9497',
        count: 2,
        relativeLuminance: 63.58875474159166,
      },
      {
        hex: '#a2998a',
        count: 1,
        relativeLuminance: 63.58909518509071,
      },
      {
        hex: '#a99692',
        count: 1,
        relativeLuminance: 63.60897254965998,
      },
      {
        hex: '#9f989f',
        count: 1,
        relativeLuminance: 63.615188920252365,
      },
      {
        hex: '#9e9a8e',
        count: 1,
        relativeLuminance: 63.61739917524703,
      },
      {
        hex: '#9e98a2',
        count: 1,
        relativeLuminance: 63.618147214575174,
      },
      {
        hex: '#969c92',
        count: 1,
        relativeLuminance: 63.61985327549489,
      },
      {
        hex: '#9b9a98',
        count: 1,
        relativeLuminance: 63.62845064207785,
      },
      {
        hex: '#77a0b4',
        count: 1,
        relativeLuminance: 63.63835722684101,
      },
      {
        hex: '#aa959a',
        count: 1,
        relativeLuminance: 63.650821783629496,
      },
      {
        hex: '#b39482',
        count: 1,
        relativeLuminance: 63.65179522347968,
      },
      {
        hex: '#7ba1a4',
        count: 1,
        relativeLuminance: 63.65655750851218,
      },
      {
        hex: '#8f9d9d',
        count: 1,
        relativeLuminance: 63.66219423286843,
      },
      {
        hex: '#889dae',
        count: 1,
        relativeLuminance: 63.675532880932735,
      },
      {
        hex: '#9e98a4',
        count: 1,
        relativeLuminance: 63.676954844411185,
      },
      {
        hex: '#80a19a',
        count: 1,
        relativeLuminance: 63.68196785614511,
      },
      {
        hex: '#ad9591',
        count: 1,
        relativeLuminance: 63.691338348616455,
      },
      {
        hex: '#919d99',
        count: 1,
        relativeLuminance: 63.699635951455974,
      },
      {
        hex: '#9f9999',
        count: 1,
        relativeLuminance: 63.71577712771048,
      },
      {
        hex: '#76a0b8',
        count: 1,
        relativeLuminance: 63.716230335753465,
      },
      {
        hex: '#b4938c',
        count: 1,
        relativeLuminance: 63.72468720127148,
      },
      {
        hex: '#8a9f98',
        count: 1,
        relativeLuminance: 63.72661998853725,
      },
      {
        hex: '#a995a0',
        count: 1,
        relativeLuminance: 63.72778853853998,
      },
      {
        hex: '#9e999d',
        count: 1,
        relativeLuminance: 63.74244877696857,
      },
      {
        hex: '#979b9e',
        count: 2,
        relativeLuminance: 63.74632164324376,
      },
      {
        hex: '#a696a1',
        count: 1,
        relativeLuminance: 63.748180206056816,
      },
      {
        hex: '#a397a1',
        count: 2,
        relativeLuminance: 63.748232431649015,
      },
      {
        hex: '#76a0b9',
        count: 1,
        relativeLuminance: 63.75067795369442,
      },
      {
        hex: '#aa959e',
        count: 2,
        relativeLuminance: 63.761815078304636,
      },
      {
        hex: '#b09493',
        count: 1,
        relativeLuminance: 63.76748844764437,
      },
      {
        hex: '#9b9b93',
        count: 1,
        relativeLuminance: 63.768581310214316,
      },
      {
        hex: '#849fa8',
        count: 1,
        relativeLuminance: 63.77767691857338,
      },
      {
        hex: '#989aa6',
        count: 2,
        relativeLuminance: 63.78651751811812,
      },
      {
        hex: '#85a192',
        count: 1,
        relativeLuminance: 63.79618557927756,
      },
      {
        hex: '#9e999f',
        count: 2,
        relativeLuminance: 63.79877005961248,
      },
      {
        hex: '#a696a3',
        count: 1,
        relativeLuminance: 63.80633372448291,
      },
      {
        hex: '#919d9d',
        count: 1,
        relativeLuminance: 63.80958314539579,
      },
      {
        hex: '#79a1ad',
        count: 1,
        relativeLuminance: 63.81269606238263,
      },
      {
        hex: '#8a9ea5',
        count: 1,
        relativeLuminance: 63.81415761612408,
      },
      {
        hex: '#74a1b6',
        count: 1,
        relativeLuminance: 63.81949508937704,
      },
      {
        hex: '#969c9a',
        count: 2,
        relativeLuminance: 63.83085878037653,
      },
      {
        hex: '#849faa',
        count: 1,
        relativeLuminance: 63.83904574167197,
      },
      {
        hex: '#9c9a9d',
        count: 1,
        relativeLuminance: 63.84668196193378,
      },
      {
        hex: '#83a199',
        count: 1,
        relativeLuminance: 63.84790382763411,
      },
      {
        hex: '#a79798',
        count: 1,
        relativeLuminance: 63.848528207313436,
      },
      {
        hex: '#7d9fb8',
        count: 1,
        relativeLuminance: 63.84953531567464,
      },
      {
        hex: '#869fa6',
        count: 1,
        relativeLuminance: 63.85022123818763,
      },
      {
        hex: '#aa9698',
        count: 1,
        relativeLuminance: 63.85671498369632,
      },
      {
        hex: '#77a2a9',
        count: 1,
        relativeLuminance: 63.85788431732105,
      },
      {
        hex: '#a6979c',
        count: 1,
        relativeLuminance: 63.86876352066584,
      },
      {
        hex: '#a297a8',
        count: 1,
        relativeLuminance: 63.86977843542559,
      },
      {
        hex: '#a3989c',
        count: 1,
        relativeLuminance: 63.87104284468492,
      },
      {
        hex: '#a5998b',
        count: 1,
        relativeLuminance: 63.873143310028425,
      },
      {
        hex: '#a098a5',
        count: 1,
        relativeLuminance: 63.873787483844154,
      },
      {
        hex: '#83a0a4',
        count: 1,
        relativeLuminance: 63.87425532757024,
      },
      {
        hex: '#ad968e',
        count: 1,
        relativeLuminance: 63.876441959808105,
      },
      {
        hex: '#999c93',
        count: 1,
        relativeLuminance: 63.88125230187549,
      },
      {
        hex: '#79a2a6',
        count: 1,
        relativeLuminance: 63.883665764837545,
      },
      {
        hex: '#8b9ea5',
        count: 2,
        relativeLuminance: 63.884087440523956,
      },
      {
        hex: '#949d98',
        count: 1,
        relativeLuminance: 63.89838592768618,
      },
      {
        hex: '#7ca1aa',
        count: 1,
        relativeLuminance: 63.898601047153306,
      },
      {
        hex: '#809fb4',
        count: 1,
        relativeLuminance: 63.90157750845438,
      },
      {
        hex: '#a7979a',
        count: 1,
        relativeLuminance: 63.90242927557365,
      },
      {
        hex: '#a4989a',
        count: 1,
        relativeLuminance: 63.90265643933476,
      },
      {
        hex: '#b79387',
        count: 2,
        relativeLuminance: 63.90420998656282,
      },
      {
        hex: '#909da3',
        count: 1,
        relativeLuminance: 63.907136525702015,
      },
      {
        hex: '#9b9aa2',
        count: 1,
        relativeLuminance: 63.90780641468889,
      },
      {
        hex: '#77a2ab',
        count: 1,
        relativeLuminance: 63.919598699344064,
      },
      {
        hex: '#a6979e',
        count: 1,
        relativeLuminance: 63.924450920933836,
      },
      {
        hex: '#a298a1',
        count: 1,
        relativeLuminance: 63.92627003318408,
      },
      {
        hex: '#8f9f92',
        count: 1,
        relativeLuminance: 63.92641065375307,
      },
      {
        hex: '#86a09f',
        count: 1,
        relativeLuminance: 63.92796674650356,
      },
      {
        hex: '#8b9f9d',
        count: 1,
        relativeLuminance: 63.93319151324947,
      },
      {
        hex: '#a098a7',
        count: 1,
        relativeLuminance: 63.93360966241676,
      },
      {
        hex: '#83a0a6',
        count: 2,
        relativeLuminance: 63.9336124568991,
      },
      {
        hex: '#b29492',
        count: 1,
        relativeLuminance: 63.933636545759015,
      },
      {
        hex: '#a99795',
        count: 1,
        relativeLuminance: 63.9483325850471,
      },
      {
        hex: '#9a9b9d',
        count: 1,
        relativeLuminance: 63.95555694124447,
      },
      {
        hex: '#7aa1b0',
        count: 2,
        relativeLuminance: 63.967655038657895,
      },
      {
        hex: '#919f8e',
        count: 1,
        relativeLuminance: 63.97343765600219,
      },
      {
        hex: '#a49993',
        count: 1,
        relativeLuminance: 63.98364778817391,
      },
      {
        hex: '#82a0aa',
        count: 1,
        relativeLuminance: 63.990279456028986,
      },
      {
        hex: '#ae9599',
        count: 1,
        relativeLuminance: 63.99333124214698,
      },
      {
        hex: '#8a9fa2',
        count: 1,
        relativeLuminance: 64.00529181963338,
      },
      {
        hex: '#9c9b99',
        count: 1,
        relativeLuminance: 64.00718930302757,
      },
      {
        hex: '#af9596',
        count: 1,
        relativeLuminance: 64.0074685615364,
      },
      {
        hex: '#7ea2a0',
        count: 1,
        relativeLuminance: 64.01030158897464,
      },
      {
        hex: '#82a0ab',
        count: 1,
        relativeLuminance: 64.02116351093794,
      },
      {
        hex: '#9c99ac',
        count: 1,
        relativeLuminance: 64.02216347503483,
      },
      {
        hex: '#84a19d',
        count: 1,
        relativeLuminance: 64.02269171934645,
      },
      {
        hex: '#a69898',
        count: 1,
        relativeLuminance: 64.02339798583431,
      },
      {
        hex: '#b39492',
        count: 1,
        relativeLuminance: 64.03020236725436,
      },
      {
        hex: '#a79895',
        count: 1,
        relativeLuminance: 64.03268079596332,
      },
      {
        hex: '#ac9698',
        count: 1,
        relativeLuminance: 64.03955101869671,
      },
      {
        hex: '#9d9aa1',
        count: 1,
        relativeLuminance: 64.04130739473821,
      },
      {
        hex: '#9b9d88',
        count: 1,
        relativeLuminance: 64.04745300790387,
      },
      {
        hex: '#ae959b',
        count: 1,
        relativeLuminance: 64.04748793759717,
      },
      {
        hex: '#929f8e',
        count: 1,
        relativeLuminance: 64.0476013442959,
      },
      {
        hex: '#8d9ea6',
        count: 1,
        relativeLuminance: 64.05519547032515,
      },
      {
        hex: '#8a9fa4',
        count: 1,
        relativeLuminance: 64.06353230859011,
      },
      {
        hex: '#909e9f',
        count: 1,
        relativeLuminance: 64.06867095631397,
      },
      {
        hex: '#78a2ae',
        count: 1,
        relativeLuminance: 64.07151792435714,
      },
      {
        hex: '#9c9aa5',
        count: 1,
        relativeLuminance: 64.07639598505757,
      },
      {
        hex: '#929e9a',
        count: 1,
        relativeLuminance: 64.07807667094514,
      },
      {
        hex: '#75a1bc',
        count: 1,
        relativeLuminance: 64.08187409259995,
      },
      {
        hex: '#7fa1aa',
        count: 2,
        relativeLuminance: 64.08313769851704,
      },
      {
        hex: '#9b9aa8',
        count: 1,
        relativeLuminance: 64.08546940026136,
      },
      {
        hex: '#7ba2a9',
        count: 1,
        relativeLuminance: 64.09298834770655,
      },
      {
        hex: '#a09a9a',
        count: 1,
        relativeLuminance: 64.09436064010747,
      },
      {
        hex: '#9c9c92',
        count: 1,
        relativeLuminance: 64.09622361596132,
      },
      {
        hex: '#9d9aa3',
        count: 1,
        relativeLuminance: 64.09903621396074,
      },
      {
        hex: '#979e8c',
        count: 1,
        relativeLuminance: 64.1013345672176,
      },
      {
        hex: '#7fa397',
        count: 1,
        relativeLuminance: 64.11292765741277,
      },
      {
        hex: '#7fa1ab',
        count: 1,
        relativeLuminance: 64.11395021471763,
      },
      {
        hex: '#8d9f9f',
        count: 1,
        relativeLuminance: 64.13028890087668,
      },
      {
        hex: '#88a0a2',
        count: 2,
        relativeLuminance: 64.14834626217538,
      },
      {
        hex: '#979e8e',
        count: 1,
        relativeLuminance: 64.14959062295722,
      },
      {
        hex: '#84a0ab',
        count: 1,
        relativeLuminance: 64.15072148516018,
      },
      {
        hex: '#af9692',
        count: 1,
        relativeLuminance: 64.16250901775024,
      },
      {
        hex: '#ae9880',
        count: 1,
        relativeLuminance: 64.17196549721375,
      },
      {
        hex: '#7fa1ad',
        count: 1,
        relativeLuminance: 64.17620548021257,
      },
      {
        hex: '#a99989',
        count: 1,
        relativeLuminance: 64.18003388312614,
      },
      {
        hex: '#88a0a4',
        count: 1,
        relativeLuminance: 64.20637925876366,
      },
      {
        hex: '#ab9798',
        count: 1,
        relativeLuminance: 64.20796040915894,
      },
      {
        hex: '#7ca2ab',
        count: 1,
        relativeLuminance: 64.2143316101844,
      },
      {
        hex: '#85a0ab',
        count: 1,
        relativeLuminance: 64.21628039450697,
      },
      {
        hex: '#7ca1b4',
        count: 1,
        relativeLuminance: 64.21763930944735,
      },
      {
        hex: '#939da6',
        count: 1,
        relativeLuminance: 64.21767788877646,
      },
      {
        hex: '#9f9b98',
        count: 1,
        relativeLuminance: 64.22613191783832,
      },
      {
        hex: '#b1968d',
        count: 1,
        relativeLuminance: 64.2279712567795,
      },
      {
        hex: '#91a08d',
        count: 1,
        relativeLuminance: 64.22922379621355,
      },
      {
        hex: '#ab9799',
        count: 1,
        relativeLuminance: 64.2345671327576,
      },
      {
        hex: '#8f9f9e',
        count: 1,
        relativeLuminance: 64.24546362070942,
      },
      {
        hex: '#939f93',
        count: 1,
        relativeLuminance: 64.24656758054894,
      },
      {
        hex: '#a7989d',
        count: 2,
        relativeLuminance: 64.246875925176,
      },
      {
        hex: '#87a19e',
        count: 1,
        relativeLuminance: 64.2492781787171,
      },
      {
        hex: '#ae978f',
        count: 1,
        relativeLuminance: 64.25396474907963,
      },
      {
        hex: '#b0959c',
        count: 1,
        relativeLuminance: 64.2622363593722,
      },
      {
        hex: '#889faf',
        count: 1,
        relativeLuminance: 64.26252802785208,
      },
      {
        hex: '#7da2ab',
        count: 1,
        relativeLuminance: 64.2748424688561,
      },
      {
        hex: '#b5958a',
        count: 1,
        relativeLuminance: 64.28510991286818,
      },
      {
        hex: '#9c9ba3',
        count: 1,
        relativeLuminance: 64.28617997969825,
      },
      {
        hex: '#a4999f',
        count: 1,
        relativeLuminance: 64.30492559356017,
      },
      {
        hex: '#8fa096',
        count: 1,
        relativeLuminance: 64.30902204204881,
      },
      {
        hex: '#8ca09f',
        count: 1,
        relativeLuminance: 64.3388630673192,
      },
      {
        hex: '#86a0ad',
        count: 1,
        relativeLuminance: 64.34435268438672,
      },
      {
        hex: '#7ba49e',
        count: 1,
        relativeLuminance: 64.34710967153347,
      },
      {
        hex: '#a29b93',
        count: 1,
        relativeLuminance: 64.34723944152951,
      },
      {
        hex: '#9c9e86',
        count: 1,
        relativeLuminance: 64.3570821799267,
      },
      {
        hex: '#9e9aa9',
        count: 1,
        relativeLuminance: 64.35869844879612,
      },
      {
        hex: '#b09880',
        count: 1,
        relativeLuminance: 64.35887259896128,
      },
      {
        hex: '#9a9e8d',
        count: 1,
        relativeLuminance: 64.36027442172268,
      },
      {
        hex: '#9e9d8b',
        count: 1,
        relativeLuminance: 64.3605087634746,
      },
      {
        hex: '#a499a1',
        count: 1,
        relativeLuminance: 64.36136687676539,
      },
      {
        hex: '#a59a94',
        count: 1,
        relativeLuminance: 64.36174204938293,
      },
      {
        hex: '#83a1ab',
        count: 1,
        relativeLuminance: 64.36710237498505,
      },
      {
        hex: '#84a1a9',
        count: 1,
        relativeLuminance: 64.37075733890104,
      },
      {
        hex: '#ab96a7',
        count: 1,
        relativeLuminance: 64.37139818642167,
      },
      {
        hex: '#83a1ac',
        count: 1,
        relativeLuminance: 64.39792994753685,
      },
      {
        hex: '#aa9a83',
        count: 1,
        relativeLuminance: 64.3998239825709,
      },
      {
        hex: '#8e9fa6',
        count: 1,
        relativeLuminance: 64.40327479014898,
      },
      {
        hex: '#ac979c',
        count: 1,
        relativeLuminance: 64.40644768694523,
      },
      {
        hex: '#88a297',
        count: 1,
        relativeLuminance: 64.4105464082961,
      },
      {
        hex: '#8fa09a',
        count: 1,
        relativeLuminance: 64.41463273782642,
      },
      {
        hex: '#8aa292',
        count: 1,
        relativeLuminance: 64.41858486108825,
      },
      {
        hex: '#a598a9',
        count: 1,
        relativeLuminance: 64.4194867380562,
      },
      {
        hex: '#9a9e90',
        count: 1,
        relativeLuminance: 64.43314704428609,
      },
      {
        hex: '#a09aa6',
        count: 1,
        relativeLuminance: 64.43362821974931,
      },
      {
        hex: '#83a2a4',
        count: 1,
        relativeLuminance: 64.44032864675934,
      },
      {
        hex: '#8da196',
        count: 1,
        relativeLuminance: 64.44690192181655,
      },
      {
        hex: '#a89a8d',
        count: 1,
        relativeLuminance: 64.45064320107446,
      },
      {
        hex: '#a9989e',
        count: 1,
        relativeLuminance: 64.45143942016615,
      },
      {
        hex: '#9d9ba6',
        count: 1,
        relativeLuminance: 64.45453475617667,
      },
      {
        hex: '#79a2b8',
        count: 1,
        relativeLuminance: 64.45641445915315,
      },
      {
        hex: '#89a1a1',
        count: 1,
        relativeLuminance: 64.46847891069153,
      },
      {
        hex: '#a19b9b',
        count: 1,
        relativeLuminance: 64.47249797582609,
      },
      {
        hex: '#9e9ba4',
        count: 1,
        relativeLuminance: 64.47716717894222,
      },
      {
        hex: '#a39c8a',
        count: 2,
        relativeLuminance: 64.48224075383632,
      },
      {
        hex: '#a79a92',
        count: 2,
        relativeLuminance: 64.48511047000318,
      },
      {
        hex: '#909fa4',
        count: 1,
        relativeLuminance: 64.48823259613239,
      },
      {
        hex: '#a29c8e',
        count: 1,
        relativeLuminance: 64.49257560021418,
      },
      {
        hex: '#a09aa8',
        count: 1,
        relativeLuminance: 64.49308039387488,
      },
      {
        hex: '#7da2b2',
        count: 1,
        relativeLuminance: 64.49552860265555,
      },
      {
        hex: '#ac998b',
        count: 1,
        relativeLuminance: 64.49730660591774,
      },
      {
        hex: '#a699a0',
        count: 2,
        relativeLuminance: 64.50559239502866,
      },
      {
        hex: '#a998a0',
        count: 1,
        relativeLuminance: 64.50722395638792,
      },
      {
        hex: '#989da3',
        count: 1,
        relativeLuminance: 64.51054014559556,
      },
      {
        hex: '#8fa193',
        count: 1,
        relativeLuminance: 64.51236744179793,
      },
      {
        hex: '#b09792',
        count: 1,
        relativeLuminance: 64.51452207081674,
      },
      {
        hex: '#86a1aa',
        count: 1,
        relativeLuminance: 64.53193796698457,
      },
      {
        hex: '#90a191',
        count: 1,
        relativeLuminance: 64.53435587924793,
      },
      {
        hex: '#9e9ba6',
        count: 2,
        relativeLuminance: 64.53563923491639,
      },
      {
        hex: '#b39692',
        count: 2,
        relativeLuminance: 64.54105945486803,
      },
      {
        hex: '#8ba19f',
        count: 1,
        relativeLuminance: 64.54923002748006,
      },
      {
        hex: '#85a1ad',
        count: 1,
        relativeLuminance: 64.55845491512055,
      },
      {
        hex: '#a998a2',
        count: 1,
        relativeLuminance: 64.56383422368772,
      },
      {
        hex: '#88a392',
        count: 1,
        relativeLuminance: 64.56690013517569,
      },
      {
        hex: '#8ca0a7',
        count: 1,
        relativeLuminance: 64.56941081551449,
      },
      {
        hex: '#a8999c',
        count: 1,
        relativeLuminance: 64.56982402195045,
      },
      {
        hex: '#b3959d',
        count: 1,
        relativeLuminance: 64.57408996650365,
      },
      {
        hex: '#ab989c',
        count: 1,
        relativeLuminance: 64.57551692141088,
      },
      {
        hex: '#87a395',
        count: 1,
        relativeLuminance: 64.57592460365883,
      },
      {
        hex: '#a59b92',
        count: 1,
        relativeLuminance: 64.57763685784786,
      },
      {
        hex: '#9c9bad',
        count: 1,
        relativeLuminance: 64.58596548931654,
      },
      {
        hex: '#a499a9',
        count: 1,
        relativeLuminance: 64.59542798040488,
      },
      {
        hex: '#9b9f88',
        count: 1,
        relativeLuminance: 64.59771767458176,
      },
      {
        hex: '#a89b88',
        count: 1,
        relativeLuminance: 64.59986735584356,
      },
      {
        hex: '#999e9a',
        count: 1,
        relativeLuminance: 64.61109785248422,
      },
      {
        hex: '#ac989a',
        count: 1,
        relativeLuminance: 64.61198225887237,
      },
      {
        hex: '#8aa0ad',
        count: 1,
        relativeLuminance: 64.61341746631305,
      },
      {
        hex: '#ae979d',
        count: 1,
        relativeLuminance: 64.61677527351361,
      },
      {
        hex: '#ad9897',
        count: 2,
        relativeLuminance: 64.62387229206341,
      },
      {
        hex: '#a19aaa',
        count: 1,
        relativeLuminance: 64.63625625487306,
      },
      {
        hex: '#8da0a7',
        count: 1,
        relativeLuminance: 64.63929944329989,
      },
      {
        hex: '#ab9995',
        count: 1,
        relativeLuminance: 64.65207264506235,
      },
      {
        hex: '#b29790',
        count: 1,
        relativeLuminance: 64.65326657182284,
      },
      {
        hex: '#82a1b6',
        count: 1,
        relativeLuminance: 64.65418827068923,
      },
      {
        hex: '#9f9ab0',
        count: 1,
        relativeLuminance: 64.65719242216844,
      },
      {
        hex: '#83a3a2',
        count: 1,
        relativeLuminance: 64.66646492001283,
      },
      {
        hex: '#b0988e',
        count: 1,
        relativeLuminance: 64.67546574850006,
      },
      {
        hex: '#999caf',
        count: 1,
        relativeLuminance: 64.67931123338333,
      },
      {
        hex: '#93a099',
        count: 1,
        relativeLuminance: 64.67945471478876,
      },
      {
        hex: '#be938a',
        count: 1,
        relativeLuminance: 64.68345220619132,
      },
      {
        hex: '#b49694',
        count: 1,
        relativeLuminance: 64.68708449012757,
      },
      {
        hex: '#7ba4aa',
        count: 1,
        relativeLuminance: 64.69510973106478,
      },
      {
        hex: '#bb948d',
        count: 1,
        relativeLuminance: 64.69793805291219,
      },
      {
        hex: '#b8958f',
        count: 1,
        relativeLuminance: 64.69851122104699,
      },
      {
        hex: '#9c9ca8',
        count: 1,
        relativeLuminance: 64.70138525043629,
      },
      {
        hex: '#8ca1a2',
        count: 1,
        relativeLuminance: 64.70283554729829,
      },
      {
        hex: '#9f9ba9',
        count: 1,
        relativeLuminance: 64.70632512305897,
      },
      {
        hex: '#98a08b',
        count: 1,
        relativeLuminance: 64.70864251951542,
      },
      {
        hex: '#82a2af',
        count: 1,
        relativeLuminance: 64.70907455283354,
      },
      {
        hex: '#a69a9e',
        count: 2,
        relativeLuminance: 64.71321408915686,
      },
      {
        hex: '#7da3b0',
        count: 2,
        relativeLuminance: 64.71491788788842,
      },
      {
        hex: '#b69782',
        count: 1,
        relativeLuminance: 64.71576274152069,
      },
      {
        hex: '#9e9bac',
        count: 1,
        relativeLuminance: 64.71603522619282,
      },
      {
        hex: '#b79594',
        count: 1,
        relativeLuminance: 64.72397434223342,
      },
      {
        hex: '#bc948a',
        count: 1,
        relativeLuminance: 64.72865557898645,
      },
      {
        hex: '#a59aa2',
        count: 2,
        relativeLuminance: 64.73904618182637,
      },
      {
        hex: '#88a2a3',
        count: 1,
        relativeLuminance: 64.7391059119228,
      },
      {
        hex: '#a69b95',
        count: 1,
        relativeLuminance: 64.73939478999753,
      },
      {
        hex: '#85a2aa',
        count: 1,
        relativeLuminance: 64.74727894567066,
      },
      {
        hex: '#b89591',
        count: 1,
        relativeLuminance: 64.74734864037347,
      },
      {
        hex: '#a09e89',
        count: 1,
        relativeLuminance: 64.75043862983902,
      },
      {
        hex: '#a89a99',
        count: 1,
        relativeLuminance: 64.75242971092243,
      },
      {
        hex: '#8ea19f',
        count: 1,
        relativeLuminance: 64.75863975008376,
      },
      {
        hex: '#85a3a1',
        count: 1,
        relativeLuminance: 64.76694794921148,
      },
      {
        hex: '#959fa1',
        count: 1,
        relativeLuminance: 64.77085932446198,
      },
      {
        hex: '#82a2b1',
        count: 1,
        relativeLuminance: 64.772269191033,
      },
      {
        hex: '#8da1a2',
        count: 1,
        relativeLuminance: 64.77249357342295,
      },
      {
        hex: '#a39c96',
        count: 1,
        relativeLuminance: 64.77598567655674,
      },
      {
        hex: '#9e9bae',
        count: 1,
        relativeLuminance: 64.77782796179989,
      },
      {
        hex: '#a89a9a',
        count: 1,
        relativeLuminance: 64.77889990381269,
      },
      {
        hex: '#9d9f89',
        count: 1,
        relativeLuminance: 64.78000680560056,
      },
      {
        hex: '#7ca3b4',
        count: 1,
        relativeLuminance: 64.78339042465578,
      },
      {
        hex: '#89a398',
        count: 1,
        relativeLuminance: 64.78736871522577,
      },
      {
        hex: '#a99a97',
        count: 1,
        relativeLuminance: 64.78803425987728,
      },
      {
        hex: '#ab9a90',
        count: 1,
        relativeLuminance: 64.78975746360783,
      },
      {
        hex: '#ae989a',
        count: 1,
        relativeLuminance: 64.79413486486615,
      },
      {
        hex: '#8ea296',
        count: 1,
        relativeLuminance: 64.7982912748314,
      },
      {
        hex: '#8ea0aa',
        count: 1,
        relativeLuminance: 64.79926500656201,
      },
      {
        hex: '#9e9e92',
        count: 1,
        relativeLuminance: 64.80202962896318,
      },
      {
        hex: '#83a49d',
        count: 1,
        relativeLuminance: 64.8119032976704,
      },
      {
        hex: '#83a1b9',
        count: 1,
        relativeLuminance: 64.81770348633957,
      },
      {
        hex: '#b39793',
        count: 1,
        relativeLuminance: 64.82223735134876,
      },
      {
        hex: '#a39d8d',
        count: 1,
        relativeLuminance: 64.82227893122209,
      },
      {
        hex: '#86a3a1',
        count: 1,
        relativeLuminance: 64.83212871142808,
      },
      {
        hex: '#9e9ca7',
        count: 1,
        relativeLuminance: 64.83223061390201,
      },
      {
        hex: '#a39aab',
        count: 1,
        relativeLuminance: 64.83378479759385,
      },
      {
        hex: '#82a3aa',
        count: 1,
        relativeLuminance: 64.83735576706319,
      },
      {
        hex: '#b39794',
        count: 1,
        relativeLuminance: 64.84734685911769,
      },
      {
        hex: '#96a097',
        count: 1,
        relativeLuminance: 64.8512996898517,
      },
      {
        hex: '#8da29b',
        count: 1,
        relativeLuminance: 64.85920374970591,
      },
      {
        hex: '#a49d8b',
        count: 1,
        relativeLuminance: 64.85967812578228,
      },
      {
        hex: '#a49ba0',
        count: 1,
        relativeLuminance: 64.86185290843632,
      },
      {
        hex: '#97a189',
        count: 1,
        relativeLuminance: 64.86338258618518,
      },
      {
        hex: '#91a0a5',
        count: 1,
        relativeLuminance: 64.86559126074245,
      },
      {
        hex: '#b5978d',
        count: 1,
        relativeLuminance: 64.86725858131679,
      },
      {
        hex: '#a19e8b',
        count: 1,
        relativeLuminance: 64.87903613678058,
      },
      {
        hex: '#b8968c',
        count: 1,
        relativeLuminance: 64.88032672610187,
      },
      {
        hex: '#9ca085',
        count: 1,
        relativeLuminance: 64.88549376028011,
      },
      {
        hex: '#79a6a1',
        count: 1,
        relativeLuminance: 64.89154270074854,
      },
      {
        hex: '#ba958f',
        count: 1,
        relativeLuminance: 64.8967684426781,
      },
      {
        hex: '#98a093',
        count: 1,
        relativeLuminance: 64.90188025659226,
      },
      {
        hex: '#c19386',
        count: 1,
        relativeLuminance: 64.90388986221708,
      },
      {
        hex: '#87a2ab',
        count: 1,
        relativeLuminance: 64.90842705201322,
      },
      {
        hex: '#a59aa8',
        count: 1,
        relativeLuminance: 64.91308157430744,
      },
      {
        hex: '#a59d8a',
        count: 1,
        relativeLuminance: 64.9214763563856,
      },
      {
        hex: '#b09898',
        count: 1,
        relativeLuminance: 64.92570714556797,
      },
      {
        hex: '#8ba1ac',
        count: 1,
        relativeLuminance: 64.92863534021144,
      },
      {
        hex: '#a19ca2',
        count: 1,
        relativeLuminance: 64.93290308804873,
      },
      {
        hex: '#a79aa3',
        count: 2,
        relativeLuminance: 64.93957487305444,
      },
      {
        hex: '#7aa4b4',
        count: 1,
        relativeLuminance: 64.94969630650591,
      },
      {
        hex: '#979fa2',
        count: 1,
        relativeLuminance: 64.95004311736027,
      },
      {
        hex: '#98a095',
        count: 1,
        relativeLuminance: 64.95220225257997,
      },
      {
        hex: '#a19ca3',
        count: 2,
        relativeLuminance: 64.96125781477491,
      },
      {
        hex: '#94a28b',
        count: 2,
        relativeLuminance: 64.96308031717173,
      },
      {
        hex: '#82a4a5',
        count: 1,
        relativeLuminance: 64.97317312546285,
      },
      {
        hex: '#7da3b8',
        count: 1,
        relativeLuminance: 64.9745169575541,
      },
      {
        hex: '#89a2a9',
        count: 1,
        relativeLuminance: 64.98129896768509,
      },
      {
        hex: '#a19d9a',
        count: 1,
        relativeLuminance: 64.98169882572918,
      },
      {
        hex: '#9e9da3',
        count: 1,
        relativeLuminance: 64.98430369571726,
      },
      {
        hex: '#969fa6',
        count: 1,
        relativeLuminance: 64.98913637994343,
      },
      {
        hex: '#af989e',
        count: 1,
        relativeLuminance: 64.99355972576586,
      },
      {
        hex: '#9a9dae',
        count: 1,
        relativeLuminance: 64.9942767724983,
      },
      {
        hex: '#85a2b2',
        count: 1,
        relativeLuminance: 64.99554571204744,
      },
      {
        hex: '#989db3',
        count: 1,
        relativeLuminance: 64.99749373256772,
      },
      {
        hex: '#8fa1a5',
        count: 1,
        relativeLuminance: 64.99906028201951,
      },
      {
        hex: '#a99a9f',
        count: 1,
        relativeLuminance: 65.00178134690103,
      },
      {
        hex: '#a59aab',
        count: 1,
        relativeLuminance: 65.00288165267433,
      },
      {
        hex: '#a69b9f',
        count: 1,
        relativeLuminance: 65.00452660275998,
      },
      {
        hex: '#a29bab',
        count: 1,
        relativeLuminance: 65.0136142732303,
      },
      {
        hex: '#ac9b8b',
        count: 1,
        relativeLuminance: 65.02398188338962,
      },
      {
        hex: '#7ba3bd',
        count: 1,
        relativeLuminance: 65.02559609219705,
      },
      {
        hex: '#a19d9c',
        count: 1,
        relativeLuminance: 65.03498346860346,
      },
      {
        hex: '#aa9a9d',
        count: 1,
        relativeLuminance: 65.03519130521231,
      },
      {
        hex: '#a29d99',
        count: 2,
        relativeLuminance: 65.0380914484404,
      },
      {
        hex: '#a99c8c',
        count: 1,
        relativeLuminance: 65.04614663380313,
      },
      {
        hex: '#a89c90',
        count: 1,
        relativeLuminance: 65.05405235891124,
      },
      {
        hex: '#8fa0b0',
        count: 1,
        relativeLuminance: 65.05441593432985,
      },
      {
        hex: '#96a09f',
        count: 1,
        relativeLuminance: 65.0647137171276,
      },
      {
        hex: '#9c9f98',
        count: 1,
        relativeLuminance: 65.06657206107897,
      },
      {
        hex: '#bc9683',
        count: 1,
        relativeLuminance: 65.07572335542811,
      },
      {
        hex: '#99a18c',
        count: 1,
        relativeLuminance: 65.0858063997496,
      },
      {
        hex: '#b29897',
        count: 1,
        relativeLuminance: 65.08606219097447,
      },
      {
        hex: '#9f9cad',
        count: 1,
        relativeLuminance: 65.0933232489974,
      },
      {
        hex: '#b1989b',
        count: 1,
        relativeLuminance: 65.09739755871917,
      },
      {
        hex: '#92a297',
        count: 1,
        relativeLuminance: 65.10995577604322,
      },
      {
        hex: '#ac9c83',
        count: 1,
        relativeLuminance: 65.11016513897361,
      },
      {
        hex: '#989fa5',
        count: 1,
        relativeLuminance: 65.1117493964741,
      },
      {
        hex: '#9ca08f',
        count: 1,
        relativeLuminance: 65.11524052968758,
      },
      {
        hex: '#a59ba6',
        count: 1,
        relativeLuminance: 65.11721323502238,
      },
      {
        hex: '#a19e95',
        count: 1,
        relativeLuminance: 65.12157529947721,
      },
      {
        hex: '#b4979b',
        count: 1,
        relativeLuminance: 65.12344168671115,
      },
      {
        hex: '#a39ca3',
        count: 1,
        relativeLuminance: 65.12718441680815,
      },
      {
        hex: '#a29e92',
        count: 1,
        relativeLuminance: 65.12925307297058,
      },
      {
        hex: '#ac9a9a',
        count: 2,
        relativeLuminance: 65.1328319427775,
      },
      {
        hex: '#8fa2a0',
        count: 1,
        relativeLuminance: 65.13553009134705,
      },
      {
        hex: '#83a3b2',
        count: 1,
        relativeLuminance: 65.14791078933848,
      },
      {
        hex: '#7ea5aa',
        count: 1,
        relativeLuminance: 65.15907672621285,
      },
      {
        hex: '#ae999e',
        count: 1,
        relativeLuminance: 65.16033418071842,
      },
      {
        hex: '#ac9b91',
        count: 1,
        relativeLuminance: 65.16659044078594,
      },
      {
        hex: '#a09da4',
        count: 2,
        relativeLuminance: 65.17463058164977,
      },
      {
        hex: '#80a4b0',
        count: 1,
        relativeLuminance: 65.18003235281219,
      },
      {
        hex: '#8ea39a',
        count: 1,
        relativeLuminance: 65.18284308737881,
      },
      {
        hex: '#b2989b',
        count: 1,
        relativeLuminance: 65.19053585686662,
      },
      {
        hex: '#b69a73',
        count: 1,
        relativeLuminance: 65.19533650722957,
      },
      {
        hex: '#b49894',
        count: 1,
        relativeLuminance: 65.19833449671529,
      },
      {
        hex: '#a99d87',
        count: 1,
        relativeLuminance: 65.1986013928587,
      },
      {
        hex: '#b19995',
        count: 1,
        relativeLuminance: 65.19960803098806,
      },
      {
        hex: '#bb968d',
        count: 1,
        relativeLuminance: 65.20045424710571,
      },
      {
        hex: '#82a4ad',
        count: 1,
        relativeLuminance: 65.21094789138378,
      },
      {
        hex: '#92a390',
        count: 2,
        relativeLuminance: 65.21498603564446,
      },
      {
        hex: '#bf9587',
        count: 1,
        relativeLuminance: 65.21619555177487,
      },
      {
        hex: '#b49895',
        count: 1,
        relativeLuminance: 65.22342786699683,
      },
      {
        hex: '#bb968e',
        count: 1,
        relativeLuminance: 65.22404688131358,
      },
      {
        hex: '#a19e99',
        count: 1,
        relativeLuminance: 65.22421426662743,
      },
      {
        hex: '#aa9aa4',
        count: 1,
        relativeLuminance: 65.22964884833134,
      },
      {
        hex: '#76a6b2',
        count: 1,
        relativeLuminance: 65.23024405486545,
      },
      {
        hex: '#8ea39c',
        count: 2,
        relativeLuminance: 65.23586427232877,
      },
      {
        hex: '#a29caa',
        count: 1,
        relativeLuminance: 65.24778879588435,
      },
      {
        hex: '#9d9f9c',
        count: 1,
        relativeLuminance: 65.2510021655434,
      },
      {
        hex: '#7da5af',
        count: 1,
        relativeLuminance: 65.25156464560958,
      },
      {
        hex: '#a29da1',
        count: 1,
        relativeLuminance: 65.25404442670336,
      },
      {
        hex: '#a79d91',
        count: 1,
        relativeLuminance: 65.25816776575905,
      },
      {
        hex: '#a89ba2',
        count: 1,
        relativeLuminance: 65.26005099636774,
      },
      {
        hex: '#9f9daa',
        count: 1,
        relativeLuminance: 65.26871291627782,
      },
      {
        hex: '#8ba3a5',
        count: 1,
        relativeLuminance: 65.27880792245952,
      },
      {
        hex: '#9e9dad',
        count: 1,
        relativeLuminance: 65.27897096427768,
      },
      {
        hex: '#999eb1',
        count: 1,
        relativeLuminance: 65.27910984185434,
      },
      {
        hex: '#9aa09c',
        count: 1,
        relativeLuminance: 65.28823472035515,
      },
      {
        hex: '#8ea39e',
        count: 1,
        relativeLuminance: 65.2896950028271,
      },
      {
        hex: '#b59a7d',
        count: 1,
        relativeLuminance: 65.29114137203767,
      },
      {
        hex: '#8aa3a8',
        count: 1,
        relativeLuminance: 65.29837223457258,
      },
      {
        hex: '#9f9dab',
        count: 1,
        relativeLuminance: 65.29863347962491,
      },
      {
        hex: '#98a0a2',
        count: 1,
        relativeLuminance: 65.29902880772784,
      },
      {
        hex: '#97a0a5',
        count: 1,
        relativeLuminance: 65.30838497754016,
      },
      {
        hex: '#a29da3',
        count: 1,
        relativeLuminance: 65.31006465208372,
      },
      {
        hex: '#80a5ab',
        count: 1,
        relativeLuminance: 65.31011814469039,
      },
      {
        hex: '#81a69f',
        count: 1,
        relativeLuminance: 65.31250343545778,
      },
      {
        hex: '#aa9aa7',
        count: 1,
        relativeLuminance: 65.31604746917601,
      },
      {
        hex: '#8ea2a9',
        count: 1,
        relativeLuminance: 65.32292901677744,
      },
      {
        hex: '#aa9b9e',
        count: 1,
        relativeLuminance: 65.32398529051858,
      },
      {
        hex: '#7ba5b5',
        count: 1,
        relativeLuminance: 65.3240304379547,
      },
      {
        hex: '#ad9a9e',
        count: 1,
        relativeLuminance: 65.32925729122714,
      },
      {
        hex: '#ab9b9b',
        count: 1,
        relativeLuminance: 65.33170614961472,
      },
      {
        hex: '#8ba3a7',
        count: 1,
        relativeLuminance: 65.33658195656861,
      },
      {
        hex: '#a39da1',
        count: 1,
        relativeLuminance: 65.3368236917407,
      },
      {
        hex: '#ae9a9b',
        count: 1,
        relativeLuminance: 65.3389863101328,
      },
      {
        hex: '#8fa493',
        count: 1,
        relativeLuminance: 65.35527125238718,
      },
      {
        hex: '#8aa3aa',
        count: 1,
        relativeLuminance: 65.35746920891897,
      },
      {
        hex: '#80a5ad',
        count: 1,
        relativeLuminance: 65.37055722671737,
      },
      {
        hex: '#a79ba9',
        count: 1,
        relativeLuminance: 65.37539802272248,
      },
      {
        hex: '#90a2a6',
        count: 1,
        relativeLuminance: 65.37569237740217,
      },
      {
        hex: '#95a299',
        count: 2,
        relativeLuminance: 65.38119431684187,
      },
      {
        hex: '#99a28d',
        count: 1,
        relativeLuminance: 65.38584732051076,
      },
      {
        hex: '#8fa2a9',
        count: 1,
        relativeLuminance: 65.39277533422232,
      },
      {
        hex: '#80a5ae',
        count: 1,
        relativeLuminance: 65.40108424929899,
      },
      {
        hex: '#90a39d',
        count: 1,
        relativeLuminance: 65.40308269436949,
      },
      {
        hex: '#b49992',
        count: 1,
        relativeLuminance: 65.40550710565955,
      },
      {
        hex: '#af9b90',
        count: 1,
        relativeLuminance: 65.41271350261036,
      },
      {
        hex: '#9ea095',
        count: 1,
        relativeLuminance: 65.42085489578103,
      },
      {
        hex: '#a99d91',
        count: 1,
        relativeLuminance: 65.43078464330195,
      },
      {
        hex: '#82a5ab',
        count: 1,
        relativeLuminance: 65.43319805774289,
      },
      {
        hex: '#86a4ac',
        count: 1,
        relativeLuminance: 65.43432885624928,
      },
      {
        hex: '#a79ca2',
        count: 2,
        relativeLuminance: 65.4368783468009,
      },
      {
        hex: '#9f9f9d',
        count: 1,
        relativeLuminance: 65.43724319745432,
      },
      {
        hex: '#a39e9b',
        count: 1,
        relativeLuminance: 65.44138847001118,
      },
      {
        hex: '#96a1a3',
        count: 1,
        relativeLuminance: 65.45025536002305,
      },
      {
        hex: '#9e9eaa',
        count: 1,
        relativeLuminance: 65.45573515820335,
      },
      {
        hex: '#b39998',
        count: 2,
        relativeLuminance: 65.46206283705759,
      },
      {
        hex: '#8ca3a9',
        count: 1,
        relativeLuminance: 65.4630331278711,
      },
      {
        hex: '#7fa5b2',
        count: 1,
        relativeLuminance: 65.46478788674449,
      },
      {
        hex: '#9e9fa1',
        count: 1,
        relativeLuminance: 65.46630744414965,
      },
      {
        hex: '#a89ca0',
        count: 1,
        relativeLuminance: 65.46728448797683,
      },
      {
        hex: '#8fa3a2',
        count: 1,
        relativeLuminance: 65.46950308675962,
      },
      {
        hex: '#b2999c',
        count: 1,
        relativeLuminance: 65.4734873302381,
      },
      {
        hex: '#a89d97',
        count: 2,
        relativeLuminance: 65.49338789805783,
      },
      {
        hex: '#7ba7a8',
        count: 1,
        relativeLuminance: 65.49526959287546,
      },
      {
        hex: '#b2999d',
        count: 1,
        relativeLuminance: 65.5001453411506,
      },
      {
        hex: '#a49da4',
        count: 1,
        relativeLuminance: 65.50408257374686,
      },
      {
        hex: '#a39da7',
        count: 1,
        relativeLuminance: 65.50698167032458,
      },
      {
        hex: '#90a3a1',
        count: 1,
        relativeLuminance: 65.5119892497382,
      },
      {
        hex: '#82a6a4',
        count: 1,
        relativeLuminance: 65.51332990601405,
      },
      {
        hex: '#8ca3ab',
        count: 1,
        relativeLuminance: 65.52234208185658,
      },
      {
        hex: '#95a394',
        count: 1,
        relativeLuminance: 65.53170127057959,
      },
      {
        hex: '#a49da5',
        count: 1,
        relativeLuminance: 65.5324858035847,
      },
      {
        hex: '#a79d9c',
        count: 1,
        relativeLuminance: 65.53770152256251,
      },
      {
        hex: '#ab9c99',
        count: 1,
        relativeLuminance: 65.54164318842513,
      },
      {
        hex: '#a89d99',
        count: 1,
        relativeLuminance: 65.54470415547067,
      },
      {
        hex: '#a0a094',
        count: 1,
        relativeLuminance: 65.55615189530019,
      },
      {
        hex: '#97a38f',
        count: 1,
        relativeLuminance: 65.55893049419787,
      },
      {
        hex: '#a69da0',
        count: 1,
        relativeLuminance: 65.5605988538005,
      },
      {
        hex: '#93a2a5',
        count: 1,
        relativeLuminance: 65.56163074621908,
      },
      {
        hex: '#b3999c',
        count: 1,
        relativeLuminance: 65.5664436915643,
      },
      {
        hex: '#9c9eb3',
        count: 1,
        relativeLuminance: 65.57413925016589,
      },
      {
        hex: '#aa9e88',
        count: 1,
        relativeLuminance: 65.5749431566108,
      },
      {
        hex: '#87a5a5',
        count: 1,
        relativeLuminance: 65.57528356966509,
      },
      {
        hex: '#a99baa',
        count: 1,
        relativeLuminance: 65.57701078218716,
      },
      {
        hex: '#a99e8c',
        count: 1,
        relativeLuminance: 65.57873100473653,
      },
      {
        hex: '#a89bad',
        count: 1,
        relativeLuminance: 65.58065814104127,
      },
      {
        hex: '#ac9ba1',
        count: 1,
        relativeLuminance: 65.58214653506401,
      },
      {
        hex: '#a09ea9',
        count: 1,
        relativeLuminance: 65.58630590352018,
      },
      {
        hex: '#84a5ac',
        count: 1,
        relativeLuminance: 65.58824643637017,
      },
      {
        hex: '#c5929b',
        count: 1,
        relativeLuminance: 65.58846929887373,
      },
      {
        hex: '#a69f8c',
        count: 1,
        relativeLuminance: 65.59008846496694,
      },
      {
        hex: '#a79d9e',
        count: 1,
        relativeLuminance: 65.59113483964377,
      },
      {
        hex: '#8ba59c',
        count: 1,
        relativeLuminance: 65.59229226557916,
      },
      {
        hex: '#86a5a8',
        count: 1,
        relativeLuminance: 65.59715175549958,
      },
      {
        hex: '#be996c',
        count: 1,
        relativeLuminance: 65.60228719819922,
      },
      {
        hex: '#ab9ba5',
        count: 1,
        relativeLuminance: 65.60611892561863,
      },
      {
        hex: '#97a29c',
        count: 1,
        relativeLuminance: 65.60849494729875,
      },
      {
        hex: '#b69993',
        count: 1,
        relativeLuminance: 65.61932368988481,
      },
      {
        hex: '#a59f91',
        count: 1,
        relativeLuminance: 65.62385932382132,
      },
      {
        hex: '#9fa09a',
        count: 1,
        relativeLuminance: 65.62830496013228,
      },
      {
        hex: '#98a29a',
        count: 1,
        relativeLuminance: 65.63105440499227,
      },
      {
        hex: '#ab9ba6',
        count: 2,
        relativeLuminance: 65.63467356225122,
      },
      {
        hex: '#a99ca3',
        count: 2,
        relativeLuminance: 65.6366281189962,
      },
      {
        hex: '#ae9aa6',
        count: 1,
        relativeLuminance: 65.64189979309461,
      },
      {
        hex: '#b39a95',
        count: 1,
        relativeLuminance: 65.64329506363727,
      },
      {
        hex: '#88a4af',
        count: 1,
        relativeLuminance: 65.65536888128085,
      },
      {
        hex: '#9aa295',
        count: 1,
        relativeLuminance: 65.65560861055326,
      },
      {
        hex: '#b69995',
        count: 1,
        relativeLuminance: 65.66876570477697,
      },
      {
        hex: '#8ea4a2',
        count: 1,
        relativeLuminance: 65.6787976031281,
      },
      {
        hex: '#a89e94',
        count: 1,
        relativeLuminance: 65.68373555026076,
      },
      {
        hex: '#98a1a6',
        count: 1,
        relativeLuminance: 65.68501696786313,
      },
      {
        hex: '#80a5b7',
        count: 1,
        relativeLuminance: 65.68505323716381,
      },
      {
        hex: '#ab9ba8',
        count: 1,
        relativeLuminance: 65.692391085526,
      },
      {
        hex: '#bb9797',
        count: 1,
        relativeLuminance: 65.69598400858962,
      },
      {
        hex: '#8fa3aa',
        count: 1,
        relativeLuminance: 65.69904477404386,
      },
      {
        hex: '#af9b9c',
        count: 1,
        relativeLuminance: 65.71513429441573,
      },
      {
        hex: '#b39d74',
        count: 1,
        relativeLuminance: 65.71642160423386,
      },
      {
        hex: '#9ea196',
        count: 1,
        relativeLuminance: 65.71817131301603,
      },
      {
        hex: '#a69e9c',
        count: 1,
        relativeLuminance: 65.71829860439192,
      },
      {
        hex: '#9fa193',
        count: 1,
        relativeLuminance: 65.72316003484147,
      },
      {
        hex: '#b9998c',
        count: 1,
        relativeLuminance: 65.74103707502871,
      },
      {
        hex: '#b19aa0',
        count: 1,
        relativeLuminance: 65.74584618934163,
      },
      {
        hex: '#79a7b4',
        count: 1,
        relativeLuminance: 65.74685001621026,
      },
      {
        hex: '#a89caa',
        count: 1,
        relativeLuminance: 65.75181391658434,
      },
      {
        hex: '#ab9ca1',
        count: 1,
        relativeLuminance: 65.7549476419329,
      },
      {
        hex: '#b698a2',
        count: 1,
        relativeLuminance: 65.75659899759734,
      },
      {
        hex: '#a89da1',
        count: 1,
        relativeLuminance: 65.75799265814754,
      },
      {
        hex: '#ad9aad',
        count: 1,
        relativeLuminance: 65.75844992922875,
      },
      {
        hex: '#8fa3ac',
        count: 1,
        relativeLuminance: 65.75846069215065,
      },
      {
        hex: '#9ea198',
        count: 1,
        relativeLuminance: 65.76877634976043,
      },
      {
        hex: '#91a49e',
        count: 1,
        relativeLuminance: 65.7792381943329,
      },
      {
        hex: '#93a3a3',
        count: 1,
        relativeLuminance: 65.78117540042942,
      },
      {
        hex: '#a79da5',
        count: 1,
        relativeLuminance: 65.78449757115646,
      },
      {
        hex: '#9ca294',
        count: 1,
        relativeLuminance: 65.78500694450979,
      },
      {
        hex: '#9fa196',
        count: 3,
        relativeLuminance: 65.79743232683663,
      },
      {
        hex: '#a0a193',
        count: 1,
        relativeLuminance: 65.80305460765317,
      },
      {
        hex: '#94a2ab',
        count: 1,
        relativeLuminance: 65.80844201888105,
      },
      {
        hex: '#ab9ca3',
        count: 1,
        relativeLuminance: 65.81028420754004,
      },
      {
        hex: '#a89da3',
        count: 1,
        relativeLuminance: 65.81332510607291,
      },
      {
        hex: '#88a5ab',
        count: 1,
        relativeLuminance: 65.81461949825174,
      },
      {
        hex: '#98a2a1',
        count: 1,
        relativeLuminance: 65.81810820462096,
      },
      {
        hex: '#8fa3ae',
        count: 1,
        relativeLuminance: 65.81868949011076,
      },
      {
        hex: '#bd9794',
        count: 1,
        relativeLuminance: 65.81879417270143,
      },
      {
        hex: '#82a4c0',
        count: 1,
        relativeLuminance: 65.82840259634666,
      },
      {
        hex: '#ae9c9a',
        count: 1,
        relativeLuminance: 65.83320600865358,
      },
      {
        hex: '#b89994',
        count: 1,
        relativeLuminance: 65.8349404885534,
      },
      {
        hex: '#8da4aa',
        count: 1,
        relativeLuminance: 65.83881530517213,
      },
      {
        hex: '#99a29f',
        count: 1,
        relativeLuminance: 65.83900954994111,
      },
      {
        hex: '#a19eaf',
        count: 1,
        relativeLuminance: 65.84659348461552,
      },
      {
        hex: '#95a2aa',
        count: 1,
        relativeLuminance: 65.85169560621898,
      },
      {
        hex: '#bf978d',
        count: 1,
        relativeLuminance: 65.85182699361256,
      },
      {
        hex: '#94a499',
        count: 1,
        relativeLuminance: 65.86274105790572,
      },
      {
        hex: '#9aa1a7',
        count: 1,
        relativeLuminance: 65.86511454202277,
      },
      {
        hex: '#a99e98',
        count: 1,
        relativeLuminance: 65.86973426467151,
      },
      {
        hex: '#98a2a3',
        count: 1,
        relativeLuminance: 65.87335945409139,
      },
      {
        hex: '#a79e9f',
        count: 1,
        relativeLuminance: 65.8826789034791,
      },
      {
        hex: '#97a2a6',
        count: 1,
        relativeLuminance: 65.88324637649305,
      },
      {
        hex: '#91a4a2',
        count: 1,
        relativeLuminance: 65.88802012769462,
      },
      {
        hex: '#bf978f',
        count: 1,
        relativeLuminance: 65.89846051185255,
      },
      {
        hex: '#af9d8f',
        count: 1,
        relativeLuminance: 65.91266792011625,
      },
      {
        hex: '#b7999b',
        count: 1,
        relativeLuminance: 65.91672418298164,
      },
      {
        hex: '#91a599',
        count: 1,
        relativeLuminance: 65.92727863531105,
      },
      {
        hex: '#91a3ad',
        count: 1,
        relativeLuminance: 65.92831817963074,
      },
      {
        hex: '#90a59c',
        count: 1,
        relativeLuminance: 65.93498476261516,
      },
      {
        hex: '#92a3ab',
        count: 1,
        relativeLuminance: 65.93947422373408,
      },
      {
        hex: '#a49eaa',
        count: 1,
        relativeLuminance: 65.94169059930485,
      },
      {
        hex: '#b69a96',
        count: 1,
        relativeLuminance: 65.94926984540034,
      },
      {
        hex: '#95a3a4',
        count: 1,
        relativeLuminance: 65.95390920718242,
      },
      {
        hex: '#c49686',
        count: 1,
        relativeLuminance: 65.95809436492134,
      },
      {
        hex: '#b9989f',
        count: 1,
        relativeLuminance: 65.96140806903588,
      },
      {
        hex: '#84a5b8',
        count: 1,
        relativeLuminance: 65.96336632180895,
      },
      {
        hex: '#97a39f',
        count: 1,
        relativeLuminance: 65.96368078738566,
      },
      {
        hex: '#b09ba2',
        count: 2,
        relativeLuminance: 65.96719104565658,
      },
      {
        hex: '#b89a8f',
        count: 1,
        relativeLuminance: 65.96973783527595,
      },
      {
        hex: '#bd9890',
        count: 2,
        relativeLuminance: 65.97297969596912,
      },
      {
        hex: '#8aa5ac',
        count: 2,
        relativeLuminance: 65.97545118829153,
      },
      {
        hex: '#99a39a',
        count: 1,
        relativeLuminance: 65.98140160103048,
      },
      {
        hex: '#b69c81',
        count: 1,
        relativeLuminance: 65.98698468919437,
      },
      {
        hex: '#90a59e',
        count: 1,
        relativeLuminance: 65.98790166661816,
      },
      {
        hex: '#84a6b0',
        count: 1,
        relativeLuminance: 65.99129003656192,
      },
      {
        hex: '#a79ea3',
        count: 1,
        relativeLuminance: 65.99205945911865,
      },
      {
        hex: '#b79a94',
        count: 1,
        relativeLuminance: 65.99441764828242,
      },
      {
        hex: '#95a3a6',
        count: 2,
        relativeLuminance: 66.01029518471773,
      },
      {
        hex: '#9da1a4',
        count: 1,
        relativeLuminance: 66.01110924211378,
      },
      {
        hex: '#bd9892',
        count: 2,
        relativeLuminance: 66.02073125690268,
      },
      {
        hex: '#a19fac',
        count: 1,
        relativeLuminance: 66.02172609847383,
      },
      {
        hex: '#85a6af',
        count: 1,
        relativeLuminance: 66.02344935834465,
      },
      {
        hex: '#9ea38c',
        count: 1,
        relativeLuminance: 66.02562161146885,
      },
      {
        hex: '#8fa5a2',
        count: 1,
        relativeLuminance: 66.02686320582944,
      },
      {
        hex: '#af9c9e',
        count: 2,
        relativeLuminance: 66.02761664655233,
      },
      {
        hex: '#bb9990',
        count: 2,
        relativeLuminance: 66.028669554395,
      },
      {
        hex: '#87a6ab',
        count: 1,
        relativeLuminance: 66.03078024950646,
      },
      {
        hex: '#ab9e98',
        count: 1,
        relativeLuminance: 66.042405985375,
      },
      {
        hex: '#b49b97',
        count: 1,
        relativeLuminance: 66.04372659557913,
      },
      {
        hex: '#b79a96',
        count: 1,
        relativeLuminance: 66.04383232434535,
      },
      {
        hex: '#8ca5aa',
        count: 1,
        relativeLuminance: 66.04963322654535,
      },
      {
        hex: '#94a3aa',
        count: 1,
        relativeLuminance: 66.05316446065501,
      },
      {
        hex: '#b39b9b',
        count: 1,
        relativeLuminance: 66.05346456468283,
      },
      {
        hex: '#ac9e95',
        count: 1,
        relativeLuminance: 66.05450676350969,
      },
      {
        hex: '#8ea4af',
        count: 1,
        relativeLuminance: 66.05647379311998,
      },
      {
        hex: '#91a4a8',
        count: 1,
        relativeLuminance: 66.05722108322828,
      },
      {
        hex: '#92a4a6',
        count: 1,
        relativeLuminance: 66.07056408181016,
      },
      {
        hex: '#ac9da0',
        count: 1,
        relativeLuminance: 66.07641751446118,
      },
      {
        hex: '#a69ea9',
        count: 1,
        relativeLuminance: 66.07844130715303,
      },
      {
        hex: '#9aa2a5',
        count: 1,
        relativeLuminance: 66.07999718784983,
      },
      {
        hex: '#b9999a',
        count: 1,
        relativeLuminance: 66.08196586937633,
      },
      {
        hex: '#ad9d9d',
        count: 1,
        relativeLuminance: 66.08401412177125,
      },
      {
        hex: '#a1a0a5',
        count: 1,
        relativeLuminance: 66.08616965419549,
      },
      {
        hex: '#81a7b0',
        count: 1,
        relativeLuminance: 66.08914877356283,
      },
      {
        hex: '#a49fa6',
        count: 2,
        relativeLuminance: 66.09131961862535,
      },
      {
        hex: '#9ca2a0',
        count: 1,
        relativeLuminance: 66.09493655944864,
      },
      {
        hex: '#80a6bb',
        count: 1,
        relativeLuminance: 66.09712966844087,
      },
      {
        hex: '#8ca5ac',
        count: 1,
        relativeLuminance: 66.10854302126255,
      },
      {
        hex: '#aa9e9e',
        count: 1,
        relativeLuminance: 66.11171920989875,
      },
      {
        hex: '#a4a09d',
        count: 1,
        relativeLuminance: 66.11176280048437,
      },
      {
        hex: '#91a4aa',
        count: 1,
        relativeLuminance: 66.1152312355454,
      },
      {
        hex: '#99a2a9',
        count: 1,
        relativeLuminance: 66.11877858863916,
      },
      {
        hex: '#a8a184',
        count: 1,
        relativeLuminance: 66.1210732707612,
      },
      {
        hex: '#a99dab',
        count: 1,
        relativeLuminance: 66.12780027558983,
      },
      {
        hex: '#b49c90',
        count: 1,
        relativeLuminance: 66.13136125345702,
      },
      {
        hex: '#97a49b',
        count: 1,
        relativeLuminance: 66.13362675874457,
      },
      {
        hex: '#b39c94',
        count: 1,
        relativeLuminance: 66.1351475844819,
      },
      {
        hex: '#9ea1a6',
        count: 1,
        relativeLuminance: 66.14536910073203,
      },
      {
        hex: '#82a7b0',
        count: 1,
        relativeLuminance: 66.14986870092316,
      },
      {
        hex: '#b09e8a',
        count: 1,
        relativeLuminance: 66.15060525492166,
      },
      {
        hex: '#af9e8e',
        count: 1,
        relativeLuminance: 66.15204660111178,
      },
      {
        hex: '#ba9c76',
        count: 2,
        relativeLuminance: 66.15464402872642,
      },
      {
        hex: '#ad9da0',
        count: 1,
        relativeLuminance: 66.16404828935735,
      },
      {
        hex: '#aa9ea0',
        count: 3,
        relativeLuminance: 66.16527285771014,
      },
      {
        hex: '#8aa6a9',
        count: 1,
        relativeLuminance: 66.16716098284382,
      },
      {
        hex: '#95a3ac',
        count: 1,
        relativeLuminance: 66.18428256339828,
      },
      {
        hex: '#8ca6a5',
        count: 1,
        relativeLuminance: 66.18581815779736,
      },
      {
        hex: '#b89a98',
        count: 1,
        relativeLuminance: 66.18893780480141,
      },
      {
        hex: '#a2a19c',
        count: 1,
        relativeLuminance: 66.19115035228113,
      },
      {
        hex: '#ad9e97',
        count: 1,
        relativeLuminance: 66.19184457126995,
      },
      {
        hex: '#a5a09d',
        count: 2,
        relativeLuminance: 66.19411166738438,
      },
      {
        hex: '#ac9e9b',
        count: 1,
        relativeLuminance: 66.2061764551721,
      },
      {
        hex: '#9da397',
        count: 1,
        relativeLuminance: 66.21073119693693,
      },
      {
        hex: '#91a5a4',
        count: 1,
        relativeLuminance: 66.22111921871432,
      },
      {
        hex: '#bb9998',
        count: 1,
        relativeLuminance: 66.22413165708872,
      },
      {
        hex: '#b49b9e',
        count: 1,
        relativeLuminance: 66.22440140697506,
      },
      {
        hex: '#96a3ab',
        count: 2,
        relativeLuminance: 66.22754130209177,
      },
      {
        hex: '#9ca39b',
        count: 1,
        relativeLuminance: 66.23536877716393,
      },
      {
        hex: '#95a59a',
        count: 1,
        relativeLuminance: 66.23849146149327,
      },
      {
        hex: '#b89a9a',
        count: 1,
        relativeLuminance: 66.23981565894593,
      },
      {
        hex: '#ad9e99',
        count: 1,
        relativeLuminance: 66.24229317767893,
      },
      {
        hex: '#94a59d',
        count: 1,
        relativeLuminance: 66.24431158542008,
      },
      {
        hex: '#a99ea6',
        count: 1,
        relativeLuminance: 66.2454051491841,
      },
      {
        hex: '#b49b9f',
        count: 1,
        relativeLuminance: 66.25100559784951,
      },
      {
        hex: '#8fa6a0',
        count: 1,
        relativeLuminance: 66.25173632890638,
      },
      {
        hex: '#a89fa0',
        count: 1,
        relativeLuminance: 66.25867961939777,
      },
      {
        hex: '#98a3a7',
        count: 1,
        relativeLuminance: 66.25916853543949,
      },
      {
        hex: '#b99a97',
        count: 1,
        relativeLuminance: 66.2592065730382,
      },
      {
        hex: '#9ca39c',
        count: 2,
        relativeLuminance: 66.2613208520449,
      },
      {
        hex: '#b59b9c',
        count: 1,
        relativeLuminance: 66.26450490102177,
      },
      {
        hex: '#8da5af',
        count: 1,
        relativeLuminance: 66.26557040383295,
      },
      {
        hex: '#99a3a5',
        count: 1,
        relativeLuminance: 66.27723159813813,
      },
      {
        hex: '#8aa7a3',
        count: 1,
        relativeLuminance: 66.27857483827742,
      },
      {
        hex: '#80a7b8',
        count: 1,
        relativeLuminance: 66.28031843040227,
      },
      {
        hex: '#a1a38d',
        count: 1,
        relativeLuminance: 66.2858676949781,
      },
      {
        hex: '#c29888',
        count: 2,
        relativeLuminance: 66.29266012045363,
      },
      {
        hex: '#b29c9e',
        count: 1,
        relativeLuminance: 66.2981554967688,
      },
      {
        hex: '#a1a1a3',
        count: 1,
        relativeLuminance: 66.29862846619265,
      },
      {
        hex: '#b39d90',
        count: 1,
        relativeLuminance: 66.29871677669485,
      },
      {
        hex: '#b89c87',
        count: 1,
        relativeLuminance: 66.30277767234672,
      },
      {
        hex: '#b09ca5',
        count: 1,
        relativeLuminance: 66.30823245966872,
      },
      {
        hex: '#be9a84',
        count: 1,
        relativeLuminance: 66.30872576367142,
      },
      {
        hex: '#93a4ac',
        count: 1,
        relativeLuminance: 66.31504250510937,
      },
      {
        hex: '#90a5aa',
        count: 1,
        relativeLuminance: 66.32219704779959,
      },
      {
        hex: '#b79b97',
        count: 1,
        relativeLuminance: 66.32411342219034,
      },
      {
        hex: '#89a7a7',
        count: 1,
        relativeLuminance: 66.32525265017857,
      },
      {
        hex: '#c39885',
        count: 1,
        relativeLuminance: 66.33002072124295,
      },
      {
        hex: '#bf998c',
        count: 1,
        relativeLuminance: 66.33021352147945,
      },
      {
        hex: '#aba08e',
        count: 1,
        relativeLuminance: 66.33040639341944,
      },
      {
        hex: '#9ea2a3',
        count: 1,
        relativeLuminance: 66.33161367345706,
      },
      {
        hex: '#97a598',
        count: 1,
        relativeLuminance: 66.33350918263127,
      },
      {
        hex: '#a9a18a',
        count: 1,
        relativeLuminance: 66.33593283244907,
      },
      {
        hex: '#9da2a6',
        count: 1,
        relativeLuminance: 66.33762167404808,
      },
      {
        hex: '#98a4a0',
        count: 1,
        relativeLuminance: 66.33950281024376,
      },
      {
        hex: '#ac9f96',
        count: 2,
        relativeLuminance: 66.34299763931746,
      },
      {
        hex: '#a99fa0',
        count: 2,
        relativeLuminance: 66.34331778340345,
      },
      {
        hex: '#b99b90',
        count: 1,
        relativeLuminance: 66.34426790818172,
      },
      {
        hex: '#b79b98',
        count: 1,
        relativeLuminance: 66.34915847662162,
      },
      {
        hex: '#bb9a93',
        count: 1,
        relativeLuminance: 66.35346571423793,
      },
      {
        hex: '#a6a0a0',
        count: 1,
        relativeLuminance: 66.35660023640966,
      },
      {
        hex: '#9aa49b',
        count: 1,
        relativeLuminance: 66.35723962540814,
      },
      {
        hex: '#ad9da7',
        count: 1,
        relativeLuminance: 66.35777464400408,
      },
      {
        hex: '#85a7b1',
        count: 1,
        relativeLuminance: 66.36552485620514,
      },
      {
        hex: '#af9e97',
        count: 1,
        relativeLuminance: 66.36839462820998,
      },
      {
        hex: '#a0a29f',
        count: 1,
        relativeLuminance: 66.3802045260401,
      },
      {
        hex: '#b09e94',
        count: 2,
        relativeLuminance: 66.38365212121633,
      },
      {
        hex: '#aa9ea8',
        count: 1,
        relativeLuminance: 66.38746676785564,
      },
      {
        hex: '#97a68f',
        count: 1,
        relativeLuminance: 66.3935949454348,
      },
      {
        hex: '#c39888',
        count: 1,
        relativeLuminance: 66.39453960509172,
      },
      {
        hex: '#b29f81',
        count: 1,
        relativeLuminance: 66.40226593074979,
      },
      {
        hex: '#bc9a91',
        count: 1,
        relativeLuminance: 66.40278058511078,
      },
      {
        hex: '#a6a0a2',
        count: 1,
        relativeLuminance: 66.41069910528911,
      },
      {
        hex: '#9da39f',
        count: 1,
        relativeLuminance: 66.41717207422715,
      },
      {
        hex: '#a3a0ab',
        count: 1,
        relativeLuminance: 66.4192621108258,
      },
      {
        hex: '#bf9990',
        count: 1,
        relativeLuminance: 66.42235027768926,
      },
      {
        hex: '#9fa48e',
        count: 1,
        relativeLuminance: 66.42418311613122,
      },
      {
        hex: '#8da6ab',
        count: 1,
        relativeLuminance: 66.42463468067747,
      },
      {
        hex: '#95a4ab',
        count: 1,
        relativeLuminance: 66.42871141942845,
      },
      {
        hex: '#ad9f96',
        count: 1,
        relativeLuminance: 66.43006283338318,
      },
      {
        hex: '#88a8a3',
        count: 1,
        relativeLuminance: 66.43108005337228,
      },
      {
        hex: '#92a794',
        count: 1,
        relativeLuminance: 66.43314444374353,
      },
      {
        hex: '#8aa6b2',
        count: 1,
        relativeLuminance: 66.43583868516302,
      },
      {
        hex: '#94a69a',
        count: 1,
        relativeLuminance: 66.44454106568091,
      },
      {
        hex: '#ab9ea7',
        count: 1,
        relativeLuminance: 66.44472259053357,
      },
      {
        hex: '#a6a382',
        count: 1,
        relativeLuminance: 66.4534597913243,
      },
      {
        hex: '#a2a391',
        count: 1,
        relativeLuminance: 66.4588312668806,
      },
      {
        hex: '#aaa097',
        count: 1,
        relativeLuminance: 66.46030277529805,
      },
      {
        hex: '#a1a1a9',
        count: 1,
        relativeLuminance: 66.46745917761305,
      },
      {
        hex: '#a0a398',
        count: 1,
        relativeLuminance: 66.47020489209977,
      },
      {
        hex: '#b19f89',
        count: 1,
        relativeLuminance: 66.4813426543991,
      },
      {
        hex: '#8ba7a8',
        count: 1,
        relativeLuminance: 66.48442112222992,
      },
      {
        hex: '#a3a1a4',
        count: 1,
        relativeLuminance: 66.48675402030696,
      },
      {
        hex: '#ab9f9f',
        count: 1,
        relativeLuminance: 66.48736558086789,
      },
      {
        hex: '#b39e8d',
        count: 1,
        relativeLuminance: 66.4897425686015,
      },
      {
        hex: '#a2a1a7',
        count: 1,
        relativeLuminance: 66.49022281638818,
      },
      {
        hex: '#95a5a4',
        count: 1,
        relativeLuminance: 66.50476584137512,
      },
      {
        hex: '#b89aa4',
        count: 1,
        relativeLuminance: 66.50608150544356,
      },
      {
        hex: '#b29e93',
        count: 2,
        relativeLuminance: 66.53923680285588,
      },
      {
        hex: '#ae9ea1',
        count: 1,
        relativeLuminance: 66.53947982992567,
      },
      {
        hex: '#a6a19d',
        count: 1,
        relativeLuminance: 66.54364279311427,
      },
      {
        hex: '#8ea7a3',
        count: 1,
        relativeLuminance: 66.54479530634671,
      },
      {
        hex: '#a7a28f',
        count: 1,
        relativeLuminance: 66.54995774351418,
      },
      {
        hex: '#aca094',
        count: 1,
        relativeLuminance: 66.55840516107455,
      },
      {
        hex: '#aa9fa5',
        count: 2,
        relativeLuminance: 66.56493019616688,
      },
      {
        hex: '#a3a29d',
        count: 1,
        relativeLuminance: 66.56689788698341,
      },
      {
        hex: '#a0a39c',
        count: 1,
        relativeLuminance: 66.57205409479442,
      },
      {
        hex: '#93a6a2',
        count: 1,
        relativeLuminance: 66.58414493588367,
      },
      {
        hex: '#8fa6ac',
        count: 1,
        relativeLuminance: 66.58911739773515,
      },
      {
        hex: '#98a695',
        count: 1,
        relativeLuminance: 66.60980598112721,
      },
      {
        hex: '#b99b9b',
        count: 1,
        relativeLuminance: 66.61420683399525,
      },
      {
        hex: '#ae9f9a',
        count: 1,
        relativeLuminance: 66.61763990547091,
      },
      {
        hex: '#95a69e',
        count: 1,
        relativeLuminance: 66.61960712546825,
      },
      {
        hex: '#a2a2a2',
        count: 1,
        relativeLuminance: 66.61965165769043,
      },
      {
        hex: '#bd9a96',
        count: 1,
        relativeLuminance: 66.62068037048378,
      },
      {
        hex: '#b19e9a',
        count: 1,
        relativeLuminance: 66.6221266788446,
      },
      {
        hex: '#9aa4a5',
        count: 2,
        relativeLuminance: 66.62489400564279,
      },
      {
        hex: '#a5a299',
        count: 1,
        relativeLuminance: 66.62668139928712,
      },
      {
        hex: '#a7a0a7',
        count: 1,
        relativeLuminance: 66.63218372236788,
      },
      {
        hex: '#a9a0a1',
        count: 1,
        relativeLuminance: 66.63425247559208,
      },
      {
        hex: '#8aa8a6',
        count: 1,
        relativeLuminance: 66.64329913806738,
      },
      {
        hex: '#92a6a7',
        count: 1,
        relativeLuminance: 66.65224019976999,
      },
      {
        hex: '#b99d87',
        count: 1,
        relativeLuminance: 66.65532477214005,
      },
      {
        hex: '#a8a19b',
        count: 1,
        relativeLuminance: 66.65808756917416,
      },
      {
        hex: '#98a697',
        count: 1,
        relativeLuminance: 66.6589061602167,
      },
      {
        hex: '#c39989',
        count: 1,
        relativeLuminance: 66.66538487344087,
      },
      {
        hex: '#aaa09f',
        count: 1,
        relativeLuminance: 66.66550057848625,
      },
      {
        hex: '#ae9f9c',
        count: 1,
        relativeLuminance: 66.66883718494002,
      },
      {
        hex: '#aba09c',
        count: 1,
        relativeLuminance: 66.67233428687486,
      },
      {
        hex: '#a2a2a4',
        count: 1,
        relativeLuminance: 66.67426827102578,
      },
      {
        hex: '#a1a2a7',
        count: 1,
        relativeLuminance: 66.67835536939323,
      },
      {
        hex: '#9ba59a',
        count: 1,
        relativeLuminance: 66.681532966829,
      },
      {
        hex: '#9ea3a6',
        count: 3,
        relativeLuminance: 66.68513789418566,
      },
      {
        hex: '#96a5a8',
        count: 1,
        relativeLuminance: 66.68878342150644,
      },
      {
        hex: '#91a896',
        count: 1,
        relativeLuminance: 66.69301687061117,
      },
      {
        hex: '#a6a0ac',
        count: 1,
        relativeLuminance: 66.69312792128997,
      },
      {
        hex: '#b89c98',
        count: 1,
        relativeLuminance: 66.69854446635247,
      },
      {
        hex: '#8aa8a8',
        count: 1,
        relativeLuminance: 66.6996178626902,
      },
      {
        hex: '#8ea6b2',
        count: 1,
        relativeLuminance: 66.70104925883426,
      },
      {
        hex: '#c49986',
        count: 1,
        relativeLuminance: 66.70248431467124,
      },
      {
        hex: '#9fa3a4',
        count: 1,
        relativeLuminance: 66.70719392732231,
      },
      {
        hex: '#99a5a1',
        count: 1,
        relativeLuminance: 66.71489875737232,
      },
      {
        hex: '#b09f97',
        count: 1,
        relativeLuminance: 66.71867469442435,
      },
      {
        hex: '#9da596',
        count: 2,
        relativeLuminance: 66.73359714736567,
      },
      {
        hex: '#9ea593',
        count: 1,
        relativeLuminance: 66.73783687054556,
      },
      {
        hex: '#b59e90',
        count: 1,
        relativeLuminance: 66.74174447486733,
      },
      {
        hex: '#b99c96',
        count: 1,
        relativeLuminance: 66.74336833341995,
      },
      {
        hex: '#96a5aa',
        count: 1,
        relativeLuminance: 66.74591173280254,
      },
      {
        hex: '#aaa198',
        count: 1,
        relativeLuminance: 66.75062858930336,
      },
      {
        hex: '#c3998d',
        count: 1,
        relativeLuminance: 66.7543292494006,
      },
      {
        hex: '#8aa8aa',
        count: 1,
        relativeLuminance: 66.7567312217482,
      },
      {
        hex: '#94a6a6',
        count: 1,
        relativeLuminance: 66.76485402539963,
      },
      {
        hex: '#9ea3a9',
        count: 2,
        relativeLuminance: 66.7698282975188,
      },
      {
        hex: '#bc9b96',
        count: 1,
        relativeLuminance: 66.77590738143034,
      },
      {
        hex: '#b39e99',
        count: 1,
        relativeLuminance: 66.77687104651748,
      },
      {
        hex: '#a2a39e',
        count: 1,
        relativeLuminance: 66.78222916992289,
      },
      {
        hex: '#9ea595',
        count: 1,
        relativeLuminance: 66.7859522968248,
      },
      {
        hex: '#96a797',
        count: 1,
        relativeLuminance: 66.7909132699573,
      },
      {
        hex: '#b99c98',
        count: 1,
        relativeLuminance: 66.7927282590079,
      },
      {
        hex: '#aaa19a',
        count: 1,
        relativeLuminance: 66.80081872288932,
      },
      {
        hex: '#96a5ac',
        count: 1,
        relativeLuminance: 66.80383532727241,
      },
      {
        hex: '#91a7a5',
        count: 1,
        relativeLuminance: 66.80454320861699,
      },
      {
        hex: '#9ba4a9',
        count: 1,
        relativeLuminance: 66.81233276227309,
      },
      {
        hex: '#b49f8c',
        count: 1,
        relativeLuminance: 66.81913623984721,
      },
      {
        hex: '#a9a19e',
        count: 1,
        relativeLuminance: 66.81940511270639,
      },
      {
        hex: '#ac9fa8',
        count: 1,
        relativeLuminance: 66.81994118192486,
      },
      {
        hex: '#ab9fab',
        count: 1,
        relativeLuminance: 66.82023851860286,
      },
      {
        hex: '#af9ea8',
        count: 1,
        relativeLuminance: 66.82050975068746,
      },
      {
        hex: '#99a5a5',
        count: 1,
        relativeLuminance: 66.82381012884674,
      },
      {
        hex: '#b39e9b',
        count: 1,
        relativeLuminance: 66.82745006085564,
      },
      {
        hex: '#9ca4a7',
        count: 2,
        relativeLuminance: 66.83114775314297,
      },
      {
        hex: '#9aa698',
        count: 2,
        relativeLuminance: 66.83160305321178,
      },
      {
        hex: '#b19ea2',
        count: 1,
        relativeLuminance: 66.83160810477344,
      },
      {
        hex: '#af9f9f',
        count: 1,
        relativeLuminance: 66.83461950646534,
      },
      {
        hex: '#b0a091',
        count: 1,
        relativeLuminance: 66.83660188193008,
      },
      {
        hex: '#a3a2a7',
        count: 3,
        relativeLuminance: 66.83748132572654,
      },
      {
        hex: '#aca289',
        count: 1,
        relativeLuminance: 66.83766942918844,
      },
      {
        hex: '#c19999',
        count: 1,
        relativeLuminance: 66.83946637142444,
      },
      {
        hex: '#9aa4ad',
        count: 1,
        relativeLuminance: 66.85329654825621,
      },
      {
        hex: '#99a69c',
        count: 1,
        relativeLuminance: 66.85857690170856,
      },
      {
        hex: '#89a9a6',
        count: 1,
        relativeLuminance: 66.8604200077527,
      },
      {
        hex: '#bc9c8f',
        count: 1,
        relativeLuminance: 66.8634489512239,
      },
      {
        hex: '#b49f8e',
        count: 1,
        relativeLuminance: 66.8642796990954,
      },
      {
        hex: '#93a6ac',
        count: 1,
        relativeLuminance: 66.86539469862818,
      },
      {
        hex: '#a3a2a8',
        count: 1,
        relativeLuminance: 66.86562681644348,
      },
      {
        hex: '#b39e9d',
        count: 1,
        relativeLuminance: 66.87881068037466,
      },
      {
        hex: '#99a69d',
        count: 1,
        relativeLuminance: 66.8843515304284,
      },
      {
        hex: '#aba0a4',
        count: 1,
        relativeLuminance: 66.8849667618979,
      },
      {
        hex: '#93a6ad',
        count: 1,
        relativeLuminance: 66.8946114183341,
      },
      {
        hex: '#a4a585',
        count: 1,
        relativeLuminance: 66.89735593101398,
      },
      {
        hex: '#9ea4a4',
        count: 1,
        relativeLuminance: 66.90047542866391,
      },
      {
        hex: '#bf9b8f',
        count: 1,
        relativeLuminance: 66.90189114783546,
      },
      {
        hex: '#b19f9b',
        count: 1,
        relativeLuminance: 66.90773351855898,
      },
      {
        hex: '#a6a2a1',
        count: 2,
        relativeLuminance: 66.91599656398793,
      },
      {
        hex: '#aca0a2',
        count: 1,
        relativeLuminance: 66.9160279670793,
      },
      {
        hex: '#8ca8ab',
        count: 1,
        relativeLuminance: 66.91609190728164,
      },
      {
        hex: '#a7a29e',
        count: 2,
        relativeLuminance: 66.91895692426272,
      },
      {
        hex: '#98a5ab',
        count: 1,
        relativeLuminance: 66.91984124719637,
      },
      {
        hex: '#8aa8b0',
        count: 1,
        relativeLuminance: 66.93284343961523,
      },
      {
        hex: '#c5998c',
        count: 1,
        relativeLuminance: 66.93519272047106,
      },
      {
        hex: '#9da693',
        count: 1,
        relativeLuminance: 66.93586358943502,
      },
      {
        hex: '#b5a081',
        count: 1,
        relativeLuminance: 66.93830587865993,
      },
      {
        hex: '#a9a38d',
        count: 1,
        relativeLuminance: 66.93992573295628,
      },
      {
        hex: '#a3a3a1',
        count: 1,
        relativeLuminance: 66.94116277115813,
      },
      {
        hex: '#a4a39e',
        count: 1,
        relativeLuminance: 66.9422186059254,
      },
      {
        hex: '#b79f85',
        count: 1,
        relativeLuminance: 66.94334402173206,
      },
      {
        hex: '#b99c9e',
        count: 1,
        relativeLuminance: 66.94548792700778,
      },
      {
        hex: '#a5a490',
        count: 1,
        relativeLuminance: 66.94853133461774,
      },
      {
        hex: '#a0a3aa',
        count: 1,
        relativeLuminance: 66.95335563149848,
      },
      {
        hex: '#bb9c97',
        count: 1,
        relativeLuminance: 66.95777614555648,
      },
      {
        hex: '#b19f9d',
        count: 1,
        relativeLuminance: 66.95899480860787,
      },
      {
        hex: '#b79d9c',
        count: 1,
        relativeLuminance: 66.96187851308353,
      },
      {
        hex: '#90a7ad',
        count: 1,
        relativeLuminance: 66.96364280395461,
      },
      {
        hex: '#9ca5a2',
        count: 1,
        relativeLuminance: 66.96588502894147,
      },
      {
        hex: '#a4a39f',
        count: 1,
        relativeLuminance: 66.96836451913956,
      },
      {
        hex: '#98a5ad',
        count: 1,
        relativeLuminance: 66.9779589634675,
      },
      {
        hex: '#a9a29a',
        count: 1,
        relativeLuminance: 66.98247286579509,
      },
      {
        hex: '#8fa99c',
        count: 1,
        relativeLuminance: 66.98783923366219,
      },
      {
        hex: '#afa09b',
        count: 1,
        relativeLuminance: 66.99256487412033,
      },
      {
        hex: '#aea09f',
        count: 1,
        relativeLuminance: 67.00869405787817,
      },
      {
        hex: '#aaa1a2',
        count: 1,
        relativeLuminance: 67.00940036776807,
      },
      {
        hex: '#b19f9f',
        count: 2,
        relativeLuminance: 67.01103740977331,
      },
      {
        hex: '#94a7a5',
        count: 1,
        relativeLuminance: 67.01357158031507,
      },
      {
        hex: '#92a7aa',
        count: 1,
        relativeLuminance: 67.01414509588825,
      },
      {
        hex: '#aba19f',
        count: 2,
        relativeLuminance: 67.01426862647,
      },
      {
        hex: '#a4a3a1',
        count: 2,
        relativeLuminance: 67.02124368874317,
      },
      {
        hex: '#bb9c9a',
        count: 1,
        relativeLuminance: 67.0323505902213,
      },
      {
        hex: '#a7a398',
        count: 1,
        relativeLuminance: 67.0338980804269,
      },
      {
        hex: '#aea0a0',
        count: 1,
        relativeLuminance: 67.0350101372755,
      },
      {
        hex: '#b39ea3',
        count: 2,
        relativeLuminance: 67.03759207938822,
      },
      {
        hex: '#b1a096',
        count: 1,
        relativeLuminance: 67.04435425887691,
      },
      {
        hex: '#96a7a1',
        count: 1,
        relativeLuminance: 67.04732745570094,
      },
      {
        hex: '#aca19d',
        count: 1,
        relativeLuminance: 67.04735999318402,
      },
      {
        hex: '#b49ea0',
        count: 1,
        relativeLuminance: 67.0476374737854,
      },
      {
        hex: '#a3a3a5',
        count: 1,
        relativeLuminance: 67.04948189336956,
      },
      {
        hex: '#9da4ac',
        count: 1,
        relativeLuminance: 67.04951711077187,
      },
      {
        hex: '#9ca69b',
        count: 1,
        relativeLuminance: 67.05656135462,
      },
      {
        hex: '#9fa4a7',
        count: 1,
        relativeLuminance: 67.06029749174303,
      },
      {
        hex: '#97a6a9',
        count: 1,
        relativeLuminance: 67.06365394740436,
      },
      {
        hex: '#b69f8f',
        count: 1,
        relativeLuminance: 67.0698442237438,
      },
      {
        hex: '#b69e9a',
        count: 1,
        relativeLuminance: 67.07540026181618,
      },
      {
        hex: '#8ea9a2',
        count: 1,
        relativeLuminance: 67.07800482686062,
      },
      {
        hex: '#a3a49c',
        count: 1,
        relativeLuminance: 67.07981181871818,
      },
      {
        hex: '#a0a4a5',
        count: 2,
        relativeLuminance: 67.08234855090855,
      },
      {
        hex: '#8ca9a7',
        count: 1,
        relativeLuminance: 67.0825664571006,
      },
      {
        hex: '#9fa4a8',
        count: 1,
        relativeLuminance: 67.08829225606425,
      },
      {
        hex: '#9aa6a2',
        count: 1,
        relativeLuminance: 67.08987149554906,
      },
      {
        hex: '#aca19f',
        count: 2,
        relativeLuminance: 67.09929200691039,
      },
      {
        hex: '#85a9b7',
        count: 1,
        relativeLuminance: 67.11268578975768,
      },
      {
        hex: '#b69f91',
        count: 1,
        relativeLuminance: 67.11593550867123,
      },
      {
        hex: '#c59a89',
        count: 1,
        relativeLuminance: 67.11741941764404,
      },
      {
        hex: '#b1a099',
        count: 1,
        relativeLuminance: 67.11814915811519,
      },
      {
        hex: '#97a6ab',
        count: 1,
        relativeLuminance: 67.120701532616,
      },
      {
        hex: '#b3a092',
        count: 1,
        relativeLuminance: 67.12719257991931,
      },
      {
        hex: '#94a89f',
        count: 1,
        relativeLuminance: 67.12999829910976,
      },
      {
        hex: '#c29b8c',
        count: 1,
        relativeLuminance: 67.13083154305049,
      },
      {
        hex: '#b2a096',
        count: 1,
        relativeLuminance: 67.13318353532453,
      },
      {
        hex: '#a0a4a7',
        count: 2,
        relativeLuminance: 67.13764400999537,
      },
      {
        hex: '#ad9fb0',
        count: 1,
        relativeLuminance: 67.13807871615396,
      },
      {
        hex: '#ada0a7',
        count: 1,
        relativeLuminance: 67.13865732698403,
      },
      {
        hex: '#c59a8a',
        count: 1,
        relativeLuminance: 67.13913041270585,
      },
      {
        hex: '#8fa8ac',
        count: 1,
        relativeLuminance: 67.14437198298684,
      },
      {
        hex: '#a6a495',
        count: 1,
        relativeLuminance: 67.14766478115672,
      },
      {
        hex: '#be9c93',
        count: 1,
        relativeLuminance: 67.14979560439791,
      },
      {
        hex: '#83a9bc',
        count: 1,
        relativeLuminance: 67.15085009874456,
      },
      {
        hex: '#9ea699',
        count: 1,
        relativeLuminance: 67.15790511077894,
      },
      {
        hex: '#97a898',
        count: 1,
        relativeLuminance: 67.16552366324014,
      },
      {
        hex: '#aba0ae',
        count: 1,
        relativeLuminance: 67.16850217732129,
      },
      {
        hex: '#a1a690',
        count: 1,
        relativeLuminance: 67.17421024208703,
      },
      {
        hex: '#91a7b2',
        count: 1,
        relativeLuminance: 67.18053338892096,
      },
      {
        hex: '#a5a3a4',
        count: 2,
        relativeLuminance: 67.18243321714503,
      },
      {
        hex: '#b99e93',
        count: 2,
        relativeLuminance: 67.18283705920558,
      },
      {
        hex: '#a2a4a3',
        count: 1,
        relativeLuminance: 67.18438099569367,
      },
      {
        hex: '#bd9e82',
        count: 1,
        relativeLuminance: 67.1900933704741,
      },
      {
        hex: '#a0a59f',
        count: 1,
        relativeLuminance: 67.19220665087141,
      },
      {
        hex: '#a6a497',
        count: 1,
        relativeLuminance: 67.19613233937487,
      },
      {
        hex: '#93a7ae',
        count: 1,
        relativeLuminance: 67.19928498636519,
      },
      {
        hex: '#b49f9c',
        count: 1,
        relativeLuminance: 67.20184265402789,
      },
      {
        hex: '#9da5a8',
        count: 3,
        relativeLuminance: 67.20608614145135,
      },
      {
        hex: '#9ba799',
        count: 1,
        relativeLuminance: 67.20637504529724,
      },
      {
        hex: '#a4a593',
        count: 1,
        relativeLuminance: 67.20897597429223,
      },
      {
        hex: '#b0a0a0',
        count: 2,
        relativeLuminance: 67.20929082065965,
      },
      {
        hex: '#90a8ac',
        count: 1,
        relativeLuminance: 67.21179322319509,
      },
      {
        hex: '#a7a2a9',
        count: 1,
        relativeLuminance: 67.21751121329956,
      },
      {
        hex: '#9fa5a3',
        count: 1,
        relativeLuminance: 67.22112909585351,
      },
      {
        hex: '#9ba5ae',
        count: 1,
        relativeLuminance: 67.22810235436268,
      },
      {
        hex: '#ca988d',
        count: 1,
        relativeLuminance: 67.22907492104322,
      },
      {
        hex: '#8fa8af',
        count: 1,
        relativeLuminance: 67.23202805655731,
      },
      {
        hex: '#9aa79d',
        count: 1,
        relativeLuminance: 67.23332764853845,
      },
      {
        hex: '#a5a3a6',
        count: 1,
        relativeLuminance: 67.23716760376857,
      },
      {
        hex: '#ada1a1',
        count: 2,
        relativeLuminance: 67.23738672026197,
      },
      {
        hex: '#a8a39d',
        count: 1,
        relativeLuminance: 67.24215792977938,
      },
      {
        hex: '#8baaa5',
        count: 1,
        relativeLuminance: 67.24327895183163,
      },
      {
        hex: '#9ca5ac',
        count: 1,
        relativeLuminance: 67.24456557220817,
      },
      {
        hex: '#a9a582',
        count: 1,
        relativeLuminance: 67.24474931836941,
      },
      {
        hex: '#b59ea4',
        count: 1,
        relativeLuminance: 67.2453677250255,
      },
      {
        hex: '#b79f93',
        count: 1,
        relativeLuminance: 67.25462053974059,
      },
      {
        hex: '#bc9c9f',
        count: 1,
        relativeLuminance: 67.25564550157895,
      },
      {
        hex: '#b69f97',
        count: 1,
        relativeLuminance: 67.25881301620062,
      },
      {
        hex: '#94a7ae',
        count: 1,
        relativeLuminance: 67.2690211034101,
      },
      {
        hex: '#aaa48c',
        count: 1,
        relativeLuminance: 67.26983971987342,
      },
      {
        hex: '#a2a59c',
        count: 1,
        relativeLuminance: 67.2709900355603,
      },
      {
        hex: '#9fa5a5',
        count: 1,
        relativeLuminance: 67.27538576947936,
      },
      {
        hex: '#ba9e93',
        count: 1,
        relativeLuminance: 67.27658560890313,
      },
      {
        hex: '#b99e97',
        count: 1,
        relativeLuminance: 67.27881078715643,
      },
      {
        hex: '#b2a09c',
        count: 1,
        relativeLuminance: 67.28219859393187,
      },
      {
        hex: '#c19c8c',
        count: 1,
        relativeLuminance: 67.28291195985516,
      },
      {
        hex: '#b0a381',
        count: 1,
        relativeLuminance: 67.28413551243386,
      },
      {
        hex: '#a0a698',
        count: 1,
        relativeLuminance: 67.28679594410308,
      },
      {
        hex: '#93a99d',
        count: 1,
        relativeLuminance: 67.28700709034092,
      },
      {
        hex: '#a7a58c',
        count: 1,
        relativeLuminance: 67.29143757801975,
      },
      {
        hex: '#99a6ac',
        count: 1,
        relativeLuminance: 67.29450637244248,
      },
      {
        hex: '#b3a099',
        count: 1,
        relativeLuminance: 67.2959510757412,
      },
      {
        hex: '#c39b8f',
        count: 1,
        relativeLuminance: 67.29800337194533,
      },
      {
        hex: '#a9a491',
        count: 1,
        relativeLuminance: 67.29973342919267,
      },
      {
        hex: '#b69f99',
        count: 1,
        relativeLuminance: 67.30797804606912,
      },
      {
        hex: '#98a6af',
        count: 1,
        relativeLuminance: 67.30926479934988,
      },
      {
        hex: '#a4a4a2',
        count: 1,
        relativeLuminance: 67.31607506256688,
      },
      {
        hex: '#c29c89',
        count: 1,
        relativeLuminance: 67.31633266924676,
      },
      {
        hex: '#b0a19a',
        count: 1,
        relativeLuminance: 67.31672838675097,
      },
      {
        hex: '#aba396',
        count: 1,
        relativeLuminance: 67.31776449667026,
      },
      {
        hex: '#bf9c96',
        count: 1,
        relativeLuminance: 67.31850442412556,
      },
      {
        hex: '#8aaba0',
        count: 1,
        relativeLuminance: 67.32738552091597,
      },
      {
        hex: '#b9a082',
        count: 1,
        relativeLuminance: 67.3277199071918,
      },
      {
        hex: '#ba9f8a',
        count: 1,
        relativeLuminance: 67.32978082051643,
      },
      {
        hex: '#84aab7',
        count: 1,
        relativeLuminance: 67.33242285821123,
      },
      {
        hex: '#b2a09e',
        count: 1,
        relativeLuminance: 67.33341890361396,
      },
      {
        hex: '#bd9e89',
        count: 1,
        relativeLuminance: 67.33601737723279,
      },
      {
        hex: '#a0a69a',
        count: 1,
        relativeLuminance: 67.33634252554543,
      },
      {
        hex: '#a3a4a6',
        count: 1,
        relativeLuminance: 67.34496428911707,
      },
      {
        hex: '#aaa39b',
        count: 1,
        relativeLuminance: 67.35722262025595,
      },
      {
        hex: '#bb9d9d',
        count: 1,
        relativeLuminance: 67.3617656605915,
      },
      {
        hex: '#bf9c98',
        count: 1,
        relativeLuminance: 67.36718584901266,
      },
      {
        hex: '#a6a593',
        count: 1,
        relativeLuminance: 67.36983877120882,
      },
      {
        hex: '#b3a09c',
        count: 1,
        relativeLuminance: 67.37116763430612,
      },
      {
        hex: '#9ba6aa',
        count: 1,
        relativeLuminance: 67.38438562486714,
      },
      {
        hex: '#b89e9f',
        count: 1,
        relativeLuminance: 67.38737261570186,
      },
      {
        hex: '#b6a186',
        count: 1,
        relativeLuminance: 67.39394349716977,
      },
      {
        hex: '#91a8b0',
        count: 1,
        relativeLuminance: 67.39659391767641,
      },
      {
        hex: '#a3a4a8',
        count: 1,
        relativeLuminance: 67.40033967672193,
      },
      {
        hex: '#9ca6a8',
        count: 1,
        relativeLuminance: 67.40251406651991,
      },
      {
        hex: '#bc9d9b',
        count: 1,
        relativeLuminance: 67.40577249077884,
      },
      {
        hex: '#aaa39d',
        count: 1,
        relativeLuminance: 67.40793306999913,
      },
      {
        hex: '#96a7ae',
        count: 1,
        relativeLuminance: 67.40995340359173,
      },
      {
        hex: '#a4a690',
        count: 1,
        relativeLuminance: 67.41078353443969,
      },
      {
        hex: '#ada487',
        count: 1,
        relativeLuminance: 67.4151650528827,
      },
      {
        hex: '#a4a4a6',
        count: 3,
        relativeLuminance: 67.424272217854,
      },
      {
        hex: '#9da79c',
        count: 2,
        relativeLuminance: 67.43116887477873,
      },
      {
        hex: '#a0a5a8',
        count: 1,
        relativeLuminance: 67.43503443524514,
      },
      {
        hex: '#98a7aa',
        count: 2,
        relativeLuminance: 67.43810565479626,
      },
      {
        hex: '#93a8ad',
        count: 1,
        relativeLuminance: 67.44582141180024,
      },
      {
        hex: '#b59fa2',
        count: 1,
        relativeLuminance: 67.448233518431,
      },
      {
        hex: '#a1a5a6',
        count: 1,
        relativeLuminance: 67.45708042019982,
      },
      {
        hex: '#a0a5a9',
        count: 1,
        relativeLuminance: 67.46299255766507,
      },
      {
        hex: '#b89f98',
        count: 1,
        relativeLuminance: 67.46687392264438,
      },
      {
        hex: '#c89a8b',
        count: 1,
        relativeLuminance: 67.46763790022274,
      },
      {
        hex: '#ba9e9b',
        count: 1,
        relativeLuminance: 67.47117628312355,
      },
      {
        hex: '#92aa9c',
        count: 1,
        relativeLuminance: 67.47219358672389,
      },
      {
        hex: '#b4a192',
        count: 1,
        relativeLuminance: 67.47788066096557,
      },
      {
        hex: '#a7a49f',
        count: 1,
        relativeLuminance: 67.47881577396231,
      },
      {
        hex: '#c69b8a',
        count: 1,
        relativeLuminance: 67.48913455306153,
      },
      {
        hex: '#aba492',
        count: 1,
        relativeLuminance: 67.48968269917253,
      },
      {
        hex: '#83abb5',
        count: 1,
        relativeLuminance: 67.49202768362096,
      },
      {
        hex: '#98a7ac',
        count: 1,
        relativeLuminance: 67.4950731627032,
      },
      {
        hex: '#c39c8d',
        count: 1,
        relativeLuminance: 67.50308243898769,
      },
      {
        hex: '#a4a788',
        count: 1,
        relativeLuminance: 67.50710895008676,
      },
      {
        hex: '#b3a197',
        count: 1,
        relativeLuminance: 67.50732525204786,
      },
      {
        hex: '#90a9ad',
        count: 3,
        relativeLuminance: 67.518177282279,
      },
      {
        hex: '#a7a596',
        count: 1,
        relativeLuminance: 67.52221164359474,
      },
      {
        hex: '#93a9a6',
        count: 1,
        relativeLuminance: 67.52548332455537,
      },
      {
        hex: '#8baaaf',
        count: 1,
        relativeLuminance: 67.5265361632608,
      },
      {
        hex: '#b3a0a2',
        count: 1,
        relativeLuminance: 67.526825935787,
      },
      {
        hex: '#a5a59d',
        count: 1,
        relativeLuminance: 67.53425968152365,
      },
      {
        hex: '#9ca7a3',
        count: 1,
        relativeLuminance: 67.53856579845419,
      },
      {
        hex: '#bb9e9a',
        count: 1,
        relativeLuminance: 67.53999172442843,
      },
      {
        hex: '#a1a69f',
        count: 2,
        relativeLuminance: 67.54080998898475,
      },
      {
        hex: '#b89f9b',
        count: 1,
        relativeLuminance: 67.54116215461801,
      },
      {
        hex: '#aaa498',
        count: 1,
        relativeLuminance: 67.54920237841107,
      },
      {
        hex: '#aca39c',
        count: 1,
        relativeLuminance: 67.55022848904568,
      },
      {
        hex: '#ba9f94',
        count: 1,
        relativeLuminance: 67.55630559219247,
      },
      {
        hex: '#a3a5a4',
        count: 1,
        relativeLuminance: 67.55901636123679,
      },
      {
        hex: '#aba3a0',
        count: 1,
        relativeLuminance: 67.56888494669874,
      },
      {
        hex: '#98a8a5',
        count: 1,
        relativeLuminance: 67.57402392909223,
      },
      {
        hex: '#bba085',
        count: 1,
        relativeLuminance: 67.57595025834281,
      },
      {
        hex: '#b3a0a4',
        count: 1,
        relativeLuminance: 67.5802637609392,
      },
      {
        hex: '#9da897',
        count: 1,
        relativeLuminance: 67.58180874661782,
      },
      {
        hex: '#91a9ad',
        count: 2,
        relativeLuminance: 67.58559120953176,
      },
      {
        hex: '#ca9992',
        count: 1,
        relativeLuminance: 67.58673689501835,
      },
      {
        hex: '#a5a4a9',
        count: 2,
        relativeLuminance: 67.58709392245382,
      },
      {
        hex: '#b4a0a1',
        count: 1,
        relativeLuminance: 67.58954722577914,
      },
      {
        hex: '#aba3a1',
        count: 2,
        relativeLuminance: 67.59505921939018,
      },
      {
        hex: '#a7a599',
        count: 1,
        relativeLuminance: 67.59516565484395,
      },
      {
        hex: '#aca39e',
        count: 2,
        relativeLuminance: 67.6011209954327,
      },
      {
        hex: '#a8a596',
        count: 1,
        relativeLuminance: 67.60368369898771,
      },
      {
        hex: '#9da898',
        count: 1,
        relativeLuminance: 67.60610607072563,
      },
      {
        hex: '#8eaaab',
        count: 1,
        relativeLuminance: 67.60621594047144,
      },
      {
        hex: '#be9e91',
        count: 1,
        relativeLuminance: 67.60971047549184,
      },
      {
        hex: '#aea2a2',
        count: 2,
        relativeLuminance: 67.61176715440205,
      },
      {
        hex: '#95a8ae',
        count: 1,
        relativeLuminance: 67.6138887675645,
      },
      {
        hex: '#92a8b5',
        count: 1,
        relativeLuminance: 67.61510516288563,
      },
      {
        hex: '#a9a49e',
        count: 1,
        relativeLuminance: 67.61667202664214,
      },
      {
        hex: '#a1a6a2',
        count: 1,
        relativeLuminance: 67.61933685077034,
      },
      {
        hex: '#b5a09f',
        count: 1,
        relativeLuminance: 67.62709981278475,
      },
      {
        hex: '#ada1af',
        count: 1,
        relativeLuminance: 67.62750787042181,
      },
      {
        hex: '#9ba89f',
        count: 1,
        relativeLuminance: 67.63339147097156,
      },
      {
        hex: '#b3a0a6',
        count: 1,
        relativeLuminance: 67.63447883790177,
      },
      {
        hex: '#a2a5aa',
        count: 1,
        relativeLuminance: 67.64596049308308,
      },
      {
        hex: '#c19d91',
        count: 2,
        relativeLuminance: 67.64730144683801,
      },
      {
        hex: '#b4a28e',
        count: 1,
        relativeLuminance: 67.64820960847156,
      },
      {
        hex: '#9da89a',
        count: 1,
        relativeLuminance: 67.65527524986865,
      },
      {
        hex: '#be9e93',
        count: 1,
        relativeLuminance: 67.65601670491695,
      },
      {
        hex: '#b3a19d',
        count: 1,
        relativeLuminance: 67.65624868355913,
      },
      {
        hex: '#a8a4a3',
        count: 2,
        relativeLuminance: 67.66541314684217,
      },
      {
        hex: '#b4a19a',
        count: 1,
        relativeLuminance: 67.66990025348642,
      },
      {
        hex: '#97aa96',
        count: 1,
        relativeLuminance: 67.6733470576558,
      },
      {
        hex: '#a7a691',
        count: 1,
        relativeLuminance: 67.67445544545825,
      },
      {
        hex: '#88abb1',
        count: 1,
        relativeLuminance: 67.67603453770306,
      },
      {
        hex: '#b0a1a8',
        count: 1,
        relativeLuminance: 67.68540623997686,
      },
      {
        hex: '#b2a38c',
        count: 1,
        relativeLuminance: 67.68972611631618,
      },
      {
        hex: '#a5a5a3',
        count: 1,
        relativeLuminance: 67.69056608574405,
      },
      {
        hex: '#b1a29b',
        count: 2,
        relativeLuminance: 67.690853390429,
      },
      {
        hex: '#c09d97',
        count: 1,
        relativeLuminance: 67.691183708557,
      },
      {
        hex: '#a9a4a1',
        count: 1,
        relativeLuminance: 67.69442919176332,
      },
      {
        hex: '#a7a692',
        count: 1,
        relativeLuminance: 67.69747803608534,
      },
      {
        hex: '#9ca7a9',
        count: 2,
        relativeLuminance: 67.70243660780972,
      },
      {
        hex: '#b0a29f',
        count: 1,
        relativeLuminance: 67.70544042835687,
      },
      {
        hex: '#b5a198',
        count: 1,
        relativeLuminance: 67.71028428098563,
      },
      {
        hex: '#a1a79b',
        count: 1,
        relativeLuminance: 67.71070319933935,
      },
      {
        hex: '#a0a893',
        count: 1,
        relativeLuminance: 67.71394978172758,
      },
      {
        hex: '#9ea7a4',
        count: 1,
        relativeLuminance: 67.71501817712338,
      },
      {
        hex: '#a8a4a5',
        count: 2,
        relativeLuminance: 67.71909567182888,
      },
      {
        hex: '#a4a5a7',
        count: 2,
        relativeLuminance: 67.71942105560804,
      },
      {
        hex: '#8fa9b6',
        count: 1,
        relativeLuminance: 67.71954883267078,
      },
      {
        hex: '#b69fa9',
        count: 1,
        relativeLuminance: 67.72916659921992,
      },
      {
        hex: '#aba49c',
        count: 1,
        relativeLuminance: 67.73155297292247,
      },
      {
        hex: '#9fa897',
        count: 1,
        relativeLuminance: 67.73260051078697,
      },
      {
        hex: '#aca499',
        count: 2,
        relativeLuminance: 67.74070729229088,
      },
      {
        hex: '#a5a5a5',
        count: 1,
        relativeLuminance: 67.74421637835061,
      },
      {
        hex: '#8daab2',
        count: 1,
        relativeLuminance: 67.74444732775044,
      },
      {
        hex: '#a8a691',
        count: 1,
        relativeLuminance: 67.75563172827012,
      },
      {
        hex: '#9ca7ab',
        count: 2,
        relativeLuminance: 67.75861766387398,
      },
      {
        hex: '#b3a1a1',
        count: 1,
        relativeLuminance: 67.75937857769358,
      },
      {
        hex: '#91a9b3',
        count: 1,
        relativeLuminance: 67.76211997475451,
      },
      {
        hex: '#ada3a1',
        count: 1,
        relativeLuminance: 67.76321869043147,
      },
      {
        hex: '#bf9d9e',
        count: 1,
        relativeLuminance: 67.76848231840425,
      },
      {
        hex: '#97a8af',
        count: 1,
        relativeLuminance: 67.78389346330938,
      },
      {
        hex: '#b4a294',
        count: 1,
        relativeLuminance: 67.78564209867389,
      },
      {
        hex: '#bba08f',
        count: 1,
        relativeLuminance: 67.79120017260517,
      },
      {
        hex: '#b1a29f',
        count: 3,
        relativeLuminance: 67.79223654451863,
      },
      {
        hex: '#98a9a3',
        count: 1,
        relativeLuminance: 67.79572094243187,
      },
      {
        hex: '#a8a59e',
        count: 2,
        relativeLuminance: 67.80167964296349,
      },
      {
        hex: '#9ea89d',
        count: 1,
        relativeLuminance: 67.80535833211208,
      },
      {
        hex: '#b4a0a9',
        count: 1,
        relativeLuminance: 67.80594879521729,
      },
      {
        hex: '#9ca998',
        count: 1,
        relativeLuminance: 67.80696341692149,
      },
      {
        hex: '#a3a799',
        count: 1,
        relativeLuminance: 67.8166064093413,
      },
      {
        hex: '#c39d90',
        count: 1,
        relativeLuminance: 67.82089387331324,
      },
      {
        hex: '#91a9b5',
        count: 1,
        relativeLuminance: 67.82253182639909,
      },
      {
        hex: '#a4a796',
        count: 1,
        relativeLuminance: 67.82259279877537,
      },
      {
        hex: '#b8a09c',
        count: 1,
        relativeLuminance: 67.82281798890746,
      },
      {
        hex: '#b0a48e',
        count: 1,
        relativeLuminance: 67.8241216744183,
      },
      {
        hex: '#96aa9f',
        count: 1,
        relativeLuminance: 67.82609511248003,
      },
      {
        hex: '#9aa8a9',
        count: 1,
        relativeLuminance: 67.82844715380114,
      },
      {
        hex: '#a2a6a7',
        count: 1,
        relativeLuminance: 67.8313923757744,
      },
      {
        hex: '#b4a296',
        count: 1,
        relativeLuminance: 67.83296830984374,
      },
      {
        hex: '#a1a6aa',
        count: 1,
        relativeLuminance: 67.83727332312858,
      },
      {
        hex: '#bd9f94',
        count: 2,
        relativeLuminance: 67.83832915393606,
      },
      {
        hex: '#9ca8a4',
        count: 1,
        relativeLuminance: 67.83855863787592,
      },
      {
        hex: '#b9a099',
        count: 1,
        relativeLuminance: 67.84025198877774,
      },
      {
        hex: '#ada3a4',
        count: 1,
        relativeLuminance: 67.84258452024746,
      },
      {
        hex: '#b7a196',
        count: 1,
        relativeLuminance: 67.84263487195399,
      },
      {
        hex: '#b2a487',
        count: 1,
        relativeLuminance: 67.8471789441757,
      },
      {
        hex: '#a8a5a0',
        count: 2,
        relativeLuminance: 67.8530971103314,
      },
      {
        hex: '#aaa4a4',
        count: 1,
        relativeLuminance: 67.8561599427866,
      },
      {
        hex: '#9ea89f',
        count: 1,
        relativeLuminance: 67.85635602713431,
      },
      {
        hex: '#a6a69c',
        count: 2,
        relativeLuminance: 67.8579541084557,
      },
      {
        hex: '#95aaa3',
        count: 1,
        relativeLuminance: 67.8606384656467,
      },
      {
        hex: '#b4a0ab',
        count: 1,
        relativeLuminance: 67.861991292992,
      },
      {
        hex: '#b0a39b',
        count: 2,
        relativeLuminance: 67.86633052805672,
      },
      {
        hex: '#99a8ad',
        count: 1,
        relativeLuminance: 67.86902938170617,
      },
      {
        hex: '#a9a3b1',
        count: 1,
        relativeLuminance: 67.87570699982203,
      },
      {
        hex: '#cb9b84',
        count: 1,
        relativeLuminance: 67.87675429904326,
      },
      {
        hex: '#9ca8a6',
        count: 1,
        relativeLuminance: 67.89244049305373,
      },
      {
        hex: '#c09e95',
        count: 1,
        relativeLuminance: 67.8952173935575,
      },
      {
        hex: '#a8a697',
        count: 1,
        relativeLuminance: 67.8963405610567,
      },
      {
        hex: '#b0a585',
        count: 1,
        relativeLuminance: 67.89796361407802,
      },
      {
        hex: '#b6a19c',
        count: 1,
        relativeLuminance: 67.89891963013751,
      },
      {
        hex: '#aca595',
        count: 1,
        relativeLuminance: 67.91054304230151,
      },
      {
        hex: '#baa18d',
        count: 1,
        relativeLuminance: 67.9113409976505,
      },
      {
        hex: '#bc9f9b',
        count: 1,
        relativeLuminance: 67.91301765156415,
      },
      {
        hex: '#9aa9a2',
        count: 1,
        relativeLuminance: 67.91330996577368,
      },
      {
        hex: '#afa58a',
        count: 1,
        relativeLuminance: 67.91671726095431,
      },
      {
        hex: '#ada49d',
        count: 2,
        relativeLuminance: 67.92430581012124,
      },
      {
        hex: '#a9a695',
        count: 1,
        relativeLuminance: 67.93014267784089,
      },
      {
        hex: '#b4a38f',
        count: 1,
        relativeLuminance: 67.93270960693526,
      },
      {
        hex: '#85adad',
        count: 1,
        relativeLuminance: 67.94006632998551,
      },
      {
        hex: '#c89b95',
        count: 1,
        relativeLuminance: 67.9409229662226,
      },
      {
        hex: '#b6a19e',
        count: 1,
        relativeLuminance: 67.94939036972029,
      },
      {
        hex: '#be9e9f',
        count: 1,
        relativeLuminance: 67.9498544165267,
      },
      {
        hex: '#9ea998',
        count: 1,
        relativeLuminance: 67.95573116538627,
      },
      {
        hex: '#aea49b',
        count: 1,
        relativeLuminance: 67.95876796982687,
      },
      {
        hex: '#85abc0',
        count: 1,
        relativeLuminance: 67.96023611722124,
      },
      {
        hex: '#b0a494',
        count: 1,
        relativeLuminance: 67.96097935186876,
      },
      {
        hex: '#b5a1a2',
        count: 1,
        relativeLuminance: 67.96318372118213,
      },
      {
        hex: '#aaa4a8',
        count: 1,
        relativeLuminance: 67.96465202701673,
      },
      {
        hex: '#8faab5',
        count: 1,
        relativeLuminance: 67.9655129826069,
      },
      {
        hex: '#a4a79c',
        count: 1,
        relativeLuminance: 67.96917316650071,
      },
      {
        hex: '#aca68c',
        count: 1,
        relativeLuminance: 67.973818718954,
      },
      {
        hex: '#c29e90',
        count: 1,
        relativeLuminance: 67.97391326660997,
      },
      {
        hex: '#bba097',
        count: 1,
        relativeLuminance: 67.9769401034667,
      },
      {
        hex: '#bf9f92',
        count: 1,
        relativeLuminance: 67.98224464732391,
      },
      {
        hex: '#afa3a3',
        count: 1,
        relativeLuminance: 67.98573121815303,
      },
      {
        hex: '#a9a5a2',
        count: 2,
        relativeLuminance: 67.98663765602626,
      },
      {
        hex: '#c09f8e',
        count: 1,
        relativeLuminance: 67.9879782892547,
      },
      {
        hex: '#91aba8',
        count: 1,
        relativeLuminance: 68.00050060179002,
      },
      {
        hex: '#b9a195',
        count: 1,
        relativeLuminance: 68.00141255226755,
      },
      {
        hex: '#b3a396',
        count: 2,
        relativeLuminance: 68.0059452701589,
      },
      {
        hex: '#c49e89',
        count: 1,
        relativeLuminance: 68.01739005737839,
      },
      {
        hex: '#c29e92',
        count: 1,
        relativeLuminance: 68.01941813642875,
      },
      {
        hex: '#b5a38f',
        count: 1,
        relativeLuminance: 68.02158232815304,
      },
      {
        hex: '#bca095',
        count: 1,
        relativeLuminance: 68.02275486378262,
      },
      {
        hex: '#a1a7a7',
        count: 1,
        relativeLuminance: 68.02394645734529,
      },
      {
        hex: '#99ab93',
        count: 1,
        relativeLuminance: 68.02408490982444,
      },
      {
        hex: '#aba692',
        count: 1,
        relativeLuminance: 68.02480531445349,
      },
      {
        hex: '#bba099',
        count: 1,
        relativeLuminance: 68.02526858649846,
      },
      {
        hex: '#bca27d',
        count: 1,
        relativeLuminance: 68.02997055072184,
      },
      {
        hex: '#c09f90',
        count: 2,
        relativeLuminance: 68.03266943105936,
      },
      {
        hex: '#95ab9f',
        count: 1,
        relativeLuminance: 68.03430957537118,
      },
      {
        hex: '#ada3ab',
        count: 1,
        relativeLuminance: 68.03453964400346,
      },
      {
        hex: '#b6a297',
        count: 2,
        relativeLuminance: 68.03543367478419,
      },
      {
        hex: '#8cacab',
        count: 1,
        relativeLuminance: 68.03592067760854,
      },
      {
        hex: '#a9a5a4',
        count: 1,
        relativeLuminance: 68.03949250985059,
      },
      {
        hex: '#c79c93',
        count: 1,
        relativeLuminance: 68.03950175608732,
      },
      {
        hex: '#a7a5aa',
        count: 1,
        relativeLuminance: 68.04127311119427,
      },
      {
        hex: '#b7a0a8',
        count: 1,
        relativeLuminance: 68.04717190852085,
      },
      {
        hex: '#bd9f9d',
        count: 1,
        relativeLuminance: 68.05701696319737,
      },
      {
        hex: '#c19e98',
        count: 1,
        relativeLuminance: 68.06346884519458,
      },
      {
        hex: '#cb9b8d',
        count: 1,
        relativeLuminance: 68.06649667625706,
      },
      {
        hex: '#ba9fa8',
        count: 2,
        relativeLuminance: 68.0666760241379,
      },
      {
        hex: '#aaa5a2',
        count: 1,
        relativeLuminance: 68.06845683132059,
      },
      {
        hex: '#a8a793',
        count: 2,
        relativeLuminance: 68.07132673871719,
      },
      {
        hex: '#c29f89',
        count: 1,
        relativeLuminance: 68.07346352666875,
      },
      {
        hex: '#b7a47c',
        count: 1,
        relativeLuminance: 68.07470295185826,
      },
      {
        hex: '#bca18c',
        count: 1,
        relativeLuminance: 68.0755269696926,
      },
      {
        hex: '#95aaab',
        count: 1,
        relativeLuminance: 68.07900990667929,
      },
      {
        hex: '#b4a2a0',
        count: 1,
        relativeLuminance: 68.08102531838112,
      },
      {
        hex: '#b6a299',
        count: 1,
        relativeLuminance: 68.08369496024844,
      },
      {
        hex: '#93aab0',
        count: 1,
        relativeLuminance: 68.08474874292709,
      },
      {
        hex: '#90aab7',
        count: 1,
        relativeLuminance: 68.09251630496861,
      },
      {
        hex: '#96aaa9',
        count: 1,
        relativeLuminance: 68.09282062966507,
      },
      {
        hex: '#aea596',
        count: 1,
        relativeLuminance: 68.1023051195658,
      },
      {
        hex: '#aca59d',
        count: 2,
        relativeLuminance: 68.10546671563127,
      },
      {
        hex: '#bd9f9f',
        count: 1,
        relativeLuminance: 68.10771002695556,
      },
      {
        hex: '#9daa96',
        count: 1,
        relativeLuminance: 68.10863924278452,
      },
      {
        hex: '#b2a39e',
        count: 1,
        relativeLuminance: 68.11483705526938,
      },
      {
        hex: '#bba192',
        count: 1,
        relativeLuminance: 68.11621324760328,
      },
      {
        hex: '#afa49e',
        count: 1,
        relativeLuminance: 68.11889305254753,
      },
      {
        hex: '#ada3ae',
        count: 1,
        relativeLuminance: 68.1197120291307,
      },
      {
        hex: '#9ea8a9',
        count: 1,
        relativeLuminance: 68.12288998859336,
      },
      {
        hex: '#a9a69d',
        count: 1,
        relativeLuminance: 68.12497563942246,
      },
      {
        hex: '#c99d82',
        count: 1,
        relativeLuminance: 68.12599087394602,
      },
      {
        hex: '#aaa69a',
        count: 1,
        relativeLuminance: 68.13218292454232,
      },
      {
        hex: '#9da8ac',
        count: 1,
        relativeLuminance: 68.13243419058136,
      },
      {
        hex: '#b6a29b',
        count: 1,
        relativeLuminance: 68.1327153737182,
      },
      {
        hex: '#b4a2a2',
        count: 2,
        relativeLuminance: 68.13292995895303,
      },
      {
        hex: '#aea4a2',
        count: 1,
        relativeLuminance: 68.13706836458536,
      },
      {
        hex: '#c89c93',
        count: 1,
        relativeLuminance: 68.14048855743341,
      },
      {
        hex: '#9fa8a7',
        count: 2,
        relativeLuminance: 68.14293888858847,
      },
      {
        hex: '#b9a290',
        count: 2,
        relativeLuminance: 68.14466791131296,
      },
      {
        hex: '#be9f9d',
        count: 1,
        relativeLuminance: 68.15141314384991,
      },
      {
        hex: '#b3a491',
        count: 1,
        relativeLuminance: 68.15230479199988,
      },
      {
        hex: '#c79d8d',
        count: 1,
        relativeLuminance: 68.15244037135221,
      },
      {
        hex: '#9daa98',
        count: 1,
        relativeLuminance: 68.15641109479583,
      },
      {
        hex: '#bd9fa1',
        count: 1,
        relativeLuminance: 68.15916758296846,
      },
      {
        hex: '#c19e9c',
        count: 1,
        relativeLuminance: 68.16150065981,
      },
      {
        hex: '#aea4a3',
        count: 1,
        relativeLuminance: 68.1633055760427,
      },
      {
        hex: '#b2a3a0',
        count: 1,
        relativeLuminance: 68.16587273160297,
      },
      {
        hex: '#b4a399',
        count: 2,
        relativeLuminance: 68.1659926920855,
      },
      {
        hex: '#b7a1a3',
        count: 3,
        relativeLuminance: 68.16876153526553,
      },
      {
        hex: '#c09f96',
        count: 2,
        relativeLuminance: 68.17125003097135,
      },
      {
        hex: '#a6a6a8',
        count: 1,
        relativeLuminance: 68.17259433443749,
      },
      {
        hex: '#97a9b3',
        count: 1,
        relativeLuminance: 68.17504419097133,
      },
      {
        hex: '#a9a69f',
        count: 1,
        relativeLuminance: 68.17558690736264,
      },
      {
        hex: '#96aba2',
        count: 1,
        relativeLuminance: 68.18133571410056,
      },
      {
        hex: '#a8a88c',
        count: 1,
        relativeLuminance: 68.18504994786241,
      },
      {
        hex: '#b9a292',
        count: 1,
        relativeLuminance: 68.18998843170026,
      },
      {
        hex: '#a4a89a',
        count: 1,
        relativeLuminance: 68.19042827932101,
      },
      {
        hex: '#bca09c',
        count: 1,
        relativeLuminance: 68.19219513742122,
      },
      {
        hex: '#95aaaf',
        count: 1,
        relativeLuminance: 68.19284075026049,
      },
      {
        hex: '#9ba9aa',
        count: 1,
        relativeLuminance: 68.20210204220973,
      },
      {
        hex: '#a6a79f',
        count: 1,
        relativeLuminance: 68.20272680586022,
      },
      {
        hex: '#b2a497',
        count: 1,
        relativeLuminance: 68.20466008154763,
      },
      {
        hex: '#86adb4',
        count: 1,
        relativeLuminance: 68.20502577003992,
      },
      {
        hex: '#9da9a5',
        count: 1,
        relativeLuminance: 68.21227860312773,
      },
      {
        hex: '#b4a39b',
        count: 1,
        relativeLuminance: 68.21491737136445,
      },
      {
        hex: '#90abb2',
        count: 1,
        relativeLuminance: 68.21874875138379,
      },
      {
        hex: '#c09f98',
        count: 1,
        relativeLuminance: 68.21895089959568,
      },
      {
        hex: '#afa4a2',
        count: 1,
        relativeLuminance: 68.22171897028157,
      },
      {
        hex: '#a9a6a1',
        count: 1,
        relativeLuminance: 68.22696158482947,
      },
      {
        hex: '#b2a2ac',
        count: 1,
        relativeLuminance: 68.22955366988138,
      },
      {
        hex: '#9fa9a0',
        count: 1,
        relativeLuminance: 68.23009031295165,
      },
      {
        hex: '#87aea9',
        count: 1,
        relativeLuminance: 68.23203036094253,
      },
      {
        hex: '#ada694',
        count: 1,
        relativeLuminance: 68.23732324165547,
      },
      {
        hex: '#c49e93',
        count: 1,
        relativeLuminance: 68.2382580321784,
      },
      {
        hex: '#b1a49c',
        count: 1,
        relativeLuminance: 68.23991827107368,
      },
      {
        hex: '#c19f95',
        count: 1,
        relativeLuminance: 68.24382316515967,
      },
      {
        hex: '#b6a395',
        count: 1,
        relativeLuminance: 68.24803011282951,
      },
      {
        hex: '#aaa4b2',
        count: 2,
        relativeLuminance: 68.24944032432312,
      },
      {
        hex: '#8eacae',
        count: 1,
        relativeLuminance: 68.24980991340306,
      },
      {
        hex: '#a6a7a1',
        count: 1,
        relativeLuminance: 68.25406840115315,
      },
      {
        hex: '#c39e98',
        count: 1,
        relativeLuminance: 68.25787007054139,
      },
      {
        hex: '#92abaf',
        count: 1,
        relativeLuminance: 68.26456608187077,
      },
      {
        hex: '#a2a7ad',
        count: 1,
        relativeLuminance: 68.26748816318877,
      },
      {
        hex: '#bca09f',
        count: 1,
        relativeLuminance: 68.26766067722585,
      },
      {
        hex: '#bca289',
        count: 1,
        relativeLuminance: 68.2691179366312,
      },
      {
        hex: '#a9a798',
        count: 2,
        relativeLuminance: 68.27005430662743,
      },
      {
        hex: '#b7a29d',
        count: 1,
        relativeLuminance: 68.27211596325435,
      },
      {
        hex: '#b5a2a4',
        count: 1,
        relativeLuminance: 68.273941753536,
      },
      {
        hex: '#a6a7a2',
        count: 1,
        relativeLuminance: 68.2800256204209,
      },
      {
        hex: '#aba5a7',
        count: 1,
        relativeLuminance: 68.28380174179576,
      },
      {
        hex: '#ada696',
        count: 1,
        relativeLuminance: 68.28414370935226,
      },
      {
        hex: '#b1a49e',
        count: 1,
        relativeLuminance: 68.28998159596559,
      },
      {
        hex: '#ba9fb0',
        count: 1,
        relativeLuminance: 68.2924084781317,
      },
      {
        hex: '#88adb3',
        count: 1,
        relativeLuminance: 68.29686575826285,
      },
      {
        hex: '#aea59e',
        count: 1,
        relativeLuminance: 68.29796845428741,
      },
      {
        hex: '#c39f8f',
        count: 1,
        relativeLuminance: 68.30088719618324,
      },
      {
        hex: '#97aaae',
        count: 2,
        relativeLuminance: 68.30323458801091,
      },
      {
        hex: '#a5a7a6',
        count: 1,
        relativeLuminance: 68.30703173042764,
      },
      {
        hex: '#ca9d86',
        count: 1,
        relativeLuminance: 68.30834140826146,
      },
      {
        hex: '#aaa5ab',
        count: 2,
        relativeLuminance: 68.31189891166153,
      },
      {
        hex: '#b8a390',
        count: 1,
        relativeLuminance: 68.31318735868146,
      },
      {
        hex: '#c1a08d',
        count: 1,
        relativeLuminance: 68.31597295647934,
      },
      {
        hex: '#afa3af',
        count: 1,
        relativeLuminance: 68.31695046414887,
      },
      {
        hex: '#a9a79a',
        count: 1,
        relativeLuminance: 68.31845241513666,
      },
      {
        hex: '#9da9a9',
        count: 1,
        relativeLuminance: 68.32069323690604,
      },
      {
        hex: '#9aaaa7',
        count: 1,
        relativeLuminance: 68.32134498140353,
      },
      {
        hex: '#bf9fa0',
        count: 1,
        relativeLuminance: 68.32222999119767,
      },
      {
        hex: '#b2a3a6',
        count: 1,
        relativeLuminance: 68.32357016598348,
      },
      {
        hex: '#bea18f',
        count: 1,
        relativeLuminance: 68.3290733678999,
      },
      {
        hex: '#93abaf',
        count: 1,
        relativeLuminance: 68.33196419294747,
      },
      {
        hex: '#afa59c',
        count: 3,
        relativeLuminance: 68.33234295841713,
      },
      {
        hex: '#a5a89d',
        count: 1,
        relativeLuminance: 68.34286955032181,
      },
      {
        hex: '#b5a492',
        count: 1,
        relativeLuminance: 68.3509735249424,
      },
      {
        hex: '#9faa9a',
        count: 1,
        relativeLuminance: 68.35351403471078,
      },
      {
        hex: '#c0a093',
        count: 1,
        relativeLuminance: 68.35438429034447,
      },
      {
        hex: '#b3a3a4',
        count: 1,
        relativeLuminance: 68.35713662995663,
      },
      {
        hex: '#b0a4a4',
        count: 1,
        relativeLuminance: 68.35928165952592,
      },
      {
        hex: '#aea78a',
        count: 1,
        relativeLuminance: 68.36638797558948,
      },
      {
        hex: '#bfa280',
        count: 1,
        relativeLuminance: 68.36964640003359,
      },
      {
        hex: '#baa296',
        count: 2,
        relativeLuminance: 68.37420207166494,
      },
      {
        hex: '#ada78f',
        count: 1,
        relativeLuminance: 68.39105766649647,
      },
      {
        hex: '#ca9d8a',
        count: 1,
        relativeLuminance: 68.39152268679558,
      },
      {
        hex: '#a5a89f',
        count: 1,
        relativeLuminance: 68.39321988867471,
      },
      {
        hex: '#a4a7ac',
        count: 1,
        relativeLuminance: 68.39373434639816,
      },
      {
        hex: '#aca793',
        count: 1,
        relativeLuminance: 68.39824090341652,
      },
      {
        hex: '#baa0ab',
        count: 1,
        relativeLuminance: 68.4028540921604,
      },
      {
        hex: '#c69e92',
        count: 1,
        relativeLuminance: 68.41294650571689,
      },
      {
        hex: '#aaa6a5',
        count: 1,
        relativeLuminance: 68.41315631425633,
      },
      {
        hex: '#aba6a2',
        count: 1,
        relativeLuminance: 68.41600519814862,
      },
      {
        hex: '#b6a39c',
        count: 2,
        relativeLuminance: 68.41656815928152,
      },
      {
        hex: '#9eaaa0',
        count: 1,
        relativeLuminance: 68.42886723931575,
      },
      {
        hex: '#b1a599',
        count: 1,
        relativeLuminance: 68.42935586521448,
      },
      {
        hex: '#bea09e',
        count: 2,
        relativeLuminance: 68.42942662189563,
      },
      {
        hex: '#a1aa97',
        count: 1,
        relativeLuminance: 68.43198140211604,
      },
      {
        hex: '#b2a3aa',
        count: 1,
        relativeLuminance: 68.43253543573864,
      },
      {
        hex: '#afa4aa',
        count: 1,
        relativeLuminance: 68.43656096923166,
      },
      {
        hex: '#c19f9d',
        count: 1,
        relativeLuminance: 68.4372128940849,
      },
      {
        hex: '#a7a7a5',
        count: 1,
        relativeLuminance: 68.43829558935539,
      },
      {
        hex: '#97aba9',
        count: 1,
        relativeLuminance: 68.43841718397601,
      },
      {
        hex: '#a8a7a2',
        count: 1,
        relativeLuminance: 68.43929061782428,
      },
      {
        hex: '#bca291',
        count: 2,
        relativeLuminance: 68.4432761999634,
      },
      {
        hex: '#99ac99',
        count: 1,
        relativeLuminance: 68.44393220865608,
      },
      {
        hex: '#a9a894',
        count: 1,
        relativeLuminance: 68.44476266980557,
      },
      {
        hex: '#9ea9ab',
        count: 1,
        relativeLuminance: 68.44980487741161,
      },
      {
        hex: '#96abac',
        count: 1,
        relativeLuminance: 68.45206556044485,
      },
      {
        hex: '#b5a3a1',
        count: 1,
        relativeLuminance: 68.45421301921124,
      },
      {
        hex: '#b7a39a',
        count: 1,
        relativeLuminance: 68.45669864806368,
      },
      {
        hex: '#94abb1',
        count: 1,
        relativeLuminance: 68.45763608287142,
      },
      {
        hex: '#a0a9a6',
        count: 1,
        relativeLuminance: 68.46248392314573,
      },
      {
        hex: '#99a9b8',
        count: 1,
        relativeLuminance: 68.46703423805461,
      },
      {
        hex: '#a6a7a9',
        count: 1,
        relativeLuminance: 68.46708276756752,
      },
      {
        hex: '#a1aa99',
        count: 1,
        relativeLuminance: 68.4797908038805,
      },
      {
        hex: '#bea0a0',
        count: 1,
        relativeLuminance: 68.48008302425917,
      },
      {
        hex: '#b2a68c',
        count: 1,
        relativeLuminance: 68.48302602845897,
      },
      {
        hex: '#9baba0',
        count: 1,
        relativeLuminance: 68.4841808636674,
      },
      {
        hex: '#c3a08c',
        count: 1,
        relativeLuminance: 68.48761821104918,
      },
      {
        hex: '#aca88b',
        count: 1,
        relativeLuminance: 68.48968564747713,
      },
      {
        hex: '#a9a896',
        count: 1,
        relativeLuminance: 68.49135358034908,
      },
      {
        hex: '#b6a39f',
        count: 1,
        relativeLuminance: 68.49163360297571,
      },
      {
        hex: '#b0a59f',
        count: 2,
        relativeLuminance: 68.49229260362621,
      },
      {
        hex: '#bfa09d',
        count: 1,
        relativeLuminance: 68.49864892238894,
      },
      {
        hex: '#b2a4a3',
        count: 1,
        relativeLuminance: 68.50443543931466,
      },
      {
        hex: '#bba1a2',
        count: 1,
        relativeLuminance: 68.50656925213208,
      },
      {
        hex: '#aba5af',
        count: 1,
        relativeLuminance: 68.50669354069841,
      },
      {
        hex: '#93abb5',
        count: 1,
        relativeLuminance: 68.50794708348037,
      },
      {
        hex: '#c99d94',
        count: 1,
        relativeLuminance: 68.51123075058165,
      },
      {
        hex: '#bda0a5',
        count: 1,
        relativeLuminance: 68.51667491734253,
      },
      {
        hex: '#92ada4',
        count: 1,
        relativeLuminance: 68.5177147668184,
      },
      {
        hex: '#9fa9ab',
        count: 1,
        relativeLuminance: 68.52402798308839,
      },
      {
        hex: '#ada6a0',
        count: 1,
        relativeLuminance: 68.52956366790806,
      },
      {
        hex: '#b6a496',
        count: 2,
        relativeLuminance: 68.53194655768536,
      },
      {
        hex: '#ca9e85',
        count: 1,
        relativeLuminance: 68.53611171998381,
      },
      {
        hex: '#b5a49a',
        count: 1,
        relativeLuminance: 68.53905186523863,
      },
      {
        hex: '#bea28d',
        count: 2,
        relativeLuminance: 68.54132904627767,
      },
      {
        hex: '#b7a493',
        count: 2,
        relativeLuminance: 68.55143549725099,
      },
      {
        hex: '#97aca3',
        count: 1,
        relativeLuminance: 68.55428702088614,
      },
      {
        hex: '#9faaa2',
        count: 1,
        relativeLuminance: 68.55451498468358,
      },
      {
        hex: '#ada797',
        count: 1,
        relativeLuminance: 68.57417504656578,
      },
      {
        hex: '#a7a8a0',
        count: 1,
        relativeLuminance: 68.57619966564883,
      },
      {
        hex: '#b3a598',
        count: 1,
        relativeLuminance: 68.57776534102211,
      },
      {
        hex: '#c0a286',
        count: 1,
        relativeLuminance: 68.58313837203848,
      },
      {
        hex: '#9eaaa6',
        count: 2,
        relativeLuminance: 68.58558648281755,
      },
      {
        hex: '#b2a59c',
        count: 1,
        relativeLuminance: 68.58836377800772,
      },
      {
        hex: '#b9a398',
        count: 2,
        relativeLuminance: 68.58845638150304,
      },
      {
        hex: '#b7a495',
        count: 2,
        relativeLuminance: 68.59751062902576,
      },
      {
        hex: '#aaa7a2',
        count: 1,
        relativeLuminance: 68.60041196560286,
      },
      {
        hex: '#c59f94',
        count: 1,
        relativeLuminance: 68.60956585543741,
      },
      {
        hex: '#c69f90',
        count: 1,
        relativeLuminance: 68.61752223433871,
      },
      {
        hex: '#b7a496',
        count: 1,
        relativeLuminance: 68.62082813786657,
      },
      {
        hex: '#92ada8',
        count: 1,
        relativeLuminance: 68.6245182880706,
      },
      {
        hex: '#b3a59a',
        count: 1,
        relativeLuminance: 68.62581222577715,
      },
      {
        hex: '#b6a49a',
        count: 1,
        relativeLuminance: 68.62728676744003,
      },
      {
        hex: '#9caaad',
        count: 2,
        relativeLuminance: 68.63121277921176,
      },
      {
        hex: '#93acb0',
        count: 1,
        relativeLuminance: 68.63715474511432,
      },
      {
        hex: '#c2a097',
        count: 1,
        relativeLuminance: 68.63906500093977,
      },
      {
        hex: '#bda1a0',
        count: 1,
        relativeLuminance: 68.64001605719764,
      },
      {
        hex: '#96aca9',
        count: 1,
        relativeLuminance: 68.64512162411853,
      },
      {
        hex: '#a5aa93',
        count: 1,
        relativeLuminance: 68.6463683687812,
      },
      {
        hex: '#a7a8a3',
        count: 1,
        relativeLuminance: 68.65343299258969,
      },
      {
        hex: '#a8a8a0',
        count: 1,
        relativeLuminance: 68.65565662341125,
      },
      {
        hex: '#a3aa9a',
        count: 1,
        relativeLuminance: 68.65632099568691,
      },
      {
        hex: '#a3a9a5',
        count: 1,
        relativeLuminance: 68.66358166824394,
      },
      {
        hex: '#c89f89',
        count: 1,
        relativeLuminance: 68.6655416762359,
      },
      {
        hex: '#afa69f',
        count: 2,
        relativeLuminance: 68.67121915315643,
      },
      {
        hex: '#bda297',
        count: 2,
        relativeLuminance: 68.674298945212,
      },
      {
        hex: '#86afb1',
        count: 1,
        relativeLuminance: 68.68065413728756,
      },
      {
        hex: '#aea6a3',
        count: 1,
        relativeLuminance: 68.68997621907239,
      },
      {
        hex: '#a0ab9a',
        count: 1,
        relativeLuminance: 68.70234007990858,
      },
      {
        hex: '#b5a596',
        count: 1,
        relativeLuminance: 68.70490394656566,
      },
      {
        hex: '#b0a69d',
        count: 1,
        relativeLuminance: 68.70550690571365,
      },
      {
        hex: '#c89f8b',
        count: 1,
        relativeLuminance: 68.70757392367749,
      },
      {
        hex: '#9ca9b9',
        count: 1,
        relativeLuminance: 68.71259278575043,
      },
      {
        hex: '#9caba6',
        count: 1,
        relativeLuminance: 68.71279368351458,
      },
      {
        hex: '#afa6a1',
        count: 1,
        relativeLuminance: 68.72199467696109,
      },
      {
        hex: '#93acb3',
        count: 1,
        relativeLuminance: 68.72428502226285,
      },
      {
        hex: '#a0ab9b',
        count: 1,
        relativeLuminance: 68.72660137813733,
      },
      {
        hex: '#aba7a4',
        count: 1,
        relativeLuminance: 68.73365676273224,
      },
      {
        hex: '#aca98a',
        count: 1,
        relativeLuminance: 68.73791190543382,
      },
      {
        hex: '#c0a0a3',
        count: 1,
        relativeLuminance: 68.74577642986436,
      },
      {
        hex: '#99abaf',
        count: 1,
        relativeLuminance: 68.74639005676701,
      },
      {
        hex: '#b8a3a2',
        count: 1,
        relativeLuminance: 68.7464609345117,
      },
      {
        hex: '#baa39b',
        count: 4,
        relativeLuminance: 68.75129934003581,
      },
      {
        hex: '#b5a598',
        count: 2,
        relativeLuminance: 68.75200616389083,
      },
      {
        hex: '#b2a698',
        count: 1,
        relativeLuminance: 68.75446143460823,
      },
      {
        hex: '#a6a9a0',
        count: 1,
        relativeLuminance: 68.76646759658856,
      },
      {
        hex: '#ada894',
        count: 1,
        relativeLuminance: 68.77126676726951,
      },
      {
        hex: '#c3a281',
        count: 1,
        relativeLuminance: 68.77135623592181,
      },
      {
        hex: '#c1a196',
        count: 1,
        relativeLuminance: 68.77241400026803,
      },
      {
        hex: '#9babab',
        count: 1,
        relativeLuminance: 68.77636225682065,
      },
      {
        hex: '#b8a499',
        count: 1,
        relativeLuminance: 68.78107998166637,
      },
      {
        hex: '#a4aa9c',
        count: 1,
        relativeLuminance: 68.78186916646142,
      },
      {
        hex: '#a1aaa5',
        count: 1,
        relativeLuminance: 68.78249631238695,
      },
      {
        hex: '#aca7a3',
        count: 2,
        relativeLuminance: 68.78922919265769,
      },
      {
        hex: '#9faba1',
        count: 1,
        relativeLuminance: 68.8019100964478,
      },
      {
        hex: '#aea79d',
        count: 1,
        relativeLuminance: 68.802248575949,
      },
      {
        hex: '#c6a08d',
        count: 1,
        relativeLuminance: 68.80227789590674,
      },
      {
        hex: '#b2a69a',
        count: 1,
        relativeLuminance: 68.80230836142948,
      },
      {
        hex: '#aea892',
        count: 1,
        relativeLuminance: 68.80863807588409,
      },
      {
        hex: '#bea1a3',
        count: 1,
        relativeLuminance: 68.81006638151308,
      },
      {
        hex: '#b4a59e',
        count: 1,
        relativeLuminance: 68.81075785670595,
      },
      {
        hex: '#a9a8a3',
        count: 1,
        relativeLuminance: 68.81251992258885,
      },
      {
        hex: '#b7a49e',
        count: 2,
        relativeLuminance: 68.81410911438002,
      },
      {
        hex: '#aca7a4',
        count: 1,
        relativeLuminance: 68.81526959677883,
      },
      {
        hex: '#81b0b6',
        count: 1,
        relativeLuminance: 68.82016514200039,
      },
      {
        hex: '#a6ab8b',
        count: 1,
        relativeLuminance: 68.82139244353402,
      },
      {
        hex: '#b6a4a2',
        count: 1,
        relativeLuminance: 68.82699391734612,
      },
      {
        hex: '#bca2a1',
        count: 1,
        relativeLuminance: 68.82742679656901,
      },
      {
        hex: '#b8a49b',
        count: 2,
        relativeLuminance: 68.82929794352775,
      },
      {
        hex: '#aba992',
        count: 1,
        relativeLuminance: 68.83028125385118,
      },
      {
        hex: '#b6a68c',
        count: 1,
        relativeLuminance: 68.8315723583929,
      },
      {
        hex: '#c1a28e',
        count: 1,
        relativeLuminance: 68.84613228775787,
      },
      {
        hex: '#c4a18d',
        count: 1,
        relativeLuminance: 68.85876183885672,
      },
      {
        hex: '#b4a5a0',
        count: 1,
        relativeLuminance: 68.86096015857146,
      },
      {
        hex: '#a6aa99',
        count: 1,
        relativeLuminance: 68.86436934457082,
      },
      {
        hex: '#b1a6a0',
        count: 1,
        relativeLuminance: 68.86528225879462,
      },
      {
        hex: '#b3a5a4',
        count: 1,
        relativeLuminance: 68.87734186664882,
      },
      {
        hex: '#aca89c',
        count: 1,
        relativeLuminance: 68.87872188369876,
      },
      {
        hex: '#95acb4',
        count: 1,
        relativeLuminance: 68.88859799859307,
      },
      {
        hex: '#baa496',
        count: 1,
        relativeLuminance: 68.89013892971847,
      },
      {
        hex: '#98acad',
        count: 1,
        relativeLuminance: 68.89414396682066,
      },
      {
        hex: '#a5a9a8',
        count: 1,
        relativeLuminance: 68.89763953458868,
      },
      {
        hex: '#9fac9a',
        count: 1,
        relativeLuminance: 68.90243958084098,
      },
      {
        hex: '#aea7a1',
        count: 1,
        relativeLuminance: 68.90261489292055,
      },
      {
        hex: '#b7a597',
        count: 1,
        relativeLuminance: 68.90449111308926,
      },
      {
        hex: '#bda396',
        count: 1,
        relativeLuminance: 68.90687187866942,
      },
      {
        hex: '#baa497',
        count: 3,
        relativeLuminance: 68.9134944679721,
      },
      {
        hex: '#b1a6a2',
        count: 2,
        relativeLuminance: 68.916232873058,
      },
      {
        hex: '#aba8a1',
        count: 1,
        relativeLuminance: 68.92216132186373,
      },
      {
        hex: '#a9a99d',
        count: 1,
        relativeLuminance: 68.92856164689415,
      },
      {
        hex: '#a4a9ac',
        count: 1,
        relativeLuminance: 68.92981190615593,
      },
      {
        hex: '#bba494',
        count: 1,
        relativeLuminance: 68.93473672814063,
      },
      {
        hex: '#c6a093',
        count: 1,
        relativeLuminance: 68.93483014465343,
      },
      {
        hex: '#97acb1',
        count: 1,
        relativeLuminance: 68.93823397621213,
      },
      {
        hex: '#8caeb7',
        count: 1,
        relativeLuminance: 68.94383600291131,
      },
      {
        hex: '#aea98c',
        count: 1,
        relativeLuminance: 68.94499288393963,
      },
      {
        hex: '#99ada2',
        count: 1,
        relativeLuminance: 68.94501106013013,
      },
      {
        hex: '#91aeac',
        count: 1,
        relativeLuminance: 68.94668674021935,
      },
      {
        hex: '#ada990',
        count: 1,
        relativeLuminance: 68.94912641380459,
      },
      {
        hex: '#b7a599',
        count: 1,
        relativeLuminance: 68.95177030282322,
      },
      {
        hex: '#a5a9aa',
        count: 1,
        relativeLuminance: 68.95183664802539,
      },
      {
        hex: '#afa895',
        count: 2,
        relativeLuminance: 68.9602013026006,
      },
      {
        hex: '#b6a59d',
        count: 2,
        relativeLuminance: 68.96057762211365,
      },
      {
        hex: '#9bad9d',
        count: 1,
        relativeLuminance: 68.96083140965618,
      },
      {
        hex: '#b3a69d',
        count: 1,
        relativeLuminance: 68.96114816366547,
      },
      {
        hex: '#b8a596',
        count: 3,
        relativeLuminance: 68.9699115220621,
      },
      {
        hex: '#c0a298',
        count: 1,
        relativeLuminance: 68.9782013471121,
      },
      {
        hex: '#a9a99f',
        count: 1,
        relativeLuminance: 68.97822052727628,
      },
      {
        hex: '#c6a095',
        count: 1,
        relativeLuminance: 68.98049058543516,
      },
      {
        hex: '#bba496',
        count: 2,
        relativeLuminance: 68.98079207602675,
      },
      {
        hex: '#c99f93',
        count: 1,
        relativeLuminance: 68.98269590967317,
      },
      {
        hex: '#afa896',
        count: 1,
        relativeLuminance: 68.98332023514735,
      },
      {
        hex: '#b6a59e',
        count: 2,
        relativeLuminance: 68.98529465335886,
      },
      {
        hex: '#a2ac94',
        count: 1,
        relativeLuminance: 68.98570921912673,
      },
      {
        hex: '#b3a69e',
        count: 1,
        relativeLuminance: 68.98586486309091,
      },
      {
        hex: '#b8a597',
        count: 3,
        relativeLuminance: 68.9932232450225,
      },
      {
        hex: '#b0a79e',
        count: 2,
        relativeLuminance: 68.994074433634,
      },
      {
        hex: '#99ada4',
        count: 2,
        relativeLuminance: 68.99668108265138,
      },
      {
        hex: '#b4a69b',
        count: 2,
        relativeLuminance: 68.9984899779248,
      },
      {
        hex: '#b7a59b',
        count: 2,
        relativeLuminance: 68.99979485854205,
      },
      {
        hex: '#c3a198',
        count: 2,
        relativeLuminance: 69.01040433410967,
      },
      {
        hex: '#abaa8e',
        count: 1,
        relativeLuminance: 69.0115079477351,
      },
      {
        hex: '#a3ab9e',
        count: 2,
        relativeLuminance: 69.02633652944417,
      },
      {
        hex: '#a8a9a4',
        count: 1,
        relativeLuminance: 69.02642918661465,
      },
      {
        hex: '#a9a9a1',
        count: 1,
        relativeLuminance: 69.02863016584034,
      },
      {
        hex: '#9cad9d',
        count: 2,
        relativeLuminance: 69.03238793665591,
      },
      {
        hex: '#c1a38b',
        count: 1,
        relativeLuminance: 69.03709446880626,
      },
      {
        hex: '#aea89c',
        count: 1,
        relativeLuminance: 69.04307473210756,
      },
      {
        hex: '#b4a69d',
        count: 1,
        relativeLuminance: 69.04726264587543,
      },
      {
        hex: '#99acb0',
        count: 1,
        relativeLuminance: 69.04861891961606,
      },
      {
        hex: '#b7a692',
        count: 2,
        relativeLuminance: 69.0508468063876,
      },
      {
        hex: '#c2a293',
        count: 1,
        relativeLuminance: 69.05195456586489,
      },
      {
        hex: '#cb9e98',
        count: 1,
        relativeLuminance: 69.05242156427305,
      },
      {
        hex: '#b6a696',
        count: 2,
        relativeLuminance: 69.05407584101374,
      },
      {
        hex: '#bba58e',
        count: 1,
        relativeLuminance: 69.06020914100974,
      },
      {
        hex: '#b1a79e',
        count: 3,
        relativeLuminance: 69.07826249588645,
      },
      {
        hex: '#a8aa9c',
        count: 2,
        relativeLuminance: 69.09365308724826,
      },
      {
        hex: '#bea39a',
        count: 1,
        relativeLuminance: 69.09368713939317,
      },
      {
        hex: '#b0a7a2',
        count: 1,
        relativeLuminance: 69.09479742140682,
      },
      {
        hex: '#b7a694',
        count: 2,
        relativeLuminance: 69.0959900985328,
      },
      {
        hex: '#b4a794',
        count: 1,
        relativeLuminance: 69.09671975031111,
      },
      {
        hex: '#c2a295',
        count: 1,
        relativeLuminance: 69.09748943684113,
      },
      {
        hex: '#9faca2',
        count: 1,
        relativeLuminance: 69.1008589252509,
      },
      {
        hex: '#baa594',
        count: 2,
        relativeLuminance: 69.10292631336286,
      },
      {
        hex: '#99acb2',
        count: 1,
        relativeLuminance: 69.10595512310898,
      },
      {
        hex: '#b0a98c',
        count: 1,
        relativeLuminance: 69.11154729096681,
      },
      {
        hex: '#94aeab',
        count: 1,
        relativeLuminance: 69.11785849707626,
      },
      {
        hex: '#bca498',
        count: 1,
        relativeLuminance: 69.1185807936364,
      },
      {
        hex: '#bba49c',
        count: 1,
        relativeLuminance: 69.12341423276644,
      },
      {
        hex: '#c7a18c',
        count: 1,
        relativeLuminance: 69.13008256763032,
      },
      {
        hex: '#a3ac97',
        count: 1,
        relativeLuminance: 69.13054318693563,
      },
      {
        hex: '#c6a191',
        count: 2,
        relativeLuminance: 69.14051786992226,
      },
      {
        hex: '#b7a5a1',
        count: 1,
        relativeLuminance: 69.14835284933929,
      },
      {
        hex: '#b9a59a',
        count: 4,
        relativeLuminance: 69.15329921471404,
      },
      {
        hex: '#c8a094',
        count: 1,
        relativeLuminance: 69.15433337486714,
      },
      {
        hex: '#9eabb1',
        count: 1,
        relativeLuminance: 69.16161956194259,
      },
      {
        hex: '#bca49a',
        count: 3,
        relativeLuminance: 69.1660195798481,
      },
      {
        hex: '#c7a099',
        count: 1,
        relativeLuminance: 69.17194013420219,
      },
      {
        hex: '#bba49e',
        count: 1,
        relativeLuminance: 69.17244463331241,
      },
      {
        hex: '#a0aca2',
        count: 2,
        relativeLuminance: 69.17454547348973,
      },
      {
        hex: '#b5a69f',
        count: 2,
        relativeLuminance: 69.18324472573977,
      },
      {
        hex: '#9cada3',
        count: 1,
        relativeLuminance: 69.18324976855803,
      },
      {
        hex: '#99adab',
        count: 1,
        relativeLuminance: 69.18347594431144,
      },
      {
        hex: '#b0a89b',
        count: 2,
        relativeLuminance: 69.18505962299496,
      },
      {
        hex: '#95aeab',
        count: 1,
        relativeLuminance: 69.18506777893047,
      },
      {
        hex: '#bfa48f',
        count: 1,
        relativeLuminance: 69.19117328458334,
      },
      {
        hex: '#9aada9',
        count: 1,
        relativeLuminance: 69.19926115595923,
      },
      {
        hex: '#b9a59c',
        count: 2,
        relativeLuminance: 69.20149541607476,
      },
      {
        hex: '#c2a482',
        count: 1,
        relativeLuminance: 69.20658667969263,
      },
      {
        hex: '#99adac',
        count: 2,
        relativeLuminance: 69.21091770114225,
      },
      {
        hex: '#aaa9a5',
        count: 1,
        relativeLuminance: 69.21134176106274,
      },
      {
        hex: '#bda58d',
        count: 1,
        relativeLuminance: 69.22106961683231,
      },
      {
        hex: '#afa8a0',
        count: 1,
        relativeLuminance: 69.22473569924061,
      },
      {
        hex: '#a4aba3',
        count: 1,
        relativeLuminance: 69.22859507437867,
      },
      {
        hex: '#c5a28e',
        count: 1,
        relativeLuminance: 69.22952253245354,
      },
      {
        hex: '#b5a6a1',
        count: 1,
        relativeLuminance: 69.23341221257307,
      },
      {
        hex: '#bfa491',
        count: 1,
        relativeLuminance: 69.23499949835423,
      },
      {
        hex: '#9cada5',
        count: 1,
        relativeLuminance: 69.2350379982858,
      },
      {
        hex: '#a7ab9a',
        count: 1,
        relativeLuminance: 69.23699397928087,
      },
      {
        hex: '#bca3a7',
        count: 1,
        relativeLuminance: 69.23797404498472,
      },
      {
        hex: '#a1abac',
        count: 2,
        relativeLuminance: 69.24203600698424,
      },
      {
        hex: '#c9a188',
        count: 1,
        relativeLuminance: 69.24445216106974,
      },
      {
        hex: '#b7a5a5',
        count: 1,
        relativeLuminance: 69.25113927692806,
      },
      {
        hex: '#ada99d',
        count: 1,
        relativeLuminance: 69.25137755351268,
      },
      {
        hex: '#95adb7',
        count: 1,
        relativeLuminance: 69.25216984977521,
      },
      {
        hex: '#c3a571',
        count: 1,
        relativeLuminance: 69.25863005128241,
      },
      {
        hex: '#8eafb4',
        count: 1,
        relativeLuminance: 69.259625976959,
      },
      {
        hex: '#bba597',
        count: 2,
        relativeLuminance: 69.26206892444657,
      },
      {
        hex: '#b7a790',
        count: 1,
        relativeLuminance: 69.26843915541998,
      },
      {
        hex: '#b6a794',
        count: 1,
        relativeLuminance: 69.27008905425598,
      },
      {
        hex: '#afa8a2',
        count: 1,
        relativeLuminance: 69.27525781164998,
      },
      {
        hex: '#ada99e',
        count: 1,
        relativeLuminance: 69.27592632123437,
      },
      {
        hex: '#b4a6a6',
        count: 1,
        relativeLuminance: 69.27600905787514,
      },
      {
        hex: '#b8a698',
        count: 2,
        relativeLuminance: 69.27663398995655,
      },
      {
        hex: '#b2a98c',
        count: 1,
        relativeLuminance: 69.27991022717738,
      },
      {
        hex: '#c6a28c',
        count: 1,
        relativeLuminance: 69.2838562878606,
      },
      {
        hex: '#b7a69c',
        count: 1,
        relativeLuminance: 69.28395557085943,
      },
      {
        hex: '#b5a6a3',
        count: 1,
        relativeLuminance: 69.28432830356653,
      },
      {
        hex: '#bba598',
        count: 1,
        relativeLuminance: 69.28541842303855,
      },
      {
        hex: '#9cada7',
        count: 1,
        relativeLuminance: 69.2875782335513,
      },
      {
        hex: '#bca3a9',
        count: 1,
        relativeLuminance: 69.29132908295065,
      },
      {
        hex: '#a3aab2',
        count: 1,
        relativeLuminance: 69.29133560551765,
      },
      {
        hex: '#c1a57e',
        count: 1,
        relativeLuminance: 69.29401616259771,
      },
      {
        hex: '#aca9a2',
        count: 1,
        relativeLuminance: 69.29483391071432,
      },
      {
        hex: '#b9a695',
        count: 2,
        relativeLuminance: 69.29585318603823,
      },
      {
        hex: '#b0aa88',
        count: 1,
        relativeLuminance: 69.29619677009183,
      },
      {
        hex: '#99aea5',
        count: 1,
        relativeLuminance: 69.29897865370872,
      },
      {
        hex: '#c0a39b',
        count: 1,
        relativeLuminance: 69.30354808667252,
      },
      {
        hex: '#bca595',
        count: 2,
        relativeLuminance: 69.30651406900348,
      },
      {
        hex: '#a0abb1',
        count: 1,
        relativeLuminance: 69.30806444502731,
      },
      {
        hex: '#98adb2',
        count: 1,
        relativeLuminance: 69.31032727272645,
      },
      {
        hex: '#8eafb6',
        count: 1,
        relativeLuminance: 69.3183573699398,
      },
      {
        hex: '#afa999',
        count: 1,
        relativeLuminance: 69.31955490765031,
      },
      {
        hex: '#9eacad',
        count: 2,
        relativeLuminance: 69.32061044353412,
      },
      {
        hex: '#b8a69a',
        count: 1,
        relativeLuminance: 69.32389723746854,
      },
      {
        hex: '#9fada0',
        count: 1,
        relativeLuminance: 69.32408053335472,
      },
      {
        hex: '#c1a580',
        count: 1,
        relativeLuminance: 69.33129981486017,
      },
      {
        hex: '#9dae9b',
        count: 1,
        relativeLuminance: 69.33167415807867,
      },
      {
        hex: '#b7a69e',
        count: 2,
        relativeLuminance: 69.3328017107191,
      },
      {
        hex: '#96aeae',
        count: 1,
        relativeLuminance: 69.33550865053522,
      },
      {
        hex: '#b9a697',
        count: 1,
        relativeLuminance: 69.34191213827098,
      },
      {
        hex: '#aaaaa0',
        count: 1,
        relativeLuminance: 69.3508224251561,
      },
      {
        hex: '#99aea7',
        count: 1,
        relativeLuminance: 69.3514402221184,
      },
      {
        hex: '#bca597',
        count: 1,
        relativeLuminance: 69.3525615191574,
      },
      {
        hex: '#9dae9c',
        count: 1,
        relativeLuminance: 69.35577783073762,
      },
      {
        hex: '#b7a69f',
        count: 2,
        relativeLuminance: 69.35750383393766,
      },
      {
        hex: '#a3ad95',
        count: 1,
        relativeLuminance: 69.35798758291847,
      },
      {
        hex: '#b4a79f',
        count: 1,
        relativeLuminance: 69.358229021686,
      },
      {
        hex: '#a2aab7',
        count: 1,
        relativeLuminance: 69.36236749354043,
      },
      {
        hex: '#b9a698',
        count: 2,
        relativeLuminance: 69.36521798507513,
      },
      {
        hex: '#9aaea5',
        count: 1,
        relativeLuminance: 69.3688008664389,
      },
      {
        hex: '#b5a79c',
        count: 2,
        relativeLuminance: 69.3707636221159,
      },
      {
        hex: '#a9aaa4',
        count: 1,
        relativeLuminance: 69.37312859267158,
      },
      {
        hex: '#a6aaad',
        count: 1,
        relativeLuminance: 69.3793879015831,
      },
      {
        hex: '#9caea0',
        count: 1,
        relativeLuminance: 69.38261162139737,
      },
      {
        hex: '#bfa58c',
        count: 1,
        relativeLuminance: 69.38403462482344,
      },
      {
        hex: '#c1a39b',
        count: 1,
        relativeLuminance: 69.39710510694246,
      },
      {
        hex: '#bda4a0',
        count: 1,
        relativeLuminance: 69.4038119840593,
      },
      {
        hex: '#b3a98e',
        count: 1,
        relativeLuminance: 69.40725924346368,
      },
      {
        hex: '#b4a7a1',
        count: 1,
        relativeLuminance: 69.40819121318727,
      },
      {
        hex: '#88b0bc',
        count: 1,
        relativeLuminance: 69.40948078074007,
      },
      {
        hex: '#a7ac96',
        count: 1,
        relativeLuminance: 69.4143287332634,
      },
      {
        hex: '#b1a8a1',
        count: 1,
        relativeLuminance: 69.41649547865543,
      },
      {
        hex: '#97adb8',
        count: 1,
        relativeLuminance: 69.41760589656975,
      },
      {
        hex: '#b5a79e',
        count: 2,
        relativeLuminance: 69.41951056048775,
      },
      {
        hex: '#9aadb1',
        count: 1,
        relativeLuminance: 69.42070668134899,
      },
      {
        hex: '#b2aa86',
        count: 1,
        relativeLuminance: 69.42367933007387,
      },
      {
        hex: '#b7a797',
        count: 1,
        relativeLuminance: 69.42611750345829,
      },
      {
        hex: '#c4a390',
        count: 1,
        relativeLuminance: 69.42945855102556,
      },
      {
        hex: '#9badaf',
        count: 1,
        relativeLuminance: 69.43450811177654,
      },
      {
        hex: '#acaa9d',
        count: 1,
        relativeLuminance: 69.43706001002349,
      },
      {
        hex: '#a0acac',
        count: 1,
        relativeLuminance: 69.43902752514326,
      },
      {
        hex: '#c0a496',
        count: 1,
        relativeLuminance: 69.44060014429115,
      },
      {
        hex: '#b8a5a9',
        count: 1,
        relativeLuminance: 69.44472807357565,
      },
      {
        hex: '#c1a2a7',
        count: 1,
        relativeLuminance: 69.44683097813912,
      },
      {
        hex: '#b7a798',
        count: 1,
        relativeLuminance: 69.44937744605997,
      },
      {
        hex: '#93aeb9',
        count: 1,
        relativeLuminance: 69.45380884739404,
      },
      {
        hex: '#9eada8',
        count: 1,
        relativeLuminance: 69.45770173661674,
      },
      {
        hex: '#b9a791',
        count: 1,
        relativeLuminance: 69.4667206771718,
      },
      {
        hex: '#a0ada3',
        count: 1,
        relativeLuminance: 69.47313961876512,
      },
      {
        hex: '#b6a6a7',
        count: 1,
        relativeLuminance: 69.4749010193468,
      },
      {
        hex: '#bca691',
        count: 3,
        relativeLuminance: 69.47532545287677,
      },
      {
        hex: '#aea9a3',
        count: 2,
        relativeLuminance: 69.48302463697982,
      },
      {
        hex: '#99adb6',
        count: 1,
        relativeLuminance: 69.49576455226773,
      },
      {
        hex: '#b4a89a',
        count: 1,
        relativeLuminance: 69.49918974939663,
      },
      {
        hex: '#cba18b',
        count: 1,
        relativeLuminance: 69.50536204215061,
      },
      {
        hex: '#b9a793',
        count: 1,
        relativeLuminance: 69.5110380601671,
      },
      {
        hex: '#a8aba2',
        count: 1,
        relativeLuminance: 69.51173599046112,
      },
      {
        hex: '#bfa49d',
        count: 1,
        relativeLuminance: 69.5133869609848,
      },
      {
        hex: '#b5a897',
        count: 1,
        relativeLuminance: 69.5146535466199,
      },
      {
        hex: '#9baea8',
        count: 1,
        relativeLuminance: 69.51780760511186,
      },
      {
        hex: '#c4a394',
        count: 1,
        relativeLuminance: 69.5181255738234,
      },
      {
        hex: '#b8a6a2',
        count: 1,
        relativeLuminance: 69.52036798670525,
      },
      {
        hex: '#c9a195',
        count: 1,
        relativeLuminance: 69.52446067805829,
      },
      {
        hex: '#baa69b',
        count: 2,
        relativeLuminance: 69.52511922652599,
      },
      {
        hex: '#a6ac9e',
        count: 1,
        relativeLuminance: 69.52694258231443,
      },
      {
        hex: '#b9a69f',
        count: 1,
        relativeLuminance: 69.53353323278257,
      },
      {
        hex: '#9facb2',
        count: 1,
        relativeLuminance: 69.53381857792819,
      },
      {
        hex: '#bda59b',
        count: 1,
        relativeLuminance: 69.5375970352677,
      },
      {
        hex: '#93afb3',
        count: 1,
        relativeLuminance: 69.55325280648616,
      },
      {
        hex: '#b6a7a0',
        count: 4,
        relativeLuminance: 69.55532865459129,
      },
      {
        hex: '#abaaa5',
        count: 1,
        relativeLuminance: 69.5577512454841,
      },
      {
        hex: '#bfa594',
        count: 1,
        relativeLuminance: 69.558292137866,
      },
      {
        hex: '#acab97',
        count: 2,
        relativeLuminance: 69.56262071753072,
      },
      {
        hex: '#a8aba4',
        count: 1,
        relativeLuminance: 69.56272401337517,
      },
      {
        hex: '#9baeaa',
        count: 1,
        relativeLuminance: 69.57122223868105,
      },
      {
        hex: '#baa69d',
        count: 2,
        relativeLuminance: 69.57329360595493,
      },
      {
        hex: '#b8a88e',
        count: 1,
        relativeLuminance: 69.5752431189039,
      },
      {
        hex: '#cca095',
        count: 1,
        relativeLuminance: 69.57545781597283,
      },
      {
        hex: '#a2ae96',
        count: 1,
        relativeLuminance: 69.58013777844849,
      },
      {
        hex: '#a3aca9',
        count: 1,
        relativeLuminance: 69.58060405916162,
      },
      {
        hex: '#a9aaac',
        count: 1,
        relativeLuminance: 69.58548707635362,
      },
      {
        hex: '#b8a88f',
        count: 1,
        relativeLuminance: 69.59667752076427,
      },
      {
        hex: '#b7a893',
        count: 1,
        relativeLuminance: 69.59692351961152,
      },
      {
        hex: '#c6a38f',
        count: 1,
        relativeLuminance: 69.59990249582692,
      },
      {
        hex: '#bba78f',
        count: 1,
        relativeLuminance: 69.60137682773897,
      },
      {
        hex: '#bfa596',
        count: 1,
        relativeLuminance: 69.60367915600293,
      },
      {
        hex: '#b6a7a2',
        count: 1,
        relativeLuminance: 69.60546142091992,
      },
      {
        hex: '#b3a8a2',
        count: 1,
        relativeLuminance: 69.61004253206666,
      },
      {
        hex: '#96aeb8',
        count: 1,
        relativeLuminance: 69.62368587455055,
      },
      {
        hex: '#9baeac',
        count: 1,
        relativeLuminance: 69.62538767300236,
      },
      {
        hex: '#bca78c',
        count: 1,
        relativeLuminance: 69.62753443948597,
      },
      {
        hex: '#c3a492',
        count: 1,
        relativeLuminance: 69.63185925195931,
      },
      {
        hex: '#97aeb6',
        count: 1,
        relativeLuminance: 69.63219150361967,
      },
      {
        hex: '#bda694',
        count: 2,
        relativeLuminance: 69.63258846951814,
      },
      {
        hex: '#bca698',
        count: 1,
        relativeLuminance: 69.63360267695334,
      },
      {
        hex: '#a1ae9c',
        count: 1,
        relativeLuminance: 69.6468473333167,
      },
      {
        hex: '#96b0a5',
        count: 1,
        relativeLuminance: 69.6481524041036,
      },
      {
        hex: '#b9a799',
        count: 5,
        relativeLuminance: 69.64837772973479,
      },
      {
        hex: '#c0a594',
        count: 1,
        relativeLuminance: 69.65066462251437,
      },
      {
        hex: '#b8a79d',
        count: 1,
        relativeLuminance: 69.65580526901431,
      },
      {
        hex: '#c4a39a',
        count: 1,
        relativeLuminance: 69.65661405260892,
      },
      {
        hex: '#bca699',
        count: 1,
        relativeLuminance: 69.65694604880055,
      },
      {
        hex: '#b3a8a4',
        count: 1,
        relativeLuminance: 69.66091362678095,
      },
      {
        hex: '#9bafa3',
        count: 1,
        relativeLuminance: 69.66342720843878,
      },
      {
        hex: '#adaaa3',
        count: 1,
        relativeLuminance: 69.66710032552919,
      },
      {
        hex: '#baa796',
        count: 1,
        relativeLuminance: 69.6674644622226,
      },
      {
        hex: '#c8a389',
        count: 1,
        relativeLuminance: 69.66841717624868,
      },
      {
        hex: '#a3ada2',
        count: 2,
        relativeLuminance: 69.67013050302162,
      },
      {
        hex: '#cba193',
        count: 1,
        relativeLuminance: 69.6775926115731,
      },
      {
        hex: '#bda696',
        count: 1,
        relativeLuminance: 69.67789682714061,
      },
      {
        hex: '#a8ac9e',
        count: 1,
        relativeLuminance: 69.6816100771521,
      },
      {
        hex: '#99aeb3',
        count: 1,
        relativeLuminance: 69.6820217528997,
      },
      {
        hex: '#c9a291',
        count: 1,
        relativeLuminance: 69.68444574558275,
      },
      {
        hex: '#9fadae',
        count: 1,
        relativeLuminance: 69.69263665389518,
      },
      {
        hex: '#b9a79b',
        count: 2,
        relativeLuminance: 69.69562490814715,
      },
      {
        hex: '#a0aea1',
        count: 1,
        relativeLuminance: 69.6960621632056,
      },
      {
        hex: '#b8aa79',
        count: 1,
        relativeLuminance: 69.6970385812986,
      },
      {
        hex: '#aeaaa1',
        count: 2,
        relativeLuminance: 69.69778704611113,
      },
      {
        hex: '#bca69b',
        count: 1,
        relativeLuminance: 69.7041837831681,
      },
      {
        hex: '#b1aa97',
        count: 1,
        relativeLuminance: 69.70458587602316,
      },
      {
        hex: '#b8a79f',
        count: 2,
        relativeLuminance: 69.70462521169696,
      },
      {
        hex: '#b5a89f',
        count: 1,
        relativeLuminance: 69.70550384963175,
      },
      {
        hex: '#97afaf',
        count: 1,
        relativeLuminance: 69.70704450523624,
      },
      {
        hex: '#baa798',
        count: 1,
        relativeLuminance: 69.713514996999,
      },
      {
        hex: '#adaaa5',
        count: 3,
        relativeLuminance: 69.71830572820939,
      },
      {
        hex: '#89b1bb',
        count: 1,
        relativeLuminance: 69.71844910978413,
      },
      {
        hex: '#a3ada4',
        count: 1,
        relativeLuminance: 69.72093032546917,
      },
      {
        hex: '#ababa1',
        count: 1,
        relativeLuminance: 69.7230186684685,
      },
      {
        hex: '#bda698',
        count: 1,
        relativeLuminance: 69.72393615716524,
      },
      {
        hex: '#c6a489',
        count: 1,
        relativeLuminance: 69.72717638474737,
      },
      {
        hex: '#a4ae96',
        count: 1,
        relativeLuminance: 69.72986440908643,
      },
      {
        hex: '#b5a8a0',
        count: 3,
        relativeLuminance: 69.73019057657251,
      },
      {
        hex: '#bda5a3',
        count: 1,
        relativeLuminance: 69.73467974509903,
      },
      {
        hex: '#b0aa9c',
        count: 2,
        relativeLuminance: 69.73923064615691,
      },
      {
        hex: '#c7a29c',
        count: 1,
        relativeLuminance: 69.7415079462159,
      },
      {
        hex: '#b6a89d',
        count: 1,
        relativeLuminance: 69.74263574742969,
      },
      {
        hex: '#b9a79d',
        count: 2,
        relativeLuminance: 69.74360793731354,
      },
      {
        hex: '#a9aba8',
        count: 1,
        relativeLuminance: 69.74498603292263,
      },
      {
        hex: '#aaaba5',
        count: 1,
        relativeLuminance: 69.74533324108762,
      },
      {
        hex: '#b3a99d',
        count: 2,
        relativeLuminance: 69.7492118578046,
      },
      {
        hex: '#bea5a0',
        count: 1,
        relativeLuminance: 69.75028799173133,
      },
      {
        hex: '#93afba',
        count: 1,
        relativeLuminance: 69.75925709693394,
      },
      {
        hex: '#97afb1',
        count: 2,
        relativeLuminance: 69.76309093672785,
      },
      {
        hex: '#acac94',
        count: 1,
        relativeLuminance: 69.76326324115506,
      },
      {
        hex: '#94afb8',
        count: 2,
        relativeLuminance: 69.76518279137088,
      },
      {
        hex: '#bfa692',
        count: 2,
        relativeLuminance: 69.77055076871964,
      },
      {
        hex: '#a5ada0',
        count: 1,
        relativeLuminance: 69.77084307490371,
      },
      {
        hex: '#baa6a5',
        count: 1,
        relativeLuminance: 69.77339883510102,
      },
      {
        hex: '#a6ad9d',
        count: 1,
        relativeLuminance: 69.77361130642282,
      },
      {
        hex: '#9aafaa',
        count: 1,
        relativeLuminance: 69.77629573241133,
      },
      {
        hex: '#c3a58d',
        count: 1,
        relativeLuminance: 69.7785642707548,
      },
      {
        hex: '#b5a8a2',
        count: 1,
        relativeLuminance: 69.78011922065699,
      },
      {
        hex: '#96afb4',
        count: 1,
        relativeLuminance: 69.78125525066511,
      },
      {
        hex: '#bda78f',
        count: 1,
        relativeLuminance: 69.78136695244142,
      },
      {
        hex: '#c7a393',
        count: 1,
        relativeLuminance: 69.7839571978442,
      },
      {
        hex: '#b0aa9e',
        count: 1,
        relativeLuminance: 69.78755985583271,
      },
      {
        hex: '#c4a495',
        count: 1,
        relativeLuminance: 69.79351799228225,
      },
      {
        hex: '#b9a894',
        count: 1,
        relativeLuminance: 69.79426879501469,
      },
      {
        hex: '#baa890',
        count: 1,
        relativeLuminance: 69.79449061509689,
      },
      {
        hex: '#b8a98c',
        count: 1,
        relativeLuminance: 69.79572582448596,
      },
      {
        hex: '#a9abaa',
        count: 1,
        relativeLuminance: 69.79811826379394,
      },
      {
        hex: '#bca794',
        count: 2,
        relativeLuminance: 69.80080528637899,
      },
      {
        hex: '#9dafa3',
        count: 1,
        relativeLuminance: 69.80467036270147,
      },
      {
        hex: '#c1a597',
        count: 1,
        relativeLuminance: 69.81152650077439,
      },
      {
        hex: '#c2a593',
        count: 1,
        relativeLuminance: 69.81442059524818,
      },
      {
        hex: '#b8a899',
        count: 1,
        relativeLuminance: 69.82101442169345,
      },
      {
        hex: '#a8ad99',
        count: 1,
        relativeLuminance: 69.83257027441867,
      },
      {
        hex: '#cca28a',
        count: 1,
        relativeLuminance: 69.8333678543478,
      },
      {
        hex: '#baa892',
        count: 1,
        relativeLuminance: 69.83808620080904,
      },
      {
        hex: '#b9a896',
        count: 1,
        relativeLuminance: 69.83940667993284,
      },
      {
        hex: '#bda792',
        count: 1,
        relativeLuminance: 69.84647655521843,
      },
      {
        hex: '#a7aca8',
        count: 1,
        relativeLuminance: 69.85785438867953,
      },
      {
        hex: '#cba290',
        count: 1,
        relativeLuminance: 69.86004005688613,
      },
      {
        hex: '#bea69a',
        count: 3,
        relativeLuminance: 69.86137564396013,
      },
      {
        hex: '#9eaead',
        count: 1,
        relativeLuminance: 69.86536636822379,
      },
      {
        hex: '#b8a89b',
        count: 1,
        relativeLuminance: 69.86807186361678,
      },
      {
        hex: '#abac9c',
        count: 1,
        relativeLuminance: 69.8688524072658,
      },
      {
        hex: '#cea18e',
        count: 1,
        relativeLuminance: 69.86974796686354,
      },
      {
        hex: '#c8a393',
        count: 1,
        relativeLuminance: 69.88088548743055,
      },
      {
        hex: '#b9a898',
        count: 2,
        relativeLuminance: 69.88527306247683,
      },
      {
        hex: '#a6acac',
        count: 1,
        relativeLuminance: 69.88812726733288,
      },
      {
        hex: '#9bb0a1',
        count: 1,
        relativeLuminance: 69.889427206661,
      },
      {
        hex: '#b9a7a3',
        count: 1,
        relativeLuminance: 69.89198391411864,
      },
      {
        hex: '#caa296',
        count: 3,
        relativeLuminance: 69.89421337509484,
      },
      {
        hex: '#bba79c',
        count: 1,
        relativeLuminance: 69.89654252548532,
      },
      {
        hex: '#bca88d',
        count: 1,
        relativeLuminance: 69.90866184073688,
      },
      {
        hex: '#adac97',
        count: 1,
        relativeLuminance: 69.9114342898513,
      },
      {
        hex: '#a2aea4',
        count: 1,
        relativeLuminance: 69.91860432063562,
      },
      {
        hex: '#b5a99d',
        count: 1,
        relativeLuminance: 69.91873856481509,
      },
      {
        hex: '#a9aca5',
        count: 1,
        relativeLuminance: 69.93470961337619,
      },
      {
        hex: '#c4a590',
        count: 1,
        relativeLuminance: 69.93680178724013,
      },
      {
        hex: '#bba79e',
        count: 2,
        relativeLuminance: 69.94469502470324,
      },
      {
        hex: '#c5a58c',
        count: 1,
        relativeLuminance: 69.94693686359527,
      },
      {
        hex: '#bca88f',
        count: 1,
        relativeLuminance: 69.95099828987992,
      },
      {
        hex: '#b3aa9b',
        count: 1,
        relativeLuminance: 69.96502158144577,
      },
      {
        hex: '#b1aaa2',
        count: 3,
        relativeLuminance: 69.96888166230907,
      },
      {
        hex: '#c7a490',
        count: 1,
        relativeLuminance: 69.9699039119269,
      },
      {
        hex: '#cea287',
        count: 1,
        relativeLuminance: 69.97348895049304,
      },
      {
        hex: '#c1a693',
        count: 1,
        relativeLuminance: 69.9768216506084,
      },
      {
        hex: '#baa7a3',
        count: 1,
        relativeLuminance: 69.9799208955277,
      },
      {
        hex: '#afad86',
        count: 1,
        relativeLuminance: 69.98094183458005,
      },
      {
        hex: '#b4a9a3',
        count: 1,
        relativeLuminance: 69.98181839716227,
      },
      {
        hex: '#c8a48c',
        count: 1,
        relativeLuminance: 69.98192581128662,
      },
      {
        hex: '#bfa5a6',
        count: 1,
        relativeLuminance: 69.99323966965007,
      },
      {
        hex: '#afab9f',
        count: 2,
        relativeLuminance: 69.99547457037693,
      },
      {
        hex: '#bea795',
        count: 2,
        relativeLuminance: 70.00358281042627,
      },
      {
        hex: '#c2a690',
        count: 1,
        relativeLuminance: 70.00420040892747,
      },
      {
        hex: '#bda799',
        count: 1,
        relativeLuminance: 70.00474264749624,
      },
      {
        hex: '#aaad9a',
        count: 1,
        relativeLuminance: 70.01186344939815,
      },
      {
        hex: '#b8a996',
        count: 1,
        relativeLuminance: 70.01327547283216,
      },
      {
        hex: '#c9a489',
        count: 1,
        relativeLuminance: 70.01769127589353,
      },
      {
        hex: '#a1afa0',
        count: 1,
        relativeLuminance: 70.01804840235883,
      },
      {
        hex: '#b1aaa4',
        count: 1,
        relativeLuminance: 70.01932933901878,
      },
      {
        hex: '#baa89a',
        count: 1,
        relativeLuminance: 70.01972484507915,
      },
      {
        hex: '#c0a699',
        count: 1,
        relativeLuminance: 70.02067466990195,
      },
      {
        hex: '#b0ac91',
        count: 1,
        relativeLuminance: 70.02115019189225,
      },
      {
        hex: '#b9a89e',
        count: 3,
        relativeLuminance: 70.0272569251976,
      },
      {
        hex: '#9eafa9',
        count: 1,
        relativeLuminance: 70.03108430275016,
      },
      {
        hex: '#c9a48a',
        count: 1,
        relativeLuminance: 70.03796340463435,
      },
      {
        hex: '#bba897',
        count: 1,
        relativeLuminance: 70.03868068275276,
      },
      {
        hex: '#abad98',
        count: 1,
        relativeLuminance: 70.04405083962685,
      },
      {
        hex: '#acaca0',
        count: 2,
        relativeLuminance: 70.04524789057405,
      },
      {
        hex: '#adad91',
        count: 1,
        relativeLuminance: 70.04661241489546,
      },
      {
        hex: '#baa89c',
        count: 1,
        relativeLuminance: 70.06695583172574,
      },
      {
        hex: '#b3ab94',
        count: 1,
        relativeLuminance: 70.06904683459432,
      },
      {
        hex: '#afaba2',
        count: 1,
        relativeLuminance: 70.0695882439133,
      },
      {
        hex: '#92b1b4',
        count: 1,
        relativeLuminance: 70.07109546460536,
      },
      {
        hex: '#bda79c',
        count: 1,
        relativeLuminance: 70.07530162862078,
      },
      {
        hex: '#b9a8a0',
        count: 2,
        relativeLuminance: 70.07605066574276,
      },
      {
        hex: '#b6a9a0',
        count: 1,
        relativeLuminance: 70.0770803345788,
      },
      {
        hex: '#cda291',
        count: 1,
        relativeLuminance: 70.0806247901613,
      },
      {
        hex: '#aead8f',
        count: 1,
        relativeLuminance: 70.08403052286374,
      },
      {
        hex: '#bba899',
        count: 2,
        relativeLuminance: 70.08472258927182,
      },
      {
        hex: '#c0a791',
        count: 1,
        relativeLuminance: 70.09754652031704,
      },
      {
        hex: '#caa394',
        count: 1,
        relativeLuminance: 70.09812622946318,
      },
      {
        hex: '#b2ab99',
        count: 1,
        relativeLuminance: 70.09928051714235,
      },
      {
        hex: '#a5af97',
        count: 1,
        relativeLuminance: 70.10134225742739,
      },
      {
        hex: '#bba89a',
        count: 3,
        relativeLuminance: 70.10801642318319,
      },
      {
        hex: '#baa89e',
        count: 1,
        relativeLuminance: 70.11491799427905,
      },
      {
        hex: '#afac99',
        count: 1,
        relativeLuminance: 70.11907580824868,
      },
      {
        hex: '#b4aa9e',
        count: 1,
        relativeLuminance: 70.12079869330012,
      },
      {
        hex: '#97b0b4',
        count: 1,
        relativeLuminance: 70.12353004534447,
      },
      {
        hex: '#c1a78e',
        count: 1,
        relativeLuminance: 70.12536684671021,
      },
      {
        hex: '#bda893',
        count: 1,
        relativeLuminance: 70.12731756117,
      },
      {
        hex: '#c0a886',
        count: 1,
        relativeLuminance: 70.12892872355877,
      },
      {
        hex: '#c7a58c',
        count: 1,
        relativeLuminance: 70.13795385869199,
      },
      {
        hex: '#c0a793',
        count: 1,
        relativeLuminance: 70.14121736044744,
      },
      {
        hex: '#c4a68e',
        count: 1,
        relativeLuminance: 70.14872497340795,
      },
      {
        hex: '#bea890',
        count: 1,
        relativeLuminance: 70.15211584606146,
      },
      {
        hex: '#c8a494',
        count: 1,
        relativeLuminance: 70.15377553295386,
      },
      {
        hex: '#abae91',
        count: 1,
        relativeLuminance: 70.15795819035738,
      },
      {
        hex: '#9ab0ae',
        count: 1,
        relativeLuminance: 70.15958475595177,
      },
      {
        hex: '#b3aaa3',
        count: 1,
        relativeLuminance: 70.16015599612274,
      },
      {
        hex: '#c5a68a',
        count: 1,
        relativeLuminance: 70.16031778927646,
      },
      {
        hex: '#b7a9a0',
        count: 2,
        relativeLuminance: 70.16280436293863,
      },
      {
        hex: '#c1a790',
        count: 1,
        relativeLuminance: 70.16786893863348,
      },
      {
        hex: '#b9a999',
        count: 1,
        relativeLuminance: 70.1690066087785,
      },
      {
        hex: '#bda895',
        count: 2,
        relativeLuminance: 70.17172333675141,
      },
      {
        hex: '#c6a778',
        count: 1,
        relativeLuminance: 70.17540808867534,
      },
      {
        hex: '#b2aaa7',
        count: 1,
        relativeLuminance: 70.17903929872689,
      },
      {
        hex: '#aeac9f',
        count: 1,
        relativeLuminance: 70.18077172736365,
      },
      {
        hex: '#a2aeae',
        count: 1,
        relativeLuminance: 70.18256283078259,
      },
      {
        hex: '#c3a694',
        count: 1,
        relativeLuminance: 70.18478915198686,
      },
      {
        hex: '#95b0bb',
        count: 1,
        relativeLuminance: 70.19559515235389,
      },
      {
        hex: '#c9a492',
        count: 4,
        relativeLuminance: 70.20656291362782,
      },
      {
        hex: '#b2ac92',
        count: 1,
        relativeLuminance: 70.20768241779767,
      },
      {
        hex: '#abad9f',
        count: 1,
        relativeLuminance: 70.20972841392704,
      },
      {
        hex: '#97b0b7',
        count: 1,
        relativeLuminance: 70.2101514639515,
      },
      {
        hex: '#baa997',
        count: 1,
        relativeLuminance: 70.21052125664637,
      },
      {
        hex: '#b7aa97',
        count: 1,
        relativeLuminance: 70.21170647020548,
      },
      {
        hex: '#a4af9f',
        count: 1,
        relativeLuminance: 70.21490176803728,
      },
      {
        hex: '#bea893',
        count: 5,
        relativeLuminance: 70.21723725323874,
      },
      {
        hex: '#c0a97d',
        count: 1,
        relativeLuminance: 70.22008795801048,
      },
      {
        hex: '#b0aba5',
        count: 1,
        relativeLuminance: 70.22671454500713,
      },
      {
        hex: '#c2a69a',
        count: 1,
        relativeLuminance: 70.2283418497302,
      },
      {
        hex: '#bfa79b',
        count: 2,
        relativeLuminance: 70.23218522185901,
      },
      {
        hex: '#abada0',
        count: 1,
        relativeLuminance: 70.23412733182471,
      },
      {
        hex: '#b9a99c',
        count: 2,
        relativeLuminance: 70.23929716197213,
      },
      {
        hex: '#caa48f',
        count: 1,
        relativeLuminance: 70.23938372821048,
      },
      {
        hex: '#a2afa6',
        count: 1,
        relativeLuminance: 70.24208027006574,
      },
      {
        hex: '#c8a498',
        count: 1,
        relativeLuminance: 70.24402308252874,
      },
      {
        hex: '#bba995',
        count: 3,
        relativeLuminance: 70.25338026196422,
      },
      {
        hex: '#aaada4',
        count: 2,
        relativeLuminance: 70.25538608120601,
      },
      {
        hex: '#baa999',
        count: 3,
        relativeLuminance: 70.25637994483357,
      },
      {
        hex: '#9cb1a2',
        count: 2,
        relativeLuminance: 70.26049909352287,
      },
      {
        hex: '#9bb1a5',
        count: 1,
        relativeLuminance: 70.26652635181796,
      },
      {
        hex: '#bca89d',
        count: 3,
        relativeLuminance: 70.26757159181476,
      },
      {
        hex: '#b8a8ab',
        count: 1,
        relativeLuminance: 70.27102097530356,
      },
      {
        hex: '#a5aea9',
        count: 1,
        relativeLuminance: 70.27110781882034,
      },
      {
        hex: '#c3a698',
        count: 1,
        relativeLuminance: 70.27497186384335,
      },
      {
        hex: '#b1ac99',
        count: 2,
        relativeLuminance: 70.28233185694798,
      },
      {
        hex: '#aead98',
        count: 1,
        relativeLuminance: 70.28285075972202,
      },
      {
        hex: '#b9ab86',
        count: 1,
        relativeLuminance: 70.28881091686962,
      },
      {
        hex: '#b6aa9e',
        count: 1,
        relativeLuminance: 70.29008150155904,
      },
      {
        hex: '#a6af9c',
        count: 1,
        relativeLuminance: 70.29293163124146,
      },
      {
        hex: '#a2afa8',
        count: 1,
        relativeLuminance: 70.29380106037023,
      },
      {
        hex: '#c8a58f',
        count: 2,
        relativeLuminance: 70.29681771450207,
      },
      {
        hex: '#b8a9a2',
        count: 2,
        relativeLuminance: 70.29829796662054,
      },
      {
        hex: '#c1a796',
        count: 1,
        relativeLuminance: 70.29968243464177,
      },
      {
        hex: '#c1a88a',
        count: 1,
        relativeLuminance: 70.30024147048587,
      },
      {
        hex: '#bba8a2',
        count: 3,
        relativeLuminance: 70.30093723900531,
      },
      {
        hex: '#aaada6',
        count: 1,
        relativeLuminance: 70.30629343146629,
      },
      {
        hex: '#c5a691',
        count: 1,
        relativeLuminance: 70.30680002304968,
      },
      {
        hex: '#9bb0b1',
        count: 1,
        relativeLuminance: 70.31131784963932,
      },
      {
        hex: '#b7a9a6',
        count: 1,
        relativeLuminance: 70.31329593696827,
      },
      {
        hex: '#cea297',
        count: 1,
        relativeLuminance: 70.3136105724081,
      },
      {
        hex: '#9db0ac',
        count: 1,
        relativeLuminance: 70.31395009355943,
      },
      {
        hex: '#99b0b6',
        count: 1,
        relativeLuminance: 70.31607826901335,
      },
      {
        hex: '#c6a68d',
        count: 1,
        relativeLuminance: 70.31671993436842,
      },
      {
        hex: '#afad96',
        count: 1,
        relativeLuminance: 70.31798963749834,
      },
      {
        hex: '#a8aea2',
        count: 1,
        relativeLuminance: 70.31970811769091,
      },
      {
        hex: '#b9ab88',
        count: 1,
        relativeLuminance: 70.32816469176612,
      },
      {
        hex: '#c0a890',
        count: 2,
        relativeLuminance: 70.33351671672,
      },
      {
        hex: '#baaa91',
        count: 1,
        relativeLuminance: 70.33877993776022,
      },
      {
        hex: '#b2aba3',
        count: 1,
        relativeLuminance: 70.3403525228231,
      },
      {
        hex: '#a6af9e',
        count: 1,
        relativeLuminance: 70.34064313329343,
      },
      {
        hex: '#b7ab91',
        count: 3,
        relativeLuminance: 70.34195246148343,
      },
      {
        hex: '#a0b0a5',
        count: 2,
        relativeLuminance: 70.34434640708807,
      },
      {
        hex: '#c1a798',
        count: 2,
        relativeLuminance: 70.34506125464202,
      },
      {
        hex: '#b8a9a4',
        count: 1,
        relativeLuminance: 70.34836157735673,
      },
      {
        hex: '#c6a68f',
        count: 1,
        relativeLuminance: 70.35865733420744,
      },
      {
        hex: '#afaca3',
        count: 1,
        relativeLuminance: 70.36003746467149,
      },
      {
        hex: '#c8a592',
        count: 1,
        relativeLuminance: 70.36115270997954,
      },
      {
        hex: '#bca8a1',
        count: 1,
        relativeLuminance: 70.36456300534505,
      },
      {
        hex: '#9bb0b3',
        count: 1,
        relativeLuminance: 70.36739851365351,
      },
      {
        hex: '#bea98e',
        count: 1,
        relativeLuminance: 70.36891484275219,
      },
      {
        hex: '#a8aea4',
        count: 1,
        relativeLuminance: 70.36974691821278,
      },
      {
        hex: '#a7aea7',
        count: 1,
        relativeLuminance: 70.36998639202183,
      },
      {
        hex: '#c5a694',
        count: 1,
        relativeLuminance: 70.37225821236629,
      },
      {
        hex: '#bfa896',
        count: 2,
        relativeLuminance: 70.37418767120278,
      },
      {
        hex: '#c3a791',
        count: 2,
        relativeLuminance: 70.37434888050156,
      },
      {
        hex: '#bea89a',
        count: 1,
        relativeLuminance: 70.37549126921208,
      },
      {
        hex: '#baaa93',
        count: 1,
        relativeLuminance: 70.38220726725491,
      },
      {
        hex: '#b9aa97',
        count: 1,
        relativeLuminance: 70.38427532776088,
      },
      {
        hex: '#bba99b',
        count: 2,
        relativeLuminance: 70.39067782031469,
      },
      {
        hex: '#c9a58f',
        count: 1,
        relativeLuminance: 70.39322714453905,
      },
      {
        hex: '#c3a792',
        count: 1,
        relativeLuminance: 70.39595522332142,
      },
      {
        hex: '#baa99f',
        count: 1,
        relativeLuminance: 70.39831304898777,
      },
      {
        hex: '#bea89b',
        count: 1,
        relativeLuminance: 70.39882213633015,
      },
      {
        hex: '#b5aaa6',
        count: 1,
        relativeLuminance: 70.40398705722535,
      },
      {
        hex: '#cea390',
        count: 1,
        relativeLuminance: 70.40637890778589,
      },
      {
        hex: '#caa58b',
        count: 1,
        relativeLuminance: 70.40713854460165,
      },
      {
        hex: '#bca998',
        count: 1,
        relativeLuminance: 70.40950430522996,
      },
      {
        hex: '#a3b09f',
        count: 1,
        relativeLuminance: 70.41375675096582,
      },
      {
        hex: '#acae99',
        count: 2,
        relativeLuminance: 70.41533554479156,
      },
      {
        hex: '#cda395',
        count: 3,
        relativeLuminance: 70.41587914540278,
      },
      {
        hex: '#bfa898',
        count: 4,
        relativeLuminance: 70.41948830016774,
      },
      {
        hex: '#9bb0b5',
        count: 3,
        relativeLuminance: 70.42422427542891,
      },
      {
        hex: '#aaaea0',
        count: 1,
        relativeLuminance: 70.42477483701994,
      },
      {
        hex: '#bfa7a3',
        count: 1,
        relativeLuminance: 70.4261164494901,
      },
      {
        hex: '#a1afb0',
        count: 1,
        relativeLuminance: 70.43548976119497,
      },
      {
        hex: '#c4a69b',
        count: 1,
        relativeLuminance: 70.43768756955741,
      },
      {
        hex: '#bcab80',
        count: 1,
        relativeLuminance: 70.43834373723189,
      },
      {
        hex: '#b0aca3',
        count: 1,
        relativeLuminance: 70.44098909347466,
      },
      {
        hex: '#a8adb1',
        count: 1,
        relativeLuminance: 70.4457225890411,
      },
      {
        hex: '#bea89d',
        count: 1,
        relativeLuminance: 70.44602791904009,
      },
      {
        hex: '#c8a68a',
        count: 1,
        relativeLuminance: 70.44605587124396,
      },
      {
        hex: '#baa9a1',
        count: 1,
        relativeLuminance: 70.44708058455754,
      },
      {
        hex: '#b7aaa1',
        count: 2,
        relativeLuminance: 70.4482593205359,
      },
      {
        hex: '#cda397',
        count: 1,
        relativeLuminance: 70.4607528349545,
      },
      {
        hex: '#adada3',
        count: 1,
        relativeLuminance: 70.46620468821398,
      },
      {
        hex: '#c1a892',
        count: 1,
        relativeLuminance: 70.46782072066202,
      },
      {
        hex: '#c7a59b',
        count: 1,
        relativeLuminance: 70.46844421882878,
      },
      {
        hex: '#b3ac9a',
        count: 1,
        relativeLuminance: 70.47046825753168,
      },
      {
        hex: '#bca99b',
        count: 1,
        relativeLuminance: 70.47882508036987,
      },
      {
        hex: '#b4aba2',
        count: 2,
        relativeLuminance: 70.48153494927634,
      },
      {
        hex: '#b8aa9f',
        count: 1,
        relativeLuminance: 70.48518564855843,
      },
      {
        hex: '#bba99f',
        count: 3,
        relativeLuminance: 70.48583372793969,
      },
      {
        hex: '#b0ad9a',
        count: 1,
        relativeLuminance: 70.49029071215813,
      },
      {
        hex: '#c0a7a2',
        count: 1,
        relativeLuminance: 70.49181744021776,
      },
      {
        hex: '#98b1b5',
        count: 2,
        relativeLuminance: 70.49414137193531,
      },
      {
        hex: '#c2a88f',
        count: 1,
        relativeLuminance: 70.49545626678254,
      },
      {
        hex: '#b7ac8c',
        count: 1,
        relativeLuminance: 70.50102600198667,
      },
      {
        hex: '#9bb1ae',
        count: 1,
        relativeLuminance: 70.50315301886233,
      },
      {
        hex: '#c8a68d',
        count: 1,
        relativeLuminance: 70.50735811682485,
      },
      {
        hex: '#c1a894',
        count: 2,
        relativeLuminance: 70.51149770298169,
      },
      {
        hex: '#cda48e',
        count: 1,
        relativeLuminance: 70.51303441315102,
      },
      {
        hex: '#b3ac9c',
        count: 1,
        relativeLuminance: 70.5172085258762,
      },
      {
        hex: '#a4afab',
        count: 1,
        relativeLuminance: 70.51976515764281,
      },
      {
        hex: '#b7aaa4',
        count: 1,
        relativeLuminance: 70.52277795546411,
      },
      {
        hex: '#aaaf99',
        count: 1,
        relativeLuminance: 70.52891667922513,
      },
      {
        hex: '#acaf92',
        count: 1,
        relativeLuminance: 70.52893299143378,
      },
      {
        hex: '#89b4ba',
        count: 1,
        relativeLuminance: 70.52902257821528,
      },
      {
        hex: '#b2aca0',
        count: 1,
        relativeLuminance: 70.53043908435237,
      },
      {
        hex: '#b4aba4',
        count: 2,
        relativeLuminance: 70.53138681861279,
      },
      {
        hex: '#b8aaa1',
        count: 2,
        relativeLuminance: 70.53385534398893,
      },
      {
        hex: '#baaa9a',
        count: 3,
        relativeLuminance: 70.53985905408031,
      },
      {
        hex: '#b5aba1',
        count: 1,
        relativeLuminance: 70.54064962784452,
      },
      {
        hex: '#bea996',
        count: 1,
        relativeLuminance: 70.5422516782532,
      },
      {
        hex: '#bfa992',
        count: 1,
        relativeLuminance: 70.544009758445,
      },
      {
        hex: '#c3a88d',
        count: 1,
        relativeLuminance: 70.54597583049333,
      },
      {
        hex: '#9fb1a5',
        count: 1,
        relativeLuminance: 70.54692658250798,
      },
      {
        hex: '#afada0',
        count: 1,
        relativeLuminance: 70.55202742546541,
      },
      {
        hex: '#c4a795',
        count: 1,
        relativeLuminance: 70.55477501596039,
      },
      {
        hex: '#cda490',
        count: 1,
        relativeLuminance: 70.55515673014948,
      },
      {
        hex: '#b5aba2',
        count: 1,
        relativeLuminance: 70.56525386756438,
      },
      {
        hex: '#b7ab9b',
        count: 1,
        relativeLuminance: 70.56625751823985,
      },
      {
        hex: '#cba58e',
        count: 1,
        relativeLuminance: 70.56633644543744,
      },
      {
        hex: '#aaaf9b',
        count: 1,
        relativeLuminance: 70.57520792430682,
      },
      {
        hex: '#caa593',
        count: 1,
        relativeLuminance: 70.57580344899115,
      },
      {
        hex: '#b3aba9',
        count: 1,
        relativeLuminance: 70.5762829570428,
      },
      {
        hex: '#96b2b3',
        count: 1,
        relativeLuminance: 70.58002748140113,
      },
      {
        hex: '#98b1b8',
        count: 1,
        relativeLuminance: 70.5806381121088,
      },
      {
        hex: '#bbaa98',
        count: 1,
        relativeLuminance: 70.58124331853854,
      },
      {
        hex: '#b2ad97',
        count: 1,
        relativeLuminance: 70.58487905697737,
      },
      {
        hex: '#bea998',
        count: 1,
        relativeLuminance: 70.5873766690308,
      },
      {
        hex: '#a3b0a6',
        count: 1,
        relativeLuminance: 70.58757782834384,
      },
      {
        hex: '#bfa994',
        count: 1,
        relativeLuminance: 70.58760993060824,
      },
      {
        hex: '#8cb4b6',
        count: 1,
        relativeLuminance: 70.59104221717091,
      },
      {
        hex: '#c3a5af',
        count: 1,
        relativeLuminance: 70.59947254677239,
      },
      {
        hex: '#c4a797',
        count: 1,
        relativeLuminance: 70.5995049135348,
      },
      {
        hex: '#baaa9d',
        count: 5,
        relativeLuminance: 70.61012833955807,
      },
      {
        hex: '#c9a599',
        count: 1,
        relativeLuminance: 70.61346208706819,
      },
      {
        hex: '#c1a98d',
        count: 1,
        relativeLuminance: 70.61956216661734,
      },
      {
        hex: '#caa595',
        count: 2,
        relativeLuminance: 70.61975069861955,
      },
      {
        hex: '#baac85',
        count: 1,
        relativeLuminance: 70.62034456838637,
      },
      {
        hex: '#b3ad95',
        count: 1,
        relativeLuminance: 70.62253997691096,
      },
      {
        hex: '#bcaa96',
        count: 1,
        relativeLuminance: 70.62396360522119,
      },
      {
        hex: '#bbaa9a',
        count: 1,
        relativeLuminance: 70.62709409898929,
      },
      {
        hex: '#a5b0a2',
        count: 1,
        relativeLuminance: 70.63492498442076,
      },
      {
        hex: '#96b2b5',
        count: 1,
        relativeLuminance: 70.63657474617085,
      },
      {
        hex: '#99b2ae',
        count: 1,
        relativeLuminance: 70.6421689870482,
      },
      {
        hex: '#a8b099',
        count: 1,
        relativeLuminance: 70.64654925168568,
      },
      {
        hex: '#c8a788',
        count: 1,
        relativeLuminance: 70.65968717151114,
      },
      {
        hex: '#c1a98f',
        count: 1,
        relativeLuminance: 70.66120704452773,
      },
      {
        hex: '#a7b09d',
        count: 1,
        relativeLuminance: 70.6639216523265,
      },
      {
        hex: '#c2a897',
        count: 2,
        relativeLuminance: 70.6697985696716,
      },
      {
        hex: '#bca9a3',
        count: 1,
        relativeLuminance: 70.67165538051327,
      },
      {
        hex: '#aeada8',
        count: 1,
        relativeLuminance: 70.67256983114265,
      },
      {
        hex: '#c3a893',
        count: 1,
        relativeLuminance: 70.67325241379558,
      },
      {
        hex: '#c6a792',
        count: 1,
        relativeLuminance: 70.67641943005584,
      },
      {
        hex: '#b8aaa7',
        count: 1,
        relativeLuminance: 70.68424166166588,
      },
      {
        hex: '#9ab1b7',
        count: 2,
        relativeLuminance: 70.68658523546193,
      },
      {
        hex: '#a6afac',
        count: 1,
        relativeLuminance: 70.69509376014442,
      },
      {
        hex: '#b0acad',
        count: 1,
        relativeLuminance: 70.69979475066874,
      },
      {
        hex: '#c4a890',
        count: 1,
        relativeLuminance: 70.70142711621098,
      },
      {
        hex: '#c1a991',
        count: 1,
        relativeLuminance: 70.70356011052232,
      },
      {
        hex: '#c9a692',
        count: 1,
        relativeLuminance: 70.70877973039126,
      },
      {
        hex: '#a7b09f',
        count: 1,
        relativeLuminance: 70.71161334388735,
      },
      {
        hex: '#a8afa7',
        count: 1,
        relativeLuminance: 70.71537385429437,
      },
      {
        hex: '#c3a895',
        count: 1,
        relativeLuminance: 70.7171009718755,
      },
      {
        hex: '#b4aca1',
        count: 1,
        relativeLuminance: 70.72005061814774,
      },
      {
        hex: '#cda58c',
        count: 1,
        relativeLuminance: 70.72094829410798,
      },
      {
        hex: '#afae9c',
        count: 1,
        relativeLuminance: 70.72337740137051,
      },
      {
        hex: '#cca49c',
        count: 1,
        relativeLuminance: 70.72491622441893,
      },
      {
        hex: '#b7ad8a',
        count: 1,
        relativeLuminance: 70.72547640108405,
      },
      {
        hex: '#c7a790',
        count: 1,
        relativeLuminance: 70.72808121331501,
      },
      {
        hex: '#bcab8f',
        count: 1,
        relativeLuminance: 70.73305628517645,
      },
      {
        hex: '#b1ada1',
        count: 1,
        relativeLuminance: 70.7379698543084,
      },
      {
        hex: '#cea494',
        count: 1,
        relativeLuminance: 70.74031276167798,
      },
      {
        hex: '#a1b1a7',
        count: 1,
        relativeLuminance: 70.74067229322903,
      },
      {
        hex: '#a8afa8',
        count: 1,
        relativeLuminance: 70.74105943042925,
      },
      {
        hex: '#c6a795',
        count: 1,
        relativeLuminance: 70.74188746462185,
      },
      {
        hex: '#c0a997',
        count: 1,
        relativeLuminance: 70.74440542567373,
      },
      {
        hex: '#bfa99b',
        count: 1,
        relativeLuminance: 70.74585094853578,
      },
      {
        hex: '#a5afb1',
        count: 1,
        relativeLuminance: 70.75604435500645,
      },
      {
        hex: '#a4b19f',
        count: 1,
        relativeLuminance: 70.76046527171063,
      },
      {
        hex: '#bcaa9c',
        count: 2,
        relativeLuminance: 70.76123911188922,
      },
      {
        hex: '#c2a89b',
        count: 1,
        relativeLuminance: 70.76126566019126,
      },
      {
        hex: '#b3aca6',
        count: 1,
        relativeLuminance: 70.76179915555005,
      },
      {
        hex: '#bbaaa0',
        count: 1,
        relativeLuminance: 70.76897612151214,
      },
      {
        hex: '#bfa99c',
        count: 1,
        relativeLuminance: 70.76917544250571,
      },
      {
        hex: '#abafa0',
        count: 1,
        relativeLuminance: 70.77148114247633,
      },
      {
        hex: '#cfa491',
        count: 2,
        relativeLuminance: 70.77473865211323,
      },
      {
        hex: '#bdaa99',
        count: 1,
        relativeLuminance: 70.77993775997057,
      },
      {
        hex: '#b3ae90',
        count: 1,
        relativeLuminance: 70.78080182303566,
      },
      {
        hex: '#c4a79f',
        count: 1,
        relativeLuminance: 70.78561888860227,
      },
      {
        hex: '#c0a999',
        count: 1,
        relativeLuminance: 70.78970180161834,
      },
      {
        hex: '#a1b0b3',
        count: 1,
        relativeLuminance: 70.78977022915485,
      },
      {
        hex: '#c3a7a3',
        count: 1,
        relativeLuminance: 70.79078589589557,
      },
      {
        hex: '#cca594',
        count: 1,
        relativeLuminance: 70.79208145798138,
      },
      {
        hex: '#9cb1b6',
        count: 1,
        relativeLuminance: 70.79473725304796,
      },
      {
        hex: '#b8ac96',
        count: 1,
        relativeLuminance: 70.80012648516708,
      },
      {
        hex: '#acaf9e',
        count: 2,
        relativeLuminance: 70.80138277238667,
      },
      {
        hex: '#acaea9',
        count: 1,
        relativeLuminance: 70.80698286674011,
      },
      {
        hex: '#b9ab9e',
        count: 3,
        relativeLuminance: 70.80794767608991,
      },
      {
        hex: '#adaea6',
        count: 1,
        relativeLuminance: 70.80848922043386,
      },
      {
        hex: '#b5ad96',
        count: 1,
        relativeLuminance: 70.81083081190658,
      },
      {
        hex: '#b1ada4',
        count: 1,
        relativeLuminance: 70.81199216277132,
      },
      {
        hex: '#bfa99e',
        count: 1,
        relativeLuminance: 70.81636506735212,
      },
      {
        hex: '#a4b0ac',
        count: 2,
        relativeLuminance: 70.81692883286419,
      },
      {
        hex: '#bbaaa2',
        count: 2,
        relativeLuminance: 70.81771745131981,
      },
      {
        hex: '#b4ad9a',
        count: 2,
        relativeLuminance: 70.81816707466011,
      },
      {
        hex: '#baac8f',
        count: 1,
        relativeLuminance: 70.8207822194106,
      },
      {
        hex: '#b4ae8e',
        count: 1,
        relativeLuminance: 70.82152421899664,
      },
      {
        hex: '#bdaa9b',
        count: 1,
        relativeLuminance: 70.82596179963899,
      },
      {
        hex: '#cea498',
        count: 1,
        relativeLuminance: 70.82934580809734,
      },
      {
        hex: '#cba59a',
        count: 1,
        relativeLuminance: 70.82944386711725,
      },
      {
        hex: '#c0a99b',
        count: 2,
        relativeLuminance: 70.83571549447761,
      },
      {
        hex: '#aeaea4',
        count: 1,
        relativeLuminance: 70.8371996358428,
      },
      {
        hex: '#c2a993',
        count: 2,
        relativeLuminance: 70.83771136552356,
      },
      {
        hex: '#b8aba3',
        count: 1,
        relativeLuminance: 70.84368524854419,
      },
      {
        hex: '#bdaa9c',
        count: 2,
        relativeLuminance: 70.84924328961034,
      },
      {
        hex: '#bcaaa0',
        count: 2,
        relativeLuminance: 70.85635760180465,
      },
      {
        hex: '#c1a8a3',
        count: 1,
        relativeLuminance: 70.86199982000916,
      },
      {
        hex: '#aaaeb1',
        count: 1,
        relativeLuminance: 70.8657320516702,
      },
      {
        hex: '#a0b2a4',
        count: 1,
        relativeLuminance: 70.8672713392271,
      },
      {
        hex: '#beab8d',
        count: 1,
        relativeLuminance: 70.86820109001707,
      },
      {
        hex: '#cea58f',
        count: 1,
        relativeLuminance: 70.88143169446771,
      },
      {
        hex: '#c6a890',
        count: 2,
        relativeLuminance: 70.88790914965263,
      },
      {
        hex: '#a2b1aa',
        count: 1,
        relativeLuminance: 70.89018062046192,
      },
      {
        hex: '#caa696',
        count: 1,
        relativeLuminance: 70.89228833754429,
      },
      {
        hex: '#b8aba5',
        count: 1,
        relativeLuminance: 70.89351375056714,
      },
      {
        hex: '#cea683',
        count: 1,
        relativeLuminance: 70.89362530463515,
      },
      {
        hex: '#b9aba2',
        count: 1,
        relativeLuminance: 70.90451239169369,
      },
      {
        hex: '#c3a992',
        count: 1,
        relativeLuminance: 70.9076925780265,
      },
      {
        hex: '#bbab9b',
        count: 1,
        relativeLuminance: 70.91032004909044,
      },
      {
        hex: '#caa78b',
        count: 1,
        relativeLuminance: 70.91093762082176,
      },
      {
        hex: '#bfaa97',
        count: 1,
        relativeLuminance: 70.91239269627125,
      },
      {
        hex: '#b8ad8f',
        count: 1,
        relativeLuminance: 70.91272003070247,
      },
      {
        hex: '#c0aa93',
        count: 1,
        relativeLuminance: 70.91399077561161,
      },
      {
        hex: '#c4a98e',
        count: 1,
        relativeLuminance: 70.9154978240226,
      },
      {
        hex: '#cea591',
        count: 2,
        relativeLuminance: 70.92357047792916,
      },
      {
        hex: '#b7ad94',
        count: 1,
        relativeLuminance: 70.93467350858465,
      },
      {
        hex: '#cca68f',
        count: 1,
        relativeLuminance: 70.93497474481153,
      },
      {
        hex: '#cba694',
        count: 2,
        relativeLuminance: 70.94467298334499,
      },
      {
        hex: '#a5b298',
        count: 1,
        relativeLuminance: 70.94471152971632,
      },
      {
        hex: '#c3a89f',
        count: 2,
        relativeLuminance: 70.94708484489422,
      },
      {
        hex: '#c7a79a',
        count: 1,
        relativeLuminance: 70.94851086684656,
      },
      {
        hex: '#b9ac99',
        count: 1,
        relativeLuminance: 70.95305442886841,
      },
      {
        hex: '#b1ae9f',
        count: 1,
        relativeLuminance: 70.95523951135726,
      },
      {
        hex: '#c0aa95',
        count: 1,
        relativeLuminance: 70.95759694528498,
      },
      {
        hex: '#b2ada7',
        count: 1,
        relativeLuminance: 70.96880676230106,
      },
      {
        hex: '#d1a491',
        count: 1,
        relativeLuminance: 70.97460137478302,
      },
      {
        hex: '#c0a9a1',
        count: 1,
        relativeLuminance: 70.97807354347077,
      },
      {
        hex: '#bbab9e',
        count: 4,
        relativeLuminance: 70.9805678617995,
      },
      {
        hex: '#caa69a',
        count: 1,
        relativeLuminance: 70.98252731412703,
      },
      {
        hex: '#b4af89',
        count: 1,
        relativeLuminance: 70.98754616651425,
      },
      {
        hex: '#cba696',
        count: 1,
        relativeLuminance: 70.98862519635748,
      },
      {
        hex: '#c4a89d',
        count: 2,
        relativeLuminance: 70.99164534547324,
      },
      {
        hex: '#afb090',
        count: 1,
        relativeLuminance: 70.9936373038391,
      },
      {
        hex: '#bcab9b',
        count: 2,
        relativeLuminance: 70.99741796680996,
      },
      {
        hex: '#a9afaf',
        count: 1,
        relativeLuminance: 71.00179128399685,
      },
      {
        hex: '#a6b1a3',
        count: 1,
        relativeLuminance: 71.00557851459118,
      },
      {
        hex: '#beaa9f',
        count: 1,
        relativeLuminance: 71.00845680934427,
      },
      {
        hex: '#a7b0ab',
        count: 1,
        relativeLuminance: 71.01301215489265,
      },
      {
        hex: '#bfab90',
        count: 1,
        relativeLuminance: 71.01945094674275,
      },
      {
        hex: '#cca693',
        count: 2,
        relativeLuminance: 71.01985443038488,
      },
      {
        hex: '#c0a9a3',
        count: 1,
        relativeLuminance: 71.02696922736092,
      },
      {
        hex: '#b4ae98',
        count: 1,
        relativeLuminance: 71.03772273466365,
      },
      {
        hex: '#c3a998',
        count: 3,
        relativeLuminance: 71.03953178651241,
      },
      {
        hex: '#c4a994',
        count: 1,
        relativeLuminance: 71.04281459046729,
      },
      {
        hex: '#c7a987',
        count: 1,
        relativeLuminance: 71.05483269839121,
      },
      {
        hex: '#9fb2ae',
        count: 1,
        relativeLuminance: 71.05510221124516,
      },
      {
        hex: '#beaaa1',
        count: 2,
        relativeLuminance: 71.05654334835577,
      },
      {
        hex: '#bdac8e',
        count: 1,
        relativeLuminance: 71.06138247881029,
      },
      {
        hex: '#c0ab8e',
        count: 1,
        relativeLuminance: 71.06716391777331,
      },
      {
        hex: '#c2aa92',
        count: 1,
        relativeLuminance: 71.07322121086364,
      },
      {
        hex: '#b4ada5',
        count: 1,
        relativeLuminance: 71.08210283890045,
      },
      {
        hex: '#b9ad93',
        count: 1,
        relativeLuminance: 71.08276214377,
      },
      {
        hex: '#b5ada2',
        count: 1,
        relativeLuminance: 71.0906654146659,
      },
      {
        hex: '#acb09f',
        count: 1,
        relativeLuminance: 71.09409178871617,
      },
      {
        hex: '#c8a891',
        count: 2,
        relativeLuminance: 71.09713057461634,
      },
      {
        hex: '#caa794',
        count: 1,
        relativeLuminance: 71.09929123288138,
      },
      {
        hex: '#a6b29c',
        count: 1,
        relativeLuminance: 71.11024448554055,
      },
      {
        hex: '#c7a896',
        count: 1,
        relativeLuminance: 71.1111395230054,
      },
      {
        hex: '#c5a993',
        count: 1,
        relativeLuminance: 71.11350427163437,
      },
      {
        hex: '#a7b0af',
        count: 1,
        relativeLuminance: 71.11930991814455,
      },
      {
        hex: '#afaeac',
        count: 2,
        relativeLuminance: 71.12158455545739,
      },
      {
        hex: '#cca78c',
        count: 1,
        relativeLuminance: 71.12407328714352,
      },
      {
        hex: '#abafae',
        count: 1,
        relativeLuminance: 71.12791967895093,
      },
      {
        hex: '#cba791',
        count: 1,
        relativeLuminance: 71.13094436002262,
      },
      {
        hex: '#c4a998',
        count: 1,
        relativeLuminance: 71.13123081678813,
      },
      {
        hex: '#bdab9d',
        count: 1,
        relativeLuminance: 71.13141114881685,
      },
      {
        hex: '#b4ada7',
        count: 2,
        relativeLuminance: 71.13243982151653,
      },
      {
        hex: '#b2aea3',
        count: 1,
        relativeLuminance: 71.13310167129688,
      },
      {
        hex: '#c5a994',
        count: 1,
        relativeLuminance: 71.1351193159718,
      },
      {
        hex: '#c0aa9d',
        count: 1,
        relativeLuminance: 71.13914210902632,
      },
      {
        hex: '#bcaba1',
        count: 1,
        relativeLuminance: 71.13924859590611,
      },
      {
        hex: '#c8a893',
        count: 2,
        relativeLuminance: 71.13980551238151,
      },
      {
        hex: '#a8b297',
        count: 1,
        relativeLuminance: 71.14581985947721,
      },
      {
        hex: '#a3b1b1',
        count: 1,
        relativeLuminance: 71.1493481089689,
      },
      {
        hex: '#beab9a',
        count: 2,
        relativeLuminance: 71.14998345043338,
      },
      {
        hex: '#c4a8a4',
        count: 1,
        relativeLuminance: 71.16046237289689,
      },
      {
        hex: '#d2a495',
        count: 1,
        relativeLuminance: 71.16123017273037,
      },
      {
        hex: '#c1a9a5',
        count: 1,
        relativeLuminance: 71.16637995384868,
      },
      {
        hex: '#b9ad97',
        count: 1,
        relativeLuminance: 71.17034511873094,
      },
      {
        hex: '#a9b295',
        count: 1,
        relativeLuminance: 71.17714951771764,
      },
      {
        hex: '#adafaa',
        count: 1,
        relativeLuminance: 71.1776483687365,
      },
      {
        hex: '#bdab9f',
        count: 1,
        relativeLuminance: 71.1785928645364,
      },
      {
        hex: '#b2aea5',
        count: 2,
        relativeLuminance: 71.18259998979572,
      },
      {
        hex: '#aaafb3',
        count: 1,
        relativeLuminance: 71.18737199648041,
      },
      {
        hex: '#b9aca3',
        count: 1,
        relativeLuminance: 71.18943483854858,
      },
      {
        hex: '#b1aea9',
        count: 1,
        relativeLuminance: 71.20319564322217,
      },
      {
        hex: '#cda697',
        count: 1,
        relativeLuminance: 71.20466649832797,
      },
      {
        hex: '#c3aa94',
        count: 2,
        relativeLuminance: 71.20722074559932,
      },
      {
        hex: '#beab9d',
        count: 1,
        relativeLuminance: 71.21927346194202,
      },
      {
        hex: '#9fb3aa',
        count: 2,
        relativeLuminance: 71.22345645247056,
      },
      {
        hex: '#b6ae99',
        count: 1,
        relativeLuminance: 71.22597856767818,
      },
      {
        hex: '#baaca1',
        count: 1,
        relativeLuminance: 71.22615980406944,
      },
      {
        hex: '#aeafa9',
        count: 2,
        relativeLuminance: 71.23014489508566,
      },
      {
        hex: '#b7ada1',
        count: 1,
        relativeLuminance: 71.23318159334562,
      },
      {
        hex: '#adb196',
        count: 1,
        relativeLuminance: 71.23516245232504,
      },
      {
        hex: '#a1b3a5',
        count: 1,
        relativeLuminance: 71.23745465015661,
      },
      {
        hex: '#c0ab96',
        count: 1,
        relativeLuminance: 71.23773984516305,
      },
      {
        hex: '#cba88a',
        count: 2,
        relativeLuminance: 71.23941876978753,
      },
      {
        hex: '#cea788',
        count: 1,
        relativeLuminance: 71.23946419759879,
      },
      {
        hex: '#c5aa8d',
        count: 1,
        relativeLuminance: 71.24359096848211,
      },
      {
        hex: '#caa88f',
        count: 4,
        relativeLuminance: 71.24505064546992,
      },
      {
        hex: '#b1afa0',
        count: 1,
        relativeLuminance: 71.24514008286863,
      },
      {
        hex: '#c8a98c',
        count: 1,
        relativeLuminance: 71.24761638421451,
      },
      {
        hex: '#96b5ad',
        count: 1,
        relativeLuminance: 71.2477281460217,
      },
      {
        hex: '#c3aa96',
        count: 1,
        relativeLuminance: 71.25090890894232,
      },
      {
        hex: '#a2b3a3',
        count: 1,
        relativeLuminance: 71.25935824544112,
      },
      {
        hex: '#cba797',
        count: 1,
        relativeLuminance: 71.26098704886864,
      },
      {
        hex: '#c4a99e',
        count: 1,
        relativeLuminance: 71.2691926601483,
      },
      {
        hex: '#acb19b',
        count: 1,
        relativeLuminance: 71.26999624081984,
      },
      {
        hex: '#baaca3',
        count: 1,
        relativeLuminance: 71.27477798032412,
      },
      {
        hex: '#c4aa93',
        count: 1,
        relativeLuminance: 71.27703386525437,
      },
      {
        hex: '#c9a895',
        count: 2,
        relativeLuminance: 71.27764837903362,
      },
      {
        hex: '#cba88c',
        count: 3,
        relativeLuminance: 71.27937398458839,
      },
      {
        hex: '#b7ada3',
        count: 1,
        relativeLuminance: 71.28179194946352,
      },
      {
        hex: '#c0ab98',
        count: 1,
        relativeLuminance: 71.2821487502774,
      },
      {
        hex: '#c1ab94',
        count: 1,
        relativeLuminance: 71.28358882507354,
      },
      {
        hex: '#a0b2b4',
        count: 1,
        relativeLuminance: 71.28923334128362,
      },
      {
        hex: '#abb0aa',
        count: 1,
        relativeLuminance: 71.29006263218761,
      },
      {
        hex: '#c5a99b',
        count: 1,
        relativeLuminance: 71.29138331826705,
      },
      {
        hex: '#cfa692',
        count: 1,
        relativeLuminance: 71.29162125509451,
      },
      {
        hex: '#c6a997',
        count: 1,
        relativeLuminance: 71.29360769140038,
      },
      {
        hex: '#b1afa3',
        count: 2,
        relativeLuminance: 71.31772624640583,
      },
      {
        hex: '#b1b18b',
        count: 1,
        relativeLuminance: 71.32050577527336,
      },
      {
        hex: '#bdac9a',
        count: 1,
        relativeLuminance: 71.321519616239,
      },
      {
        hex: '#b4af99',
        count: 1,
        relativeLuminance: 71.32574444331912,
      },
      {
        hex: '#c1ab96',
        count: 1,
        relativeLuminance: 71.32720062990047,
      },
      {
        hex: '#c0ab9a',
        count: 1,
        relativeLuminance: 71.32726666326033,
      },
      {
        hex: '#b6af92',
        count: 1,
        relativeLuminance: 71.3374784099449,
      },
      {
        hex: '#a0b2b6',
        count: 1,
        relativeLuminance: 71.34526792612311,
      },
      {
        hex: '#c1aaa2',
        count: 1,
        relativeLuminance: 71.3478393432086,
      },
      {
        hex: '#bcac9f',
        count: 1,
        relativeLuminance: 71.3506181663759,
      },
      {
        hex: '#cba79b',
        count: 1,
        relativeLuminance: 71.3512208882558,
      },
      {
        hex: '#beac98',
        count: 1,
        relativeLuminance: 71.36396683807142,
      },
      {
        hex: '#aab29a',
        count: 1,
        relativeLuminance: 71.36446802039409,
      },
      {
        hex: '#d0a59c',
        count: 1,
        relativeLuminance: 71.36483125184769,
      },
      {
        hex: '#bdac9c',
        count: 2,
        relativeLuminance: 71.36735396293487,
      },
      {
        hex: '#aab0b0',
        count: 1,
        relativeLuminance: 71.37222074431644,
      },
      {
        hex: '#d1a598',
        count: 1,
        relativeLuminance: 71.37308644086876,
      },
      {
        hex: '#cda794',
        count: 1,
        relativeLuminance: 71.38815437696289,
      },
      {
        hex: '#baad9d',
        count: 2,
        relativeLuminance: 71.39215867379214,
      },
      {
        hex: '#c3ab91',
        count: 1,
        relativeLuminance: 71.40012251563643,
      },
      {
        hex: '#afb0a2',
        count: 1,
        relativeLuminance: 71.40080844509563,
      },
      {
        hex: '#b9ada1',
        count: 1,
        relativeLuminance: 71.40174433506729,
      },
      {
        hex: '#b5af99',
        count: 2,
        relativeLuminance: 71.4078547839751,
      },
      {
        hex: '#c4aa99',
        count: 1,
        relativeLuminance: 71.40888437271616,
      },
      {
        hex: '#a2b3a9',
        count: 1,
        relativeLuminance: 71.40958792967845,
      },
      {
        hex: '#c5aa95',
        count: 2,
        relativeLuminance: 71.41199826137665,
      },
      {
        hex: '#b3aeab',
        count: 1,
        relativeLuminance: 71.41634936279644,
      },
      {
        hex: '#c9a990',
        count: 1,
        relativeLuminance: 71.4238206583998,
      },
      {
        hex: '#b2b099',
        count: 1,
        relativeLuminance: 71.42960355486967,
      },
      {
        hex: '#c8a995',
        count: 1,
        relativeLuminance: 71.43618326514257,
      },
      {
        hex: '#9fb3b2',
        count: 1,
        relativeLuminance: 71.43635993321307,
      },
      {
        hex: '#c6aa92',
        count: 1,
        relativeLuminance: 71.43980359946907,
      },
      {
        hex: '#c5ab8a',
        count: 1,
        relativeLuminance: 71.44019454148787,
      },
      {
        hex: '#cba894',
        count: 2,
        relativeLuminance: 71.44616703997023,
      },
      {
        hex: '#b7ae9f',
        count: 2,
        relativeLuminance: 71.44800050974777,
      },
      {
        hex: '#a5b3a2',
        count: 1,
        relativeLuminance: 71.4517970279935,
      },
      {
        hex: '#cda88b',
        count: 1,
        relativeLuminance: 71.45200981126766,
      },
      {
        hex: '#9ab4b5',
        count: 1,
        relativeLuminance: 71.45218485651249,
      },
      {
        hex: '#bbaca7',
        count: 1,
        relativeLuminance: 71.4597539279293,
      },
      {
        hex: '#a2b3ab',
        count: 1,
        relativeLuminance: 71.46110883234992,
      },
      {
        hex: '#cba895',
        count: 1,
        relativeLuminance: 71.46780410915157,
      },
      {
        hex: '#acb298',
        count: 1,
        relativeLuminance: 71.47239034318913,
      },
      {
        hex: '#bfaba4',
        count: 1,
        relativeLuminance: 71.47516329971997,
      },
      {
        hex: '#d0a696',
        count: 1,
        relativeLuminance: 71.47640051612748,
      },
      {
        hex: '#c1ac91',
        count: 1,
        relativeLuminance: 71.47809795977666,
      },
      {
        hex: '#b3afa3',
        count: 1,
        relativeLuminance: 71.47888381759988,
      },
      {
        hex: '#abb1a7',
        count: 1,
        relativeLuminance: 71.4817628958097,
      },
      {
        hex: '#c6aa94',
        count: 2,
        relativeLuminance: 71.48251566112837,
      },
      {
        hex: '#b7adab',
        count: 1,
        relativeLuminance: 71.48343919764122,
      },
      {
        hex: '#9fb3b4',
        count: 1,
        relativeLuminance: 71.4914066422412,
      },
      {
        hex: '#bdad96',
        count: 1,
        relativeLuminance: 71.49246054418808,
      },
      {
        hex: '#acb0af',
        count: 1,
        relativeLuminance: 71.49824015277078,
      },
    ],
    closestHex: {
      hex: '#c19a89',
      proximity: 0.0032532754674718944,
    },
    averageLum: 66.71090089423873,
    pixelCount: 3082,
  },
  {
    bucket: '55',
    colors: [
      {
        hex: '#527b91',
        count: 1,
        relativeLuminance: 49.50106783476416,
      },
      {
        hex: '#5b7993',
        count: 1,
        relativeLuminance: 49.50274738487475,
      },
      {
        hex: '#6a7787',
        count: 1,
        relativeLuminance: 49.50470903193177,
      },
      {
        hex: '#557a95',
        count: 1,
        relativeLuminance: 49.5207057539681,
      },
      {
        hex: '#517b93',
        count: 1,
        relativeLuminance: 49.52257696373172,
      },
      {
        hex: '#4a7b9c',
        count: 1,
        relativeLuminance: 49.522857566068325,
      },
      {
        hex: '#5d7a88',
        count: 2,
        relativeLuminance: 49.524957801422474,
      },
      {
        hex: '#4f7b96',
        count: 1,
        relativeLuminance: 49.53270521770878,
      },
      {
        hex: '#7b7380',
        count: 1,
        relativeLuminance: 49.53360578768576,
      },
      {
        hex: '#6a7788',
        count: 1,
        relativeLuminance: 49.53901156218913,
      },
      {
        hex: '#567a94',
        count: 1,
        relativeLuminance: 49.53928122449827,
      },
      {
        hex: '#75757f',
        count: 1,
        relativeLuminance: 49.54070350047496,
      },
      {
        hex: '#527c8a',
        count: 1,
        relativeLuminance: 49.54957626938986,
      },
      {
        hex: '#5f7a85',
        count: 1,
        relativeLuminance: 49.551149006696846,
      },
      {
        hex: '#5d7991',
        count: 1,
        relativeLuminance: 49.55213673787418,
      },
      {
        hex: '#457c9b',
        count: 1,
        relativeLuminance: 49.5531487678677,
      },
      {
        hex: '#637986',
        count: 1,
        relativeLuminance: 49.555029796822396,
      },
      {
        hex: '#4e7b98',
        count: 3,
        relativeLuminance: 49.55986475796999,
      },
      {
        hex: '#657982',
        count: 1,
        relativeLuminance: 49.56051146682613,
      },
      {
        hex: '#517b94',
        count: 1,
        relativeLuminance: 49.56077137151681,
      },
      {
        hex: '#577b8b',
        count: 1,
        relativeLuminance: 49.5642432268794,
      },
      {
        hex: '#407d99',
        count: 1,
        relativeLuminance: 49.5653240417233,
      },
      {
        hex: '#537a99',
        count: 1,
        relativeLuminance: 49.56634935114339,
      },
      {
        hex: '#4c7c93',
        count: 1,
        relativeLuminance: 49.566848126761684,
      },
      {
        hex: '#72767f',
        count: 1,
        relativeLuminance: 49.576762843095764,
      },
      {
        hex: '#567b8d',
        count: 1,
        relativeLuminance: 49.57780151721799,
      },
      {
        hex: '#5a7a8f',
        count: 2,
        relativeLuminance: 49.58803291153974,
      },
      {
        hex: '#6e7689',
        count: 1,
        relativeLuminance: 49.59058425217813,
      },
      {
        hex: '#60798d',
        count: 1,
        relativeLuminance: 49.598591952875694,
      },
      {
        hex: '#557a97',
        count: 1,
        relativeLuminance: 49.59871216521344,
      },
      {
        hex: '#4f7b98',
        count: 3,
        relativeLuminance: 49.611348687879584,
      },
      {
        hex: '#787482',
        count: 1,
        relativeLuminance: 49.61180427602403,
      },
      {
        hex: '#567b8e',
        count: 1,
        relativeLuminance: 49.61396467544971,
      },
      {
        hex: '#587a93',
        count: 4,
        relativeLuminance: 49.61760578368663,
      },
      {
        hex: '#527c8c',
        count: 3,
        relativeLuminance: 49.620303978487044,
      },
      {
        hex: '#4a7c97',
        count: 3,
        relativeLuminance: 49.62383627596486,
      },
      {
        hex: '#657984',
        count: 1,
        relativeLuminance: 49.62610056888454,
      },
      {
        hex: '#557b90',
        count: 2,
        relativeLuminance: 49.630256261400916,
      },
      {
        hex: '#6f7688',
        count: 1,
        relativeLuminance: 49.634023100167084,
      },
      {
        hex: '#5a7998',
        count: 1,
        relativeLuminance: 49.635779705802506,
      },
      {
        hex: '#6b7880',
        count: 1,
        relativeLuminance: 49.63801638481303,
      },
      {
        hex: '#4e7b9a',
        count: 1,
        relativeLuminance: 49.63977804040397,
      },
      {
        hex: '#70777d',
        count: 1,
        relativeLuminance: 49.64020273941446,
      },
      {
        hex: '#477c9b',
        count: 2,
        relativeLuminance: 49.64308811110524,
      },
      {
        hex: '#4f7c91',
        count: 1,
        relativeLuminance: 49.64362862880532,
      },
      {
        hex: '#537a9b',
        count: 1,
        relativeLuminance: 49.646916530550186,
      },
      {
        hex: '#687887',
        count: 1,
        relativeLuminance: 49.64769228863547,
      },
      {
        hex: '#5b7a8f',
        count: 3,
        relativeLuminance: 49.649040090273004,
      },
      {
        hex: '#6a7883',
        count: 1,
        relativeLuminance: 49.660413585845106,
      },
      {
        hex: '#5a7a91',
        count: 1,
        relativeLuminance: 49.66192673554322,
      },
      {
        hex: '#537b94',
        count: 2,
        relativeLuminance: 49.669136999955,
      },
      {
        hex: '#4d7b9c',
        count: 2,
        relativeLuminance: 49.67029814428891,
      },
      {
        hex: '#577a96',
        count: 1,
        relativeLuminance: 49.674296234834515,
      },
      {
        hex: '#687888',
        count: 1,
        relativeLuminance: 49.68184567362485,
      },
      {
        hex: '#477c9c',
        count: 2,
        relativeLuminance: 49.68380541914836,
      },
      {
        hex: '#407d9c',
        count: 1,
        relativeLuminance: 49.686607567265824,
      },
      {
        hex: '#397e9b',
        count: 1,
        relativeLuminance: 49.687335785173175,
      },
      {
        hex: '#587a95',
        count: 1,
        relativeLuminance: 49.69405948617235,
      },
      {
        hex: '#557b92',
        count: 1,
        relativeLuminance: 49.70470908924655,
      },
      {
        hex: '#4e7c94',
        count: 1,
        relativeLuminance: 49.70541705775389,
      },
      {
        hex: '#5a7b8a',
        count: 2,
        relativeLuminance: 49.70714319110269,
      },
      {
        hex: '#537b95',
        count: 1,
        relativeLuminance: 49.70749104742433,
      },
      {
        hex: '#4f7c93',
        count: 2,
        relativeLuminance: 49.71870643767605,
      },
      {
        hex: '#5c7997',
        count: 1,
        relativeLuminance: 49.71903072738459,
      },
      {
        hex: '#4e7b9c',
        count: 3,
        relativeLuminance: 49.72083515779802,
      },
      {
        hex: '#527b97',
        count: 1,
        relativeLuminance: 49.73071458175082,
      },
      {
        hex: '#4d7c96',
        count: 2,
        relativeLuminance: 49.731883317112576,
      },
      {
        hex: '#5a7a93',
        count: 1,
        relativeLuminance: 49.736962777772774,
      },
      {
        hex: '#577a98',
        count: 1,
        relativeLuminance: 49.7526015720525,
      },
      {
        hex: '#477c9e',
        count: 1,
        relativeLuminance: 49.766096551377544,
      },
      {
        hex: '#587b8f',
        count: 1,
        relativeLuminance: 49.76642920670004,
      },
      {
        hex: '#5b7b8a',
        count: 1,
        relativeLuminance: 49.76792969596795,
      },
      {
        hex: '#447d9a',
        count: 1,
        relativeLuminance: 49.77301310050977,
      },
      {
        hex: '#567a9a',
        count: 1,
        relativeLuminance: 49.774607975032424,
      },
      {
        hex: '#5a7b8c',
        count: 1,
        relativeLuminance: 49.77753263855743,
      },
      {
        hex: '#4b7ba1',
        count: 1,
        relativeLuminance: 49.77988433012368,
      },
      {
        hex: '#577b91',
        count: 1,
        relativeLuminance: 49.78169513319952,
      },
      {
        hex: '#4e7c96',
        count: 1,
        relativeLuminance: 49.782325786128666,
      },
      {
        hex: '#4f7d8d',
        count: 1,
        relativeLuminance: 49.80104166581158,
      },
      {
        hex: '#527b99',
        count: 2,
        relativeLuminance: 49.809548967982906,
      },
      {
        hex: '#4d7c98',
        count: 3,
        relativeLuminance: 49.81005175365843,
      },
      {
        hex: '#607b82',
        count: 1,
        relativeLuminance: 49.815262466476284,
      },
      {
        hex: '#537c90',
        count: 2,
        relativeLuminance: 49.8194658761945,
      },
      {
        hex: '#557c8d',
        count: 1,
        relativeLuminance: 49.8215865880634,
      },
      {
        hex: '#5f7a8d',
        count: 1,
        relativeLuminance: 49.82802919780012,
      },
      {
        hex: '#5e7a8f',
        count: 2,
        relativeLuminance: 49.83627702045375,
      },
      {
        hex: '#587b91',
        count: 3,
        relativeLuminance: 49.83992336049377,
      },
      {
        hex: '#507c95',
        count: 1,
        relativeLuminance: 49.84681715929574,
      },
      {
        hex: '#557d85',
        count: 1,
        relativeLuminance: 49.848351165427815,
      },
      {
        hex: '#577b93',
        count: 2,
        relativeLuminance: 49.85645865379588,
      },
      {
        hex: '#69788b',
        count: 1,
        relativeLuminance: 49.858307071210305,
      },
      {
        hex: '#4a7c9d',
        count: 1,
        relativeLuminance: 49.864533608543525,
      },
      {
        hex: '#567b95',
        count: 2,
        relativeLuminance: 49.87509469774011,
      },
      {
        hex: '#687a7c',
        count: 1,
        relativeLuminance: 49.878789780586274,
      },
      {
        hex: '#647a85',
        count: 1,
        relativeLuminance: 49.88416973993563,
      },
      {
        hex: '#617993',
        count: 1,
        relativeLuminance: 49.88521002492887,
      },
      {
        hex: '#4d7c9a',
        count: 4,
        relativeLuminance: 49.88935968244202,
      },
      {
        hex: '#537c92',
        count: 2,
        relativeLuminance: 49.893491984896954,
      },
      {
        hex: '#4e7d91',
        count: 1,
        relativeLuminance: 49.895457627322756,
      },
      {
        hex: '#66798a',
        count: 4,
        relativeLuminance: 49.899335657137854,
      },
      {
        hex: '#6b7888',
        count: 2,
        relativeLuminance: 49.9015064259676,
      },
      {
        hex: '#64798e',
        count: 1,
        relativeLuminance: 49.9024032320893,
      },
      {
        hex: '#507b9e',
        count: 1,
        relativeLuminance: 49.90593682031678,
      },
      {
        hex: '#597a99',
        count: 1,
        relativeLuminance: 49.90930102459181,
      },
      {
        hex: '#4b7c9d',
        count: 1,
        relativeLuminance: 49.91248476656459,
      },
      {
        hex: '#527c94',
        count: 1,
        relativeLuminance: 49.91461601871603,
      },
      {
        hex: '#637b7f',
        count: 1,
        relativeLuminance: 49.91894220062494,
      },
      {
        hex: '#507c97',
        count: 2,
        relativeLuminance: 49.92405417578493,
      },
      {
        hex: '#677a80',
        count: 1,
        relativeLuminance: 49.93123938622884,
      },
      {
        hex: '#5e7a92',
        count: 1,
        relativeLuminance: 49.946710754498085,
      },
      {
        hex: '#4a7c9f',
        count: 2,
        relativeLuminance: 49.947044483043584,
      },
      {
        hex: '#567c8f',
        count: 1,
        relativeLuminance: 49.950100522402934,
      },
      {
        hex: '#4f7c99',
        count: 3,
        relativeLuminance: 49.95078068188499,
      },
      {
        hex: '#5b7a97',
        count: 1,
        relativeLuminance: 49.95090474295236,
      },
      {
        hex: '#527c95',
        count: 2,
        relativeLuminance: 49.952685169380175,
      },
      {
        hex: '#4d7d94',
        count: 1,
        relativeLuminance: 49.95754393247901,
      },
      {
        hex: '#577c8e',
        count: 1,
        relativeLuminance: 49.971180132932474,
      },
      {
        hex: '#6f7881',
        count: 1,
        relativeLuminance: 49.974639790079664,
      },
      {
        hex: '#697986',
        count: 1,
        relativeLuminance: 49.97679644971015,
      },
      {
        hex: '#457d9e',
        count: 1,
        relativeLuminance: 49.978983617936336,
      },
      {
        hex: '#5b7b90',
        count: 1,
        relativeLuminance: 49.982113072648644,
      },
      {
        hex: '#5f7b89',
        count: 1,
        relativeLuminance: 49.98363776698383,
      },
      {
        hex: '#507c99',
        count: 3,
        relativeLuminance: 50.002427658298984,
      },
      {
        hex: '#6b788b',
        count: 1,
        relativeLuminance: 50.00498004767654,
      },
      {
        hex: '#597b94',
        count: 1,
        relativeLuminance: 50.01102423964646,
      },
      {
        hex: '#4b7d98',
        count: 1,
        relativeLuminance: 50.013653845159155,
      },
      {
        hex: '#477ca4',
        count: 1,
        relativeLuminance: 50.01979843414445,
      },
      {
        hex: '#667a85',
        count: 1,
        relativeLuminance: 50.022270131957086,
      },
      {
        hex: '#4f7c9b',
        count: 2,
        relativeLuminance: 50.030413034720794,
      },
      {
        hex: '#6c7981',
        count: 1,
        relativeLuminance: 50.03487930914662,
      },
      {
        hex: '#507d92',
        count: 1,
        relativeLuminance: 50.03506879973622,
      },
      {
        hex: '#547b9c',
        count: 1,
        relativeLuminance: 50.03865783258263,
      },
      {
        hex: '#5c7b90',
        count: 1,
        relativeLuminance: 50.043202889510155,
      },
      {
        hex: '#4a7d9a',
        count: 1,
        relativeLuminance: 50.04478413321699,
      },
      {
        hex: '#5b7b92',
        count: 1,
        relativeLuminance: 50.0557752897878,
      },
      {
        hex: '#4f7d94',
        count: 2,
        relativeLuminance: 50.05843082624956,
      },
      {
        hex: '#4e7c9d',
        count: 1,
        relativeLuminance: 50.060471617107154,
      },
      {
        hex: '#547c95',
        count: 4,
        relativeLuminance: 50.06133175773215,
      },
      {
        hex: '#457da0',
        count: 1,
        relativeLuminance: 50.06187813408778,
      },
      {
        hex: '#587b97',
        count: 2,
        relativeLuminance: 50.067224548777986,
      },
      {
        hex: '#487d9d',
        count: 1,
        relativeLuminance: 50.0723255119853,
      },
      {
        hex: '#5a7d83',
        count: 1,
        relativeLuminance: 50.072699864963695,
      },
      {
        hex: '#3f7e9f',
        count: 1,
        relativeLuminance: 50.07519036946813,
      },
      {
        hex: '#68798b',
        count: 1,
        relativeLuminance: 50.07543687772687,
      },
      {
        hex: '#4d7e8f',
        count: 1,
        relativeLuminance: 50.07636512333917,
      },
      {
        hex: '#697989',
        count: 1,
        relativeLuminance: 50.07813487331306,
      },
      {
        hex: '#4f7d95',
        count: 3,
        relativeLuminance: 50.09633454036705,
      },
      {
        hex: '#567c93',
        count: 1,
        relativeLuminance: 50.097405082819066,
      },
      {
        hex: '#547c96',
        count: 4,
        relativeLuminance: 50.099558833914784,
      },
      {
        hex: '#5b7c8b',
        count: 2,
        relativeLuminance: 50.10122654524167,
      },
      {
        hex: '#4e7c9e',
        count: 2,
        relativeLuminance: 50.101341703874425,
      },
      {
        hex: '#507d94',
        count: 1,
        relativeLuminance: 50.109909806485575,
      },
      {
        hex: '#5d7a98',
        count: 1,
        relativeLuminance: 50.11276538191623,
      },
      {
        hex: '#5f7c84',
        count: 1,
        relativeLuminance: 50.11386140237475,
      },
      {
        hex: '#4e7d97',
        count: 1,
        relativeLuminance: 50.12237782483662,
      },
      {
        hex: '#537c98',
        count: 2,
        relativeLuminance: 50.12238204367978,
      },
      {
        hex: '#597c8f',
        count: 1,
        relativeLuminance: 50.12359444428026,
      },
      {
        hex: '#4b7e93',
        count: 1,
        relativeLuminance: 50.12576995673304,
      },
      {
        hex: '#547d8f',
        count: 1,
        relativeLuminance: 50.13894015075482,
      },
      {
        hex: '#567d8c',
        count: 1,
        relativeLuminance: 50.143573053643166,
      },
      {
        hex: '#587b99',
        count: 2,
        relativeLuminance: 50.14525932312799,
      },
      {
        hex: '#68798d',
        count: 1,
        relativeLuminance: 50.145682056006095,
      },
      {
        hex: '#607b8c',
        count: 1,
        relativeLuminance: 50.15195551840709,
      },
      {
        hex: '#3f7ea1',
        count: 1,
        relativeLuminance: 50.15851282542839,
      },
      {
        hex: '#577b9b',
        count: 1,
        relativeLuminance: 50.16687178054342,
      },
      {
        hex: '#4f7d97',
        count: 1,
        relativeLuminance: 50.17299052229916,
      },
      {
        hex: '#587c92',
        count: 1,
        relativeLuminance: 50.17473913649164,
      },
      {
        hex: '#4c7d9b',
        count: 6,
        relativeLuminance: 50.18062647276821,
      },
      {
        hex: '#4e7ca0',
        count: 2,
        relativeLuminance: 50.183930191456795,
      },
      {
        hex: '#677a88',
        count: 1,
        relativeLuminance: 50.19240479669476,
      },
      {
        hex: '#687a86',
        count: 2,
        relativeLuminance: 50.196143395244746,
      },
      {
        hex: '#437e9e',
        count: 1,
        relativeLuminance: 50.19646273469408,
      },
      {
        hex: '#4e7d99',
        count: 1,
        relativeLuminance: 50.20028270415254,
      },
      {
        hex: '#537c9a',
        count: 3,
        relativeLuminance: 50.20094385017083,
      },
      {
        hex: '#597d89',
        count: 1,
        relativeLuminance: 50.21260479103158,
      },
      {
        hex: '#4b7f8d',
        count: 1,
        relativeLuminance: 50.21315766894473,
      },
      {
        hex: '#567d8e',
        count: 1,
        relativeLuminance: 50.21431113108845,
      },
      {
        hex: '#617b8c',
        count: 1,
        relativeLuminance: 50.21679797194858,
      },
      {
        hex: '#607b8e',
        count: 1,
        relativeLuminance: 50.2226756985019,
      },
      {
        hex: '#647a8f',
        count: 1,
        relativeLuminance: 50.22962067689399,
      },
      {
        hex: '#5f7b90',
        count: 1,
        relativeLuminance: 50.230650084404076,
      },
      {
        hex: '#5b7d86',
        count: 1,
        relativeLuminance: 50.230860974707966,
      },
      {
        hex: '#537d93',
        count: 2,
        relativeLuminance: 50.23110647862667,
      },
      {
        hex: '#597c92',
        count: 1,
        relativeLuminance: 50.23307293760139,
      },
      {
        hex: '#517d96',
        count: 2,
        relativeLuminance: 50.23793171486926,
      },
      {
        hex: '#5b7c8f',
        count: 1,
        relativeLuminance: 50.242734078576845,
      },
      {
        hex: '#4c7e95',
        count: 1,
        relativeLuminance: 50.249272326201364,
      },
      {
        hex: '#4b7d9e',
        count: 4,
        relativeLuminance: 50.253509297654716,
      },
      {
        hex: '#517c9e',
        count: 1,
        relativeLuminance: 50.25534265416009,
      },
      {
        hex: '#4c7d9d',
        count: 1,
        relativeLuminance: 50.261026993337765,
      },
      {
        hex: '#687a88',
        count: 1,
        relativeLuminance: 50.26297619360349,
      },
      {
        hex: '#687b7f',
        count: 1,
        relativeLuminance: 50.264851952912096,
      },
      {
        hex: '#5f7b91',
        count: 2,
        relativeLuminance: 50.267064998386445,
      },
      {
        hex: '#557c99',
        count: 3,
        relativeLuminance: 50.27104354907861,
      },
      {
        hex: '#4e7d9b',
        count: 4,
        relativeLuminance: 50.27931700913885,
      },
      {
        hex: '#547d93',
        count: 1,
        relativeLuminance: 50.28540753121733,
      },
      {
        hex: '#477e9c',
        count: 1,
        relativeLuminance: 50.288923094431794,
      },
      {
        hex: '#4c7d9e',
        count: 1,
        relativeLuminance: 50.30165027501886,
      },
      {
        hex: '#5a7b9a',
        count: 1,
        relativeLuminance: 50.30202669262192,
      },
      {
        hex: '#6d7987',
        count: 1,
        relativeLuminance: 50.305048357537956,
      },
      {
        hex: '#577c97',
        count: 2,
        relativeLuminance: 50.305854992580066,
      },
      {
        hex: '#647b89',
        count: 2,
        relativeLuminance: 50.312339652451556,
      },
      {
        hex: '#5f7c8a',
        count: 2,
        relativeLuminance: 50.31445967485371,
      },
      {
        hex: '#587c96',
        count: 1,
        relativeLuminance: 50.32491845152299,
      },
      {
        hex: '#5b7e80',
        count: 1,
        relativeLuminance: 50.33952186195947,
      },
      {
        hex: '#507d9a',
        count: 5,
        relativeLuminance: 50.34121285806461,
      },
      {
        hex: '#3e7f9f',
        count: 1,
        relativeLuminance: 50.341545599125,
      },
      {
        hex: '#637c83',
        count: 1,
        relativeLuminance: 50.342214323915925,
      },
      {
        hex: '#537d96',
        count: 2,
        relativeLuminance: 50.344098308250054,
      },
      {
        hex: '#557c9b',
        count: 1,
        relativeLuminance: 50.349909467363105,
      },
      {
        hex: '#597d8d',
        count: 1,
        relativeLuminance: 50.35110282987959,
      },
      {
        hex: '#4b7e99',
        count: 2,
        relativeLuminance: 50.35501053366788,
      },
      {
        hex: '#4e7f8d',
        count: 1,
        relativeLuminance: 50.35980801106882,
      },
      {
        hex: '#6a7a87',
        count: 1,
        relativeLuminance: 50.372773623551495,
      },
      {
        hex: '#5c7c91',
        count: 4,
        relativeLuminance: 50.37565543053638,
      },
      {
        hex: '#607c8a',
        count: 1,
        relativeLuminance: 50.37817012085566,
      },
      {
        hex: '#427f9c',
        count: 1,
        relativeLuminance: 50.378426074486285,
      },
      {
        hex: '#657b89',
        count: 1,
        relativeLuminance: 50.380158949124976,
      },
      {
        hex: '#577c99',
        count: 1,
        relativeLuminance: 50.38333007645872,
      },
      {
        hex: '#537e8f',
        count: 1,
        relativeLuminance: 50.38620045980237,
      },
      {
        hex: '#6f7985',
        count: 1,
        relativeLuminance: 50.39071935592642,
      },
      {
        hex: '#717791',
        count: 1,
        relativeLuminance: 50.39188684710567,
      },
      {
        hex: '#517d9a',
        count: 4,
        relativeLuminance: 50.39301950178334,
      },
      {
        hex: '#587d90',
        count: 1,
        relativeLuminance: 50.399981915171225,
      },
      {
        hex: '#697a8a',
        count: 2,
        relativeLuminance: 50.402044791668104,
      },
      {
        hex: '#4c7e99',
        count: 3,
        relativeLuminance: 50.40300450374143,
      },
      {
        hex: '#5a7c95',
        count: 1,
        relativeLuminance: 50.403916003109984,
      },
      {
        hex: '#577d92',
        count: 2,
        relativeLuminance: 50.41559798081482,
      },
      {
        hex: '#5d7d88',
        count: 1,
        relativeLuminance: 50.41933686498615,
      },
      {
        hex: '#507d9c',
        count: 3,
        relativeLuminance: 50.4205680512987,
      },
      {
        hex: '#517e93',
        count: 1,
        relativeLuminance: 50.42601472802633,
      },
      {
        hex: '#617b92',
        count: 1,
        relativeLuminance: 50.43191496293622,
      },
      {
        hex: '#4b7e9b',
        count: 5,
        relativeLuminance: 50.43367733553994,
      },
      {
        hex: '#5d7c91',
        count: 1,
        relativeLuminance: 50.43682566041069,
      },
      {
        hex: '#5f7d85',
        count: 1,
        relativeLuminance: 50.44482786239273,
      },
      {
        hex: '#657c82',
        count: 1,
        relativeLuminance: 50.44497887558876,
      },
      {
        hex: '#5c7c93',
        count: 1,
        relativeLuminance: 50.44908911739769,
      },
      {
        hex: '#4f7d9e',
        count: 1,
        relativeLuminance: 50.45017251055047,
      },
      {
        hex: '#557d96',
        count: 2,
        relativeLuminance: 50.45301972407913,
      },
      {
        hex: '#6c7a85',
        count: 1,
        relativeLuminance: 50.453176607026606,
      },
      {
        hex: '#5f7c8e',
        count: 1,
        relativeLuminance: 50.45379610465558,
      },
      {
        hex: '#587e89',
        count: 1,
        relativeLuminance: 50.45540475665614,
      },
      {
        hex: '#547c9f',
        count: 1,
        relativeLuminance: 50.4563066641347,
      },
      {
        hex: '#537e91',
        count: 1,
        relativeLuminance: 50.45833099248131,
      },
      {
        hex: '#497e9e',
        count: 2,
        relativeLuminance: 50.460399389168344,
      },
      {
        hex: '#6d7a83',
        count: 1,
        relativeLuminance: 50.46295812196921,
      },
      {
        hex: '#4b7f94',
        count: 1,
        relativeLuminance: 50.46737113612116,
      },
      {
        hex: '#627c89',
        count: 1,
        relativeLuminance: 50.4737285506973,
      },
      {
        hex: '#6a7a8a',
        count: 2,
        relativeLuminance: 50.47384660434588,
      },
      {
        hex: '#5d7d8a',
        count: 2,
        relativeLuminance: 50.486971279695666,
      },
      {
        hex: '#497f97',
        count: 1,
        relativeLuminance: 50.48722025104006,
      },
      {
        hex: '#577d94',
        count: 3,
        relativeLuminance: 50.48958526995396,
      },
      {
        hex: '#5c7d8c',
        count: 1,
        relativeLuminance: 50.49477019383093,
      },
      {
        hex: '#507d9e',
        count: 1,
        relativeLuminance: 50.50104701129217,
      },
      {
        hex: '#647c86',
        count: 1,
        relativeLuminance: 50.50637862984928,
      },
      {
        hex: '#4f7e98',
        count: 2,
        relativeLuminance: 50.5123928665645,
      },
      {
        hex: '#717984',
        count: 1,
        relativeLuminance: 50.512893772470136,
      },
      {
        hex: '#5a7c98',
        count: 2,
        relativeLuminance: 50.518259929062,
      },
      {
        hex: '#5c7c95',
        count: 1,
        relativeLuminance: 50.5236446623219,
      },
      {
        hex: '#557e90',
        count: 1,
        relativeLuminance: 50.5307918402832,
      },
      {
        hex: '#75778c',
        count: 1,
        relativeLuminance: 50.53359961373293,
      },
      {
        hex: '#597c9a',
        count: 1,
        relativeLuminance: 50.53740183191627,
      },
      {
        hex: '#627c8b',
        count: 1,
        relativeLuminance: 50.54187862495861,
      },
      {
        hex: '#617c8d',
        count: 1,
        relativeLuminance: 50.54625422766772,
      },
      {
        hex: '#517f8e',
        count: 1,
        relativeLuminance: 50.54777036805595,
      },
      {
        hex: '#4b808e',
        count: 1,
        relativeLuminance: 50.55496498837458,
      },
      {
        hex: '#5d7d8c',
        count: 1,
        relativeLuminance: 50.55572176755307,
      },
      {
        hex: '#507e98',
        count: 3,
        relativeLuminance: 50.563172337567906,
      },
      {
        hex: '#527d9d',
        count: 1,
        relativeLuminance: 50.564593159917095,
      },
      {
        hex: '#5c7d8e',
        count: 3,
        relativeLuminance: 50.56476420569537,
      },
      {
        hex: '#707988',
        count: 2,
        relativeLuminance: 50.566556085547376,
      },
      {
        hex: '#4c808d',
        count: 1,
        relativeLuminance: 50.56757471512843,
      },
      {
        hex: '#4d7e9c',
        count: 1,
        relativeLuminance: 50.5697580274815,
      },
      {
        hex: '#647c88',
        count: 1,
        relativeLuminance: 50.57259029657345,
      },
      {
        hex: '#4f7da1',
        count: 1,
        relativeLuminance: 50.57318070930954,
      },
      {
        hex: '#487ea2',
        count: 4,
        relativeLuminance: 50.57946844112013,
      },
      {
        hex: '#447f9f',
        count: 1,
        relativeLuminance: 50.5827889635937,
      },
      {
        hex: '#4f7e9a',
        count: 2,
        relativeLuminance: 50.5900376543659,
      },
      {
        hex: '#697b87',
        count: 2,
        relativeLuminance: 50.591653927744176,
      },
      {
        hex: '#547d9b',
        count: 2,
        relativeLuminance: 50.591843827888525,
      },
      {
        hex: '#557e92',
        count: 1,
        relativeLuminance: 50.603246066145374,
      },
      {
        hex: '#5e7c94',
        count: 2,
        relativeLuminance: 50.60885021712494,
      },
      {
        hex: '#5f7e81',
        count: 1,
        relativeLuminance: 50.6164474950251,
      },
      {
        hex: '#687b8a',
        count: 1,
        relativeLuminance: 50.62156810901931,
      },
      {
        hex: '#547e94',
        count: 1,
        relativeLuminance: 50.622380521374566,
      },
      {
        hex: '#607c91',
        count: 1,
        relativeLuminance: 50.624477035339524,
      },
      {
        hex: '#5a7d93',
        count: 1,
        relativeLuminance: 50.62569721468108,
      },
      {
        hex: '#527e97',
        count: 1,
        relativeLuminance: 50.62855501711536,
      },
      {
        hex: '#70798a',
        count: 1,
        relativeLuminance: 50.63389212257522,
      },
      {
        hex: '#6e7a86',
        count: 1,
        relativeLuminance: 50.6348616026241,
      },
      {
        hex: '#4d7f96',
        count: 1,
        relativeLuminance: 50.63865600173939,
      },
      {
        hex: '#597d95',
        count: 1,
        relativeLuminance: 50.64155190958948,
      },
      {
        hex: '#4d7e9e',
        count: 1,
        relativeLuminance: 50.64987731787488,
      },
      {
        hex: '#587d97',
        count: 1,
        relativeLuminance: 50.659471248096835,
      },
      {
        hex: '#697c80',
        count: 1,
        relativeLuminance: 50.66037261638371,
      },
      {
        hex: '#567d9a',
        count: 2,
        relativeLuminance: 50.6623456237223,
      },
      {
        hex: '#417fa4',
        count: 1,
        relativeLuminance: 50.667190646647995,
      },
      {
        hex: '#4f7e9c',
        count: 2,
        relativeLuminance: 50.66880195829293,
      },
      {
        hex: '#627d86',
        count: 1,
        relativeLuminance: 50.66980675362758,
      },
      {
        hex: '#637b95',
        count: 1,
        relativeLuminance: 50.67374050416065,
      },
      {
        hex: '#5a7e8c',
        count: 2,
        relativeLuminance: 50.67412109290494,
      },
      {
        hex: '#667c87',
        count: 1,
        relativeLuminance: 50.67474789577598,
      },
      {
        hex: '#507f93',
        count: 2,
        relativeLuminance: 50.676442282300044,
      },
      {
        hex: '#557e94',
        count: 1,
        relativeLuminance: 50.67681772854402,
      },
      {
        hex: '#5e7c96',
        count: 1,
        relativeLuminance: 50.68369033858082,
      },
      {
        hex: '#5d7e87',
        count: 1,
        relativeLuminance: 50.68502365068754,
      },
      {
        hex: '#597e8e',
        count: 1,
        relativeLuminance: 50.68550960440648,
      },
      {
        hex: '#617c91',
        count: 1,
        relativeLuminance: 50.688404306917164,
      },
      {
        hex: '#4d7e9f',
        count: 1,
        relativeLuminance: 50.69035629798235,
      },
      {
        hex: '#547e96',
        count: 2,
        relativeLuminance: 50.69719029856016,
      },
      {
        hex: '#4b8092',
        count: 1,
        relativeLuminance: 50.69834388650325,
      },
      {
        hex: '#4f7f95',
        count: 1,
        relativeLuminance: 50.699996554077245,
      },
      {
        hex: '#577f89',
        count: 1,
        relativeLuminance: 50.70021732388447,
      },
      {
        hex: '#527e99',
        count: 1,
        relativeLuminance: 50.70528274731373,
      },
      {
        hex: '#657c8a',
        count: 1,
        relativeLuminance: 50.70706934400371,
      },
      {
        hex: '#607d8b',
        count: 1,
        relativeLuminance: 50.708384652491944,
      },
      {
        hex: '#4d7f98',
        count: 1,
        relativeLuminance: 50.71471522461822,
      },
      {
        hex: '#517e9b',
        count: 2,
        relativeLuminance: 50.73116398503579,
      },
      {
        hex: '#547e97',
        count: 5,
        relativeLuminance: 50.73501386781382,
      },
      {
        hex: '#627d88',
        count: 1,
        relativeLuminance: 50.735694688617116,
      },
      {
        hex: '#5d7c99',
        count: 1,
        relativeLuminance: 50.736736609584256,
      },
      {
        hex: '#567d9c',
        count: 1,
        relativeLuminance: 50.7409394523423,
      },
      {
        hex: '#4c7f9a',
        count: 1,
        relativeLuminance: 50.743710480661875,
      },
      {
        hex: '#687c85',
        count: 1,
        relativeLuminance: 50.747771647476696,
      },
      {
        hex: '#437fa4',
        count: 1,
        relativeLuminance: 50.74842201848557,
      },
      {
        hex: '#6b7b88',
        count: 1,
        relativeLuminance: 50.768174840322956,
      },
      {
        hex: '#5d7d92',
        count: 1,
        relativeLuminance: 50.76866391245852,
      },
      {
        hex: '#617d8b',
        count: 1,
        relativeLuminance: 50.77215143659261,
      },
      {
        hex: '#587d9a',
        count: 1,
        relativeLuminance: 50.77487480613357,
      },
      {
        hex: '#607d8d',
        count: 1,
        relativeLuminance: 50.77730520604929,
      },
      {
        hex: '#527e9b',
        count: 2,
        relativeLuminance: 50.783126996939714,
      },
      {
        hex: '#4d7f9a',
        count: 3,
        relativeLuminance: 50.79189060354736,
      },
      {
        hex: '#597e91',
        count: 1,
        relativeLuminance: 50.792207385763916,
      },
      {
        hex: '#5e7d91',
        count: 1,
        relativeLuminance: 50.793791998208704,
      },
      {
        hex: '#5b7d96',
        count: 2,
        relativeLuminance: 50.79628474449214,
      },
      {
        hex: '#6a7b8b',
        count: 1,
        relativeLuminance: 50.79719797447689,
      },
      {
        hex: '#4a7f9e',
        count: 1,
        relativeLuminance: 50.80774087971582,
      },
      {
        hex: '#517e9d',
        count: 1,
        relativeLuminance: 50.81024571086333,
      },
      {
        hex: '#527f94',
        count: 1,
        relativeLuminance: 50.816469371321986,
      },
      {
        hex: '#4c7f9c',
        count: 1,
        relativeLuminance: 50.8221131413753,
      },
      {
        hex: '#5e7d92',
        count: 1,
        relativeLuminance: 50.82991238855402,
      },
      {
        hex: '#517f96',
        count: 3,
        relativeLuminance: 50.83905029573776,
      },
      {
        hex: '#507e9f',
        count: 3,
        relativeLuminance: 50.83940328282691,
      },
      {
        hex: '#667d83',
        count: 1,
        relativeLuminance: 50.83977564763359,
      },
      {
        hex: '#567e97',
        count: 3,
        relativeLuminance: 50.844204127972276,
      },
      {
        hex: '#657c8e',
        count: 1,
        relativeLuminance: 50.84477551427196,
      },
      {
        hex: '#557da0',
        count: 1,
        relativeLuminance: 50.84662990371773,
      },
      {
        hex: '#6d7b86',
        count: 1,
        relativeLuminance: 50.8486871021518,
      },
      {
        hex: '#72798c',
        count: 1,
        relativeLuminance: 50.85711949405075,
      },
      {
        hex: '#4e7ea2',
        count: 1,
        relativeLuminance: 50.86229145973557,
      },
      {
        hex: '#637d8a',
        count: 1,
        relativeLuminance: 50.86789260108439,
      },
      {
        hex: '#5b7d98',
        count: 1,
        relativeLuminance: 50.87198602461588,
      },
      {
        hex: '#517f97',
        count: 4,
        relativeLuminance: 50.876713616588944,
      },
      {
        hex: '#507ea0',
        count: 2,
        relativeLuminance: 50.87998003428308,
      },
      {
        hex: '#5e7e8b',
        count: 1,
        relativeLuminance: 50.880241600602034,
      },
      {
        hex: '#587e95',
        count: 2,
        relativeLuminance: 50.881253089278616,
      },
      {
        hex: '#497fa1',
        count: 1,
        relativeLuminance: 50.88367021025128,
      },
      {
        hex: '#5d7e8d',
        count: 1,
        relativeLuminance: 50.887778128523436,
      },
      {
        hex: '#517e9f',
        count: 1,
        relativeLuminance: 50.89044140217183,
      },
      {
        hex: '#527f96',
        count: 4,
        relativeLuminance: 50.8908458886434,
      },
      {
        hex: '#4c7f9e',
        count: 1,
        relativeLuminance: 50.90162950851308,
      },
      {
        hex: '#507f99',
        count: 1,
        relativeLuminance: 50.90193107878173,
      },
      {
        hex: '#557e9a',
        count: 4,
        relativeLuminance: 50.90422430390906,
      },
      {
        hex: '#54808b',
        count: 1,
        relativeLuminance: 50.905553135628935,
      },
      {
        hex: '#5b7d99',
        count: 1,
        relativeLuminance: 50.910253821006435,
      },
      {
        hex: '#707b81',
        count: 1,
        relativeLuminance: 50.91531583137339,
      },
      {
        hex: '#597f8c',
        count: 1,
        relativeLuminance: 50.91577952771716,
      },
      {
        hex: '#518090',
        count: 1,
        relativeLuminance: 50.92187865488215,
      },
      {
        hex: '#4180a3',
        count: 1,
        relativeLuminance: 50.92793570986154,
      },
      {
        hex: '#6b7c84',
        count: 1,
        relativeLuminance: 50.92856531434215,
      },
      {
        hex: '#637d8c',
        count: 1,
        relativeLuminance: 50.935863221174756,
      },
      {
        hex: '#677c8d',
        count: 1,
        relativeLuminance: 50.945878310788444,
      },
      {
        hex: '#5e7e8d',
        count: 1,
        relativeLuminance: 50.94880895363771,
      },
      {
        hex: '#40819d',
        count: 1,
        relativeLuminance: 50.949208223096235,
      },
      {
        hex: '#517f99',
        count: 5,
        relativeLuminance: 50.95287394920379,
      },
      {
        hex: '#5d7e8f',
        count: 1,
        relativeLuminance: 50.95757816992818,
      },
      {
        hex: '#4e7f9d',
        count: 3,
        relativeLuminance: 50.95842669102451,
      },
      {
        hex: '#497fa3',
        count: 1,
        relativeLuminance: 50.96630398019313,
      },
      {
        hex: '#727a87',
        count: 1,
        relativeLuminance: 50.97348429354716,
      },
      {
        hex: '#507f9b',
        count: 2,
        relativeLuminance: 50.979319170449145,
      },
      {
        hex: '#697c8a',
        count: 1,
        relativeLuminance: 50.982524551817775,
      },
      {
        hex: '#6a7c88',
        count: 1,
        relativeLuminance: 50.98659374935933,
      },
      {
        hex: '#587f90',
        count: 1,
        relativeLuminance: 50.99820917668538,
      },
      {
        hex: '#5f7d95',
        count: 1,
        relativeLuminance: 51.00167024938435,
      },
      {
        hex: '#607f82',
        count: 1,
        relativeLuminance: 51.01000533841486,
      },
      {
        hex: '#427fab',
        count: 1,
        relativeLuminance: 51.010031709083265,
      },
      {
        hex: '#557f95',
        count: 1,
        relativeLuminance: 51.01315539680104,
      },
      {
        hex: '#677c8f',
        count: 2,
        relativeLuminance: 51.01555743921722,
      },
      {
        hex: '#5b7e94',
        count: 1,
        relativeLuminance: 51.01779986209365,
      },
      {
        hex: '#667c91',
        count: 1,
        relativeLuminance: 51.0183141737587,
      },
      {
        hex: '#537f98',
        count: 1,
        relativeLuminance: 51.01868997463825,
      },
      {
        hex: '#4e8097',
        count: 1,
        relativeLuminance: 51.027571105364885,
      },
      {
        hex: '#5d7e91',
        count: 1,
        relativeLuminance: 51.02848486633961,
      },
      {
        hex: '#4d7fa0',
        count: 2,
        relativeLuminance: 51.03009543627813,
      },
      {
        hex: '#5a7e96',
        count: 1,
        relativeLuminance: 51.033322664133664,
      },
      {
        hex: '#537ea0',
        count: 1,
        relativeLuminance: 51.03494083523047,
      },
      {
        hex: '#4e7f9f',
        count: 4,
        relativeLuminance: 51.03826845807352,
      },
      {
        hex: '#4580a2',
        count: 1,
        relativeLuminance: 51.050467057377375,
      },
      {
        hex: '#597e98',
        count: 1,
        relativeLuminance: 51.05089246314701,
      },
      {
        hex: '#6a7c8a',
        count: 2,
        relativeLuminance: 51.05308923202307,
      },
      {
        hex: '#577e9b',
        count: 4,
        relativeLuminance: 51.05314810941708,
      },
      {
        hex: '#617d93',
        count: 1,
        relativeLuminance: 51.05395668805244,
      },
      {
        hex: '#557e9e',
        count: 2,
        relativeLuminance: 51.06138915692057,
      },
      {
        hex: '#5b7f8d',
        count: 1,
        relativeLuminance: 51.06642352282536,
      },
      {
        hex: '#567f95',
        count: 1,
        relativeLuminance: 51.06772580705102,
      },
      {
        hex: '#5f7d97',
        count: 2,
        relativeLuminance: 51.076272109640286,
      },
      {
        hex: '#6e7b8b',
        count: 1,
        relativeLuminance: 51.08841421481466,
      },
      {
        hex: '#597e99',
        count: 1,
        relativeLuminance: 51.088956492051636,
      },
      {
        hex: '#508096',
        count: 1,
        relativeLuminance: 51.08937391671769,
      },
      {
        hex: '#58808a',
        count: 1,
        relativeLuminance: 51.09192080005219,
      },
      {
        hex: '#537f9a',
        count: 1,
        relativeLuminance: 51.09516805346007,
      },
      {
        hex: '#667d8b',
        count: 1,
        relativeLuminance: 51.101240339664926,
      },
      {
        hex: '#617e8c',
        count: 1,
        relativeLuminance: 51.10176465624119,
      },
      {
        hex: '#49809f',
        count: 1,
        relativeLuminance: 51.10346098177436,
      },
      {
        hex: '#4d7fa2',
        count: 1,
        relativeLuminance: 51.111716426129476,
      },
      {
        hex: '#5f7e90',
        count: 1,
        relativeLuminance: 51.11525391307873,
      },
      {
        hex: '#527f9c',
        count: 5,
        relativeLuminance: 51.12063675230522,
      },
      {
        hex: '#557f98',
        count: 3,
        relativeLuminance: 51.12543490803165,
      },
      {
        hex: '#597f92',
        count: 1,
        relativeLuminance: 51.12644703282125,
      },
      {
        hex: '#508097',
        count: 1,
        relativeLuminance: 51.12675693816688,
      },
      {
        hex: '#637e89',
        count: 1,
        relativeLuminance: 51.12943411598471,
      },
      {
        hex: '#538093',
        count: 2,
        relativeLuminance: 51.133389813669424,
      },
      {
        hex: '#677d8a',
        count: 1,
        relativeLuminance: 51.135522078914335,
      },
      {
        hex: '#50818f',
        count: 1,
        relativeLuminance: 51.13942762142865,
      },
      {
        hex: '#4880a1',
        count: 1,
        relativeLuminance: 51.13955699014562,
      },
      {
        hex: '#5a7f91',
        count: 3,
        relativeLuminance: 51.14817512121904,
      },
      {
        hex: '#5e7e93',
        count: 2,
        relativeLuminance: 51.161142401689375,
      },
      {
        hex: '#627e8c',
        count: 2,
        relativeLuminance: 51.165585999056404,
      },
      {
        hex: '#597e9b',
        count: 1,
        relativeLuminance: 51.16591445331801,
      },
      {
        hex: '#617e8e',
        count: 1,
        relativeLuminance: 51.17050002388582,
      },
      {
        hex: '#537f9c',
        count: 6,
        relativeLuminance: 51.172752911080494,
      },
      {
        hex: '#5a8089',
        count: 1,
        relativeLuminance: 51.17286977024061,
      },
      {
        hex: '#4e809b',
        count: 1,
        relativeLuminance: 51.18031449608996,
      },
      {
        hex: '#5a7f92',
        count: 1,
        relativeLuminance: 51.183915561816065,
      },
      {
        hex: '#6b7c8c',
        count: 1,
        relativeLuminance: 51.19178404418396,
      },
      {
        hex: '#4b809f',
        count: 1,
        relativeLuminance: 51.19506741402482,
      },
      {
        hex: '#597f94',
        count: 1,
        relativeLuminance: 51.198878145031514,
      },
      {
        hex: '#527f9e',
        count: 2,
        relativeLuminance: 51.199448627222765,
      },
      {
        hex: '#5f7f8a',
        count: 1,
        relativeLuminance: 51.20568569199274,
      },
      {
        hex: '#538095',
        count: 1,
        relativeLuminance: 51.20643567036076,
      },
      {
        hex: '#517fa0',
        count: 2,
        relativeLuminance: 51.22816638969937,
      },
      {
        hex: '#528097',
        count: 2,
        relativeLuminance: 51.22863533411157,
      },
      {
        hex: '#617f87',
        count: 1,
        relativeLuminance: 51.231920193507335,
      },
      {
        hex: '#5e7e95',
        count: 2,
        relativeLuminance: 51.23412800053204,
      },
      {
        hex: '#577f98',
        count: 2,
        relativeLuminance: 51.234888174291186,
      },
      {
        hex: '#4b80a0',
        count: 2,
        relativeLuminance: 51.23521614068652,
      },
      {
        hex: '#567ea1',
        count: 2,
        relativeLuminance: 51.236467866683654,
      },
      {
        hex: '#558093',
        count: 1,
        relativeLuminance: 51.239771168625865,
      },
      {
        hex: '#617e90',
        count: 1,
        relativeLuminance: 51.2403358326676,
      },
      {
        hex: '#508289',
        count: 1,
        relativeLuminance: 51.24052822994875,
      },
      {
        hex: '#5b7e9a',
        count: 1,
        relativeLuminance: 51.24290987206392,
      },
      {
        hex: '#53818e',
        count: 1,
        relativeLuminance: 51.25850770827512,
      },
      {
        hex: '#647e8b',
        count: 1,
        relativeLuminance: 51.2615055337361,
      },
      {
        hex: '#4b8199',
        count: 1,
        relativeLuminance: 51.262842955287695,
      },
      {
        hex: '#528098',
        count: 1,
        relativeLuminance: 51.26618076650698,
      },
      {
        hex: '#517fa1',
        count: 1,
        relativeLuminance: 51.268599406861625,
      },
      {
        hex: '#4a80a2',
        count: 1,
        relativeLuminance: 51.27037081626597,
      },
      {
        hex: '#577f99',
        count: 1,
        relativeLuminance: 51.27274433122341,
      },
      {
        hex: '#527fa0',
        count: 2,
        relativeLuminance: 51.27936481707805,
      },
      {
        hex: '#538097',
        count: 1,
        relativeLuminance: 51.28058437858573,
      },
      {
        hex: '#4d809f',
        count: 1,
        relativeLuminance: 51.28933975948358,
      },
      {
        hex: '#51809a',
        count: 5,
        relativeLuminance: 51.290995089859365,
      },
      {
        hex: '#5c7f92',
        count: 1,
        relativeLuminance: 51.300887523807035,
      },
      {
        hex: '#5c7e9a',
        count: 1,
        relativeLuminance: 51.30173331429782,
      },
      {
        hex: '#5a808d',
        count: 3,
        relativeLuminance: 51.30744820305718,
      },
      {
        hex: '#5e7e97',
        count: 1,
        relativeLuminance: 51.30821574154602,
      },
      {
        hex: '#6e7c89',
        count: 1,
        relativeLuminance: 51.30900210047781,
      },
      {
        hex: '#528191',
        count: 1,
        relativeLuminance: 51.31157824288965,
      },
      {
        hex: '#4b80a2',
        count: 1,
        relativeLuminance: 51.31634077267181,
      },
      {
        hex: '#5b7e9c',
        count: 1,
        relativeLuminance: 51.32015476180884,
      },
      {
        hex: '#617f8a',
        count: 1,
        relativeLuminance: 51.33043215323718,
      },
      {
        hex: '#637e8f',
        count: 1,
        relativeLuminance: 51.33320846893737,
      },
      {
        hex: '#5c7f93',
        count: 1,
        relativeLuminance: 51.33677854301145,
      },
      {
        hex: '#52809a',
        count: 7,
        relativeLuminance: 51.342098064100384,
      },
      {
        hex: '#547f9f',
        count: 5,
        relativeLuminance: 51.34380707844707,
      },
      {
        hex: '#4f809e',
        count: 1,
        relativeLuminance: 51.34663479113786,
      },
      {
        hex: '#5e7f90',
        count: 2,
        relativeLuminance: 51.34986279608829,
      },
      {
        hex: '#5b7f95',
        count: 1,
        relativeLuminance: 51.350749045597084,
      },
      {
        hex: '#4d8199',
        count: 1,
        relativeLuminance: 51.35692581248239,
      },
      {
        hex: '#48819f',
        count: 1,
        relativeLuminance: 51.360632683939826,
      },
      {
        hex: '#51809c',
        count: 2,
        relativeLuminance: 51.36812981230918,
      },
      {
        hex: '#567f9d',
        count: 1,
        relativeLuminance: 51.372170937345075,
      },
      {
        hex: '#4e8290',
        count: 1,
        relativeLuminance: 51.38028870940934,
      },
      {
        hex: '#6b7d89',
        count: 1,
        relativeLuminance: 51.380967629011465,
      },
      {
        hex: '#637e91',
        count: 1,
        relativeLuminance: 51.40332747488519,
      },
      {
        hex: '#568096',
        count: 2,
        relativeLuminance: 51.40343423905496,
      },
      {
        hex: '#548099',
        count: 2,
        relativeLuminance: 51.408339480300214,
      },
      {
        hex: '#677d92',
        count: 1,
        relativeLuminance: 51.41183193074707,
      },
      {
        hex: '#4f8198',
        count: 3,
        relativeLuminance: 51.41602011310401,
      },
      {
        hex: '#5e7f92',
        count: 2,
        relativeLuminance: 51.420568214630805,
      },
      {
        hex: '#547fa1',
        count: 1,
        relativeLuminance: 51.424025461219685,
      },
      {
        hex: '#5b7f97',
        count: 1,
        relativeLuminance: 51.42458085708398,
      },
      {
        hex: '#5a7f99',
        count: 3,
        relativeLuminance: 51.441806815162735,
      },
      {
        hex: '#587f9c',
        count: 1,
        relativeLuminance: 51.443454139512,
      },
      {
        hex: '#51809e',
        count: 3,
        relativeLuminance: 51.44636468921887,
      },
      {
        hex: '#6b7d8b',
        count: 1,
        relativeLuminance: 51.44729757529109,
      },
      {
        hex: '#4a819f',
        count: 2,
        relativeLuminance: 51.45010173880655,
      },
      {
        hex: '#5c808e',
        count: 1,
        relativeLuminance: 51.458203656399036,
      },
      {
        hex: '#4f80a1',
        count: 1,
        relativeLuminance: 51.46639873490783,
      },
      {
        hex: '#687d92',
        count: 1,
        relativeLuminance: 51.47987711844986,
      },
      {
        hex: '#827787',
        count: 1,
        relativeLuminance: 51.48346188639293,
      },
      {
        hex: '#54809b',
        count: 1,
        relativeLuminance: 51.484571145560324,
      },
      {
        hex: '#4a81a0',
        count: 1,
        relativeLuminance: 51.489947697075294,
      },
      {
        hex: '#4f819a',
        count: 1,
        relativeLuminance: 51.49160088368983,
      },
      {
        hex: '#53828c',
        count: 1,
        relativeLuminance: 51.49370333722118,
      },
      {
        hex: '#627f8d',
        count: 1,
        relativeLuminance: 51.49460386766525,
      },
      {
        hex: '#677e8c',
        count: 2,
        relativeLuminance: 51.49485713817205,
      },
      {
        hex: '#4e80a3',
        count: 1,
        relativeLuminance: 51.49904232217004,
      },
      {
        hex: '#5b7f99',
        count: 2,
        relativeLuminance: 51.49951057694901,
      },
      {
        hex: '#5e808c',
        count: 1,
        relativeLuminance: 51.509419259818486,
      },
      {
        hex: '#53809d',
        count: 3,
        relativeLuminance: 51.50963383963882,
      },
      {
        hex: '#727c86',
        count: 1,
        relativeLuminance: 51.51223333243432,
      },
      {
        hex: '#518198',
        count: 1,
        relativeLuminance: 51.51554528426999,
      },
      {
        hex: '#7f7888',
        count: 1,
        relativeLuminance: 51.52204897497121,
      },
      {
        hex: '#548194',
        count: 2,
        relativeLuminance: 51.5230860442433,
      },
      {
        hex: '#5c8090',
        count: 1,
        relativeLuminance: 51.52744596352619,
      },
      {
        hex: '#518290',
        count: 1,
        relativeLuminance: 51.52851818676774,
      },
      {
        hex: '#6a7e87',
        count: 2,
        relativeLuminance: 51.53643509853006,
      },
      {
        hex: '#5b8092',
        count: 1,
        relativeLuminance: 51.53947190640872,
      },
      {
        hex: '#5f7f94',
        count: 2,
        relativeLuminance: 51.55309473798205,
      },
      {
        hex: '#5a7f9c',
        count: 1,
        relativeLuminance: 51.55645228623159,
      },
      {
        hex: '#637f8d',
        count: 1,
        relativeLuminance: 51.55847803765862,
      },
      {
        hex: '#54809d',
        count: 2,
        relativeLuminance: 51.56189999957738,
      },
      {
        hex: '#687e8c',
        count: 1,
        relativeLuminance: 51.56273527669579,
      },
      {
        hex: '#627f8f',
        count: 1,
        relativeLuminance: 51.563156354220595,
      },
      {
        hex: '#4f819c',
        count: 2,
        relativeLuminance: 51.56827853159557,
      },
      {
        hex: '#5b8093',
        count: 1,
        relativeLuminance: 51.575110002721075,
      },
      {
        hex: '#578191',
        count: 1,
        relativeLuminance: 51.577401205209554,
      },
      {
        hex: '#5d7f98',
        count: 2,
        relativeLuminance: 51.57946766073485,
      },
      {
        hex: '#4c81a0',
        count: 3,
        relativeLuminance: 51.581951689657686,
      },
      {
        hex: '#53809f',
        count: 3,
        relativeLuminance: 51.58817940647809,
      },
      {
        hex: '#5a8095',
        count: 2,
        relativeLuminance: 51.58975379987325,
      },
      {
        hex: '#548196',
        count: 2,
        relativeLuminance: 51.59591654853581,
      },
      {
        hex: '#60808b',
        count: 1,
        relativeLuminance: 51.598056777668475,
      },
      {
        hex: '#4981a4',
        count: 1,
        relativeLuminance: 51.60727589728438,
      },
      {
        hex: '#607f94',
        count: 1,
        relativeLuminance: 51.61449343039939,
      },
      {
        hex: '#538198',
        count: 2,
        relativeLuminance: 51.61774096582701,
      },
      {
        hex: '#568194',
        count: 1,
        relativeLuminance: 51.629748452205874,
      },
      {
        hex: '#5b818c',
        count: 2,
        relativeLuminance: 51.63093643157312,
      },
      {
        hex: '#627f91',
        count: 3,
        relativeLuminance: 51.63279961616911,
      },
      {
        hex: '#5c7f9b',
        count: 1,
        relativeLuminance: 51.6337833198824,
      },
      {
        hex: '#518293',
        count: 1,
        relativeLuminance: 51.63442612766708,
      },
      {
        hex: '#6f7d88',
        count: 1,
        relativeLuminance: 51.63799081779926,
      },
      {
        hex: '#657f8c',
        count: 1,
        relativeLuminance: 51.65457168957012,
      },
      {
        hex: '#5d7f9a',
        count: 1,
        relativeLuminance: 51.65468388394058,
      },
      {
        hex: '#538199',
        count: 3,
        relativeLuminance: 51.655170007647584,
      },
      {
        hex: '#5280a2',
        count: 1,
        relativeLuminance: 51.65675546882794,
      },
      {
        hex: '#6d7d8d',
        count: 1,
        relativeLuminance: 51.657565339401515,
      },
      {
        hex: '#58809a',
        count: 1,
        relativeLuminance: 51.6628107786936,
      },
      {
        hex: '#5a8097',
        count: 1,
        relativeLuminance: 51.66306522815873,
      },
      {
        hex: '#60808d',
        count: 1,
        relativeLuminance: 51.66517781244647,
      },
      {
        hex: '#57809c',
        count: 3,
        relativeLuminance: 51.684096566508074,
      },
      {
        hex: '#638088',
        count: 1,
        relativeLuminance: 51.68828218144692,
      },
      {
        hex: '#5d8093',
        count: 1,
        relativeLuminance: 51.692276583886496,
      },
      {
        hex: '#5d7f9b',
        count: 1,
        relativeLuminance: 51.69270190257457,
      },
      {
        hex: '#5b818e',
        count: 1,
        relativeLuminance: 51.69860199282611,
      },
      {
        hex: '#588193',
        count: 2,
        relativeLuminance: 51.70331364064009,
      },
      {
        hex: '#62808b',
        count: 1,
        relativeLuminance: 51.72293215094781,
      },
      {
        hex: '#5d8094',
        count: 4,
        relativeLuminance: 51.72806372729248,
      },
      {
        hex: '#53819b',
        count: 2,
        relativeLuminance: 51.73084737812806,
      },
      {
        hex: '#5b7f9f',
        count: 1,
        relativeLuminance: 51.730872345157465,
      },
      {
        hex: '#5580a0',
        count: 1,
        relativeLuminance: 51.73269786948667,
      },
      {
        hex: '#50819f',
        count: 2,
        relativeLuminance: 51.73438465482704,
      },
      {
        hex: '#5c8096',
        count: 1,
        relativeLuminance: 51.741723550763766,
      },
      {
        hex: '#548292',
        count: 1,
        relativeLuminance: 51.75276684423021,
      },
      {
        hex: '#677f8b',
        count: 1,
        relativeLuminance: 51.753882626057404,
      },
      {
        hex: '#52819d',
        count: 1,
        relativeLuminance: 51.75647213282845,
      },
      {
        hex: '#57809e',
        count: 4,
        relativeLuminance: 51.761603960107735,
      },
      {
        hex: '#588195',
        count: 1,
        relativeLuminance: 51.775136833414834,
      },
      {
        hex: '#597fa3',
        count: 1,
        relativeLuminance: 51.77716142902868,
      },
      {
        hex: '#5a8192',
        count: 1,
        relativeLuminance: 51.780062438156605,
      },
      {
        hex: '#658087',
        count: 1,
        relativeLuminance: 51.78551882060306,
      },
      {
        hex: '#617f97',
        count: 1,
        relativeLuminance: 51.785725139217604,
      },
      {
        hex: '#5c7f9f',
        count: 1,
        relativeLuminance: 51.788852348659816,
      },
      {
        hex: '#55819a',
        count: 4,
        relativeLuminance: 51.79750641074875,
      },
      {
        hex: '#5d8096',
        count: 1,
        relativeLuminance: 51.80045476421836,
      },
      {
        hex: '#637f94',
        count: 1,
        relativeLuminance: 51.80272243308136,
      },
      {
        hex: '#6b7e8d',
        count: 2,
        relativeLuminance: 51.803950584005534,
      },
      {
        hex: '#508299',
        count: 1,
        relativeLuminance: 51.80400549553471,
      },
      {
        hex: '#4f81a2',
        count: 2,
        relativeLuminance: 51.804875462834204,
      },
      {
        hex: '#5f8093',
        count: 1,
        relativeLuminance: 51.81212861065096,
      },
      {
        hex: '#5580a2',
        count: 1,
        relativeLuminance: 51.81263729910144,
      },
      {
        hex: '#58828e',
        count: 1,
        relativeLuminance: 51.829256181590424,
      },
      {
        hex: '#6f7e85',
        count: 1,
        relativeLuminance: 51.83118649235226,
      },
      {
        hex: '#5b809a',
        count: 2,
        relativeLuminance: 51.83221765015536,
      },
      {
        hex: '#6e7d90',
        count: 1,
        relativeLuminance: 51.8325128267644,
      },
      {
        hex: '#5780a0',
        count: 1,
        relativeLuminance: 51.84020197230397,
      },
      {
        hex: '#538296',
        count: 1,
        relativeLuminance: 51.84430173883102,
      },
      {
        hex: '#588197',
        count: 3,
        relativeLuminance: 51.84804840390642,
      },
      {
        hex: '#5580a3',
        count: 1,
        relativeLuminance: 51.85301559716429,
      },
      {
        hex: '#5081a2',
        count: 1,
        relativeLuminance: 51.85373957985412,
      },
      {
        hex: '#60818a',
        count: 1,
        relativeLuminance: 51.86240179855905,
      },
      {
        hex: '#528298',
        count: 1,
        relativeLuminance: 51.86670819734316,
      },
      {
        hex: '#578199',
        count: 2,
        relativeLuminance: 51.8673385382846,
      },
      {
        hex: '#5e7f9e',
        count: 1,
        relativeLuminance: 51.86778027270485,
      },
      {
        hex: '#5b809b',
        count: 1,
        relativeLuminance: 51.8700370903195,
      },
      {
        hex: '#55819c',
        count: 1,
        relativeLuminance: 51.873494834993124,
      },
      {
        hex: '#737d86',
        count: 1,
        relativeLuminance: 51.87483975058312,
      },
      {
        hex: '#717d8b',
        count: 1,
        relativeLuminance: 51.88468907630116,
      },
      {
        hex: '#4f81a4',
        count: 1,
        relativeLuminance: 51.885922603129714,
      },
      {
        hex: '#5c809a',
        count: 3,
        relativeLuminance: 51.89002475325785,
      },
      {
        hex: '#787b8c',
        count: 1,
        relativeLuminance: 51.89644623405168,
      },
      {
        hex: '#588290',
        count: 1,
        relativeLuminance: 51.89774414171269,
      },
      {
        hex: '#54819e',
        count: 1,
        relativeLuminance: 51.89815791639279,
      },
      {
        hex: '#618092',
        count: 2,
        relativeLuminance: 51.899398304427095,
      },
      {
        hex: '#528299',
        count: 1,
        relativeLuminance: 51.90386335331608,
      },
      {
        hex: '#57819a',
        count: 1,
        relativeLuminance: 51.90480556947644,
      },
      {
        hex: '#4b839a',
        count: 1,
        relativeLuminance: 51.906728667514614,
      },
      {
        hex: '#5b8194',
        count: 1,
        relativeLuminance: 51.90811611072266,
      },
      {
        hex: '#59809f',
        count: 1,
        relativeLuminance: 51.91106598412212,
      },
      {
        hex: '#637f97',
        count: 1,
        relativeLuminance: 51.9114777798267,
      },
      {
        hex: '#558295',
        count: 1,
        relativeLuminance: 51.91229708613518,
      },
      {
        hex: '#47839f',
        count: 1,
        relativeLuminance: 51.922348348700496,
      },
      {
        hex: '#697f8c',
        count: 1,
        relativeLuminance: 51.92241099908159,
      },
      {
        hex: '#6b7f88',
        count: 1,
        relativeLuminance: 51.929927926502856,
      },
      {
        hex: '#617f9b',
        count: 1,
        relativeLuminance: 51.93508215904224,
      },
      {
        hex: '#55819e',
        count: 1,
        relativeLuminance: 51.950571005263825,
      },
      {
        hex: '#648185',
        count: 1,
        relativeLuminance: 51.95379743399981,
      },
      {
        hex: '#50829d',
        count: 1,
        relativeLuminance: 51.955785058097575,
      },
      {
        hex: '#697f8d',
        count: 1,
        relativeLuminance: 51.95581955554256,
      },
      {
        hex: '#5c8194',
        count: 1,
        relativeLuminance: 51.965794232634764,
      },
      {
        hex: '#588292',
        count: 1,
        relativeLuminance: 51.967314841304784,
      },
      {
        hex: '#707e87',
        count: 1,
        relativeLuminance: 51.96779895040149,
      },
      {
        hex: '#4f81a6',
        count: 1,
        relativeLuminance: 51.96805688065632,
      },
      {
        hex: '#737d89',
        count: 1,
        relativeLuminance: 51.97060176334365,
      },
      {
        hex: '#5481a0',
        count: 1,
        relativeLuminance: 51.9764406462878,
      },
      {
        hex: '#6d7e8e',
        count: 1,
        relativeLuminance: 51.97927359295983,
      },
      {
        hex: '#5b8196',
        count: 3,
        relativeLuminance: 51.980124389368726,
      },
      {
        hex: '#4f829f',
        count: 2,
        relativeLuminance: 51.98469817953361,
      },
      {
        hex: '#558297',
        count: 2,
        relativeLuminance: 51.984914911499644,
      },
      {
        hex: '#4c8493',
        count: 1,
        relativeLuminance: 52.00144535869832,
      },
      {
        hex: '#548299',
        count: 1,
        relativeLuminance: 52.006369966587314,
      },
      {
        hex: '#59819a',
        count: 1,
        relativeLuminance: 52.01476789197018,
      },
      {
        hex: '#608097',
        count: 1,
        relativeLuminance: 52.01707378134583,
      },
      {
        hex: '#6e7e8d',
        count: 1,
        relativeLuminance: 52.01739773533252,
      },
      {
        hex: '#578295',
        count: 1,
        relativeLuminance: 52.01923467552095,
      },
      {
        hex: '#528394',
        count: 2,
        relativeLuminance: 52.022753747779845,
      },
      {
        hex: '#44849d',
        count: 1,
        relativeLuminance: 52.024144869469694,
      },
      {
        hex: '#638092',
        count: 1,
        relativeLuminance: 52.02473140513911,
      },
      {
        hex: '#4d839b',
        count: 1,
        relativeLuminance: 52.03667370100902,
      },
      {
        hex: '#558390',
        count: 1,
        relativeLuminance: 52.03731778138402,
      },
      {
        hex: '#54829a',
        count: 1,
        relativeLuminance: 52.043684086042745,
      },
      {
        hex: '#5e809b',
        count: 2,
        relativeLuminance: 52.04526745149914,
      },
      {
        hex: '#66808d',
        count: 1,
        relativeLuminance: 52.047095351487755,
      },
      {
        hex: '#61818e',
        count: 1,
        relativeLuminance: 52.05685165412629,
      },
      {
        hex: '#558299',
        count: 1,
        relativeLuminance: 52.05861658028792,
      },
      {
        hex: '#4b839e',
        count: 1,
        relativeLuminance: 52.05930292945389,
      },
      {
        hex: '#53829c',
        count: 1,
        relativeLuminance: 52.06771097723626,
      },
      {
        hex: '#4a83a0',
        count: 1,
        relativeLuminance: 52.09234813358508,
      },
      {
        hex: '#598294',
        count: 2,
        relativeLuminance: 52.09315412043627,
      },
      {
        hex: '#6d7e92',
        count: 1,
        relativeLuminance: 52.11672542938429,
      },
      {
        hex: '#5e8195',
        count: 2,
        relativeLuminance: 52.11883534200088,
      },
      {
        hex: '#54829c',
        count: 2,
        relativeLuminance: 52.11912457553322,
      },
      {
        hex: '#618190',
        count: 1,
        relativeLuminance: 52.1248829917637,
      },
      {
        hex: '#6a7f90',
        count: 1,
        relativeLuminance: 52.12602007043661,
      },
      {
        hex: '#6b8085',
        count: 1,
        relativeLuminance: 52.12721533343185,
      },
      {
        hex: '#5d8197',
        count: 1,
        relativeLuminance: 52.13218952091465,
      },
      {
        hex: '#4484a0',
        count: 1,
        relativeLuminance: 52.14059675858718,
      },
      {
        hex: '#53829e',
        count: 3,
        relativeLuminance: 52.144348677136165,
      },
      {
        hex: '#508492',
        count: 1,
        relativeLuminance: 52.15604308546253,
      },
      {
        hex: '#638284',
        count: 2,
        relativeLuminance: 52.15663783609797,
      },
      {
        hex: '#6c7f8d',
        count: 1,
        relativeLuminance: 52.16349281028319,
      },
      {
        hex: '#598296',
        count: 1,
        relativeLuminance: 52.16477219324226,
      },
      {
        hex: '#6d7f8b',
        count: 2,
        relativeLuminance: 52.1680362881073,
      },
      {
        hex: '#5b8293',
        count: 1,
        relativeLuminance: 52.170230878091914,
      },
      {
        hex: '#538397',
        count: 1,
        relativeLuminance: 52.18139221837224,
      },
      {
        hex: '#56829b',
        count: 3,
        relativeLuminance: 52.186193625984586,
      },
      {
        hex: '#638285',
        count: 1,
        relativeLuminance: 52.18743871749412,
      },
      {
        hex: '#658093',
        count: 1,
        relativeLuminance: 52.18773078727891,
      },
      {
        hex: '#4d839f',
        count: 1,
        relativeLuminance: 52.18991781998088,
      },
      {
        hex: '#648095',
        count: 1,
        relativeLuminance: 52.194405903242995,
      },
      {
        hex: '#6a7f92',
        count: 1,
        relativeLuminance: 52.19512602611273,
      },
      {
        hex: '#5182a2',
        count: 1,
        relativeLuminance: 52.20070930744495,
      },
      {
        hex: '#608194',
        count: 2,
        relativeLuminance: 52.203169809823606,
      },
      {
        hex: '#648284',
        count: 1,
        relativeLuminance: 52.220058882904084,
      },
      {
        hex: '#5a819e',
        count: 1,
        relativeLuminance: 52.22258925354899,
      },
      {
        hex: '#6d7f8d',
        count: 1,
        relativeLuminance: 52.23404119341923,
      },
      {
        hex: '#5182a3',
        count: 1,
        relativeLuminance: 52.24062979917281,
      },
      {
        hex: '#7a7c89',
        count: 1,
        relativeLuminance: 52.24072316131233,
      },
      {
        hex: '#65818c',
        count: 1,
        relativeLuminance: 52.242559805314755,
      },
      {
        hex: '#5d8292',
        count: 1,
        relativeLuminance: 52.250465830332885,
      },
      {
        hex: '#62809a',
        count: 1,
        relativeLuminance: 52.25087341994683,
      },
      {
        hex: '#58829a',
        count: 1,
        relativeLuminance: 52.2564099945719,
      },
      {
        hex: '#4c83a2',
        count: 1,
        relativeLuminance: 52.26162414617599,
      },
      {
        hex: '#56829d',
        count: 2,
        relativeLuminance: 52.26194191822344,
      },
      {
        hex: '#51839c',
        count: 2,
        relativeLuminance: 52.266643976740426,
      },
      {
        hex: '#5082a5',
        count: 1,
        relativeLuminance: 52.2723593342139,
      },
      {
        hex: '#55829f',
        count: 4,
        relativeLuminance: 52.286211640892375,
      },
      {
        hex: '#628193',
        count: 1,
        relativeLuminance: 52.29068193807316,
      },
      {
        hex: '#53839a',
        count: 3,
        relativeLuminance: 52.29171376054947,
      },
      {
        hex: '#5c8295',
        count: 1,
        relativeLuminance: 52.29819245657231,
      },
      {
        hex: '#568396',
        count: 1,
        relativeLuminance: 52.30102587911588,
      },
      {
        hex: '#7c7c86',
        count: 1,
        relativeLuminance: 52.310592261051255,
      },
      {
        hex: '#518495',
        count: 1,
        relativeLuminance: 52.31077635867068,
      },
      {
        hex: '#588394',
        count: 1,
        relativeLuminance: 52.33712450097447,
      },
      {
        hex: '#56829f',
        count: 4,
        relativeLuminance: 52.33876865788311,
      },
      {
        hex: '#727f85',
        count: 1,
        relativeLuminance: 52.34178332550215,
      },
      {
        hex: '#648191',
        count: 2,
        relativeLuminance: 52.34686982914995,
      },
      {
        hex: '#6a808e',
        count: 1,
        relativeLuminance: 52.34835731949083,
      },
      {
        hex: '#4e83a2',
        count: 1,
        relativeLuminance: 52.35440136737611,
      },
      {
        hex: '#5d8295',
        count: 1,
        relativeLuminance: 52.355971740685575,
      },
      {
        hex: '#598393',
        count: 1,
        relativeLuminance: 52.35673411068721,
      },
      {
        hex: '#628195',
        count: 1,
        relativeLuminance: 52.361276854430145,
      },
      {
        hex: '#747e8a',
        count: 1,
        relativeLuminance: 52.36414982423709,
      },
      {
        hex: '#5582a1',
        count: 2,
        relativeLuminance: 52.36423493518285,
      },
      {
        hex: '#5c8297',
        count: 3,
        relativeLuminance: 52.369993288494186,
      },
      {
        hex: '#568398',
        count: 3,
        relativeLuminance: 52.37343364680464,
      },
      {
        hex: '#4e83a3',
        count: 1,
        relativeLuminance: 52.39414269819497,
      },
      {
        hex: '#628196',
        count: 2,
        relativeLuminance: 52.396976993129215,
      },
      {
        hex: '#5a829b',
        count: 2,
        relativeLuminance: 52.40396985081081,
      },
      {
        hex: '#5e838c',
        count: 1,
        relativeLuminance: 52.40424985947499,
      },
      {
        hex: '#618198',
        count: 1,
        relativeLuminance: 52.4077710759604,
      },
      {
        hex: '#588396',
        count: 4,
        relativeLuminance: 52.40823291625651,
      },
      {
        hex: '#797d88',
        count: 1,
        relativeLuminance: 52.40871977962719,
      },
      {
        hex: '#698092',
        count: 1,
        relativeLuminance: 52.41669140959878,
      },
      {
        hex: '#717f8a',
        count: 1,
        relativeLuminance: 52.42503696812845,
      },
      {
        hex: '#5482a4',
        count: 1,
        relativeLuminance: 52.43168729519675,
      },
      {
        hex: '#55839b',
        count: 2,
        relativeLuminance: 52.431725733927706,
      },
      {
        hex: '#67818e',
        count: 1,
        relativeLuminance: 52.4390807453824,
      },
      {
        hex: '#5a829c',
        count: 3,
        relativeLuminance: 52.441469374177316,
      },
      {
        hex: '#5c8299',
        count: 2,
        relativeLuminance: 52.44286840513466,
      },
      {
        hex: '#50849a',
        count: 1,
        relativeLuminance: 52.44354948493829,
      },
      {
        hex: '#56839a',
        count: 3,
        relativeLuminance: 52.44691597284387,
      },
      {
        hex: '#5083a2',
        count: 1,
        relativeLuminance: 52.44978201644071,
      },
      {
        hex: '#54839d',
        count: 3,
        relativeLuminance: 52.455368063468626,
      },
      {
        hex: '#59829e',
        count: 3,
        relativeLuminance: 52.46202282409472,
      },
      {
        hex: '#69818b',
        count: 2,
        relativeLuminance: 52.473253804463226,
      },
      {
        hex: '#5f8295',
        count: 1,
        relativeLuminance: 52.47351367409888,
      },
      {
        hex: '#568493',
        count: 1,
        relativeLuminance: 52.495101902967406,
      },
      {
        hex: '#6f8088',
        count: 1,
        relativeLuminance: 52.503837520561845,
      },
      {
        hex: '#55839d',
        count: 2,
        relativeLuminance: 52.50693232838219,
      },
      {
        hex: '#5283a1',
        count: 1,
        relativeLuminance: 52.508518971777406,
      },
      {
        hex: '#4d83a7',
        count: 1,
        relativeLuminance: 52.509354466734834,
      },
      {
        hex: '#628291',
        count: 1,
        relativeLuminance: 52.515858189117466,
      },
      {
        hex: '#50849c',
        count: 1,
        relativeLuminance: 52.51811250096415,
      },
      {
        hex: '#54839f',
        count: 1,
        relativeLuminance: 52.5317619819285,
      },
      {
        hex: '#5a8397',
        count: 1,
        relativeLuminance: 52.5539154337844,
      },
      {
        hex: '#5c8394',
        count: 2,
        relativeLuminance: 52.55989838067684,
      },
      {
        hex: '#6f808a',
        count: 1,
        relativeLuminance: 52.567424194754096,
      },
      {
        hex: '#638199',
        count: 1,
        relativeLuminance: 52.56769194236442,
      },
      {
        hex: '#598399',
        count: 2,
        relativeLuminance: 52.57132556280604,
      },
      {
        hex: '#57839c',
        count: 1,
        relativeLuminance: 52.574403968967985,
      },
      {
        hex: '#678192',
        count: 1,
        relativeLuminance: 52.574697324262814,
      },
      {
        hex: '#4e84a0',
        count: 1,
        relativeLuminance: 52.57568602653343,
      },
      {
        hex: '#5183a4',
        count: 1,
        relativeLuminance: 52.577866485632214,
      },
      {
        hex: '#52849b',
        count: 1,
        relativeLuminance: 52.57859523509478,
      },
      {
        hex: '#62838a',
        count: 1,
        relativeLuminance: 52.58005917535854,
      },
      {
        hex: '#618295',
        count: 1,
        relativeLuminance: 52.59369552559622,
      },
      {
        hex: '#4d84a2',
        count: 1,
        relativeLuminance: 52.60736847428102,
      },
      {
        hex: '#5d829c',
        count: 1,
        relativeLuminance: 52.61154200595662,
      },
      {
        hex: '#718087',
        count: 1,
        relativeLuminance: 52.61773474696166,
      },
      {
        hex: '#5a8399',
        count: 1,
        relativeLuminance: 52.62640066343074,
      },
      {
        hex: '#5283a4',
        count: 1,
        relativeLuminance: 52.62707161097407,
      },
      {
        hex: '#68809a',
        count: 1,
        relativeLuminance: 52.63559861378205,
      },
      {
        hex: '#59839b',
        count: 4,
        relativeLuminance: 52.644997503055464,
      },
      {
        hex: '#62819d',
        count: 1,
        relativeLuminance: 52.65438307700549,
      },
      {
        hex: '#5183a6',
        count: 1,
        relativeLuminance: 52.65835458491077,
      },
      {
        hex: '#757f88',
        count: 1,
        relativeLuminance: 52.66179988787688,
      },
      {
        hex: '#5e829c',
        count: 1,
        relativeLuminance: 52.66954861936571,
      },
      {
        hex: '#658290',
        count: 2,
        relativeLuminance: 52.6699177729182,
      },
      {
        hex: '#6a818f',
        count: 1,
        relativeLuminance: 52.672426409442636,
      },
      {
        hex: '#5683a0',
        count: 2,
        relativeLuminance: 52.67379765985655,
      },
      {
        hex: '#4d859c',
        count: 1,
        relativeLuminance: 52.67825446662775,
      },
      {
        hex: '#59839c',
        count: 1,
        relativeLuminance: 52.68223436474629,
      },
      {
        hex: '#5d8396',
        count: 1,
        relativeLuminance: 52.68776787885015,
      },
      {
        hex: '#578497',
        count: 2,
        relativeLuminance: 52.689275343181976,
      },
      {
        hex: '#628297',
        count: 1,
        relativeLuminance: 52.725832583757494,
      },
      {
        hex: '#5783a0',
        count: 2,
        relativeLuminance: 52.726495673579365,
      },
      {
        hex: '#52849f',
        count: 1,
        relativeLuminance: 52.729434960204486,
      },
      {
        hex: '#668290',
        count: 1,
        relativeLuminance: 52.7339404913336,
      },
      {
        hex: '#5e848d',
        count: 1,
        relativeLuminance: 52.73574499496357,
      },
      {
        hex: '#658292',
        count: 1,
        relativeLuminance: 52.73793498552973,
      },
      {
        hex: '#4f84a3',
        count: 3,
        relativeLuminance: 52.73997073644594,
      },
      {
        hex: '#5e8396',
        count: 2,
        relativeLuminance: 52.745645981198464,
      },
      {
        hex: '#5683a2',
        count: 1,
        relativeLuminance: 52.751564851929686,
      },
      {
        hex: '#757f8b',
        count: 1,
        relativeLuminance: 52.757138493579205,
      },
      {
        hex: '#5184a1',
        count: 4,
        relativeLuminance: 52.75750825250809,
      },
      {
        hex: '#7b7e85',
        count: 1,
        relativeLuminance: 52.75866406539005,
      },
      {
        hex: '#578499',
        count: 1,
        relativeLuminance: 52.761475623578775,
      },
      {
        hex: '#528598',
        count: 1,
        relativeLuminance: 52.76942162963303,
      },
      {
        hex: '#5583a4',
        count: 2,
        relativeLuminance: 52.77859114213355,
      },
      {
        hex: '#4f84a4',
        count: 1,
        relativeLuminance: 52.77957970734083,
      },
      {
        hex: '#6d818c',
        count: 1,
        relativeLuminance: 52.77962879625015,
      },
      {
        hex: '#56849b',
        count: 1,
        relativeLuminance: 52.78220910476185,
      },
      {
        hex: '#678198',
        count: 1,
        relativeLuminance: 52.78612098818388,
      },
      {
        hex: '#5b839c',
        count: 1,
        relativeLuminance: 52.79268402675683,
      },
      {
        hex: '#598497',
        count: 1,
        relativeLuminance: 52.796746228426116,
      },
      {
        hex: '#5383a7',
        count: 1,
        relativeLuminance: 52.797712229063976,
      },
      {
        hex: '#738089',
        count: 1,
        relativeLuminance: 52.828152933197956,
      },
      {
        hex: '#5b839d',
        count: 2,
        relativeLuminance: 52.83006769830459,
      },
      {
        hex: '#5d839a',
        count: 1,
        relativeLuminance: 52.83202490913901,
      },
      {
        hex: '#57849b',
        count: 2,
        relativeLuminance: 52.83474131900819,
      },
      {
        hex: '#5184a3',
        count: 1,
        relativeLuminance: 52.8357070581106,
      },
      {
        hex: '#5a839f',
        count: 1,
        relativeLuminance: 52.85026361135924,
      },
      {
        hex: '#608396',
        count: 2,
        relativeLuminance: 52.863368875728895,
      },
      {
        hex: '#4686a1',
        count: 1,
        relativeLuminance: 52.867856641025526,
      },
      {
        hex: '#5b8496',
        count: 1,
        relativeLuminance: 52.87135434898117,
      },
      {
        hex: '#5f82a0',
        count: 1,
        relativeLuminance: 52.87962610925074,
      },
      {
        hex: '#5d8493',
        count: 1,
        relativeLuminance: 52.87967371517661,
      },
      {
        hex: '#56849e',
        count: 1,
        relativeLuminance: 52.89427329604699,
      },
      {
        hex: '#5384a2',
        count: 1,
        relativeLuminance: 52.894908067313764,
      },
      {
        hex: '#65838e',
        count: 1,
        relativeLuminance: 52.89724477948042,
      },
      {
        hex: '#688291',
        count: 2,
        relativeLuminance: 52.897637979905895,
      },
      {
        hex: '#678293',
        count: 1,
        relativeLuminance: 52.900661548359594,
      },
      {
        hex: '#638392',
        count: 2,
        relativeLuminance: 52.90631504244831,
      },
      {
        hex: '#5f8399',
        count: 1,
        relativeLuminance: 52.91160968732238,
      },
      {
        hex: '#628394',
        count: 1,
        relativeLuminance: 52.91378427493122,
      },
      {
        hex: '#5a83a1',
        count: 1,
        relativeLuminance: 52.927015873765626,
      },
      {
        hex: '#767f8e',
        count: 1,
        relativeLuminance: 52.93120138784971,
      },
      {
        hex: '#5e858a',
        count: 1,
        relativeLuminance: 52.938241103923346,
      },
      {
        hex: '#5b8498',
        count: 3,
        relativeLuminance: 52.94256971211772,
      },
      {
        hex: '#827c8a',
        count: 1,
        relativeLuminance: 52.94523458509616,
      },
      {
        hex: '#6f818d',
        count: 1,
        relativeLuminance: 52.95289667629727,
      },
      {
        hex: '#558599',
        count: 1,
        relativeLuminance: 52.956345311891155,
      },
      {
        hex: '#5a849a',
        count: 1,
        relativeLuminance: 52.95965115191218,
      },
      {
        hex: '#4f85a1',
        count: 1,
        relativeLuminance: 52.96101852531605,
      },
      {
        hex: '#58849d',
        count: 4,
        relativeLuminance: 52.96214026526151,
      },
      {
        hex: '#53859c',
        count: 1,
        relativeLuminance: 52.96520449963511,
      },
      {
        hex: '#678295',
        count: 1,
        relativeLuminance: 52.97001392459096,
      },
      {
        hex: '#5f839b',
        count: 2,
        relativeLuminance: 52.98455699653732,
      },
      {
        hex: '#5c83a0',
        count: 1,
        relativeLuminance: 52.99977557843836,
      },
      {
        hex: '#62848e',
        count: 2,
        relativeLuminance: 53.006568898173356,
      },
      {
        hex: '#5b849a',
        count: 3,
        relativeLuminance: 53.01484572555165,
      },
      {
        hex: '#55859b',
        count: 1,
        relativeLuminance: 53.02919815204636,
      },
      {
        hex: '#63848d',
        count: 1,
        relativeLuminance: 53.035044067632384,
      },
      {
        hex: '#58849f',
        count: 4,
        relativeLuminance: 53.03741737470726,
      },
      {
        hex: '#5e839e',
        count: 1,
        relativeLuminance: 53.03792638524541,
      },
      {
        hex: '#7e7d8f',
        count: 1,
        relativeLuminance: 53.04351121773301,
      },
      {
        hex: '#768089',
        count: 1,
        relativeLuminance: 53.054441897634476,
      },
      {
        hex: '#668391',
        count: 1,
        relativeLuminance: 53.0606345821236,
      },
      {
        hex: '#5784a1',
        count: 1,
        relativeLuminance: 53.060918607865275,
      },
      {
        hex: '#6b8290',
        count: 1,
        relativeLuminance: 53.06387017642298,
      },
      {
        hex: '#55859c',
        count: 1,
        relativeLuminance: 53.06602199507137,
      },
      {
        hex: '#5a849d',
        count: 3,
        relativeLuminance: 53.070227993629345,
      },
      {
        hex: '#5a8595',
        count: 2,
        relativeLuminance: 53.079098190324785,
      },
      {
        hex: '#6b8199',
        count: 1,
        relativeLuminance: 53.08735991499816,
      },
      {
        hex: '#608494',
        count: 1,
        relativeLuminance: 53.08869168988602,
      },
      {
        hex: '#78817c',
        count: 1,
        relativeLuminance: 53.111984981812114,
      },
      {
        hex: '#5884a1',
        count: 1,
        relativeLuminance: 53.11375475442928,
      },
      {
        hex: '#5385a0',
        count: 1,
        relativeLuminance: 53.11558301350723,
      },
      {
        hex: '#638398',
        count: 1,
        relativeLuminance: 53.11571785180024,
      },
      {
        hex: '#678391',
        count: 2,
        relativeLuminance: 53.124703650603635,
      },
      {
        hex: '#5085a4',
        count: 1,
        relativeLuminance: 53.12510577868008,
      },
      {
        hex: '#5f8497',
        count: 1,
        relativeLuminance: 53.13482037393149,
      },
      {
        hex: '#5e8499',
        count: 1,
        relativeLuminance: 53.148239357723924,
      },
      {
        hex: '#57859c',
        count: 1,
        relativeLuminance: 53.16942471901163,
      },
      {
        hex: '#6e828d',
        count: 1,
        relativeLuminance: 53.17133116658202,
      },
      {
        hex: '#5c849d',
        count: 1,
        relativeLuminance: 53.18091350156118,
      },
      {
        hex: '#5a8598',
        count: 1,
        relativeLuminance: 53.1847776422501,
      },
      {
        hex: '#3b88a4',
        count: 1,
        relativeLuminance: 53.18776272207299,
      },
      {
        hex: '#6b8294',
        count: 1,
        relativeLuminance: 53.19941228424915,
      },
      {
        hex: '#5684a6',
        count: 1,
        relativeLuminance: 53.204794736654605,
      },
      {
        hex: '#57859d',
        count: 2,
        relativeLuminance: 53.20640259538651,
      },
      {
        hex: '#7c7f88',
        count: 1,
        relativeLuminance: 53.212689274229476,
      },
      {
        hex: '#52869c',
        count: 1,
        relativeLuminance: 53.21587096803711,
      },
      {
        hex: '#5e849b',
        count: 2,
        relativeLuminance: 53.220689044080956,
      },
      {
        hex: '#58859c',
        count: 2,
        relativeLuminance: 53.222095416566674,
      },
      {
        hex: '#638493',
        count: 1,
        relativeLuminance: 53.234793510930885,
      },
      {
        hex: '#5085a7',
        count: 2,
        relativeLuminance: 53.24433352415393,
      },
      {
        hex: '#5c8597',
        count: 1,
        relativeLuminance: 53.25972048255606,
      },
      {
        hex: '#6c838b',
        count: 1,
        relativeLuminance: 53.25981829076562,
      },
      {
        hex: '#588695',
        count: 1,
        relativeLuminance: 53.27066643355985,
      },
      {
        hex: '#688581',
        count: 1,
        relativeLuminance: 53.27962738779006,
      },
      {
        hex: '#70828c',
        count: 1,
        relativeLuminance: 53.28002289087817,
      },
      {
        hex: '#57859f',
        count: 2,
        relativeLuminance: 53.28115012473057,
      },
      {
        hex: '#618498',
        count: 2,
        relativeLuminance: 53.288104367171655,
      },
      {
        hex: '#60849a',
        count: 3,
        relativeLuminance: 53.300570713483694,
      },
      {
        hex: '#638495',
        count: 4,
        relativeLuminance: 53.30347909841049,
      },
      {
        hex: '#817e87',
        count: 1,
        relativeLuminance: 53.31756149068386,
      },
      {
        hex: '#578698',
        count: 1,
        relativeLuminance: 53.3233261487627,
      },
      {
        hex: '#5086a2',
        count: 1,
        relativeLuminance: 53.345917328982495,
      },
      {
        hex: '#5b859b',
        count: 1,
        relativeLuminance: 53.347496030603736,
      },
      {
        hex: '#65839b',
        count: 1,
        relativeLuminance: 53.347600629450085,
      },
      {
        hex: '#5884a7',
        count: 1,
        relativeLuminance: 53.34911217906139,
      },
      {
        hex: '#59859e',
        count: 2,
        relativeLuminance: 53.34940532270633,
      },
      {
        hex: '#54869d',
        count: 1,
        relativeLuminance: 53.35135995242152,
      },
      {
        hex: '#5485a5',
        count: 1,
        relativeLuminance: 53.35909862660863,
      },
      {
        hex: '#678398',
        count: 1,
        relativeLuminance: 53.366316607435536,
      },
      {
        hex: '#638497',
        count: 1,
        relativeLuminance: 53.37321515366962,
      },
      {
        hex: '#60849c',
        count: 1,
        relativeLuminance: 53.37330383130438,
      },
      {
        hex: '#5685a3',
        count: 1,
        relativeLuminance: 53.38217875022539,
      },
      {
        hex: '#5f849e',
        count: 2,
        relativeLuminance: 53.388891710373485,
      },
      {
        hex: '#75818d',
        count: 1,
        relativeLuminance: 53.39047211205802,
      },
      {
        hex: '#57869a',
        count: 2,
        relativeLuminance: 53.39481162096473,
      },
      {
        hex: '#5c859b',
        count: 2,
        relativeLuminance: 53.40280752321843,
      },
      {
        hex: '#5985a0',
        count: 1,
        relativeLuminance: 53.424451262463094,
      },
      {
        hex: '#5385a8',
        count: 1,
        relativeLuminance: 53.429028938391994,
      },
      {
        hex: '#5885a2',
        count: 2,
        relativeLuminance: 53.44757710686717,
      },
      {
        hex: '#4e86a7',
        count: 1,
        relativeLuminance: 53.449213183310434,
      },
      {
        hex: '#56869d',
        count: 3,
        relativeLuminance: 53.4524849958175,
      },
      {
        hex: '#6c8391',
        count: 1,
        relativeLuminance: 53.45478132708753,
      },
      {
        hex: '#5b859e',
        count: 4,
        relativeLuminance: 53.45774503069076,
      },
      {
        hex: '#638591',
        count: 1,
        relativeLuminance: 53.46228959950966,
      },
      {
        hex: '#548798',
        count: 1,
        relativeLuminance: 53.47061527255782,
      },
      {
        hex: '#618595',
        count: 1,
        relativeLuminance: 53.47773919377798,
      },
      {
        hex: '#6d8390',
        count: 1,
        relativeLuminance: 53.489652904801105,
      },
      {
        hex: '#5985a2',
        count: 1,
        relativeLuminance: 53.5005485880116,
      },
      {
        hex: '#5c8696',
        count: 1,
        relativeLuminance: 53.52205747433139,
      },
      {
        hex: '#608598',
        count: 2,
        relativeLuminance: 53.52349830432337,
      },
      {
        hex: '#59869b',
        count: 1,
        relativeLuminance: 53.53614068420174,
      },
      {
        hex: '#5f859a',
        count: 2,
        relativeLuminance: 53.536623120363245,
      },
      {
        hex: '#5785a6',
        count: 1,
        relativeLuminance: 53.551061048655654,
      },
      {
        hex: '#708482',
        count: 1,
        relativeLuminance: 53.55591210830397,
      },
      {
        hex: '#58869d',
        count: 1,
        relativeLuminance: 53.55617465520949,
      },
      {
        hex: '#5d859e',
        count: 1,
        relativeLuminance: 53.568661332020056,
      },
      {
        hex: '#5b8699',
        count: 4,
        relativeLuminance: 53.57233016405874,
      },
      {
        hex: '#67858d',
        count: 1,
        relativeLuminance: 53.58034930601326,
      },
      {
        hex: '#58869e',
        count: 2,
        relativeLuminance: 53.593043200469566,
      },
      {
        hex: '#6a8399',
        count: 1,
        relativeLuminance: 53.596432067338895,
      },
      {
        hex: '#74828d',
        count: 1,
        relativeLuminance: 53.60145509902618,
      },
      {
        hex: '#62849f',
        count: 1,
        relativeLuminance: 53.60257967451231,
      },
      {
        hex: '#5d859f',
        count: 1,
        relativeLuminance: 53.60581765931158,
      },
      {
        hex: '#5f859c',
        count: 2,
        relativeLuminance: 53.608864038016804,
      },
      {
        hex: '#59869d',
        count: 1,
        relativeLuminance: 53.60898104567795,
      },
      {
        hex: '#6a8491',
        count: 1,
        relativeLuminance: 53.6118487433947,
      },
      {
        hex: '#6e829a',
        count: 1,
        relativeLuminance: 53.614340332908355,
      },
      {
        hex: '#658592',
        count: 1,
        relativeLuminance: 53.61834247633172,
      },
      {
        hex: '#5f8695',
        count: 1,
        relativeLuminance: 53.6568973611664,
      },
      {
        hex: '#4c87a7',
        count: 1,
        relativeLuminance: 53.658451347728246,
      },
      {
        hex: '#5a85a5',
        count: 1,
        relativeLuminance: 53.670098001859984,
      },
      {
        hex: '#53879f',
        count: 1,
        relativeLuminance: 53.67526379206856,
      },
      {
        hex: '#6a8493',
        count: 2,
        relativeLuminance: 53.678623221603246,
      },
      {
        hex: '#61859b',
        count: 1,
        relativeLuminance: 53.689036864899236,
      },
      {
        hex: '#5786a2',
        count: 2,
        relativeLuminance: 53.691247686686054,
      },
      {
        hex: '#6e8394',
        count: 1,
        relativeLuminance: 53.69194189843239,
      },
      {
        hex: '#5b8794',
        count: 1,
        relativeLuminance: 53.69675833936694,
      },
      {
        hex: '#5e8886',
        count: 1,
        relativeLuminance: 53.71712688385402,
      },
      {
        hex: '#5d869a',
        count: 1,
        relativeLuminance: 53.718423876526316,
      },
      {
        hex: '#5c869c',
        count: 1,
        relativeLuminance: 53.73486319276623,
      },
      {
        hex: '#66849c',
        count: 1,
        relativeLuminance: 53.73679235981842,
      },
      {
        hex: '#55879e',
        count: 1,
        relativeLuminance: 53.7370640264802,
      },
      {
        hex: '#6e8396',
        count: 1,
        relativeLuminance: 53.76031654298566,
      },
      {
        hex: '#6d8398',
        count: 1,
        relativeLuminance: 53.76160320728469,
      },
      {
        hex: '#708392',
        count: 1,
        relativeLuminance: 53.763590477989666,
      },
      {
        hex: '#60859f',
        count: 1,
        relativeLuminance: 53.77683412118665,
      },
      {
        hex: '#4e88a0',
        count: 1,
        relativeLuminance: 53.77793281789745,
      },
      {
        hex: '#58879b',
        count: 2,
        relativeLuminance: 53.78127234487039,
      },
      {
        hex: '#698590',
        count: 1,
        relativeLuminance: 53.80554135933704,
      },
      {
        hex: '#5c869e',
        count: 2,
        relativeLuminance: 53.80788608623986,
      },
      {
        hex: '#5a86a1',
        count: 2,
        relativeLuminance: 53.81101957230389,
      },
      {
        hex: '#67868b',
        count: 1,
        relativeLuminance: 53.81184854698266,
      },
      {
        hex: '#65868f',
        count: 1,
        relativeLuminance: 53.814225828144544,
      },
      {
        hex: '#5f8791',
        count: 1,
        relativeLuminance: 53.81967993213179,
      },
      {
        hex: '#5986a3',
        count: 1,
        relativeLuminance: 53.83377576572545,
      },
      {
        hex: '#5487a2',
        count: 1,
        relativeLuminance: 53.83699061116819,
      },
      {
        hex: '#698591',
        count: 1,
        relativeLuminance: 53.83832463473641,
      },
      {
        hex: '#57879e',
        count: 4,
        relativeLuminance: 53.838490680723964,
      },
      {
        hex: '#5d8795',
        count: 1,
        relativeLuminance: 53.84086228446321,
      },
      {
        hex: '#668597',
        count: 1,
        relativeLuminance: 53.8506484662834,
      },
      {
        hex: '#608699',
        count: 2,
        relativeLuminance: 53.85352206889884,
      },
      {
        hex: '#6584a1',
        count: 1,
        relativeLuminance: 53.85942903100916,
      },
      {
        hex: '#618698',
        count: 1,
        relativeLuminance: 53.87663307425207,
      },
      {
        hex: '#5587a2',
        count: 1,
        relativeLuminance: 53.88653698022647,
      },
      {
        hex: '#698593',
        count: 1,
        relativeLuminance: 53.9046673509435,
      },
      {
        hex: '#588896',
        count: 1,
        relativeLuminance: 53.90481108574518,
      },
      {
        hex: '#5088a1',
        count: 1,
        relativeLuminance: 53.90690535614746,
      },
      {
        hex: '#5986a5',
        count: 1,
        relativeLuminance: 53.91079399834439,
      },
      {
        hex: '#60869b',
        count: 1,
        relativeLuminance: 53.92451837800343,
      },
      {
        hex: '#59879e',
        count: 1,
        relativeLuminance: 53.94246161217984,
      },
      {
        hex: '#5c879a',
        count: 2,
        relativeLuminance: 53.9594067762182,
      },
      {
        hex: '#628790',
        count: 1,
        relativeLuminance: 53.96140713481954,
      },
      {
        hex: '#4d88a6',
        count: 1,
        relativeLuminance: 53.96251306200844,
      },
      {
        hex: '#6285a1',
        count: 1,
        relativeLuminance: 53.968533029438476,
      },
      {
        hex: '#69868c',
        count: 1,
        relativeLuminance: 53.97062115847348,
      },
      {
        hex: '#76838b',
        count: 1,
        relativeLuminance: 53.97203403273714,
      },
      {
        hex: '#5e86a0',
        count: 2,
        relativeLuminance: 53.99297532763046,
      },
      {
        hex: '#5a879e',
        count: 2,
        relativeLuminance: 53.99540096859826,
      },
      {
        hex: '#5887a1',
        count: 1,
        relativeLuminance: 54.00138430393143,
      },
      {
        hex: '#5d86a2',
        count: 1,
        relativeLuminance: 54.01213168461014,
      },
      {
        hex: '#4b89a2',
        count: 1,
        relativeLuminance: 54.02255978703157,
      },
      {
        hex: '#598898',
        count: 1,
        relativeLuminance: 54.026117908073346,
      },
      {
        hex: '#638699',
        count: 1,
        relativeLuminance: 54.02992334009437,
      },
      {
        hex: '#688690',
        count: 1,
        relativeLuminance: 54.03428998934818,
      },
      {
        hex: '#5e8799',
        count: 1,
        relativeLuminance: 54.03500054011883,
      },
      {
        hex: '#5987a1',
        count: 1,
        relativeLuminance: 54.05352188153235,
      },
      {
        hex: '#7a828d',
        count: 1,
        relativeLuminance: 54.05450168105207,
      },
      {
        hex: '#5488a0',
        count: 1,
        relativeLuminance: 54.06009472517597,
      },
      {
        hex: '#688691',
        count: 1,
        relativeLuminance: 54.06685960785536,
      },
      {
        hex: '#6a8596',
        count: 2,
        relativeLuminance: 54.07073067699859,
      },
      {
        hex: '#5887a3',
        count: 1,
        relativeLuminance: 54.07683321045758,
      },
      {
        hex: '#62869c',
        count: 2,
        relativeLuminance: 54.07701147190619,
      },
      {
        hex: '#658697',
        count: 2,
        relativeLuminance: 54.08135169157991,
      },
      {
        hex: '#5a86a9',
        count: 1,
        relativeLuminance: 54.1207009768616,
      },
      {
        hex: '#5d879d',
        count: 3,
        relativeLuminance: 54.12175560849319,
      },
      {
        hex: '#5b87a0',
        count: 1,
        relativeLuminance: 54.12253286208826,
      },
      {
        hex: '#5687a7',
        count: 1,
        relativeLuminance: 54.12913732057159,
      },
      {
        hex: '#62869e',
        count: 1,
        relativeLuminance: 54.1493241454626,
      },
      {
        hex: '#5887a5',
        count: 1,
        relativeLuminance: 54.15331897645649,
      },
      {
        hex: '#718493',
        count: 1,
        relativeLuminance: 54.15390826445454,
      },
      {
        hex: '#5d86a6',
        count: 1,
        relativeLuminance: 54.16521978494943,
      },
      {
        hex: '#77838f',
        count: 1,
        relativeLuminance: 54.17281087074291,
      },
      {
        hex: '#5e879d',
        count: 3,
        relativeLuminance: 54.17729351439492,
      },
      {
        hex: '#58889e',
        count: 1,
        relativeLuminance: 54.187537127073,
      },
      {
        hex: '#728492',
        count: 1,
        relativeLuminance: 54.191350246349074,
      },
      {
        hex: '#5d879f',
        count: 3,
        relativeLuminance: 54.19456743670631,
      },
      {
        hex: '#6a8691',
        count: 1,
        relativeLuminance: 54.19498404956265,
      },
      {
        hex: '#6b868f',
        count: 1,
        relativeLuminance: 54.19547472442022,
      },
      {
        hex: '#6c849e',
        count: 1,
        relativeLuminance: 54.19561325330535,
      },
      {
        hex: '#5b87a2',
        count: 2,
        relativeLuminance: 54.19712502011116,
      },
      {
        hex: '#608892',
        count: 1,
        relativeLuminance: 54.20737700378443,
      },
      {
        hex: '#5a87a4',
        count: 1,
        relativeLuminance: 54.219517179799496,
      },
      {
        hex: '#6286a0',
        count: 1,
        relativeLuminance: 54.22267101336402,
      },
      {
        hex: '#6a8692',
        count: 2,
        relativeLuminance: 54.227691370008856,
      },
      {
        hex: '#5d87a0',
        count: 4,
        relativeLuminance: 54.23136096198823,
      },
      {
        hex: '#5b889b',
        count: 1,
        relativeLuminance: 54.23753760497003,
      },
      {
        hex: '#678698',
        count: 2,
        relativeLuminance: 54.239366737414315,
      },
      {
        hex: '#61879a',
        count: 1,
        relativeLuminance: 54.24112709907058,
      },
      {
        hex: '#818376',
        count: 1,
        relativeLuminance: 54.24672138639933,
      },
      {
        hex: '#638797',
        count: 1,
        relativeLuminance: 54.25434191019583,
      },
      {
        hex: '#6b8691',
        count: 1,
        relativeLuminance: 54.259999896443304,
      },
      {
        hex: '#768394',
        count: 1,
        relativeLuminance: 54.262046000723515,
      },
      {
        hex: '#7f8190',
        count: 1,
        relativeLuminance: 54.26614224289807,
      },
      {
        hex: '#5d8899',
        count: 2,
        relativeLuminance: 54.27586363035489,
      },
      {
        hex: '#5388a7',
        count: 1,
        relativeLuminance: 54.27792490247799,
      },
      {
        hex: '#6a8694',
        count: 1,
        relativeLuminance: 54.293875672573975,
      },
      {
        hex: '#5e8898',
        count: 2,
        relativeLuminance: 54.29652562221975,
      },
      {
        hex: '#6f8593',
        count: 1,
        relativeLuminance: 54.30299850648544,
      },
      {
        hex: '#67869a',
        count: 2,
        relativeLuminance: 54.309002553714606,
      },
      {
        hex: '#61879c',
        count: 2,
        relativeLuminance: 54.311928349103084,
      },
      {
        hex: '#56899c',
        count: 1,
        relativeLuminance: 54.31237164842011,
      },
      {
        hex: '#5388a8',
        count: 1,
        relativeLuminance: 54.31702075708161,
      },
      {
        hex: '#79838f',
        count: 1,
        relativeLuminance: 54.32359189465217,
      },
      {
        hex: '#5f87a0',
        count: 2,
        relativeLuminance: 54.34272416200383,
      },
      {
        hex: '#67869b',
        count: 1,
        relativeLuminance: 54.344206385374804,
      },
      {
        hex: '#6a878d',
        count: 1,
        relativeLuminance: 54.35985684309793,
      },
      {
        hex: '#5a88a0',
        count: 2,
        relativeLuminance: 54.364942122956734,
      },
      {
        hex: '#5588a7',
        count: 1,
        relativeLuminance: 54.37501902770684,
      },
      {
        hex: '#818286',
        count: 1,
        relativeLuminance: 54.400209300463914,
      },
      {
        hex: '#5f889a',
        count: 3,
        relativeLuminance: 54.42192068098623,
      },
      {
        hex: '#5389a3',
        count: 1,
        relativeLuminance: 54.422293319271375,
      },
      {
        hex: '#5b8998',
        count: 1,
        relativeLuminance: 54.43047710820041,
      },
      {
        hex: '#5788a6',
        count: 3,
        relativeLuminance: 54.435997991782315,
      },
      {
        hex: '#5a88a2',
        count: 2,
        relativeLuminance: 54.4390220324493,
      },
      {
        hex: '#4e8aa2',
        count: 1,
        relativeLuminance: 54.45441359940388,
      },
      {
        hex: '#63879d',
        count: 3,
        relativeLuminance: 54.46449783144779,
      },
      {
        hex: '#59899d',
        count: 1,
        relativeLuminance: 54.50070736830661,
      },
      {
        hex: '#618899',
        count: 1,
        relativeLuminance: 54.50083802624893,
      },
      {
        hex: '#5e889e',
        count: 2,
        relativeLuminance: 54.50817622402998,
      },
      {
        hex: '#86808e',
        count: 1,
        relativeLuminance: 54.511362913968256,
      },
      {
        hex: '#5788a8',
        count: 1,
        relativeLuminance: 54.513497139352936,
      },
      {
        hex: '#5988a6',
        count: 2,
        relativeLuminance: 54.53821627042794,
      },
      {
        hex: '#508aa2',
        count: 1,
        relativeLuminance: 54.54420388078643,
      },
      {
        hex: '#5f8995',
        count: 1,
        relativeLuminance: 54.54742041685306,
      },
      {
        hex: '#6287a1',
        count: 1,
        relativeLuminance: 54.551269910353824,
      },
      {
        hex: '#5a899d',
        count: 1,
        relativeLuminance: 54.55281259310547,
      },
      {
        hex: '#59899f',
        count: 1,
        relativeLuminance: 54.57273974945858,
      },
      {
        hex: '#738593',
        count: 1,
        relativeLuminance: 54.5812096999927,
      },
      {
        hex: '#638898',
        count: 1,
        relativeLuminance: 54.5827624117118,
      },
      {
        hex: '#6b8792',
        count: 1,
        relativeLuminance: 54.5839134739459,
      },
      {
        hex: '#678891',
        count: 1,
        relativeLuminance: 54.59137862579284,
      },
      {
        hex: '#7c8487',
        count: 1,
        relativeLuminance: 54.59207457527344,
      },
      {
        hex: '#528aa1',
        count: 1,
        relativeLuminance: 54.59950896777512,
      },
      {
        hex: '#5989a0',
        count: 2,
        relativeLuminance: 54.609140311280825,
      },
      {
        hex: '#5f8997',
        count: 1,
        relativeLuminance: 54.614722399344345,
      },
      {
        hex: '#6b8793',
        count: 1,
        relativeLuminance: 54.61654570181082,
      },
      {
        hex: '#5e88a1',
        count: 3,
        relativeLuminance: 54.6174656181302,
      },
      {
        hex: '#7a848d',
        count: 1,
        relativeLuminance: 54.61953082994951,
      },
      {
        hex: '#578a9b',
        count: 1,
        relativeLuminance: 54.6263757688139,
      },
      {
        hex: '#6f878b',
        count: 1,
        relativeLuminance: 54.628233487444746,
      },
      {
        hex: '#648898',
        count: 1,
        relativeLuminance: 54.64190395196657,
      },
      {
        hex: '#6c8792',
        count: 1,
        relativeLuminance: 54.64896324864857,
      },
      {
        hex: '#7a848e',
        count: 1,
        relativeLuminance: 54.650718152515736,
      },
      {
        hex: '#63889a',
        count: 1,
        relativeLuminance: 54.65172329070688,
      },
      {
        hex: '#6e878e',
        count: 1,
        relativeLuminance: 54.65367745889604,
      },
      {
        hex: '#5c88a5',
        count: 1,
        relativeLuminance: 54.65816525542405,
      },
      {
        hex: '#5489a8',
        count: 1,
        relativeLuminance: 54.66134260553579,
      },
      {
        hex: '#72868f',
        count: 1,
        relativeLuminance: 54.66913685197511,
      },
      {
        hex: '#67879c',
        count: 2,
        relativeLuminance: 54.67021870353267,
      },
      {
        hex: '#5689a6',
        count: 2,
        relativeLuminance: 54.68179870640853,
      },
      {
        hex: '#6a8797',
        count: 1,
        relativeLuminance: 54.68550077146995,
      },
      {
        hex: '#63889b',
        count: 1,
        relativeLuminance: 54.686586666532975,
      },
      {
        hex: '#5c899e',
        count: 1,
        relativeLuminance: 54.69463322496104,
      },
      {
        hex: '#5b89a0',
        count: 1,
        relativeLuminance: 54.71365730138788,
      },
      {
        hex: '#748595',
        count: 1,
        relativeLuminance: 54.71829276924835,
      },
      {
        hex: '#6088a1',
        count: 1,
        relativeLuminance: 54.72904514996141,
      },
      {
        hex: '#5e899c',
        count: 4,
        relativeLuminance: 54.73214408093547,
      },
      {
        hex: '#648992',
        count: 1,
        relativeLuminance: 54.73699459215197,
      },
      {
        hex: '#638994',
        count: 1,
        relativeLuminance: 54.74335692897722,
      },
      {
        hex: '#5b89a1',
        count: 1,
        relativeLuminance: 54.75020573837698,
      },
      {
        hex: '#7d848a',
        count: 1,
        relativeLuminance: 54.7593560628834,
      },
      {
        hex: '#5c89a0',
        count: 3,
        relativeLuminance: 54.76685465392815,
      },
      {
        hex: '#62889f',
        count: 4,
        relativeLuminance: 54.77048600840942,
      },
      {
        hex: '#5a89a3',
        count: 1,
        relativeLuminance: 54.77166095655866,
      },
      {
        hex: '#778590',
        count: 2,
        relativeLuminance: 54.77300004611672,
      },
      {
        hex: '#5f8a93',
        count: 1,
        relativeLuminance: 54.779050674452535,
      },
      {
        hex: '#6d8794',
        count: 1,
        relativeLuminance: 54.77991919282415,
      },
      {
        hex: '#738599',
        count: 1,
        relativeLuminance: 54.78254560972151,
      },
      {
        hex: '#78858e',
        count: 1,
        relativeLuminance: 54.78391444249948,
      },
      {
        hex: '#688895',
        count: 2,
        relativeLuminance: 54.78410126974687,
      },
      {
        hex: '#5f88a4',
        count: 1,
        relativeLuminance: 54.784360639158166,
      },
      {
        hex: '#60899b',
        count: 2,
        relativeLuminance: 54.808364994777946,
      },
      {
        hex: '#6b8890',
        count: 1,
        relativeLuminance: 54.81154067994525,
      },
      {
        hex: '#5889a7',
        count: 1,
        relativeLuminance: 54.82016536688903,
      },
      {
        hex: '#5b89a3',
        count: 2,
        relativeLuminance: 54.824068489275575,
      },
      {
        hex: '#65889c',
        count: 1,
        relativeLuminance: 54.84015261069416,
      },
      {
        hex: '#6a8893',
        count: 1,
        relativeLuminance: 54.84404432060954,
      },
      {
        hex: '#6d8796',
        count: 1,
        relativeLuminance: 54.84621093187512,
      },
      {
        hex: '#5c8a9a',
        count: 1,
        relativeLuminance: 54.85056306562976,
      },
      {
        hex: '#688897',
        count: 3,
        relativeLuminance: 54.85095456613627,
      },
      {
        hex: '#64889e',
        count: 1,
        relativeLuminance: 54.85149920733865,
      },
      {
        hex: '#60899d',
        count: 2,
        relativeLuminance: 54.87861529387381,
      },
      {
        hex: '#85828b',
        count: 1,
        relativeLuminance: 54.88218907408523,
      },
      {
        hex: '#62899a',
        count: 1,
        relativeLuminance: 54.887569173963016,
      },
      {
        hex: '#5d89a2',
        count: 1,
        relativeLuminance: 54.89380868506916,
      },
      {
        hex: '#658995',
        count: 1,
        relativeLuminance: 54.89467492128618,
      },
      {
        hex: '#5889a9',
        count: 1,
        relativeLuminance: 54.89742025170844,
      },
      {
        hex: '#738694',
        count: 1,
        relativeLuminance: 54.90006003297053,
      },
      {
        hex: '#748692',
        count: 1,
        relativeLuminance: 54.90561834443626,
      },
      {
        hex: '#65889e',
        count: 1,
        relativeLuminance: 54.91091799933565,
      },
      {
        hex: '#6c879a',
        count: 1,
        relativeLuminance: 54.916652469234094,
      },
      {
        hex: '#6488a0',
        count: 1,
        relativeLuminance: 54.92340167843403,
      },
      {
        hex: '#5d89a4',
        count: 2,
        relativeLuminance: 54.96795810748877,
      },
      {
        hex: '#6a898e',
        count: 1,
        relativeLuminance: 54.977949876525315,
      },
      {
        hex: '#4f8ba7',
        count: 1,
        relativeLuminance: 54.98728171020316,
      },
      {
        hex: '#578aa5',
        count: 1,
        relativeLuminance: 54.98964019517878,
      },
      {
        hex: '#5a8aa1',
        count: 1,
        relativeLuminance: 54.9937893275453,
      },
      {
        hex: '#858386',
        count: 1,
        relativeLuminance: 55.010869051999705,
      },
      {
        hex: '#708795',
        count: 3,
        relativeLuminance: 55.01318176285804,
      },
      {
        hex: '#5f8a9a',
        count: 1,
        relativeLuminance: 55.01352348054286,
      },
      {
        hex: '#798593',
        count: 1,
        relativeLuminance: 55.01728057108184,
      },
      {
        hex: '#74878d',
        count: 1,
        relativeLuminance: 55.03527555210802,
      },
      {
        hex: '#6d8893',
        count: 3,
        relativeLuminance: 55.037415886485306,
      },
      {
        hex: '#588aa5',
        count: 1,
        relativeLuminance: 55.03964735802276,
      },
      {
        hex: '#5a8b9a',
        count: 1,
        relativeLuminance: 55.043475746393,
      },
      {
        hex: '#718794',
        count: 1,
        relativeLuminance: 55.048406877261755,
      },
      {
        hex: '#778787',
        count: 1,
        relativeLuminance: 55.07146637829699,
      },
      {
        hex: '#64899c',
        count: 2,
        relativeLuminance: 55.07331192477953,
      },
      {
        hex: '#6c898d',
        count: 1,
        relativeLuminance: 55.074967537446824,
      },
      {
        hex: '#708797',
        count: 1,
        relativeLuminance: 55.07960503700987,
      },
      {
        hex: '#718795',
        count: 1,
        relativeLuminance: 55.08117702948151,
      },
      {
        hex: '#63899e',
        count: 2,
        relativeLuminance: 55.085305151673,
      },
      {
        hex: '#6188a9',
        count: 1,
        relativeLuminance: 55.08704226391254,
      },
      {
        hex: '#698994',
        count: 1,
        relativeLuminance: 55.10600029511802,
      },
      {
        hex: '#6189a2',
        count: 1,
        relativeLuminance: 55.11489647043197,
      },
      {
        hex: '#5f8a9d',
        count: 1,
        relativeLuminance: 55.11781061802586,
      },
      {
        hex: '#5c8aa2',
        count: 1,
        relativeLuminance: 55.135015628242215,
      },
      {
        hex: '#6189a3',
        count: 1,
        relativeLuminance: 55.15161476216959,
      },
      {
        hex: '#5d8aa1',
        count: 1,
        relativeLuminance: 55.15189384925347,
      },
      {
        hex: '#5b8aa4',
        count: 2,
        relativeLuminance: 55.15612527591621,
      },
      {
        hex: '#698996',
        count: 1,
        relativeLuminance: 55.171686262446045,
      },
      {
        hex: '#66899c',
        count: 1,
        relativeLuminance: 55.19203324662175,
      },
      {
        hex: '#6b8993',
        count: 1,
        relativeLuminance: 55.199529694515576,
      },
      {
        hex: '#6c8991',
        count: 1,
        relativeLuminance: 55.19962746500522,
      },
      {
        hex: '#598aa8',
        count: 1,
        relativeLuminance: 55.203895279849164,
      },
      {
        hex: '#718890',
        count: 1,
        relativeLuminance: 55.208705808744995,
      },
      {
        hex: '#7e858d',
        count: 1,
        relativeLuminance: 55.209854027349365,
      },
      {
        hex: '#66899d',
        count: 1,
        relativeLuminance: 55.226941387447624,
      },
      {
        hex: '#6e8897',
        count: 1,
        relativeLuminance: 55.23438498291107,
      },
      {
        hex: '#65899f',
        count: 1,
        relativeLuminance: 55.23801883053768,
      },
      {
        hex: '#68899a',
        count: 1,
        relativeLuminance: 55.244421262830045,
      },
      {
        hex: '#6089a7',
        count: 1,
        relativeLuminance: 55.24510477213737,
      },
      {
        hex: '#86838c',
        count: 1,
        relativeLuminance: 55.27199589259817,
      },
      {
        hex: '#5e8aa3',
        count: 1,
        relativeLuminance: 55.278759026854786,
      },
      {
        hex: '#608aa0',
        count: 2,
        relativeLuminance: 55.27961372007418,
      },
      {
        hex: '#668a96',
        count: 2,
        relativeLuminance: 55.28158717646798,
      },
      {
        hex: '#66899f',
        count: 1,
        relativeLuminance: 55.29751454466337,
      },
      {
        hex: '#6e8899',
        count: 1,
        relativeLuminance: 55.30152547772771,
      },
      {
        hex: '#6d889b',
        count: 1,
        relativeLuminance: 55.30445593133399,
      },
      {
        hex: '#6c889d',
        count: 1,
        relativeLuminance: 55.30926383804153,
      },
      {
        hex: '#598aab',
        count: 1,
        relativeLuminance: 55.31979486550111,
      },
      {
        hex: '#5c8b9f',
        count: 1,
        relativeLuminance: 55.32252898694233,
      },
      {
        hex: '#6489a3',
        count: 2,
        relativeLuminance: 55.32379445171736,
      },
      {
        hex: '#618aa0',
        count: 1,
        relativeLuminance: 55.33547353165255,
      },
      {
        hex: '#558ca1',
        count: 1,
        relativeLuminance: 55.3398296270543,
      },
      {
        hex: '#5b8ba1',
        count: 1,
        relativeLuminance: 55.34179477258502,
      },
      {
        hex: '#608aa2',
        count: 3,
        relativeLuminance: 55.3518075015737,
      },
      {
        hex: '#5e8aa5',
        count: 1,
        relativeLuminance: 55.35269109243042,
      },
      {
        hex: '#76888a',
        count: 1,
        relativeLuminance: 55.3747535116823,
      },
      {
        hex: '#6d8995',
        count: 1,
        relativeLuminance: 55.39273232105586,
      },
      {
        hex: '#5e8b9e',
        count: 2,
        relativeLuminance: 55.39384140682155,
      },
      {
        hex: '#608b9b',
        count: 1,
        relativeLuminance: 55.39899463656383,
      },
      {
        hex: '#648a9d',
        count: 3,
        relativeLuminance: 55.40104835925854,
      },
      {
        hex: '#688a96',
        count: 1,
        relativeLuminance: 55.40249566032362,
      },
      {
        hex: '#668a9a',
        count: 1,
        relativeLuminance: 55.415566203173924,
      },
      {
        hex: '#8a828f',
        count: 1,
        relativeLuminance: 55.43277715404666,
      },
      {
        hex: '#82858a',
        count: 1,
        relativeLuminance: 55.437013514195016,
      },
      {
        hex: '#83867d',
        count: 1,
        relativeLuminance: 55.43731458115546,
      },
      {
        hex: '#69899e',
        count: 3,
        relativeLuminance: 55.444494261186705,
      },
      {
        hex: '#6b8b88',
        count: 1,
        relativeLuminance: 55.45000909252644,
      },
      {
        hex: '#618b9b',
        count: 1,
        relativeLuminance: 55.45466802454169,
      },
      {
        hex: '#6d8997',
        count: 1,
        relativeLuminance: 55.45845218449553,
      },
      {
        hex: '#6c8999',
        count: 1,
        relativeLuminance: 55.460976251742835,
      },
      {
        hex: '#648a9f',
        count: 2,
        relativeLuminance: 55.47127826680821,
      },
      {
        hex: '#6a899d',
        count: 1,
        relativeLuminance: 55.47161129134011,
      },
      {
        hex: '#81858e',
        count: 1,
        relativeLuminance: 55.477076023951795,
      },
      {
        hex: '#798790',
        count: 1,
        relativeLuminance: 55.48861422462936,
      },
      {
        hex: '#7c8692',
        count: 1,
        relativeLuminance: 55.49278100274739,
      },
      {
        hex: '#82858c',
        count: 1,
        relativeLuminance: 55.496578252486344,
      },
      {
        hex: '#798699',
        count: 1,
        relativeLuminance: 55.49730726332163,
      },
      {
        hex: '#628aa3',
        count: 1,
        relativeLuminance: 55.50028105502844,
      },
      {
        hex: '#608b9e',
        count: 2,
        relativeLuminance: 55.50301293451997,
      },
      {
        hex: '#6a899e',
        count: 1,
        relativeLuminance: 55.50653161326015,
      },
      {
        hex: '#668b94',
        count: 1,
        relativeLuminance: 55.51062453631549,
      },
      {
        hex: '#6c8a92',
        count: 1,
        relativeLuminance: 55.52312604946815,
      },
      {
        hex: '#598ca1',
        count: 1,
        relativeLuminance: 55.5361396608006,
      },
      {
        hex: '#628aa4',
        count: 1,
        relativeLuminance: 55.53689315215291,
      },
      {
        hex: '#6789a4',
        count: 1,
        relativeLuminance: 55.53817114914084,
      },
      {
        hex: '#878392',
        count: 1,
        relativeLuminance: 55.541828529601986,
      },
      {
        hex: '#648aa1',
        count: 2,
        relativeLuminance: 55.542512797350625,
      },
      {
        hex: '#82858e',
        count: 1,
        relativeLuminance: 55.557133897705526,
      },
      {
        hex: '#768799',
        count: 1,
        relativeLuminance: 55.56274997195307,
      },
      {
        hex: '#5d8c9c',
        count: 1,
        relativeLuminance: 55.56703468982751,
      },
      {
        hex: '#638c92',
        count: 1,
        relativeLuminance: 55.56755848131739,
      },
      {
        hex: '#678a9d',
        count: 1,
        relativeLuminance: 55.57843123017855,
      },
      {
        hex: '#89857a',
        count: 1,
        relativeLuminance: 55.58220859119302,
      },
      {
        hex: '#6989a2',
        count: 1,
        relativeLuminance: 55.5869294793267,
      },
      {
        hex: '#6d8a92',
        count: 1,
        relativeLuminance: 55.58721130210266,
      },
      {
        hex: '#5d8ba5',
        count: 1,
        relativeLuminance: 55.59281060323666,
      },
      {
        hex: '#7a8888',
        count: 1,
        relativeLuminance: 55.607487532440075,
      },
      {
        hex: '#678a9e',
        count: 1,
        relativeLuminance: 55.61324747931012,
      },
      {
        hex: '#7e8691',
        count: 1,
        relativeLuminance: 55.61426577283605,
      },
      {
        hex: '#6c8a95',
        count: 2,
        relativeLuminance: 55.61921709040496,
      },
      {
        hex: '#5e8c9c',
        count: 1,
        relativeLuminance: 55.62035460092861,
      },
      {
        hex: '#668aa0',
        count: 1,
        relativeLuminance: 55.62405989942769,
      },
      {
        hex: '#6a8a99',
        count: 1,
        relativeLuminance: 55.62531056447136,
      },
      {
        hex: '#668c8f',
        count: 1,
        relativeLuminance: 55.64871137639342,
      },
      {
        hex: '#628b9f',
        count: 2,
        relativeLuminance: 55.649718292223085,
      },
      {
        hex: '#648b9c',
        count: 1,
        relativeLuminance: 55.65960016944517,
      },
      {
        hex: '#5f8ba4',
        count: 1,
        relativeLuminance: 55.66325459035667,
      },
      {
        hex: '#678aa0',
        count: 1,
        relativeLuminance: 55.68363068850468,
      },
      {
        hex: '#6f899a',
        count: 1,
        relativeLuminance: 55.689031281624835,
      },
      {
        hex: '#698b94',
        count: 1,
        relativeLuminance: 55.69175620313142,
      },
      {
        hex: '#6d899e',
        count: 1,
        relativeLuminance: 55.696350930745155,
      },
      {
        hex: '#698a9d',
        count: 2,
        relativeLuminance: 55.69977598458813,
      },
      {
        hex: '#868491',
        count: 1,
        relativeLuminance: 55.70044186857211,
      },
      {
        hex: '#638aa7',
        count: 1,
        relativeLuminance: 55.704927617426435,
      },
      {
        hex: '#73889b',
        count: 1,
        relativeLuminance: 55.7050160769152,
      },
      {
        hex: '#5d8ca0',
        count: 1,
        relativeLuminance: 55.70670982818562,
      },
      {
        hex: '#628ba1',
        count: 4,
        relativeLuminance: 55.720598978354445,
      },
      {
        hex: '#618ba3',
        count: 2,
        relativeLuminance: 55.736629030510386,
      },
      {
        hex: '#977f8c',
        count: 1,
        relativeLuminance: 55.73716938639173,
      },
      {
        hex: '#6b89a3',
        count: 1,
        relativeLuminance: 55.74723898189879,
      },
      {
        hex: '#518da9',
        count: 1,
        relativeLuminance: 55.74945449556529,
      },
      {
        hex: '#89848b',
        count: 1,
        relativeLuminance: 55.77099341925991,
      },
      {
        hex: '#628c9a',
        count: 1,
        relativeLuminance: 55.77196074959427,
      },
      {
        hex: '#618c9c',
        count: 1,
        relativeLuminance: 55.7840013638053,
      },
      {
        hex: '#658b9e',
        count: 2,
        relativeLuminance: 55.786734736338445,
      },
      {
        hex: '#6b8a9c',
        count: 1,
        relativeLuminance: 55.78925498051319,
      },
      {
        hex: '#678b9b',
        count: 1,
        relativeLuminance: 55.801673025429864,
      },
      {
        hex: '#8e8290',
        count: 1,
        relativeLuminance: 55.81610495232353,
      },
      {
        hex: '#618c9d',
        count: 1,
        relativeLuminance: 55.81833655010148,
      },
      {
        hex: '#77898d',
        count: 1,
        relativeLuminance: 55.822846440401975,
      },
      {
        hex: '#738996',
        count: 2,
        relativeLuminance: 55.8246824440012,
      },
      {
        hex: '#6a8a9f',
        count: 1,
        relativeLuminance: 55.83090036505621,
      },
      {
        hex: '#628c9c',
        count: 1,
        relativeLuminance: 55.83977822677568,
      },
      {
        hex: '#768990',
        count: 1,
        relativeLuminance: 55.84315688644699,
      },
      {
        hex: '#668b9e',
        count: 1,
        relativeLuminance: 55.8453255046894,
      },
      {
        hex: '#5f8ca1',
        count: 1,
        relativeLuminance: 55.84898614153602,
      },
      {
        hex: '#688aa3',
        count: 1,
        relativeLuminance: 55.85108807426418,
      },
      {
        hex: '#658ba0',
        count: 1,
        relativeLuminance: 55.8567786631485,
      },
      {
        hex: '#a67a87',
        count: 1,
        relativeLuminance: 55.862142516525296,
      },
      {
        hex: '#5e8ca3',
        count: 1,
        relativeLuminance: 55.86704500381718,
      },
      {
        hex: '#6a89a8',
        count: 1,
        relativeLuminance: 55.86951392685161,
      },
      {
        hex: '#7a8891',
        count: 2,
        relativeLuminance: 55.87715131145403,
      },
      {
        hex: '#638ba4',
        count: 1,
        relativeLuminance: 55.88520181037548,
      },
      {
        hex: '#618c9f',
        count: 1,
        relativeLuminance: 55.88775389254495,
      },
      {
        hex: '#6b8a9f',
        count: 2,
        relativeLuminance: 55.892992357211696,
      },
      {
        hex: '#6a8aa1',
        count: 1,
        relativeLuminance: 55.90142445743753,
      },
      {
        hex: '#758a8b',
        count: 1,
        relativeLuminance: 55.91008623478804,
      },
      {
        hex: '#7b8890',
        count: 1,
        relativeLuminance: 55.920089728172925,
      },
      {
        hex: '#638ba5',
        count: 1,
        relativeLuminance: 55.92170898812711,
      },
      {
        hex: '#768a89',
        count: 1,
        relativeLuminance: 55.92186330990195,
      },
      {
        hex: '#658ba2',
        count: 1,
        relativeLuminance: 55.92781907626075,
      },
      {
        hex: '#628ba7',
        count: 1,
        relativeLuminance: 55.93923609854964,
      },
      {
        hex: '#6b8b98',
        count: 2,
        relativeLuminance: 55.94537568938422,
      },
      {
        hex: '#688b9e',
        count: 1,
        relativeLuminance: 55.9643487071244,
      },
      {
        hex: '#638c9e',
        count: 1,
        relativeLuminance: 55.96487322612849,
      },
      {
        hex: '#668c99',
        count: 2,
        relativeLuminance: 55.968306192420044,
      },
      {
        hex: '#5f8d9c',
        count: 1,
        relativeLuminance: 55.97040936520048,
      },
      {
        hex: '#598da5',
        count: 1,
        relativeLuminance: 55.9777045744068,
      },
      {
        hex: '#738a92',
        count: 1,
        relativeLuminance: 55.98463958531434,
      },
      {
        hex: '#688b9f',
        count: 1,
        relativeLuminance: 55.999074139530094,
      },
      {
        hex: '#5f8d9d',
        count: 1,
        relativeLuminance: 56.00456704767953,
      },
      {
        hex: '#778993',
        count: 1,
        relativeLuminance: 56.00744988320494,
      },
      {
        hex: '#678ba1',
        count: 2,
        relativeLuminance: 56.009625580101215,
      },
      {
        hex: '#958093',
        count: 1,
        relativeLuminance: 56.0221426127239,
      },
      {
        hex: '#638ca0',
        count: 3,
        relativeLuminance: 56.03457131830196,
      },
      {
        hex: '#568f9a',
        count: 1,
        relativeLuminance: 56.04416351017518,
      },
      {
        hex: '#658c9d',
        count: 1,
        relativeLuminance: 56.04490624794252,
      },
      {
        hex: '#628ca2',
        count: 1,
        relativeLuminance: 56.04919877297189,
      },
      {
        hex: '#768997',
        count: 1,
        relativeLuminance: 56.06499715380433,
      },
      {
        hex: '#688ba1',
        count: 1,
        relativeLuminance: 56.069269640767686,
      },
      {
        hex: '#7a898e',
        count: 1,
        relativeLuminance: 56.069657142415394,
      },
      {
        hex: '#768998',
        count: 1,
        relativeLuminance: 56.097675686920184,
      },
      {
        hex: '#638ca2',
        count: 1,
        relativeLuminance: 56.10526200187289,
      },
      {
        hex: '#6e8c8e',
        count: 1,
        relativeLuminance: 56.11197318037311,
      },
      {
        hex: '#6b8aa6',
        count: 1,
        relativeLuminance: 56.14375016802016,
      },
      {
        hex: '#768a91',
        count: 1,
        relativeLuminance: 56.16065282339983,
      },
      {
        hex: '#608da0',
        count: 1,
        relativeLuminance: 56.16242245584401,
      },
      {
        hex: '#668c9f',
        count: 3,
        relativeLuminance: 56.17194929737282,
      },
      {
        hex: '#6a8c98',
        count: 1,
        relativeLuminance: 56.17513160513225,
      },
      {
        hex: '#6c8b9d',
        count: 1,
        relativeLuminance: 56.17549840717389,
      },
      {
        hex: '#738a98',
        count: 2,
        relativeLuminance: 56.17658709489281,
      },
      {
        hex: '#688c9c',
        count: 2,
        relativeLuminance: 56.18730132857978,
      },
      {
        hex: '#678c9e',
        count: 1,
        relativeLuminance: 56.19611716993958,
      },
      {
        hex: '#708b96',
        count: 1,
        relativeLuminance: 56.1997473153382,
      },
      {
        hex: '#658d99',
        count: 1,
        relativeLuminance: 56.204110332540054,
      },
      {
        hex: '#6b8ba0',
        count: 1,
        relativeLuminance: 56.216823171040005,
      },
      {
        hex: '#768a93',
        count: 1,
        relativeLuminance: 56.22279958242818,
      },
      {
        hex: '#678c9f',
        count: 2,
        relativeLuminance: 56.23062016446109,
      },
      {
        hex: '#608da2',
        count: 1,
        relativeLuminance: 56.23286324032411,
      },
      {
        hex: '#798996',
        count: 1,
        relativeLuminance: 56.24591675020025,
      },
      {
        hex: '#5f8da4',
        count: 1,
        relativeLuminance: 56.25060982376709,
      },
      {
        hex: '#818795',
        count: 1,
        relativeLuminance: 56.25261727008839,
      },
      {
        hex: '#5d8f96',
        count: 1,
        relativeLuminance: 56.26167241146979,
      },
      {
        hex: '#5d8e9f',
        count: 1,
        relativeLuminance: 56.26393969794448,
      },
      {
        hex: '#628da0',
        count: 2,
        relativeLuminance: 56.272036330217006,
      },
      {
        hex: '#6e8c94',
        count: 2,
        relativeLuminance: 56.29672516211728,
      },
      {
        hex: '#608da4',
        count: 2,
        relativeLuminance: 56.304293050115774,
      },
      {
        hex: '#7b8994',
        count: 1,
        relativeLuminance: 56.32768068095585,
      },
      {
        hex: '#6b8c9b',
        count: 1,
        relativeLuminance: 56.335767781425176,
      },
      {
        hex: '#658e94',
        count: 1,
        relativeLuminance: 56.338052010597636,
      },
      {
        hex: '#698c9f',
        count: 1,
        relativeLuminance: 56.34978891654595,
      },
      {
        hex: '#668d9c',
        count: 1,
        relativeLuminance: 56.36191900103391,
      },
      {
        hex: '#8f8397',
        count: 1,
        relativeLuminance: 56.39347451475773,
      },
      {
        hex: '#688ca2',
        count: 1,
        relativeLuminance: 56.3947190066515,
      },
      {
        hex: '#5f8ea0',
        count: 2,
        relativeLuminance: 56.40375716183634,
      },
      {
        hex: '#798a92',
        count: 1,
        relativeLuminance: 56.404020154309094,
      },
      {
        hex: '#588eaa',
        count: 1,
        relativeLuminance: 56.409736633897566,
      },
      {
        hex: '#758a9b',
        count: 1,
        relativeLuminance: 56.41215268762703,
      },
      {
        hex: '#768b90',
        count: 1,
        relativeLuminance: 56.41709651093265,
      },
      {
        hex: '#648da1',
        count: 1,
        relativeLuminance: 56.41896259447155,
      },
      {
        hex: '#938295',
        count: 1,
        relativeLuminance: 56.42486177086441,
      },
      {
        hex: '#698d99',
        count: 1,
        relativeLuminance: 56.43942466122506,
      },
      {
        hex: '#9c7f93',
        count: 1,
        relativeLuminance: 56.43975122915684,
      },
      {
        hex: '#698ca2',
        count: 1,
        relativeLuminance: 56.454434578120356,
      },
      {
        hex: '#718c93',
        count: 1,
        relativeLuminance: 56.4597881968611,
      },
      {
        hex: '#648e9a',
        count: 2,
        relativeLuminance: 56.47460951122076,
      },
      {
        hex: '#678ca6',
        count: 1,
        relativeLuminance: 56.479051256787116,
      },
      {
        hex: '#648da3',
        count: 1,
        relativeLuminance: 56.48946547811272,
      },
      {
        hex: '#908490',
        count: 1,
        relativeLuminance: 56.531043173069946,
      },
      {
        hex: '#758b96',
        count: 1,
        relativeLuminance: 56.53471905175516,
      },
      {
        hex: '#618ea1',
        count: 1,
        relativeLuminance: 56.54603473646284,
      },
      {
        hex: '#638e9e',
        count: 1,
        relativeLuminance: 56.55263308320933,
      },
      {
        hex: '#688d9f',
        count: 1,
        relativeLuminance: 56.58102875899448,
      },
      {
        hex: '#758b98',
        count: 1,
        relativeLuminance: 56.59893215501042,
      },
      {
        hex: '#998191',
        count: 1,
        relativeLuminance: 56.60190177674602,
      },
      {
        hex: '#648e9e',
        count: 1,
        relativeLuminance: 56.60861044028063,
      },
      {
        hex: '#7c8b88',
        count: 1,
        relativeLuminance: 56.61250647138117,
      },
      {
        hex: '#688da0',
        count: 1,
        relativeLuminance: 56.61544424256721,
      },
      {
        hex: '#618ea3',
        count: 1,
        relativeLuminance: 56.61629120805139,
      },
      {
        hex: '#708c9a',
        count: 1,
        relativeLuminance: 56.61853369778473,
      },
      {
        hex: '#708d91',
        count: 1,
        relativeLuminance: 56.62329466802075,
      },
      {
        hex: '#6d8ca0',
        count: 1,
        relativeLuminance: 56.62981598742991,
      },
      {
        hex: '#928396',
        count: 1,
        relativeLuminance: 56.62997133896201,
      },
      {
        hex: '#89859e',
        count: 1,
        relativeLuminance: 56.64618789303253,
      },
      {
        hex: '#8f858e',
        count: 1,
        relativeLuminance: 56.65175420174489,
      },
      {
        hex: '#6d8d98',
        count: 1,
        relativeLuminance: 56.65202036503197,
      },
      {
        hex: '#7c8a93',
        count: 1,
        relativeLuminance: 56.65267732386589,
      },
      {
        hex: '#6d8ca1',
        count: 1,
        relativeLuminance: 56.66446276200283,
      },
      {
        hex: '#608ea6',
        count: 1,
        relativeLuminance: 56.66976984156638,
      },
      {
        hex: '#618f9c',
        count: 1,
        relativeLuminance: 56.67039666773974,
      },
      {
        hex: '#94829a',
        count: 1,
        relativeLuminance: 56.677931600046335,
      },
      {
        hex: '#6f8d95',
        count: 1,
        relativeLuminance: 56.68278675371086,
      },
      {
        hex: '#7d8a92',
        count: 1,
        relativeLuminance: 56.69565523589223,
      },
      {
        hex: '#728c99',
        count: 1,
        relativeLuminance: 56.71654881021455,
      },
      {
        hex: '#6d8d9a',
        count: 1,
        relativeLuminance: 56.71711420467648,
      },
      {
        hex: '#768d87',
        count: 1,
        relativeLuminance: 56.73336328203496,
      },
      {
        hex: '#6a8da0',
        count: 1,
        relativeLuminance: 56.73475506305108,
      },
      {
        hex: '#8e849c',
        count: 1,
        relativeLuminance: 56.73635013182847,
      },
      {
        hex: '#798c8a',
        count: 1,
        relativeLuminance: 56.7387904890886,
      },
      {
        hex: '#5b8fa7',
        count: 1,
        relativeLuminance: 56.74173598040018,
      },
      {
        hex: '#788c8d',
        count: 1,
        relativeLuminance: 56.75474838543728,
      },
      {
        hex: '#6a8da1',
        count: 1,
        relativeLuminance: 56.76930200669776,
      },
      {
        hex: '#698da3',
        count: 2,
        relativeLuminance: 56.779343281468186,
      },
      {
        hex: '#948395',
        count: 1,
        relativeLuminance: 56.78039523289701,
      },
      {
        hex: '#608fa1',
        count: 1,
        relativeLuminance: 56.786780984441364,
      },
      {
        hex: '#7d8b8c',
        count: 1,
        relativeLuminance: 56.80026691648014,
      },
      {
        hex: '#628ea7',
        count: 1,
        relativeLuminance: 56.814039286317936,
      },
      {
        hex: '#678e9f',
        count: 1,
        relativeLuminance: 56.81411491451671,
      },
      {
        hex: '#748c98',
        count: 1,
        relativeLuminance: 56.8174507939904,
      },
      {
        hex: '#b17a7d',
        count: 1,
        relativeLuminance: 56.82792701398384,
      },
      {
        hex: '#6a8da3',
        count: 1,
        relativeLuminance: 56.839128644327346,
      },
      {
        hex: '#7c8b90',
        count: 1,
        relativeLuminance: 56.84469087125407,
      },
      {
        hex: '#6c8e97',
        count: 2,
        relativeLuminance: 56.84917411436578,
      },
      {
        hex: '#6f8e91',
        count: 1,
        relativeLuminance: 56.85047851872713,
      },
      {
        hex: '#6c8da0',
        count: 1,
        relativeLuminance: 56.85647794087994,
      },
      {
        hex: '#608fa3',
        count: 2,
        relativeLuminance: 56.85657413801039,
      },
      {
        hex: '#7a8c8c',
        count: 1,
        relativeLuminance: 56.867482490567625,
      },
      {
        hex: '#8e8598',
        count: 1,
        relativeLuminance: 56.873015937158,
      },
      {
        hex: '#658ea4',
        count: 1,
        relativeLuminance: 56.8732122578304,
      },
      {
        hex: '#9f8090',
        count: 1,
        relativeLuminance: 56.90244444000733,
      },
      {
        hex: '#718d98',
        count: 1,
        relativeLuminance: 56.90692199693383,
      },
      {
        hex: '#618eab',
        count: 1,
        relativeLuminance: 56.90711923525605,
      },
      {
        hex: '#728d96',
        count: 1,
        relativeLuminance: 56.908592744173575,
      },
      {
        hex: '#7a8c8e',
        count: 1,
        relativeLuminance: 56.9257837546518,
      },
      {
        hex: '#648f9f',
        count: 1,
        relativeLuminance: 56.93626378777951,
      },
      {
        hex: '#708d9b',
        count: 1,
        relativeLuminance: 56.93979003182422,
      },
      {
        hex: '#92858f',
        count: 1,
        relativeLuminance: 56.94777404351022,
      },
      {
        hex: '#758c9a',
        count: 1,
        relativeLuminance: 56.94967931993415,
      },
      {
        hex: '#89888e',
        count: 1,
        relativeLuminance: 56.95799796946835,
      },
      {
        hex: '#698ea0',
        count: 1,
        relativeLuminance: 56.965471859804765,
      },
      {
        hex: '#7b8a9f',
        count: 1,
        relativeLuminance: 56.96917541298366,
      },
      {
        hex: '#648fa0',
        count: 1,
        relativeLuminance: 56.970345082331946,
      },
      {
        hex: '#83889e',
        count: 1,
        relativeLuminance: 56.98004069989821,
      },
      {
        hex: '#808a94',
        count: 1,
        relativeLuminance: 56.98202844488945,
      },
      {
        hex: '#718d9b',
        count: 1,
        relativeLuminance: 57.00424548371548,
      },
      {
        hex: '#688ea3',
        count: 2,
        relativeLuminance: 57.01047405539876,
      },
      {
        hex: '#6e8e99',
        count: 1,
        relativeLuminance: 57.037310575583916,
      },
      {
        hex: '#6a8f98',
        count: 1,
        relativeLuminance: 57.05211814940533,
      },
      {
        hex: '#6a8da9',
        count: 1,
        relativeLuminance: 57.05446358783573,
      },
      {
        hex: '#91849e',
        count: 1,
        relativeLuminance: 57.06654616045466,
      },
      {
        hex: '#9f818d',
        count: 1,
        relativeLuminance: 57.070090393057825,
      },
      {
        hex: '#628fa6',
        count: 3,
        relativeLuminance: 57.070320320450975,
      },
      {
        hex: '#718e94',
        count: 1,
        relativeLuminance: 57.0703839777987,
      },
      {
        hex: '#768d93',
        count: 1,
        relativeLuminance: 57.08310643108739,
      },
      {
        hex: '#91868e',
        count: 1,
        relativeLuminance: 57.09775639079872,
      },
      {
        hex: '#698f9c',
        count: 1,
        relativeLuminance: 57.122625392485006,
      },
      {
        hex: '#718ca7',
        count: 1,
        relativeLuminance: 57.130816820615976,
      },
      {
        hex: '#5192a6',
        count: 1,
        relativeLuminance: 57.134099967313716,
      },
      {
        hex: '#758d97',
        count: 1,
        relativeLuminance: 57.13969624237585,
      },
      {
        hex: '#64909d',
        count: 1,
        relativeLuminance: 57.16316589668604,
      },
      {
        hex: '#658eac',
        count: 1,
        relativeLuminance: 57.16423223336133,
      },
      {
        hex: '#958496',
        count: 1,
        relativeLuminance: 57.16698920473746,
      },
      {
        hex: '#918599',
        count: 1,
        relativeLuminance: 57.167581912669675,
      },
      {
        hex: '#9b8295',
        count: 1,
        relativeLuminance: 57.176371052099185,
      },
      {
        hex: '#ae7c85',
        count: 1,
        relativeLuminance: 57.179943712757606,
      },
      {
        hex: '#6090a4',
        count: 1,
        relativeLuminance: 57.185987307657456,
      },
      {
        hex: '#668fa3',
        count: 3,
        relativeLuminance: 57.18637143648479,
      },
      {
        hex: '#638fa8',
        count: 2,
        relativeLuminance: 57.19674231491484,
      },
      {
        hex: '#6b8f9b',
        count: 1,
        relativeLuminance: 57.20893300324528,
      },
      {
        hex: '#a77f87',
        count: 1,
        relativeLuminance: 57.21497500632873,
      },
      {
        hex: '#89879f',
        count: 1,
        relativeLuminance: 57.22080904754546,
      },
      {
        hex: '#6b8ea4',
        count: 1,
        relativeLuminance: 57.223354950589695,
      },
      {
        hex: '#828a97',
        count: 1,
        relativeLuminance: 57.22821833129518,
      },
      {
        hex: '#888a87',
        count: 1,
        relativeLuminance: 57.231437486412545,
      },
      {
        hex: '#7a8c98',
        count: 1,
        relativeLuminance: 57.2317022660592,
      },
      {
        hex: '#6d8f98',
        count: 1,
        relativeLuminance: 57.234020204996085,
      },
      {
        hex: '#6a8ea6',
        count: 1,
        relativeLuminance: 57.234230959488826,
      },
      {
        hex: '#5092aa',
        count: 1,
        relativeLuminance: 57.23634047634887,
      },
      {
        hex: '#678eab',
        count: 1,
        relativeLuminance: 57.24053019311184,
      },
      {
        hex: '#66909c',
        count: 1,
        relativeLuminance: 57.242234746001,
      },
      {
        hex: '#a08190',
        count: 1,
        relativeLuminance: 57.25786155920423,
      },
      {
        hex: '#6d8f99',
        count: 1,
        relativeLuminance: 57.26593230743458,
      },
      {
        hex: '#918694',
        count: 1,
        relativeLuminance: 57.27757723612808,
      },
      {
        hex: '#68909a',
        count: 1,
        relativeLuminance: 57.291733884687375,
      },
      {
        hex: '#728e99',
        count: 1,
        relativeLuminance: 57.29236285664638,
      },
      {
        hex: '#6090a7',
        count: 1,
        relativeLuminance: 57.292379741888155,
      },
      {
        hex: '#91859d',
        count: 1,
        relativeLuminance: 57.297984021142454,
      },
      {
        hex: '#928692',
        count: 1,
        relativeLuminance: 57.305138457725704,
      },
      {
        hex: '#838b8e',
        count: 2,
        relativeLuminance: 57.31193161892942,
      },
      {
        hex: '#848c81',
        count: 1,
        relativeLuminance: 57.31498423551989,
      },
      {
        hex: '#6590a0',
        count: 1,
        relativeLuminance: 57.31944148859752,
      },
      {
        hex: '#70908b',
        count: 1,
        relativeLuminance: 57.32336873688226,
      },
      {
        hex: '#8f869b',
        count: 1,
        relativeLuminance: 57.32438443912197,
      },
      {
        hex: '#728e9a',
        count: 1,
        relativeLuminance: 57.32449227319691,
      },
      {
        hex: '#698fa2',
        count: 1,
        relativeLuminance: 57.324792701253855,
      },
      {
        hex: '#6f8ea0',
        count: 2,
        relativeLuminance: 57.33133475361231,
      },
      {
        hex: '#6a8fa1',
        count: 2,
        relativeLuminance: 57.349449548249936,
      },
      {
        hex: '#a4808e',
        count: 1,
        relativeLuminance: 57.35094694847197,
      },
      {
        hex: '#848a96',
        count: 1,
        relativeLuminance: 57.35157504994717,
      },
      {
        hex: '#818b95',
        count: 1,
        relativeLuminance: 57.36877541446499,
      },
      {
        hex: '#95868b',
        count: 1,
        relativeLuminance: 57.37026863070284,
      },
      {
        hex: '#6690a0',
        count: 1,
        relativeLuminance: 57.37561105121921,
      },
      {
        hex: '#6a9099',
        count: 1,
        relativeLuminance: 57.37680272106239,
      },
      {
        hex: '#6390a5',
        count: 1,
        relativeLuminance: 57.381810342372944,
      },
      {
        hex: '#978497',
        count: 1,
        relativeLuminance: 57.38222011297499,
      },
      {
        hex: '#6a8fa2',
        count: 1,
        relativeLuminance: 57.38369297871793,
      },
      {
        hex: '#b27c7c',
        count: 1,
        relativeLuminance: 57.40087636709261,
      },
      {
        hex: '#7c8c99',
        count: 1,
        relativeLuminance: 57.40632637797168,
      },
      {
        hex: '#6f8f9a',
        count: 1,
        relativeLuminance: 57.42212166972226,
      },
      {
        hex: '#6590a3',
        count: 1,
        relativeLuminance: 57.422160543191254,
      },
      {
        hex: '#91897c',
        count: 1,
        relativeLuminance: 57.43059113640196,
      },
      {
        hex: '#818c8e',
        count: 1,
        relativeLuminance: 57.44022880008909,
      },
      {
        hex: '#998493',
        count: 1,
        relativeLuminance: 57.44517611535532,
      },
      {
        hex: '#62938d',
        count: 1,
        relativeLuminance: 57.450748662737425,
      },
      {
        hex: '#718ea0',
        count: 1,
        relativeLuminance: 57.458061221877,
      },
      {
        hex: '#738f93',
        count: 1,
        relativeLuminance: 57.45957058722624,
      },
      {
        hex: '#6d9096',
        count: 1,
        relativeLuminance: 57.4628417635859,
      },
      {
        hex: '#848b91',
        count: 1,
        relativeLuminance: 57.47765572541306,
      },
      {
        hex: '#7a8ca0',
        count: 1,
        relativeLuminance: 57.49374840181572,
      },
      {
        hex: '#6790a2',
        count: 1,
        relativeLuminance: 57.50040385417495,
      },
      {
        hex: '#7c8c9c',
        count: 1,
        relativeLuminance: 57.5031349352852,
      },
      {
        hex: '#898a8e',
        count: 1,
        relativeLuminance: 57.509648210843054,
      },
      {
        hex: '#828c8e',
        count: 1,
        relativeLuminance: 57.516070400332296,
      },
      {
        hex: '#778e96',
        count: 1,
        relativeLuminance: 57.53047078080546,
      },
      {
        hex: '#7c8d94',
        count: 1,
        relativeLuminance: 57.53336562571653,
      },
      {
        hex: '#60929d',
        count: 1,
        relativeLuminance: 57.539070583877006,
      },
      {
        hex: '#6b8fa5',
        count: 1,
        relativeLuminance: 57.54719662874304,
      },
      {
        hex: '#6f8f9e',
        count: 1,
        relativeLuminance: 57.5526955566646,
      },
      {
        hex: '#92869a',
        count: 1,
        relativeLuminance: 57.55387827879798,
      },
      {
        hex: '#6990a1',
        count: 1,
        relativeLuminance: 57.58147237352266,
      },
      {
        hex: '#978595',
        count: 1,
        relativeLuminance: 57.582730083578355,
      },
      {
        hex: '#708ea6',
        count: 1,
        relativeLuminance: 57.60158602514113,
      },
      {
        hex: '#778f8f',
        count: 1,
        relativeLuminance: 57.60745356452442,
      },
      {
        hex: '#6f9097',
        count: 1,
        relativeLuminance: 57.61740171318735,
      },
      {
        hex: '#748e9f',
        count: 1,
        relativeLuminance: 57.61914742001463,
      },
      {
        hex: '#6291a5',
        count: 1,
        relativeLuminance: 57.62094414952418,
      },
      {
        hex: '#6790a6',
        count: 1,
        relativeLuminance: 57.63934700559301,
      },
      {
        hex: '#b67b7d',
        count: 1,
        relativeLuminance: 57.647418746696246,
      },
      {
        hex: '#6e909a',
        count: 1,
        relativeLuminance: 57.6502375240744,
      },
      {
        hex: '#6690a8',
        count: 1,
        relativeLuminance: 57.65392371326256,
      },
      {
        hex: '#868c88',
        count: 1,
        relativeLuminance: 57.65739690186284,
      },
      {
        hex: '#848c8e',
        count: 1,
        relativeLuminance: 57.669498955411825,
      },
      {
        hex: '#848aa0',
        count: 1,
        relativeLuminance: 57.6751184297717,
      },
      {
        hex: '#738f9a',
        count: 1,
        relativeLuminance: 57.67731969667456,
      },
      {
        hex: '#748f98',
        count: 1,
        relativeLuminance: 57.67930422451255,
      },
      {
        hex: '#719095',
        count: 1,
        relativeLuminance: 57.68144214222937,
      },
      {
        hex: '#878a99',
        count: 1,
        relativeLuminance: 57.68202465230033,
      },
      {
        hex: '#92869e',
        count: 1,
        relativeLuminance: 57.6839860305917,
      },
      {
        hex: '#67919f',
        count: 1,
        relativeLuminance: 57.69141885535461,
      },
      {
        hex: '#6491a4',
        count: 1,
        relativeLuminance: 57.69419083835555,
      },
      {
        hex: '#7c8e90',
        count: 1,
        relativeLuminance: 57.698257993427546,
      },
      {
        hex: '#6691a1',
        count: 2,
        relativeLuminance: 57.7021689791398,
      },
      {
        hex: '#6a90a3',
        count: 1,
        relativeLuminance: 57.70815046366053,
      },
      {
        hex: '#8a899b',
        count: 1,
        relativeLuminance: 57.71401021473879,
      },
      {
        hex: '#6e909c',
        count: 1,
        relativeLuminance: 57.714644589907635,
      },
      {
        hex: '#948791',
        count: 1,
        relativeLuminance: 57.720738650753106,
      },
      {
        hex: '#928984',
        count: 1,
        relativeLuminance: 57.72081185248892,
      },
      {
        hex: '#8f879f',
        count: 1,
        relativeLuminance: 57.7232366885259,
      },
      {
        hex: '#828c95',
        count: 1,
        relativeLuminance: 57.724319152985046,
      },
      {
        hex: '#6c90a0',
        count: 1,
        relativeLuminance: 57.72509321517295,
      },
      {
        hex: '#8c8a8d',
        count: 1,
        relativeLuminance: 57.727740861630764,
      },
      {
        hex: '#8c889f',
        count: 1,
        relativeLuminance: 57.738724633610104,
      },
      {
        hex: '#69919d',
        count: 1,
        relativeLuminance: 57.74006964424795,
      },
      {
        hex: '#749091',
        count: 1,
        relativeLuminance: 57.75487747273951,
      },
      {
        hex: '#928798',
        count: 1,
        relativeLuminance: 57.75686799307627,
      },
      {
        hex: '#6791a1',
        count: 1,
        relativeLuminance: 57.75843165124948,
      },
      {
        hex: '#9c8494',
        count: 1,
        relativeLuminance: 57.75938295114541,
      },
      {
        hex: '#99868c',
        count: 1,
        relativeLuminance: 57.76644253231075,
      },
      {
        hex: '#6b90a3',
        count: 1,
        relativeLuminance: 57.767123720972606,
      },
      {
        hex: '#8a8a94',
        count: 1,
        relativeLuminance: 57.76873812691875,
      },
      {
        hex: '#728f9f',
        count: 1,
        relativeLuminance: 57.77560471785533,
      },
      {
        hex: '#6391a8',
        count: 1,
        relativeLuminance: 57.78044901974482,
      },
      {
        hex: '#b07e81',
        count: 1,
        relativeLuminance: 57.78636916928603,
      },
      {
        hex: '#9b8498',
        count: 1,
        relativeLuminance: 57.78760645772326,
      },
      {
        hex: '#878b94',
        count: 1,
        relativeLuminance: 57.80304938715629,
      },
      {
        hex: '#8c8b86',
        count: 1,
        relativeLuminance: 57.8103699403576,
      },
      {
        hex: '#b67c7a',
        count: 1,
        relativeLuminance: 57.81381783614748,
      },
      {
        hex: '#94869d',
        count: 1,
        relativeLuminance: 57.82803219634249,
      },
      {
        hex: '#a1838f',
        count: 2,
        relativeLuminance: 57.83988717962961,
      },
      {
        hex: '#988692',
        count: 1,
        relativeLuminance: 57.847597669494334,
      },
      {
        hex: '#66929d',
        count: 1,
        relativeLuminance: 57.862814952851636,
      },
      {
        hex: '#858c92',
        count: 1,
        relativeLuminance: 57.863925702559925,
      },
      {
        hex: '#9e8588',
        count: 1,
        relativeLuminance: 57.86745082339311,
      },
      {
        hex: '#70909d',
        count: 1,
        relativeLuminance: 57.87112341867672,
      },
      {
        hex: '#6391ab',
        count: 1,
        relativeLuminance: 57.888412820051656,
      },
      {
        hex: '#6b919e',
        count: 1,
        relativeLuminance: 57.88984104109046,
      },
      {
        hex: '#878b97',
        count: 1,
        relativeLuminance: 57.89487259642756,
      },
      {
        hex: '#8c899c',
        count: 1,
        relativeLuminance: 57.91065761669745,
      },
      {
        hex: '#ad7f89',
        count: 1,
        relativeLuminance: 57.91261349701635,
      },
      {
        hex: '#ae7f85',
        count: 2,
        relativeLuminance: 57.914276759402966,
      },
      {
        hex: '#6d90a4',
        count: 1,
        relativeLuminance: 57.92112744658938,
      },
      {
        hex: '#6392a4',
        count: 2,
        relativeLuminance: 57.93320838664948,
      },
      {
        hex: '#709196',
        count: 1,
        relativeLuminance: 57.93967784988436,
      },
      {
        hex: '#6f90a1',
        count: 1,
        relativeLuminance: 57.9412797729706,
      },
      {
        hex: '#828d93',
        count: 1,
        relativeLuminance: 57.94406725258196,
      },
      {
        hex: '#9a868f',
        count: 1,
        relativeLuminance: 57.94523385242836,
      },
      {
        hex: '#7d8e96',
        count: 1,
        relativeLuminance: 57.94960602925252,
      },
      {
        hex: '#6891a5',
        count: 1,
        relativeLuminance: 57.951967637446046,
      },
      {
        hex: '#888a9f',
        count: 1,
        relativeLuminance: 57.955710836297825,
      },
      {
        hex: '#6a91a2',
        count: 3,
        relativeLuminance: 57.96446433127724,
      },
      {
        hex: '#6791a7',
        count: 2,
        relativeLuminance: 57.96520506393745,
      },
      {
        hex: '#729193',
        count: 1,
        relativeLuminance: 57.97510065718224,
      },
      {
        hex: '#838c9b',
        count: 1,
        relativeLuminance: 57.98767729753162,
      },
      {
        hex: '#738fa4',
        count: 1,
        relativeLuminance: 58.008653564250096,
      },
      {
        hex: '#6f90a3',
        count: 1,
        relativeLuminance: 58.00891346595466,
      },
      {
        hex: '#90889d',
        count: 1,
        relativeLuminance: 58.01039854324864,
      },
      {
        hex: '#7d8e98',
        count: 2,
        relativeLuminance: 58.01138852109828,
      },
      {
        hex: '#978792',
        count: 1,
        relativeLuminance: 58.02050935712873,
      },
      {
        hex: '#aa8187',
        count: 1,
        relativeLuminance: 58.03309257244483,
      },
      {
        hex: '#738fa5',
        count: 1,
        relativeLuminance: 58.043097334230694,
      },
      {
        hex: '#6c91a1',
        count: 1,
        relativeLuminance: 58.04858274608368,
      },
      {
        hex: '#818d99',
        count: 1,
        relativeLuminance: 58.052981109789926,
      },
      {
        hex: '#a6828e',
        count: 1,
        relativeLuminance: 58.06100786972161,
      },
      {
        hex: '#779095',
        count: 1,
        relativeLuminance: 58.073464164811426,
      },
      {
        hex: '#6592a5',
        count: 1,
        relativeLuminance: 58.07602478969932,
      },
      {
        hex: '#928a88',
        count: 1,
        relativeLuminance: 58.09919220923268,
      },
      {
        hex: '#8e899d',
        count: 1,
        relativeLuminance: 58.10952084508234,
      },
      {
        hex: '#789094',
        count: 1,
        relativeLuminance: 58.110734171853196,
      },
      {
        hex: '#6c91a3',
        count: 2,
        relativeLuminance: 58.11602083408107,
      },
      {
        hex: '#848d94',
        count: 1,
        relativeLuminance: 58.125602899188834,
      },
      {
        hex: '#938899',
        count: 1,
        relativeLuminance: 58.14251686202577,
      },
      {
        hex: '#6c91a4',
        count: 2,
        relativeLuminance: 58.15009605061164,
      },
      {
        hex: '#7b8f98',
        count: 1,
        relativeLuminance: 58.153497376223896,
      },
      {
        hex: '#6b91a6',
        count: 1,
        relativeLuminance: 58.160023598564806,
      },
      {
        hex: '#7c8f96',
        count: 2,
        relativeLuminance: 58.16214676944416,
      },
      {
        hex: '#7190a4',
        count: 1,
        relativeLuminance: 58.167395252258956,
      },
      {
        hex: '#8d8b90',
        count: 1,
        relativeLuminance: 58.17118809642791,
      },
      {
        hex: '#68939a',
        count: 1,
        relativeLuminance: 58.17309148888124,
      },
      {
        hex: '#6293a4',
        count: 1,
        relativeLuminance: 58.173901243400564,
      },
      {
        hex: '#8e899f',
        count: 1,
        relativeLuminance: 58.1747179563682,
      },
      {
        hex: '#649498',
        count: 1,
        relativeLuminance: 58.18495428071765,
      },
      {
        hex: '#6991aa',
        count: 1,
        relativeLuminance: 58.18514556677995,
      },
      {
        hex: '#808e97',
        count: 2,
        relativeLuminance: 58.19764818080297,
      },
      {
        hex: '#6593a0',
        count: 1,
        relativeLuminance: 58.20014489688104,
      },
      {
        hex: '#838d99',
        count: 1,
        relativeLuminance: 58.20274487765704,
      },
      {
        hex: '#90899b',
        count: 1,
        relativeLuminance: 58.21428610017708,
      },
      {
        hex: '#6592a9',
        count: 1,
        relativeLuminance: 58.216054981514645,
      },
      {
        hex: '#6b91a8',
        count: 1,
        relativeLuminance: 58.22994576826983,
      },
      {
        hex: '#95898d',
        count: 1,
        relativeLuminance: 58.2301517774886,
      },
      {
        hex: '#788fa1',
        count: 1,
        relativeLuminance: 58.236979061116074,
      },
      {
        hex: '#818e96',
        count: 1,
        relativeLuminance: 58.240696132320664,
      },
      {
        hex: '#6493a3',
        count: 1,
        relativeLuminance: 58.24632971213009,
      },
      {
        hex: '#868c9c',
        count: 1,
        relativeLuminance: 58.24981597446167,
      },
      {
        hex: '#71919e',
        count: 2,
        relativeLuminance: 58.254846804003094,
      },
      {
        hex: '#918a91',
        count: 1,
        relativeLuminance: 58.26513418202477,
      },
      {
        hex: '#6e91a4',
        count: 1,
        relativeLuminance: 58.2699419270797,
      },
      {
        hex: '#818e97',
        count: 1,
        relativeLuminance: 58.27122854909368,
      },
      {
        hex: '#6392ae',
        count: 1,
        relativeLuminance: 58.28906567225738,
      },
      {
        hex: '#958a86',
        count: 1,
        relativeLuminance: 58.30917805855074,
      },
      {
        hex: '#6793a0',
        count: 1,
        relativeLuminance: 58.31041945037718,
      },
      {
        hex: '#689495',
        count: 1,
        relativeLuminance: 58.31392871049155,
      },
      {
        hex: '#6493a5',
        count: 1,
        relativeLuminance: 58.31447799852748,
      },
      {
        hex: '#7191a0',
        count: 1,
        relativeLuminance: 58.32031797201246,
      },
      {
        hex: '#76909f',
        count: 1,
        relativeLuminance: 58.32191844488898,
      },
      {
        hex: '#808e9b',
        count: 1,
        relativeLuminance: 58.32237176518629,
      },
      {
        hex: '#808f92',
        count: 1,
        relativeLuminance: 58.32960907339722,
      },
      {
        hex: '#6992a6',
        count: 1,
        relativeLuminance: 58.33409301571791,
      },
      {
        hex: '#7e8f97',
        count: 1,
        relativeLuminance: 58.33475850507452,
      },
      {
        hex: '#7b9095',
        count: 2,
        relativeLuminance: 58.34651805879628,
      },
      {
        hex: '#6b92a3',
        count: 2,
        relativeLuminance: 58.34700234584696,
      },
      {
        hex: '#92899a',
        count: 1,
        relativeLuminance: 58.35405627235636,
      },
      {
        hex: '#848d9c',
        count: 1,
        relativeLuminance: 58.373042849229876,
      },
      {
        hex: '#6e91a7',
        count: 1,
        relativeLuminance: 58.373257940441306,
      },
      {
        hex: '#799191',
        count: 1,
        relativeLuminance: 58.377269090874904,
      },
      {
        hex: '#769198',
        count: 1,
        relativeLuminance: 58.385985516382036,
      },
      {
        hex: '#7690a1',
        count: 1,
        relativeLuminance: 58.38780058621717,
      },
      {
        hex: '#7091a4',
        count: 1,
        relativeLuminance: 58.39212544732064,
      },
      {
        hex: '#7e8f99',
        count: 1,
        relativeLuminance: 58.396422134403565,
      },
      {
        hex: '#a08594',
        count: 1,
        relativeLuminance: 58.40235340219225,
      },
      {
        hex: '#818f92',
        count: 1,
        relativeLuminance: 58.402928798202325,
      },
      {
        hex: '#6992a8',
        count: 1,
        relativeLuminance: 58.40368855229505,
      },
      {
        hex: '#8d8b98',
        count: 1,
        relativeLuminance: 58.410057199636455,
      },
      {
        hex: '#b37f83',
        count: 1,
        relativeLuminance: 58.41587049409206,
      },
      {
        hex: '#70929c',
        count: 1,
        relativeLuminance: 58.41743971533151,
      },
      {
        hex: '#8c8b9b',
        count: 1,
        relativeLuminance: 58.42160261494324,
      },
      {
        hex: '#918b8d',
        count: 1,
        relativeLuminance: 58.42237559124361,
      },
      {
        hex: '#65949e',
        count: 1,
        relativeLuminance: 58.42901219941754,
      },
      {
        hex: '#6d92a2',
        count: 2,
        relativeLuminance: 58.43134222882895,
      },
      {
        hex: '#948b84',
        count: 1,
        relativeLuminance: 58.44023201049657,
      },
      {
        hex: '#808f96',
        count: 2,
        relativeLuminance: 58.44872240075152,
      },
      {
        hex: '#908b91',
        count: 1,
        relativeLuminance: 58.451294032358845,
      },
      {
        hex: '#6993a1',
        count: 1,
        relativeLuminance: 58.45602448038095,
      },
      {
        hex: '#74938b',
        count: 1,
        relativeLuminance: 58.456603920871274,
      },
      {
        hex: '#7d9094',
        count: 1,
        relativeLuminance: 58.45668754336228,
      },
      {
        hex: '#988895',
        count: 1,
        relativeLuminance: 58.46516628441857,
      },
      {
        hex: '#ac8286',
        count: 1,
        relativeLuminance: 58.46845475156421,
      },
      {
        hex: '#868e91',
        count: 1,
        relativeLuminance: 58.46987931493538,
      },
      {
        hex: '#80908d',
        count: 1,
        relativeLuminance: 58.47000229712158,
      },
      {
        hex: '#6c92a5',
        count: 1,
        relativeLuminance: 58.47349871416762,
      },
      {
        hex: '#908b92',
        count: 1,
        relativeLuminance: 58.48037074914937,
      },
      {
        hex: '#70929e',
        count: 3,
        relativeLuminance: 58.48157395625239,
      },
      {
        hex: '#79909e',
        count: 1,
        relativeLuminance: 58.489969303997356,
      },
      {
        hex: '#6e92a2',
        count: 1,
        relativeLuminance: 58.49120012311114,
      },
      {
        hex: '#a5848f',
        count: 1,
        relativeLuminance: 58.49460451133882,
      },
      {
        hex: '#8f8a9e',
        count: 1,
        relativeLuminance: 58.49478113990939,
      },
      {
        hex: '#6893a4',
        count: 2,
        relativeLuminance: 58.50004001138937,
      },
      {
        hex: '#8d8c92',
        count: 1,
        relativeLuminance: 58.50320930498761,
      },
      {
        hex: '#6b939f',
        count: 1,
        relativeLuminance: 58.50529936767995,
      },
      {
        hex: '#6993a3',
        count: 1,
        relativeLuminance: 58.52272750278355,
      },
      {
        hex: '#958997',
        count: 1,
        relativeLuminance: 58.52292333537831,
      },
      {
        hex: '#a08598',
        count: 1,
        relativeLuminance: 58.52329057764828,
      },
      {
        hex: '#80908f',
        count: 1,
        relativeLuminance: 58.526328589811556,
      },
      {
        hex: '#928a97',
        count: 1,
        relativeLuminance: 58.529544824811424,
      },
      {
        hex: '#6d92a5',
        count: 1,
        relativeLuminance: 58.532612932902694,
      },
      {
        hex: '#a3858f',
        count: 1,
        relativeLuminance: 58.55056045751918,
      },
      {
        hex: '#9d869a',
        count: 1,
        relativeLuminance: 58.55676565712129,
      },
      {
        hex: '#aa8388',
        count: 1,
        relativeLuminance: 58.561289610944314,
      },
      {
        hex: '#828f95',
        count: 1,
        relativeLuminance: 58.565457351371236,
      },
      {
        hex: '#6a92ab',
        count: 1,
        relativeLuminance: 58.5668988182113,
      },
      {
        hex: '#72929d',
        count: 1,
        relativeLuminance: 58.57371339393963,
      },
      {
        hex: '#6b9498',
        count: 1,
        relativeLuminance: 58.57662280573021,
      },
      {
        hex: '#818f98',
        count: 1,
        relativeLuminance: 58.58264656814899,
      },
      {
        hex: '#988990',
        count: 1,
        relativeLuminance: 58.58385341766794,
      },
      {
        hex: '#6e939c',
        count: 1,
        relativeLuminance: 58.5860947969924,
      },
      {
        hex: '#928a99',
        count: 1,
        relativeLuminance: 58.5908869514967,
      },
      {
        hex: '#a4858d',
        count: 1,
        relativeLuminance: 58.59350570443034,
      },
      {
        hex: '#7c909b',
        count: 1,
        relativeLuminance: 58.60052131520756,
      },
      {
        hex: '#79928f',
        count: 3,
        relativeLuminance: 58.60774290837105,
      },
      {
        hex: '#7c9192',
        count: 1,
        relativeLuminance: 58.612715360804145,
      },
      {
        hex: '#8e8b9c',
        count: 2,
        relativeLuminance: 58.61749466015053,
      },
      {
        hex: '#7f8f9e',
        count: 1,
        relativeLuminance: 58.62613635456985,
      },
      {
        hex: '#a08693',
        count: 1,
        relativeLuminance: 58.63061330344222,
      },
      {
        hex: '#77919e',
        count: 1,
        relativeLuminance: 58.640884609196235,
      },
      {
        hex: '#948a95',
        count: 2,
        relativeLuminance: 58.642215550722526,
      },
      {
        hex: '#858f90',
        count: 1,
        relativeLuminance: 58.64436309447878,
      },
      {
        hex: '#6f92a5',
        count: 2,
        relativeLuminance: 58.652584648571946,
      },
      {
        hex: '#918b95',
        count: 1,
        relativeLuminance: 58.65353454428178,
      },
      {
        hex: '#6c93a2',
        count: 1,
        relativeLuminance: 58.66222600916858,
      },
      {
        hex: '#8d8ba0',
        count: 1,
        relativeLuminance: 58.663911822734704,
      },
      {
        hex: '#8c8d91',
        count: 1,
        relativeLuminance: 58.66719003844831,
      },
      {
        hex: '#75929a',
        count: 1,
        relativeLuminance: 58.67020863564959,
      },
      {
        hex: '#858f91',
        count: 1,
        relativeLuminance: 58.673036233313184,
      },
      {
        hex: '#a3868b',
        count: 1,
        relativeLuminance: 58.69636021713744,
      },
      {
        hex: '#7791a0',
        count: 1,
        relativeLuminance: 58.70568118407492,
      },
      {
        hex: '#7192a3',
        count: 1,
        relativeLuminance: 58.707565496565564,
      },
      {
        hex: '#918b97',
        count: 1,
        relativeLuminance: 58.713645549029465,
      },
      {
        hex: '#9f8699',
        count: 1,
        relativeLuminance: 58.715216041644126,
      },
      {
        hex: '#7f9098',
        count: 2,
        relativeLuminance: 58.7194208734054,
      },
      {
        hex: '#9c879a',
        count: 1,
        relativeLuminance: 58.72260550899546,
      },
      {
        hex: '#6993a9',
        count: 1,
        relativeLuminance: 58.7284829125699,
      },
      {
        hex: '#6c93a4',
        count: 1,
        relativeLuminance: 58.72908930956882,
      },
      {
        hex: '#7c9196',
        count: 1,
        relativeLuminance: 58.73092863286921,
      },
      {
        hex: '#9a8898',
        count: 1,
        relativeLuminance: 58.73786852873104,
      },
      {
        hex: '#84908c',
        count: 1,
        relativeLuminance: 58.73801652158605,
      },
      {
        hex: '#938a9b',
        count: 1,
        relativeLuminance: 58.73900271966295,
      },
      {
        hex: '#958b8c',
        count: 1,
        relativeLuminance: 58.74057570292494,
      },
      {
        hex: '#6f92a8',
        count: 1,
        relativeLuminance: 58.75564367963537,
      },
      {
        hex: '#868e9b',
        count: 1,
        relativeLuminance: 58.77096806997113,
      },
      {
        hex: '#a5877c',
        count: 1,
        relativeLuminance: 58.77247798807524,
      },
      {
        hex: '#928a9f',
        count: 1,
        relativeLuminance: 58.7805162416099,
      },
      {
        hex: '#7f909a',
        count: 2,
        relativeLuminance: 58.78096684982876,
      },
      {
        hex: '#829093',
        count: 1,
        relativeLuminance: 58.78774941469064,
      },
      {
        hex: '#97899a',
        count: 1,
        relativeLuminance: 58.79221017878743,
      },
      {
        hex: '#a48594',
        count: 1,
        relativeLuminance: 58.794038052373,
      },
      {
        hex: '#71939d',
        count: 1,
        relativeLuminance: 58.80034306168275,
      },
      {
        hex: '#759395',
        count: 1,
        relativeLuminance: 58.80666799415452,
      },
      {
        hex: '#66959f',
        count: 1,
        relativeLuminance: 58.81001981055971,
      },
      {
        hex: '#6d92ad',
        count: 1,
        relativeLuminance: 58.813025284930916,
      },
      {
        hex: '#8f8c97',
        count: 1,
        relativeLuminance: 58.81680243711796,
      },
      {
        hex: '#76929d',
        count: 1,
        relativeLuminance: 58.82932042874246,
      },
      {
        hex: '#749398',
        count: 1,
        relativeLuminance: 58.83284874960506,
      },
      {
        hex: '#7b919c',
        count: 1,
        relativeLuminance: 58.846422989696705,
      },
      {
        hex: '#729493',
        count: 1,
        relativeLuminance: 58.84804731299022,
      },
      {
        hex: '#76948a',
        count: 1,
        relativeLuminance: 58.850404752497326,
      },
      {
        hex: '#7d9198',
        count: 1,
        relativeLuminance: 58.86101920753326,
      },
      {
        hex: '#6495a4',
        count: 1,
        relativeLuminance: 58.867316060878494,
      },
      {
        hex: '#8d8c9e',
        count: 1,
        relativeLuminance: 58.87005990327111,
      },
      {
        hex: '#6f93a3',
        count: 2,
        relativeLuminance: 58.8735670269141,
      },
      {
        hex: '#7a919f',
        count: 1,
        relativeLuminance: 58.87383460614299,
      },
      {
        hex: '#6994a5',
        count: 1,
        relativeLuminance: 58.881354158224184,
      },
      {
        hex: '#8f8d90',
        count: 1,
        relativeLuminance: 58.8844438439867,
      },
      {
        hex: '#6c94a0',
        count: 3,
        relativeLuminance: 58.887237011519446,
      },
      {
        hex: '#799299',
        count: 1,
        relativeLuminance: 58.90263897895849,
      },
      {
        hex: '#6a94a4',
        count: 2,
        relativeLuminance: 58.90420830165563,
      },
      {
        hex: '#819190',
        count: 1,
        relativeLuminance: 58.910907784465294,
      },
      {
        hex: '#958a9b',
        count: 1,
        relativeLuminance: 58.912331177618185,
      },
      {
        hex: '#7d919a',
        count: 1,
        relativeLuminance: 58.92233286355818,
      },
      {
        hex: '#7e9198',
        count: 1,
        relativeLuminance: 58.93118408720254,
      },
      {
        hex: '#719498',
        count: 1,
        relativeLuminance: 58.934984937767396,
      },
      {
        hex: '#888e9c',
        count: 1,
        relativeLuminance: 58.95631267381111,
      },
      {
        hex: '#988c80',
        count: 1,
        relativeLuminance: 58.96514393964041,
      },
      {
        hex: '#829099',
        count: 1,
        relativeLuminance: 58.96715475540668,
      },
      {
        hex: '#6e949f',
        count: 1,
        relativeLuminance: 58.97248431070254,
      },
      {
        hex: '#908ba2',
        count: 1,
        relativeLuminance: 58.977256310933896,
      },
      {
        hex: '#6794ab',
        count: 1,
        relativeLuminance: 58.97770372507752,
      },
      {
        hex: '#9a88a0',
        count: 1,
        relativeLuminance: 58.98951234424379,
      },
      {
        hex: '#908c9a',
        count: 1,
        relativeLuminance: 58.99149613955922,
      },
      {
        hex: '#769399',
        count: 1,
        relativeLuminance: 58.991813854146415,
      },
      {
        hex: '#6d93aa',
        count: 1,
        relativeLuminance: 58.993691908837874,
      },
      {
        hex: '#a28790',
        count: 1,
        relativeLuminance: 58.99555892705668,
      },
      {
        hex: '#779397',
        count: 1,
        relativeLuminance: 58.99629554789439,
      },
      {
        hex: '#9b8995',
        count: 1,
        relativeLuminance: 59.00190862127728,
      },
      {
        hex: '#7393a0',
        count: 1,
        relativeLuminance: 59.02089348251971,
      },
      {
        hex: '#7293a2',
        count: 2,
        relativeLuminance: 59.023795461897606,
      },
      {
        hex: '#78929f',
        count: 1,
        relativeLuminance: 59.02431528572427,
      },
      {
        hex: '#968b93',
        count: 1,
        relativeLuminance: 59.025988747409215,
      },
      {
        hex: '#6e94a1',
        count: 1,
        relativeLuminance: 59.037229521444004,
      },
      {
        hex: '#839099',
        count: 1,
        relativeLuminance: 59.040653134334875,
      },
      {
        hex: '#87908f',
        count: 1,
        relativeLuminance: 59.04884293988776,
      },
      {
        hex: '#869092',
        count: 1,
        relativeLuminance: 59.0576993985574,
      },
      {
        hex: '#7b929a',
        count: 1,
        relativeLuminance: 59.068451189388526,
      },
      {
        hex: '#a4878c',
        count: 1,
        relativeLuminance: 59.07961421598141,
      },
      {
        hex: '#ae838c',
        count: 1,
        relativeLuminance: 59.08959157655444,
      },
      {
        hex: '#7293a4',
        count: 1,
        relativeLuminance: 59.0900166860217,
      },
      {
        hex: '#6d94a5',
        count: 1,
        relativeLuminance: 59.110728086192225,
      },
      {
        hex: '#988a99',
        count: 3,
        relativeLuminance: 59.11500148054054,
      },
      {
        hex: '#978c8a',
        count: 1,
        relativeLuminance: 59.13177052274696,
      },
      {
        hex: '#86918b',
        count: 1,
        relativeLuminance: 59.143526397741624,
      },
      {
        hex: '#72949d',
        count: 1,
        relativeLuminance: 59.15119880583262,
      },
      {
        hex: '#7f919d',
        count: 1,
        relativeLuminance: 59.15636416336355,
      },
      {
        hex: '#7293a6',
        count: 1,
        relativeLuminance: 59.157168307906886,
      },
      {
        hex: '#8c8da1',
        count: 1,
        relativeLuminance: 59.157530072256094,
      },
      {
        hex: '#829196',
        count: 1,
        relativeLuminance: 59.157734390888564,
      },
      {
        hex: '#8d8f8c',
        count: 1,
        relativeLuminance: 59.15999890250242,
      },
      {
        hex: '#6b94aa',
        count: 1,
        relativeLuminance: 59.16625881010543,
      },
      {
        hex: '#978b95',
        count: 1,
        relativeLuminance: 59.17232214060047,
      },
      {
        hex: '#ad848a',
        count: 1,
        relativeLuminance: 59.17901519387378,
      },
      {
        hex: '#72949e',
        count: 1,
        relativeLuminance: 59.18278542975217,
      },
      {
        hex: '#6f94a4',
        count: 1,
        relativeLuminance: 59.195498661060356,
      },
      {
        hex: '#9f8898',
        count: 1,
        relativeLuminance: 59.2015649586704,
      },
      {
        hex: '#a08895',
        count: 1,
        relativeLuminance: 59.20670065093287,
      },
      {
        hex: '#84909c',
        count: 1,
        relativeLuminance: 59.207181847106185,
      },
      {
        hex: '#ac848f',
        count: 1,
        relativeLuminance: 59.210864135104146,
      },
      {
        hex: '#759499',
        count: 1,
        relativeLuminance: 59.21571129814724,
      },
      {
        hex: '#6b95a3',
        count: 1,
        relativeLuminance: 59.21884819954643,
      },
      {
        hex: '#7c929d',
        count: 1,
        relativeLuminance: 59.230010835379005,
      },
      {
        hex: '#988b94',
        count: 1,
        relativeLuminance: 59.23146337485568,
      },
      {
        hex: '#9a8a97',
        count: 1,
        relativeLuminance: 59.23384613533349,
      },
      {
        hex: '#6e94a7',
        count: 2,
        relativeLuminance: 59.23704330092896,
      },
      {
        hex: '#77939f',
        count: 1,
        relativeLuminance: 59.244168188097234,
      },
      {
        hex: '#7493a5',
        count: 1,
        relativeLuminance: 59.248280095314044,
      },
      {
        hex: '#6a95a6',
        count: 1,
        relativeLuminance: 59.26222986704589,
      },
      {
        hex: '#869099',
        count: 1,
        relativeLuminance: 59.26454508091906,
      },
      {
        hex: '#968b9b',
        count: 1,
        relativeLuminance: 59.2655259405777,
      },
      {
        hex: '#a98593',
        count: 1,
        relativeLuminance: 59.266290208663406,
      },
      {
        hex: '#8f8e94',
        count: 1,
        relativeLuminance: 59.2728124635788,
      },
      {
        hex: '#978b99',
        count: 1,
        relativeLuminance: 59.291811249627784,
      },
      {
        hex: '#978c90',
        count: 1,
        relativeLuminance: 59.296068066158526,
      },
      {
        hex: '#ad8585',
        count: 1,
        relativeLuminance: 59.299423578294906,
      },
      {
        hex: '#6795ac',
        count: 1,
        relativeLuminance: 59.3033370728931,
      },
      {
        hex: '#7e929b',
        count: 1,
        relativeLuminance: 59.30602720596167,
      },
      {
        hex: '#7693a3',
        count: 2,
        relativeLuminance: 59.30913364692296,
      },
      {
        hex: '#7f9299',
        count: 1,
        relativeLuminance: 59.31497692835873,
      },
      {
        hex: '#a58791',
        count: 1,
        relativeLuminance: 59.316728995268875,
      },
      {
        hex: '#6a95a8',
        count: 1,
        relativeLuminance: 59.330121797633595,
      },
      {
        hex: '#8490a0',
        count: 1,
        relativeLuminance: 59.33369727038678,
      },
      {
        hex: '#879099',
        count: 1,
        relativeLuminance: 59.340302779832086,
      },
      {
        hex: '#bf7e7a',
        count: 1,
        relativeLuminance: 59.34570455381494,
      },
      {
        hex: '#8b8ea1',
        count: 1,
        relativeLuminance: 59.35025284061847,
      },
      {
        hex: '#968c95',
        count: 1,
        relativeLuminance: 59.352035200296655,
      },
      {
        hex: '#86909c',
        count: 1,
        relativeLuminance: 59.35664116450924,
      },
      {
        hex: '#9b89a1',
        count: 1,
        relativeLuminance: 59.37307649233736,
      },
      {
        hex: '#918d9b',
        count: 2,
        relativeLuminance: 59.37578821527897,
      },
      {
        hex: '#789498',
        count: 1,
        relativeLuminance: 59.37929026362748,
      },
      {
        hex: '#6796a6',
        count: 1,
        relativeLuminance: 59.3880376037888,
      },
      {
        hex: '#9f8996',
        count: 1,
        relativeLuminance: 59.40160810511992,
      },
      {
        hex: '#938d97',
        count: 2,
        relativeLuminance: 59.422564049460505,
      },
      {
        hex: '#998b98',
        count: 1,
        relativeLuminance: 59.43845545991188,
      },
      {
        hex: '#908da0',
        count: 1,
        relativeLuminance: 59.44994553393673,
      },
      {
        hex: '#7194a8',
        count: 1,
        relativeLuminance: 59.450459739381515,
      },
      {
        hex: '#7c939b',
        count: 1,
        relativeLuminance: 59.45174641983324,
      },
      {
        hex: '#7094aa',
        count: 1,
        relativeLuminance: 59.458831039478085,
      },
      {
        hex: '#76949f',
        count: 1,
        relativeLuminance: 59.465894684852785,
      },
      {
        hex: '#7494a3',
        count: 2,
        relativeLuminance: 59.46826302121444,
      },
      {
        hex: '#988b9c',
        count: 1,
        relativeLuminance: 59.47171703029085,
      },
      {
        hex: '#74959a',
        count: 1,
        relativeLuminance: 59.4717646834185,
      },
      {
        hex: '#7394a5',
        count: 2,
        relativeLuminance: 59.47201086494681,
      },
      {
        hex: '#7e9398',
        count: 1,
        relativeLuminance: 59.49830497862919,
      },
      {
        hex: '#9c8a9a',
        count: 1,
        relativeLuminance: 59.50553021556982,
      },
      {
        hex: '#958c9d',
        count: 1,
        relativeLuminance: 59.50742659441178,
      },
      {
        hex: '#769597',
        count: 1,
        relativeLuminance: 59.50812036777347,
      },
      {
        hex: '#988d8b',
        count: 1,
        relativeLuminance: 59.51580657535533,
      },
      {
        hex: '#74959c',
        count: 2,
        relativeLuminance: 59.5331040970232,
      },
      {
        hex: '#6c96a2',
        count: 1,
        relativeLuminance: 59.534268396256806,
      },
      {
        hex: '#9e8a95',
        count: 1,
        relativeLuminance: 59.540206344113614,
      },
      {
        hex: '#8d8ea2',
        count: 2,
        relativeLuminance: 59.54145772828991,
      },
      {
        hex: '#839297',
        count: 1,
        relativeLuminance: 59.54152308924078,
      },
      {
        hex: '#6f969d',
        count: 1,
        relativeLuminance: 59.54981241508111,
      },
      {
        hex: '#a68796',
        count: 1,
        relativeLuminance: 59.55931327536868,
      },
      {
        hex: '#918e99',
        count: 1,
        relativeLuminance: 59.58546554721427,
      },
      {
        hex: '#7f948f',
        count: 1,
        relativeLuminance: 59.59398260807443,
      },
      {
        hex: '#74959e',
        count: 1,
        relativeLuminance: 59.59536007577711,
      },
      {
        hex: '#7e9492',
        count: 1,
        relativeLuminance: 59.60831712413382,
      },
      {
        hex: '#6d988f',
        count: 1,
        relativeLuminance: 59.60840916759308,
      },
      {
        hex: '#998c95',
        count: 1,
        relativeLuminance: 59.615275400050336,
      },
      {
        hex: '#988c98',
        count: 1,
        relativeLuminance: 59.61542814808425,
      },
      {
        hex: '#9b8b98',
        count: 1,
        relativeLuminance: 59.61746001778441,
      },
      {
        hex: '#899194',
        count: 1,
        relativeLuminance: 59.623358503011715,
      },
      {
        hex: '#b9827b',
        count: 1,
        relativeLuminance: 59.62547857639963,
      },
      {
        hex: '#7794a2',
        count: 1,
        relativeLuminance: 59.62617974198898,
      },
      {
        hex: '#7f939a',
        count: 1,
        relativeLuminance: 59.62815768534327,
      },
      {
        hex: '#7395a1',
        count: 1,
        relativeLuminance: 59.628505426155684,
      },
      {
        hex: '#7195a5',
        count: 1,
        relativeLuminance: 59.63694266918351,
      },
      {
        hex: '#7c93a1',
        count: 1,
        relativeLuminance: 59.64014085119679,
      },
      {
        hex: '#a68890',
        count: 1,
        relativeLuminance: 59.64304586288175,
      },
      {
        hex: '#7095a7',
        count: 1,
        relativeLuminance: 59.643710333269624,
      },
      {
        hex: '#889198',
        count: 1,
        relativeLuminance: 59.664054459627266,
      },
      {
        hex: '#6b9895',
        count: 1,
        relativeLuminance: 59.66420171406676,
      },
      {
        hex: '#6c96a6',
        count: 1,
        relativeLuminance: 59.66584932231419,
      },
      {
        hex: '#8c8fa0',
        count: 1,
        relativeLuminance: 59.66986956055335,
      },
      {
        hex: '#70969f',
        count: 1,
        relativeLuminance: 59.67187295405043,
      },
      {
        hex: '#6f95aa',
        count: 1,
        relativeLuminance: 59.68644317648952,
      },
      {
        hex: '#849390',
        count: 1,
        relativeLuminance: 59.69544108590921,
      },
      {
        hex: '#8990a0',
        count: 1,
        relativeLuminance: 59.71029520244518,
      },
      {
        hex: '#9a8b9e',
        count: 2,
        relativeLuminance: 59.711144972566146,
      },
      {
        hex: '#978d96',
        count: 1,
        relativeLuminance: 59.7358132748427,
      },
      {
        hex: '#78959b',
        count: 2,
        relativeLuminance: 59.75707773692844,
      },
      {
        hex: '#73969c',
        count: 1,
        relativeLuminance: 59.76007924431259,
      },
      {
        hex: '#799599',
        count: 1,
        relativeLuminance: 59.761817065943276,
      },
      {
        hex: '#6b97a2',
        count: 1,
        relativeLuminance: 59.768981380107334,
      },
      {
        hex: '#9d8b97',
        count: 2,
        relativeLuminance: 59.769026444661336,
      },
      {
        hex: '#918e9f',
        count: 1,
        relativeLuminance: 59.77015549127108,
      },
      {
        hex: '#a38996',
        count: 1,
        relativeLuminance: 59.78004302122322,
      },
      {
        hex: '#8a9197',
        count: 1,
        relativeLuminance: 59.78781411207659,
      },
      {
        hex: '#8c909b',
        count: 1,
        relativeLuminance: 59.787893379911694,
      },
      {
        hex: '#6997a6',
        count: 1,
        relativeLuminance: 59.788911680023844,
      },
      {
        hex: '#978d98',
        count: 1,
        relativeLuminance: 59.794719285066634,
      },
      {
        hex: '#6f96a5',
        count: 1,
        relativeLuminance: 59.80626668426882,
      },
      {
        hex: '#879296',
        count: 1,
        relativeLuminance: 59.80795178666696,
      },
      {
        hex: '#77959f',
        count: 1,
        relativeLuminance: 59.81642510127078,
      },
      {
        hex: '#809495',
        count: 2,
        relativeLuminance: 59.83352491391233,
      },
      {
        hex: '#789694',
        count: 1,
        relativeLuminance: 59.838004156683624,
      },
      {
        hex: '#7195ab',
        count: 1,
        relativeLuminance: 59.83981008225608,
      },
      {
        hex: '#8f9095',
        count: 1,
        relativeLuminance: 59.84904189513014,
      },
      {
        hex: '#aa8889',
        count: 1,
        relativeLuminance: 59.85304423750344,
      },
      {
        hex: '#7a94a3',
        count: 1,
        relativeLuminance: 59.85414622441601,
      },
      {
        hex: '#6d96aa',
        count: 1,
        relativeLuminance: 59.85817388193759,
      },
      {
        hex: '#84929f',
        count: 1,
        relativeLuminance: 59.858466078751874,
      },
      {
        hex: '#89919c',
        count: 1,
        relativeLuminance: 59.86114022203161,
      },
      {
        hex: '#879298',
        count: 1,
        relativeLuminance: 59.86674587112192,
      },
      {
        hex: '#82939b',
        count: 1,
        relativeLuminance: 59.8705036570349,
      },
      {
        hex: '#7f9684',
        count: 1,
        relativeLuminance: 59.880300939112985,
      },
      {
        hex: '#988e8f',
        count: 1,
        relativeLuminance: 59.892868915468185,
      },
      {
        hex: '#6897ab',
        count: 1,
        relativeLuminance: 59.90368537598779,
      },
      {
        hex: '#c27f79',
        count: 1,
        relativeLuminance: 59.914526252746796,
      },
      {
        hex: '#74969f',
        count: 1,
        relativeLuminance: 59.914838569626696,
      },
      {
        hex: '#8093a1',
        count: 1,
        relativeLuminance: 59.91568752991681,
      },
      {
        hex: '#7a959c',
        count: 3,
        relativeLuminance: 59.91833009904482,
      },
      {
        hex: '#849398',
        count: 1,
        relativeLuminance: 59.92483055120009,
      },
      {
        hex: '#948e9c',
        count: 1,
        relativeLuminance: 59.92684588873682,
      },
      {
        hex: '#998d97',
        count: 1,
        relativeLuminance: 59.93967882415494,
      },
      {
        hex: '#6c96ae',
        count: 1,
        relativeLuminance: 59.94004641598977,
      },
      {
        hex: '#7496a0',
        count: 1,
        relativeLuminance: 59.946299583274524,
      },
      {
        hex: '#7296a4',
        count: 1,
        relativeLuminance: 59.95231980917933,
      },
      {
        hex: '#7196a6',
        count: 1,
        relativeLuminance: 59.95785790981901,
      },
      {
        hex: '#7d9597',
        count: 1,
        relativeLuminance: 59.969268194738845,
      },
      {
        hex: '#a28a97',
        count: 1,
        relativeLuminance: 59.9723997875966,
      },
      {
        hex: '#918f9d',
        count: 1,
        relativeLuminance: 59.97805986279481,
      },
      {
        hex: '#84939a',
        count: 1,
        relativeLuminance: 59.98444008828676,
      },
      {
        hex: '#7994a9',
        count: 1,
        relativeLuminance: 59.98738262498638,
      },
      {
        hex: '#6c97a7',
        count: 1,
        relativeLuminance: 59.98923282610524,
      },
      {
        hex: '#9c8c99',
        count: 1,
        relativeLuminance: 60.00059464308828,
      },
      {
        hex: '#968e99',
        count: 1,
        relativeLuminance: 60.005949962296455,
      },
      {
        hex: '#7496a2',
        count: 1,
        relativeLuminance: 60.009904889393596,
      },
      {
        hex: '#749799',
        count: 1,
        relativeLuminance: 60.02052770459855,
      },
      {
        hex: '#978f8d',
        count: 1,
        relativeLuminance: 60.02159835759757,
      },
      {
        hex: '#988f8a',
        count: 1,
        relativeLuminance: 60.02878319331509,
      },
      {
        hex: '#988d9d',
        count: 1,
        relativeLuminance: 60.03254068474975,
      },
      {
        hex: '#919096',
        count: 1,
        relativeLuminance: 60.04045480044566,
      },
      {
        hex: '#7a95a0',
        count: 1,
        relativeLuminance: 60.042492214710194,
      },
      {
        hex: '#6d97a7',
        count: 1,
        relativeLuminance: 60.04601493890357,
      },
      {
        hex: '#6a97ac',
        count: 1,
        relativeLuminance: 60.04736308267077,
      },
      {
        hex: '#7197a0',
        count: 1,
        relativeLuminance: 60.0528028898746,
      },
      {
        hex: '#919282',
        count: 1,
        relativeLuminance: 60.05930028237887,
      },
      {
        hex: '#889488',
        count: 1,
        relativeLuminance: 60.06146426519233,
      },
      {
        hex: '#829498',
        count: 1,
        relativeLuminance: 60.062373574462754,
      },
      {
        hex: '#9c8d92',
        count: 1,
        relativeLuminance: 60.06269854677615,
      },
      {
        hex: '#958e9e',
        count: 2,
        relativeLuminance: 60.072760368194665,
      },
      {
        hex: '#90909a',
        count: 1,
        relativeLuminance: 60.07700240611268,
      },
      {
        hex: '#72979f',
        count: 1,
        relativeLuminance: 60.081429007575764,
      },
      {
        hex: '#849494',
        count: 1,
        relativeLuminance: 60.090086609018186,
      },
      {
        hex: '#6c97aa',
        count: 1,
        relativeLuminance: 60.09024943495231,
      },
      {
        hex: '#7696a1',
        count: 1,
        relativeLuminance: 60.10265924573592,
      },
      {
        hex: '#7a9699',
        count: 1,
        relativeLuminance: 60.11408648110685,
      },
      {
        hex: '#7197a2',
        count: 2,
        relativeLuminance: 60.11623039933302,
      },
      {
        hex: '#989083',
        count: 1,
        relativeLuminance: 60.12345772992025,
      },
      {
        hex: '#968e9d',
        count: 1,
        relativeLuminance: 60.12681763862926,
      },
      {
        hex: '#7096ad',
        count: 1,
        relativeLuminance: 60.13598646256496,
      },
      {
        hex: '#a18b97',
        count: 1,
        relativeLuminance: 60.137873924505314,
      },
      {
        hex: '#79969c',
        count: 1,
        relativeLuminance: 60.13901399321608,
      },
      {
        hex: '#6d96b2',
        count: 1,
        relativeLuminance: 60.139296481263145,
      },
      {
        hex: '#938f9d',
        count: 1,
        relativeLuminance: 60.14291445600463,
      },
      {
        hex: '#829591',
        count: 1,
        relativeLuminance: 60.14539643049815,
      },
      {
        hex: '#9e8c98',
        count: 2,
        relativeLuminance: 60.151869196621305,
      },
      {
        hex: '#8393a2',
        count: 1,
        relativeLuminance: 60.160032961278844,
      },
      {
        hex: '#7596a5',
        count: 1,
        relativeLuminance: 60.16886451209791,
      },
      {
        hex: '#7b95a2',
        count: 1,
        relativeLuminance: 60.171795072328365,
      },
      {
        hex: '#7c9697',
        count: 1,
        relativeLuminance: 60.18763119458721,
      },
      {
        hex: '#958f99',
        count: 2,
        relativeLuminance: 60.189644269106225,
      },
      {
        hex: '#8e919a',
        count: 1,
        relativeLuminance: 60.18989949976259,
      },
      {
        hex: '#889397',
        count: 1,
        relativeLuminance: 60.191125435084956,
      },
      {
        hex: '#a78a8e',
        count: 1,
        relativeLuminance: 60.199548551243225,
      },
      {
        hex: '#79969e',
        count: 1,
        relativeLuminance: 60.20028425033723,
      },
      {
        hex: '#9b8d9a',
        count: 1,
        relativeLuminance: 60.204895628014796,
      },
      {
        hex: '#a98a87',
        count: 1,
        relativeLuminance: 60.213705899837606,
      },
      {
        hex: '#7e959d',
        count: 1,
        relativeLuminance: 60.21692118279374,
      },
      {
        hex: '#909196',
        count: 1,
        relativeLuminance: 60.232381881106335,
      },
      {
        hex: '#76979c',
        count: 1,
        relativeLuminance: 60.23504168489755,
      },
      {
        hex: '#938fa0',
        count: 1,
        relativeLuminance: 60.23590241776682,
      },
      {
        hex: '#6e97ab',
        count: 1,
        relativeLuminance: 60.2381024361691,
      },
      {
        hex: '#9d8c9e',
        count: 1,
        relativeLuminance: 60.24204040139584,
      },
      {
        hex: '#7097a8',
        count: 2,
        relativeLuminance: 60.25298350801512,
      },
      {
        hex: '#91928a',
        count: 1,
        relativeLuminance: 60.259581284645705,
      },
      {
        hex: '#6a99a1',
        count: 1,
        relativeLuminance: 60.26616268114503,
      },
      {
        hex: '#9e8d93',
        count: 1,
        relativeLuminance: 60.271164243720946,
      },
      {
        hex: '#7e9696',
        count: 1,
        relativeLuminance: 60.29341342832137,
      },
      {
        hex: '#9d8d97',
        count: 1,
        relativeLuminance: 60.2951081535485,
      },
      {
        hex: '#5d9aad',
        count: 1,
        relativeLuminance: 60.29803229338137,
      },
      {
        hex: '#719a8a',
        count: 1,
        relativeLuminance: 60.299285690795514,
      },
      {
        hex: '#a78b88',
        count: 1,
        relativeLuminance: 60.300545925626025,
      },
      {
        hex: '#679a9e',
        count: 1,
        relativeLuminance: 60.305092922093465,
      },
      {
        hex: '#8e9295',
        count: 1,
        relativeLuminance: 60.318574054233366,
      },
      {
        hex: '#9a8e98',
        count: 2,
        relativeLuminance: 60.32263580640041,
      },
      {
        hex: '#8d9298',
        count: 1,
        relativeLuminance: 60.32662124012401,
      },
      {
        hex: '#9e8d95',
        count: 1,
        relativeLuminance: 60.327775414615644,
      },
      {
        hex: '#a08d8f',
        count: 1,
        relativeLuminance: 60.34360311168179,
      },
      {
        hex: '#998e9c',
        count: 1,
        relativeLuminance: 60.35440374174658,
      },
      {
        hex: '#6b98ab',
        count: 1,
        relativeLuminance: 60.357920005488765,
      },
      {
        hex: '#7697a0',
        count: 1,
        relativeLuminance: 60.358176797004475,
      },
      {
        hex: '#92909e',
        count: 2,
        relativeLuminance: 60.36111926949022,
      },
      {
        hex: '#78979c',
        count: 2,
        relativeLuminance: 60.36152525203707,
      },
      {
        hex: '#85949b',
        count: 1,
        relativeLuminance: 60.36716880504527,
      },
      {
        hex: '#8a9398',
        count: 1,
        relativeLuminance: 60.37144781167632,
      },
      {
        hex: '#7d969b',
        count: 1,
        relativeLuminance: 60.37279977875029,
      },
      {
        hex: '#829599',
        count: 1,
        relativeLuminance: 60.3740501772685,
      },
      {
        hex: '#9a8e9a',
        count: 1,
        relativeLuminance: 60.38162629449086,
      },
      {
        hex: '#a78c81',
        count: 1,
        relativeLuminance: 60.388328003406414,
      },
      {
        hex: '#978f9a',
        count: 1,
        relativeLuminance: 60.38894206300269,
      },
      {
        hex: '#9d8e91',
        count: 1,
        relativeLuminance: 60.38993155052886,
      },
      {
        hex: '#7a96a2',
        count: 1,
        relativeLuminance: 60.390349141271585,
      },
      {
        hex: '#7597a3',
        count: 2,
        relativeLuminance: 60.39085387610493,
      },
      {
        hex: '#929196',
        count: 1,
        relativeLuminance: 60.39471404914944,
      },
      {
        hex: '#969094',
        count: 2,
        relativeLuminance: 60.399053496397514,
      },
      {
        hex: '#7e95a3',
        count: 1,
        relativeLuminance: 60.40457041722425,
      },
      {
        hex: '#7e969a',
        count: 1,
        relativeLuminance: 60.41040852656755,
      },
      {
        hex: '#929197',
        count: 1,
        relativeLuminance: 60.423549935971835,
      },
      {
        hex: '#bb847f',
        count: 1,
        relativeLuminance: 60.42664463721378,
      },
      {
        hex: '#a58b94',
        count: 1,
        relativeLuminance: 60.4293692804647,
      },
      {
        hex: '#7696ab',
        count: 1,
        relativeLuminance: 60.43099938439289,
      },
      {
        hex: '#b68682',
        count: 1,
        relativeLuminance: 60.43319478117168,
      },
      {
        hex: '#7298a1',
        count: 1,
        relativeLuminance: 60.43328868113619,
      },
      {
        hex: '#be837b',
        count: 1,
        relativeLuminance: 60.43571111477473,
      },
      {
        hex: '#a18d8f',
        count: 1,
        relativeLuminance: 60.43587211455876,
      },
      {
        hex: '#9a8e9c',
        count: 2,
        relativeLuminance: 60.4415147728303,
      },
      {
        hex: '#89939d',
        count: 1,
        relativeLuminance: 60.44489516598249,
      },
      {
        hex: '#998e9f',
        count: 1,
        relativeLuminance: 60.44612959679354,
      },
      {
        hex: '#7a96a4',
        count: 2,
        relativeLuminance: 60.45422525149509,
      },
      {
        hex: '#968f9f',
        count: 1,
        relativeLuminance: 60.45560590616566,
      },
      {
        hex: '#aa8a8d',
        count: 2,
        relativeLuminance: 60.46800989136233,
      },
      {
        hex: '#8c92a0',
        count: 1,
        relativeLuminance: 60.490417610690955,
      },
      {
        hex: '#989187',
        count: 1,
        relativeLuminance: 60.4941387157419,
      },
    ],
    closestHex: {
      hex: '#5289a8',
      proximity: 0.006532441443603432,
    },
    averageLum: 54.559877400729825,
    pixelCount: 2575,
  },
  {
    bucket: '77',
    colors: [
      {
        hex: '#c5aa99',
        count: 1,
        relativeLuminance: 71.50041878267376,
      },
      {
        hex: '#beac9e',
        count: 2,
        relativeLuminance: 71.50119633311259,
      },
      {
        hex: '#adb1a2',
        count: 1,
        relativeLuminance: 71.51229423575401,
      },
      {
        hex: '#cda88e',
        count: 1,
        relativeLuminance: 71.51245787552524,
      },
      {
        hex: '#b8ada9',
        count: 1,
        relativeLuminance: 71.51562817748551,
      },
      {
        hex: '#c3ac8a',
        count: 1,
        relativeLuminance: 71.51567420930624,
      },
      {
        hex: '#cca79e',
        count: 1,
        relativeLuminance: 71.51655501352626,
      },
      {
        hex: '#b2afa8',
        count: 1,
        relativeLuminance: 71.52243106584491,
      },
      {
        hex: '#a7b2aa',
        count: 1,
        relativeLuminance: 71.52683478054979,
      },
      {
        hex: '#c2ab9b',
        count: 1,
        relativeLuminance: 71.5289761072574,
      },
      {
        hex: '#adb1a3',
        count: 1,
        relativeLuminance: 71.53654745291178,
      },
      {
        hex: '#baae98',
        count: 1,
        relativeLuminance: 71.54017599174367,
      },
      {
        hex: '#c8aa8e',
        count: 1,
        relativeLuminance: 71.54261979946132,
      },
      {
        hex: '#c0ae7e',
        count: 1,
        relativeLuminance: 71.54474101212814,
      },
      {
        hex: '#beaca0',
        count: 1,
        relativeLuminance: 71.54836140621151,
      },
      {
        hex: '#d1a695',
        count: 1,
        relativeLuminance: 71.55339080595326,
      },
      {
        hex: '#c1aba0',
        count: 1,
        relativeLuminance: 71.55588145741936,
      },
      {
        hex: '#abb0b4',
        count: 1,
        relativeLuminance: 71.55760593459236,
      },
      {
        hex: '#baada4',
        count: 1,
        relativeLuminance: 71.55943632048121,
      },
      {
        hex: '#b8adab',
        count: 1,
        relativeLuminance: 71.56702441281271,
      },
      {
        hex: '#b1b197',
        count: 2,
        relativeLuminance: 71.57244998762084,
      },
      {
        hex: '#cea798',
        count: 1,
        relativeLuminance: 71.57277898050263,
      },
      {
        hex: '#c2ab9d',
        count: 1,
        relativeLuminance: 71.57497169968644,
      },
      {
        hex: '#caa89e',
        count: 1,
        relativeLuminance: 71.57562780083012,
      },
      {
        hex: '#a9b0ba',
        count: 1,
        relativeLuminance: 71.57590763059959,
      },
      {
        hex: '#c4ab95',
        count: 1,
        relativeLuminance: 71.57635112763857,
      },
      {
        hex: '#b6af9d',
        count: 2,
        relativeLuminance: 71.58166976839632,
      },
      {
        hex: '#bdaca5',
        count: 2,
        relativeLuminance: 71.5824348932609,
      },
      {
        hex: '#baada5',
        count: 1,
        relativeLuminance: 71.58404848490898,
      },
      {
        hex: '#bbada2',
        count: 1,
        relativeLuminance: 71.59606214054533,
      },
      {
        hex: '#b8aea2',
        count: 1,
        relativeLuminance: 71.60319168761214,
      },
      {
        hex: '#c1ac97',
        count: 3,
        relativeLuminance: 71.60711283625402,
      },
      {
        hex: '#a2b4a6',
        count: 1,
        relativeLuminance: 71.6072502017092,
      },
      {
        hex: '#c9aa8d',
        count: 2,
        relativeLuminance: 71.61604394250078,
      },
      {
        hex: '#d0a791',
        count: 1,
        relativeLuminance: 71.61714076121677,
      },
      {
        hex: '#c4ab97',
        count: 1,
        relativeLuminance: 71.62004434571283,
      },
      {
        hex: '#bcae94',
        count: 1,
        relativeLuminance: 71.6238666129268,
      },
      {
        hex: '#c8aa92',
        count: 2,
        relativeLuminance: 71.6255916519042,
      },
      {
        hex: '#afb0ab',
        count: 1,
        relativeLuminance: 71.6261124199227,
      },
      {
        hex: '#b0b0a8',
        count: 1,
        relativeLuminance: 71.62816237735335,
      },
      {
        hex: '#b6af9f',
        count: 1,
        relativeLuminance: 71.62836799510137,
      },
      {
        hex: '#a3b4a4',
        count: 1,
        relativeLuminance: 71.62914822856357,
      },
      {
        hex: '#98b6ac',
        count: 1,
        relativeLuminance: 71.62946817718819,
      },
      {
        hex: '#b5afa3',
        count: 1,
        relativeLuminance: 71.64179156521405,
      },
      {
        hex: '#a9b1b3',
        count: 1,
        relativeLuminance: 71.64580521716981,
      },
      {
        hex: '#bead99',
        count: 1,
        relativeLuminance: 71.64595892708746,
      },
      {
        hex: '#c5ab94',
        count: 1,
        relativeLuminance: 71.64599779326032,
      },
      {
        hex: '#b3b09f',
        count: 1,
        relativeLuminance: 71.64824785633633,
      },
      {
        hex: '#bdad9d',
        count: 1,
        relativeLuminance: 71.65007738664974,
      },
      {
        hex: '#b8aea4',
        count: 1,
        relativeLuminance: 71.65177620068673,
      },
      {
        hex: '#cda895',
        count: 2,
        relativeLuminance: 71.65958979421434,
      },
      {
        hex: '#c6aa9c',
        count: 1,
        relativeLuminance: 71.6603968090153,
      },
      {
        hex: '#b6aeac',
        count: 1,
        relativeLuminance: 71.68762589595136,
      },
      {
        hex: '#bead9b',
        count: 2,
        relativeLuminance: 71.69107864395363,
      },
      {
        hex: '#c1ac9b',
        count: 1,
        relativeLuminance: 71.6966361681875,
      },
      {
        hex: '#c8ab89',
        count: 1,
        relativeLuminance: 71.69816577567967,
      },
      {
        hex: '#cbab7a',
        count: 1,
        relativeLuminance: 71.70908848432447,
      },
      {
        hex: '#cea893',
        count: 1,
        relativeLuminance: 71.71327380360745,
      },
      {
        hex: '#bdada0',
        count: 1,
        relativeLuminance: 71.72028166366636,
      },
      {
        hex: '#baaea0',
        count: 1,
        relativeLuminance: 71.72383130285618,
      },
      {
        hex: '#b6b18b',
        count: 1,
        relativeLuminance: 71.7266522031141,
      },
      {
        hex: '#b7b094',
        count: 1,
        relativeLuminance: 71.72842427759898,
      },
      {
        hex: '#c6aa9f',
        count: 1,
        relativeLuminance: 71.73001613865783,
      },
      {
        hex: '#bfad99',
        count: 1,
        relativeLuminance: 71.73339147285705,
      },
      {
        hex: '#bead9d',
        count: 1,
        relativeLuminance: 71.73690447520772,
      },
      {
        hex: '#c8ab8b',
        count: 1,
        relativeLuminance: 71.73734326166678,
      },
      {
        hex: '#b5b09c',
        count: 1,
        relativeLuminance: 71.741036807685,
      },
      {
        hex: '#c1ae84',
        count: 1,
        relativeLuminance: 71.74156267471096,
      },
      {
        hex: '#9cb5b1',
        count: 1,
        relativeLuminance: 71.75135325513716,
      },
      {
        hex: '#a8b1ba',
        count: 1,
        relativeLuminance: 71.76776328902316,
      },
      {
        hex: '#bdae97',
        count: 1,
        relativeLuminance: 71.77519497930405,
      },
      {
        hex: '#c5ac8e',
        count: 1,
        relativeLuminance: 71.77726963892744,
      },
      {
        hex: '#c6ab96',
        count: 1,
        relativeLuminance: 71.78080565390493,
      },
      {
        hex: '#9eb5ad',
        count: 1,
        relativeLuminance: 71.78106421756276,
      },
      {
        hex: '#c9aa95',
        count: 2,
        relativeLuminance: 71.78302657343903,
      },
      {
        hex: '#cda98f',
        count: 1,
        relativeLuminance: 71.78394210385375,
      },
      {
        hex: '#aeb1aa',
        count: 1,
        relativeLuminance: 71.78866218567714,
      },
      {
        hex: '#c9ab89',
        count: 1,
        relativeLuminance: 71.79152364114528,
      },
      {
        hex: '#caaa91',
        count: 1,
        relativeLuminance: 71.79211185241122,
      },
      {
        hex: '#bbadaa',
        count: 1,
        relativeLuminance: 71.79472697663346,
      },
      {
        hex: '#adb397',
        count: 1,
        relativeLuminance: 71.79782257451082,
      },
      {
        hex: '#b3b19a',
        count: 2,
        relativeLuminance: 71.79936105555497,
      },
      {
        hex: '#acb2a6',
        count: 1,
        relativeLuminance: 71.80174923228488,
      },
      {
        hex: '#d0a88e',
        count: 1,
        relativeLuminance: 71.80413509960736,
      },
      {
        hex: '#b1b0ac',
        count: 1,
        relativeLuminance: 71.80965715676425,
      },
      {
        hex: '#cca995',
        count: 3,
        relativeLuminance: 71.81430774469965,
      },
      {
        hex: '#beaf88',
        count: 1,
        relativeLuminance: 71.8152779385419,
      },
      {
        hex: '#aab3a2',
        count: 1,
        relativeLuminance: 71.8221689985493,
      },
      {
        hex: '#c6ab98',
        count: 1,
        relativeLuminance: 71.82466718894784,
      },
      {
        hex: '#b0b29a',
        count: 1,
        relativeLuminance: 71.82831277702799,
      },
      {
        hex: '#b2b19f',
        count: 1,
        relativeLuminance: 71.83402682423211,
      },
      {
        hex: '#cca996',
        count: 1,
        relativeLuminance: 71.83594884949042,
      },
      {
        hex: '#b0b0b0',
        count: 1,
        relativeLuminance: 71.83598383950718,
      },
      {
        hex: '#a5b2bb',
        count: 1,
        relativeLuminance: 71.84449022715062,
      },
      {
        hex: '#b4b0a4',
        count: 1,
        relativeLuminance: 71.84875405371903,
      },
      {
        hex: '#c7ab95',
        count: 3,
        relativeLuminance: 71.85115245533802,
      },
      {
        hex: '#c3ac9a',
        count: 1,
        relativeLuminance: 71.85275940837305,
      },
      {
        hex: '#a9b2b1',
        count: 1,
        relativeLuminance: 71.85942379509528,
      },
      {
        hex: '#beae97',
        count: 2,
        relativeLuminance: 71.86177507778102,
      },
      {
        hex: '#bbaf97',
        count: 2,
        relativeLuminance: 71.8654727419064,
      },
      {
        hex: '#c6ab9a',
        count: 1,
        relativeLuminance: 71.86922983468226,
      },
      {
        hex: '#baaf9b',
        count: 1,
        relativeLuminance: 71.86985310849361,
      },
      {
        hex: '#b4b0a5',
        count: 1,
        relativeLuminance: 71.87320443922545,
      },
      {
        hex: '#c2ac9f',
        count: 1,
        relativeLuminance: 71.87792492360472,
      },
      {
        hex: '#beada3',
        count: 1,
        relativeLuminance: 71.87863142557634,
      },
      {
        hex: '#d1a799',
        count: 1,
        relativeLuminance: 71.88807396223038,
      },
      {
        hex: '#a5b3b3',
        count: 1,
        relativeLuminance: 71.88912130256298,
      },
      {
        hex: '#b6b193',
        count: 1,
        relativeLuminance: 71.89029558449066,
      },
      {
        hex: '#c0af83',
        count: 1,
        relativeLuminance: 71.89646274704612,
      },
      {
        hex: '#bbaf99',
        count: 1,
        relativeLuminance: 71.90962149783302,
      },
      {
        hex: '#c9ab8f',
        count: 1,
        relativeLuminance: 71.91086685589183,
      },
      {
        hex: '#afb2a1',
        count: 1,
        relativeLuminance: 71.91185052263216,
      },
      {
        hex: '#c8aa9f',
        count: 1,
        relativeLuminance: 71.91458091144334,
      },
      {
        hex: '#b5b198',
        count: 1,
        relativeLuminance: 71.91661543656333,
      },
      {
        hex: '#bfada1',
        count: 1,
        relativeLuminance: 71.91774536738961,
      },
      {
        hex: '#b4b0a7',
        count: 1,
        relativeLuminance: 71.92263992210206,
      },
      {
        hex: '#c6ac91',
        count: 1,
        relativeLuminance: 71.9301514680049,
      },
      {
        hex: '#c0ad9e',
        count: 1,
        relativeLuminance: 71.93491681314931,
      },
      {
        hex: '#b3b294',
        count: 1,
        relativeLuminance: 71.93517485916065,
      },
      {
        hex: '#b9aeac',
        count: 1,
        relativeLuminance: 71.93674641468235,
      },
      {
        hex: '#ccaa8f',
        count: 1,
        relativeLuminance: 71.94013812402038,
      },
      {
        hex: '#b2b298',
        count: 2,
        relativeLuminance: 71.94200514391807,
      },
      {
        hex: '#c4ad8e',
        count: 2,
        relativeLuminance: 71.94411175747415,
      },
      {
        hex: '#c5ac96',
        count: 1,
        relativeLuminance: 71.9451047547856,
      },
      {
        hex: '#b7b09e',
        count: 1,
        relativeLuminance: 71.95129125976077,
      },
      {
        hex: '#a9b1be',
        count: 1,
        relativeLuminance: 71.95830812492673,
      },
      {
        hex: '#b8afa6',
        count: 1,
        relativeLuminance: 71.96265393493046,
      },
      {
        hex: '#b6b0a2',
        count: 1,
        relativeLuminance: 71.96327345415462,
      },
      {
        hex: '#b8b09b',
        count: 1,
        relativeLuminance: 71.96541611787025,
      },
      {
        hex: '#b4b19e',
        count: 2,
        relativeLuminance: 71.97121758935116,
      },
      {
        hex: '#b9afa3',
        count: 2,
        relativeLuminance: 71.97281377255165,
      },
      {
        hex: '#c5ad8b',
        count: 1,
        relativeLuminance: 71.97480461951929,
      },
      {
        hex: '#ccaa91',
        count: 1,
        relativeLuminance: 71.98126911338618,
      },
      {
        hex: '#d1a892',
        count: 1,
        relativeLuminance: 71.98445641442903,
      },
      {
        hex: '#bdaf95',
        count: 1,
        relativeLuminance: 71.99305280897194,
      },
      {
        hex: '#c9ab93',
        count: 2,
        relativeLuminance: 71.99387518064793,
      },
      {
        hex: '#b1b1a9',
        count: 2,
        relativeLuminance: 71.9979431761192,
      },
      {
        hex: '#a8b3af',
        count: 1,
        relativeLuminance: 72.00077186862669,
      },
      {
        hex: '#c2ae8d',
        count: 1,
        relativeLuminance: 72.0036941738144,
      },
      {
        hex: '#b8b09d',
        count: 1,
        relativeLuminance: 72.01095678289533,
      },
      {
        hex: '#b6b0a4',
        count: 2,
        relativeLuminance: 72.0114613420379,
      },
      {
        hex: '#bcaea5',
        count: 1,
        relativeLuminance: 72.01414453748487,
      },
      {
        hex: '#b9b18d',
        count: 1,
        relativeLuminance: 72.01520163432933,
      },
      {
        hex: '#beae9e',
        count: 1,
        relativeLuminance: 72.01937851101182,
      },
      {
        hex: '#b9afa5',
        count: 1,
        relativeLuminance: 72.0213724466826,
      },
      {
        hex: '#afb1b0',
        count: 1,
        relativeLuminance: 72.02270592609588,
      },
      {
        hex: '#a2b4b6',
        count: 1,
        relativeLuminance: 72.02839153633887,
      },
      {
        hex: '#c8ab99',
        count: 1,
        relativeLuminance: 72.03093644365723,
      },
      {
        hex: '#c1aca9',
        count: 1,
        relativeLuminance: 72.03227182324028,
      },
      {
        hex: '#c3af7c',
        count: 1,
        relativeLuminance: 72.03912319225041,
      },
      {
        hex: '#cda99b',
        count: 1,
        relativeLuminance: 72.04203998292253,
      },
      {
        hex: '#beae9f',
        count: 2,
        relativeLuminance: 72.04259629991029,
      },
      {
        hex: '#bab097',
        count: 1,
        relativeLuminance: 72.04372416852726,
      },
      {
        hex: '#c0acad',
        count: 1,
        relativeLuminance: 72.04675023129758,
      },
      {
        hex: '#a5b4af',
        count: 1,
        relativeLuminance: 72.05235338789463,
      },
      {
        hex: '#b7afad',
        count: 1,
        relativeLuminance: 72.05729197759473,
      },
      {
        hex: '#b3b1a5',
        count: 3,
        relativeLuminance: 72.05745651086353,
      },
      {
        hex: '#c0ae98',
        count: 1,
        relativeLuminance: 72.05810770590747,
      },
      {
        hex: '#b7b197',
        count: 1,
        relativeLuminance: 72.0583468875621,
      },
      {
        hex: '#bbb094',
        count: 1,
        relativeLuminance: 72.06348333043276,
      },
      {
        hex: '#b6b19b',
        count: 1,
        relativeLuminance: 72.06505362056112,
      },
      {
        hex: '#c3ad98',
        count: 1,
        relativeLuminance: 72.06526721510619,
      },
      {
        hex: '#c9ac8a',
        count: 1,
        relativeLuminance: 72.06613409834593,
      },
      {
        hex: '#d1a896',
        count: 1,
        relativeLuminance: 72.0695208650892,
      },
      {
        hex: '#c7ab9f',
        count: 1,
        relativeLuminance: 72.07525967110911,
      },
      {
        hex: '#a9b2b9',
        count: 1,
        relativeLuminance: 72.08025702243951,
      },
      {
        hex: '#c4aca0',
        count: 1,
        relativeLuminance: 72.08044968395927,
      },
      {
        hex: '#cda99d',
        count: 1,
        relativeLuminance: 72.0875014748073,
      },
      {
        hex: '#beaea1',
        count: 1,
        relativeLuminance: 72.08956073718558,
      },
      {
        hex: '#bbafa1',
        count: 1,
        relativeLuminance: 72.09323930408529,
      },
      {
        hex: '#c0ae9a',
        count: 2,
        relativeLuminance: 72.10243457349367,
      },
      {
        hex: '#cbaa9b',
        count: 1,
        relativeLuminance: 72.10300661556718,
      },
      {
        hex: '#c9ac8c',
        count: 2,
        relativeLuminance: 72.10534318068936,
      },
      {
        hex: '#bfae9e',
        count: 1,
        relativeLuminance: 72.10607186509895,
      },
      {
        hex: '#c5ae85',
        count: 1,
        relativeLuminance: 72.11866006582525,
      },
      {
        hex: '#c8ab9d',
        count: 1,
        relativeLuminance: 72.1210895039364,
      },
      {
        hex: '#b0b2a7',
        count: 1,
        relativeLuminance: 72.13543570504937,
      },
      {
        hex: '#cdaa94',
        count: 1,
        relativeLuminance: 72.13931287366414,
      },
      {
        hex: '#b7b0a6',
        count: 1,
        relativeLuminance: 72.14227073367466,
      },
      {
        hex: '#c9ac8e',
        count: 1,
        relativeLuminance: 72.14523573215547,
      },
      {
        hex: '#c6ad8f',
        count: 1,
        relativeLuminance: 72.1455894052258,
      },
      {
        hex: '#c6ac9b',
        count: 1,
        relativeLuminance: 72.1464566839386,
      },
      {
        hex: '#caab96',
        count: 1,
        relativeLuminance: 72.15115245240241,
      },
      {
        hex: '#ceaa90',
        count: 3,
        relativeLuminance: 72.15148321408081,
      },
      {
        hex: '#b1b1af',
        count: 1,
        relativeLuminance: 72.15259405148704,
      },
      {
        hex: '#b5b0ad',
        count: 1,
        relativeLuminance: 72.15595325881057,
      },
      {
        hex: '#b3b29e',
        count: 1,
        relativeLuminance: 72.1569990289807,
      },
      {
        hex: '#cbab92',
        count: 2,
        relativeLuminance: 72.16003536245606,
      },
      {
        hex: '#bfaf95',
        count: 1,
        relativeLuminance: 72.16578114432372,
      },
      {
        hex: '#c2ae95',
        count: 1,
        relativeLuminance: 72.16921309059954,
      },
      {
        hex: '#d1a98f',
        count: 1,
        relativeLuminance: 72.1712543627379,
      },
      {
        hex: '#caab97',
        count: 1,
        relativeLuminance: 72.1728125870541,
      },
      {
        hex: '#c3ae91',
        count: 2,
        relativeLuminance: 72.17401558446717,
      },
      {
        hex: '#c8ac94',
        count: 1,
        relativeLuminance: 72.17668335366126,
      },
      {
        hex: '#c2ae96',
        count: 1,
        relativeLuminance: 72.19068038684215,
      },
      {
        hex: '#d1a990',
        count: 2,
        relativeLuminance: 72.19162638440103,
      },
      {
        hex: '#c7ac99',
        count: 1,
        relativeLuminance: 72.19310415452814,
      },
      {
        hex: '#bbb09a',
        count: 1,
        relativeLuminance: 72.19409963467271,
      },
      {
        hex: '#b1b39b',
        count: 1,
        relativeLuminance: 72.19765216711617,
      },
      {
        hex: '#b3b2a0',
        count: 2,
        relativeLuminance: 72.20346554164688,
      },
      {
        hex: '#afb3a2',
        count: 1,
        relativeLuminance: 72.20362173647918,
      },
      {
        hex: '#c3ae93',
        count: 1,
        relativeLuminance: 72.2156552323771,
      },
      {
        hex: '#cfaa8f',
        count: 1,
        relativeLuminance: 72.2271729296133,
      },
      {
        hex: '#c7ac9b',
        count: 1,
        relativeLuminance: 72.23766619148928,
      },
      {
        hex: '#c0aea0',
        count: 1,
        relativeLuminance: 72.2396156194195,
      },
      {
        hex: '#a8b5a3',
        count: 2,
        relativeLuminance: 72.23980602035789,
      },
      {
        hex: '#b5b1a6',
        count: 2,
        relativeLuminance: 72.2426727893902,
      },
      {
        hex: '#c3ada0',
        count: 1,
        relativeLuminance: 72.24674570841866,
      },
      {
        hex: '#cfaa90',
        count: 2,
        relativeLuminance: 72.24751914473015,
      },
      {
        hex: '#bdaeab',
        count: 1,
        relativeLuminance: 72.24934280956506,
      },
      {
        hex: '#c8ae7d',
        count: 1,
        relativeLuminance: 72.24996908451367,
      },
      {
        hex: '#a4b5af',
        count: 1,
        relativeLuminance: 72.2521556917498,
      },
      {
        hex: '#c1ae9d',
        count: 1,
        relativeLuminance: 72.25781757662227,
      },
      {
        hex: '#abb2ba',
        count: 1,
        relativeLuminance: 72.25782122726736,
      },
      {
        hex: '#b7b294',
        count: 2,
        relativeLuminance: 72.25935781602394,
      },
      {
        hex: '#c5abae',
        count: 1,
        relativeLuminance: 72.26332638699702,
      },
      {
        hex: '#9cb7b0',
        count: 1,
        relativeLuminance: 72.27491395434268,
      },
      {
        hex: '#bcb09a',
        count: 1,
        relativeLuminance: 72.27868400402824,
      },
      {
        hex: '#caac90',
        count: 1,
        relativeLuminance: 72.27874591393838,
      },
      {
        hex: '#a2b6ab',
        count: 1,
        relativeLuminance: 72.28030328962654,
      },
      {
        hex: '#b9b19a',
        count: 1,
        relativeLuminance: 72.28972177810263,
      },
      {
        hex: '#b5b1a8',
        count: 1,
        relativeLuminance: 72.29207695794588,
      },
      {
        hex: '#beb093',
        count: 1,
        relativeLuminance: 72.29822383821671,
      },
      {
        hex: '#c7ad92',
        count: 1,
        relativeLuminance: 72.29834080522537,
      },
      {
        hex: '#b8b292',
        count: 1,
        relativeLuminance: 72.29959697821354,
      },
      {
        hex: '#d3a898',
        count: 2,
        relativeLuminance: 72.3093965765706,
      },
      {
        hex: '#c4ad9f',
        count: 1,
        relativeLuminance: 72.31270562002196,
      },
      {
        hex: '#b8b19f',
        count: 1,
        relativeLuminance: 72.32052728727508,
      },
      {
        hex: '#b7b1a3',
        count: 1,
        relativeLuminance: 72.33258041161196,
      },
      {
        hex: '#bdafa4',
        count: 1,
        relativeLuminance: 72.33470941481114,
      },
      {
        hex: '#ccaaa1',
        count: 1,
        relativeLuminance: 72.33533074405163,
      },
      {
        hex: '#c6ae8c',
        count: 1,
        relativeLuminance: 72.34285876258245,
      },
      {
        hex: '#c3ae99',
        count: 1,
        relativeLuminance: 72.34472101336104,
      },
      {
        hex: '#aeb2b5',
        count: 2,
        relativeLuminance: 72.34574928659185,
      },
      {
        hex: '#b4b397',
        count: 1,
        relativeLuminance: 72.34722059007056,
      },
      {
        hex: '#c8ad90',
        count: 1,
        relativeLuminance: 72.34872298570598,
      },
      {
        hex: '#cdab92',
        count: 1,
        relativeLuminance: 72.34883072225749,
      },
      {
        hex: '#cbac8f',
        count: 1,
        relativeLuminance: 72.35179642310736,
      },
      {
        hex: '#b1b2ad',
        count: 1,
        relativeLuminance: 72.36532713202917,
      },
      {
        hex: '#a5b6a6',
        count: 1,
        relativeLuminance: 72.36757425463641,
      },
      {
        hex: '#a6b5ae',
        count: 1,
        relativeLuminance: 72.36912467053325,
      },
      {
        hex: '#bbb196',
        count: 1,
        relativeLuminance: 72.36936077010101,
      },
      {
        hex: '#cbac90',
        count: 1,
        relativeLuminance: 72.3720853002848,
      },
      {
        hex: '#c9ae7f',
        count: 1,
        relativeLuminance: 72.3765772243107,
      },
      {
        hex: '#d1aa8d',
        count: 1,
        relativeLuminance: 72.38052792837442,
      },
      {
        hex: '#ccab98',
        count: 1,
        relativeLuminance: 72.38208648761757,
      },
      {
        hex: '#ceab8f',
        count: 1,
        relativeLuminance: 72.38249544046008,
      },
      {
        hex: '#bfb093',
        count: 1,
        relativeLuminance: 72.38437130285888,
      },
      {
        hex: '#c9ac9a',
        count: 1,
        relativeLuminance: 72.39904231924116,
      },
      {
        hex: '#d0aa93',
        count: 1,
        relativeLuminance: 72.40588827720684,
      },
      {
        hex: '#aab5a4',
        count: 1,
        relativeLuminance: 72.4113461914736,
      },
      {
        hex: '#abb3b6',
        count: 1,
        relativeLuminance: 72.41227436700181,
      },
      {
        hex: '#acb4a9',
        count: 1,
        relativeLuminance: 72.41375202607962,
      },
      {
        hex: '#bcb0a0',
        count: 1,
        relativeLuminance: 72.41531909872442,
      },
      {
        hex: '#bdb09d',
        count: 2,
        relativeLuminance: 72.43109490562829,
      },
      {
        hex: '#c4ae99',
        count: 1,
        relativeLuminance: 72.43373465770017,
      },
      {
        hex: '#aab5a5',
        count: 2,
        relativeLuminance: 72.43548652182167,
      },
      {
        hex: '#b6b1ab',
        count: 1,
        relativeLuminance: 72.44827903628132,
      },
      {
        hex: '#bcb0a2',
        count: 2,
        relativeLuminance: 72.46226359121414,
      },
      {
        hex: '#c6ae92',
        count: 2,
        relativeLuminance: 72.46394176396308,
      },
      {
        hex: '#c1af9b',
        count: 1,
        relativeLuminance: 72.4710984484006,
      },
      {
        hex: '#b8b29a',
        count: 1,
        relativeLuminance: 72.47127922942369,
      },
      {
        hex: '#caad8d',
        count: 1,
        relativeLuminance: 72.47297679359278,
      },
      {
        hex: '#c0af9f',
        count: 1,
        relativeLuminance: 72.47485846811952,
      },
      {
        hex: '#b7b29e',
        count: 1,
        relativeLuminance: 72.47956150457297,
      },
      {
        hex: '#c7ae8f',
        count: 1,
        relativeLuminance: 72.49331455614637,
      },
      {
        hex: '#b6b1ad',
        count: 1,
        relativeLuminance: 72.49936484023318,
      },
      {
        hex: '#bdb0a0',
        count: 1,
        relativeLuminance: 72.50006602912359,
      },
      {
        hex: '#c4af90',
        count: 1,
        relativeLuminance: 72.50124381235128,
      },
      {
        hex: '#b7b29f',
        count: 1,
        relativeLuminance: 72.5025385037115,
      },
      {
        hex: '#c6ae94',
        count: 1,
        relativeLuminance: 72.50567130292909,
      },
      {
        hex: '#ceab95',
        count: 1,
        relativeLuminance: 72.50671343781806,
      },
      {
        hex: '#b9b298',
        count: 1,
        relativeLuminance: 72.50971420146325,
      },
      {
        hex: '#bfb099',
        count: 1,
        relativeLuminance: 72.51294588242466,
      },
      {
        hex: '#acb5a2',
        count: 1,
        relativeLuminance: 72.5130097991031,
      },
      {
        hex: '#c7ae90',
        count: 2,
        relativeLuminance: 72.51353861567713,
      },
      {
        hex: '#c7ad9c',
        count: 1,
        relativeLuminance: 72.51468086560902,
      },
      {
        hex: '#beafa8',
        count: 1,
        relativeLuminance: 72.51779725511287,
      },
      {
        hex: '#cfab91',
        count: 2,
        relativeLuminance: 72.51866355777474,
      },
      {
        hex: '#beb191',
        count: 1,
        relativeLuminance: 72.51880483291205,
      },
      {
        hex: '#cbac97',
        count: 1,
        relativeLuminance: 72.51891028911253,
      },
      {
        hex: '#bbb291',
        count: 1,
        relativeLuminance: 72.52820256221177,
      },
      {
        hex: '#bdafac',
        count: 1,
        relativeLuminance: 72.53311503682094,
      },
      {
        hex: '#c0b096',
        count: 1,
        relativeLuminance: 72.5343265796745,
      },
      {
        hex: '#b5b39c',
        count: 1,
        relativeLuminance: 72.53771990223464,
      },
      {
        hex: '#c8ae8d',
        count: 1,
        relativeLuminance: 72.54455260997942,
      },
      {
        hex: '#c6ae96',
        count: 1,
        relativeLuminance: 72.54808790823715,
      },
      {
        hex: '#ceab97',
        count: 1,
        relativeLuminance: 72.54949356325771,
      },
      {
        hex: '#c7ad9e',
        count: 1,
        relativeLuminance: 72.56002911640101,
      },
      {
        hex: '#b8b1a9',
        count: 2,
        relativeLuminance: 72.5609078789411,
      },
      {
        hex: '#b5b2a9',
        count: 1,
        relativeLuminance: 72.5807509044445,
      },
      {
        hex: '#cbac9a',
        count: 1,
        relativeLuminance: 72.58441930845285,
      },
      {
        hex: '#a1b6b9',
        count: 1,
        relativeLuminance: 72.58514534364858,
      },
      {
        hex: '#b6b2a6',
        count: 1,
        relativeLuminance: 72.58733328379957,
      },
      {
        hex: '#c4aea0',
        count: 1,
        relativeLuminance: 72.59189761645763,
      },
      {
        hex: '#cfab95',
        count: 2,
        relativeLuminance: 72.6019812594756,
      },
      {
        hex: '#b1b2b6',
        count: 1,
        relativeLuminance: 72.60473558395661,
      },
      {
        hex: '#c7ada0',
        count: 1,
        relativeLuminance: 72.60607398977761,
      },
      {
        hex: '#c1afa1',
        count: 1,
        relativeLuminance: 72.60825439425506,
      },
      {
        hex: '#a9b6a4',
        count: 1,
        relativeLuminance: 72.60867827488374,
      },
      {
        hex: '#b7b398',
        count: 1,
        relativeLuminance: 72.6108173038023,
      },
      {
        hex: '#b8b1ab',
        count: 1,
        relativeLuminance: 72.61109905083086,
      },
      {
        hex: '#d0ab91',
        count: 1,
        relativeLuminance: 72.61451023666342,
      },
      {
        hex: '#a9b6a5',
        count: 1,
        relativeLuminance: 72.63271124735043,
      },
      {
        hex: '#b2b49f',
        count: 1,
        relativeLuminance: 72.63481155037039,
      },
      {
        hex: '#c5ae9e',
        count: 1,
        relativeLuminance: 72.63504038780829,
      },
      {
        hex: '#b1b4a3',
        count: 1,
        relativeLuminance: 72.6502232411244,
      },
      {
        hex: '#caaca1',
        count: 1,
        relativeLuminance: 72.65078047549082,
      },
      {
        hex: '#c3b08f',
        count: 1,
        relativeLuminance: 72.65152658477292,
      },
      {
        hex: '#bcb19f',
        count: 1,
        relativeLuminance: 72.65345316552649,
      },
      {
        hex: '#b7b39a',
        count: 1,
        relativeLuminance: 72.65459332819793,
      },
      {
        hex: '#bab29b',
        count: 1,
        relativeLuminance: 72.65848419219367,
      },
      {
        hex: '#c6af8f',
        count: 1,
        relativeLuminance: 72.66009302020777,
      },
      {
        hex: '#b6b2a9',
        count: 2,
        relativeLuminance: 72.66112861359822,
      },
      {
        hex: '#a5b7a7',
        count: 1,
        relativeLuminance: 72.66502045751425,
      },
      {
        hex: '#b9b29f',
        count: 1,
        relativeLuminance: 72.66631405179795,
      },
      {
        hex: '#bfb194',
        count: 1,
        relativeLuminance: 72.66663491772304,
      },
      {
        hex: '#d0aa9f',
        count: 1,
        relativeLuminance: 72.66914015207323,
      },
      {
        hex: '#c0b190',
        count: 1,
        relativeLuminance: 72.67034085884481,
      },
      {
        hex: '#c6af90',
        count: 2,
        relativeLuminance: 72.68024109029052,
      },
      {
        hex: '#c8af87',
        count: 1,
        relativeLuminance: 72.68635831703234,
      },
      {
        hex: '#cbad93',
        count: 1,
        relativeLuminance: 72.68745654494262,
      },
      {
        hex: '#9ab8ba',
        count: 2,
        relativeLuminance: 72.69138585062926,
      },
      {
        hex: '#c9ae90',
        count: 1,
        relativeLuminance: 72.69605063373268,
      },
      {
        hex: '#bab29d',
        count: 1,
        relativeLuminance: 72.70331617177138,
      },
      {
        hex: '#c8ae95',
        count: 1,
        relativeLuminance: 72.70806120484379,
      },
      {
        hex: '#b1b3b0',
        count: 1,
        relativeLuminance: 72.70839830554264,
      },
      {
        hex: '#b6b3a0',
        count: 1,
        relativeLuminance: 72.70935576085334,
      },
      {
        hex: '#ceac93',
        count: 1,
        relativeLuminance: 72.71602995468888,
      },
      {
        hex: '#c9ae91',
        count: 1,
        relativeLuminance: 72.71636148257541,
      },
      {
        hex: '#b5b3a4',
        count: 1,
        relativeLuminance: 72.72320129419653,
      },
      {
        hex: '#b4b49c',
        count: 1,
        relativeLuminance: 72.72440593161251,
      },
      {
        hex: '#cbad95',
        count: 2,
        relativeLuminance: 72.72933741807016,
      },
      {
        hex: '#b9b2a2',
        count: 1,
        relativeLuminance: 72.73603527624988,
      },
      {
        hex: '#cfac90',
        count: 1,
        relativeLuminance: 72.74948005961683,
      },
      {
        hex: '#c8ae97',
        count: 1,
        relativeLuminance: 72.75064748750935,
      },
      {
        hex: '#c9ae93',
        count: 2,
        relativeLuminance: 72.75749393276652,
      },
      {
        hex: '#c5af98',
        count: 1,
        relativeLuminance: 72.75819697965895,
      },
      {
        hex: '#d0ab98',
        count: 1,
        relativeLuminance: 72.76179999765282,
      },
      {
        hex: '#c9ad9f',
        count: 1,
        relativeLuminance: 72.76519132342936,
      },
      {
        hex: '#bcb299',
        count: 2,
        relativeLuminance: 72.78117694895995,
      },
      {
        hex: '#adb5aa',
        count: 1,
        relativeLuminance: 72.7826290991756,
      },
      {
        hex: '#a7b6b1',
        count: 1,
        relativeLuminance: 72.79018536018454,
      },
      {
        hex: '#b9b1af',
        count: 1,
        relativeLuminance: 72.79546645793246,
      },
      {
        hex: '#b5b3a7',
        count: 1,
        relativeLuminance: 72.79563969764773,
      },
      {
        hex: '#b8b39d',
        count: 1,
        relativeLuminance: 72.80282585646438,
      },
      {
        hex: '#b6b3a4',
        count: 1,
        relativeLuminance: 72.8033214573327,
      },
      {
        hex: '#b6b2af',
        count: 1,
        relativeLuminance: 72.81348051364131,
      },
      {
        hex: '#a6b6b5',
        count: 1,
        relativeLuminance: 72.82539545322945,
      },
      {
        hex: '#c0b28b',
        count: 1,
        relativeLuminance: 72.83347500286887,
      },
      {
        hex: '#c7b086',
        count: 1,
        relativeLuminance: 72.83523880288789,
      },
      {
        hex: '#c2b09c',
        count: 1,
        relativeLuminance: 72.83938538103486,
      },
      {
        hex: '#cbae8e',
        count: 1,
        relativeLuminance: 72.84024616563315,
      },
      {
        hex: '#c1b0a0',
        count: 2,
        relativeLuminance: 72.84326659422662,
      },
      {
        hex: '#beb1a0',
        count: 1,
        relativeLuminance: 72.84544594006918,
      },
      {
        hex: '#b8b39f',
        count: 1,
        relativeLuminance: 72.84824957401547,
      },
      {
        hex: '#caad9f',
        count: 1,
        relativeLuminance: 72.85691632476154,
      },
      {
        hex: '#c8af90',
        count: 3,
        relativeLuminance: 72.8608838161754,
      },
      {
        hex: '#b6b49b',
        count: 1,
        relativeLuminance: 72.86169868452333,
      },
      {
        hex: '#b8b3a0',
        count: 2,
        relativeLuminance: 72.87122142509172,
      },
      {
        hex: '#c7af95',
        count: 1,
        relativeLuminance: 72.87344321092003,
      },
      {
        hex: '#b2b4a9',
        count: 1,
        relativeLuminance: 72.87349732649379,
      },
      {
        hex: '#cfac96',
        count: 1,
        relativeLuminance: 72.87375259186925,
      },
      {
        hex: '#bbb2a1',
        count: 1,
        relativeLuminance: 72.87792865871936,
      },
      {
        hex: '#cbae90',
        count: 1,
        relativeLuminance: 72.88019204735448,
      },
      {
        hex: '#c8af91',
        count: 1,
        relativeLuminance: 72.88111940910437,
      },
      {
        hex: '#c8ae9d',
        count: 1,
        relativeLuminance: 72.88253333061829,
      },
      {
        hex: '#b9b39d',
        count: 1,
        relativeLuminance: 72.88452422083728,
      },
      {
        hex: '#cdad94',
        count: 1,
        relativeLuminance: 72.89478760497998,
      },
      {
        hex: '#c1b197',
        count: 1,
        relativeLuminance: 72.90249607966494,
      },
      {
        hex: '#c2b193',
        count: 1,
        relativeLuminance: 72.90519243748834,
      },
      {
        hex: '#c5b093',
        count: 1,
        relativeLuminance: 72.91004338458347,
      },
      {
        hex: '#caae96',
        count: 3,
        relativeLuminance: 72.91208365232389,
      },
      {
        hex: '#a3b7b6',
        count: 1,
        relativeLuminance: 72.9122370505601,
      },
      {
        hex: '#b2b3b5',
        count: 1,
        relativeLuminance: 72.91912790064875,
      },
      {
        hex: '#bbb2a3',
        count: 1,
        relativeLuminance: 72.92475794702989,
      },
      {
        hex: '#b2b5a0',
        count: 1,
        relativeLuminance: 72.92532454410372,
      },
      {
        hex: '#c8ae9f',
        count: 1,
        relativeLuminance: 72.92787567745246,
      },
      {
        hex: '#bdb29c',
        count: 2,
        relativeLuminance: 72.93132254691747,
      },
      {
        hex: '#a7b7ac',
        count: 1,
        relativeLuminance: 72.9320551703071,
      },
      {
        hex: '#cdad96',
        count: 1,
        relativeLuminance: 72.93683394861198,
      },
      {
        hex: '#bab2a7',
        count: 1,
        relativeLuminance: 72.93790528447951,
      },
      {
        hex: '#adb4ba',
        count: 1,
        relativeLuminance: 72.93922760022448,
      },
      {
        hex: '#c5b095',
        count: 2,
        relativeLuminance: 72.95171496948917,
      },
      {
        hex: '#d1ac91',
        count: 1,
        relativeLuminance: 72.9607755522115,
      },
      {
        hex: '#d0ac96',
        count: 2,
        relativeLuminance: 72.96883613039428,
      },
      {
        hex: '#abb5b7',
        count: 1,
        relativeLuminance: 72.97384362826216,
      },
      {
        hex: '#bdb29e',
        count: 1,
        relativeLuminance: 72.97624720330425,
      },
      {
        hex: '#a9b7a8',
        count: 1,
        relativeLuminance: 72.97684765185433,
      },
      {
        hex: '#cdad98',
        count: 1,
        relativeLuminance: 72.97956346416231,
      },
      {
        hex: '#b7b3a8',
        count: 1,
        relativeLuminance: 72.98045553436137,
      },
      {
        hex: '#c7b08e',
        count: 1,
        relativeLuminance: 72.98777812708542,
      },
      {
        hex: '#c2b197',
        count: 1,
        relativeLuminance: 72.98922664568012,
      },
      {
        hex: '#b1b5a6',
        count: 1,
        relativeLuminance: 72.98926061449032,
      },
      {
        hex: '#c3b09f',
        count: 1,
        relativeLuminance: 72.99447773172047,
      },
      {
        hex: '#adb4bc',
        count: 1,
        relativeLuminance: 72.99554184326819,
      },
      {
        hex: '#c6af9f',
        count: 1,
        relativeLuminance: 73.00297828020733,
      },
      {
        hex: '#abb7a3',
        count: 1,
        relativeLuminance: 73.00319439427828,
      },
      {
        hex: '#a4b8ad',
        count: 1,
        relativeLuminance: 73.0172345348319,
      },
      {
        hex: '#b2b5a4',
        count: 1,
        relativeLuminance: 73.01883509354917,
      },
      {
        hex: '#cfad91',
        count: 1,
        relativeLuminance: 73.02133767452727,
      },
      {
        hex: '#c9af94',
        count: 1,
        relativeLuminance: 73.03361186133888,
      },
      {
        hex: '#bab3a0',
        count: 1,
        relativeLuminance: 73.03479200608162,
      },
      {
        hex: '#cfad92',
        count: 1,
        relativeLuminance: 73.04167866078905,
      },
      {
        hex: '#c6afa1',
        count: 1,
        relativeLuminance: 73.04893543562002,
      },
      {
        hex: '#c8af99',
        count: 1,
        relativeLuminance: 73.04912719128596,
      },
      {
        hex: '#ccae94',
        count: 3,
        relativeLuminance: 73.05462465991717,
      },
      {
        hex: '#b4b4aa',
        count: 1,
        relativeLuminance: 73.05495465689465,
      },
      {
        hex: '#bab3a1',
        count: 2,
        relativeLuminance: 73.05785246137782,
      },
      {
        hex: '#c5b18e',
        count: 1,
        relativeLuminance: 73.067744147585,
      },
      {
        hex: '#bbb2a9',
        count: 1,
        relativeLuminance: 73.06942696643978,
      },
      {
        hex: '#b9b3a5',
        count: 1,
        relativeLuminance: 73.07004460873156,
      },
      {
        hex: '#c9af96',
        count: 1,
        relativeLuminance: 73.07552727953228,
      },
      {
        hex: '#b2b4b1',
        count: 1,
        relativeLuminance: 73.07707394767759,
      },
      {
        hex: '#b3b4ae',
        count: 1,
        relativeLuminance: 73.07733369864792,
      },
      {
        hex: '#c8b08e',
        count: 2,
        relativeLuminance: 73.07786323878379,
      },
      {
        hex: '#c1b293',
        count: 1,
        relativeLuminance: 73.07904848728892,
      },
      {
        hex: '#cfad94',
        count: 1,
        relativeLuminance: 73.08286881723659,
      },
      {
        hex: '#caaf92',
        count: 1,
        relativeLuminance: 73.08363408148651,
      },
      {
        hex: '#b6b599',
        count: 1,
        relativeLuminance: 73.08423367102574,
      },
      {
        hex: '#cdae91',
        count: 2,
        relativeLuminance: 73.08609246724545,
      },
      {
        hex: '#b5b59d',
        count: 1,
        relativeLuminance: 73.09281296627036,
      },
      {
        hex: '#c0b298',
        count: 1,
        relativeLuminance: 73.09833854291608,
      },
      {
        hex: '#c6b098',
        count: 1,
        relativeLuminance: 73.10435327714612,
      },
      {
        hex: '#bab3a3',
        count: 1,
        relativeLuminance: 73.10449287071006,
      },
      {
        hex: '#b4b4ac',
        count: 1,
        relativeLuminance: 73.10496876390836,
      },
      {
        hex: '#bdb398',
        count: 1,
        relativeLuminance: 73.10604489335638,
      },
      {
        hex: '#cdae92',
        count: 1,
        relativeLuminance: 73.10640390350082,
      },
      {
        hex: '#b1b6a0',
        count: 1,
        relativeLuminance: 73.11591218588694,
      },
      {
        hex: '#cead9a',
        count: 1,
        relativeLuminance: 73.11654883970138,
      },
      {
        hex: '#bbb3a0',
        count: 1,
        relativeLuminance: 73.11721333176135,
      },
      {
        hex: '#c9af98',
        count: 1,
        relativeLuminance: 73.11812393172474,
      },
      {
        hex: '#b9b3a7',
        count: 1,
        relativeLuminance: 73.1181615574322,
      },
      {
        hex: '#c3b199',
        count: 1,
        relativeLuminance: 73.11932990368001,
      },
      {
        hex: '#adb5b7',
        count: 1,
        relativeLuminance: 73.12233682745807,
      },
      {
        hex: '#c1b1a1',
        count: 1,
        relativeLuminance: 73.12499984542619,
      },
      {
        hex: '#c6b099',
        count: 2,
        relativeLuminance: 73.12591420628405,
      },
      {
        hex: '#bcb2a8',
        count: 1,
        relativeLuminance: 73.12785717800138,
      },
      {
        hex: '#acb5ba',
        count: 1,
        relativeLuminance: 73.13065036583393,
      },
      {
        hex: '#caaea0',
        count: 1,
        relativeLuminance: 73.13271478612589,
      },
      {
        hex: '#bdb39a',
        count: 1,
        relativeLuminance: 73.14933603340766,
      },
      {
        hex: '#c3b380',
        count: 1,
        relativeLuminance: 73.15503384429482,
      },
      {
        hex: '#cead9c',
        count: 1,
        relativeLuminance: 73.16055671351542,
      },
      {
        hex: '#b1b6a2',
        count: 1,
        relativeLuminance: 73.1621220364404,
      },
      {
        hex: '#afb5b3',
        count: 1,
        relativeLuminance: 73.16522201253137,
      },
      {
        hex: '#c2b19f',
        count: 1,
        relativeLuminance: 73.16550863199421,
      },
      {
        hex: '#bfb29f',
        count: 1,
        relativeLuminance: 73.16782543319312,
      },
      {
        hex: '#b3b5a7',
        count: 1,
        relativeLuminance: 73.16855485259916,
      },
      {
        hex: '#cbae9e',
        count: 2,
        relativeLuminance: 73.1788684080841,
      },
      {
        hex: '#caaea2',
        count: 1,
        relativeLuminance: 73.17890722961845,
      },
      {
        hex: '#b8b3ad',
        count: 1,
        relativeLuminance: 73.18569839105945,
      },
      {
        hex: '#b0b5b1',
        count: 2,
        relativeLuminance: 73.18864292813498,
      },
      {
        hex: '#b3b5a8',
        count: 1,
        relativeLuminance: 73.19284713834561,
      },
      {
        hex: '#c8b094',
        count: 1,
        relativeLuminance: 73.1990863966497,
      },
      {
        hex: '#c7b18c',
        count: 1,
        relativeLuminance: 73.20673552773314,
      },
      {
        hex: '#ccaf8f',
        count: 1,
        relativeLuminance: 73.20715334220692,
      },
      {
        hex: '#c0b391',
        count: 1,
        relativeLuminance: 73.21402891597157,
      },
      {
        hex: '#b9b4a0',
        count: 2,
        relativeLuminance: 73.2165579281457,
      },
      {
        hex: '#c8b188',
        count: 1,
        relativeLuminance: 73.22070552695604,
      },
      {
        hex: '#c6b192',
        count: 1,
        relativeLuminance: 73.23649125105996,
      },
      {
        hex: '#b9b4a1',
        count: 1,
        relativeLuminance: 73.23952455070196,
      },
      {
        hex: '#bcb3a2',
        count: 2,
        relativeLuminance: 73.24617967340522,
      },
      {
        hex: '#bbb49a',
        count: 1,
        relativeLuminance: 73.24631397057544,
      },
      {
        hex: '#c9b092',
        count: 4,
        relativeLuminance: 73.24833390285826,
      },
      {
        hex: '#d0ae8b',
        count: 1,
        relativeLuminance: 73.25002085123752,
      },
      {
        hex: '#d1ad93',
        count: 2,
        relativeLuminance: 73.25194981160227,
      },
      {
        hex: '#caaf9a',
        count: 1,
        relativeLuminance: 73.2523161954659,
      },
      {
        hex: '#bab49e',
        count: 1,
        relativeLuminance: 73.25273874825652,
      },
      {
        hex: '#cdae99',
        count: 1,
        relativeLuminance: 73.25333019155025,
      },
      {
        hex: '#c0b393',
        count: 1,
        relativeLuminance: 73.2547040570397,
      },
      {
        hex: '#ceae95',
        count: 2,
        relativeLuminance: 73.26162042528125,
      },
      {
        hex: '#c2b298',
        count: 1,
        relativeLuminance: 73.27029188934885,
      },
      {
        hex: '#c3b294',
        count: 1,
        relativeLuminance: 73.2728301921626,
      },
      {
        hex: '#c5b198',
        count: 1,
        relativeLuminance: 73.27321306912312,
      },
      {
        hex: '#cdae9a',
        count: 1,
        relativeLuminance: 73.2750000641156,
      },
      {
        hex: '#c6b194',
        count: 1,
        relativeLuminance: 73.27750188288307,
      },
      {
        hex: '#b0b6aa',
        count: 2,
        relativeLuminance: 73.27757824132782,
      },
      {
        hex: '#d0ad99',
        count: 1,
        relativeLuminance: 73.28323211465838,
      },
      {
        hex: '#b5b4b0',
        count: 1,
        relativeLuminance: 73.28578926354561,
      },
      {
        hex: '#c2b299',
        count: 1,
        relativeLuminance: 73.29177276555166,
      },
      {
        hex: '#bcb3a4',
        count: 1,
        relativeLuminance: 73.29299321453773,
      },
      {
        hex: '#c1b29d',
        count: 2,
        relativeLuminance: 73.2934276467375,
      },
      {
        hex: '#c5b199',
        count: 1,
        relativeLuminance: 73.29469254007049,
      },
      {
        hex: '#bfb399',
        count: 1,
        relativeLuminance: 73.29597625852288,
      },
      {
        hex: '#beb39d',
        count: 1,
        relativeLuminance: 73.29936739598074,
      },
      {
        hex: '#b1b79d',
        count: 1,
        relativeLuminance: 73.31680782900786,
      },
      {
        hex: '#b7b4ab',
        count: 1,
        relativeLuminance: 73.31789367408484,
      },
      {
        hex: '#cbaf99',
        count: 1,
        relativeLuminance: 73.32199692434529,
      },
      {
        hex: '#a5b8b6',
        count: 1,
        relativeLuminance: 73.32287674783814,
      },
      {
        hex: '#b8b4a8',
        count: 1,
        relativeLuminance: 73.32438019871495,
      },
      {
        hex: '#c7b09e',
        count: 1,
        relativeLuminance: 73.32528485878507,
      },
      {
        hex: '#b3b6a3',
        count: 1,
        relativeLuminance: 73.33998205571021,
      },
      {
        hex: '#ceada4',
        count: 1,
        relativeLuminance: 73.34346372442647,
      },
      {
        hex: '#cbaf9a',
        count: 1,
        relativeLuminance: 73.34363350417286,
      },
      {
        hex: '#c8b18f',
        count: 1,
        relativeLuminance: 73.35488447837348,
      },
      {
        hex: '#c3b298',
        count: 1,
        relativeLuminance: 73.35689058580023,
      },
      {
        hex: '#c9b18b',
        count: 1,
        relativeLuminance: 73.36730129983057,
      },
      {
        hex: '#cdaf93',
        count: 1,
        relativeLuminance: 73.38019584496263,
      },
      {
        hex: '#bfb39d',
        count: 1,
        relativeLuminance: 73.38359680336096,
      },
      {
        hex: '#b3b6a5',
        count: 1,
        relativeLuminance: 73.38706709033343,
      },
      {
        hex: '#beb3a1',
        count: 1,
        relativeLuminance: 73.38989471681818,
      },
      {
        hex: '#bab4a4',
        count: 1,
        relativeLuminance: 73.39080494149923,
      },
      {
        hex: '#c0b2a5',
        count: 1,
        relativeLuminance: 73.39205107665657,
      },
      {
        hex: '#b1b5b6',
        count: 1,
        relativeLuminance: 73.39751226493087,
      },
      {
        hex: '#cab095',
        count: 1,
        relativeLuminance: 73.40069782563442,
      },
      {
        hex: '#c1b396',
        count: 1,
        relativeLuminance: 73.40233380699289,
      },
      {
        hex: '#b7b698',
        count: 1,
        relativeLuminance: 73.40917571145904,
      },
      {
        hex: '#bbb4a2',
        count: 2,
        relativeLuminance: 73.42594629688094,
      },
      {
        hex: '#bdb58e',
        count: 1,
        relativeLuminance: 73.42829570857936,
      },
      {
        hex: '#cbb092',
        count: 1,
        relativeLuminance: 73.4302103210494,
      },
      {
        hex: '#c3b1a7',
        count: 1,
        relativeLuminance: 73.43925388505626,
      },
      {
        hex: '#bcb49f',
        count: 3,
        relativeLuminance: 73.43969755557693,
      },
      {
        hex: '#cab097',
        count: 1,
        relativeLuminance: 73.44262724952824,
      },
      {
        hex: '#c1b398',
        count: 3,
        relativeLuminance: 73.44461982859028,
      },
      {
        hex: '#b3b5b2',
        count: 1,
        relativeLuminance: 73.4453685876931,
      },
      {
        hex: '#b4b5af',
        count: 2,
        relativeLuminance: 73.44561920704763,
      },
      {
        hex: '#b8b5a2',
        count: 1,
        relativeLuminance: 73.44596928179749,
      },
      {
        hex: '#bdb3a7',
        count: 1,
        relativeLuminance: 73.4474698995461,
      },
      {
        hex: '#c5b294',
        count: 2,
        relativeLuminance: 73.44759205817462,
      },
      {
        hex: '#c6b19c',
        count: 1,
        relativeLuminance: 73.448322567033,
      },
      {
        hex: '#cbb093',
        count: 1,
        relativeLuminance: 73.45054286497295,
      },
      {
        hex: '#c7b199',
        count: 1,
        relativeLuminance: 73.47169764219268,
      },
      {
        hex: '#bbb4a4',
        count: 1,
        relativeLuminance: 73.47257196241434,
      },
      {
        hex: '#b1b6af',
        count: 1,
        relativeLuminance: 73.47939976551763,
      },
      {
        hex: '#d1ae92',
        count: 2,
        relativeLuminance: 73.48237733021722,
      },
      {
        hex: '#cab099',
        count: 1,
        relativeLuminance: 73.48523388189649,
      },
      {
        hex: '#bab4a8',
        count: 3,
        relativeLuminance: 73.4862998449012,
      },
      {
        hex: '#c4b29a',
        count: 1,
        relativeLuminance: 73.48686697516635,
      },
      {
        hex: '#bcb3ac',
        count: 1,
        relativeLuminance: 73.48717699879019,
      },
      {
        hex: '#c3b29e',
        count: 1,
        relativeLuminance: 73.48808054761932,
      },
      {
        hex: '#c2b396',
        count: 1,
        relativeLuminance: 73.48809867736958,
      },
      {
        hex: '#bfb496',
        count: 1,
        relativeLuminance: 73.49417253070158,
      },
      {
        hex: '#d2ad9a',
        count: 1,
        relativeLuminance: 73.49481020120092,
      },
      {
        hex: '#bdb3a9',
        count: 1,
        relativeLuminance: 73.49592529307742,
      },
      {
        hex: '#b1b6b0',
        count: 2,
        relativeLuminance: 73.50502463813456,
      },
      {
        hex: '#d3ad96',
        count: 1,
        relativeLuminance: 73.50530693456994,
      },
      {
        hex: '#c2b2a3',
        count: 1,
        relativeLuminance: 73.51597933289831,
      },
      {
        hex: '#cfae9d',
        count: 1,
        relativeLuminance: 73.52724724542534,
      },
      {
        hex: '#c3b2a0',
        count: 1,
        relativeLuminance: 73.53317606213892,
      },
      {
        hex: '#bab59f',
        count: 1,
        relativeLuminance: 73.53907998900598,
      },
      {
        hex: '#b8b5a6',
        count: 1,
        relativeLuminance: 73.53986805784785,
      },
      {
        hex: '#b8b4b1',
        count: 1,
        relativeLuminance: 73.55019858443781,
      },
      {
        hex: '#b9b4ae',
        count: 1,
        relativeLuminance: 73.55383724970295,
      },
      {
        hex: '#b4b6a9',
        count: 1,
        relativeLuminance: 73.5609545817071,
      },
      {
        hex: '#c9b195',
        count: 1,
        relativeLuminance: 73.5661086561755,
      },
      {
        hex: '#abb8af',
        count: 1,
        relativeLuminance: 73.56762459690268,
      },
      {
        hex: '#cbafa4',
        count: 1,
        relativeLuminance: 73.5694007134702,
      },
      {
        hex: '#b0b6b6',
        count: 1,
        relativeLuminance: 73.58665621334232,
      },
      {
        hex: '#adb8aa',
        count: 1,
        relativeLuminance: 73.58930973500627,
      },
      {
        hex: '#b8b4b3',
        count: 1,
        relativeLuminance: 73.60229946182814,
      },
      {
        hex: '#c5b38f',
        count: 1,
        relativeLuminance: 73.60628435530573,
      },
      {
        hex: '#d1ae98',
        count: 2,
        relativeLuminance: 73.6067546356522,
      },
      {
        hex: '#bab5a2',
        count: 1,
        relativeLuminance: 73.60745020293227,
      },
      {
        hex: '#b7b6a1',
        count: 1,
        relativeLuminance: 73.608033717857,
      },
      {
        hex: '#cdb092',
        count: 1,
        relativeLuminance: 73.61369731429811,
      },
      {
        hex: '#bcb59b',
        count: 1,
        relativeLuminance: 73.61404992144276,
      },
      {
        hex: '#bfb3a7',
        count: 1,
        relativeLuminance: 73.61464248044237,
      },
      {
        hex: '#cab193',
        count: 1,
        relativeLuminance: 73.61518419310998,
      },
      {
        hex: '#cab09f',
        count: 1,
        relativeLuminance: 73.6171317728243,
      },
      {
        hex: '#afb8a5',
        count: 1,
        relativeLuminance: 73.61785999398288,
      },
      {
        hex: '#cbb09b',
        count: 2,
        relativeLuminance: 73.61927481882104,
      },
      {
        hex: '#a1bab7',
        count: 1,
        relativeLuminance: 73.61930053703334,
      },
      {
        hex: '#bbb59f',
        count: 1,
        relativeLuminance: 73.62057679410304,
      },
      {
        hex: '#b8b69f',
        count: 1,
        relativeLuminance: 73.64240325350022,
      },
      {
        hex: '#c7b295',
        count: 1,
        relativeLuminance: 73.64459298997734,
      },
      {
        hex: '#c9b199',
        count: 1,
        relativeLuminance: 73.65033319799792,
      },
      {
        hex: '#d2ae96',
        count: 1,
        relativeLuminance: 73.65943048355247,
      },
      {
        hex: '#c6b29a',
        count: 1,
        relativeLuminance: 73.66195449833891,
      },
      {
        hex: '#cab0a1',
        count: 2,
        relativeLuminance: 73.66246166795528,
      },
      {
        hex: '#bbb4ac',
        count: 1,
        relativeLuminance: 73.66597956370133,
      },
      {
        hex: '#bfb49e',
        count: 2,
        relativeLuminance: 73.6670375515576,
      },
      {
        hex: '#bfb592',
        count: 1,
        relativeLuminance: 73.67475793418828,
      },
      {
        hex: '#c4b397',
        count: 1,
        relativeLuminance: 73.68180428339383,
      },
      {
        hex: '#b8b5ac',
        count: 1,
        relativeLuminance: 73.68589552589424,
      },
      {
        hex: '#c7b297',
        count: 1,
        relativeLuminance: 73.6862947293987,
      },
      {
        hex: '#b9b5a9',
        count: 2,
        relativeLuminance: 73.69233493941279,
      },
      {
        hex: '#c9b381',
        count: 1,
        relativeLuminance: 73.70273232038696,
      },
      {
        hex: '#b6b5b3',
        count: 1,
        relativeLuminance: 73.70584780295223,
      },
      {
        hex: '#c2b3a0',
        count: 1,
        relativeLuminance: 73.70590898117868,
      },
      {
        hex: '#b4b7a4',
        count: 1,
        relativeLuminance: 73.70785413368966,
      },
      {
        hex: '#b2b6b5',
        count: 1,
        relativeLuminance: 73.71203276409057,
      },
      {
        hex: '#beb598',
        count: 1,
        relativeLuminance: 73.71515167532078,
      },
      {
        hex: '#b9b5aa',
        count: 1,
        relativeLuminance: 73.71671550275023,
      },
      {
        hex: '#c9b290',
        count: 1,
        relativeLuminance: 73.72162719401416,
      },
      {
        hex: '#c4b399',
        count: 2,
        relativeLuminance: 73.7241841201408,
      },
      {
        hex: '#aab8b8',
        count: 1,
        relativeLuminance: 73.73184178596189,
      },
      {
        hex: '#cab28c',
        count: 1,
        relativeLuminance: 73.73383001404692,
      },
      {
        hex: '#acb9a8',
        count: 1,
        relativeLuminance: 73.73702014141439,
      },
      {
        hex: '#c8b388',
        count: 1,
        relativeLuminance: 73.73792467057864,
      },
      {
        hex: '#b6b6aa',
        count: 1,
        relativeLuminance: 73.74188331593427,
      },
      {
        hex: '#ceb094',
        count: 1,
        relativeLuminance: 73.74662355687522,
      },
      {
        hex: '#c0b49e',
        count: 2,
        relativeLuminance: 73.75115046288482,
      },
      {
        hex: '#bfb4a2',
        count: 2,
        relativeLuminance: 73.75755170494118,
      },
      {
        hex: '#bdb59e',
        count: 1,
        relativeLuminance: 73.76250410683701,
      },
      {
        hex: '#b5b6ae',
        count: 1,
        relativeLuminance: 73.76280156521271,
      },
      {
        hex: '#cab28e',
        count: 1,
        relativeLuminance: 73.77228869684863,
      },
      {
        hex: '#c6b393',
        count: 1,
        relativeLuminance: 73.77371536888644,
      },
      {
        hex: '#c9b293',
        count: 2,
        relativeLuminance: 73.7816752564084,
      },
      {
        hex: '#cab19b',
        count: 1,
        relativeLuminance: 73.78329846686505,
      },
      {
        hex: '#b8b5b0',
        count: 1,
        relativeLuminance: 73.78671137986875,
      },
      {
        hex: '#ceb096',
        count: 2,
        relativeLuminance: 73.78787606720917,
      },
      {
        hex: '#ccb193',
        count: 2,
        relativeLuminance: 73.79674688267144,
      },
      {
        hex: '#bdb5a0',
        count: 4,
        relativeLuminance: 73.80732451557465,
      },
      {
        hex: '#cbb198',
        count: 1,
        relativeLuminance: 73.8093632142491,
      },
      {
        hex: '#b5b6b0',
        count: 1,
        relativeLuminance: 73.81352617316124,
      },
      {
        hex: '#b9b6a3',
        count: 1,
        relativeLuminance: 73.81371013079767,
      },
      {
        hex: '#c6b395',
        count: 2,
        relativeLuminance: 73.81458955133932,
      },
      {
        hex: '#ccb194',
        count: 1,
        relativeLuminance: 73.81708989505495,
      },
      {
        hex: '#b2b6b9',
        count: 1,
        relativeLuminance: 73.81959772999477,
      },
      {
        hex: '#b8b79b',
        count: 1,
        relativeLuminance: 73.81973993914417,
      },
      {
        hex: '#cab19d',
        count: 1,
        relativeLuminance: 73.82701498372779,
      },
      {
        hex: '#b8b6a7',
        count: 1,
        relativeLuminance: 73.82772800172289,
      },
      {
        hex: '#c8b29a',
        count: 2,
        relativeLuminance: 73.8386748109676,
      },
      {
        hex: '#c4b492',
        count: 1,
        relativeLuminance: 73.83890563308123,
      },
      {
        hex: '#b5b6b1',
        count: 1,
        relativeLuminance: 73.83914884802051,
      },
      {
        hex: '#bfb68d',
        count: 1,
        relativeLuminance: 73.84003300078967,
      },
      {
        hex: '#b6b6ae',
        count: 1,
        relativeLuminance: 73.84107905458676,
      },
      {
        hex: '#bfb59a',
        count: 2,
        relativeLuminance: 73.84122969576855,
      },
      {
        hex: '#d2af93',
        count: 1,
        relativeLuminance: 73.84829386303687,
      },
      {
        hex: '#c5b39b',
        count: 1,
        relativeLuminance: 73.85403437973979,
      },
      {
        hex: '#c3b497',
        count: 1,
        relativeLuminance: 73.85526542850425,
      },
      {
        hex: '#c4b39f',
        count: 1,
        relativeLuminance: 73.85538195294716,
      },
      {
        hex: '#c7b29f',
        count: 1,
        relativeLuminance: 73.85985506821243,
      },
      {
        hex: '#c8b29b',
        count: 1,
        relativeLuminance: 73.86024223676704,
      },
      {
        hex: '#d3ae9b',
        count: 1,
        relativeLuminance: 73.86078220226106,
      },
      {
        hex: '#c9b38a',
        count: 1,
        relativeLuminance: 73.8640933205374,
      },
      {
        hex: '#b4b6b5',
        count: 1,
        relativeLuminance: 73.86583732016226,
      },
      {
        hex: '#ccb0a2',
        count: 1,
        relativeLuminance: 73.86666251418117,
      },
      {
        hex: '#b8b6a9',
        count: 1,
        relativeLuminance: 73.87577435041992,
      },
      {
        hex: '#bfb68f',
        count: 1,
        relativeLuminance: 73.87874765659107,
      },
      {
        hex: '#afb7ba',
        count: 1,
        relativeLuminance: 73.88561939614982,
      },
      {
        hex: '#b6b7a5',
        count: 1,
        relativeLuminance: 73.88727152149077,
      },
      {
        hex: '#b1b7b5',
        count: 1,
        relativeLuminance: 73.90118617491576,
      },
      {
        hex: '#c1b4a1',
        count: 1,
        relativeLuminance: 73.90305413181188,
      },
      {
        hex: '#d1b180',
        count: 1,
        relativeLuminance: 73.9062222390744,
      },
      {
        hex: '#bbb6a0',
        count: 1,
        relativeLuminance: 73.9066435392494,
      },
      {
        hex: '#cab296',
        count: 1,
        relativeLuminance: 73.93276702238184,
      },
      {
        hex: '#ccb28d',
        count: 1,
        relativeLuminance: 73.93398396184963,
      },
      {
        hex: '#c9b38e',
        count: 1,
        relativeLuminance: 73.94006537083423,
      },
      {
        hex: '#bcb69e',
        count: 2,
        relativeLuminance: 73.94340020240473,
      },
      {
        hex: '#bbb6a2',
        count: 1,
        relativeLuminance: 73.95204474578321,
      },
      {
        hex: '#cbb293',
        count: 1,
        relativeLuminance: 73.96140371729388,
      },
      {
        hex: '#c9b1a7',
        count: 1,
        relativeLuminance: 73.96649850618458,
      },
      {
        hex: '#c8b394',
        count: 1,
        relativeLuminance: 73.97027102051715,
      },
      {
        hex: '#cab298',
        count: 2,
        relativeLuminance: 73.9745560473904,
      },
      {
        hex: '#bbb6a3',
        count: 1,
        relativeLuminance: 73.97500067841291,
      },
      {
        hex: '#cbb294',
        count: 1,
        relativeLuminance: 73.98167235513907,
      },
      {
        hex: '#c3b49d',
        count: 2,
        relativeLuminance: 73.98393552966772,
      },
      {
        hex: '#ccb19c',
        count: 1,
        relativeLuminance: 73.98587005962764,
      },
      {
        hex: '#acb9b2',
        count: 1,
        relativeLuminance: 73.98650097751853,
      },
      {
        hex: '#c2b595',
        count: 1,
        relativeLuminance: 73.98911914066035,
      },
      {
        hex: '#bdb5a8',
        count: 1,
        relativeLuminance: 73.99343012979409,
      },
      {
        hex: '#b7b6b1',
        count: 1,
        relativeLuminance: 73.99586125131812,
      },
      {
        hex: '#c4b49a',
        count: 3,
        relativeLuminance: 74.00477129861633,
      },
      {
        hex: '#c5b496',
        count: 3,
        relativeLuminance: 74.00699912222451,
      },
      {
        hex: '#c7b39a',
        count: 1,
        relativeLuminance: 74.0073623507527,
      },
      {
        hex: '#cab29a',
        count: 1,
        relativeLuminance: 74.01701604644353,
      },
      {
        hex: '#beb5a6',
        count: 1,
        relativeLuminance: 74.02833513977166,
      },
      {
        hex: '#b5b8a3',
        count: 1,
        relativeLuminance: 74.02898340728825,
      },
      {
        hex: '#cbb1a2',
        count: 1,
        relativeLuminance: 74.02920538342778,
      },
      {
        hex: '#ccb19e',
        count: 1,
        relativeLuminance: 74.02974870826229,
      },
      {
        hex: '#c1b59b',
        count: 1,
        relativeLuminance: 74.03070438000042,
      },
      {
        hex: '#bdb5aa',
        count: 1,
        relativeLuminance: 74.04166823316105,
      },
      {
        hex: '#b8b7a5',
        count: 1,
        relativeLuminance: 74.04493382355587,
      },
      {
        hex: '#c5b498',
        count: 1,
        relativeLuminance: 74.04871929364586,
      },
      {
        hex: '#c8b398',
        count: 3,
        relativeLuminance: 74.05303500556205,
      },
      {
        hex: '#b9b6ad',
        count: 1,
        relativeLuminance: 74.05352079538693,
      },
      {
        hex: '#b9b7a2',
        count: 1,
        relativeLuminance: 74.05517620050591,
      },
      {
        hex: '#cdb19b',
        count: 1,
        relativeLuminance: 74.05522720190429,
      },
      {
        hex: '#d4af94',
        count: 1,
        relativeLuminance: 74.05852241789385,
      },
      {
        hex: '#c9b2a0',
        count: 1,
        relativeLuminance: 74.05932475704991,
      },
      {
        hex: '#aebaa4',
        count: 1,
        relativeLuminance: 74.059617236541,
      },
      {
        hex: '#bab6aa',
        count: 2,
        relativeLuminance: 74.05991363014859,
      },
      {
        hex: '#aabab0',
        count: 1,
        relativeLuminance: 74.06066294634176,
      },
      {
        hex: '#cbb1a4',
        count: 1,
        relativeLuminance: 74.07520877143833,
      },
      {
        hex: '#c0b5a1',
        count: 3,
        relativeLuminance: 74.0792463468089,
      },
      {
        hex: '#bbb79c',
        count: 1,
        relativeLuminance: 74.0822243961726,
      },
      {
        hex: '#bfb699',
        count: 1,
        relativeLuminance: 74.08229014857034,
      },
      {
        hex: '#b6b8a2',
        count: 1,
        relativeLuminance: 74.08391050501633,
      },
      {
        hex: '#bab6ab',
        count: 1,
        relativeLuminance: 74.08428028229383,
      },
      {
        hex: '#d5ae9d',
        count: 1,
        relativeLuminance: 74.0953606370605,
      },
      {
        hex: '#c6b3a2',
        count: 2,
        relativeLuminance: 74.09666933656904,
      },
      {
        hex: '#c6b589',
        count: 1,
        relativeLuminance: 74.09990974880614,
      },
      {
        hex: '#cbb38d',
        count: 1,
        relativeLuminance: 74.09999962724625,
      },
      {
        hex: '#c1b59f',
        count: 1,
        relativeLuminance: 74.11833257314875,
      },
      {
        hex: '#bcb79a',
        count: 1,
        relativeLuminance: 74.12027117651256,
      },
      {
        hex: '#cab393',
        count: 1,
        relativeLuminance: 74.12789862687674,
      },
      {
        hex: '#beb69f',
        count: 3,
        relativeLuminance: 74.12976258014865,
      },
      {
        hex: '#b3b7b8',
        count: 1,
        relativeLuminance: 74.13304187527991,
      },
      {
        hex: '#ccb297',
        count: 1,
        relativeLuminance: 74.13378108137837,
      },
      {
        hex: '#bdb797',
        count: 1,
        relativeLuminance: 74.13866789489389,
      },
      {
        hex: '#c7b494',
        count: 1,
        relativeLuminance: 74.14032863547354,
      },
      {
        hex: '#d0b192',
        count: 1,
        relativeLuminance: 74.14465208827511,
      },
      {
        hex: '#cab394',
        count: 1,
        relativeLuminance: 74.14809247380268,
      },
      {
        hex: '#c9b2a4',
        count: 1,
        relativeLuminance: 74.15049879003932,
      },
      {
        hex: '#b7b7ad',
        count: 1,
        relativeLuminance: 74.15866047159835,
      },
      {
        hex: '#bdb6a4',
        count: 1,
        relativeLuminance: 74.16100799234702,
      },
      {
        hex: '#c8b491',
        count: 1,
        relativeLuminance: 74.16815067136108,
      },
      {
        hex: '#beb5ac',
        count: 1,
        relativeLuminance: 74.17278610861655,
      },
      {
        hex: '#bcb6a8',
        count: 1,
        relativeLuminance: 74.17340182357691,
      },
      {
        hex: '#c4b596',
        count: 1,
        relativeLuminance: 74.18050474096513,
      },
      {
        hex: '#c7b496',
        count: 1,
        relativeLuminance: 74.18122182142753,
      },
      {
        hex: '#d2b097',
        count: 1,
        relativeLuminance: 74.18124297255578,
      },
      {
        hex: '#c8b39e',
        count: 1,
        relativeLuminance: 74.18220886572998,
      },
      {
        hex: '#cdb295',
        count: 1,
        relativeLuminance: 74.1832772135111,
      },
      {
        hex: '#c9b39b',
        count: 2,
        relativeLuminance: 74.20528691640389,
      },
      {
        hex: '#b7b7af',
        count: 1,
        relativeLuminance: 74.20856920003426,
      },
      {
        hex: '#ccb29b',
        count: 1,
        relativeLuminance: 74.21836270807852,
      },
      {
        hex: '#bcb6aa',
        count: 1,
        relativeLuminance: 74.221447721792,
      },
      {
        hex: '#beb5ae',
        count: 1,
        relativeLuminance: 74.222308320389,
      },
      {
        hex: '#b3b8b2',
        count: 1,
        relativeLuminance: 74.24029689154229,
      },
      {
        hex: '#b9b7aa',
        count: 1,
        relativeLuminance: 74.24317327613446,
      },
      {
        hex: '#c4b4a5',
        count: 1,
        relativeLuminance: 74.25042495533964,
      },
      {
        hex: '#c9b583',
        count: 1,
        relativeLuminance: 74.25620972416698,
      },
      {
        hex: '#b9b7ab',
        count: 1,
        relativeLuminance: 74.26744110441842,
      },
      {
        hex: '#c9b39e',
        count: 2,
        relativeLuminance: 74.27050207621436,
      },
      {
        hex: '#b6b8aa',
        count: 1,
        relativeLuminance: 74.27178804206879,
      },
      {
        hex: '#b5b9a2',
        count: 1,
        relativeLuminance: 74.27304781602811,
      },
      {
        hex: '#bcb7a1',
        count: 1,
        relativeLuminance: 74.27383444008427,
      },
      {
        hex: '#afbaaa',
        count: 1,
        relativeLuminance: 74.27543243827628,
      },
      {
        hex: '#c2b78a',
        count: 1,
        relativeLuminance: 74.2991974687081,
      },
      {
        hex: '#cab48f',
        count: 1,
        relativeLuminance: 74.30618946364133,
      },
      {
        hex: '#bdb79f',
        count: 1,
        relativeLuminance: 74.31049550136113,
      },
      {
        hex: '#b5b8af',
        count: 1,
        relativeLuminance: 74.31744151571857,
      },
      {
        hex: '#bcb7a3',
        count: 1,
        relativeLuminance: 74.31922777309326,
      },
      {
        hex: '#ccb394',
        count: 1,
        relativeLuminance: 74.32752129302371,
      },
      {
        hex: '#c8b499',
        count: 1,
        relativeLuminance: 74.33140949950821,
      },
      {
        hex: '#c9b495',
        count: 3,
        relativeLuminance: 74.33661581739702,
      },
      {
        hex: '#bbb6b2',
        count: 2,
        relativeLuminance: 74.33986439173823,
      },
      {
        hex: '#cbb399',
        count: 2,
        relativeLuminance: 74.34086640270606,
      },
      {
        hex: '#bcb7a4',
        count: 2,
        relativeLuminance: 74.34217824842572,
      },
      {
        hex: '#cfb294',
        count: 1,
        relativeLuminance: 74.3457677454474,
      },
      {
        hex: '#beb79d',
        count: 1,
        relativeLuminance: 74.34840525230764,
      },
      {
        hex: '#c4b59e',
        count: 1,
        relativeLuminance: 74.35075597679112,
      },
      {
        hex: '#cdb29d',
        count: 1,
        relativeLuminance: 74.35210399196409,
      },
      {
        hex: '#c3b696',
        count: 1,
        relativeLuminance: 74.35577559209531,
      },
      {
        hex: '#b7b7b5',
        count: 1,
        relativeLuminance: 74.36242884731695,
      },
      {
        hex: '#b5ba9a',
        count: 1,
        relativeLuminance: 74.36511394403503,
      },
      {
        hex: '#c6b597',
        count: 2,
        relativeLuminance: 74.3735346082637,
      },
      {
        hex: '#cdb29f',
        count: 1,
        relativeLuminance: 74.3959844277066,
      },
      {
        hex: '#c2b69c',
        count: 1,
        relativeLuminance: 74.39751418884472,
      },
      {
        hex: '#b1baa9',
        count: 1,
        relativeLuminance: 74.4000382395373,
      },
      {
        hex: '#c1b6a0',
        count: 2,
        relativeLuminance: 74.40126276706387,
      },
      {
        hex: '#b1b8be',
        count: 1,
        relativeLuminance: 74.41041549102586,
      },
      {
        hex: '#b9b8a6',
        count: 1,
        relativeLuminance: 74.41209873107518,
      },
      {
        hex: '#c9b499',
        count: 1,
        relativeLuminance: 74.41941170826479,
      },
      {
        hex: '#bab7ae',
        count: 1,
        relativeLuminance: 74.42077177979192,
      },
      {
        hex: '#c7b688',
        count: 1,
        relativeLuminance: 74.42937233393313,
      },
      {
        hex: '#c5b59e',
        count: 1,
        relativeLuminance: 74.43643507730563,
      },
      {
        hex: '#cdb2a1',
        count: 1,
        relativeLuminance: 74.44053713943238,
      },
      {
        hex: '#c2b69e',
        count: 2,
        relativeLuminance: 74.44099441415048,
      },
      {
        hex: '#c1b6a2',
        count: 1,
        relativeLuminance: 74.4461688885936,
      },
      {
        hex: '#c0b79a',
        count: 4,
        relativeLuminance: 74.4490599943946,
      },
      {
        hex: '#bcb89d',
        count: 1,
        relativeLuminance: 74.44914441896523,
      },
      {
        hex: '#bbb7ac',
        count: 1,
        relativeLuminance: 74.4514713195038,
      },
      {
        hex: '#cbb492',
        count: 1,
        relativeLuminance: 74.45402998167015,
      },
      {
        hex: '#b5b9aa',
        count: 3,
        relativeLuminance: 74.46014134804636,
      },
      {
        hex: '#c7b4a3',
        count: 1,
        relativeLuminance: 74.46332907371372,
      },
      {
        hex: '#bab7b0',
        count: 1,
        relativeLuminance: 74.47076146387063,
      },
      {
        hex: '#b5b9ab',
        count: 1,
        relativeLuminance: 74.48429295007921,
      },
      {
        hex: '#bdb7a7',
        count: 1,
        relativeLuminance: 74.49309672214179,
      },
      {
        hex: '#bfb7a0',
        count: 4,
        relativeLuminance: 74.49665071423914,
      },
      {
        hex: '#cdb398',
        count: 1,
        relativeLuminance: 74.49978249237047,
      },
      {
        hex: '#b4b8b9',
        count: 1,
        relativeLuminance: 74.50024425486521,
      },
      {
        hex: '#ccb490',
        count: 2,
        relativeLuminance: 74.50433628392943,
      },
      {
        hex: '#c8b595',
        count: 2,
        relativeLuminance: 74.50657925820823,
      },
      {
        hex: '#c7b4a5',
        count: 1,
        relativeLuminance: 74.50925288247976,
      },
      {
        hex: '#cbb495',
        count: 6,
        relativeLuminance: 74.51414939818653,
      },
      {
        hex: '#ccb39d',
        count: 1,
        relativeLuminance: 74.51601462812923,
      },
      {
        hex: '#b8b8ae',
        count: 1,
        relativeLuminance: 74.52581190458568,
      },
      {
        hex: '#beb7a5',
        count: 2,
        relativeLuminance: 74.52798038717565,
      },
      {
        hex: '#c9b592',
        count: 1,
        relativeLuminance: 74.53422858801943,
      },
      {
        hex: '#bdb7a9',
        count: 1,
        relativeLuminance: 74.54043968149584,
      },
      {
        hex: '#bfb7a2',
        count: 2,
        relativeLuminance: 74.54146228938099,
      },
      {
        hex: '#c5b697',
        count: 1,
        relativeLuminance: 74.54692402914607,
      },
      {
        hex: '#c8b597',
        count: 3,
        relativeLuminance: 74.5474909823354,
      },
      {
        hex: '#c9b49f',
        count: 2,
        relativeLuminance: 74.5486040740335,
      },
      {
        hex: '#ceb396',
        count: 2,
        relativeLuminance: 74.54910684214593,
      },
      {
        hex: '#c4b69c',
        count: 1,
        relativeLuminance: 74.56683375501426,
      },
      {
        hex: '#cab49c',
        count: 1,
        relativeLuminance: 74.571536069513,
      },
      {
        hex: '#c1b79c',
        count: 1,
        relativeLuminance: 74.5749330650979,
      },
      {
        hex: '#bfb7a4',
        count: 2,
        relativeLuminance: 74.58694699471886,
      },
      {
        hex: '#bdb7ab',
        count: 1,
        relativeLuminance: 74.58846188015417,
      },
      {
        hex: '#c5b699',
        count: 1,
        relativeLuminance: 74.58849846584918,
      },
      {
        hex: '#ceb398',
        count: 1,
        relativeLuminance: 74.59032930154447,
      },
      {
        hex: '#cab49d',
        count: 1,
        relativeLuminance: 74.59310931765242,
      },
      {
        hex: '#b9b7b8',
        count: 1,
        relativeLuminance: 74.59853431213358,
      },
      {
        hex: '#bab8ab',
        count: 1,
        relativeLuminance: 74.6101994866659,
      },
      {
        hex: '#c1b79e',
        count: 1,
        relativeLuminance: 74.61824324053225,
      },
      {
        hex: '#b1b9bc',
        count: 1,
        relativeLuminance: 74.62003274174663,
      },
      {
        hex: '#c2b6a6',
        count: 1,
        relativeLuminance: 74.62163528917937,
      },
      {
        hex: '#c7b59f',
        count: 1,
        relativeLuminance: 74.63092193383082,
      },
      {
        hex: '#beb89e',
        count: 1,
        relativeLuminance: 74.63325735759553,
      },
      {
        hex: '#c3b6a3',
        count: 1,
        relativeLuminance: 74.63679898363387,
      },
      {
        hex: '#c2b79b',
        count: 1,
        relativeLuminance: 74.63712928823647,
      },
      {
        hex: '#c9b4a3',
        count: 1,
        relativeLuminance: 74.63808111589077,
      },
      {
        hex: '#b7b9ab',
        count: 1,
        relativeLuminance: 74.63878434207011,
      },
      {
        hex: '#bdb8a2',
        count: 1,
        relativeLuminance: 74.64065493139148,
      },
      {
        hex: '#bbb8a9',
        count: 1,
        relativeLuminance: 74.6418685692771,
      },
      {
        hex: '#adbca9',
        count: 1,
        relativeLuminance: 74.64497223527589,
      },
      {
        hex: '#bfb89b',
        count: 1,
        relativeLuminance: 74.65045217695574,
      },
      {
        hex: '#b0b9c0',
        count: 1,
        relativeLuminance: 74.65671873591255,
      },
      {
        hex: '#ccb498',
        count: 2,
        relativeLuminance: 74.66500038146212,
      },
      {
        hex: '#afbbaf',
        count: 1,
        relativeLuminance: 74.66681631919121,
      },
      {
        hex: '#beb993',
        count: 1,
        relativeLuminance: 74.66802154201685,
      },
      {
        hex: '#bfb89c',
        count: 1,
        relativeLuminance: 74.67181133594725,
      },
      {
        hex: '#beb8a0',
        count: 1,
        relativeLuminance: 74.67722131117824,
      },
      {
        hex: '#b5b8bd',
        count: 1,
        relativeLuminance: 74.68523496338548,
      },
      {
        hex: '#bdb8a4',
        count: 2,
        relativeLuminance: 74.68604021350733,
      },
      {
        hex: '#cdb495',
        count: 1,
        relativeLuminance: 74.69328107282354,
      },
      {
        hex: '#b1bab5',
        count: 1,
        relativeLuminance: 74.69931544694205,
      },
      {
        hex: '#ccb49a',
        count: 1,
        relativeLuminance: 74.70681659582334,
      },
      {
        hex: '#bdb8a5',
        count: 1,
        relativeLuminance: 74.70898515930664,
      },
      {
        hex: '#c5b69f',
        count: 1,
        relativeLuminance: 74.71721002305715,
      },
      {
        hex: '#beb8a2',
        count: 2,
        relativeLuminance: 74.72185472413882,
      },
      {
        hex: '#c4b797',
        count: 1,
        relativeLuminance: 74.72206751724364,
      },
      {
        hex: '#d1b391',
        count: 1,
        relativeLuminance: 74.72380087385855,
      },
      {
        hex: '#bfb7aa',
        count: 1,
        relativeLuminance: 74.72745157900611,
      },
      {
        hex: '#c6b69c',
        count: 1,
        relativeLuminance: 74.73778229533225,
      },
      {
        hex: '#c7b698',
        count: 1,
        relativeLuminance: 74.73970694476205,
      },
      {
        hex: '#c9b59c',
        count: 1,
        relativeLuminance: 74.74005120332798,
      },
      {
        hex: '#cab598',
        count: 3,
        relativeLuminance: 74.74368315302273,
      },
      {
        hex: '#b9b8b4',
        count: 1,
        relativeLuminance: 74.75584652231355,
      },
      {
        hex: '#c5b6a1',
        count: 2,
        relativeLuminance: 74.76144800571271,
      },
      {
        hex: '#ceb3a0',
        count: 1,
        relativeLuminance: 74.76186060499842,
      },
      {
        hex: '#c0b7a8',
        count: 1,
        relativeLuminance: 74.76218739169113,
      },
      {
        hex: '#c3b79d',
        count: 1,
        relativeLuminance: 74.76395741107712,
      },
      {
        hex: '#c2b7a1',
        count: 2,
        relativeLuminance: 74.76782225872752,
      },
      {
        hex: '#c1b899',
        count: 1,
        relativeLuminance: 74.77339699831509,
      },
      {
        hex: '#c7b69a',
        count: 3,
        relativeLuminance: 74.78145437985964,
      },
      {
        hex: '#cab59a',
        count: 1,
        relativeLuminance: 74.78542693214382,
      },
      {
        hex: '#cfb39d',
        count: 1,
        relativeLuminance: 74.78701827524515,
      },
      {
        hex: '#bbb8af',
        count: 1,
        relativeLuminance: 74.78765075081144,
      },
      {
        hex: '#bcb8ac',
        count: 1,
        relativeLuminance: 74.7939519908066,
      },
      {
        hex: '#c5b6a3',
        count: 1,
        relativeLuminance: 74.80635526164069,
      },
      {
        hex: '#c3b79f',
        count: 1,
        relativeLuminance: 74.80744080979427,
      },
      {
        hex: '#b7baa7',
        count: 1,
        relativeLuminance: 74.80922854506838,
      },
      {
        hex: '#c2b7a3',
        count: 3,
        relativeLuminance: 74.81272321224812,
      },
      {
        hex: '#b5b9b8',
        count: 1,
        relativeLuminance: 74.81380971094907,
      },
      {
        hex: '#c1b89b',
        count: 1,
        relativeLuminance: 74.81546339283179,
      },
      {
        hex: '#ccb593',
        count: 1,
        relativeLuminance: 74.81969413415382,
      },
      {
        hex: '#c7b69c',
        count: 2,
        relativeLuminance: 74.82386400275156,
      },
      {
        hex: '#b4b9bc',
        count: 1,
        relativeLuminance: 74.84514738148584,
      },
      {
        hex: '#c9b787',
        count: 1,
        relativeLuminance: 74.84621104850989,
      },
      {
        hex: '#b6baac',
        count: 1,
        relativeLuminance: 74.8510669419593,
      },
      {
        hex: '#c3b7a1',
        count: 1,
        relativeLuminance: 74.85159098608456,
      },
      {
        hex: '#beb99c',
        count: 1,
        relativeLuminance: 74.85353854871222,
      },
      {
        hex: '#c0b8a1',
        count: 2,
        relativeLuminance: 74.86317071850975,
      },
      {
        hex: '#bfb8a5',
        count: 2,
        relativeLuminance: 74.87155271209492,
      },
      {
        hex: '#ccb596',
        count: 5,
        relativeLuminance: 74.87984807402731,
      },
      {
        hex: '#c1b6b4',
        count: 1,
        relativeLuminance: 74.8808033375577,
      },
      {
        hex: '#cdb49e',
        count: 2,
        relativeLuminance: 74.88183224543623,
      },
      {
        hex: '#b9b9af',
        count: 2,
        relativeLuminance: 74.8925918828022,
      },
      {
        hex: '#bfb8a6',
        count: 1,
        relativeLuminance: 74.89458346194002,
      },
      {
        hex: '#beb8aa',
        count: 2,
        relativeLuminance: 74.90710736176582,
      },
      {
        hex: '#ceb49b',
        count: 1,
        relativeLuminance: 74.90740775726677,
      },
      {
        hex: '#c0b8a3',
        count: 1,
        relativeLuminance: 74.90797755632313,
      },
      {
        hex: '#cdb593',
        count: 1,
        relativeLuminance: 74.90903279931783,
      },
      {
        hex: '#cfb497',
        count: 1,
        relativeLuminance: 74.9145807830535,
      },
      {
        hex: '#cab5a0',
        count: 1,
        relativeLuminance: 74.91463681603128,
      },
      {
        hex: '#c5b79d',
        count: 2,
        relativeLuminance: 74.9330402564614,
      },
      {
        hex: '#c7b795',
        count: 1,
        relativeLuminance: 74.93769763098534,
      },
      {
        hex: '#cab695',
        count: 2,
        relativeLuminance: 74.9398160927383,
      },
      {
        hex: '#b4bbab',
        count: 1,
        relativeLuminance: 74.9409740896658,
      },
      {
        hex: '#c8b69e',
        count: 1,
        relativeLuminance: 74.95334022818356,
      },
      {
        hex: '#c0b8a5',
        count: 2,
        relativeLuminance: 74.95345355618939,
      },
      {
        hex: '#cfb499',
        count: 2,
        relativeLuminance: 74.9558198759172,
      },
      {
        hex: '#cbb59e',
        count: 1,
        relativeLuminance: 74.95900027475984,
      },
      {
        hex: '#c6b6a6',
        count: 1,
        relativeLuminance: 74.96023179319434,
      },
      {
        hex: '#c3b89a',
        count: 2,
        relativeLuminance: 74.96107319295128,
      },
      {
        hex: '#ccb68d',
        count: 1,
        relativeLuminance: 74.96118529949156,
      },
      {
        hex: '#b7b9b8',
        count: 1,
        relativeLuminance: 74.96718483066411,
      },
      {
        hex: '#bfb99f',
        count: 3,
        relativeLuminance: 74.99961579993732,
      },
      {
        hex: '#cbb5a0',
        count: 1,
        relativeLuminance: 75.00265013075376,
      },
      {
        hex: '#c4b7a4',
        count: 2,
        relativeLuminance: 75.00312048044186,
      },
      {
        hex: '#c3b89c',
        count: 1,
        relativeLuminance: 75.00331560713249,
      },
      {
        hex: '#b7bba4',
        count: 1,
        relativeLuminance: 75.00638255517413,
      },
      {
        hex: '#b1bcac',
        count: 1,
        relativeLuminance: 75.00879810468412,
      },
      {
        hex: '#cdb599',
        count: 1,
        relativeLuminance: 75.03057947573372,
      },
      {
        hex: '#bfba94',
        count: 1,
        relativeLuminance: 75.03403570601996,
      },
      {
        hex: '#ccb691',
        count: 1,
        relativeLuminance: 75.03736614864314,
      },
      {
        hex: '#c0b99d',
        count: 1,
        relativeLuminance: 75.03806446886176,
      },
      {
        hex: '#c5b896',
        count: 1,
        relativeLuminance: 75.04722409664511,
      },
      {
        hex: '#aabdb7',
        count: 1,
        relativeLuminance: 75.05151231963173,
      },
      {
        hex: '#b6b9be',
        count: 1,
        relativeLuminance: 75.05187361947029,
      },
      {
        hex: '#cab69b',
        count: 4,
        relativeLuminance: 75.06335626271799,
      },
      {
        hex: '#c9b793',
        count: 2,
        relativeLuminance: 75.07091763467754,
      },
      {
        hex: '#cdb59b',
        count: 2,
        relativeLuminance: 75.07240867513353,
      },
      {
        hex: '#beb9a6',
        count: 3,
        relativeLuminance: 75.07542363284016,
      },
      {
        hex: '#d1b496',
        count: 1,
        relativeLuminance: 75.07641924367853,
      },
      {
        hex: '#c0b99f',
        count: 2,
        relativeLuminance: 75.08128659928376,
      },
      {
        hex: '#c1b8a7',
        count: 2,
        relativeLuminance: 75.0818270927388,
      },
      {
        hex: '#c6b7a0',
        count: 3,
        relativeLuminance: 75.08329982029414,
      },
      {
        hex: '#cfb49f',
        count: 2,
        relativeLuminance: 75.08349612427601,
      },
      {
        hex: '#b9b9b7',
        count: 1,
        relativeLuminance: 75.09603196550441,
      },
      {
        hex: '#bab9b4',
        count: 1,
        relativeLuminance: 75.09678792634638,
      },
      {
        hex: '#c7b79d',
        count: 1,
        relativeLuminance: 75.1037425034887,
      },
      {
        hex: '#c8b799',
        count: 1,
        relativeLuminance: 75.10551823156464,
      },
      {
        hex: '#cbb699',
        count: 4,
        relativeLuminance: 75.10932577657472,
      },
      {
        hex: '#cdb59d',
        count: 1,
        relativeLuminance: 75.11489722088339,
      },
      {
        hex: '#cab69e',
        count: 1,
        relativeLuminance: 75.12734949189684,
      },
      {
        hex: '#c1b8a9',
        count: 1,
        relativeLuminance: 75.12856047448041,
      },
      {
        hex: '#c4b89e',
        count: 2,
        relativeLuminance: 75.13003620363205,
      },
      {
        hex: '#d3b39c',
        count: 1,
        relativeLuminance: 75.13255414553214,
      },
      {
        hex: '#c3b8a2',
        count: 2,
        relativeLuminance: 75.13401592112305,
      },
      {
        hex: '#beba9d',
        count: 1,
        relativeLuminance: 75.13875517332342,
      },
      {
        hex: '#c3b996',
        count: 1,
        relativeLuminance: 75.14047904887065,
      },
      {
        hex: '#bbbaa8',
        count: 1,
        relativeLuminance: 75.14531797700708,
      },
      {
        hex: '#c8b79b',
        count: 1,
        relativeLuminance: 75.14727869341498,
      },
      {
        hex: '#cbb69b',
        count: 2,
        relativeLuminance: 75.15108275047761,
      },
      {
        hex: '#b5bbb1',
        count: 1,
        relativeLuminance: 75.16345813586486,
      },
      {
        hex: '#b2bbba',
        count: 1,
        relativeLuminance: 75.1710115433597,
      },
      {
        hex: '#cfb4a3',
        count: 1,
        relativeLuminance: 75.17192686424836,
      },
      {
        hex: '#c4b8a0',
        count: 1,
        relativeLuminance: 75.17352248354018,
      },
      {
        hex: '#c3b8a4',
        count: 4,
        relativeLuminance: 75.17891150279861,
      },
      {
        hex: '#c2b99c',
        count: 1,
        relativeLuminance: 75.18150250072091,
      },
      {
        hex: '#bdb9ae',
        count: 1,
        relativeLuminance: 75.18474119702547,
      },
      {
        hex: '#d1b590',
        count: 1,
        relativeLuminance: 75.21222882032396,
      },
      {
        hex: '#c4b8a2',
        count: 1,
        relativeLuminance: 75.21767164966757,
      },
      {
        hex: '#cdb696',
        count: 1,
        relativeLuminance: 75.2249649840816,
      },
      {
        hex: '#bfb9a9',
        count: 1,
        relativeLuminance: 75.22610349072471,
      },
      {
        hex: '#c1b9a2',
        count: 3,
        relativeLuminance: 75.22932477853395,
      },
      {
        hex: '#b6babb',
        count: 1,
        relativeLuminance: 75.2335355269469,
      },
      {
        hex: '#c7b897',
        count: 1,
        relativeLuminance: 75.23772850016886,
      },
      {
        hex: '#c0b9a6',
        count: 1,
        relativeLuminance: 75.23779481332573,
      },
      {
        hex: '#cdb697',
        count: 1,
        relativeLuminance: 75.24519052544487,
      },
      {
        hex: '#ceb59f',
        count: 1,
        relativeLuminance: 75.24729228772438,
      },
      {
        hex: '#cbb794',
        count: 1,
        relativeLuminance: 75.26531038829312,
      },
      {
        hex: '#c1b9a4',
        count: 2,
        relativeLuminance: 75.27412667188078,
      },
      {
        hex: '#c6b89d',
        count: 1,
        relativeLuminance: 75.27746862309397,
      },
      {
        hex: '#cab799',
        count: 2,
        relativeLuminance: 75.27894832408893,
      },
      {
        hex: '#d0b598',
        count: 1,
        relativeLuminance: 75.27970101887682,
      },
      {
        hex: '#cbb6a1',
        count: 1,
        relativeLuminance: 75.28030918514557,
      },
      {
        hex: '#b9bab4',
        count: 2,
        relativeLuminance: 75.2814146594459,
      },
      {
        hex: '#c4b999',
        count: 1,
        relativeLuminance: 75.2852905900087,
      },
      {
        hex: '#c6b89e',
        count: 1,
        relativeLuminance: 75.29888413671378,
      },
      {
        hex: '#ccb69e',
        count: 1,
        relativeLuminance: 75.30295385506669,
      },
      {
        hex: '#c8b896',
        count: 2,
        relativeLuminance: 75.30324070750146,
      },
      {
        hex: '#c3b99e',
        count: 2,
        relativeLuminance: 75.30717250683486,
      },
      {
        hex: '#b5bcac',
        count: 1,
        relativeLuminance: 75.30723881638858,
      },
      {
        hex: '#c0b9a9',
        count: 1,
        relativeLuminance: 75.307369805375,
      },
      {
        hex: '#babab2',
        count: 1,
        relativeLuminance: 75.30880705539539,
      },
      {
        hex: '#cfb59e',
        count: 1,
        relativeLuminance: 75.31535924124219,
      },
      {
        hex: '#c9b79f',
        count: 1,
        relativeLuminance: 75.31905048847997,
      },
      {
        hex: '#c7b89b',
        count: 1,
        relativeLuminance: 75.32027846300139,
      },
      {
        hex: '#ccb69f',
        count: 2,
        relativeLuminance: 75.32453227865682,
      },
      {
        hex: '#c4b99b',
        count: 1,
        relativeLuminance: 75.3268868445457,
      },
      {
        hex: '#bcbaad',
        count: 1,
        relativeLuminance: 75.3431427462766,
      },
      {
        hex: '#c3b9a0',
        count: 3,
        relativeLuminance: 75.35049034326754,
      },
      {
        hex: '#cab890',
        count: 1,
        relativeLuminance: 75.35863336283549,
      },
      {
        hex: '#c0baa0',
        count: 2,
        relativeLuminance: 75.36560938952917,
      },
      {
        hex: '#bcbaae',
        count: 1,
        relativeLuminance: 75.36737059544141,
      },
      {
        hex: '#ccb6a1',
        count: 1,
        relativeLuminance: 75.36818426046398,
      },
      {
        hex: '#c5b8a5',
        count: 2,
        relativeLuminance: 75.36907758443272,
      },
      {
        hex: '#c4b99d',
        count: 2,
        relativeLuminance: 75.3691390996546,
      },
      {
        hex: '#bfbaa4',
        count: 1,
        relativeLuminance: 75.37319352336979,
      },
      {
        hex: '#bdbaab',
        count: 1,
        relativeLuminance: 75.37468245108617,
      },
      {
        hex: '#b2bdad',
        count: 1,
        relativeLuminance: 75.37493002149213,
      },
      {
        hex: '#b6bbb7',
        count: 1,
        relativeLuminance: 75.39195717478039,
      },
      {
        hex: '#cab892',
        count: 1,
        relativeLuminance: 75.39708368846787,
      },
      {
        hex: '#b0bdb4',
        count: 1,
        relativeLuminance: 75.4018962839152,
      },
      {
        hex: '#c1ba9e',
        count: 1,
        relativeLuminance: 75.40395376345838,
      },
      {
        hex: '#c0baa2',
        count: 1,
        relativeLuminance: 75.40957324643557,
      },
      {
        hex: '#c6b997',
        count: 1,
        relativeLuminance: 75.4127751389484,
      },
      {
        hex: '#cfb697',
        count: 1,
        relativeLuminance: 75.42373526391575,
      },
      {
        hex: '#cbb79c',
        count: 3,
        relativeLuminance: 75.42879091966886,
      },
      {
        hex: '#d0b693',
        count: 1,
        relativeLuminance: 75.43414046499133,
      },
      {
        hex: '#bfbaa7',
        count: 3,
        relativeLuminance: 75.44149586664562,
      },
      {
        hex: '#cfb698',
        count: 1,
        relativeLuminance: 75.44404451114872,
      },
      {
        hex: '#c1baa0',
        count: 3,
        relativeLuminance: 75.44717998102958,
      },
      {
        hex: '#c2b9a8',
        count: 1,
        relativeLuminance: 75.44785070477582,
      },
      {
        hex: '#c6b999',
        count: 1,
        relativeLuminance: 75.45356625602584,
      },
      {
        hex: '#c0baa4',
        count: 5,
        relativeLuminance: 75.45419875560961,
      },
      {
        hex: '#c8b89e',
        count: 2,
        relativeLuminance: 75.46934200108502,
      },
      {
        hex: '#cbb79e',
        count: 2,
        relativeLuminance: 75.47129648470803,
      },
      {
        hex: '#d0b695',
        count: 1,
        relativeLuminance: 75.47354455263421,
      },
      {
        hex: '#ccb79a',
        count: 1,
        relativeLuminance: 75.47461144291091,
      },
      {
        hex: '#d0b5a2',
        count: 1,
        relativeLuminance: 75.49254246915632,
      },
      {
        hex: '#cbb79f',
        count: 1,
        relativeLuminance: 75.49279558405625,
      },
      {
        hex: '#c5b99f',
        count: 2,
        relativeLuminance: 75.49575270062341,
      },
      {
        hex: '#c4b9a3',
        count: 1,
        relativeLuminance: 75.49984591111995,
      },
      {
        hex: '#c0b9b1',
        count: 1,
        relativeLuminance: 75.50027237324464,
      },
      {
        hex: '#c3ba9b',
        count: 1,
        relativeLuminance: 75.50509149435648,
      },
      {
        hex: '#bcbba9',
        count: 2,
        relativeLuminance: 75.51137674835083,
      },
      {
        hex: '#bdbab1',
        count: 1,
        relativeLuminance: 75.52030161432043,
      },
      {
        hex: '#bdbba6',
        count: 1,
        relativeLuminance: 75.52134868475311,
      },
      {
        hex: '#bebaae',
        count: 1,
        relativeLuminance: 75.52651328780883,
      },
      {
        hex: '#c4b9a5',
        count: 2,
        relativeLuminance: 75.54473592184812,
      },
      {
        hex: '#c3ba9d',
        count: 2,
        relativeLuminance: 75.54717945205404,
      },
      {
        hex: '#ccb6a9',
        count: 1,
        relativeLuminance: 75.54941716358779,
      },
      {
        hex: '#cab7a6',
        count: 1,
        relativeLuminance: 75.56112608688177,
      },
      {
        hex: '#c0bb9d',
        count: 1,
        relativeLuminance: 75.56406386253371,
      },
      {
        hex: '#bcbca0',
        count: 1,
        relativeLuminance: 75.57302070174886,
      },
      {
        hex: '#c0bb9e',
        count: 2,
        relativeLuminance: 75.58534557169881,
      },
      {
        hex: '#ceb797',
        count: 1,
        relativeLuminance: 75.58994312815796,
      },
      {
        hex: '#c4b9a7',
        count: 1,
        relativeLuminance: 75.59028852190576,
      },
      {
        hex: '#ccb893',
        count: 1,
        relativeLuminance: 75.59104903745984,
      },
      {
        hex: '#bfbba2',
        count: 1,
        relativeLuminance: 75.59149300952822,
      },
      {
        hex: '#c0baaa',
        count: 1,
        relativeLuminance: 75.59205720401161,
      },
      {
        hex: '#d0b69b',
        count: 1,
        relativeLuminance: 75.59565014936794,
      },
      {
        hex: '#c7b99c',
        count: 2,
        relativeLuminance: 75.6006024678706,
      },
      {
        hex: '#cbb898',
        count: 1,
        relativeLuminance: 75.60317599203131,
      },
      {
        hex: '#c1baa7',
        count: 1,
        relativeLuminance: 75.60367204476101,
      },
      {
        hex: '#cdb6a8',
        count: 1,
        relativeLuminance: 75.6141485689218,
      },
      {
        hex: '#bbbbb1',
        count: 1,
        relativeLuminance: 75.62504641395604,
      },
      {
        hex: '#c1baa8',
        count: 3,
        relativeLuminance: 75.62669045122531,
      },
      {
        hex: '#ccb895',
        count: 1,
        relativeLuminance: 75.6303183178451,
      },
      {
        hex: '#cfb795',
        count: 1,
        relativeLuminance: 75.63900666741024,
      },
      {
        hex: '#c2baa5',
        count: 2,
        relativeLuminance: 75.639911802933,
      },
      {
        hex: '#c6b8ad',
        count: 1,
        relativeLuminance: 75.63998532771784,
      },
      {
        hex: '#c8b99a',
        count: 3,
        relativeLuminance: 75.64401323102864,
      },
      {
        hex: '#cbb89a',
        count: 1,
        relativeLuminance: 75.64414062554837,
      },
      {
        hex: '#c3b9ad',
        count: 1,
        relativeLuminance: 75.64821211924713,
      },
      {
        hex: '#cfb6a2',
        count: 2,
        relativeLuminance: 75.6561242636194,
      },
      {
        hex: '#bdbbac',
        count: 1,
        relativeLuminance: 75.66113593274083,
      },
      {
        hex: '#c9b997',
        count: 2,
        relativeLuminance: 75.66842676294975,
      },
      {
        hex: '#c4ba9f',
        count: 1,
        relativeLuminance: 75.67274862366033,
      },
      {
        hex: '#babbb6',
        count: 1,
        relativeLuminance: 75.67297968859589,
      },
      {
        hex: '#c1baaa',
        count: 2,
        relativeLuminance: 75.67322548719385,
      },
      {
        hex: '#d0b69f',
        count: 1,
        relativeLuminance: 75.68031374820254,
      },
      {
        hex: '#cab8a0',
        count: 2,
        relativeLuminance: 75.68440173188648,
      },
      {
        hex: '#c2baa7',
        count: 1,
        relativeLuminance: 75.6853699019475,
      },
      {
        hex: '#c8b99c',
        count: 1,
        relativeLuminance: 75.68562883057899,
      },
      {
        hex: '#ccb7a4',
        count: 2,
        relativeLuminance: 75.69001934317906,
      },
      {
        hex: '#c5ba9c',
        count: 1,
        relativeLuminance: 75.69234014261903,
      },
      {
        hex: '#c4baa1',
        count: 1,
        relativeLuminance: 75.7160698485774,
      },
      {
        hex: '#cab8a2',
        count: 1,
        relativeLuminance: 75.72806060844673,
      },
      {
        hex: '#c1bba1',
        count: 2,
        relativeLuminance: 75.73124027546612,
      },
      {
        hex: '#c5ba9e',
        count: 3,
        relativeLuminance: 75.7346018820725,
      },
      {
        hex: '#c6b9a6',
        count: 1,
        relativeLuminance: 75.73467243664516,
      },
      {
        hex: '#ccb7a6',
        count: 1,
        relativeLuminance: 75.7350752475125,
      },
      {
        hex: '#c0bba5',
        count: 1,
        relativeLuminance: 75.73891598336347,
      },
      {
        hex: '#c2bb9e',
        count: 3,
        relativeLuminance: 75.74811174419803,
      },
      {
        hex: '#cfb79b',
        count: 1,
        relativeLuminance: 75.7606725944786,
      },
      {
        hex: '#c2bb9f',
        count: 1,
        relativeLuminance: 75.7694813537463,
      },
      {
        hex: '#c9ba8f',
        count: 1,
        relativeLuminance: 75.77275780660852,
      },
      {
        hex: '#c1bba3',
        count: 2,
        relativeLuminance: 75.7752037044287,
      },
      {
        hex: '#c7ba98',
        count: 2,
        relativeLuminance: 75.77796839773528,
      },
      {
        hex: '#aebebe',
        count: 1,
        relativeLuminance: 75.78807532928151,
      },
      {
        hex: '#ccb89d',
        count: 1,
        relativeLuminance: 75.79386916259746,
      },
      {
        hex: '#cfb79d',
        count: 1,
        relativeLuminance: 75.80252658373522,
      },
      {
        hex: '#d3b698',
        count: 1,
        relativeLuminance: 75.80566741008886,
      },
      {
        hex: '#c0bba8',
        count: 1,
        relativeLuminance: 75.80720403455557,
      },
      {
        hex: '#d0b799',
        count: 1,
        relativeLuminance: 75.80875244962644,
      },
      {
        hex: '#c2bba1',
        count: 2,
        relativeLuminance: 75.81271136288125,
      },
      {
        hex: '#c8b9a2',
        count: 2,
        relativeLuminance: 75.81439516190652,
      },
      {
        hex: '#c1bba5',
        count: 2,
        relativeLuminance: 75.8198249440405,
      },
      {
        hex: '#c9b99f',
        count: 1,
        relativeLuminance: 75.8345828728638,
      },
      {
        hex: '#ccb89f',
        count: 2,
        relativeLuminance: 75.8363829598606,
      },
      {
        hex: '#cdb89b',
        count: 2,
        relativeLuminance: 75.83954217588979,
      },
      {
        hex: '#cfb79f',
        count: 1,
        relativeLuminance: 75.84503236842966,
      },
      {
        hex: '#b7bdb1',
        count: 1,
        relativeLuminance: 75.8457864890259,
      },
      {
        hex: '#ccb8a0',
        count: 1,
        relativeLuminance: 75.85788475937042,
      },
      {
        hex: '#c8b9a4',
        count: 1,
        relativeLuminance: 75.8586283031709,
      },
      {
        hex: '#c3baab',
        count: 1,
        relativeLuminance: 75.86021151062725,
      },
      {
        hex: '#c5baa4',
        count: 3,
        relativeLuminance: 75.8653143626376,
      },
      {
        hex: '#aebfb7',
        count: 1,
        relativeLuminance: 75.87191533994618,
      },
      {
        hex: '#cab99d',
        count: 1,
        relativeLuminance: 75.8778512914994,
      },
      {
        hex: '#cdb89d',
        count: 2,
        relativeLuminance: 75.88132435864974,
      },
      {
        hex: '#bebca7',
        count: 1,
        relativeLuminance: 75.88697736326839,
      },
      {
        hex: '#ceb7a5',
        count: 1,
        relativeLuminance: 75.88807861544655,
      },
      {
        hex: '#c9b9a2',
        count: 1,
        relativeLuminance: 75.89958145853456,
      },
      {
        hex: '#c5baa6',
        count: 1,
        relativeLuminance: 75.9101986079363,
      },
      {
        hex: '#c4bb9e',
        count: 1,
        relativeLuminance: 75.91249635832158,
      },
      {
        hex: '#c0bca1',
        count: 1,
        relativeLuminance: 75.9131638193838,
      },
      {
        hex: '#cab99f',
        count: 2,
        relativeLuminance: 75.92028745753217,
      },
      {
        hex: '#d0b892',
        count: 1,
        relativeLuminance: 75.9255308889516,
      },
      {
        hex: '#ccb998',
        count: 1,
        relativeLuminance: 75.9477481767632,
      },
      {
        hex: '#c6baa4',
        count: 3,
        relativeLuminance: 75.9487466195839,
      },
      {
        hex: '#babdac',
        count: 1,
        relativeLuminance: 75.95424749460165,
      },
      {
        hex: '#c5baa8',
        count: 1,
        relativeLuminance: 75.95574158707265,
      },
      {
        hex: '#c1bbab',
        count: 1,
        relativeLuminance: 75.95764737138944,
      },
      {
        hex: '#c3bba4',
        count: 4,
        relativeLuminance: 75.9605436912016,
      },
      {
        hex: '#b8bcbd',
        count: 1,
        relativeLuminance: 75.96535700993486,
      },
      {
        hex: '#c8ba9d',
        count: 1,
        relativeLuminance: 75.96571562167438,
      },
      {
        hex: '#ccb999',
        count: 2,
        relativeLuminance: 75.96799666339456,
      },
      {
        hex: '#c9ba99',
        count: 4,
        relativeLuminance: 75.96801229343392,
      },
      {
        hex: '#c2bba8',
        count: 1,
        relativeLuminance: 75.96918656321168,
      },
      {
        hex: '#d0b7a1',
        count: 1,
        relativeLuminance: 75.97714772595039,
      },
      {
        hex: '#c2bba9',
        count: 3,
        relativeLuminance: 75.99219870635267,
      },
      {
        hex: '#caba96',
        count: 1,
        relativeLuminance: 75.9933186790174,
      },
      {
        hex: '#c3bba6',
        count: 1,
        relativeLuminance: 76.00533509314701,
      },
      {
        hex: '#c8ba9f',
        count: 1,
        relativeLuminance: 76.00807079513636,
      },
      {
        hex: '#c9ba9b',
        count: 1,
        relativeLuminance: 76.00899367577968,
      },
      {
        hex: '#babcb9',
        count: 1,
        relativeLuminance: 76.01295711821865,
      },
      {
        hex: '#c4baae',
        count: 1,
        relativeLuminance: 76.0137196664325,
      },
      {
        hex: '#c6bb9b',
        count: 1,
        relativeLuminance: 76.0158128102178,
      },
      {
        hex: '#bebcad',
        count: 1,
        relativeLuminance: 76.0267171789094,
      },
      {
        hex: '#c8baa0',
        count: 2,
        relativeLuminance: 76.02949245245286,
      },
      {
        hex: '#ceb8a0',
        count: 2,
        relativeLuminance: 76.03294462908715,
      },
      {
        hex: '#caba98',
        count: 2,
        relativeLuminance: 76.03325783003062,
      },
      {
        hex: '#cdb998',
        count: 1,
        relativeLuminance: 76.03491131244309,
      },
      {
        hex: '#c5bba0',
        count: 2,
        relativeLuminance: 76.03796515580498,
      },
      {
        hex: '#c2bbab',
        count: 2,
        relativeLuminance: 76.0387183058779,
      },
      {
        hex: '#cbb9a1',
        count: 1,
        relativeLuminance: 76.04939602255372,
      },
      {
        hex: '#cdb8a5',
        count: 1,
        relativeLuminance: 76.05497447175028,
      },
      {
        hex: '#c6bb9d',
        count: 3,
        relativeLuminance: 76.05743517428844,
      },
      {
        hex: '#bfbcab',
        count: 1,
        relativeLuminance: 76.05887424241168,
      },
      {
        hex: '#cbb9a3',
        count: 1,
        relativeLuminance: 76.09305628602988,
      },
      {
        hex: '#c6bb9f',
        count: 3,
        relativeLuminance: 76.09970604846065,
      },
      {
        hex: '#c7baa7',
        count: 1,
        relativeLuminance: 76.0999071554207,
      },
      {
        hex: '#c1bca6',
        count: 1,
        relativeLuminance: 76.10427675321523,
      },
      {
        hex: '#bfbcad',
        count: 1,
        relativeLuminance: 76.10603448595144,
      },
      {
        hex: '#c3bc9f',
        count: 1,
        relativeLuminance: 76.11327658171257,
      },
      {
        hex: '#b8bdb9',
        count: 1,
        relativeLuminance: 76.12344056632264,
      },
      {
        hex: '#ccba94',
        count: 1,
        relativeLuminance: 76.1264917267927,
      },
      {
        hex: '#c3bca0',
        count: 3,
        relativeLuminance: 76.13464935115412,
      },
      {
        hex: '#c2bca4',
        count: 2,
        relativeLuminance: 76.1404733391154,
      },
      {
        hex: '#babdb4',
        count: 1,
        relativeLuminance: 76.14872976122935,
      },
      {
        hex: '#d1b899',
        count: 1,
        relativeLuminance: 76.15278213385098,
      },
      {
        hex: '#cdb99e',
        count: 1,
        relativeLuminance: 76.15859301730667,
      },
      {
        hex: '#ceb99a',
        count: 1,
        relativeLuminance: 76.16297141082916,
      },
      {
        hex: '#d0b89e',
        count: 1,
        relativeLuminance: 76.16705640849165,
      },
      {
        hex: '#c1bca9',
        count: 1,
        relativeLuminance: 76.17255028698648,
      },
      {
        hex: '#d1b89a',
        count: 1,
        relativeLuminance: 76.17311028838289,
      },
      {
        hex: '#c3bca2',
        count: 1,
        relativeLuminance: 76.17788286229938,
      },
      {
        hex: '#c4bbaa',
        count: 1,
        relativeLuminance: 76.17880951881098,
      },
      {
        hex: '#c9baa3',
        count: 1,
        relativeLuminance: 76.17940489786443,
      },
      {
        hex: '#c8bb9b',
        count: 1,
        relativeLuminance: 76.18363207273042,
      },
      {
        hex: '#c3bbae',
        count: 1,
        relativeLuminance: 76.19108686945995,
      },
      {
        hex: '#c5bc9b',
        count: 1,
        relativeLuminance: 76.1938853972704,
      },
      {
        hex: '#ccb8af',
        count: 1,
        relativeLuminance: 76.20011657441049,
      },
      {
        hex: '#cbba9c',
        count: 1,
        relativeLuminance: 76.20080646993473,
      },
      {
        hex: '#ceb99c',
        count: 1,
        relativeLuminance: 76.20411997907577,
      },
      {
        hex: '#bfbda6',
        count: 1,
        relativeLuminance: 76.20699411139059,
      },
      {
        hex: '#c6bc98',
        count: 1,
        relativeLuminance: 76.21585010209343,
      },
      {
        hex: '#cabaa1',
        count: 2,
        relativeLuminance: 76.22097229546638,
      },
      {
        hex: '#cdb9a1',
        count: 2,
        relativeLuminance: 76.22261905363041,
      },
      {
        hex: '#c7bba1',
        count: 2,
        relativeLuminance: 76.2261072323265,
      },
      {
        hex: '#c6bba5',
        count: 3,
        relativeLuminance: 76.23042338699484,
      },
      {
        hex: '#c5bc9d',
        count: 1,
        relativeLuminance: 76.23534723774098,
      },
      {
        hex: '#cbba9e',
        count: 2,
        relativeLuminance: 76.24260368383055,
      },
      {
        hex: '#cdbb89',
        count: 1,
        relativeLuminance: 76.26887995393572,
      },
      {
        hex: '#c7bba3',
        count: 2,
        relativeLuminance: 76.26960046257364,
      },
      {
        hex: '#bbbeab',
        count: 1,
        relativeLuminance: 76.27258013343221,
      },
      {
        hex: '#c6bba7',
        count: 1,
        relativeLuminance: 76.27530167689193,
      },
      {
        hex: '#d1b993',
        count: 1,
        relativeLuminance: 76.28958745522215,
      },
      {
        hex: '#c7bba5',
        count: 3,
        relativeLuminance: 76.31374514929878,
      },
      {
        hex: '#c2bda0',
        count: 1,
        relativeLuminance: 76.3157093407601,
      },
      {
        hex: '#ceba95',
        count: 1,
        relativeLuminance: 76.31995686695663,
      },
      {
        hex: '#c6bba9',
        count: 1,
        relativeLuminance: 76.32083488586629,
      },
      {
        hex: '#c1bda4',
        count: 1,
        relativeLuminance: 76.32205412186873,
      },
      {
        hex: '#c4bca5',
        count: 3,
        relativeLuminance: 76.32561279913263,
      },
      {
        hex: '#bcbdb5',
        count: 1,
        relativeLuminance: 76.32801749511292,
      },
      {
        hex: '#d1b995',
        count: 1,
        relativeLuminance: 76.32826490170056,
      },
      {
        hex: '#c9bb9e',
        count: 2,
        relativeLuminance: 76.33047291583824,
      },
      {
        hex: '#cdba9a',
        count: 1,
        relativeLuminance: 76.33246489926219,
      },
      {
        hex: '#cabb9a',
        count: 1,
        relativeLuminance: 76.33262195878021,
      },
      {
        hex: '#d0b99a',
        count: 1,
        relativeLuminance: 76.33910047496718,
      },
      {
        hex: '#cfb8aa',
        count: 1,
        relativeLuminance: 76.34382486296505,
      },
      {
        hex: '#c3bcaa',
        count: 4,
        relativeLuminance: 76.35734632336602,
      },
      {
        hex: '#ceba97',
        count: 1,
        relativeLuminance: 76.35927820013255,
      },
      {
        hex: '#d2b89f',
        count: 1,
        relativeLuminance: 76.36649482671433,
      },
      {
        hex: '#c4bca7',
        count: 6,
        relativeLuminance: 76.37039866333535,
      },
      {
        hex: '#c9bba0',
        count: 2,
        relativeLuminance: 76.37283654876725,
      },
      {
        hex: '#cabb9c',
        count: 1,
        relativeLuminance: 76.37361955509519,
      },
      {
        hex: '#c0bdaa',
        count: 2,
        relativeLuminance: 76.37754302428934,
      },
      {
        hex: '#c7bc9c',
        count: 1,
        relativeLuminance: 76.38053916167951,
      },
      {
        hex: '#b8bdc3',
        count: 1,
        relativeLuminance: 76.39079036046016,
      },
      {
        hex: '#c9bba1',
        count: 2,
        relativeLuminance: 76.39426104258766,
      },
      {
        hex: '#cbbb99',
        count: 1,
        relativeLuminance: 76.39773592086789,
      },
      {
        hex: '#c6bca1',
        count: 3,
        relativeLuminance: 76.40282418903556,
      },
      {
        hex: '#c3bcac',
        count: 1,
        relativeLuminance: 76.40385039970035,
      },
      {
        hex: '#ccbaa2',
        count: 2,
        relativeLuminance: 76.41403540342719,
      },
      {
        hex: '#cabb9e',
        count: 2,
        relativeLuminance: 76.41526063203784,
      },
      {
        hex: '#cbbb9a',
        count: 3,
        relativeLuminance: 76.41795647051502,
      },
      {
        hex: '#c7bc9e',
        count: 1,
        relativeLuminance: 76.42217400496286,
      },
      {
        hex: '#c0bdac',
        count: 2,
        relativeLuminance: 76.42402678361213,
      },
      {
        hex: '#b9beb8',
        count: 1,
        relativeLuminance: 76.43722609547281,
      },
      {
        hex: '#c6bca3',
        count: 3,
        relativeLuminance: 76.44615133693026,
      },
      {
        hex: '#cdbb93',
        count: 2,
        relativeLuminance: 76.45212809583558,
      },
      {
        hex: '#c3bda3',
        count: 1,
        relativeLuminance: 76.46142241870842,
      },
      {
        hex: '#bfbdb1',
        count: 1,
        relativeLuminance: 76.46400578587078,
      },
      {
        hex: '#c7bca0',
        count: 2,
        relativeLuminance: 76.46445367103028,
      },
      {
        hex: '#c2bda7',
        count: 1,
        relativeLuminance: 76.46927795458879,
      },
      {
        hex: '#c4bda0',
        count: 2,
        relativeLuminance: 76.47808407200495,
      },
      {
        hex: '#c9bc99',
        count: 1,
        relativeLuminance: 76.487108237055,
      },
      {
        hex: '#c4bda1',
        count: 3,
        relativeLuminance: 76.49945984487145,
      },
      {
        hex: '#c3bda5',
        count: 2,
        relativeLuminance: 76.5053842594277,
      },
      {
        hex: '#c9bc9a',
        count: 2,
        relativeLuminance: 76.50728973925197,
      },
      {
        hex: '#c2bda9',
        count: 1,
        relativeLuminance: 76.5146204709052,
      },
      {
        hex: '#ceba9f',
        count: 2,
        relativeLuminance: 76.52296448914814,
      },
      {
        hex: '#cfba9b',
        count: 1,
        relativeLuminance: 76.52718296257738,
      },
      {
        hex: '#d1b99f',
        count: 1,
        relativeLuminance: 76.53123611092293,
      },
      {
        hex: '#d2b99b',
        count: 1,
        relativeLuminance: 76.53711996413787,
      },
      {
        hex: '#c4bda3',
        count: 3,
        relativeLuminance: 76.54269657436875,
      },
      {
        hex: '#c9bc9c',
        count: 1,
        relativeLuminance: 76.5481327648513,
      },
      {
        hex: '#c3bda7',
        count: 2,
        relativeLuminance: 76.54999634830759,
      },
      {
        hex: '#bdbdbb',
        count: 1,
        relativeLuminance: 76.55883401650435,
      },
      {
        hex: '#cebaa1',
        count: 1,
        relativeLuminance: 76.56549374244044,
      },
      {
        hex: '#d1b9a1',
        count: 1,
        relativeLuminance: 76.57375776617917,
      },
      {
        hex: '#cbbba2',
        count: 2,
        relativeLuminance: 76.58550440524937,
      },
      {
        hex: '#c8bca2',
        count: 4,
        relativeLuminance: 76.59074942422724,
      },
      {
        hex: '#c7bca6',
        count: 1,
        relativeLuminance: 76.59517507325249,
      },
      {
        hex: '#c6bd9e',
        count: 3,
        relativeLuminance: 76.59994076954996,
      },
      {
        hex: '#c7bd9a',
        count: 1,
        relativeLuminance: 76.60043777137717,
      },
      {
        hex: '#cdbc8e',
        count: 1,
        relativeLuminance: 76.6175270961864,
      },
      {
        hex: '#b9bfb5',
        count: 1,
        relativeLuminance: 76.62572552271894,
      },
      {
        hex: '#c8bca4',
        count: 1,
        relativeLuminance: 76.63424442618795,
      },
      {
        hex: '#c7bca8',
        count: 3,
        relativeLuminance: 76.64004722217861,
      },
      {
        hex: '#c1bdb2',
        count: 2,
        relativeLuminance: 76.64689399951554,
      },
      {
        hex: '#ccbba1',
        count: 1,
        relativeLuminance: 76.64945499499204,
      },
      {
        hex: '#d0b9a9',
        count: 1,
        relativeLuminance: 76.66228328398502,
      },
      {
        hex: '#bebeb2',
        count: 1,
        relativeLuminance: 76.67199006295404,
      },
      {
        hex: '#cebb9a',
        count: 1,
        relativeLuminance: 76.67631534010724,
      },
      {
        hex: '#c8bca6',
        count: 2,
        relativeLuminance: 76.67838715411233,
      },
      {
        hex: '#c3bea1',
        count: 1,
        relativeLuminance: 76.68035524873599,
      },
      {
        hex: '#cfbb96',
        count: 1,
        relativeLuminance: 76.68388748957923,
      },
      {
        hex: '#c7bcaa',
        count: 1,
        relativeLuminance: 76.68557051553344,
      },
      {
        hex: '#c3bdad',
        count: 1,
        relativeLuminance: 76.68774563236083,
      },
      {
        hex: '#c5bda6',
        count: 3,
        relativeLuminance: 76.69032447409332,
      },
      {
        hex: '#d2ba96',
        count: 1,
        relativeLuminance: 76.692005020668,
      },
      {
        hex: '#cabc9f',
        count: 3,
        relativeLuminance: 76.69487638569578,
      },
      {
        hex: '#babebf',
        count: 1,
        relativeLuminance: 76.6957261961299,
      },
      {
        hex: '#cebb9b',
        count: 2,
        relativeLuminance: 76.6965826801266,
      },
      {
        hex: '#cbbc9b',
        count: 1,
        relativeLuminance: 76.69687948792311,
      },
      {
        hex: '#c4be9e',
        count: 2,
        relativeLuminance: 76.69796249617046,
      },
      {
        hex: '#c4bdaa',
        count: 1,
        relativeLuminance: 76.69913597318202,
      },
      {
        hex: '#d1ba9b',
        count: 1,
        relativeLuminance: 76.70303787260156,
      },
      {
        hex: '#c4bdab',
        count: 3,
        relativeLuminance: 76.72213541484636,
      },
      {
        hex: '#d3b9a0',
        count: 1,
        relativeLuminance: 76.73039186438616,
      },
      {
        hex: '#c5bda8',
        count: 1,
        relativeLuminance: 76.73510461180567,
      },
      {
        hex: '#cabca1',
        count: 1,
        relativeLuminance: 76.73724814387965,
      },
      {
        hex: '#cbbc9d',
        count: 2,
        relativeLuminance: 76.7378928851244,
      },
      {
        hex: '#c8bd9d',
        count: 1,
        relativeLuminance: 76.74491173019308,
      },
      {
        hex: '#babec1',
        count: 1,
        relativeLuminance: 76.74938572521853,
      },
      {
        hex: '#bfbfa7',
        count: 2,
        relativeLuminance: 76.75647342142169,
      },
      {
        hex: '#cabca2',
        count: 3,
        relativeLuminance: 76.75867532147191,
      },
      {
        hex: '#d0baa2',
        count: 1,
        relativeLuminance: 76.76152452182177,
      },
      {
        hex: '#cfbb9a',
        count: 1,
        relativeLuminance: 76.76321565880762,
      },
      {
        hex: '#c7bda2',
        count: 4,
        relativeLuminance: 76.76732778732266,
      },
      {
        hex: '#bdbeb9',
        count: 1,
        relativeLuminance: 76.76888155404794,
      },
      {
        hex: '#cbbc9f',
        count: 2,
        relativeLuminance: 76.77954613366794,
      },
      {
        hex: '#d0baa3',
        count: 1,
        relativeLuminance: 76.78311145920098,
      },
      {
        hex: '#c8bd9f',
        count: 2,
        relativeLuminance: 76.78655867866419,
      },
      {
        hex: '#ccbba9',
        count: 1,
        relativeLuminance: 76.82572420405978,
      },
      {
        hex: '#bbc0ac',
        count: 1,
        relativeLuminance: 76.82574662926487,
      },
      {
        hex: '#c4bea4',
        count: 2,
        relativeLuminance: 76.82597786119754,
      },
      {
        hex: '#d0baa5',
        count: 1,
        relativeLuminance: 76.826769202528,
      },
      {
        hex: '#c8bda1',
        count: 2,
        relativeLuminance: 76.82884680045468,
      },
      {
        hex: '#d5b8a8',
        count: 1,
        relativeLuminance: 76.83277458266,
      },
      {
        hex: '#c3bea8',
        count: 1,
        relativeLuminance: 76.83392168658943,
      },
      {
        hex: '#c3bf9c',
        count: 1,
        relativeLuminance: 76.8386539090544,
      },
      {
        hex: '#c5bea1',
        count: 1,
        relativeLuminance: 76.84253627926202,
      },
      {
        hex: '#cabd9a',
        count: 1,
        relativeLuminance: 76.85123078052972,
      },
      {
        hex: '#babfbb',
        count: 1,
        relativeLuminance: 76.85347592326426,
      },
      {
        hex: '#cbbd96',
        count: 1,
        relativeLuminance: 76.85658225135926,
      },
      {
        hex: '#d1bb96',
        count: 1,
        relativeLuminance: 76.85914993424092,
      },
      {
        hex: '#c5bea2',
        count: 1,
        relativeLuminance: 76.86391490218429,
      },
      {
        hex: '#cdbba7',
        count: 1,
        relativeLuminance: 76.86629264163919,
      },
      {
        hex: '#c4bea6',
        count: 2,
        relativeLuminance: 76.86993855198904,
      },
      {
        hex: '#ccbd94',
        count: 1,
        relativeLuminance: 76.90300455555754,
      },
      {
        hex: '#c5bea4',
        count: 3,
        relativeLuminance: 76.90715457213716,
      },
      {
        hex: '#cbbca5',
        count: 2,
        relativeLuminance: 76.90835881590723,
      },
      {
        hex: '#cabd9d',
        count: 1,
        relativeLuminance: 76.91228133988872,
      },
      {
        hex: '#c4bea8',
        count: 1,
        relativeLuminance: 76.91454576885766,
      },
      {
        hex: '#bebebc',
        count: 1,
        relativeLuminance: 76.9236297127519,
      },
      {
        hex: '#ccbca2',
        count: 1,
        relativeLuminance: 76.92817425916874,
      },
      {
        hex: '#d4ba99',
        count: 1,
        relativeLuminance: 76.92957437969632,
      },
      {
        hex: '#cbbd9a',
        count: 2,
        relativeLuminance: 76.93561600204949,
      },
      {
        hex: '#c8be9a',
        count: 1,
        relativeLuminance: 76.94439191041204,
      },
      {
        hex: '#ccbca3',
        count: 2,
        relativeLuminance: 76.94968386837189,
      },
      {
        hex: '#cbbca7',
        count: 1,
        relativeLuminance: 76.95258502516783,
      },
      {
        hex: '#c9bda3',
        count: 2,
        relativeLuminance: 76.95503763559803,
      },
      {
        hex: '#c7be9f',
        count: 1,
        relativeLuminance: 76.96418080093554,
      },
      {
        hex: '#cdbca0',
        count: 1,
        relativeLuminance: 76.97105076771103,
      },
      {
        hex: '#d5b9a3',
        count: 1,
        relativeLuminance: 76.97391638115232,
      },
      {
        hex: '#d0bba0',
        count: 1,
        relativeLuminance: 76.97404186647223,
      },
      {
        hex: '#c1beb5',
        count: 1,
        relativeLuminance: 76.98123639632031,
      },
      {
        hex: '#c9bda5',
        count: 4,
        relativeLuminance: 76.99853414608242,
      },
      {
        hex: '#c8bda9',
        count: 1,
        relativeLuminance: 77.00443731523356,
      },
      {
        hex: '#c7bea1',
        count: 3,
        relativeLuminance: 77.00630759117689,
      },
      {
        hex: '#c5bf9d',
        count: 1,
        relativeLuminance: 77.02074532572766,
      },
      {
        hex: '#d6ba95',
        count: 1,
        relativeLuminance: 77.03134959978517,
      },
      {
        hex: '#c9bda7',
        count: 1,
        relativeLuminance: 77.04267469072528,
      },
      {
        hex: '#c4bfa2',
        count: 1,
        relativeLuminance: 77.04464659164086,
      },
      {
        hex: '#c8bdab',
        count: 1,
        relativeLuminance: 77.0499505512024,
      },
      {
        hex: '#c4beae',
        count: 2,
        relativeLuminance: 77.05225795071821,
      },
      {
        hex: '#c6bea7',
        count: 1,
        relativeLuminance: 77.05468078790066,
      },
      {
        hex: '#d3bb97',
        count: 1,
        relativeLuminance: 77.05540105621267,
      },
      {
        hex: '#bebfb7',
        count: 2,
        relativeLuminance: 77.05765605931798,
      },
      {
        hex: '#cbbda0',
        count: 1,
        relativeLuminance: 77.05892804572483,
      },
      {
        hex: '#ccbd9c',
        count: 2,
        relativeLuminance: 77.0607868688913,
      },
      {
        hex: '#d2bb9c',
        count: 1,
        relativeLuminance: 77.06662887079627,
      },
      {
        hex: '#cabe98',
        count: 1,
        relativeLuminance: 77.07136255899698,
      },
      {
        hex: '#c6bea9',
        count: 1,
        relativeLuminance: 77.09945501470375,
      },
      {
        hex: '#cbbda2',
        count: 2,
        relativeLuminance: 77.10130760144781,
      },
      {
        hex: '#cfbc9e',
        count: 2,
        relativeLuminance: 77.10138114262756,
      },
      {
        hex: '#ccbd9e',
        count: 3,
        relativeLuminance: 77.1018156615369,
      },
      {
        hex: '#c2bfac',
        count: 1,
        relativeLuminance: 77.10680445796942,
      },
      {
        hex: '#c9be9e',
        count: 1,
        relativeLuminance: 77.10893253164866,
      },
      {
        hex: '#cbbda3',
        count: 1,
        relativeLuminance: 77.12273731311568,
      },
      {
        hex: '#d1bba3',
        count: 1,
        relativeLuminance: 77.12529034013362,
      },
      {
        hex: '#cdbd9b',
        count: 1,
        relativeLuminance: 77.12564112117592,
      },
      {
        hex: '#d0bc9b',
        count: 1,
        relativeLuminance: 77.12684597925984,
      },
      {
        hex: '#c8bea3',
        count: 5,
        relativeLuminance: 77.13147799316627,
      },
      {
        hex: '#c5beae',
        count: 1,
        relativeLuminance: 77.13304085182509,
      },
      {
        hex: '#cebca4',
        count: 2,
        relativeLuminance: 77.14225750339048,
      },
      {
        hex: '#cdbd9c',
        count: 1,
        relativeLuminance: 77.14588032801811,
      },
      {
        hex: '#c9bea0',
        count: 2,
        relativeLuminance: 77.15059121834275,
      },
      {
        hex: '#c2bfae',
        count: 1,
        relativeLuminance: 77.15325705483254,
      },
      {
        hex: '#c8bea5',
        count: 2,
        relativeLuminance: 77.17480996385498,
      },
      {
        hex: '#cebca6',
        count: 1,
        relativeLuminance: 77.18592035955999,
      },
      {
        hex: '#c5bfa5',
        count: 2,
        relativeLuminance: 77.19017897107722,
      },
      {
        hex: '#c9bea2',
        count: 1,
        relativeLuminance: 77.19288746618835,
      },
      {
        hex: '#c1bfb3',
        count: 1,
        relativeLuminance: 77.19329457430715,
      },
      {
        hex: '#c4bfa9',
        count: 1,
        relativeLuminance: 77.19821002610912,
      },
      {
        hex: '#c6bfa2',
        count: 1,
        relativeLuminance: 77.20663524616486,
      },
      {
        hex: '#d0bd93',
        count: 1,
        relativeLuminance: 77.22799210322864,
      },
      {
        hex: '#c6bfa3',
        count: 3,
        relativeLuminance: 77.22801656880375,
      },
      {
        hex: '#c5bfa7',
        count: 2,
        relativeLuminance: 77.23413828145316,
      },
      {
        hex: '#cbbe9c',
        count: 1,
        relativeLuminance: 77.2352042624415,
      },
      {
        hex: '#ccbf8a',
        count: 1,
        relativeLuminance: 77.24132644125763,
      },
      {
        hex: '#d0bca1',
        count: 2,
        relativeLuminance: 77.25065820511062,
      },
      {
        hex: '#d1bc9d',
        count: 1,
        relativeLuminance: 77.25456226717559,
      },
      {
        hex: '#d3bba1',
        count: 1,
        relativeLuminance: 77.25855292461065,
      },
      {
        hex: '#ccbf8b',
        count: 1,
        relativeLuminance: 77.25873964609444,
      },
      {
        hex: '#c4bfac',
        count: 1,
        relativeLuminance: 77.26643871190379,
      },
      {
        hex: '#c6bfa5',
        count: 2,
        relativeLuminance: 77.27125890694774,
      },
      {
        hex: '#ccbda6',
        count: 1,
        relativeLuminance: 77.27230706041672,
      },
      {
        hex: '#cbbe9e',
        count: 3,
        relativeLuminance: 77.2760797924158,
      },
      {
        hex: '#c5bfa9',
        count: 5,
        relativeLuminance: 77.27874043447417,
      },
      {
        hex: '#d8b9a5',
        count: 1,
        relativeLuminance: 77.28888894399067,
      },
      {
        hex: '#cebd9f',
        count: 2,
        relativeLuminance: 77.29291881589091,
      },
      {
        hex: '#d0bca3',
        count: 2,
        relativeLuminance: 77.29320161350147,
      },
      {
        hex: '#d5baa7',
        count: 1,
        relativeLuminance: 77.3130954264691,
      },
      {
        hex: '#cabea4',
        count: 3,
        relativeLuminance: 77.31897389148085,
      },
      {
        hex: '#c8bfa0',
        count: 2,
        relativeLuminance: 77.32806935014507,
      },
      {
        hex: '#c9bf9c',
        count: 1,
        relativeLuminance: 77.32829737255457,
      },
      {
        hex: '#cebda1',
        count: 1,
        relativeLuminance: 77.3347494428325,
      },
      {
        hex: '#c1c0ae',
        count: 1,
        relativeLuminance: 77.33624860494099,
      },
      {
        hex: '#c2c0ab',
        count: 1,
        relativeLuminance: 77.34589868110544,
      },
      {
        hex: '#cabea6',
        count: 4,
        relativeLuminance: 77.3624716527146,
      },
      {
        hex: '#c9beaa',
        count: 4,
        relativeLuminance: 77.36847400579984,
      },
      {
        hex: '#d3bc9a',
        count: 2,
        relativeLuminance: 77.36950003092048,
      },
      {
        hex: '#c8bfa2',
        count: 2,
        relativeLuminance: 77.37020499377019,
      },
      {
        hex: '#c4c0a5',
        count: 2,
        relativeLuminance: 77.37142856085524,
      },
      {
        hex: '#d4bc96',
        count: 1,
        relativeLuminance: 77.37969211048494,
      },
      {
        hex: '#d2bd92',
        count: 1,
        relativeLuminance: 77.38366377218311,
      },
      {
        hex: '#cfbe93',
        count: 1,
        relativeLuminance: 77.3996154401815,
      },
      {
        hex: '#d0bd9c',
        count: 1,
        relativeLuminance: 77.40348937743018,
      },
      {
        hex: '#cabea8',
        count: 2,
        relativeLuminance: 77.40660979443372,
      },
      {
        hex: '#c5c0a3',
        count: 2,
        relativeLuminance: 77.40858540703265,
      },
      {
        hex: '#ccbea1',
        count: 5,
        relativeLuminance: 77.42262988985074,
      },
      {
        hex: '#cdbe9d',
        count: 1,
        relativeLuminance: 77.42434606969287,
      },
      {
        hex: '#c6bfac',
        count: 2,
        relativeLuminance: 77.42765984177927,
      },
      {
        hex: '#cebe9a',
        count: 1,
        relativeLuminance: 77.44904766552035,
      },
      {
        hex: '#c6bfad',
        count: 1,
        relativeLuminance: 77.45064635962098,
      },
      {
        hex: '#c7bfaa',
        count: 3,
        relativeLuminance: 77.46345192634979,
      },
      {
        hex: '#ccbea3',
        count: 1,
        relativeLuminance: 77.46501692175002,
      },
      {
        hex: '#cdbe9f',
        count: 1,
        relativeLuminance: 77.4653898598169,
      },
      {
        hex: '#bec0bd',
        count: 1,
        relativeLuminance: 77.47211718315262,
      },
      {
        hex: '#cabf9f',
        count: 3,
        relativeLuminance: 77.47260356132787,
      },
      {
        hex: '#cebe9c',
        count: 1,
        relativeLuminance: 77.4890721546203,
      },
      {
        hex: '#c9bfa4',
        count: 3,
        relativeLuminance: 77.49527682791489,
      },
      {
        hex: '#cdbea1',
        count: 4,
        relativeLuminance: 77.50706635285331,
      },
      {
        hex: '#c7bfac',
        count: 1,
        relativeLuminance: 77.50886260038294,
      },
      {
        hex: '#cebe9d',
        count: 4,
        relativeLuminance: 77.50932036708139,
      },
      {
        hex: '#cabfa1',
        count: 4,
        relativeLuminance: 77.51427362618642,
      },
      {
        hex: '#c4c1a0',
        count: 1,
        relativeLuminance: 77.52759148924686,
      },
      {
        hex: '#c9bfa6',
        count: 4,
        relativeLuminance: 77.53861081137218,
      },
      {
        hex: '#d0be96',
        count: 1,
        relativeLuminance: 77.54249510237187,
      },
      {
        hex: '#cfbda7',
        count: 1,
        relativeLuminance: 77.5495074208194,
      },
      {
        hex: '#c6c0a6',
        count: 4,
        relativeLuminance: 77.55402778647031,
      },
      {
        hex: '#cabfa3',
        count: 6,
        relativeLuminance: 77.55657767678031,
      },
      {
        hex: '#c2c0b4',
        count: 1,
        relativeLuminance: 77.55740489679874,
      },
      {
        hex: '#c7c0a3',
        count: 4,
        relativeLuminance: 77.5703829942092,
      },
      {
        hex: '#ccbf9c',
        count: 1,
        relativeLuminance: 77.57842934820621,
      },
      {
        hex: '#d1be94',
        count: 2,
        relativeLuminance: 77.59094452530174,
      },
      {
        hex: '#c7c0a4',
        count: 3,
        relativeLuminance: 77.5917668691882,
      },
      {
        hex: '#cfbda9',
        count: 1,
        relativeLuminance: 77.59380957338404,
      },
      {
        hex: '#c6c0a8',
        count: 2,
        relativeLuminance: 77.59798549083624,
      },
      {
        hex: '#cdbf9a',
        count: 1,
        relativeLuminance: 77.62270902796274,
      },
      {
        hex: '#c5c0ad',
        count: 3,
        relativeLuminance: 77.63035835082019,
      },
      {
        hex: '#bfc1b6',
        count: 1,
        relativeLuminance: 77.63449640679221,
      },
      {
        hex: '#c7c0a6',
        count: 4,
        relativeLuminance: 77.63501160876456,
      },
      {
        hex: '#cdbea7',
        count: 1,
        relativeLuminance: 77.63590550209543,
      },
      {
        hex: '#ccbf9f',
        count: 2,
        relativeLuminance: 77.63953009677846,
      },
      {
        hex: '#cebea4',
        count: 1,
        relativeLuminance: 77.65547931861869,
      },
      {
        hex: '#d6bba8',
        count: 1,
        relativeLuminance: 77.67616700340876,
      },
      {
        hex: '#cbbfa5',
        count: 3,
        relativeLuminance: 77.68256019606501,
      },
      {
        hex: '#c9c0a1',
        count: 3,
        relativeLuminance: 77.69160841469709,
      },
      {
        hex: '#cac09d',
        count: 1,
        relativeLuminance: 77.6917042302425,
      },
      {
        hex: '#cfbea2',
        count: 2,
        relativeLuminance: 77.69810082898245,
      },
      {
        hex: '#cbbfa7',
        count: 2,
        relativeLuminance: 77.72605895556713,
      },
      {
        hex: '#c9c0a3',
        count: 2,
        relativeLuminance: 77.73375258285208,
      },
      {
        hex: '#c7c19f',
        count: 1,
        relativeLuminance: 77.74803453920299,
      },
      {
        hex: '#d0bf94',
        count: 1,
        relativeLuminance: 77.76246126953558,
      },
      {
        hex: '#d1be9d',
        count: 3,
        relativeLuminance: 77.76655880537807,
      },
      {
        hex: '#cbbfa9',
        count: 1,
        relativeLuminance: 77.77019447944767,
      },
      {
        hex: '#c6c1a4',
        count: 2,
        relativeLuminance: 77.77217371132244,
      },
      {
        hex: '#c6c0b0',
        count: 2,
        relativeLuminance: 77.7802193571506,
      },
      {
        hex: '#c8c0a9',
        count: 3,
        relativeLuminance: 77.78233551103057,
      },
      {
        hex: '#c0c1b9',
        count: 1,
        relativeLuminance: 77.78586817267372,
      },
      {
        hex: '#cdbfa2',
        count: 1,
        relativeLuminance: 77.78598389174398,
      },
      {
        hex: '#cebf9e',
        count: 1,
        relativeLuminance: 77.7875590385998,
      },
      {
        hex: '#c7c1a1',
        count: 2,
        relativeLuminance: 77.78946027331168,
      },
      {
        hex: '#c7c0ad',
        count: 1,
        relativeLuminance: 77.7913923507531,
      },
      {
        hex: '#c8c0ab',
        count: 3,
        relativeLuminance: 77.82709737956785,
      },
      {
        hex: '#cdbfa4',
        count: 3,
        relativeLuminance: 77.82837808466995,
      },
      {
        hex: '#cebfa0',
        count: 1,
        relativeLuminance: 77.82861743555182,
      },
      {
        hex: '#cec093',
        count: 1,
        relativeLuminance: 77.83227501632729,
      },
      {
        hex: '#c4c1ae',
        count: 1,
        relativeLuminance: 77.83464700946291,
      },
      {
        hex: '#cbc0a0',
        count: 1,
        relativeLuminance: 77.83592679420313,
      },
      {
        hex: '#c3c1b2',
        count: 4,
        relativeLuminance: 77.84924020483854,
      },
      {
        hex: '#cdbfa5',
        count: 4,
        relativeLuminance: 77.84981242720683,
      },
      {
        hex: '#cac0a5',
        count: 4,
        relativeLuminance: 77.85872629207842,
      },
      {
        hex: '#d7bca1',
        count: 1,
        relativeLuminance: 77.8671586378203,
      },
      {
        hex: '#cebfa2',
        count: 2,
        relativeLuminance: 77.87030501521147,
      },
      {
        hex: '#cfbf9e',
        count: 2,
        relativeLuminance: 77.8724150682743,
      },
      {
        hex: '#c8c0ad',
        count: 2,
        relativeLuminance: 77.87249814040474,
      },
      {
        hex: '#cbc0a2',
        count: 1,
        relativeLuminance: 77.87760788392423,
      },
      {
        hex: '#c6c29d',
        count: 1,
        relativeLuminance: 77.88896664522174,
      },
      {
        hex: '#c3c1b4',
        count: 1,
        relativeLuminance: 77.89702681740224,
      },
      {
        hex: '#cac0a7',
        count: 6,
        relativeLuminance: 77.90206202973698,
      },
      {
        hex: '#cbbfaf',
        count: 1,
        relativeLuminance: 77.90643301936268,
      },
      {
        hex: '#d0bea8',
        count: 1,
        relativeLuminance: 77.91274729445648,
      },
      {
        hex: '#cfbeac',
        count: 1,
        relativeLuminance: 77.9168209609058,
      },
      {
        hex: '#c7c1a7',
        count: 1,
        relativeLuminance: 77.91752632429926,
      },
      {
        hex: '#cbc0a4',
        count: 1,
        relativeLuminance: 77.91991942018106,
      },
      {
        hex: '#ccbfac',
        count: 1,
        relativeLuminance: 77.9207513437013,
      },
      {
        hex: '#c6c1ab',
        count: 1,
        relativeLuminance: 77.925728726228,
      },
      {
        hex: '#c8c1a4',
        count: 2,
        relativeLuminance: 77.93378152401979,
      },
      {
        hex: '#c8c1a5',
        count: 4,
        relativeLuminance: 77.95516780685968,
      },
      {
        hex: '#c6c1ad',
        count: 2,
        relativeLuminance: 77.97103425545473,
      },
      {
        hex: '#cfc097',
        count: 1,
        relativeLuminance: 77.99236568005534,
      },
      {
        hex: '#c8c1a7',
        count: 5,
        relativeLuminance: 77.99841468649213,
      },
      {
        hex: '#cebfa8',
        count: 2,
        relativeLuminance: 77.99915612045434,
      },
      {
        hex: '#cdc0a0',
        count: 1,
        relativeLuminance: 78.00263420738604,
      },
      {
        hex: '#c7c1ab',
        count: 4,
        relativeLuminance: 78.00607366882244,
      },
      {
        hex: '#cac1a0',
        count: 2,
        relativeLuminance: 78.01327588609861,
      },
      {
        hex: '#d3bea1',
        count: 1,
        relativeLuminance: 78.02178378761413,
      },
      {
        hex: '#cfbfa6',
        count: 2,
        relativeLuminance: 78.04012630913363,
      },
      {
        hex: '#c9c0b1',
        count: 1,
        relativeLuminance: 78.04655676256938,
      },
      {
        hex: '#d0bfa3',
        count: 2,
        relativeLuminance: 78.06110686816545,
      },
      {
        hex: '#c3c2b0',
        count: 1,
        relativeLuminance: 78.06370638172297,
      },
      {
        hex: '#ccc0a8',
        count: 1,
        relativeLuminance: 78.08929804345726,
      },
      {
        hex: '#cac1a4',
        count: 2,
        relativeLuminance: 78.09695234179057,
      },
      {
        hex: '#c6c2a7',
        count: 1,
        relativeLuminance: 78.09844439165845,
      },
      {
        hex: '#c7c2a5',
        count: 1,
        relativeLuminance: 78.13541350008883,
      },
      {
        hex: '#c9c1aa',
        count: 1,
        relativeLuminance: 78.14563795666865,
      },
      {
        hex: '#cec0a3',
        count: 1,
        relativeLuminance: 78.14899200511228,
      },
      {
        hex: '#d2bf9f',
        count: 1,
        relativeLuminance: 78.14958817865077,
      },
      {
        hex: '#c8c2a2',
        count: 1,
        relativeLuminance: 78.15259539173924,
      },
      {
        hex: '#d5be9f',
        count: 1,
        relativeLuminance: 78.1553424538326,
      },
      {
        hex: '#d0c09c',
        count: 1,
        relativeLuminance: 78.17483630589021,
      },
      {
        hex: '#c8c1af',
        count: 1,
        relativeLuminance: 78.17774799843967,
      },
      {
        hex: '#c9c1ac',
        count: 1,
        relativeLuminance: 78.19039338600912,
      },
      {
        hex: '#d2bfa1',
        count: 1,
        relativeLuminance: 78.19066153094742,
      },
      {
        hex: '#cec0a5',
        count: 3,
        relativeLuminance: 78.19139304999226,
      },
      {
        hex: '#ccc1a1',
        count: 1,
        relativeLuminance: 78.19890418523187,
      },
      {
        hex: '#c4c2b3',
        count: 3,
        relativeLuminance: 78.21268276892954,
      },
      {
        hex: '#cec0a6',
        count: 2,
        relativeLuminance: 78.21282949506273,
      },
      {
        hex: '#d3bf9e',
        count: 1,
        relativeLuminance: 78.21567255988653,
      },
      {
        hex: '#cbc1a6',
        count: 3,
        relativeLuminance: 78.22182836563526,
      },
      {
        hex: '#cfc0a3',
        count: 1,
        relativeLuminance: 78.23319864282358,
      },
      {
        hex: '#c9c1ae',
        count: 2,
        relativeLuminance: 78.2357840991978,
      },
      {
        hex: '#ccc1a3',
        count: 1,
        relativeLuminance: 78.2405959531241,
      },
      {
        hex: '#c6c3a2',
        count: 1,
        relativeLuminance: 78.25405284709909,
      },
      {
        hex: '#cbc1a8',
        count: 1,
        relativeLuminance: 78.26516560416607,
      },
      {
        hex: '#ccc1a5',
        count: 1,
        relativeLuminance: 78.2829146640441,
      },
      {
        hex: '#cdc0ad',
        count: 1,
        relativeLuminance: 78.28386851851691,
      },
      {
        hex: '#cec19e',
        count: 1,
        relativeLuminance: 78.30424554459316,
      },
      {
        hex: '#c9c2a6',
        count: 1,
        relativeLuminance: 78.3182213647136,
      },
      {
        hex: '#c8c2aa',
        count: 2,
        relativeLuminance: 78.32463041518353,
      },
      {
        hex: '#d2c09c',
        count: 1,
        relativeLuminance: 78.34567777533172,
      },
      {
        hex: '#d7bdac',
        count: 1,
        relativeLuminance: 78.3571394867065,
      },
      {
        hex: '#c9c2a8',
        count: 1,
        relativeLuminance: 78.3614701282886,
      },
      {
        hex: '#cec1a1',
        count: 3,
        relativeLuminance: 78.36539405899711,
      },
      {
        hex: '#cbc2a1',
        count: 1,
        relativeLuminance: 78.37611052590808,
      },
      {
        hex: '#d0c0a6',
        count: 2,
        relativeLuminance: 78.38139812101154,
      },
      {
        hex: '#d1c0a2',
        count: 1,
        relativeLuminance: 78.38190859547426,
      },
      {
        hex: '#cdc1a7',
        count: 3,
        relativeLuminance: 78.40869086566349,
      },
      {
        hex: '#ccc1ab',
        count: 2,
        relativeLuminance: 78.41364503389856,
      },
      {
        hex: '#ccc29f',
        count: 1,
        relativeLuminance: 78.41748182860243,
      },
      {
        hex: '#c7c3a6',
        count: 1,
        relativeLuminance: 78.41827300314561,
      },
      {
        hex: '#cdc1a9',
        count: 1,
        relativeLuminance: 78.45219088484065,
      },
      {
        hex: '#ccc1ad',
        count: 1,
        relativeLuminance: 78.45848384138068,
      },
      {
        hex: '#d2c195',
        count: 1,
        relativeLuminance: 78.46843391277841,
      },
      {
        hex: '#d5c095',
        count: 1,
        relativeLuminance: 78.47067339199025,
      },
      {
        hex: '#c8c3a5',
        count: 1,
        relativeLuminance: 78.47699966953262,
      },
      {
        hex: '#d3c09f',
        count: 1,
        relativeLuminance: 78.49167197719578,
      },
      {
        hex: '#cac2ab',
        count: 1,
        relativeLuminance: 78.50859311441911,
      },
      {
        hex: '#cfc1a4',
        count: 1,
        relativeLuminance: 78.51165616398723,
      },
      {
        hex: '#d0c1a0',
        count: 2,
        relativeLuminance: 78.51295397680842,
      },
      {
        hex: '#c9c3a3',
        count: 1,
        relativeLuminance: 78.51538505434345,
      },
      {
        hex: '#d1c19d',
        count: 1,
        relativeLuminance: 78.53721834948522,
      },
      {
        hex: '#d4c09d',
        count: 1,
        relativeLuminance: 78.53784967547057,
      },
      {
        hex: '#c9c2b0',
        count: 1,
        relativeLuminance: 78.54077537706483,
      },
      {
        hex: '#cfc1a6',
        count: 2,
        relativeLuminance: 78.55406375769294,
      },
      {
        hex: '#d1c19f',
        count: 1,
        relativeLuminance: 78.57730212375252,
      },
      {
        hex: '#d4c09f',
        count: 2,
        relativeLuminance: 78.57793291471917,
      },
      {
        hex: '#ccc2a7',
        count: 1,
        relativeLuminance: 78.58458500833348,
      },
      {
        hex: '#cac2af',
        count: 1,
        relativeLuminance: 78.59872247093708,
      },
      {
        hex: '#cdc2a4',
        count: 1,
        relativeLuminance: 78.60323977548502,
      },
      {
        hex: '#c6c3b2',
        count: 1,
        relativeLuminance: 78.60747636048127,
      },
      {
        hex: '#ccc2a9',
        count: 3,
        relativeLuminance: 78.62792349952913,
      },
      {
        hex: '#c9c3a9',
        count: 2,
        relativeLuminance: 78.64348053084422,
      },
      {
        hex: '#c2c4b6',
        count: 1,
        relativeLuminance: 78.65178317738997,
      },
      {
        hex: '#c8c3ad',
        count: 1,
        relativeLuminance: 78.65185023849361,
      },
      {
        hex: '#d2c291',
        count: 1,
        relativeLuminance: 78.65350022561066,
      },
      {
        hex: '#cac3a6',
        count: 2,
        relativeLuminance: 78.65953882892836,
      },
      {
        hex: '#cfc29f',
        count: 2,
        relativeLuminance: 78.66664005115346,
      },
      {
        hex: '#cac3a7',
        count: 1,
        relativeLuminance: 78.6809295053231,
      },
      {
        hex: '#cfc2a0',
        count: 1,
        relativeLuminance: 78.68687579950131,
      },
      {
        hex: '#c9c3ab',
        count: 1,
        relativeLuminance: 78.68743211089149,
      },
      {
        hex: '#c8c3af',
        count: 1,
        relativeLuminance: 78.69713643086686,
      },
      {
        hex: '#d5c0a1',
        count: 1,
        relativeLuminance: 78.70519925247932,
      },
      {
        hex: '#cac3a9',
        count: 1,
        relativeLuminance: 78.72417990187301,
      },
      {
        hex: '#cfc2a2',
        count: 4,
        relativeLuminance: 78.72781156699955,
      },
      {
        hex: '#c9c3ad',
        count: 1,
        relativeLuminance: 78.73201217498777,
      },
      {
        hex: '#dcbda9',
        count: 1,
        relativeLuminance: 78.73813292445348,
      },
      {
        hex: '#cec2a8',
        count: 1,
        relativeLuminance: 78.77123913752149,
      },
      {
        hex: '#ccc3a4',
        count: 3,
        relativeLuminance: 78.78014837099842,
      },
      {
        hex: '#c8c4a7',
        count: 1,
        relativeLuminance: 78.78091135958454,
      },
      {
        hex: '#cec2aa',
        count: 1,
        relativeLuminance: 78.8147394281092,
      },
      {
        hex: '#d7c09e',
        count: 1,
        relativeLuminance: 78.81896693271982,
      },
      {
        hex: '#ccc3a6',
        count: 3,
        relativeLuminance: 78.82231620168714,
      },
      {
        hex: '#c8c4a9',
        count: 1,
        relativeLuminance: 78.8240706191707,
      },
      {
        hex: '#d3c296',
        count: 1,
        relativeLuminance: 78.83024842632415,
      },
      {
        hex: '#d6c196',
        count: 1,
        relativeLuminance: 78.83233878329638,
      },
      {
        hex: '#cac4a2',
        count: 1,
        relativeLuminance: 78.83637028792123,
      },
      {
        hex: '#c9c4a6',
        count: 2,
        relativeLuminance: 78.83954582993874,
      },
      {
        hex: '#dcbea2',
        count: 1,
        relativeLuminance: 78.83992402335825,
      },
      {
        hex: '#cfc39b',
        count: 1,
        relativeLuminance: 78.84627450896824,
      },
      {
        hex: '#c9c4a7',
        count: 2,
        relativeLuminance: 78.86085541104808,
      },
      {
        hex: '#cdc2b0',
        count: 1,
        relativeLuminance: 78.86658794240506,
      },
      {
        hex: '#c8c4ab',
        count: 1,
        relativeLuminance: 78.86785506512443,
      },
      {
        hex: '#c9c3b3',
        count: 1,
        relativeLuminance: 78.86953391960964,
      },
      {
        hex: '#d0c2a5',
        count: 1,
        relativeLuminance: 78.87397828300583,
      },
      {
        hex: '#d1c2a1',
        count: 1,
        relativeLuminance: 78.8751397464634,
      },
      {
        hex: '#cac4a4',
        count: 1,
        relativeLuminance: 78.87783119978856,
      },
      {
        hex: '#d7c0a1',
        count: 1,
        relativeLuminance: 78.8794539987146,
      },
      {
        hex: '#cac3b0',
        count: 1,
        relativeLuminance: 78.88049639397308,
      },
      {
        hex: '#d0c399',
        count: 1,
        relativeLuminance: 78.89127914503872,
      },
      {
        hex: '#ccc49d',
        count: 2,
        relativeLuminance: 78.8979399176348,
      },
      {
        hex: '#d1c396',
        count: 2,
        relativeLuminance: 78.91872592805386,
      },
      {
        hex: '#cdc3a8',
        count: 3,
        relativeLuminance: 78.94699815998639,
      },
      {
        hex: '#ccc4a0',
        count: 1,
        relativeLuminance: 78.95784012354433,
      },
      {
        hex: '#cbc3b0',
        count: 1,
        relativeLuminance: 78.96131522917176,
      },
      {
        hex: '#cac4aa',
        count: 1,
        relativeLuminance: 79.00594013021981,
      },
      {
        hex: '#c9c4ae',
        count: 1,
        relativeLuminance: 79.01439201481351,
      },
      {
        hex: '#cbc4a7',
        count: 1,
        relativeLuminance: 79.02190150366702,
      },
      {
        hex: '#d1c39c',
        count: 1,
        relativeLuminance: 79.03310069083223,
      },
      {
        hex: '#cbc4a8',
        count: 6,
        relativeLuminance: 79.04329417123735,
      },
      {
        hex: '#cac4ac',
        count: 4,
        relativeLuminance: 79.04988924862607,
      },
      {
        hex: '#d4c29e',
        count: 1,
        relativeLuminance: 79.06962374551922,
      },
      {
        hex: '#c7c5ac',
        count: 1,
        relativeLuminance: 79.07188742922207,
      },
      {
        hex: '#cbc4aa',
        count: 3,
        relativeLuminance: 79.08654595482663,
      },
      {
        hex: '#cac4ae',
        count: 2,
        relativeLuminance: 79.09446335246504,
      },
      {
        hex: '#cdc4a3',
        count: 1,
        relativeLuminance: 79.1007519121681,
      },
      {
        hex: '#c7c5ae',
        count: 1,
        relativeLuminance: 79.11644092240672,
      },
      {
        hex: '#cec4a0',
        count: 1,
        relativeLuminance: 79.121686214915,
      },
      {
        hex: '#cfc3a9',
        count: 1,
        relativeLuminance: 79.13344527235259,
      },
      {
        hex: '#cdc4a5',
        count: 1,
        relativeLuminance: 79.14230906803874,
      },
      {
        hex: '#cac5a5',
        count: 1,
        relativeLuminance: 79.15958968367147,
      },
      {
        hex: '#cfc3ab',
        count: 1,
        relativeLuminance: 79.17694560188357,
      },
      {
        hex: '#cdc4a7',
        count: 1,
        relativeLuminance: 79.18448416924112,
      },
      {
        hex: '#cbc5a3',
        count: 2,
        relativeLuminance: 79.19846380045448,
      },
      {
        hex: '#d8c1a1',
        count: 1,
        relativeLuminance: 79.22068159035454,
      },
      {
        hex: '#cfc3ad',
        count: 1,
        relativeLuminance: 79.2210685960843,
      },
      {
        hex: '#cac5a8',
        count: 1,
        relativeLuminance: 79.22306142298208,
      },
      {
        hex: '#ccc4ad',
        count: 1,
        relativeLuminance: 79.23346941171813,
      },
      {
        hex: '#d2c3a2',
        count: 2,
        relativeLuminance: 79.23698688546446,
      },
      {
        hex: '#d2c495',
        count: 1,
        relativeLuminance: 79.2432582247411,
      },
      {
        hex: '#cec59a',
        count: 1,
        relativeLuminance: 79.26389670882088,
      },
      {
        hex: '#c8c5b2',
        count: 1,
        relativeLuminance: 79.28614046197727,
      },
      {
        hex: '#d3c3a1',
        count: 1,
        relativeLuminance: 79.30108839449217,
      },
      {
        hex: '#ccc4b1',
        count: 2,
        relativeLuminance: 79.323564327132,
      },
      {
        hex: '#c8c5b4',
        count: 1,
        relativeLuminance: 79.33249776298389,
      },
      {
        hex: '#cbc69e',
        count: 1,
        relativeLuminance: 79.3589091087375,
      },
      {
        hex: '#cbc5ab',
        count: 1,
        relativeLuminance: 79.36805731395306,
      },
      {
        hex: '#ccc5a8',
        count: 3,
        relativeLuminance: 79.38392276004114,
      },
      {
        hex: '#d5c39d',
        count: 1,
        relativeLuminance: 79.39172341110742,
      },
      {
        hex: '#ccc5a9',
        count: 3,
        relativeLuminance: 79.405317285274,
      },
      {
        hex: '#cbc5ad',
        count: 1,
        relativeLuminance: 79.41200376797558,
      },
      {
        hex: '#d2c49f',
        count: 1,
        relativeLuminance: 79.43403261577205,
      },
      {
        hex: '#ccc5ab',
        count: 1,
        relativeLuminance: 79.44857021488846,
      },
      {
        hex: '#d2c4a1',
        count: 2,
        relativeLuminance: 79.47400849199782,
      },
      {
        hex: '#cdc69c',
        count: 1,
        relativeLuminance: 79.48137138900225,
      },
      {
        hex: '#d0c4aa',
        count: 1,
        relativeLuminance: 79.49531117456462,
      },
      {
        hex: '#cbc6a6',
        count: 1,
        relativeLuminance: 79.52144573740951,
      },
      {
        hex: '#d0c4ac',
        count: 1,
        relativeLuminance: 79.53881131529997,
      },
      {
        hex: '#cec5a8',
        count: 1,
        relativeLuminance: 79.54631204041839,
      },
      {
        hex: '#d5c499',
        count: 1,
        relativeLuminance: 79.57162618545095,
      },
      {
        hex: '#cdc5ae',
        count: 1,
        relativeLuminance: 79.59539442391413,
      },
      {
        hex: '#d6c496',
        count: 1,
        relativeLuminance: 79.60129951002176,
      },
      {
        hex: '#d1c59f',
        count: 1,
        relativeLuminance: 79.60870647004725,
      },
      {
        hex: '#cfc69b',
        count: 1,
        relativeLuminance: 79.62527000413911,
      },
      {
        hex: '#d2c4a9',
        count: 2,
        relativeLuminance: 79.6400294436391,
      },
      {
        hex: '#cdc5b0',
        count: 1,
        relativeLuminance: 79.64012245355102,
      },
      {
        hex: '#d0c5a7',
        count: 1,
        relativeLuminance: 79.68912488647746,
      },
      {
        hex: '#ccc6ac',
        count: 1,
        relativeLuminance: 79.72983399758971,
      },
      {
        hex: '#cbc7a4',
        count: 1,
        relativeLuminance: 79.74096068307936,
      },
      {
        hex: '#cdc6a9',
        count: 2,
        relativeLuminance: 79.7456044988304,
      },
      {
        hex: '#cdc6aa',
        count: 1,
        relativeLuminance: 79.76700075080664,
      },
      {
        hex: '#ccc6ae',
        count: 1,
        relativeLuminance: 79.77377758875247,
      },
      {
        hex: '#d3c5a0',
        count: 1,
        relativeLuminance: 79.79528508231486,
      },
      {
        hex: '#cdc6ac',
        count: 3,
        relativeLuminance: 79.81025459024535,
      },
      {
        hex: '#d2c5a5',
        count: 1,
        relativeLuminance: 79.81302889841956,
      },
      {
        hex: '#d0c6a2',
        count: 1,
        relativeLuminance: 79.84472516962639,
      },
      {
        hex: '#d1c5ab',
        count: 1,
        relativeLuminance: 79.85683872946677,
      },
      {
        hex: '#c8c7b5',
        count: 1,
        relativeLuminance: 79.87626579199501,
      },
      {
        hex: '#d1c5ad',
        count: 1,
        relativeLuminance: 79.90033845829151,
      },
      {
        hex: '#cbc7ac',
        count: 1,
        relativeLuminance: 79.90993861419963,
      },
      {
        hex: '#ccc7a9',
        count: 2,
        relativeLuminance: 79.92513687275867,
      },
      {
        hex: '#c7c7bb',
        count: 1,
        relativeLuminance: 79.94098251751889,
      },
      {
        hex: '#ccc7aa',
        count: 1,
        relativeLuminance: 79.94645313641662,
      },
      {
        hex: '#cdc6b3',
        count: 1,
        relativeLuminance: 79.96650161110603,
      },
      {
        hex: '#d3c69c',
        count: 1,
        relativeLuminance: 79.97518686119744,
      },
      {
        hex: '#c9c8ac',
        count: 1,
        relativeLuminance: 80.01316779501296,
      },
      {
        hex: '#d3c5ab',
        count: 2,
        relativeLuminance: 80.02278707225659,
      },
      {
        hex: '#d0c7a0',
        count: 1,
        relativeLuminance: 80.06404565224436,
      },
      {
        hex: '#d0c6ad',
        count: 1,
        relativeLuminance: 80.07553689213316,
      },
      {
        hex: '#cdc7ad',
        count: 1,
        relativeLuminance: 80.09127207728437,
      },
      {
        hex: '#d3c6a6',
        count: 1,
        relativeLuminance: 80.17409580798247,
      },
      {
        hex: '#d1c7a3',
        count: 1,
        relativeLuminance: 80.2057419665624,
      },
      {
        hex: '#d1c6b0',
        count: 1,
        relativeLuminance: 80.22348267264925,
      },
      {
        hex: '#d0c7aa',
        count: 1,
        relativeLuminance: 80.26895501461753,
      },
      {
        hex: '#cdc8ab',
        count: 2,
        relativeLuminance: 80.30764261070182,
      },
      {
        hex: '#ccc8af',
        count: 1,
        relativeLuminance: 80.31499310713788,
      },
      {
        hex: '#cfc7b0',
        count: 1,
        relativeLuminance: 80.31822770984289,
      },
      {
        hex: '#cec8a8',
        count: 1,
        relativeLuminance: 80.32421870278976,
      },
      {
        hex: '#cfc999',
        count: 1,
        relativeLuminance: 80.36966204565316,
      },
      {
        hex: '#d0c8a3',
        count: 1,
        relativeLuminance: 80.38321757165323,
      },
      {
        hex: '#d1c89f',
        count: 1,
        relativeLuminance: 80.38561037964904,
      },
      {
        hex: '#cfc8ab',
        count: 1,
        relativeLuminance: 80.46795693151624,
      },
      {
        hex: '#cec9a3',
        count: 1,
        relativeLuminance: 80.48205435437292,
      },
      {
        hex: '#cdc9ae',
        count: 1,
        relativeLuminance: 80.63215863503325,
      },
      {
        hex: '#d5c89e',
        count: 1,
        relativeLuminance: 80.69613402834293,
      },
      {
        hex: '#d3c8a8',
        count: 1,
        relativeLuminance: 80.73022249484647,
      },
      {
        hex: '#ccc9b6',
        count: 1,
        relativeLuminance: 80.73215003425302,
      },
      {
        hex: '#d0c9ac',
        count: 1,
        relativeLuminance: 80.82863133253541,
      },
      {
        hex: '#cfc9b1',
        count: 1,
        relativeLuminance: 80.85707376717873,
      },
      {
        hex: '#cec9b6',
        count: 1,
        relativeLuminance: 80.89005524240136,
      },
      {
        hex: '#d0c9af',
        count: 1,
        relativeLuminance: 80.89328720260825,
      },
      {
        hex: '#d2c9a8',
        count: 1,
        relativeLuminance: 80.90644719893957,
      },
      {
        hex: '#cfcb9c',
        count: 1,
        relativeLuminance: 80.94825432320563,
      },
      {
        hex: '#d4c8b0',
        count: 1,
        relativeLuminance: 80.9829070817705,
      },
      {
        hex: '#d2c9ac',
        count: 1,
        relativeLuminance: 80.99025997945623,
      },
      {
        hex: '#d1cb97',
        count: 1,
        relativeLuminance: 81.0168358532341,
      },
      {
        hex: '#d0cab2',
        count: 1,
        relativeLuminance: 81.21750360629694,
      },
      {
        hex: '#d4caa7',
        count: 1,
        relativeLuminance: 81.30705471612701,
      },
      {
        hex: '#d3caad',
        count: 1,
        relativeLuminance: 81.35041527028332,
      },
      {
        hex: '#d0cbae',
        count: 1,
        relativeLuminance: 81.38920774585034,
      },
      {
        hex: '#b9cfdc',
        count: 1,
        relativeLuminance: 81.89644539282604,
      },
      {
        hex: '#d1cdb0',
        count: 1,
        relativeLuminance: 82.02943771570533,
      },
      {
        hex: '#d4cdb0',
        count: 1,
        relativeLuminance: 82.26802589938578,
      },
    ],
    closestHex: {
      hex: '#beb9a5',
      proximity: 0.004816250673513878,
    },
    averageLum: 75.05730053755593,
    pixelCount: 2220,
  },
  {
    bucket: '44',
    colors: [
      {
        hex: '#3d6684',
        count: 1,
        relativeLuminance: 41.47052911267978,
      },
      {
        hex: '#53656f',
        count: 1,
        relativeLuminance: 41.67971070931214,
      },
      {
        hex: '#3e6785',
        count: 1,
        relativeLuminance: 41.873025362259895,
      },
      {
        hex: '#476879',
        count: 1,
        relativeLuminance: 42.186082282788895,
      },
      {
        hex: '#3f6886',
        count: 1,
        relativeLuminance: 42.27496185204375,
      },
      {
        hex: '#486978',
        count: 1,
        relativeLuminance: 42.516511223910136,
      },
      {
        hex: '#476887',
        count: 1,
        relativeLuminance: 42.74740790425738,
      },
      {
        hex: '#566874',
        count: 1,
        relativeLuminance: 42.973462965221074,
      },
      {
        hex: '#4d6c6e',
        count: 1,
        relativeLuminance: 43.40220668450268,
      },
      {
        hex: '#456c7d',
        count: 1,
        relativeLuminance: 43.46452463589185,
      },
      {
        hex: '#476b83',
        count: 1,
        relativeLuminance: 43.49787056207931,
      },
      {
        hex: '#4d6a88',
        count: 1,
        relativeLuminance: 43.7463189255277,
      },
      {
        hex: '#4e6d6f',
        count: 1,
        relativeLuminance: 43.806390041296574,
      },
      {
        hex: '#5f6973',
        count: 1,
        relativeLuminance: 43.90684574187533,
      },
      {
        hex: '#476b8d',
        count: 1,
        relativeLuminance: 43.91296194562954,
      },
      {
        hex: '#4d6b85',
        count: 1,
        relativeLuminance: 43.92535997610562,
      },
      {
        hex: '#4c6b88',
        count: 1,
        relativeLuminance: 43.987361994562164,
      },
      {
        hex: '#5d6a73',
        count: 1,
        relativeLuminance: 44.0502869183823,
      },
      {
        hex: '#496c88',
        count: 1,
        relativeLuminance: 44.11678115393606,
      },
      {
        hex: '#406d8c',
        count: 1,
        relativeLuminance: 44.11901488523481,
      },
      {
        hex: '#446c8f',
        count: 1,
        relativeLuminance: 44.14278838721043,
      },
      {
        hex: '#4e6b89',
        count: 1,
        relativeLuminance: 44.14853622256955,
      },
      {
        hex: '#476e7d',
        count: 1,
        relativeLuminance: 44.19292488517768,
      },
      {
        hex: '#5a6b75',
        count: 1,
        relativeLuminance: 44.19476519805382,
      },
      {
        hex: '#4b6c8b',
        count: 1,
        relativeLuminance: 44.35467138867844,
      },
      {
        hex: '#4d6c89',
        count: 1,
        relativeLuminance: 44.38891413454272,
      },
      {
        hex: '#596d6b',
        count: 1,
        relativeLuminance: 44.408332334124985,
      },
      {
        hex: '#62697c',
        count: 1,
        relativeLuminance: 44.45448563369972,
      },
      {
        hex: '#4d6c8b',
        count: 1,
        relativeLuminance: 44.47146157778818,
      },
      {
        hex: '#4b6d88',
        count: 1,
        relativeLuminance: 44.53360758849842,
      },
      {
        hex: '#456d91',
        count: 1,
        relativeLuminance: 44.58484215267623,
      },
      {
        hex: '#636b6d',
        count: 1,
        relativeLuminance: 44.62074689288226,
      },
      {
        hex: '#516c8a',
        count: 1,
        relativeLuminance: 44.6734644890848,
      },
      {
        hex: '#4a6d8d',
        count: 1,
        relativeLuminance: 44.68304434566181,
      },
      {
        hex: '#426d97',
        count: 1,
        relativeLuminance: 44.702371111254955,
      },
      {
        hex: '#4f6d87',
        count: 1,
        relativeLuminance: 44.729071981690346,
      },
      {
        hex: '#4e6d8a',
        count: 1,
        relativeLuminance: 44.78987925289318,
      },
      {
        hex: '#5f6c75',
        count: 1,
        relativeLuminance: 44.86078141383446,
      },
      {
        hex: '#4e6d8c',
        count: 1,
        relativeLuminance: 44.87209369260906,
      },
      {
        hex: '#4f6e83',
        count: 1,
        relativeLuminance: 44.875448787717865,
      },
      {
        hex: '#4e6e87',
        count: 1,
        relativeLuminance: 44.970789525527145,
      },
      {
        hex: '#4b6e8c',
        count: 1,
        relativeLuminance: 44.99923670831839,
      },
      {
        hex: '#526d8a',
        count: 1,
        relativeLuminance: 45.034074898234586,
      },
      {
        hex: '#606c78',
        count: 1,
        relativeLuminance: 45.036717049272134,
      },
      {
        hex: '#4b6f87',
        count: 1,
        relativeLuminance: 45.100917603098225,
      },
      {
        hex: '#5a6d7e',
        count: 1,
        relativeLuminance: 45.10550460145892,
      },
      {
        hex: '#506e88',
        count: 1,
        relativeLuminance: 45.13003595762054,
      },
      {
        hex: '#486f8c',
        count: 1,
        relativeLuminance: 45.1371895973718,
      },
      {
        hex: '#446f91',
        count: 1,
        relativeLuminance: 45.14012680848864,
      },
      {
        hex: '#4b6f89',
        count: 1,
        relativeLuminance: 45.18007686004425,
      },
      {
        hex: '#4f6e8b',
        count: 1,
        relativeLuminance: 45.19026163752667,
      },
      {
        hex: '#576e7e',
        count: 1,
        relativeLuminance: 45.19894558946763,
      },
      {
        hex: '#417188',
        count: 1,
        relativeLuminance: 45.23669445606417,
      },
      {
        hex: '#4d6e8f',
        count: 1,
        relativeLuminance: 45.23831202442641,
      },
      {
        hex: '#506f83',
        count: 3,
        relativeLuminance: 45.238637467120476,
      },
      {
        hex: '#426f96',
        count: 1,
        relativeLuminance: 45.260955508586214,
      },
      {
        hex: '#546e85',
        count: 1,
        relativeLuminance: 45.26233582722432,
      },
      {
        hex: '#506f84',
        count: 2,
        relativeLuminance: 45.27642016677459,
      },
      {
        hex: '#437188',
        count: 1,
        relativeLuminance: 45.332937930924324,
      },
      {
        hex: '#456f95',
        count: 1,
        relativeLuminance: 45.36458742961544,
      },
      {
        hex: '#4d6f8b',
        count: 2,
        relativeLuminance: 45.373878776244204,
      },
      {
        hex: '#606e71',
        count: 1,
        relativeLuminance: 45.40172947988097,
      },
      {
        hex: '#4d7084',
        count: 1,
        relativeLuminance: 45.4033206718742,
      },
      {
        hex: '#4c7086',
        count: 1,
        relativeLuminance: 45.42264299361362,
      },
      {
        hex: '#5b6e7d',
        count: 1,
        relativeLuminance: 45.43726436856422,
      },
      {
        hex: '#516f87',
        count: 1,
        relativeLuminance: 45.45215259351664,
      },
      {
        hex: '#506e90',
        count: 1,
        relativeLuminance: 45.45693539717179,
      },
      {
        hex: '#536f84',
        count: 1,
        relativeLuminance: 45.46089046564227,
      },
      {
        hex: '#626e6e',
        count: 1,
        relativeLuminance: 45.461576606145385,
      },
      {
        hex: '#5c6f73',
        count: 1,
        relativeLuminance: 45.47214568534855,
      },
      {
        hex: '#477187',
        count: 1,
        relativeLuminance: 45.49571211936666,
      },
      {
        hex: '#536f85',
        count: 1,
        relativeLuminance: 45.49876178499721,
      },
      {
        hex: '#4b6f91',
        count: 1,
        relativeLuminance: 45.50940022361619,
      },
      {
        hex: '#546f84',
        count: 1,
        relativeLuminance: 45.52393467230956,
      },
      {
        hex: '#506f8b',
        count: 2,
        relativeLuminance: 45.549755525194165,
      },
      {
        hex: '#516f8b',
        count: 1,
        relativeLuminance: 45.60993026008591,
      },
      {
        hex: '#566f83',
        count: 1,
        relativeLuminance: 45.61502429362136,
      },
      {
        hex: '#447095',
        count: 1,
        relativeLuminance: 45.61667502762951,
      },
      {
        hex: '#517084',
        count: 1,
        relativeLuminance: 45.639147141699304,
      },
      {
        hex: '#517085',
        count: 1,
        relativeLuminance: 45.67679993520845,
      },
      {
        hex: '#427382',
        count: 1,
        relativeLuminance: 45.677206909963395,
      },
      {
        hex: '#5a6e86',
        count: 1,
        relativeLuminance: 45.69816225297134,
      },
      {
        hex: '#5a6e87',
        count: 1,
        relativeLuminance: 45.73646276978251,
      },
      {
        hex: '#4b7188',
        count: 1,
        relativeLuminance: 45.748601892780584,
      },
      {
        hex: '#427384',
        count: 1,
        relativeLuminance: 45.75130034825278,
      },
      {
        hex: '#526f8d',
        count: 1,
        relativeLuminance: 45.751495868793754,
      },
      {
        hex: '#49718b',
        count: 1,
        relativeLuminance: 45.75831403419688,
      },
      {
        hex: '#56707f',
        count: 1,
        relativeLuminance: 45.76960488733933,
      },
      {
        hex: '#507089',
        count: 1,
        relativeLuminance: 45.77080020882612,
      },
      {
        hex: '#4e708c',
        count: 2,
        relativeLuminance: 45.77289293587878,
      },
      {
        hex: '#3d7199',
        count: 1,
        relativeLuminance: 45.773942982068256,
      },
      {
        hex: '#487094',
        count: 1,
        relativeLuminance: 45.77655346808709,
      },
      {
        hex: '#507182',
        count: 1,
        relativeLuminance: 45.808244590586284,
      },
      {
        hex: '#4d7187',
        count: 1,
        relativeLuminance: 45.821685349876624,
      },
      {
        hex: '#5e7070',
        count: 1,
        relativeLuminance: 45.82246367361834,
      },
      {
        hex: '#4c7090',
        count: 1,
        relativeLuminance: 45.82325407273703,
      },
      {
        hex: '#546f8c',
        count: 1,
        relativeLuminance: 45.83508050636601,
      },
      {
        hex: '#557083',
        count: 1,
        relativeLuminance: 45.85029404789237,
      },
      {
        hex: '#547085',
        count: 1,
        relativeLuminance: 45.86155981136115,
      },
      {
        hex: '#546f8d',
        count: 1,
        relativeLuminance: 45.87538417626931,
      },
      {
        hex: '#4e7187',
        count: 1,
        relativeLuminance: 45.87870171991686,
      },
      {
        hex: '#6c6b7d',
        count: 1,
        relativeLuminance: 45.885465647143604,
      },
      {
        hex: '#487288',
        count: 1,
        relativeLuminance: 45.89322854083119,
      },
      {
        hex: '#616e7e',
        count: 1,
        relativeLuminance: 45.906383166125785,
      },
      {
        hex: '#4c718b',
        count: 1,
        relativeLuminance: 45.92162348016572,
      },
      {
        hex: '#52708a',
        count: 1,
        relativeLuminance: 45.93020240985171,
      },
      {
        hex: '#59707e',
        count: 1,
        relativeLuminance: 45.93208636250564,
      },
      {
        hex: '#467193',
        count: 1,
        relativeLuminance: 45.932606773977355,
      },
      {
        hex: '#4d7282',
        count: 1,
        relativeLuminance: 45.939638061440654,
      },
      {
        hex: '#51708c',
        count: 2,
        relativeLuminance: 45.94913962567543,
      },
      {
        hex: '#4f708f',
        count: 4,
        relativeLuminance: 45.952738519676075,
      },
      {
        hex: '#547088',
        count: 1,
        relativeLuminance: 45.97571631980396,
      },
      {
        hex: '#4d718b',
        count: 1,
        relativeLuminance: 45.977589565212064,
      },
      {
        hex: '#46728d',
        count: 1,
        relativeLuminance: 45.98800520033475,
      },
      {
        hex: '#51708d',
        count: 4,
        relativeLuminance: 45.989295164277046,
      },
      {
        hex: '#417293',
        count: 1,
        relativeLuminance: 45.995076461536755,
      },
      {
        hex: '#52708c',
        count: 3,
        relativeLuminance: 46.00942288825022,
      },
      {
        hex: '#616e81',
        count: 1,
        relativeLuminance: 46.012937933820965,
      },
      {
        hex: '#4f7091',
        count: 1,
        relativeLuminance: 46.03554135543854,
      },
      {
        hex: '#437482',
        count: 1,
        relativeLuminance: 46.03667756976872,
      },
      {
        hex: '#4d7285',
        count: 1,
        relativeLuminance: 46.05030654842896,
      },
      {
        hex: '#4e7093',
        count: 1,
        relativeLuminance: 46.062146194522434,
      },
      {
        hex: '#4c7287',
        count: 1,
        relativeLuminance: 46.06994015697987,
      },
      {
        hex: '#51708f',
        count: 1,
        relativeLuminance: 46.07054076774814,
      },
      {
        hex: '#527186',
        count: 1,
        relativeLuminance: 46.07659266662442,
      },
      {
        hex: '#4a7192',
        count: 1,
        relativeLuminance: 46.09832322060341,
      },
      {
        hex: '#4e718d',
        count: 2,
        relativeLuminance: 46.11399748431527,
      },
      {
        hex: '#4a728b',
        count: 1,
        relativeLuminance: 46.11603424873332,
      },
      {
        hex: '#45738a',
        count: 1,
        relativeLuminance: 46.125608316966705,
      },
      {
        hex: '#4f718c',
        count: 2,
        relativeLuminance: 46.13142375980962,
      },
      {
        hex: '#5a6f8a',
        count: 1,
        relativeLuminance: 46.14698362099371,
      },
      {
        hex: '#53708e',
        count: 1,
        relativeLuminance: 46.15078034194729,
      },
      {
        hex: '#55708b',
        count: 2,
        relativeLuminance: 46.15533427067281,
      },
      {
        hex: '#5e6f83',
        count: 1,
        relativeLuminance: 46.160101528261066,
      },
      {
        hex: '#51718a',
        count: 2,
        relativeLuminance: 46.16993947280368,
      },
      {
        hex: '#4f718d',
        count: 2,
        relativeLuminance: 46.17134425047072,
      },
      {
        hex: '#4e718f',
        count: 2,
        relativeLuminance: 46.194917828382884,
      },
      {
        hex: '#627073',
        count: 1,
        relativeLuminance: 46.20794881618978,
      },
      {
        hex: '#6d6c7c',
        count: 1,
        relativeLuminance: 46.219716777665084,
      },
      {
        hex: '#4d7191',
        count: 2,
        relativeLuminance: 46.22079008363553,
      },
      {
        hex: '#55708d',
        count: 1,
        relativeLuminance: 46.23470254988216,
      },
      {
        hex: '#547376',
        count: 1,
        relativeLuminance: 46.25023840280384,
      },
      {
        hex: '#537189',
        count: 1,
        relativeLuminance: 46.25172344178192,
      },
      {
        hex: '#557186',
        count: 1,
        relativeLuminance: 46.26163385057758,
      },
      {
        hex: '#497290',
        count: 1,
        relativeLuminance: 46.26422647212464,
      },
      {
        hex: '#606f82',
        count: 1,
        relativeLuminance: 46.267809102547254,
      },
      {
        hex: '#4f7288',
        count: 1,
        relativeLuminance: 46.27731445467783,
      },
      {
        hex: '#4b7195',
        count: 1,
        relativeLuminance: 46.27942150592126,
      },
      {
        hex: '#507096',
        count: 1,
        relativeLuminance: 46.30595193763238,
      },
      {
        hex: '#626f7f',
        count: 1,
        relativeLuminance: 46.30867600147582,
      },
      {
        hex: '#547378',
        count: 1,
        relativeLuminance: 46.314700731346164,
      },
      {
        hex: '#567186',
        count: 1,
        relativeLuminance: 46.32483851625172,
      },
      {
        hex: '#4b728f',
        count: 1,
        relativeLuminance: 46.329840664150325,
      },
      {
        hex: '#4e7383',
        count: 1,
        relativeLuminance: 46.3381549560808,
      },
      {
        hex: '#5f6f86',
        count: 3,
        relativeLuminance: 46.342362953333115,
      },
      {
        hex: '#4a7389',
        count: 1,
        relativeLuminance: 46.34296640675254,
      },
      {
        hex: '#427393',
        count: 1,
        relativeLuminance: 46.34677614936788,
      },
      {
        hex: '#52718d',
        count: 1,
        relativeLuminance: 46.34795132273358,
      },
      {
        hex: '#507190',
        count: 1,
        relativeLuminance: 46.35084795387651,
      },
      {
        hex: '#52718e',
        count: 1,
        relativeLuminance: 46.38795468855825,
      },
      {
        hex: '#5a7181',
        count: 1,
        relativeLuminance: 46.403732538012314,
      },
      {
        hex: '#53718d',
        count: 1,
        relativeLuminance: 46.40834017078285,
      },
      {
        hex: '#4b7291',
        count: 1,
        relativeLuminance: 46.411646567990246,
      },
      {
        hex: '#467390',
        count: 1,
        relativeLuminance: 46.414796317682914,
      },
      {
        hex: '#527287',
        count: 1,
        relativeLuminance: 46.41554457200143,
      },
      {
        hex: '#4d728f',
        count: 1,
        relativeLuminance: 46.439365676938465,
      },
      {
        hex: '#4f7194',
        count: 2,
        relativeLuminance: 46.45945663547928,
      },
      {
        hex: '#4d7388',
        count: 1,
        relativeLuminance: 46.4677032638163,
      },
      {
        hex: '#467392',
        count: 1,
        relativeLuminance: 46.49710284648741,
      },
      {
        hex: '#50728d',
        count: 3,
        relativeLuminance: 46.52946496753249,
      },
      {
        hex: '#54718f',
        count: 1,
        relativeLuminance: 46.549491268340674,
      },
      {
        hex: '#487298',
        count: 2,
        relativeLuminance: 46.55095534582873,
      },
      {
        hex: '#56718c',
        count: 1,
        relativeLuminance: 46.554671086964866,
      },
      {
        hex: '#4f7290',
        count: 2,
        relativeLuminance: 46.59237126907697,
      },
      {
        hex: '#537382',
        count: 1,
        relativeLuminance: 46.59458174398746,
      },
      {
        hex: '#507387',
        count: 1,
        relativeLuminance: 46.59994273180044,
      },
      {
        hex: '#46748e',
        count: 1,
        relativeLuminance: 46.63929385268213,
      },
      {
        hex: '#666f80',
        count: 1,
        relativeLuminance: 46.64765316952529,
      },
      {
        hex: '#557477',
        count: 1,
        relativeLuminance: 46.650058281283165,
      },
      {
        hex: '#54728a',
        count: 1,
        relativeLuminance: 46.65063734416007,
      },
      {
        hex: '#646f85',
        count: 1,
        relativeLuminance: 46.67347626141265,
      },
      {
        hex: '#4c7296',
        count: 1,
        relativeLuminance: 46.67543163212021,
      },
      {
        hex: '#427684',
        count: 1,
        relativeLuminance: 46.685926845161184,
      },
      {
        hex: '#42739b',
        count: 1,
        relativeLuminance: 46.69283178919904,
      },
      {
        hex: '#4f738b',
        count: 1,
        relativeLuminance: 46.69486537299429,
      },
      {
        hex: '#567288',
        count: 2,
        relativeLuminance: 46.69860104904045,
      },
      {
        hex: '#4e7294',
        count: 2,
        relativeLuminance: 46.70099973621226,
      },
      {
        hex: '#59718b',
        count: 1,
        relativeLuminance: 46.708588320120676,
      },
      {
        hex: '#696f7b',
        count: 1,
        relativeLuminance: 46.713900545888855,
      },
      {
        hex: '#4e738d',
        count: 1,
        relativeLuminance: 46.71662455887606,
      },
      {
        hex: '#47729d',
        count: 1,
        relativeLuminance: 46.7222929175706,
      },
      {
        hex: '#54728c',
        count: 1,
        relativeLuminance: 46.72804971830216,
      },
      {
        hex: '#4b748a',
        count: 1,
        relativeLuminance: 46.73957942286229,
      },
      {
        hex: '#567381',
        count: 1,
        relativeLuminance: 46.74389374548342,
      },
      {
        hex: '#53728e',
        count: 2,
        relativeLuminance: 46.746194802057225,
      },
      {
        hex: '#517291',
        count: 3,
        relativeLuminance: 46.74840219348735,
      },
      {
        hex: '#4f738d',
        count: 1,
        relativeLuminance: 46.77287604153797,
      },
      {
        hex: '#3e749a',
        count: 1,
        relativeLuminance: 46.774446871877046,
      },
      {
        hex: '#56728a',
        count: 1,
        relativeLuminance: 46.77448636391866,
      },
      {
        hex: '#587475',
        count: 1,
        relativeLuminance: 46.77686883073436,
      },
      {
        hex: '#437495',
        count: 1,
        relativeLuminance: 46.78235597557371,
      },
      {
        hex: '#53728f',
        count: 3,
        relativeLuminance: 46.78604824314594,
      },
      {
        hex: '#5c7280',
        count: 1,
        relativeLuminance: 46.80142602613878,
      },
      {
        hex: '#5b7282',
        count: 1,
        relativeLuminance: 46.804101695304404,
      },
      {
        hex: '#4a7585',
        count: 1,
        relativeLuminance: 46.80594943196262,
      },
      {
        hex: '#54728e',
        count: 3,
        relativeLuminance: 46.80668637504621,
      },
      {
        hex: '#4c7392',
        count: 1,
        relativeLuminance: 46.80780828804211,
      },
      {
        hex: '#537388',
        count: 1,
        relativeLuminance: 46.81407396294646,
      },
      {
        hex: '#607181',
        count: 1,
        relativeLuminance: 46.81933397095577,
      },
      {
        hex: '#427497',
        count: 1,
        relativeLuminance: 46.82113822790999,
      },
      {
        hex: '#517293',
        count: 1,
        relativeLuminance: 46.83055446065351,
      },
      {
        hex: '#4e7390',
        count: 1,
        relativeLuminance: 46.83614666708531,
      },
      {
        hex: '#5e727d',
        count: 1,
        relativeLuminance: 46.8364024115096,
      },
      {
        hex: '#547387',
        count: 1,
        relativeLuminance: 46.83716089271673,
      },
      {
        hex: '#4f7487',
        count: 1,
        relativeLuminance: 46.84606946350128,
      },
      {
        hex: '#51738c',
        count: 1,
        relativeLuminance: 46.84861316762003,
      },
      {
        hex: '#507295',
        count: 2,
        relativeLuminance: 46.85622510770067,
      },
      {
        hex: '#587289',
        count: 1,
        relativeLuminance: 46.8634017648168,
      },
      {
        hex: '#3d749d',
        count: 1,
        relativeLuminance: 46.8656741874698,
      },
      {
        hex: '#537291',
        count: 1,
        relativeLuminance: 46.8666719376932,
      },
      {
        hex: '#63717c',
        count: 1,
        relativeLuminance: 46.86690668245814,
      },
      {
        hex: '#567385',
        count: 2,
        relativeLuminance: 46.886932563032374,
      },
      {
        hex: '#53738a',
        count: 1,
        relativeLuminance: 46.88968103290591,
      },
      {
        hex: '#607183',
        count: 1,
        relativeLuminance: 46.89007448043177,
      },
      {
        hex: '#597288',
        count: 1,
        relativeLuminance: 46.89047371535538,
      },
      {
        hex: '#4c7394',
        count: 2,
        relativeLuminance: 46.890522838025674,
      },
      {
        hex: '#5f7185',
        count: 1,
        relativeLuminance: 46.8912074249251,
      },
      {
        hex: '#5e7376',
        count: 1,
        relativeLuminance: 46.907713225178135,
      },
      {
        hex: '#50738f',
        count: 1,
        relativeLuminance: 46.908967889063085,
      },
      {
        hex: '#4c748d',
        count: 2,
        relativeLuminance: 46.90930737538886,
      },
      {
        hex: '#407594',
        count: 1,
        relativeLuminance: 46.909724378335255,
      },
      {
        hex: '#657082',
        count: 1,
        relativeLuminance: 46.93083325498313,
      },
      {
        hex: '#58728b',
        count: 1,
        relativeLuminance: 46.93959029232027,
      },
      {
        hex: '#57728d',
        count: 1,
        relativeLuminance: 46.953426808864,
      },
      {
        hex: '#47758d',
        count: 1,
        relativeLuminance: 46.95514428602198,
      },
      {
        hex: '#607185',
        count: 1,
        relativeLuminance: 46.96203060899119,
      },
      {
        hex: '#53738c',
        count: 1,
        relativeLuminance: 46.966507113164674,
      },
      {
        hex: '#51738f',
        count: 1,
        relativeLuminance: 46.96657400947428,
      },
      {
        hex: '#517488',
        count: 1,
        relativeLuminance: 46.99768395296148,
      },
      {
        hex: '#537485',
        count: 1,
        relativeLuminance: 47.00496061057274,
      },
      {
        hex: '#557292',
        count: 1,
        relativeLuminance: 47.02855458576945,
      },
      {
        hex: '#47758f',
        count: 1,
        relativeLuminance: 47.03392076637221,
      },
      {
        hex: '#407597',
        count: 1,
        relativeLuminance: 47.03600428766315,
      },
      {
        hex: '#487686',
        count: 2,
        relativeLuminance: 47.04763082560297,
      },
      {
        hex: '#587386',
        count: 1,
        relativeLuminance: 47.04971237629876,
      },
      {
        hex: '#4c7589',
        count: 1,
        relativeLuminance: 47.059941740389476,
      },
      {
        hex: '#577388',
        count: 1,
        relativeLuminance: 47.06001497414949,
      },
      {
        hex: '#627184',
        count: 1,
        relativeLuminance: 47.069944461566145,
      },
      {
        hex: '#577290',
        count: 1,
        relativeLuminance: 47.072053967421766,
      },
      {
        hex: '#51748a',
        count: 1,
        relativeLuminance: 47.07285173132114,
      },
      {
        hex: '#43749c',
        count: 1,
        relativeLuminance: 47.08499085511335,
      },
      {
        hex: '#50748c',
        count: 2,
        relativeLuminance: 47.091960148240624,
      },
      {
        hex: '#4f7395',
        count: 3,
        relativeLuminance: 47.097126473550375,
      },
      {
        hex: '#577389',
        count: 1,
        relativeLuminance: 47.09737317510037,
      },
      {
        hex: '#647181',
        count: 1,
        relativeLuminance: 47.11136882154376,
      },
      {
        hex: '#4f748e',
        count: 1,
        relativeLuminance: 47.11330486961496,
      },
      {
        hex: '#5f7283',
        count: 1,
        relativeLuminance: 47.11353503194407,
      },
      {
        hex: '#4d7491',
        count: 1,
        relativeLuminance: 47.122258579634554,
      },
      {
        hex: '#587388',
        count: 1,
        relativeLuminance: 47.12337037811786,
      },
      {
        hex: '#55738d',
        count: 2,
        relativeLuminance: 47.126114588830845,
      },
      {
        hex: '#5c7289',
        count: 1,
        relativeLuminance: 47.12641713254733,
      },
      {
        hex: '#507585',
        count: 1,
        relativeLuminance: 47.133501647340736,
      },
      {
        hex: '#5c7381',
        count: 1,
        relativeLuminance: 47.1338276763723,
      },
      {
        hex: '#67717b',
        count: 1,
        relativeLuminance: 47.13659721778602,
      },
      {
        hex: '#6a6f85',
        count: 1,
        relativeLuminance: 47.14002431883319,
      },
      {
        hex: '#627186',
        count: 2,
        relativeLuminance: 47.14217754546802,
      },
      {
        hex: '#527392',
        count: 5,
        relativeLuminance: 47.14540505858519,
      },
      {
        hex: '#467593',
        count: 1,
        relativeLuminance: 47.1462220119764,
      },
      {
        hex: '#4f748f',
        count: 1,
        relativeLuminance: 47.152696463151706,
      },
      {
        hex: '#4b758d',
        count: 1,
        relativeLuminance: 47.15961715421041,
      },
      {
        hex: '#5d7380',
        count: 1,
        relativeLuminance: 47.16693818334287,
      },
      {
        hex: '#57738b',
        count: 1,
        relativeLuminance: 47.17299873494214,
      },
      {
        hex: '#497590',
        count: 1,
        relativeLuminance: 47.17414481031913,
      },
      {
        hex: '#6a707e',
        count: 1,
        relativeLuminance: 47.18223562715896,
      },
      {
        hex: '#547390',
        count: 2,
        relativeLuminance: 47.183579921367354,
      },
      {
        hex: '#657181',
        count: 1,
        relativeLuminance: 47.18622985629998,
      },
      {
        hex: '#4d7493',
        count: 2,
        relativeLuminance: 47.20344247060015,
      },
      {
        hex: '#55738f',
        count: 3,
        relativeLuminance: 47.20446572489377,
      },
      {
        hex: '#507587',
        count: 1,
        relativeLuminance: 47.20627619000012,
      },
      {
        hex: '#61718a',
        count: 1,
        relativeLuminance: 47.21838201958274,
      },
      {
        hex: '#43749f',
        count: 1,
        relativeLuminance: 47.21923817161354,
      },
      {
        hex: '#607472',
        count: 1,
        relativeLuminance: 47.22601539644092,
      },
      {
        hex: '#47749b',
        count: 1,
        relativeLuminance: 47.23180595627717,
      },
      {
        hex: '#4f7491',
        count: 1,
        relativeLuminance: 47.23238848364144,
      },
      {
        hex: '#4b7687',
        count: 1,
        relativeLuminance: 47.23838852509366,
      },
      {
        hex: '#5b7574',
        count: 1,
        relativeLuminance: 47.24578815178301,
      },
      {
        hex: '#517396',
        count: 1,
        relativeLuminance: 47.25245511562874,
      },
      {
        hex: '#4f758a',
        count: 1,
        relativeLuminance: 47.261577761410614,
      },
      {
        hex: '#706e83',
        count: 1,
        relativeLuminance: 47.281692300258,
      },
      {
        hex: '#487594',
        count: 1,
        relativeLuminance: 47.28574113614327,
      },
      {
        hex: '#4d7495',
        count: 1,
        relativeLuminance: 47.28583686981322,
      },
      {
        hex: '#54748b',
        count: 1,
        relativeLuminance: 47.287384443385314,
      },
      {
        hex: '#617284',
        count: 1,
        relativeLuminance: 47.290342657533046,
      },
      {
        hex: '#4d758e',
        count: 2,
        relativeLuminance: 47.30514204589742,
      },
      {
        hex: '#517490',
        count: 1,
        relativeLuminance: 47.305629189013466,
      },
      {
        hex: '#437693',
        count: 1,
        relativeLuminance: 47.3095410432227,
      },
      {
        hex: '#6e6f81',
        count: 1,
        relativeLuminance: 47.32526016721398,
      },
      {
        hex: '#4f758c',
        count: 2,
        relativeLuminance: 47.33750484318096,
      },
      {
        hex: '#417696',
        count: 1,
        relativeLuminance: 47.34320927876245,
      },
      {
        hex: '#567391',
        count: 1,
        relativeLuminance: 47.3452093945881,
      },
      {
        hex: '#58738e',
        count: 1,
        relativeLuminance: 47.35160593032801,
      },
      {
        hex: '#527490',
        count: 1,
        relativeLuminance: 47.363360205476305,
      },
      {
        hex: '#54748d',
        count: 2,
        relativeLuminance: 47.36394386877218,
      },
      {
        hex: '#4b7782',
        count: 1,
        relativeLuminance: 47.36721653920846,
      },
      {
        hex: '#5e7384',
        count: 1,
        relativeLuminance: 47.37483596478086,
      },
      {
        hex: '#597485',
        count: 1,
        relativeLuminance: 47.37611892771453,
      },
      {
        hex: '#687180',
        count: 1,
        relativeLuminance: 47.380962059248326,
      },
      {
        hex: '#517492',
        count: 2,
        relativeLuminance: 47.385639975687965,
      },
      {
        hex: '#437695',
        count: 1,
        relativeLuminance: 47.39166004560017,
      },
      {
        hex: '#527589',
        count: 1,
        relativeLuminance: 47.394865627454855,
      },
      {
        hex: '#657187',
        count: 1,
        relativeLuminance: 47.39961029270476,
      },
      {
        hex: '#667185',
        count: 1,
        relativeLuminance: 47.40254142736906,
      },
      {
        hex: '#547586',
        count: 1,
        relativeLuminance: 47.402719379808325,
      },
      {
        hex: '#607381',
        count: 1,
        relativeLuminance: 47.4086924589522,
      },
      {
        hex: '#507494',
        count: 1,
        relativeLuminance: 47.41015590781811,
      },
      {
        hex: '#51758b',
        count: 1,
        relativeLuminance: 47.41224702215757,
      },
      {
        hex: '#5a7485',
        count: 1,
        relativeLuminance: 47.4405798070974,
      },
      {
        hex: '#607382',
        count: 2,
        relativeLuminance: 47.443259607567256,
      },
      {
        hex: '#597487',
        count: 1,
        relativeLuminance: 47.44833829496781,
      },
      {
        hex: '#587489',
        count: 2,
        relativeLuminance: 47.45833139421802,
      },
      {
        hex: '#477692',
        count: 1,
        relativeLuminance: 47.45852577693571,
      },
      {
        hex: '#517494',
        count: 1,
        relativeLuminance: 47.46685622002373,
      },
      {
        hex: '#40769a',
        count: 1,
        relativeLuminance: 47.46907581754823,
      },
      {
        hex: '#52758b',
        count: 1,
        relativeLuminance: 47.46978433426551,
      },
      {
        hex: '#637285',
        count: 1,
        relativeLuminance: 47.470086017532445,
      },
      {
        hex: '#547588',
        count: 1,
        relativeLuminance: 47.47556086569951,
      },
      {
        hex: '#617381',
        count: 1,
        relativeLuminance: 47.47925750448324,
      },
      {
        hex: '#51758d',
        count: 1,
        relativeLuminance: 47.4885057870305,
      },
      {
        hex: '#58748a',
        count: 2,
        relativeLuminance: 47.495565863762586,
      },
      {
        hex: '#44759e',
        count: 1,
        relativeLuminance: 47.520950215056864,
      },
      {
        hex: '#597489',
        count: 1,
        relativeLuminance: 47.521758694339,
      },
      {
        hex: '#56748e',
        count: 1,
        relativeLuminance: 47.52361265460421,
      },
      {
        hex: '#4c7595',
        count: 3,
        relativeLuminance: 47.53237325234956,
      },
      {
        hex: '#5d7482',
        count: 1,
        relativeLuminance: 47.53319677637973,
      },
      {
        hex: '#477694',
        count: 1,
        relativeLuminance: 47.539555921991955,
      },
      {
        hex: '#557490',
        count: 1,
        relativeLuminance: 47.54099364628482,
      },
      {
        hex: '#537493',
        count: 1,
        relativeLuminance: 47.541860338684636,
      },
      {
        hex: '#507590',
        count: 1,
        relativeLuminance: 47.54869360273083,
      },
      {
        hex: '#567587',
        count: 1,
        relativeLuminance: 47.55978874342479,
      },
      {
        hex: '#58748c',
        count: 1,
        relativeLuminance: 47.57093537222092,
      },
      {
        hex: '#6a7181',
        count: 1,
        relativeLuminance: 47.57153525609137,
      },
      {
        hex: '#527686',
        count: 2,
        relativeLuminance: 47.58766342442682,
      },
      {
        hex: '#637380',
        count: 1,
        relativeLuminance: 47.58855604057003,
      },
      {
        hex: '#4c7787',
        count: 1,
        relativeLuminance: 47.59729404603348,
      },
      {
        hex: '#697184',
        count: 1,
        relativeLuminance: 47.59733831658558,
      },
      {
        hex: '#42769b',
        count: 1,
        relativeLuminance: 47.60019401823917,
      },
      {
        hex: '#5e7482',
        count: 1,
        relativeLuminance: 47.60083237145316,
      },
      {
        hex: '#567490',
        count: 1,
        relativeLuminance: 47.601682400798474,
      },
      {
        hex: '#627383',
        count: 2,
        relativeLuminance: 47.619683092872634,
      },
      {
        hex: '#517689',
        count: 1,
        relativeLuminance: 47.639612903103526,
      },
      {
        hex: '#6a7183',
        count: 1,
        relativeLuminance: 47.640614339976764,
      },
      {
        hex: '#53758e',
        count: 3,
        relativeLuminance: 47.64248208201477,
      },
      {
        hex: '#527497',
        count: 1,
        relativeLuminance: 47.6481501428145,
      },
      {
        hex: '#6b7181',
        count: 1,
        relativeLuminance: 47.650779353371405,
      },
      {
        hex: '#50768b',
        count: 1,
        relativeLuminance: 47.65769669541588,
      },
      {
        hex: '#5a748b',
        count: 1,
        relativeLuminance: 47.66039472446278,
      },
      {
        hex: '#557493',
        count: 1,
        relativeLuminance: 47.66057372836888,
      },
      {
        hex: '#61728e',
        count: 1,
        relativeLuminance: 47.66101966885972,
      },
      {
        hex: '#5d7486',
        count: 1,
        relativeLuminance: 47.67406094779755,
      },
      {
        hex: '#49759c',
        count: 1,
        relativeLuminance: 47.67428975343502,
      },
      {
        hex: '#42769d',
        count: 1,
        relativeLuminance: 47.687237646835726,
      },
      {
        hex: '#627385',
        count: 1,
        relativeLuminance: 47.69000099084707,
      },
      {
        hex: '#726f82',
        count: 1,
        relativeLuminance: 47.6982079033352,
      },
      {
        hex: '#5f738b',
        count: 2,
        relativeLuminance: 47.698786927867204,
      },
      {
        hex: '#447794',
        count: 1,
        relativeLuminance: 47.701697104958015,
      },
      {
        hex: '#527591',
        count: 1,
        relativeLuminance: 47.70174622130677,
      },
      {
        hex: '#49778e',
        count: 1,
        relativeLuminance: 47.704773874342315,
      },
      {
        hex: '#4d7598',
        count: 1,
        relativeLuminance: 47.71021623625928,
      },
      {
        hex: '#487697',
        count: 1,
        relativeLuminance: 47.712256012414464,
      },
      {
        hex: '#537590',
        count: 1,
        relativeLuminance: 47.720261001868685,
      },
      {
        hex: '#557685',
        count: 1,
        relativeLuminance: 47.7284878168944,
      },
      {
        hex: '#5a748d',
        count: 1,
        relativeLuminance: 47.736061194213406,
      },
      {
        hex: '#4e7690',
        count: 1,
        relativeLuminance: 47.73946220990165,
      },
      {
        hex: '#487698',
        count: 1,
        relativeLuminance: 47.75405611571219,
      },
      {
        hex: '#537591',
        count: 4,
        relativeLuminance: 47.759599059055816,
      },
      {
        hex: '#55758e',
        count: 2,
        relativeLuminance: 47.76082143000317,
      },
      {
        hex: '#627387',
        count: 1,
        relativeLuminance: 47.76151147491266,
      },
      {
        hex: '#527593',
        count: 2,
        relativeLuminance: 47.78146255695677,
      },
      {
        hex: '#497888',
        count: 1,
        relativeLuminance: 47.78655352593262,
      },
      {
        hex: '#53768a',
        count: 1,
        relativeLuminance: 47.79149180597198,
      },
      {
        hex: '#667288',
        count: 1,
        relativeLuminance: 47.79933735079515,
      },
      {
        hex: '#557687',
        count: 1,
        relativeLuminance: 47.799912098991015,
      },
      {
        hex: '#517595',
        count: 1,
        relativeLuminance: 47.805542031054884,
      },
      {
        hex: '#617482',
        count: 1,
        relativeLuminance: 47.80814789906358,
      },
      {
        hex: '#52768c',
        count: 2,
        relativeLuminance: 47.80850521774998,
      },
      {
        hex: '#427799',
        count: 1,
        relativeLuminance: 47.81828635650624,
      },
      {
        hex: '#497791',
        count: 1,
        relativeLuminance: 47.82166255358954,
      },
      {
        hex: '#367996',
        count: 1,
        relativeLuminance: 47.8300531341509,
      },
      {
        hex: '#567496',
        count: 1,
        relativeLuminance: 47.84307850952993,
      },
      {
        hex: '#57758d',
        count: 3,
        relativeLuminance: 47.84394582575799,
      },
      {
        hex: '#5a7588',
        count: 2,
        relativeLuminance: 47.846382040098185,
      },
      {
        hex: '#4e778b',
        count: 1,
        relativeLuminance: 47.851003070159976,
      },
      {
        hex: '#527595',
        count: 2,
        relativeLuminance: 47.86237316007028,
      },
      {
        hex: '#53768c',
        count: 2,
        relativeLuminance: 47.86616489057772,
      },
      {
        hex: '#3d7898',
        count: 1,
        relativeLuminance: 47.86963884954706,
      },
      {
        hex: '#4d778d',
        count: 2,
        relativeLuminance: 47.87280137286438,
      },
      {
        hex: '#4b7790',
        count: 1,
        relativeLuminance: 47.88377274749686,
      },
      {
        hex: '#52768e',
        count: 1,
        relativeLuminance: 47.88450609702852,
      },
      {
        hex: '#48788c',
        count: 1,
        relativeLuminance: 47.885028497354284,
      },
      {
        hex: '#717082',
        count: 1,
        relativeLuminance: 47.89350302292234,
      },
      {
        hex: '#5e7392',
        count: 1,
        relativeLuminance: 47.90078790857292,
      },
      {
        hex: '#4b7698',
        count: 2,
        relativeLuminance: 47.904925127765395,
      },
      {
        hex: '#517690',
        count: 2,
        relativeLuminance: 47.90504334700686,
      },
      {
        hex: '#617485',
        count: 1,
        relativeLuminance: 47.91244567961634,
      },
      {
        hex: '#4f7693',
        count: 1,
        relativeLuminance: 47.912561508926444,
      },
      {
        hex: '#5f7489',
        count: 1,
        relativeLuminance: 47.91779072610075,
      },
      {
        hex: '#57758f',
        count: 1,
        relativeLuminance: 47.92054814618538,
      },
      {
        hex: '#5e748b',
        count: 1,
        relativeLuminance: 47.92380727168005,
      },
      {
        hex: '#567591',
        count: 2,
        relativeLuminance: 47.937557178700914,
      },
      {
        hex: '#547594',
        count: 1,
        relativeLuminance: 47.93777179241331,
      },
      {
        hex: '#517691',
        count: 1,
        relativeLuminance: 47.9441544486606,
      },
      {
        hex: '#467798',
        count: 1,
        relativeLuminance: 47.95968793996127,
      },
      {
        hex: '#4b7792',
        count: 1,
        relativeLuminance: 47.96234457075686,
      },
      {
        hex: '#5b7681',
        count: 1,
        relativeLuminance: 47.96382266483762,
      },
      {
        hex: '#657575',
        count: 1,
        relativeLuminance: 47.97354078209014,
      },
      {
        hex: '#51778a',
        count: 1,
        relativeLuminance: 47.97903836565988,
      },
      {
        hex: '#677383',
        count: 1,
        relativeLuminance: 47.986366188313774,
      },
      {
        hex: '#4d7790',
        count: 1,
        relativeLuminance: 47.988047329914174,
      },
      {
        hex: '#4f7695',
        count: 1,
        relativeLuminance: 47.99314114768457,
      },
      {
        hex: '#6e7184',
        count: 1,
        relativeLuminance: 47.995855890995905,
      },
      {
        hex: '#577591',
        count: 1,
        relativeLuminance: 47.998340540013245,
      },
      {
        hex: '#527789',
        count: 1,
        relativeLuminance: 47.99895349480841,
      },
      {
        hex: '#5f7583',
        count: 1,
        relativeLuminance: 47.999634986264354,
      },
      {
        hex: '#5a7684',
        count: 1,
        relativeLuminance: 48.00255645863183,
      },
      {
        hex: '#56768b',
        count: 1,
        relativeLuminance: 48.006254125305205,
      },
      {
        hex: '#5c7589',
        count: 1,
        relativeLuminance: 48.012162945586496,
      },
      {
        hex: '#667386',
        count: 1,
        relativeLuminance: 48.016537065725274,
      },
      {
        hex: '#547596',
        count: 1,
        relativeLuminance: 48.01898370217923,
      },
      {
        hex: '#517693',
        count: 1,
        relativeLuminance: 48.02326865062784,
      },
      {
        hex: '#4077a0',
        count: 1,
        relativeLuminance: 48.034594804128574,
      },
      {
        hex: '#52778a',
        count: 1,
        relativeLuminance: 48.03556209485576,
      },
      {
        hex: '#54768f',
        count: 1,
        relativeLuminance: 48.03859034254452,
      },
      {
        hex: '#3e77a2',
        count: 1,
        relativeLuminance: 48.04057563211181,
      },
      {
        hex: '#4b7794',
        count: 2,
        relativeLuminance: 48.042105610017856,
      },
      {
        hex: '#51778c',
        count: 1,
        relativeLuminance: 48.05327506307694,
      },
      {
        hex: '#4a769d',
        count: 1,
        relativeLuminance: 48.06671744481771,
      },
      {
        hex: '#4a7796',
        count: 1,
        relativeLuminance: 48.07238567823488,
      },
      {
        hex: '#5e7587',
        count: 1,
        relativeLuminance: 48.072419550551615,
      },
      {
        hex: '#4f7697',
        count: 1,
        relativeLuminance: 48.07490902444832,
      },
      {
        hex: '#56768d',
        count: 2,
        relativeLuminance: 48.0811065052457,
      },
      {
        hex: '#637486',
        count: 1,
        relativeLuminance: 48.089054804880874,
      },
      {
        hex: '#627488',
        count: 1,
        relativeLuminance: 48.08951659169523,
      },
      {
        hex: '#457895',
        count: 2,
        relativeLuminance: 48.09338055738327,
      },
      {
        hex: '#4f7790',
        count: 3,
        relativeLuminance: 48.0952246467789,
      },
      {
        hex: '#46798c',
        count: 2,
        relativeLuminance: 48.0961775811069,
      },
      {
        hex: '#497798',
        count: 1,
        relativeLuminance: 48.10482926722517,
      },
      {
        hex: '#577784',
        count: 1,
        relativeLuminance: 48.11586015064172,
      },
      {
        hex: '#547691',
        count: 2,
        relativeLuminance: 48.11609673139942,
      },
      {
        hex: '#51778e',
        count: 2,
        relativeLuminance: 48.1286972248881,
      },
      {
        hex: '#687385',
        count: 1,
        relativeLuminance: 48.131231066954996,
      },
      {
        hex: '#4f7791',
        count: 3,
        relativeLuminance: 48.134104205363556,
      },
      {
        hex: '#667481',
        count: 1,
        relativeLuminance: 48.13447342751738,
      },
      {
        hex: '#4a7890',
        count: 1,
        relativeLuminance: 48.13682881008981,
      },
      {
        hex: '#587593',
        count: 1,
        relativeLuminance: 48.138683647100734,
      },
      {
        hex: '#3a799a',
        count: 1,
        relativeLuminance: 48.14312055148628,
      },
      {
        hex: '#637488',
        count: 2,
        relativeLuminance: 48.160347111987235,
      },
      {
        hex: '#62748a',
        count: 2,
        relativeLuminance: 48.1621494082016,
      },
      {
        hex: '#737085',
        count: 1,
        relativeLuminance: 48.16746120335429,
      },
      {
        hex: '#5b7687',
        count: 1,
        relativeLuminance: 48.172071832711794,
      },
      {
        hex: '#537694',
        count: 1,
        relativeLuminance: 48.176748788363966,
      },
      {
        hex: '#54778b',
        count: 2,
        relativeLuminance: 48.1875664987066,
      },
      {
        hex: '#527696',
        count: 1,
        relativeLuminance: 48.200399318085516,
      },
      {
        hex: '#5a7592',
        count: 1,
        relativeLuminance: 48.22418338139579,
      },
      {
        hex: '#577597',
        count: 1,
        relativeLuminance: 48.23883793649044,
      },
      {
        hex: '#58768e',
        count: 1,
        relativeLuminance: 48.24058530890467,
      },
      {
        hex: '#73717f',
        count: 1,
        relativeLuminance: 48.244153854897945,
      },
      {
        hex: '#5f758a',
        count: 1,
        relativeLuminance: 48.248005155970404,
      },
      {
        hex: '#3e78a0',
        count: 1,
        relativeLuminance: 48.253911574168626,
      },
      {
        hex: '#537696',
        count: 1,
        relativeLuminance: 48.25735813912037,
      },
      {
        hex: '#687389',
        count: 1,
        relativeLuminance: 48.27347273537987,
      },
      {
        hex: '#53778f',
        count: 2,
        relativeLuminance: 48.27996485270667,
      },
      {
        hex: '#527698',
        count: 1,
        relativeLuminance: 48.282334483168555,
      },
      {
        hex: '#4b779a',
        count: 1,
        relativeLuminance: 48.28850070921513,
      },
      {
        hex: '#5a768c',
        count: 1,
        relativeLuminance: 48.29023103882058,
      },
      {
        hex: '#467899',
        count: 1,
        relativeLuminance: 48.304030687695516,
      },
      {
        hex: '#507794',
        count: 3,
        relativeLuminance: 48.3069281376481,
      },
      {
        hex: '#477898',
        count: 2,
        relativeLuminance: 48.30980897608467,
      },
      {
        hex: '#587690',
        count: 2,
        relativeLuminance: 48.31692524831439,
      },
      {
        hex: '#4e7797',
        count: 1,
        relativeLuminance: 48.32010487687428,
      },
      {
        hex: '#4f788e',
        count: 1,
        relativeLuminance: 48.32071084881275,
      },
      {
        hex: '#537888',
        count: 1,
        relativeLuminance: 48.32236428471438,
      },
      {
        hex: '#497896',
        count: 1,
        relativeLuminance: 48.32475665511673,
      },
      {
        hex: '#557695',
        count: 1,
        relativeLuminance: 48.333143147237564,
      },
      {
        hex: '#577692',
        count: 2,
        relativeLuminance: 48.33356882855975,
      },
      {
        hex: '#6a747e',
        count: 1,
        relativeLuminance: 48.33719600509873,
      },
      {
        hex: '#527792',
        count: 1,
        relativeLuminance: 48.33908256419657,
      },
      {
        hex: '#657489',
        count: 1,
        relativeLuminance: 48.340105553144596,
      },
      {
        hex: '#64748b',
        count: 1,
        relativeLuminance: 48.340810614845395,
      },
      {
        hex: '#4e7890',
        count: 2,
        relativeLuminance: 48.343414471208035,
      },
      {
        hex: '#477899',
        count: 1,
        relativeLuminance: 48.35118384020164,
      },
      {
        hex: '#587789',
        count: 1,
        relativeLuminance: 48.353770826923295,
      },
      {
        hex: '#537791',
        count: 2,
        relativeLuminance: 48.35689129686442,
      },
      {
        hex: '#4f7987',
        count: 1,
        relativeLuminance: 48.36856353305623,
      },
      {
        hex: '#4b779c',
        count: 1,
        relativeLuminance: 48.3729944025734,
      },
      {
        hex: '#52788b',
        count: 1,
        relativeLuminance: 48.374316198640415,
      },
      {
        hex: '#547888',
        count: 2,
        relativeLuminance: 48.37993155821448,
      },
      {
        hex: '#4e7891',
        count: 1,
        relativeLuminance: 48.38199494002116,
      },
      {
        hex: '#657582',
        count: 1,
        relativeLuminance: 48.387028158521005,
      },
      {
        hex: '#53788a',
        count: 1,
        relativeLuminance: 48.39447307274408,
      },
      {
        hex: '#6f7285',
        count: 1,
        relativeLuminance: 48.39531434234412,
      },
      {
        hex: '#6b7386',
        count: 1,
        relativeLuminance: 48.396453142951174,
      },
      {
        hex: '#607684',
        count: 2,
        relativeLuminance: 48.397844041061134,
      },
      {
        hex: '#5f7686',
        count: 2,
        relativeLuminance: 48.39958412278733,
      },
      {
        hex: '#527794',
        count: 2,
        relativeLuminance: 48.41791396938345,
      },
      {
        hex: '#627681',
        count: 1,
        relativeLuminance: 48.43409440667348,
      },
      {
        hex: '#557790',
        count: 1,
        relativeLuminance: 48.43415300679132,
      },
      {
        hex: '#4c7895',
        count: 1,
        relativeLuminance: 48.435161074555225,
      },
      {
        hex: '#3b7a99',
        count: 1,
        relativeLuminance: 48.44695657033685,
      },
      {
        hex: '#52788d',
        count: 1,
        relativeLuminance: 48.44831655772178,
      },
      {
        hex: '#5c768d',
        count: 1,
        relativeLuminance: 48.45507768240603,
      },
      {
        hex: '#60777d',
        count: 1,
        relativeLuminance: 48.46240468318703,
      },
      {
        hex: '#4b7897',
        count: 2,
        relativeLuminance: 48.46496689819929,
      },
      {
        hex: '#5f7688',
        count: 1,
        relativeLuminance: 48.47019168567462,
      },
      {
        hex: '#57778e',
        count: 1,
        relativeLuminance: 48.47713344755206,
      },
      {
        hex: '#5a7789',
        count: 1,
        relativeLuminance: 48.47784840057021,
      },
      {
        hex: '#5d768c',
        count: 1,
        relativeLuminance: 48.48287754482422,
      },
      {
        hex: '#547793',
        count: 3,
        relativeLuminance: 48.4923623028489,
      },
      {
        hex: '#5d7784',
        count: 1,
        relativeLuminance: 48.49448540845509,
      },
      {
        hex: '#4a7899',
        count: 1,
        relativeLuminance: 48.49691765222519,
      },
      {
        hex: '#447999',
        count: 2,
        relativeLuminance: 48.515548965646275,
      },
      {
        hex: '#52788f',
        count: 1,
        relativeLuminance: 48.523491432032486,
      },
      {
        hex: '#327b9b',
        count: 1,
        relativeLuminance: 48.52428522795171,
      },
      {
        hex: '#507892',
        count: 1,
        relativeLuminance: 48.52822479300859,
      },
      {
        hex: '#697486',
        count: 2,
        relativeLuminance: 48.530139668462326,
      },
      {
        hex: '#5c768f',
        count: 2,
        relativeLuminance: 48.53023681389469,
      },
      {
        hex: '#4a789a',
        count: 1,
        relativeLuminance: 48.53839905615499,
      },
      {
        hex: '#4f779b',
        count: 1,
        relativeLuminance: 48.539139255189895,
      },
      {
        hex: '#607590',
        count: 1,
        relativeLuminance: 48.53978683049998,
      },
      {
        hex: '#4c7990',
        count: 1,
        relativeLuminance: 48.542120051675795,
      },
      {
        hex: '#55788b',
        count: 2,
        relativeLuminance: 48.54643651404501,
      },
      {
        hex: '#4b7899',
        count: 1,
        relativeLuminance: 48.54692155479293,
      },
      {
        hex: '#557793',
        count: 1,
        relativeLuminance: 48.55044988072778,
      },
      {
        hex: '#4f7894',
        count: 3,
        relativeLuminance: 48.55269002482203,
      },
      {
        hex: '#577790',
        count: 4,
        relativeLuminance: 48.55291526167406,
      },
      {
        hex: '#63758b',
        count: 1,
        relativeLuminance: 48.56016081061091,
      },
      {
        hex: '#467998',
        count: 3,
        relativeLuminance: 48.565809460360455,
      },
      {
        hex: '#50798b',
        count: 2,
        relativeLuminance: 48.5663885142131,
      },
      {
        hex: '#527988',
        count: 1,
        relativeLuminance: 48.56870767148,
      },
      {
        hex: '#427a95',
        count: 1,
        relativeLuminance: 48.570065348330814,
      },
      {
        hex: '#6b7483',
        count: 1,
        relativeLuminance: 48.580086538480884,
      },
      {
        hex: '#55788c',
        count: 2,
        relativeLuminance: 48.583093675492364,
      },
      {
        hex: '#577889',
        count: 1,
        relativeLuminance: 48.592616410314335,
      },
      {
        hex: '#54788e',
        count: 1,
        relativeLuminance: 48.599390047072774,
      },
      {
        hex: '#4b7993',
        count: 2,
        relativeLuminance: 48.607406738920474,
      },
      {
        hex: '#417a97',
        count: 1,
        relativeLuminance: 48.60748917632368,
      },
      {
        hex: '#687679',
        count: 1,
        relativeLuminance: 48.61141389676958,
      },
      {
        hex: '#5d7788',
        count: 2,
        relativeLuminance: 48.633817847183835,
      },
      {
        hex: '#59778f',
        count: 1,
        relativeLuminance: 48.63666686461836,
      },
      {
        hex: '#52798a',
        count: 1,
        relativeLuminance: 48.64026820166163,
      },
      {
        hex: '#60768b',
        count: 1,
        relativeLuminance: 48.64547606216813,
      },
      {
        hex: '#417a98',
        count: 1,
        relativeLuminance: 48.648139992169774,
      },
      {
        hex: '#547797',
        count: 2,
        relativeLuminance: 48.65181464888461,
      },
      {
        hex: '#55788e',
        count: 2,
        relativeLuminance: 48.657285564791934,
      },
      {
        hex: '#4f798f',
        count: 1,
        relativeLuminance: 48.660955162734496,
      },
      {
        hex: '#60787a',
        count: 1,
        relativeLuminance: 48.66680297632233,
      },
      {
        hex: '#4d7992',
        count: 1,
        relativeLuminance: 48.67049666161115,
      },
      {
        hex: '#537799',
        count: 1,
        relativeLuminance: 48.676357512848455,
      },
      {
        hex: '#5b778d',
        count: 1,
        relativeLuminance: 48.68671244195754,
      },
      {
        hex: '#4d789a',
        count: 1,
        relativeLuminance: 48.69035617242976,
      },
      {
        hex: '#4778a1',
        count: 1,
        relativeLuminance: 48.69275263423097,
      },
      {
        hex: '#47799a',
        count: 2,
        relativeLuminance: 48.69485064706336,
      },
      {
        hex: '#487999',
        count: 1,
        relativeLuminance: 48.70098889635466,
      },
      {
        hex: '#6b757e',
        count: 1,
        relativeLuminance: 48.70393174188624,
      },
      {
        hex: '#5a797e',
        count: 1,
        relativeLuminance: 48.703962063248696,
      },
      {
        hex: '#637687',
        count: 1,
        relativeLuminance: 48.70896196029186,
      },
      {
        hex: '#597791',
        count: 1,
        relativeLuminance: 48.71274810022703,
      },
      {
        hex: '#5c778c',
        count: 2,
        relativeLuminance: 48.71346876336267,
      },
      {
        hex: '#50798f',
        count: 1,
        relativeLuminance: 48.714680582005656,
      },
      {
        hex: '#4a7997',
        count: 2,
        relativeLuminance: 48.71662846848484,
      },
      {
        hex: '#43799f',
        count: 1,
        relativeLuminance: 48.72443338448733,
      },
      {
        hex: '#5c7884',
        count: 1,
        relativeLuminance: 48.72810525214402,
      },
      {
        hex: '#3f7a9c',
        count: 1,
        relativeLuminance: 48.73050560198719,
      },
      {
        hex: '#4d789b',
        count: 1,
        relativeLuminance: 48.73193488638982,
      },
      {
        hex: '#537893',
        count: 1,
        relativeLuminance: 48.73348148558283,
      },
      {
        hex: '#6e7389',
        count: 1,
        relativeLuminance: 48.738548719031044,
      },
      {
        hex: '#65758c',
        count: 1,
        relativeLuminance: 48.7387024023122,
      },
      {
        hex: '#4d7994',
        count: 2,
        relativeLuminance: 48.74852362919425,
      },
      {
        hex: '#59788a',
        count: 1,
        relativeLuminance: 48.74991804239228,
      },
      {
        hex: '#547892',
        count: 1,
        relativeLuminance: 48.751550582337686,
      },
      {
        hex: '#5b778f',
        count: 1,
        relativeLuminance: 48.761335196896766,
      },
      {
        hex: '#507a88',
        count: 1,
        relativeLuminance: 48.76275678444918,
      },
      {
        hex: '#487a93',
        count: 1,
        relativeLuminance: 48.76431307604133,
      },
      {
        hex: '#53798c',
        count: 2,
        relativeLuminance: 48.76905765072702,
      },
      {
        hex: '#6d7484',
        count: 1,
        relativeLuminance: 48.769977339542905,
      },
      {
        hex: '#45799e',
        count: 1,
        relativeLuminance: 48.77077104474854,
      },
      {
        hex: '#4f7992',
        count: 1,
        relativeLuminance: 48.77542938390485,
      },
      {
        hex: '#4c7996',
        count: 1,
        relativeLuminance: 48.77657083242897,
      },
      {
        hex: '#4f7a8a',
        count: 1,
        relativeLuminance: 48.78036204044416,
      },
      {
        hex: '#517897',
        count: 2,
        relativeLuminance: 48.780768295879525,
      },
      {
        hex: '#4a7a91',
        count: 1,
        relativeLuminance: 48.784003357880636,
      },
      {
        hex: '#58788d',
        count: 1,
        relativeLuminance: 48.798243248019915,
      },
      {
        hex: '#5e778b',
        count: 1,
        relativeLuminance: 48.80651866620913,
      },
      {
        hex: '#537895',
        count: 1,
        relativeLuminance: 48.81203405022008,
      },
      {
        hex: '#427a9b',
        count: 1,
        relativeLuminance: 48.814521277323806,
      },
      {
        hex: '#657686',
        count: 1,
        relativeLuminance: 48.815664359769244,
      },
      {
        hex: '#4f7a8b',
        count: 1,
        relativeLuminance: 48.81642390824207,
      },
      {
        hex: '#3e7a9f',
        count: 1,
        relativeLuminance: 48.817651800281624,
      },
      {
        hex: '#54798c',
        count: 2,
        relativeLuminance: 48.82583465577255,
      },
      {
        hex: '#567891',
        count: 2,
        relativeLuminance: 48.829173929468,
      },
      {
        hex: '#4978a2',
        count: 1,
        relativeLuminance: 48.83206440888317,
      },
      {
        hex: '#487a95',
        count: 2,
        relativeLuminance: 48.84279100299878,
      },
      {
        hex: '#5d778e',
        count: 1,
        relativeLuminance: 48.85156429812382,
      },
      {
        hex: '#59788d',
        count: 3,
        relativeLuminance: 48.859078232324194,
      },
      {
        hex: '#607789',
        count: 1,
        relativeLuminance: 48.86738220144785,
      },
      {
        hex: '#58788f',
        count: 2,
        relativeLuminance: 48.872609784042254,
      },
      {
        hex: '#667686',
        count: 4,
        relativeLuminance: 48.887515011051065,
      },
      {
        hex: '#4b799a',
        count: 1,
        relativeLuminance: 48.8885236215163,
      },
      {
        hex: '#4f7a8d',
        count: 2,
        relativeLuminance: 48.88941991176243,
      },
      {
        hex: '#50789b',
        count: 1,
        relativeLuminance: 48.89010396955416,
      },
      {
        hex: '#537990',
        count: 1,
        relativeLuminance: 48.91775577767413,
      },
      {
        hex: '#78727e',
        count: 1,
        relativeLuminance: 48.926019829079166,
      },
      {
        hex: '#4b799b',
        count: 1,
        relativeLuminance: 48.92984900558062,
      },
      {
        hex: '#4d7a91',
        count: 2,
        relativeLuminance: 48.934814491852606,
      },
      {
        hex: '#4c799a',
        count: 1,
        relativeLuminance: 48.938708927351044,
      },
      {
        hex: '#447a9c',
        count: 1,
        relativeLuminance: 48.943610336788154,
      },
      {
        hex: '#4b7a94',
        count: 1,
        relativeLuminance: 48.94944532185593,
      },
      {
        hex: '#477a99',
        count: 1,
        relativeLuminance: 48.95626128354915,
      },
      {
        hex: '#64768c',
        count: 1,
        relativeLuminance: 48.95758519437969,
      },
      {
        hex: '#557896',
        count: 1,
        relativeLuminance: 48.965726529448716,
      },
      {
        hex: '#357c9c',
        count: 1,
        relativeLuminance: 48.973421215963654,
      },
      {
        hex: '#56798d',
        count: 1,
        relativeLuminance: 48.978077265966704,
      },
      {
        hex: '#457a9c',
        count: 2,
        relativeLuminance: 48.98831721288171,
      },
      {
        hex: '#427b98',
        count: 1,
        relativeLuminance: 48.996435374476704,
      },
      {
        hex: '#4c7a94',
        count: 1,
        relativeLuminance: 48.99953663437125,
      },
      {
        hex: '#4e7999',
        count: 1,
        relativeLuminance: 49.000359513119534,
      },
      {
        hex: '#49799f',
        count: 1,
        relativeLuminance: 49.00043561014084,
      },
      {
        hex: '#647785',
        count: 1,
        relativeLuminance: 49.002919127787564,
      },
      {
        hex: '#627691',
        count: 1,
        relativeLuminance: 49.0046910838342,
      },
      {
        hex: '#497a98',
        count: 1,
        relativeLuminance: 49.01043119430544,
      },
      {
        hex: '#667781',
        count: 1,
        relativeLuminance: 49.01151217084485,
      },
      {
        hex: '#4b799d',
        count: 1,
        relativeLuminance: 49.013370987940164,
      },
      {
        hex: '#71738a',
        count: 1,
        relativeLuminance: 49.01612186195584,
      },
      {
        hex: '#5f778f',
        count: 1,
        relativeLuminance: 49.01927487465217,
      },
      {
        hex: '#5a7890',
        count: 4,
        relativeLuminance: 49.03219466795832,
      },
      {
        hex: '#4479a5',
        count: 1,
        relativeLuminance: 49.03229660786141,
      },
      {
        hex: '#517a8e',
        count: 1,
        relativeLuminance: 49.03363917325797,
      },
      {
        hex: '#537a8b',
        count: 1,
        relativeLuminance: 49.03456872101509,
      },
      {
        hex: '#427b99',
        count: 1,
        relativeLuminance: 49.036941499237926,
      },
      {
        hex: '#5d788b',
        count: 1,
        relativeLuminance: 49.03706654133575,
      },
      {
        hex: '#61778c',
        count: 1,
        relativeLuminance: 49.04236837355842,
      },
      {
        hex: '#5c788d',
        count: 4,
        relativeLuminance: 49.045875703809855,
      },
      {
        hex: '#507a90',
        count: 1,
        relativeLuminance: 49.05425766604459,
      },
      {
        hex: '#3c7c98',
        count: 1,
        relativeLuminance: 49.06016240653838,
      },
      {
        hex: '#4e7a93',
        count: 2,
        relativeLuminance: 49.06310257818474,
      },
      {
        hex: '#557991',
        count: 1,
        relativeLuminance: 49.069272632299615,
      },
      {
        hex: '#54789a',
        count: 1,
        relativeLuminance: 49.06986288787634,
      },
      {
        hex: '#5c788e',
        count: 2,
        relativeLuminance: 49.08263224255758,
      },
      {
        hex: '#457b97',
        count: 1,
        relativeLuminance: 49.08784669771249,
      },
      {
        hex: '#497a9a',
        count: 1,
        relativeLuminance: 49.09169842507134,
      },
      {
        hex: '#3b7c9a',
        count: 1,
        relativeLuminance: 49.10345486064378,
      },
      {
        hex: '#507999',
        count: 1,
        relativeLuminance: 49.10581354751153,
      },
      {
        hex: '#5a7892',
        count: 1,
        relativeLuminance: 49.108020795993525,
      },
      {
        hex: '#62778c',
        count: 2,
        relativeLuminance: 49.11028884499474,
      },
      {
        hex: '#617886',
        count: 1,
        relativeLuminance: 49.12475245447882,
      },
      {
        hex: '#547994',
        count: 2,
        relativeLuminance: 49.127354721735045,
      },
      {
        hex: '#4e7a95',
        count: 1,
        relativeLuminance: 49.14086266140703,
      },
      {
        hex: '#557993',
        count: 1,
        relativeLuminance: 49.1456793592275,
      },
      {
        hex: '#5e7984',
        count: 1,
        relativeLuminance: 49.15517645170701,
      },
      {
        hex: '#497b94',
        count: 1,
        relativeLuminance: 49.15533895574272,
      },
      {
        hex: '#5c7890',
        count: 1,
        relativeLuminance: 49.157012951574714,
      },
      {
        hex: '#627885',
        count: 1,
        relativeLuminance: 49.158480817807,
      },
      {
        hex: '#547a8d',
        count: 1,
        relativeLuminance: 49.163266418868346,
      },
      {
        hex: '#447b9a',
        count: 1,
        relativeLuminance: 49.1644704948516,
      },
      {
        hex: '#487a9d',
        count: 1,
        relativeLuminance: 49.16833088010685,
      },
      {
        hex: '#507a93',
        count: 2,
        relativeLuminance: 49.168353815651585,
      },
      {
        hex: '#4d7a97',
        count: 1,
        relativeLuminance: 49.168462379546824,
      },
      {
        hex: '#527998',
        count: 1,
        relativeLuminance: 49.17381300617376,
      },
      {
        hex: '#557a8c',
        count: 1,
        relativeLuminance: 49.18389329627607,
      },
      {
        hex: '#5a7894',
        count: 1,
        relativeLuminance: 49.18500446591297,
      },
      {
        hex: '#487b96',
        count: 1,
        relativeLuminance: 49.1861363663447,
      },
      {
        hex: '#627886',
        count: 1,
        relativeLuminance: 49.19250146094356,
      },
      {
        hex: '#5d7987',
        count: 1,
        relativeLuminance: 49.19290252268564,
      },
      {
        hex: '#59798e',
        count: 1,
        relativeLuminance: 49.19341097551984,
      },
      {
        hex: '#617888',
        count: 2,
        relativeLuminance: 49.19379882961789,
      },
      {
        hex: '#577899',
        count: 1,
        relativeLuminance: 49.20259195156608,
      },
      {
        hex: '#547996',
        count: 1,
        relativeLuminance: 49.20563231619296,
      },
      {
        hex: '#407c98',
        count: 1,
        relativeLuminance: 49.21874790252453,
      },
      {
        hex: '#577992',
        count: 2,
        relativeLuminance: 49.22365692821616,
      },
      {
        hex: '#517b8b',
        count: 1,
        relativeLuminance: 49.22735563207209,
      },
      {
        hex: '#597897',
        count: 1,
        relativeLuminance: 49.241814435049164,
      },
      {
        hex: '#4d7a99',
        count: 2,
        relativeLuminance: 49.248660441551294,
      },
      {
        hex: '#677786',
        count: 1,
        relativeLuminance: 49.250727257402076,
      },
      {
        hex: '#487b98',
        count: 1,
        relativeLuminance: 49.26561676483851,
      },
      {
        hex: '#597990',
        count: 1,
        relativeLuminance: 49.26753954961862,
      },
      {
        hex: '#4d7b92',
        count: 1,
        relativeLuminance: 49.2758600794955,
      },
      {
        hex: '#65778b',
        count: 1,
        relativeLuminance: 49.28246825489748,
      },
      {
        hex: '#677787',
        count: 2,
        relativeLuminance: 49.28497405985895,
      },
      {
        hex: '#387d9a',
        count: 1,
        relativeLuminance: 49.30278268162142,
      },
      {
        hex: '#5a7a87',
        count: 1,
        relativeLuminance: 49.30390272830144,
      },
      {
        hex: '#4a7a9e',
        count: 1,
        relativeLuminance: 49.30578042615038,
      },
      {
        hex: '#547a91',
        count: 2,
        relativeLuminance: 49.31149382047552,
      },
      {
        hex: '#597a89',
        count: 1,
        relativeLuminance: 49.31251609288124,
      },
      {
        hex: '#527a94',
        count: 1,
        relativeLuminance: 49.31491494168168,
      },
      {
        hex: '#617983',
        count: 1,
        relativeLuminance: 49.31955058314108,
      },
      {
        hex: '#4c7a9c',
        count: 1,
        relativeLuminance: 49.32082115377119,
      },
      {
        hex: '#51799d',
        count: 2,
        relativeLuminance: 49.32390505572593,
      },
      {
        hex: '#577a8d',
        count: 1,
        relativeLuminance: 49.3360901584618,
      },
      {
        hex: '#517a96',
        count: 2,
        relativeLuminance: 49.338545483559145,
      },
      {
        hex: '#577995',
        count: 2,
        relativeLuminance: 49.339156425718585,
      },
      {
        hex: '#417c9a',
        count: 1,
        relativeLuminance: 49.340749639279935,
      },
      {
        hex: '#4c7b95',
        count: 1,
        relativeLuminance: 49.34090669956551,
      },
      {
        hex: '#597992',
        count: 2,
        relativeLuminance: 49.34282077308821,
      },
      {
        hex: '#557b88',
        count: 1,
        relativeLuminance: 49.34388328301385,
      },
      {
        hex: '#487b9a',
        count: 3,
        relativeLuminance: 49.34625091148084,
      },
      {
        hex: '#447c97',
        count: 1,
        relativeLuminance: 49.34854541739908,
      },
      {
        hex: '#3c7c9f',
        count: 1,
        relativeLuminance: 49.34921907846551,
      },
      {
        hex: '#527b8d',
        count: 1,
        relativeLuminance: 49.353700099082815,
      },
      {
        hex: '#567997',
        count: 1,
        relativeLuminance: 49.359425132530205,
      },
      {
        hex: '#767388',
        count: 1,
        relativeLuminance: 49.36313901288136,
      },
      {
        hex: '#577a8e',
        count: 2,
        relativeLuminance: 49.372521159758904,
      },
      {
        hex: '#557999',
        count: 1,
        relativeLuminance: 49.38183215515306,
      },
      {
        hex: '#597a8b',
        count: 1,
        relativeLuminance: 49.38310711067419,
      },
      {
        hex: '#4d7b95',
        count: 2,
        relativeLuminance: 49.39117540211019,
      },
      {
        hex: '#4f7a9a',
        count: 2,
        relativeLuminance: 49.39215051572252,
      },
      {
        hex: '#6b768a',
        count: 1,
        relativeLuminance: 49.39606671456579,
      },
      {
        hex: '#5e7893',
        count: 1,
        relativeLuminance: 49.397970142772095,
      },
      {
        hex: '#4a7b99',
        count: 1,
        relativeLuminance: 49.40096538116711,
      },
      {
        hex: '#4c7a9e',
        count: 1,
        relativeLuminance: 49.40402765727677,
      },
      {
        hex: '#767481',
        count: 1,
        relativeLuminance: 49.40782764352812,
      },
      {
        hex: '#517a98',
        count: 2,
        relativeLuminance: 49.41765619385444,
      },
      {
        hex: '#4c7b97',
        count: 2,
        relativeLuminance: 49.41934223132505,
      },
      {
        hex: '#447d91',
        count: 1,
        relativeLuminance: 49.42387136661583,
      },
      {
        hex: '#65778f',
        count: 1,
        relativeLuminance: 49.42753576163574,
      },
      {
        hex: '#547b8c',
        count: 1,
        relativeLuminance: 49.428340311749054,
      },
      {
        hex: '#657887',
        count: 2,
        relativeLuminance: 49.43408573841448,
      },
      {
        hex: '#63788b',
        count: 1,
        relativeLuminance: 49.435006646968134,
      },
      {
        hex: '#5a7b82',
        count: 1,
        relativeLuminance: 49.436965613267574,
      },
      {
        hex: '#567999',
        count: 1,
        relativeLuminance: 49.43915610071147,
      },
      {
        hex: '#767482',
        count: 1,
        relativeLuminance: 49.44031562579144,
      },
      {
        hex: '#577a90',
        count: 1,
        relativeLuminance: 49.44624477570322,
      },
      {
        hex: '#567a92',
        count: 1,
        relativeLuminance: 49.46312903823075,
      },
      {
        hex: '#4f7a9c',
        count: 1,
        relativeLuminance: 49.47382154278063,
      },
      {
        hex: '#497b9c',
        count: 1,
        relativeLuminance: 49.475100010268264,
      },
      {
        hex: '#5d798f',
        count: 1,
        relativeLuminance: 49.477994763875415,
      },
      {
        hex: '#527c88',
        count: 1,
        relativeLuminance: 49.47999051958429,
      },
      {
        hex: '#4a7b9b',
        count: 1,
        relativeLuminance: 49.48193979192661,
      },
      {
        hex: '#557a94',
        count: 1,
        relativeLuminance: 49.48213252342683,
      },
      {
        hex: '#5f7a83',
        count: 1,
        relativeLuminance: 49.48477347287928,
      },
      {
        hex: '#537a97',
        count: 3,
        relativeLuminance: 49.48692798875112,
      },
      {
        hex: '#577b89',
        count: 2,
        relativeLuminance: 49.494042345082576,
      },
      {
        hex: '#517a9a',
        count: 1,
        relativeLuminance: 49.497916655499424,
      },
      {
        hex: '#4c7b99',
        count: 2,
        relativeLuminance: 49.49892748244538,
      },
    ],
    closestHex: {
      hex: '#607384',
      proximity: 0.0086164780393716,
    },
    averageLum: 47.504675765504416,
    pixelCount: 923,
  },
  {
    bucket: '88',
    colors: [
      {
        hex: '#bed2dd',
        count: 1,
        relativeLuminance: 83.05191475566615,
      },
      {
        hex: '#d9d49a',
        count: 1,
        relativeLuminance: 84.05512500769461,
      },
      {
        hex: '#ded4cb',
        count: 1,
        relativeLuminance: 85.46775428331142,
      },
      {
        hex: '#ced8d9',
        count: 1,
        relativeLuminance: 85.62666181210385,
      },
      {
        hex: '#cdd8dc',
        count: 1,
        relativeLuminance: 85.63415607235893,
      },
      {
        hex: '#d2d8d6',
        count: 1,
        relativeLuminance: 85.8403732636426,
      },
      {
        hex: '#d0dadc',
        count: 1,
        relativeLuminance: 86.36521341992558,
      },
      {
        hex: '#e4d7ce',
        count: 1,
        relativeLuminance: 86.77621848960779,
      },
      {
        hex: '#e1d8d1',
        count: 1,
        relativeLuminance: 86.86069627558338,
      },
      {
        hex: '#e6d7d0',
        count: 1,
        relativeLuminance: 86.98604258936652,
      },
      {
        hex: '#dadad8',
        count: 1,
        relativeLuminance: 86.99985665932864,
      },
      {
        hex: '#dbdad5',
        count: 1,
        relativeLuminance: 87.00028392052526,
      },
      {
        hex: '#d9dadc',
        count: 1,
        relativeLuminance: 87.02717953174555,
      },
      {
        hex: '#d2dcde',
        count: 1,
        relativeLuminance: 87.07623995345467,
      },
      {
        hex: '#e5d8cf',
        count: 1,
        relativeLuminance: 87.13143812048084,
      },
      {
        hex: '#e2d9d2',
        count: 1,
        relativeLuminance: 87.21592969266251,
      },
      {
        hex: '#e5d9cb',
        count: 1,
        relativeLuminance: 87.28811868082913,
      },
      {
        hex: '#d6ddd6',
        count: 1,
        relativeLuminance: 87.4189319526155,
      },
      {
        hex: '#dbdcd7',
        count: 1,
        relativeLuminance: 87.55917518790227,
      },
      {
        hex: '#dfdcd5',
        count: 1,
        relativeLuminance: 87.81359554295987,
      },
      {
        hex: '#e7dad2',
        count: 1,
        relativeLuminance: 87.8649393152068,
      },
      {
        hex: '#dbded7',
        count: 1,
        relativeLuminance: 88.06905270634788,
      },
      {
        hex: '#e0ddd4',
        count: 1,
        relativeLuminance: 88.11934848089882,
      },
      {
        hex: '#e1ddd2',
        count: 1,
        relativeLuminance: 88.14810600749762,
      },
      {
        hex: '#dae0de',
        count: 1,
        relativeLuminance: 88.68120391734656,
      },
      {
        hex: '#dde0d9',
        count: 1,
        relativeLuminance: 88.77728906104545,
      },
      {
        hex: '#e2dfd6',
        count: 1,
        relativeLuminance: 88.82746786137666,
      },
      {
        hex: '#e3dfd4',
        count: 1,
        relativeLuminance: 88.85613829178396,
      },
      {
        hex: '#e7ded5',
        count: 1,
        relativeLuminance: 88.93929346022084,
      },
      {
        hex: '#e7dfd4',
        count: 1,
        relativeLuminance: 89.1666127920746,
      },
      {
        hex: '#e4e0d4',
        count: 1,
        relativeLuminance: 89.18590298242907,
      },
      {
        hex: '#e6e0d4',
        count: 1,
        relativeLuminance: 89.34039786104348,
      },
      {
        hex: '#e7e0d6',
        count: 1,
        relativeLuminance: 89.46567612814543,
      },
      {
        hex: '#e7e0d8',
        count: 1,
        relativeLuminance: 89.51375401675729,
      },
      {
        hex: '#e8e0d5',
        count: 1,
        relativeLuminance: 89.51988010256461,
      },
      {
        hex: '#dae3e2',
        count: 1,
        relativeLuminance: 89.54948512942485,
      },
      {
        hex: '#e5e1d6',
        count: 1,
        relativeLuminance: 89.56297912394508,
      },
      {
        hex: '#e5e1d8',
        count: 1,
        relativeLuminance: 89.6109684819283,
      },
      {
        hex: '#e9e0d7',
        count: 1,
        relativeLuminance: 89.6459127636615,
      },
      {
        hex: '#eddfdc',
        count: 1,
        relativeLuminance: 89.83481342562118,
      },
      {
        hex: '#e8e1d9',
        count: 1,
        relativeLuminance: 89.86676305899923,
      },
      {
        hex: '#ebe0da',
        count: 1,
        relativeLuminance: 89.87578964033541,
      },
      {
        hex: '#e3e3db',
        count: 1,
        relativeLuminance: 90.0371166748168,
      },
      {
        hex: '#e8e2d6',
        count: 1,
        relativeLuminance: 90.04638019164216,
      },
      {
        hex: '#dfe4de',
        count: 1,
        relativeLuminance: 90.06726500373367,
      },
      {
        hex: '#dee4e2',
        count: 1,
        relativeLuminance: 90.09439639914113,
      },
      {
        hex: '#e9e2d8',
        count: 1,
        relativeLuminance: 90.17145658666625,
      },
      {
        hex: '#eae2d7',
        count: 2,
        relativeLuminance: 90.22553223381328,
      },
      {
        hex: '#e6e3da',
        count: 1,
        relativeLuminance: 90.24014043706542,
      },
      {
        hex: '#e7e3d8',
        count: 1,
        relativeLuminance: 90.26864041596065,
      },
      {
        hex: '#e2e4df',
        count: 1,
        relativeLuminance: 90.31391367019923,
      },
      {
        hex: '#e7e3da',
        count: 1,
        relativeLuminance: 90.31657467427569,
      },
      {
        hex: '#e6e4d8',
        count: 1,
        relativeLuminance: 90.4446707083435,
      },
      {
        hex: '#e3e5da',
        count: 1,
        relativeLuminance: 90.51983724261005,
      },
      {
        hex: '#ebe3d8',
        count: 1,
        relativeLuminance: 90.57791997053349,
      },
      {
        hex: '#f1e2db',
        count: 1,
        relativeLuminance: 90.87471538827634,
      },
      {
        hex: '#ebe4dc',
        count: 1,
        relativeLuminance: 90.92403486048471,
      },
      {
        hex: '#ece4d9',
        count: 1,
        relativeLuminance: 90.93001741003711,
      },
      {
        hex: '#e9e5dc',
        count: 1,
        relativeLuminance: 91.0210133270134,
      },
      {
        hex: '#ede5d2',
        count: 1,
        relativeLuminance: 91.09669714600436,
      },
      {
        hex: '#e8e6da',
        count: 2,
        relativeLuminance: 91.14888360622967,
      },
      {
        hex: '#eae5e1',
        count: 1,
        relativeLuminance: 91.2194895723026,
      },
      {
        hex: '#e5e7dc',
        count: 1,
        relativeLuminance: 91.22395081852984,
      },
      {
        hex: '#e4e7e0',
        count: 1,
        relativeLuminance: 91.24679001082326,
      },
      {
        hex: '#e9e6dd',
        count: 1,
        relativeLuminance: 91.2965709445256,
      },
      {
        hex: '#e5e7e2',
        count: 1,
        relativeLuminance: 91.37023332930806,
      },
      {
        hex: '#ede6d4',
        count: 1,
        relativeLuminance: 91.39315171118955,
      },
      {
        hex: '#e7e7df',
        count: 1,
        relativeLuminance: 91.44583806522071,
      },
      {
        hex: '#ece6da',
        count: 3,
        relativeLuminance: 91.45484478024309,
      },
      {
        hex: '#f2e4e1',
        count: 1,
        relativeLuminance: 91.59518051039836,
      },
      {
        hex: '#eae7de',
        count: 1,
        relativeLuminance: 91.64813663089154,
      },
      {
        hex: '#e7e8e0',
        count: 1,
        relativeLuminance: 91.7225231415893,
      },
      {
        hex: '#ebe7de',
        count: 1,
        relativeLuminance: 91.72429592408791,
      },
      {
        hex: '#f2e5dd',
        count: 1,
        relativeLuminance: 91.74599408548343,
      },
      {
        hex: '#eee7d7',
        count: 1,
        relativeLuminance: 91.79031899018071,
      },
      {
        hex: '#eee7dd',
        count: 1,
        relativeLuminance: 91.93082019761032,
      },
      {
        hex: '#ebe8df',
        count: 1,
        relativeLuminance: 91.99941576480633,
      },
      {
        hex: '#eee8d8',
        count: 1,
        relativeLuminance: 92.06411619413568,
      },
      {
        hex: '#e9e9e1',
        count: 1,
        relativeLuminance: 92.1484680506775,
      },
      {
        hex: '#efe8de',
        count: 1,
        relativeLuminance: 92.28183213393125,
      },
      {
        hex: '#ede9e0',
        count: 1,
        relativeLuminance: 92.42643374425752,
      },
      {
        hex: '#f1e9d6',
        count: 2,
        relativeLuminance: 92.50138364588234,
      },
      {
        hex: '#efe9dd',
        count: 1,
        relativeLuminance: 92.50817553128516,
      },
      {
        hex: '#edeadb',
        count: 1,
        relativeLuminance: 92.55924792724508,
      },
      {
        hex: '#ebebe1',
        count: 1,
        relativeLuminance: 92.80171728712148,
      },
      {
        hex: '#efebe0',
        count: 1,
        relativeLuminance: 93.07972097157601,
      },
      {
        hex: '#f3ebd8',
        count: 1,
        relativeLuminance: 93.20202957782593,
      },
      {
        hex: '#f1ebdf',
        count: 1,
        relativeLuminance: 93.20897988471692,
      },
      {
        hex: '#f0ece0',
        count: 2,
        relativeLuminance: 93.40617608039312,
      },
      {
        hex: '#efece5',
        count: 1,
        relativeLuminance: 93.44996634935956,
      },
    ],
    closestHex: {
      hex: '#e7e2cf',
      proximity: 0.035377436347488356,
    },
    averageLum: 89.77130072288016,
    pixelCount: 97,
  },
  {
    bucket: '99',
    colors: [
      {
        hex: '#f1ede2',
        count: 1,
        relativeLuminance: 93.77965586849322,
      },
      {
        hex: '#f3f0e7',
        count: 1,
        relativeLuminance: 94.79949772218613,
      },
    ],
    closestHex: {
      hex: '#eeeee6',
      proximity: 0.2596614756627673,
    },
    averageLum: 94.1597460575083,
    pixelCount: 3,
  },
];

export default testData;
