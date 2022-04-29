// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

//P: string (dna)
//R: change T's to U's in RNA
//E: given "TTTT", result "UUUU"
//   given "GCAT", result "GCAU"
//   given "GACCGCCGCC", result "GACCGCCGCC"
//PC: create a function that changes T to U with loop and and conditioanl
function DNAtoRNA(dna) {
    let rna = ''
    for (let i=0;i<dna.length;i++){
      if (dna[i]=='T') {rna += 'U'}
    else {rna += dna[i]}
    }  
    return rna
}

//OR 

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}