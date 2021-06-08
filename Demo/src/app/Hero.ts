export class Hero {
    public id:number;
    public name: string;
    public description: string;
    public birthday: Date;
    constructor(id:number , name:string, description:string, birthday:Date){
      this.id = id;
      this.name = name;    
      this.description = description;
      this.birthday= birthday;
    }  

}

export const HEROES: Hero[] = [
    {
      id: 0,
      name: 'Narco',
      description: 'NA',
      birthday: new Date()
    },
    {
      id: 1,
      name: 'Magneta',
      description: 'shouldnt choose this ',
      birthday: new Date()

    },
    {
      id: 2,
      name: 'Tornado',
      description: 'I dont feel so good',
      birthday: new Date()

    },
    {
      id: 3,
      name: 'Travis',
      description: 'I dont feel so good',
      birthday: new Date()

    },
    {
      id: 4,
      name: 'Otto',
      description: 'aaaaa',
      birthday: new Date()

    },
    {
      id: 5,
      name: 'Bruce Lee',
      description: 'BBBBBBB',
      birthday: new Date()

    },
    {
      id: 6,
      name: 'Tornado Super Clone',
      description: 'NA',
      birthday: new Date()

    }
  ];
  