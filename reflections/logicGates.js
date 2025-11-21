// === logicGates.js ===
// Author: brforeal.dev@gmail.com
// Date: 05/09/2025
// Purpose: Generate and display truth tables for updated logic gates
// Context: Supports Cycle 6 (Connection) analysis, preparing for Cycle 7 (Rest)

// === Logic Gate Definitions ===
const Gates = {
  AND: (I1, I2) => I1 & I2,
  OR: (I1, I2) => I1 | I2,
  NOT: (I) => I === 0 ? 1 : 0,
  XOR: (I1, I2) => I1 ^ I2,
  NAND: (I1, I2) => Gates.NOT(Gates.AND(I1, I2)),
  NOR: (I1, I2) => Gates.NOT(Gates.OR(I1, I2)),
  XNOR: (I1, I2) => Gates.NOT(Gates.XOR(I1, I2)),
  IMPLIES: (I1, I2) => Gates.NOT(I1) | I2 // Logical implication: A → B = !A || B
};

// === Truth Table Generator ===
function generateTruthTable(gateName) {
  const table = [];
  const gate = Gates[gateName];

  if (gateName === 'NOT') {
    for (let I = 0; I <= 1; I++) {
      table.push({ I, O: gate(I) });
    }
  } else {
    for (let I1 = 0; I1 <= 1; I1++) {
      for (let I2 = 0; I2 <= 1; I2++) {
        table.push({ I1, I2, O: gate(I1, I2) });
      }
    }
  }

  return table;
}

// === Analysis Function ===
function analyzeTruthTable(truthTable) {
  const outputOnes = truthTable.filter(row => row.O === 1).length;
  const totalRows = truthTable.length;
  return {
    outputOnes,
    percentage: (outputOnes / totalRows) * 100
  };
}

// === Print Function ===
function printTruthTable(truthTable, gateName) {
  console.log(`\nTruth Table for ${gateName} Gate:`);
  
  if (gateName === 'NOT') {
    console.log('-'.repeat(20));
    console.log(' I    | O   ');
    console.log('-'.repeat(20));
    truthTable.forEach(({ I, O }) => console.log(` ${I}    | ${O}   `));
  } else {
    console.log('-'.repeat(30));
    console.log(' I1   | I2   | O   ');
    console.log('-'.repeat(30));
    truthTable.forEach(({ I1, I2, O }) => console.log(` ${I1}    | ${I2}    | ${O}   `));
  }

  // Summary Analysis
  const analysis = analyzeTruthTable(truthTable);
  console.log('\nSummary:');
  console.log(`- Output is 1 in ${analysis.outputOnes} out of ${truthTable.length} cases`);
  console.log(`- Percentage of 1 outputs: ${analysis.percentage.toFixed(2)}%`);
}

// === Main Execution Trigger ===
function onUpdate() {
  Object.keys(Gates).forEach(gate => {
    const table = generateTruthTable(gate);
    printTruthTable(table, gate);
  });
}

// === Stop/End Session ===
function onStop() {
  console.log("\n[STOP] Halting logic generation and evaluation.");
}

// === Run Update ===
onUpdate();
// onStop(); // Uncomment to simulate session stop

// === Export for React Integration ===
module.exports = {
  generateTruthTable,
  printTruthTable
};
  