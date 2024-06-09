const scalePositions = {
    'A Major': [
        { string: '1', fret: '4' }, { string: '1', fret: '5' },
        { string: '2', fret: '5' }, { string: '2', fret: '7' },
        { string: '3', fret: '4' }, { string: '3', fret: '6' }, { string: '3', fret: '7' },
        { string: '4', fret: '4' }, { string: '4', fret: '6' }, { string: '4', fret: '7' },
        { string: '5', fret: '4' }, { string: '5', fret: '5' }, { string: '5', fret: '7' },
        { string: '6', fret: '5' }, { string: '6', fret: '7' }
    ],
    'G#/Ab Major': [
        { string: '1', fret: '3' }, { string: '1', fret: '4' },
        { string: '2', fret: '4' }, { string: '2', fret: '6' },
        { string: '3', fret: '3' }, { string: '3', fret: '5' }, { string: '3', fret: '6' },
        { string: '4', fret: '3' }, { string: '4', fret: '5' }, { string: '4', fret: '6' },
        { string: '5', fret: '3' }, { string: '5', fret: '4' }, { string: '5', fret: '6' },
        { string: '6', fret: '4' }, { string: '6', fret: '6' }
    ],
    'G Major': [
        { string: '1', fret: '2' }, { string: '1', fret: '3' },
        { string: '2', fret: '3' }, { string: '2', fret: '5' },
        { string: '3', fret: '2' }, { string: '3', fret: '4' }, { string: '3', fret: '5' },
        { string: '4', fret: '2' }, { string: '4', fret: '4' }, { string: '4', fret: '5' },
        { string: '5', fret: '2' }, { string: '5', fret: '3' }, { string: '5', fret: '5' },
        { string: '6', fret: '3' }, { string: '6', fret: '5' }
    ],
    'F#/Gb Major': [
        { string: '1', fret: '1' }, { string: '1', fret: '2' },
        { string: '2', fret: '2' }, { string: '2', fret: '4' },
        { string: '3', fret: '1' }, { string: '3', fret: '3' }, { string: '3', fret: '4' },
        { string: '4', fret: '1' }, { string: '4', fret: '3' }, { string: '4', fret: '4' },
        { string: '5', fret: '1' }, { string: '5', fret: '2' }, { string: '5', fret: '4' },
        { string: '6', fret: '2' }, { string: '6', fret: '4' }
    ],
    'A#/Bb Major': [
        { string: '1', fret: '5' }, { string: '1', fret: '6' },
        { string: '2', fret: '6' }, { string: '2', fret: '8' },
        { string: '3', fret: '5' }, { string: '3', fret: '7' }, { string: '3', fret: '8' },
        { string: '4', fret: '5' }, { string: '4', fret: '7' }, { string: '4', fret: '8' },
        { string: '5', fret: '5' }, { string: '5', fret: '6' }, { string: '5', fret: '8' },
        { string: '6', fret: '6' }, { string: '6', fret: '8' }
    ],
    'B Major': [
        { string: '1', fret: '6' }, { string: '1', fret: '7' },
        { string: '2', fret: '7' }, { string: '2', fret: '9' },
        { string: '3', fret: '6' }, { string: '3', fret: '8' }, { string: '3', fret: '9' },
        { string: '4', fret: '6' }, { string: '4', fret: '8' }, { string: '4', fret: '9' },
        { string: '5', fret: '6' }, { string: '5', fret: '7' }, { string: '5', fret: '9' },
        { string: '6', fret: '7' }, { string: '6', fret: '9' }
    ],
    'C Major': [
        { string: '1', fret: '7' }, { string: '1', fret: '8' },
        { string: '2', fret: '8' }, { string: '2', fret: '10' },
        { string: '3', fret: '7' }, { string: '3', fret: '9' }, { string: '3', fret: '10' },
        { string: '4', fret: '7' }, { string: '4', fret: '9' }, { string: '4', fret: '10' },
        { string: '5', fret: '7' }, { string: '5', fret: '8' }, { string: '5', fret: '10' },
        { string: '6', fret: '8' }, { string: '6', fret: '10' }
    ],
    'C#/Db Major': [
        { string: '1', fret: '8' }, { string: '1', fret: '9' },
        { string: '2', fret: '9' }, { string: '2', fret: '11' },
        { string: '3', fret: '8' }, { string: '3', fret: '10' }, { string: '3', fret: '11' },
        { string: '4', fret: '8' }, { string: '4', fret: '10' }, { string: '4', fret: '11' },
        { string: '5', fret: '8' }, { string: '5', fret: '9' }, { string: '5', fret: '11' },
        { string: '6', fret: '9' }, { string: '6', fret: '11' }
    ],
    'D Major': [
        { string: '1', fret: '9' }, { string: '1', fret: '10' },
        { string: '2', fret: '10' }, { string: '2', fret: '12' },
        { string: '3', fret: '9' }, { string: '3', fret: '11' }, { string: '3', fret: '12' },
        { string: '4', fret: '9' }, { string: '4', fret: '11' }, { string: '4', fret: '12' },
        { string: '5', fret: '9' }, { string: '5', fret: '10' }, { string: '5', fret: '12' },
        { string: '6', fret: '10' }, { string: '6', fret: '12' }
    ],
    'F minor': [
        { string: '1', fret: '1' }, 
        { string: '2', fret: '1' }, { string: '2', fret: '2' }, { string: '2', fret: '4' },
        { string: '3', fret: '0' }, { string: '3', fret: '1' }, { string: '3', fret: '3' }, 
        { string: '4', fret: '1' }, { string: '4', fret: '3' }, 
        { string: '5', fret: '1' }, { string: '5', fret: '3' }, { string: '5', fret: '4' },
        { string: '6', fret: '1' }, { string: '6', fret: '3' }, { string: '6', fret: '4' }
    ],
    'F#/Gb minor': [
        { string: '1', fret: '2' }, 
        { string: '2', fret: '2' }, { string: '2', fret: '3' }, { string: '2', fret: '5' },
        { string: '3', fret: '1' }, { string: '3', fret: '2' }, { string: '3', fret: '4' }, 
        { string: '4', fret: '2' }, { string: '4', fret: '4' }, 
        { string: '5', fret: '2' }, { string: '5', fret: '4' }, { string: '5', fret: '5' },
        { string: '6', fret: '2' }, { string: '6', fret: '4' }, { string: '6', fret: '5' }
    ],
    'G minor': [
        { string: '1', fret: '3' }, 
        { string: '2', fret: '3' }, { string: '2', fret: '4' }, { string: '2', fret: '6' },
        { string: '3', fret: '2' }, { string: '3', fret: '3' }, { string: '3', fret: '5' }, 
        { string: '4', fret: '3' }, { string: '4', fret: '5' }, 
        { string: '5', fret: '3' }, { string: '5', fret: '5' }, { string: '5', fret: '6' },
        { string: '6', fret: '3' }, { string: '6', fret: '5' }, { string: '6', fret: '6' }
    ],
    'G#/Ab minor': [
        { string: '1', fret: '4' }, 
        { string: '2', fret: '4' }, { string: '2', fret: '5' }, { string: '2', fret: '7' },
        { string: '3', fret: '3' }, { string: '3', fret: '4' }, { string: '3', fret: '6' }, 
        { string: '4', fret: '4' }, { string: '4', fret: '6' }, 
        { string: '5', fret: '4' }, { string: '5', fret: '6' }, { string: '5', fret: '7' },
        { string: '6', fret: '4' }, { string: '6', fret: '6' }, { string: '6', fret: '7' }
    ],
    'A minor': [
        { string: '1', fret: '5' }, 
        { string: '2', fret: '5' }, { string: '2', fret: '6' }, { string: '2', fret: '8' },
        { string: '3', fret: '4' }, { string: '3', fret: '5' }, { string: '3', fret: '7' }, 
        { string: '4', fret: '5' }, { string: '4', fret: '7' }, 
        { string: '5', fret: '5' }, { string: '5', fret: '7' }, { string: '5', fret: '8' },
        { string: '6', fret: '5' }, { string: '6', fret: '7' }, { string: '6', fret: '8' }
    ],
    'A#/Bb minor': [
        { string: '1', fret: '6' }, 
        { string: '2', fret: '6' }, { string: '2', fret: '7' }, { string: '2', fret: '9' },
        { string: '3', fret: '5' }, { string: '3', fret: '6' }, { string: '3', fret: '8' }, 
        { string: '4', fret: '6' }, { string: '4', fret: '8' }, 
        { string: '5', fret: '6' }, { string: '5', fret: '8' }, { string: '5', fret: '9' },
        { string: '6', fret: '6' }, { string: '6', fret: '8' }, { string: '6', fret: '9' }
    ],
    'B minor': [
        { string: '1', fret: '7' }, 
        { string: '2', fret: '7' }, { string: '2', fret: '8' }, { string: '2', fret: '10' },
        { string: '3', fret: '6' }, { string: '3', fret: '7' }, { string: '3', fret: '9' }, 
        { string: '4', fret: '7' }, { string: '4', fret: '9' }, 
        { string: '5', fret: '7' }, { string: '5', fret: '9' }, { string: '5', fret: '10' },
        { string: '6', fret: '7' }, { string: '6', fret: '9' }, { string: '6', fret: '10' }
    ],
    'C minor': [
        { string: '1', fret: '8' }, 
        { string: '2', fret: '8' }, { string: '2', fret: '9' }, { string: '2', fret: '11' },
        { string: '3', fret: '7' }, { string: '3', fret: '8' }, { string: '3', fret: '10' }, 
        { string: '4', fret: '8' }, { string: '4', fret: '10' }, 
        { string: '5', fret: '8' }, { string: '5', fret: '10' }, { string: '5', fret: '11' },
        { string: '6', fret: '8' }, { string: '6', fret: '10' }, { string: '6', fret: '11' }
    ],
    'C#/Db minor': [
        { string: '1', fret: '9' }, 
        { string: '2', fret: '9' }, { string: '2', fret: '10' }, { string: '2', fret: '12' },
        { string: '3', fret: '8' }, { string: '3', fret: '9' }, { string: '3', fret: '11' }, 
        { string: '4', fret: '9' }, { string: '4', fret: '11' }, 
        { string: '5', fret: '9' }, { string: '5', fret: '11' }, { string: '5', fret: '12' },
        { string: '6', fret: '9' }, { string: '6', fret: '11' }, { string: '6', fret: '12' }
    ],
};
export default scalePositions;
