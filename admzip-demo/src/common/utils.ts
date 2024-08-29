


export function generateRandomCode(codeLen = 10, caseSensitive = true): string {
  const chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ];
  let code = '';
  for(let i = 0; i < codeLen; i++){
    const random: number = Math.random();
    const index = Math.floor(chars.length * random);
    let char = chars[index];
    if(caseSensitive){
      if(random < 0.5){
        char = char.toLowerCase();
      }
    }
    code += char;
  }
  return code;
}

export function isInScf(): boolean{
  return process.env.TENCENTCLOUD_RUNENV === 'SCF';
}


