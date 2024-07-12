export const fetchLyricsSuggestions = async (songConcept) => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Lyrics suggestion 1 for " + songConcept,
        "Lyrics suggestion 2 for " + songConcept,
        "Lyrics suggestion 3 for " + songConcept,
      ]);
    }, 1000);
  });
};

export const fetchChordProgressions = async (genre) => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Chord progression 1 for " + genre,
        "Chord progression 2 for " + genre,
        "Chord progression 3 for " + genre,
      ]);
    }, 1000);
  });
};

export const fetchViralityMetrics = async (songConcept) => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Virality metric 1 for " + songConcept,
        "Virality metric 2 for " + songConcept,
        "Virality metric 3 for " + songConcept,
      ]);
    }, 1000);
  });
};