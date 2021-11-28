function firstNonRepeatingLetter(s) {
    let m = s.split('');
    while (m.length) {
      if(!m.includes(m[0], 1) && !m.includes(m[0].toUpperCase(), 1)) 
        return m[0];
      m = m.filter(item => item != m[0] && item != m[0].toUpperCase()); 
    }
    return '';
  }

  console.log(firstNonRepeatingLetter('moonG,men'));