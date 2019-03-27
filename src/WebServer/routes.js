const router = require('express').Router();
const IndexController = require('./Controllers/IndexController');
const SettingController = require('./Controllers/SettingController');

router.get("/", IndexController.index);

//dialogflow
router.get('/settings/dialogflow', SettingController.dialogflowIndex);
router.post('/settings/dialogflow', SettingController.dialogflowUpdate);

//hgweather
router.get('/settings/hgweather', SettingController.hgweatherIndex);
router.post('/settings/hgweather', SettingController.hgweatherUpdate);

module.exports = router;