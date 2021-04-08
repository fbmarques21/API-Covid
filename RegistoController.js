//Import Covid Model
Covid = require('./RegistoModel');

//Para index
exports.index = function (req, res) {
    var casos = [];
    var uci = [];
    var grades = 0;
    var datas = [];
    Covid.get(function (err, covid) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
            for(var i=0;i<covid.length;i++){
                casos.push(covid[i].confirmados_novos);
                uci.push(covid[i].internados_uci);
                datas.push(covid[i].data);
                grades += covid[i].confirmados_novos
            }
            var avg = grades/i;

            var max = null;
            max = Math.max(...casos);
            var Max = casos.indexOf(max);
            var min = null;
            min = Math.min(...casos);
            var Min = casos.indexOf(min);

        res.json({
            status: "OK",
            message: "Obtidas Covids com Sucesso",
            NovosCasos: casos,
            InternadosUCI: uci,
            Max: datas[Max],
            Min: datas[Min],
            Media: avg,
            TotalCasos: grades
        });
    });
};

// Ver Covid
exports.view = function (req, res) {
    Covid.findById(req.params.covid_id, function (err, covid) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes da Covid',
            data: covid
        });
    });
};