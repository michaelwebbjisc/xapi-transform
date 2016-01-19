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
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedout/",
        "display": {
            "en": "logged out of"
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
                }
            ]
        },
        "platform": "Moodle",
        "language": "en",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log": {
                "eventname": "\\core\\event\\user_loggedout",
                "component": "core",
                "action": "loggedout",
                "objecttable": "user",
                "objectid": "3",
                "crud": "r",
                "contextid": 1,
                "contextlevel": 10,
                "userid": "3",
                "other": "a:1:{s:9:\"sessionid\";s:26:\"74v3jdh5ld2ps3eaearq3re7j5\";}",
                "timecreated": 1453205044,
                "origin": "web",
                "ip": "86.156.130.212",
                "object": "user"
            },
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://moodle.org/": "2.8.9+ (Build: 20151110)",
                "https://github.com/LearningLocker/Moodle-Log-Expander": "0.4.2",
                "https://github.com/LearningLocker/Moodle-xAPI-Translator": "0.4.1",
                "https://github.com/LearningLocker/xAPI-Recipe-Emitter": "0.4.3"
            }
        }
    },
    "timestamp": "2016-01-19T12:04:04+00:00",
    "object": {
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
    "authority": {
        "objectType": "Agent",
        "name": "Moodle",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-19T12:00:41.884500+00:00",
    "id": "6b41a5ea-b6bd-415d-aeb7-b8c11c42ec98"
}
