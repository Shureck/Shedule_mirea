var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://schedule-rtu.rtuitlab.dev/api/schedule/%D0%98%D0%9A%D0%91%D0%9E-13-19/full_schedule", false ); // false for synchronous request
xmlHttp.send( null );
jj = JSON.parse(xmlHttp.responseText)
weak = {
    0: "first",
    1: "second"
}
day = {
    0: "monday",
    1: "tuesday",
    2: "wednesday",
    3: "thursday",
    4: "friday",
    5: "saturday",
}
dic = {
}
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 6; j++) {

        jj[weak[i]][day[j]].forEach(function(item, i, arr) {
            less = item['lesson']
            try {
                if(less['teacher'] && less['name']) {
                    if (dic[less['teacher']] == undefined){
                        dic[less['teacher']] = []
                    }
                    if(dic[less['teacher']].indexOf(less['name']) == -1) {
                        dic[less['teacher']].push(less['name'])
                    }
                }
            } catch (err) {
            }
        });
    }
}