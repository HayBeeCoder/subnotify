/*input ---> '2025-03-16T17:20:21.400Z'
 output ----> '2025-03-16'
*/
export default function getOnlyDateNothingElse(longassDateString: string) {
  return longassDateString?.split('T')[0]
}
