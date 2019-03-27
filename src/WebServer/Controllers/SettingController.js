const db = require('../../../database/database');

class SettingController {
    dialogflowIndex (req, res) {
        try{
            let dialogflow = db.get('settings.dialogflow').value();
            res.render('settings/dialoflow',{
                dialogflow: dialogflow
            });
        }catch(error) {
            console.log(error);
            res.redirect('/');
        }
    }

    dialogflowUpdate (req, res) {
        let { client_token } = req.body;
        try{
            db.set('settings.dialogflow.client_token', client_token).write();
            res.redirect('/settings/dialogflow');
        }catch(error) {
            console.log(error);
            res.redirect('/');
        }
    }

    hgweatherIndex (req, res) {
        try{
            let hgweather = db.get('settings.hgweather').value();
            res.render('settings/hgweather',{
                hgweather: hgweather
            });
        }catch(error) {
            console.log(error);
            res.redirect('/');
        }
    }

    hgweatherUpdate (req, res) {
        let { api_key, latitude, longitude } = req.body;
        try{
            db.set('settings.hgweather.api_key', api_key).write();
            db.set('settings.hgweather.latitude', latitude).write();
            db.set('settings.hgweather.longitude', longitude).write();
            res.redirect('/settings/hgweather');
        }catch(error) {
            console.log(error);
            res.redirect('/');
        }
    }
}
module.exports = new SettingController();