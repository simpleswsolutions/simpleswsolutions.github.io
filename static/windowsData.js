'use strict';

(function (global) {

    var costsData = {

        platform: 'Windows',

        title: 'Windows Universal Application effort estimation',
        subtitle: 'We have it almost down to a science...',
        paragraphs: [
            'Over the years we have developed an uncanny sense for estimating project effort.',
            'We start by breaking down a mobile project by the total number of screens and go from there.',
            'We then feed all sorts of other parameters into our backend "meat grinder" to spit out an approximate sizing of the effort.',
            "The results are usually right on the money, but at the very least you get to determine the magnitude of your project's effort; is this a $10K, $100K, or $1M project?",
            'To use this tool please visit each section and carefully select the parameters that best apply to your particular application, then press the button that appears after the last section.',
            'Sections for which we provide default values are initially expanded while all others are collapsed.'
        ],
        annotations: 'Please feel free to use the provided text areas to include comments about each section as needed.',

        // Types: 0=Input, 1=CB, 2=RB, 3=Dropdown
        // label: text on the left
        // description: text on the right
        // values: values for dropdown elements

        specifics: {
            heading: '',
            listItems: [
                'webpack',
                'redux',
                'react-router',
                'fetch'
            ],
            footer: 'na'
        },

        sections: [
            {
                // 1
                name: 'contact',
                open: true,
                title: 'Tell us about yourself',
                description: 'Please specify a valid email and your first name to enable the Calculate project effort ' +
                '            button located at the end of this page. We will send the estimated effort ' +
                '            results to the email address you provide here. If you would like us to' +
                '            contact you by phone please leave a number where we can reach you.',
                items: [
                    {
                        name: 'email',
                        label: 'Email',
                        description: '',
                        type: 0,
                        inputRequired: true
                    },
                    {
                        name: 'firstName',
                        label: 'First Name',
                        description: '',
                        type: 0,
                        inputRequired: true
                    },
                    {
                        name: 'lastName',
                        label: 'Last Name',
                        description: '',
                        type: 0,
                        inputRequired: false
                    },
                    {
                        name: 'phoneNumber',
                        label: 'Phone Number',
                        description: '',
                        type: 0,
                        inputRequired: false
                    }
                ]
            },
            {
                // 3
                name: 'clientResources',
                open: true,
                title: 'Client resources',
                description: 'Use this section to let us know whether you already have defined' +
                '            resources that will help us expedite the developing process of' +
                '            your application.',
                items: [
                    {
                        name: 'wireframes',
                        label: 'Do you have wire frames?',
                        description: 'Wire frames expedite the process',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'database',
                        label: 'Do you have a Database architecture?',
                        description: 'Having a data model moves things along',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'graphicalAssets',
                        label: 'Do you have all graphical assets?',
                        description: 'Bitmaps, vectors, fonts, etc.',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'portingExistingApp',
                        label: 'Are we porting an existing app?',
                        description: "Meaning, you've done all the thinking...",
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 4
                name: 'applicationStructure',
                open: true,
                title: 'Application structure',
                description: 'This section provides the calculator with basic information' +
                '            about your application structure such as the number of screens,' +
                '            number of table views, web views utilized by the application, etc.',
                items: [
                    {
                        name: 'screens',
                        label: 'Details screens',
                        description: 'Simple screens that display information',
                        type: 3, // 3=Dropdown
                        values: [1, 3, 5, 10, 15, 20],
                        defaultValue: 3
                    },
                    {
                        name: 'inputScreens',
                        label: 'Input data screens',
                        description: 'Screens that collect data from the user',
                        type: 3, // 3=Dropdown
                        values: [1, 3, 5, 10, 15, 20],
                        defaultValue: 3
                    },
                    {
                        name: 'editScreens',
                        label: 'Data editing screens',
                        description: 'Screens to edit existign data, forms',
                        type: 3, // 3=Dropdown
                        values: [1, 3, 5, 10, 15, 20],
                        defaultValue: 3
                    },
                    {
                        name: 'tabsInTabViewController',
                        label: 'Tabs in TabViewController',
                        description: 'Number of tabs in TabView controller',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 2, 3, 4, 5, 10],
                        defaultValue: 3
                    },
                    {
                        name: 'tableViews',
                        label: 'Simple Table Views',
                        description: 'Simple table views',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'editTableViews',
                        label: 'Editable Table Views',
                        description: 'Editable table views in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'collectionViews',
                        label: 'Simple Collection Views',
                        description: 'Simple collection views in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'editCollectionViews',
                        label: 'Editable Collection Views',
                        description: 'Editable collection views in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'webViews',
                        label: 'Simple Web Views',
                        description: 'Simple web views in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'complexWebViews',
                        label: 'Complex Web Views',
                        description: 'Complex web views in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    }
                ]
            },
            {
                // 5
                name: 'applicationArtifacts',
                open: true,
                title: 'Application artifacts',
                description: 'Use this section to more finely specify pickers and controls required by the' +
                '            application. This information is valuable in computing the total effort to' +
                '            implement your application.',
                items: [
                    {
                        name: 'datePickers',
                        label: 'Date Pickers',
                        description: 'Date picker instances in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'customPickers',
                        label: 'Custom Pickers',
                        description: 'Custom pickers in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'imagePickers',
                        label: 'Image Pickers',
                        description: 'Image pickers in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'modalPickers',
                        label: 'Modal Pickers',
                        description: 'Modal pickers in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'simpleCustomControls',
                        label: 'Simple Custom Controls',
                        description: 'Relatively simple user controls',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 3
                    },
                    {
                        name: 'advancedCustomControls',
                        label: 'Advanced Custom Controls',
                        description: 'User controls of higher complexity',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 1
                    },
                    {
                        name: 'sliderControls',
                        label: 'Slider Controls',
                        description: 'Slider controls in app',
                        type: 3, // 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    }
                ]
            },
            {
                // 6
                name: 'applicationStandardization',
                open: true,
                title: 'Standardization',
                description: 'In this section you tell us whether your app is theme-able,' +
                '            how many foreign languages it must support, and other' +
                '            details that are important in calculating the total effort.',
                items: [
                    {
                        name: 'simpleThemes',
                        label: 'Simple themes',
                        description: 'Set of colors and fonts in app',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'advancedThemes',
                        label: 'Advanced themes',
                        description: 'Backgrounds, icons, etc. used in app',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'timeZones',
                        label: 'World Time Zones handling',
                        description: 'Is your app sensitive to world times?',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'localization',
                        label: 'Localization',
                        description: 'Number of localized languages',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 2, 3, 4, 5, 10, 12],
                        defaultValue: 1
                    },
                    {
                        name: 'fileAndFolders',
                        label: 'File Management',
                        description: 'Does app handle files and folders?',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'simpleInterAppCommunication',
                        label: 'Simple Inter-App Communication',
                        description: 'Simple interactions with other apps',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'advancedInterAppCommunication',
                        label: 'Advanced Inter-App Communication',
                        description: 'Complex interactions with other apps',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 7
                name: 'applicationBehaviors',
                open: false,
                title: 'Application behaviors',
                description: 'This section covers more esoteric features and behaviors of your application' +
                '            such as views that require drag & drop operations or views that recognize' +
                '            special gestures and perform animations.',
                items: [
                    {
                        name: 'dragAndDrop',
                        label: 'Views with Drag & Drop',
                        description: 'Views that require Drag & Drop',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'multitouchAndGestures',
                        label: 'Gesture recognizers',
                        description: 'Number of distinct gesture recognizers',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'simpleAnimations',
                        label: 'Simple Animations',
                        description: 'Views requiring simple animations',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'advancedAnimations',
                        label: 'Advanced Animations',
                        description: 'Views requiring advanced animations',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    }
                ]
            },
            {
                // 8
                name: 'socialSharing',
                open: false,
                title: 'Social sharing',
                description: 'In this section you specify whether your app sharing information' +
                '            with existing social networks.',
                items: [
                    {
                        name: 'facebook',
                        label: 'Facebook',
                        description: 'Shares with Facebook',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'twitter',
                        label: 'Twitter',
                        description: 'Shares with Twitter',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'instagram',
                        label: 'Instagram',
                        description: 'Shares with Instagram',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'linkedIn',
                        label: 'LinkedIn',
                        description: 'Shares with LinkedIn',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 9
                name: 'applicationMediaHandling',
                open: false,
                title: 'Media handling',
                description: 'Does your app support video and/or audio playback? Does it' +
                '            capture video and/or audio. This would' +
                '            be the place to inform the calculator about those features.',
                items: [
                    {
                        name: 'audioPlaying',
                        label: 'Audio playing',
                        description: 'Plays audio content',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'audioCapturing',
                        label: 'Audio capturing',
                        description: 'Captures audio content',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'videoPlaying',
                        label: 'Video playing',
                        description: 'Plays video content',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'videoCapturing',
                        label: 'Video capturing',
                        description: 'Captures video content',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 10
                name: 'deviceCapabilities',
                open: false,
                title: 'Device Capabilities',
                description: 'What device capabilities does your app require? Tell the calculator in this section...',
                items: [
                    {
                        name: 'geoLocation',
                        label: 'Geo location (Maps)',
                        description: 'Implements geo location features',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'contacts',
                        label: 'Contacts',
                        description: 'Interfaces with local contacts',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'camera',
                        label: 'Camera and Photo Library',
                        description: 'Interfaces with camera',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'calendars',
                        label: 'Calendars',
                        description: 'Interfaces with local calendar',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'gps',
                        label: 'GPS',
                        description: 'Interfaces with GPS API',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'accelerometer',
                        label: 'Accelerometer & gyroscope',
                        description: 'Supports accelerometer / gyroscope',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'microphone',
                        label: 'Microphone',
                        description: 'Interfaces with microphone',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 11
                name: 'applicationInteractions',
                open: false,
                title: 'Application interactions',
                description: 'In this section you tell us whether your application sends out text' +
                '            messages, makes phone calls, or sends out emails, among other things.',
                items: [
                    {
                        name: 'calls',
                        label: 'Makes calls',
                        description: 'Places phone calls',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'sms',
                        label: 'Sends SMS',
                        description: 'Sends out text messages',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'emails',
                        label: 'Sends emails',
                        description: 'Sends out emails',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'cortana',
                        label: 'Interface with Cortana',
                        description: 'Interfaces with Cortana',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 12
                name: 'data',
                open: true,
                title: 'Data Handling',
                description: 'Use this section to inform the behind-the-scenes number-cruncher' +
                '            how your application uses data. Based on the approximate number' +
                '            of tables and entities and other details, we can produce a more' +
                '            accurate effort estimation.',
                items: [
                    {
                        name: 'useLocalStorage',
                        label: 'Use Local Storage',
                        description: 'Implement local storage functionality',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'tablesInLocalDB',
                        label: 'Tables in Local Database',
                        description: 'Number of tables in local database',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 3
                    },
                    {
                        name: 'entitiesInCoreData',
                        label: 'Entities in Core Data',
                        description: 'Number of entities in the data',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 3
                    },
                    {
                        name: 'localUserSettings',
                        label: 'Local User Settings',
                        description: 'Locally manages user settings',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    },
                    {
                        name: 'networkUserSettings',
                        label: 'Network User Settings',
                        description: 'Manages user settings in the cloud',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: false
                    }
                ]
            },
            {
                // 13
                name: 'clientQueriesToWS',
                open: true,
                title: 'Client RESTful calls',
                description: "We have found that an average application makes a minimum of 5" +
                "            REST calls of each type to the backend server. Some make" +
                "            more, others make none. Use this section to express your" +
                "            application's needs in this area. Note that this section describes the" +
                "            client-side of a RESTful call, the server-side is covered in the Backend REST API" +
                "            section below.",
                items: [
                    {
                        name: 'getQueries',
                        label: 'Number of GET requests',
                        description: 'Number of requests to GET data',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    },
                    {
                        name: 'postQueries',
                        label: 'Number of POST requests',
                        description: 'Number of requests to POST data',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    },
                    {
                        name: 'putQueries',
                        label: 'Number of PUT requests',
                        description: 'Number of requests to PUT data',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    },
                    {
                        name: 'deleteQueries',
                        label: 'Number of DELETE requests',
                        description: 'Number of requests to DELETE data',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    }
                ]
            },
            {
                // 14
                name: 'networkHandling',
                open: false,
                title: 'Network file handling',
                description: "Some applications upload files, others download files, some do both, while" +
                "            some do neither. Specify your app's requirements in this section so we can" +
                "            arrive at a more accurate effort estimation." +
                "            section below.",
                items: [
                    {
                        name: 'queriesForUploadingFiles',
                        label: 'File upload requests',
                        description: 'Instances of file upload operations',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'queriesForDownloadingFiles',
                        label: 'File download requests',
                        description: 'Instances of file download operations',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'queriesForAudioStreaming',
                        label: 'Audio streaming requests',
                        description: 'Instances of audio streaming operations',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    },
                    {
                        name: 'queriesForVideoStreaming',
                        label: 'Video streaming requests',
                        description: 'Instances of video streaming operations',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 0
                    }
                ]
            },
            {
                // 15
                name: 'webServiceApi',
                open: true,
                title: 'Backend REST API',
                description: "This section is about your application's backend, which we assume to be a" +
                "            Node JS implementation." +
                "            Note that this section is likely to closely" +
                "            correlate to section 12 above.",
                items: [
                    {
                        name: 'getQueries',
                        label: 'Number of GET requests',
                        description: 'Number of GET requests',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    },
                    {
                        name: 'postQueries',
                        label: 'Number of POST requests',
                        description: 'Number of POST requests',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    },
                    {
                        name: 'putQueries',
                        label: 'Number of PUT requests',
                        description: 'Number of PUT requests',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    },
                    {
                        name: 'deleteQueries',
                        label: 'Number of DELETE requests',
                        description: 'Number of DELETE requests',
                        type: 3, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        values: [0, 1, 3, 5, 10, 15, 20],
                        defaultValue: 5
                    }
                ]
            },
            {
                // 16
                name: 'applicationTesting',
                open: true,
                title: 'Application Testing',
                description: 'Use this section to tell us your how much automated testing your app requires.',
                items: [
                    {
                        name: 'uiTesting',
                        label: 'UI testing',
                        description: 'Implement UI testing',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'clientUnitTesting',
                        label: 'Client side unit testing',
                        description: 'Unit testing of client API',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    },
                    {
                        name: 'serverUnitTesting',
                        label: 'Server side unit testing',
                        description: 'Unit testing of server API',
                        type: 1, // 0=Input, 1=CB, 2=RB, 3=Dropdown
                        defaultValue: true
                    }
                ]
            }
        ],

        calcSection: {
            open: true,
            title: 'Effort calculation results',
            description: 'This section shows the results of performing the calculations' +
            '            given the parameters you specified for your project. We estimate' +
            '            the effort for up to five programmers taking into account that adding' +
            '            programmers to a project does not produce a linear increase in overall' +
            '            productivity.'
        },

        results: {
            programmers: '1',
            weeks: '1',
            hours: '68'
        },

        footer: ''
    };

    global.costsData = costsData;

})(window);
