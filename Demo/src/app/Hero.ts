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
  //   constructor(data: Partial<Hero>) {
  //     Object.assign(this, data);
  // }
}

export const Heroes: Hero[] = [
    {
      id: 0,
      name: 'Narco',
      description: 'NA',
      birthday: new Date()
    },
    {
      id: 1,
      name: 'Magneta',
      description: 'Skill null',
      birthday: new Date()

    },
    {
      id: 2,
      name: 'Tornado',
      description: 'NA',
      birthday: new Date()

    },
    {
      id: 3,
      name: 'Travis',
      description: 'NA',
      birthday: new Date()

    },
    {
      id: 4,
      name: 'Otto',
      description: 'NA',
      birthday: new Date()

    },
    {
      id: 5,
      name: 'Bruce Lee',
      description: 'NA',
      birthday: new Date()

    },
    {
      id: 6,
      name: 'Tornado Super Clone',
      description: 'NA',
      birthday: new Date()

    }
  ];
  