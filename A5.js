{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "demouser",
        "account": {
            "name": "3",
            "homePage": "http://moodle.data.alpha.jisc.ac.uk"
        }
    },
    "verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en": "viewed"
        }
    },
    "context": {
        "contextActivities": {
            "grouping": [
                {
                    "objectType": "Activity",
                    "id": "http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=1",
                    "definition": {
                        "type": "http://lrs.learninglocker.net/define/type/moodle/course",
                        "name": {
                            "en": "University of Jisc Moodle"
                        },
                        "description": {
                            "en": "A Moodle course"
                        }
                    }
                },
                {
                    "objectType": "Activity",
                    "id": "http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=3",
                    "definition": {
                        "type": "http://lrs.learninglocker.net/define/type/moodle/course",
                        "name": {
                            "en": "D101 Demo Course"
                        },
                        "description": {
                            "en": "A Moodle course"
                        }
                    }
                }
            ]
        },
        "platform": "Moodle",
        "language": "en",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log": {
                "eventname": "\\mod_resource\\event\\course_module_viewed",
                "component": "mod_resource",
                "action": "viewed",
                "objecttable": "resource",
                "objectid": "1",
                "crud": "r",
                "edulevel": 2,
                "contextid": 35,
                "contextlevel": 70,
                "contextinstanceid": "7",
                "userid": "3",
                "courseid": "3",
                "other": "N;",
                "timecreated": 1453204818,
                "origin": "web",
                "ip": "86.156.130.212",
                "object": "course_module"
            },
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://moodle.org/": "2.8.9+ (Build: 20151110)",
                "https://github.com/LearningLocker/Moodle-Log-Expander": "0.4.2",
                "https://github.com/LearningLocker/Moodle-xAPI-Translator": "0.4.1",
                "https://github.com/LearningLocker/xAPI-Recipe-Emitter": "0.4.3"
            }
        }
    },
    "timestamp": "2016-01-19T12:00:18+00:00",
    "object": {
        "objectType": "Activity",
        "id": "http://moodle.data.alpha.jisc.ac.uk/mod/resource/view.php?id=7",
        "definition": {
            "type": "http://lrs.learninglocker.net/define/type/moodle/resource",
            "name": {
                "en": "A Word Document"
            },
            "description": {
                "en": "<p>A demo word document for xAPI</p>"
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Moodle",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-19T11:56:55.865300+00:00",
    "id": "3d5211a6-3a46-41c3-b200-75037f63c0d2"
}