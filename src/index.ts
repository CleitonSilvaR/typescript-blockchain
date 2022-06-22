import { Blockchain } from "./blockchain";

const dificuldade: number = Number(process.argv[2]) || 4;
const blockchain: Blockchain = new Blockchain(dificuldade);

const numBlocos: number = Number(process.argv[3]) || 10;
let chain: any = blockchain.chain;

for (let i = 1; i <= numBlocos; i++) {
  const bloco = blockchain.criarBloco(`Bloco ${i}`);
  const mineInfo = blockchain.minerarBloco(bloco);
  chain = blockchain.enviarBloco(mineInfo.blocoMinerado);
}

console.log("--- GENERATED CHAIN ---\n");
console.log(chain);
