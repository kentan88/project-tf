module.exports = [
  {
    "id": 1,
    "title": "Fetch Materials",
    "groupTitleColor": "#0000FF",
    "itemTitleColor": "#4169e1",
  },
  {
    "id": 2,
    "parents": [1],
    "title": "VPC 1 Dev",
  },
  {
    "id": 3,
    "parents": [1],
    "title": "VPC 2 Dev",
  },
  {
    "id": 4,
    "parents": [1],
    "title": "VPC 3 Dev",
  },
  {
    "id": 5,
    "parents": [2],
    "title": "VPC 1 Stack 1 Dev",
  },
  {
    "id": 6,
    "parents": [2],
    "title": "VPC 1 Stack 2 Dev",
  },
  {
    "id": 7,
    "parents": [3],
    "title": "VPC 2 Stack 1 Dev",
  },
  {
    "id": 8,
    "parents": [3],
    "title": "VPC 2 Stack 2 Dev",
  },
  {
    "id": 9,
    "parents": [4],
    "title": "VPC 3 Stack 1 Dev",
  },
  {
    "id": 10,
    "parents": [4],
    "title": "VPC 3 Stack 2 Dev",
  },
  {
    "id": 11,
    "parents": [5, 6, 7, 8, 9, 10],
    "title": "Common Stack Dev",
  },







  {
    "id": 20,
    "parents": [11],
    "title": "VPC 1 Staging",
  },
  {
    "id": 30,
    "parents": [11],
    "title": "VPC 2 Staging",
  },
  {
    "id": 40,
    "parents": [11],
    "title": "VPC 3 Staging",
  },
  {
    "id": 50,
    "parents": [20],
    "title": "VPC 1 Stack 1 Staging",
  },
  {
    "id": 60,
    "parents": [20],
    "title": "VPC 1 Stack 2 Staging",
  },
  {
    "id": 70,
    "parents": [30],
    "title": "VPC 2 Stack 1 Staging",
  },
  {
    "id": 80,
    "parents": [30],
    "title": "VPC 2 Stack 2 Staging",
  },
  {
    "id": 90,
    "parents": [40],
    "title": "VPC 3 Stack 1 Staging",
  },
  {
    "id": 100,
    "parents": [40],
    "title": "VPC 3 Stack 2 Staging",
  },
  {
    "id": 1100,
    "parents": [50, 60, 70, 80, 90, 100],
    "title": "Common Stack Staging",
  },









  {
    "id": 200,
    "parents": [1100],
    "title": "VPC 1 Prod",
  },
  {
    "id": 300,
    "parents": [1100],
    "title": "VPC 2 Prod",
  },
  {
    "id": 400,
    "parents": [1100],
    "title": "VPC 3 Prod",
  },
  {
    "id": 500,
    "parents": [200],
    "title": "VPC 1 Stack 1 Prod",
  },
  {
    "id": 600,
    "parents": [200],
    "title": "VPC 1 Stack 2 Prod",
  },
  {
    "id": 700,
    "parents": [300],
    "title": "VPC 2 Stack 1 Prod",
  },
  {
    "id": 800,
    "parents": [300],
    "title": "VPC 2 Stack 2 Prod",
  },
  {
    "id": 900,
    "parents": [400],
    "title": "VPC 3 Stack 1 Prod",
  },
  {
    "id": 1000,
    "parents": [400],
    "title": "VPC 3 Stack 2 Prod",
  },
  {
    "id": 11000,
    "parents": [500, 600, 700, 800, 900, 1000],
    "title": "Common Stack Prod",
  }
]