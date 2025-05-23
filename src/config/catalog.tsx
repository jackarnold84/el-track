export type TransitOption = {
  transitType: 'train' | 'bus';
  stopId: string;
  routes: string[];
};

export type Destination = {
  name: string;
  stopId: string;
};

export type Trip = {
  name: string;
  options: TransitOption[];
  destinations: Destination[];
};

export type TripCatalog = {
  [key: string]: Trip;
};

export type TripIndex = {
  outbound: string[];
  inbound: string[];
};

// Apply types to the existing data
export const tripIndex: TripIndex = {
  outbound: [
    "ashland-adams-northbound",
    "ashland-to-loop",
    "madison-ashland-eastbound",
    "clark-lake-northbound",
    "lake-northbound",
    "ashland-adams-southbound",
    "division-to-ohare",
    "ashland-to-midway",
    "jackson-ashland-eastbound",
  ],
  inbound: [
    "ashland-lake-southbound",
    "clark-lake-to-home",
    "state-lake-to-home",
    "madison-lasalle-westbound",
    "madison-wabash-westbound",
    "aon-center-westbound",
    "sedgwick-southbound",
    "belmont-southbound",
    "adison-southbound",
  ],
};

export const tripCatalog: TripCatalog = {
  // OUTBOUND

  "ashland-to-loop": {
    name: "Ashland to Loop",
    options: [
      {
        transitType: "train",
        stopId: "30032",
        routes: ["Pink", "Green"]
      }
    ],
    destinations: [
      { name: "Clark/Lake", stopId: "30074" },
      { name: "State/Lake", stopId: "30050" },
      { name: "Roosevelt", stopId: "30081" },
    ]
  },

  "clinton-to-loop": {
    name: "Clinton to Loop",
    options: [
      {
        transitType: "train",
        stopId: "30221",
        routes: ["Pink", "Green"]
      }
    ],
    destinations: [
      { name: "Clark/Lake", stopId: "30074" }
    ]
  },

  "ashland-adams-northbound": {
    name: "Ashland & Adams Northbound",
    options: [
      {
        transitType: "bus",
        stopId: "17177",
        routes: ["9"]
      },
      {
        transitType: "bus",
        stopId: "17076",
        routes: ["X9"]
      }
    ],
    destinations: [
      { name: "Ashland & Lake", stopId: "14783" },
      { name: "Ashland & Milwaukee", stopId: "6252" }
    ]
  },

  "ashland-adams-southbound": {
    name: "Ashland & Adams Southbound",
    options: [
      {
        transitType: "bus",
        stopId: "6040",
        routes: ["9"]
      },
      {
        transitType: "bus",
        stopId: "6041",
        routes: ["X9"]
      }
    ],
    destinations: [
      { name: "Ashland & Roosevelt", stopId: "6046" },
      { name: "Ashland Orange Line Station", stopId: "14476" }
    ]
  },

  "madison-ashland-eastbound": {
    name: "Madison & Laflin Eastbound",
    options: [
      {
        transitType: "bus",
        stopId: "15279",
        routes: ["20"]
      }
    ],
    destinations: [
      { name: "Washington & Clark", stopId: "18122" },
      { name: "Washington & Wabash", stopId: "449" },
      { name: "Michigan & Randolph", stopId: "1119" }
    ]
  },

  "division-to-ohare": {
    name: "Division to O'Hare",
    options: [
      {
        transitType: "train",
        stopId: "30062",
        routes: ["Blue"]
      }
    ],
    destinations: [
      { name: "O'Hare", stopId: "30171" }
    ]
  },

  "ashland-to-midway": {
    name: "Ashland to Midway",
    options: [
      {
        transitType: "train",
        stopId: "30206",
        routes: ["Orange"]
      }
    ],
    destinations: [
      { name: "Midway", stopId: "30182" }
    ]
  },

  "clark-lake-northbound": {
    name: "Clark/Lake Northbound",
    options: [
      {
        transitType: "train",
        stopId: "30075",
        routes: ["Brown", "Purple"]
      },
    ],
    destinations: [
      { name: "Sedgwick", stopId: "30155" },
      { name: "Armitage", stopId: "30127" },
      { name: "Belmont", stopId: "30257" }
    ]
  },

  "lake-northbound": {
    name: "Lake Northbound",
    options: [
      {
        transitType: "train",
        stopId: "30289",
        routes: ["Red"]
      },
    ],
    destinations: [
      { name: "Clark/Division", stopId: "30121" },
      { name: "Belmont", stopId: "30255" },
      { name: "Addison", stopId: "30273" }
    ]
  },

  "jackson-ashland-eastbound": {
    name: "Jackson & Ashland Eastbound",
    options: [
      {
        transitType: "bus",
        stopId: "55",
        routes: ["126"]
      },
      {
        transitType: "bus",
        stopId: "51",
        routes: ["126"]
      }
    ],
    destinations: [
      { name: "Jackson & Clinton", stopId: "14484" }
    ]
  },

  // INBOUND

  "clark-lake-to-home": {
    name: "Clark/Lake To Home",
    options: [
      {
        transitType: "train",
        stopId: "30075",
        routes: ["Green"]
      },
      {
        transitType: "train",
        stopId: "30074",
        routes: ["Pink"]
      }
    ],
    destinations: [
      { name: "Ashland", stopId: "30033" },
    ]
  },

  "ashland-lake-southbound": {
    name: "Ashland & Lake Southbound",
    options: [
      {
        transitType: "bus",
        stopId: "6035",
        routes: ["9", "X9"]
      },
    ],
    destinations: [
      { name: "Ashland & Adams", stopId: "6040" },
    ]
  },

  "state-lake-to-home": {
    name: "State/Lake To Home",
    options: [
      {
        transitType: "train",
        stopId: "30051",
        routes: ["Green"]
      },
      {
        transitType: "train",
        stopId: "30050",
        routes: ["Pink"]
      }
    ],
    destinations: [
      { name: "Ashland", stopId: "30033" },
    ]
  },

  "madison-lasalle-westbound": {
    name: "Madison & LaSalle Westbound",
    options: [
      {
        transitType: "bus",
        stopId: "18123",
        routes: ["20"]
      }
    ],
    destinations: [
      { name: "Madison & Laflin", stopId: "464" },
    ]
  },

  "madison-wabash-westbound": {
    name: "Madison & Wabash Westbound",
    options: [
      {
        transitType: "bus",
        stopId: "450",
        routes: ["20"]
      }
    ],
    destinations: [
      { name: "Madison & Laflin", stopId: "464" },
    ]
  },

  "aon-center-westbound": {
    name: "Aon Center Westbound",
    options: [
      {
        transitType: "bus",
        stopId: "8613",
        routes: ["20"]
      }
    ],
    destinations: [
      { name: "Madison & Laflin", stopId: "464" },
    ]
  },

  "sedgwick-southbound": {
    name: "Sedgwick Southbound",
    options: [
      {
        transitType: "train",
        stopId: "30156",
        routes: ["Brown", "Purple"]
      },
    ],
    destinations: [
      { name: "Clark/Lake", stopId: "30075" },
    ]
  },

  "belmont-southbound": {
    name: "Belmont Southbound",
    options: [
      {
        transitType: "train",
        stopId: "30258",
        routes: ["Brown", "Purple"]
      },
    ],
    destinations: [
      { name: "Clark/Lake", stopId: "30075" },
    ]
  },

  "adison-southbound": {
    name: "Addison Southbound",
    options: [
      {
        transitType: "train",
        stopId: "30274",
        routes: ["Red"]
      },
    ],
    destinations: [
      { name: "Lake", stopId: "30290" },
    ]
  }
};
