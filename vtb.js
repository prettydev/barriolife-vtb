const customTransforms = {
  'test3': (obj, params) => {
    console.log(obj.src);
    console.log(obj.dst);
    console.log(params);
    return obj;
  },
  'appHero': (obj, params) => {
    if(obj.dst.cover[0] != undefined) {
      obj.dst.bannerImage = obj.dst.cover[0].url;
    }

    if(obj.dst.extraFieldValues[0]['fields'][0].value == 'logo1') {
      obj.dst.logoImage = 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/logo1.png';
    } else if (obj.dst.extraFieldValues[0]['fields'][0].value == 'logo2') {
      obj.dst.logoImage = 'https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/original/original/logo2.jpg';
    }
    
    obj.dst.title = obj.dst.title.trim();
    obj.dst.subTitle = obj.dst.subTitle;
    
    return obj;
  },
  'consultants': (obj, params) => {

    const consultData = [
      {
        name: "Wendy Jacobs",
        email: "",
        phone: "",
        title: "Marokko",
        picture: "https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/square/md/IMG_20180503_175719313.png"
      },
      {
        name: "Rikkert Barendse",
        email: "reisvoorstel@barrio-life.nl",
        phone: "(+31)-20 2214178",
        title: "Andalusië & Portugal",
        picture: "https://s3-eu-west-1.amazonaws.com/media.barrio-life.nl/original/original/IMG_20180503_175500598.png"
      }
    ];
    
    let finalConsultant = [];

    for (const extraFieldValue of obj.dst.extraFieldValues) {
      for (const field of extraFieldValue.fields) {
        if (field.name == "reisspecialist") {
          for (const j of consultData) {
            if (j.name.indexOf(field.value) !== -1) {
              finalConsultant.push(j);
            }
          }
        }
      }
    }
    //console.log('finalConsultant', finalConsultant);
    obj.dst.consultants = finalConsultant;
    return obj;
  }, 
  'map': (obj, params) => {

    const markers = [];
    let i = 1;
    for (const seg of obj.dst.segments) {
      for (const element of seg.elements) {
        if (element.maps) {
          
          if (element.maps.latitude) {
            Object.assign(element.maps, {title:element.title, id: i.toString()});
            markers.push(element.maps);
            i++;
          }
        }
      }
      
    }
    obj.dst.markers = markers;
    
    return obj;
  },
  'overview': (obj, params) => {
    
    if(obj.dst.cover[1] != undefined) {
      obj.dst.priceImage = obj.dst.cover[1].url;
    }

    for(const extraFieldValue of obj.dst.extraFieldValues) {
      for(const field of extraFieldValue.fields) {
        if (field.name == 'inclusief') {
          obj.dst.inclusive = field.value;
        }
        if (field.name == 'exclusief') {
          obj.dst.exclusive = field.value;
        }
        if (field.name == 'reissom') {
          obj.dst.price = field.value;
        }
      }
    }

    return obj;
  }
};

module.exports = customTransforms;
