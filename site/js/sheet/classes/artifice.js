import { calcMod } from '../../utils.js';
import { char } from '../estado.js';
import { temClasse, nivelNa } from '../../regras-multiclasse.js';
import { dadosDe } from '../contexto-classe.js';

export function getEstadoRecursosArtifice() {
  if (!temClasse(char, 'Artífice')) return null;
  if (!char.recursos) char.recursos = {};
  if (!char.recursos.artifice) {
    char.recursos.artifice = {
      infusoes_gastas: 0
    };
  }

  const nivel = nivelNa(char, 'Artífice') || 1;
  const modInt = Math.max(1, calcMod(char.atributos.inteligencia));

  return {
    nivel,
    modInt
  };
}
