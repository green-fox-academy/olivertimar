class Thing {
  name: string;
  completed: boolean = false;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }
}

export { Thing };

