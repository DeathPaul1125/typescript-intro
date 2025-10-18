
const skills: string[] = ['bash', 'counter-strike', 'hearthstone'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter-strike', 'hearthstone'],
    hometown: 'Bariloche'
};

strider.hometown = 'Rivendell';

console.table(strider);
export{};