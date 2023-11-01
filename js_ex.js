//exercice :1

const somme=(a, b)=> {
    return a + b;
  }
  let resultat1 = somme(1, 3);
  console.log(resultat1);
  
  // excercice 2:
  
  const minute=(m)=> {
    return m * 60;
  }
  let resultat2 = minute(6);
  console.log(resultat2);
  
  // exercice 3:
  const nombre=(n)=> {
    return n + 1;
  }
  let resultat3 = nombre(6);
  console.log(resultat3);
  
  // exercice 4:
  const triangle=(b, h)=> {
    return (b * h) / 2;
  }
  let surface = triangle(7, 3);
  
  console.log(surface);
  
  // exercice 5 :
  
  // une fuction qui permet de renverser une chaine de caratcter
  const renverser=(chaine)=> {
    let chaineIverser = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
      chaineIverser += chaine[i];
    }
    return chaineIverser;
  }
  
  let resultat4 = renverser("kamal");
  console.log(resultat4);
  
  // exercice 6:
  
  const grande=(a, b, c)=> {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
  let resultat5 = grande(10, 9, 7);
  console.log(resultat5);
  
  // exercice : 7
  const tableau=(nbr)=> {
    return nbr[0];
  }
  let resultat6 = tableau([30, 20, 50, 40]);
  console.log(resultat6);
  
  // exercice : 8
  // let url = window.location.href;
  // console.log(url);
  // exercice : 9
  
  const reste=(nbr1, nbr2)=> {
    if (nbr2 == 0) {
      return "impossible de deviser a zero";
    }
    return nbr1 % nbr2;
  }
  let resultat7 = reste(9000, 7);
  console.log(resultat7);