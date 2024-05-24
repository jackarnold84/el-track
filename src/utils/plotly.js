// Common plotly utilities
// use:
// layout = {args, ...plotlyLayout}
// config = {args, ...plotlyConfig}

export const plotlyProps = {
  style: { width: "100%", height: "100%" },
  useResizeHandler: true
}

export const plotlyConfig = {
  displayModeBar: false,
  showTips: false,
  responsive: true,
};

const plotlySimpleWhiteTemplate = {
  "data": {
    "barpolar": [{
      "marker": {
        "line": {
          "color": "white",
          "width": 0.5
        },
        "pattern": {
          "fillmode": "overlay",
          "size": 10,
          "solidity": 0.2
        }
      },
      "type": "barpolar"
    }],
    "bar": [{
      "error_x": {
        "color": "rgb(36,36,36)"
      },
      "error_y": {
        "color": "rgb(36,36,36)"
      },
      "marker": {
        "line": {
          "color": "white",
          "width": 0.5
        },
        "pattern": {
          "fillmode": "overlay",
          "size": 10,
          "solidity": 0.2
        }
      },
      "type": "bar"
    }],
    "carpet": [{
      "aaxis": {
        "endlinecolor": "rgb(36,36,36)",
        "gridcolor": "white",
        "linecolor": "white",
        "minorgridcolor": "white",
        "startlinecolor": "rgb(36,36,36)"
      },
      "baxis": {
        "endlinecolor": "rgb(36,36,36)",
        "gridcolor": "white",
        "linecolor": "white",
        "minorgridcolor": "white",
        "startlinecolor": "rgb(36,36,36)"
      },
      "type": "carpet"
    }],
    "choropleth": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "type": "choropleth"
    }],
    "contourcarpet": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "type": "contourcarpet"
    }],
    "contour": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "colorscale": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "type": "contour"
    }],
    "heatmapgl": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "colorscale": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "type": "heatmapgl"
    }],
    "heatmap": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "colorscale": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "type": "heatmap"
    }],
    "histogram2dcontour": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "colorscale": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "type": "histogram2dcontour"
    }],
    "histogram2d": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "colorscale": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "type": "histogram2d"
    }],
    "histogram": [{
      "marker": {
        "line": {
          "color": "white",
          "width": 0.6
        }
      },
      "type": "histogram"
    }],
    "mesh3d": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "type": "mesh3d"
    }],
    "parcoords": [{
      "line": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "parcoords"
    }],
    "pie": [{
      "automargin": true,
      "type": "pie"
    }],
    "scatter3d": [{
      "line": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scatter3d"
    }],
    "scattercarpet": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scattercarpet"
    }],
    "scattergeo": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scattergeo"
    }],
    "scattergl": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scattergl"
    }],
    "scattermapbox": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scattermapbox"
    }],
    "scatterpolargl": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scatterpolargl"
    }],
    "scatterpolar": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scatterpolar"
    }],
    "scatter": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scatter"
    }],
    "scatterternary": [{
      "marker": {
        "colorbar": {
          "outlinewidth": 1,
          "tickcolor": "rgb(36,36,36)",
          "ticks": "outside"
        }
      },
      "type": "scatterternary"
    }],
    "surface": [{
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      },
      "colorscale": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "type": "surface"
    }],
    "table": [{
      "cells": {
        "fill": {
          "color": "rgb(237,237,237)"
        },
        "line": {
          "color": "white"
        }
      },
      "header": {
        "fill": {
          "color": "rgb(217,217,217)"
        },
        "line": {
          "color": "white"
        }
      },
      "type": "table"
    }]
  },
  "layout": {
    "annotationdefaults": {
      "arrowhead": 0,
      "arrowwidth": 1
    },
    "autotypenumbers": "strict",
    "coloraxis": {
      "colorbar": {
        "outlinewidth": 1,
        "tickcolor": "rgb(36,36,36)",
        "ticks": "outside"
      }
    },
    "colorscale": {
      "diverging": [
        [0.0, "rgb(103,0,31)"],
        [0.1, "rgb(178,24,43)"],
        [0.2, "rgb(214,96,77)"],
        [0.3, "rgb(244,165,130)"],
        [0.4, "rgb(253,219,199)"],
        [0.5, "rgb(247,247,247)"],
        [0.6, "rgb(209,229,240)"],
        [0.7, "rgb(146,197,222)"],
        [0.8, "rgb(67,147,195)"],
        [0.9, "rgb(33,102,172)"],
        [1.0, "rgb(5,48,97)"]
      ],
      "sequential": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ],
      "sequentialminus": [
        [0.0, "#440154"],
        [0.1111111111111111, "#482878"],
        [0.2222222222222222, "#3e4989"],
        [0.3333333333333333, "#31688e"],
        [0.4444444444444444, "#26828e"],
        [0.5555555555555556, "#1f9e89"],
        [0.6666666666666666, "#35b779"],
        [0.7777777777777778, "#6ece58"],
        [0.8888888888888888, "#b5de2b"],
        [1.0, "#fde725"]
      ]
    },
    "colorway": ["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD", "#8C564B", "#E377C2", "#7F7F7F", "#BCBD22", "#17BECF"],
    "font": {
      "family": "Source Sans Pro",
      "color": "rgb(36,36,36)",
      "size": "16"
    },
    "geo": {
      "bgcolor": "white",
      "lakecolor": "white",
      "landcolor": "white",
      "showlakes": true,
      "showland": true,
      "subunitcolor": "white"
    },
    "hoverlabel": {
      "align": "left"
    },
    "hovermode": "closest",
    "mapbox": {
      "style": "light"
    },
    "paper_bgcolor": "white",
    "plot_bgcolor": "white",
    "polar": {
      "angularaxis": {
        "gridcolor": "rgb(232,232,232)",
        "linecolor": "rgb(36,36,36)",
        "showgrid": false,
        "showline": true,
        "ticks": "outside"
      },
      "bgcolor": "white",
      "radialaxis": {
        "gridcolor": "rgb(232,232,232)",
        "linecolor": "rgb(36,36,36)",
        "showgrid": false,
        "showline": true,
        "ticks": "outside"
      }
    },
    "scene": {
      "xaxis": {
        "backgroundcolor": "white",
        "gridcolor": "rgb(232,232,232)",
        "gridwidth": 2,
        "linecolor": "rgb(36,36,36)",
        "showbackground": true,
        "showgrid": false,
        "showline": true,
        "ticks": "outside",
        "zeroline": false,
        "zerolinecolor": "rgb(36,36,36)"
      },
      "yaxis": {
        "backgroundcolor": "white",
        "gridcolor": "rgb(232,232,232)",
        "gridwidth": 2,
        "linecolor": "rgb(36,36,36)",
        "showbackground": true,
        "showgrid": false,
        "showline": true,
        "ticks": "outside",
        "zeroline": false,
        "zerolinecolor": "rgb(36,36,36)"
      },
      "zaxis": {
        "backgroundcolor": "white",
        "gridcolor": "rgb(232,232,232)",
        "gridwidth": 2,
        "linecolor": "rgb(36,36,36)",
        "showbackground": true,
        "showgrid": false,
        "showline": true,
        "ticks": "outside",
        "zeroline": false,
        "zerolinecolor": "rgb(36,36,36)"
      }
    },
    "shapedefaults": {
      "fillcolor": "black",
      "line": {
        "width": 0
      },
      "opacity": 0.3
    },
    "ternary": {
      "aaxis": {
        "gridcolor": "rgb(232,232,232)",
        "linecolor": "rgb(36,36,36)",
        "showgrid": false,
        "showline": true,
        "ticks": "outside"
      },
      "baxis": {
        "gridcolor": "rgb(232,232,232)",
        "linecolor": "rgb(36,36,36)",
        "showgrid": false,
        "showline": true,
        "ticks": "outside"
      },
      "bgcolor": "white",
      "caxis": {
        "gridcolor": "rgb(232,232,232)",
        "linecolor": "rgb(36,36,36)",
        "showgrid": false,
        "showline": true,
        "ticks": "outside"
      }
    },
    "title": {
      "x": 0.05
    },
    "xaxis": {
      "automargin": true,
      "gridcolor": "rgb(232,232,232)",
      "linecolor": "rgb(36,36,36)",
      "showgrid": false,
      "showline": true,
      "ticks": "outside",
      "title": {
        "standoff": 15
      },
      "zeroline": false,
      "zerolinecolor": "rgb(36,36,36)"
    },
    "yaxis": {
      "automargin": true,
      "gridcolor": "rgb(232,232,232)",
      "linecolor": "rgb(36,36,36)",
      "showgrid": false,
      "showline": true,
      "ticks": "outside",
      "title": {
        "standoff": 15
      },
      "zeroline": false,
      "zerolinecolor": "rgb(36,36,36)"
    }
  }
}

export const plotlyLayout = {
  template: plotlySimpleWhiteTemplate,
  margin: { t: 10, b: 10, l: 10, r: 10 },
  dragmode: false,
  xaxis: { fixedrange: true },
  yaxis: { fixedrange: true },
}
