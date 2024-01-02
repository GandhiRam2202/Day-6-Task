//3 Write a “person” class to hold all the details.


class Resume {
    constructor(name, mobile, place, mail) {
      this.name = name;
      this.mobile = mobile;
      this.place = place;
        this.mail = mail;
    }
  
  
  
    getDetails() {
      
      console.log(`Name : ${this.name}`);
      console.log(`Mobile : ${this.mobilr}`);
      console.log(`Place :${this.place}`);
      console.log(`Mail :${this.mail}`);
    }

}
  
  const myDet = new Resume("Parthi", "82483537**", "CDM", "gandhiramparthi@gmail.com");

  const myDet1 = new Resume("Kalai", "88652537**", "CDM", "kalai@gmail.com");
  
myDet.getDetails();
myDet1.getDetails();