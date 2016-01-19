{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "maherne",
        "account": {
            "name": "34",
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
                "objectid": "459",
                "crud": "r",
                "edulevel": 2,
                "contextid": 1219,
                "contextlevel": 70,
                "contextinstanceid": "578",
                "userid": "34",
                "courseid": "20",
                "other": "N;",
                "timecreated": 1452859165,
                "origin": "web",
                "ip": "130.159.130.244",
                "object": "course_module"
            }
        }
    },
    "timestamp": "2016-01-15T11:59:25+00:00",
    "object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=578",
        "definition": {
            "type": "http://adlnet.gov/expapi/activities/module",
            "name": {
                "en-GB": "END_DATE",
                "en-US": "END_DATE"
            },
            "description": {
                "en-GB": "A module",
                "en-US": "A module"
            },
            "extensions": {
                "http://lrs.learninglocker.net/define/extensions/moodle_module": {
                    "id": "459",
                    "course": "20",
                    "name": "END_DATE",
                    "intro": "",
                    "introformat": "1",
                    "content": "<p><b style=\"font-size: 16px;\">Description</b></p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><span style=\"color: #000000; font-family: Arial, Calibri, Verdana, sans-serif, Courier; font-size: 12.4px; line-height: 18.6px;\">End date for this course instance</span></p>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; line-height: 20px; color: #333333; text-rendering: optimizeLegibility; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b>Purpose</b></h5>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><span style=\"font-size: 12.3999996185303px; line-height: 18.6000003814697px;\">For analytics</span></p>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; line-height: 20px; color: #333333; text-rendering: optimizeLegibility; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b>Derivation</b></h5>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><span style=\"font-size: 12.3999996185303px; line-height: 18.6000003814697px;\"><a href=\"https://www.hesa.ac.uk/component/studrec/show_file/14051/a%5E_%5ELEARNDIF.html\" style=\"color: #0070a8; text-decoration: none;\">J</a>isc</span></p>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; line-height: 20px; color: #333333; text-rendering: optimizeLegibility; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b>Valid Values</b></h5>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333; text-rendering: optimizeLegibility; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><span style=\"font-size: 12.3999996185303px; font-weight: normal; line-height: 18.6000003814697px;\">Date in ISO8601 format - YYYY-MM-DD</span></h5>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; line-height: 20px; color: #333333; text-rendering: optimizeLegibility; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b>Format</b></h5>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b><b style=\"color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><span style=\"color: #000000; font-family: Arial, Calibri, Verdana, sans-serif, Courier; font-size: 12.3999996185303px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 18.6000003814697px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; background-color: #ffffff;\">String (255)</span></b></b></p>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; line-height: 20px; color: #333333; text-rendering: optimizeLegibility; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b>Compulsory</b></h5>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><span style=\"font-size: 12.3999996185303px; line-height: 18.6000003814697px;\">Yes</span></p>\n<h5 style=\"margin: 10px 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold; line-height: 20px; color: #333333; text-rendering: optimizeLegibility; font-size: 16px; font-style: normal; font-variant: normal; letter-spacing: normal; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff;\"><b>Notes</b></h5>",
                    "contentformat": "1",
                    "legacyfiles": "0",
                    "legacyfileslast": null,
                    "display": "5",
                    "displayoptions": "a:2:{s:12:\"printheading\";s:1:\"1\";s:10:\"printintro\";s:1:\"0\";}",
                    "revision": "5",
                    "timemodified": "1446119756",
                    "url": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=578"
                }
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Test",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-15T12:00:18.578200+00:00",
    "id": "86b94b94-6864-49f7-b40f-6dae072702d8"
}
