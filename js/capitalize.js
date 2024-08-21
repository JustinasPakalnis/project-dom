/**
 * Trumpas funkcijos veikimo paskirties aprasas. Gautas tekstas performatuojama taip kad visos raides tampa mazosiomis iskyrus pirmos tampa didziosiomis.
 * @param {string} TekstasTrysTukstanciai Ivesties duomuo
 * @returns performatuotas tekstas.
 */
export function capitalize(TekstasTrysTukstanciai) {
  return TekstasTrysTukstanciai.split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
