jQuery( function() {
    jQuery . jqplot(
        'jqPlot',
        [
            [ [ 15, 'PHP' ], [ 60, 'WordPress' ], [ 50, 'JavaScript' ], [ 85, 'CSS' ], [ 90, 'HTML' ] ]
        ],
        {
            seriesColors:[ '#A342D4' ,'#5232F0', '#E4F032', '#32CAF0', '#F03232'],
            animate: true,
            axes: {
                yaxis: {
                    renderer: jQuery . jqplot . CategoryAxisRenderer,
                }
            },
            seriesDefaults: {
                renderer: jQuery . jqplot . BarRenderer,
                rendererOptions: {
                    barDirection: 'horizontal',
                    varyBarColor: true
                }
            },
            highlighter: {
                show: true,
                showMarker: false,
                tooltipLocation: 'e',
                tooltipAxes: 'x',
                formatString: '　%s　'
            }
        }
    );
} );


jQuery( function() {
    jQuery . jqplot(
        'jqPlot2',
        [
            [ [ 80, 'XD' ], [ 95, 'DreamWeaver' ], [ 75, 'Photoshop' ], [ 77, 'Illustrator' ] ]
        ],
        {
            seriesColors:[ '#F34BDE', '#1EFD2D', '#1EABFD', '#FD7F1E'],
            animate: true,
            axes: {
                yaxis: {
                    renderer: jQuery . jqplot . CategoryAxisRenderer,
                }
            },
            seriesDefaults: {
                renderer: jQuery . jqplot . BarRenderer,
                rendererOptions: {
                    barDirection: 'horizontal',
                    varyBarColor: true
                }
            },
            highlighter: {
                show: true,
                showMarker: false,
                tooltipLocation: 'e',
                tooltipAxes: 'x',
                formatString: '　%s　'
            }
        }
    );
} );




