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
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en": "logged in to"
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
                "eventname": "\\core\\event\\user_loggedin",
                "component": "core",
                "action": "loggedin",
                "objecttable": "user",
                "objectid": "3",
                "crud": "r",
                "contextid": 1,
                "contextlevel": 10,
                "userid": "3",
                "other": "a:1:{s:8:\"username\";s:8:\"demouser\";}",
                "timecreated": 1453204740,
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
    "timestamp": "2016-01-19T11:59:00+00:00",
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
    "stored": "2016-01-19T11:55:38.129900+00:00",
    "id": "e0c4cd4b-3581-4bb0-b4ae-befc602ae7d9"
}