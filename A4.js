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
                "eventname": "\\mod_url\\event\\course_module_viewed",
                "component": "mod_url",
                "action": "viewed",
                "objecttable": "url",
                "objectid": "1",
                "crud": "r",
                "edulevel": 2,
                "contextid": 34,
                "contextlevel": 70,
                "contextinstanceid": "6",
                "userid": "3",
                "courseid": "3",
                "other": "N;",
                "timecreated": 1453204798,
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
    "timestamp": "2016-01-19T11:59:58+00:00",
    "object": {
        "objectType": "Activity",
        "id": "http://moodle.data.alpha.jisc.ac.uk/mod/url/view.php?id=6",
        "definition": {
            "type": "http://lrs.learninglocker.net/define/type/moodle/url",
            "name": {
                "en": "A Demo URL"
            },
            "description": {
                "en": "<p>A demo URL for xAPI</p>"
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Moodle",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-19T11:56:36.378100+00:00",
    "id": "4db46785-b07e-4a0c-82c4-c0006076b659"
}