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
                },
                {
                    "objectType": "Activity",
                    "id": "http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=4",
                    "definition": {
                        "type": "http://lrs.learninglocker.net/define/type/moodle/forum",
                        "name": {
                            "en": "Demo Forum"
                        },
                        "description": {
                            "en": "<p>A demo forum for XAPI</p>"
                        }
                    }
                }
            ]
        },
        "platform": "Moodle",
        "language": "en",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log": {
                "eventname": "\\mod_forum\\event\\discussion_viewed",
                "component": "mod_forum",
                "action": "viewed",
                "objecttable": "forum_discussions",
                "objectid": "1",
                "crud": "r",
                "edulevel": 2,
                "contextid": 32,
                "contextlevel": 70,
                "contextinstanceid": "4",
                "userid": "3",
                "courseid": "3",
                "other": "N;",
                "timecreated": 1453204900,
                "origin": "web",
                "ip": "86.156.130.212",
                "object": "discussion"
            },
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://moodle.org/": "2.8.9+ (Build: 20151110)",
                "https://github.com/LearningLocker/Moodle-Log-Expander": "0.4.2",
                "https://github.com/LearningLocker/Moodle-xAPI-Translator": "0.4.1",
                "https://github.com/LearningLocker/xAPI-Recipe-Emitter": "0.4.3"
            }
        }
    },
    "timestamp": "2016-01-19T12:01:40+00:00",
    "object": {
        "objectType": "Activity",
        "id": "http://moodle.data.alpha.jisc.ac.uk/mod/forum/discuss.php?d=1",
        "definition": {
            "type": "http://lrs.learninglocker.net/define/type/moodle/forum_discussions",
            "name": {
                "en": "New discussion"
            },
            "description": {
                "en": "A Moodle discussion."
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Moodle",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-19T11:58:18.006200+00:00",
    "id": "1ddfa8da-0a97-4257-9b07-b0419a49d5c2"
}