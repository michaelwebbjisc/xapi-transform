```javascript{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "mwebb",
        "account": {
            "name": "18",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
    "verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-GB": "viewed",
            "en-US": "viewed"
        }
    },
    "context": {
        "contextActivities": {
            "grouping": [
                {
                    "objectType": "Activity",
                    "id": "https://courses.alpha.jisc.ac.uk/moodle/course.php?id=20",
                    "definition": {
                        "type": "http://adlnet.gov/expapi/activities/course",
                        "name": {
                            "en-GB": "LA204-C: Unified Student Data Definitions (Alpha 1.1)",
                            "en-US": "LA204-C: Unified Student Data Definitions (Alpha 1.1)"
                        },
                        "description": {
                            "en-GB": "A Moodle course",
                            "en-US": "A Moodle course"
                        },
                        "extensions": {
                            "http://lrs.learninglocker.net/define/extensions/moodle_course": {
                                "id": "20",
                                "category": "2",
                                "sortorder": "20006",
                                "fullname": "LA204-C: Unified Student Data Definitions (Alpha 1.1)",
                                "shortname": "LA204-C Unified Student Data Definitions v1.1",
                                "idnumber": "LA204-C",
                                "summary": "",
                                "summaryformat": "1",
                                "format": "topics",
                                "showgrades": "1",
                                "newsitems": "5",
                                "startdate": "1448582400",
                                "marker": "0",
                                "maxbytes": "0",
                                "legacyfiles": "0",
                                "showreports": "0",
                                "visible": "1",
                                "visibleold": "1",
                                "groupmode": "0",
                                "groupmodeforce": "0",
                                "defaultgroupingid": "0",
                                "lang": "",
                                "calendartype": "",
                                "theme": "",
                                "timecreated": "1448476808",
                                "timemodified": "1448480494",
                                "requested": "0",
                                "enablecompletion": "0",
                                "completionnotify": "0",
                                "cacherev": "1448618855",
                                "url": "https://courses.alpha.jisc.ac.uk/moodle/course.php?id=20"
                            }
                        }
                    }
                }
            ]
        },
        "platform": "Moodle",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log": {
                "eventname": "\\mod_page\\event\\course_module_viewed",
                "component": "mod_page",
                "action": "viewed",
                "objecttable": "page",
                "objectid": "424",
                "crud": "r",
                "edulevel": 2,
                "contextid": 1183,
                "contextlevel": 70,
                "contextinstanceid": "542",
                "userid": "18",
                "courseid": "20",
                "other": "N;",
                "timecreated": 1452859132,
                "origin": "web",
                "ip": "195.195.140.33",
                "object": "course_module"
            }
        }
    },
    "timestamp": "2016-01-15T11:58:52+00:00",
    "object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=542",
        "definition": {
            "type": "http://adlnet.gov/expapi/activities/module",
            "name": {
                "en-GB": "Overview of the data model",
                "en-US": "Overview of the data model"
            },
            "description": {
                "en-GB": "A module",
                "en-US": "A module"
            },
            "extensions": {
                "http://lrs.learninglocker.net/define/extensions/moodle_module": {
                    "id": "424",
                    "course": "20",
                    "name": "Overview of the data model",
                    "intro": "",
                    "introformat": "1",
                    "content": "<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\">The purpose of the data model is to provide a common way of describing students. \u00a0The model borrows concepts and defin</span><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\">itions from HESA (HE) and ILR or equivalent (FE), so much of the data and transformations should be familiar to institutions. \u00a0The model is extended to introduce the concept of 'course instance' and 'module instance'. \u00a0A instance is version of a course or module running at a particular time, and is needed for analytics in order to allow comparisons between cohorts and delivery types (eg full-time vs part-time, or face-to-face vs online).</span></p>\r\n<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\"><img src=\"@@PLUGINFILE@@/V2%20-%20Learning%20Analytics%20Data%20Model.jpg\" width=\"1251\" height=\"678\" /></span></p>\r\n<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\"></span></p>\r\n<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\"></span></p>\r\n<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\"></span></p>\r\n<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\"></span></p>\r\n<p><span style=\"color: #2c3841; font-family: 'Stag Sans Web Light', HelveticaNeue-Light, 'Helvetica Neue Light', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 27px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: #ffffff;\"></span></p>",
                    "contentformat": "1",
                    "legacyfiles": "0",
                    "legacyfileslast": null,
                    "display": "5",
                    "displayoptions": "a:2:{s:12:\"printheading\";s:1:\"1\";s:10:\"printintro\";s:1:\"0\";}",
                    "revision": "3",
                    "timemodified": "1448478759",
                    "url": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=542"
                }
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Test",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-15T11:59:45.717300+00:00",
    "id": "631edccb-eae8-4377-b6f0-8f0413b6e0b9"
}
```