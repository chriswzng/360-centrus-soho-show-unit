var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-entrance",
      "name": "Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.75667106798198,
        "pitch": -0.007006216249074271,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": 0.46871617638114316,
          "pitch": 0.10164792843072412,
          "rotation": 0,
          "target": "1-toilet"
        },
        {
          "yaw": 1.6925157211040434,
          "pitch": 0.083728459048654,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9484819199720143,
          "pitch": -0.08532310346446081,
          "title": "Security",
          "text": "24-hour security with CCTV &amp; vehicle access card management system"
        }
      ]
    },
    {
      "id": "1-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.40411084988485335,
        "pitch": 0.059552838117085116,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": 2.7055101525613923,
          "pitch": 0.14816676453807887,
          "rotation": 0,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9285914023291078,
        "pitch": 0.006549648422662813,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": -0.9752106641142309,
          "pitch": 0.0729896050875034,
          "rotation": 0.7853981633974483,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.017976441283483524,
        "pitch": -0.05233582263507586,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": 2.170600151689472,
          "pitch": 0.07018777194923231,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -0.33775033485980543,
          "pitch": 0.04011474326345876,
          "rotation": 0,
          "target": "4-living-room-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-room-view-1",
      "name": "Living room view 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5160361561236542,
        "pitch": -0.025248876602542936,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -0.1899052917837416,
          "pitch": -0.0023186064514018057,
          "rotation": 0,
          "target": "6-curtain-drawn"
        },
        {
          "yaw": 2.8210931818477523,
          "pitch": 0.1607165787453777,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -1.107559865788744,
          "pitch": 0.03800494126955911,
          "rotation": 0,
          "target": "5-living-room-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-room-view-2",
      "name": "Living room view 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6007989524725303,
          "pitch": 0.2311630032294012,
          "rotation": 0,
          "target": "4-living-room-view-1"
        },
        {
          "yaw": -2.461417839323035,
          "pitch": 0.16043429363667094,
          "rotation": 0,
          "target": "7-staircase-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-curtain-drawn",
      "name": "Curtain Drawn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.014944274510813926,
        "pitch": 0.0028226163864424336,
        "fov": 1.5588831154178566
      },
      "linkHotspots": [
        {
          "yaw": 3.0656546806078957,
          "pitch": 0.174166254968668,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -2.676162882185473,
          "pitch": 0.15062558102580148,
          "rotation": 0,
          "target": "7-staircase-bottom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5145110448651877,
          "pitch": -0.287292629245794,
          "title": "Major Landmarks",
          "text": "Resorts &amp; Hotels (Cyberview Resort &amp; Spa, Tune &amp; Citadines Hotel)<br><br>Walking Distance to DPulse &amp; NSK Supermarket (completion in 2020)<br><br>Numerous shops over 180 F&amp;B outlets and eateries<br><br>Multimedia Universities | Cyberjaya University College of Medical Sciences | University Islam Malaysia | Lim Kok Wing University | ELC International School | Seri Puteri Boarding School"
        }
      ]
    },
    {
      "id": "7-staircase-bottom",
      "name": "Staircase bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.054793692912817,
        "pitch": -0.21674284032035018,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 2.5581942979750094,
          "pitch": 0.0008032187545854441,
          "rotation": 0,
          "target": "4-living-room-view-1"
        },
        {
          "yaw": -1.2665394490457178,
          "pitch": -0.3312636870674588,
          "rotation": 4.71238898038469,
          "target": "8-staircase-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-staircase-middle",
      "name": "Staircase middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.9446581186943437,
        "pitch": 0.010720266349020235,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 1.7354800628001188,
          "pitch": 0.7213623522270893,
          "rotation": 0,
          "target": "7-staircase-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-staircase-top",
      "name": "Staircase top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0548323155328507,
        "pitch": 0.06966701419337262,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.5413607954858044,
          "pitch": 0.1479773972771845,
          "rotation": 1.5707963267948966,
          "target": "10-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-work-area",
      "name": "Work area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.4029355034686066,
        "pitch": 0.015153214502898749,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.4698971560399201,
          "pitch": 0.26010909227527,
          "title": "High speed broadband",
          "text": "Centrus SOHO supports high speed internet broadband of 100Mbps"
        }
      ]
    },
    {
      "id": "11-bedroom-entrance",
      "name": "Bedroom entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.6864700111400843,
        "pitch": -0.06869768216262884,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": -2.0687218162665175,
          "pitch": 0.15824741812309462,
          "rotation": 0.7853981633974483,
          "target": "12-toilet-upstairs"
        },
        {
          "yaw": 2.6334142683670807,
          "pitch": 0.07499857817720823,
          "rotation": 0,
          "target": "13-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-toilet-upstairs",
      "name": "Toilet upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.46236951609357924,
        "pitch": -0.038135403824510306,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 2.2061946442130296,
          "pitch": 0.1200910185746551,
          "rotation": 1.5707963267948966,
          "target": "11-bedroom-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-view-1",
      "name": "Bedroom view 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.0871438075913478,
        "pitch": 0.03845931670488234,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 2.245851116537466,
          "pitch": 0.08321081296338662,
          "rotation": 4.71238898038469,
          "target": "11-bedroom-entrance"
        },
        {
          "yaw": -1.4851547528001205,
          "pitch": 0.021948199686157466,
          "rotation": 3.141592653589793,
          "target": "14-bedroom-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-view-2",
      "name": "Bedroom view 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.375716246553541,
        "pitch": 0.013709355307351956,
        "fov": 1.5023066394006492
      },
      "linkHotspots": [
        {
          "yaw": 1.40075756507132,
          "pitch": 0.13687323752596114,
          "rotation": 1.5707963267948966,
          "target": "13-bedroom-view-1"
        },
        {
          "yaw": 2.0418363661055254,
          "pitch": 0.09668692048751382,
          "rotation": 4.71238898038469,
          "target": "11-bedroom-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Centrus Soho Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
