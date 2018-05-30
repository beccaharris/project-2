'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Breeds', 
  [{
      name: 'Doberman Pinscher',
      personality: 'Alert, fearless, loyal',
      size: 4,
      activity_level: 5,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 1,
      shedding: 4,
      trainability: 1
    },{
      name: 'Redbone Coonhound',
      personality: 'Even-Tempered, amiable, eager to please',
      size: 4,
      activity_level: 3,
      barking_level: 5,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 1,
      shedding: 2,
      trainability: 2
    },{
      name: 'Chow Chow',
      personality: 'Serious-Minded, bright, dignified',
      size: 3,
      activity_level: 3,
      barking_level: 2,
      hypoallergenic: 0,
      good_with_kids: 3,
      good_with_dogs: 0,
      shedding: 2,
      trainability: 4
    },{
      name: 'German Shepherd Dog',
      personality: 'Smart, confident, courageous',
      size: 4,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 5,
      shedding: 4,
      trainability: 1
    },{
      name: 'American Staffordshire Terrier',
      personality: 'Smart, confident, good-natured',
      size: 3,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 3,
      trainability: 3
    },{
      name: 'Great Dane',
      personality: 'Friendly, patient, dependable',
      size: 5,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 2,
      trainability: 3
    },{
      name: 'Bloodhound',
      personality: 'Independent, inquisitive, friendly',
      size: 4,
      activity_level: 3,
      barking_level: 5,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 2,
      trainability: 5
},{
      name: 'Chihuahua',
      personality: 'Graceful, charming, sassy',
      size: 1,
      activity_level: 2,
      barking_level: 5,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 3,
      trainability: 5
 },{
      name: 'Affenpinscher',
      personality: 'Confident, famously funny, fearless',
      size: 1,
      activity_level: 2,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 2,
      trainability: 2
    },{
      name: 'Pug',
      personality: 'Loving, charming, mischievous',
      size: 2,
      activity_level: 2,
      barking_level: 2,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 4,
      trainability: 3
    },{
      name: 'Yorkshire Terrier',
      personality:'Sprightly, tomboyish, affectionate',
      size: 1,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 1,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 4
    },{
      name: 'Saint Bernard',
      personality: 'Inquisitive, playful, charming',
      size: 5,
      activity_level: 3,
      barking_level: 2,
      hypoallergenic: 0,
      good_with_kids: 2,
      good_with_dogs: 2,
      shedding: 5,
      trainability: 3
    },{
      name:'Labrador Retriever',
      personality:'Friendly, avtive, outgoing',
      size: 4,
      activity_level: 5,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 5,
      trainability: 1
    },{
      name:'Pointer',
      personality:'Even-tempered, hardworking, loyal',
      size: 4,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 3,
      trainability: 3
    },{
      name:'Otterhound',
      personality: 'Amiable, boisterous, even-tempered',
      size: 4,
      activity_level: 3,
      barking_level: 4,
      hypoallergenic: 0,
      good_with_kids: 3,
      good_with_dogs: 2,
      shedding: 3,
      trainability: 4
    },{
      name:'Greater Swiss Mountain Dog',
      personality: 'Faithful, dependable, family-oriented',
      size: 5,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 3
    },{
      name:'Rhodesian Ridgeback',
      personality:'Dignified, even-tempered, affectionate',
      size: 4,
      activity_level: 3,
      barking_level: 1,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 3
    },{
      name:'Papillon',
      personality:'Happy, alert, friendly',
      size: 1,
      activity_level: 3,
      barking_level: 4,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 1
    },{
      name:'Newfoundland',
      personality:'Sweet, devoted, patient',
      size: 5,
      activity_level: 3,
      barking_level: 2,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 5,
      trainability: 2
    },{
      name:'Bichon Frise',
      personality:'Playful, Curious, peppy',
      size: 2,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 1,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 3
    },{
      name:'Poodle',
      personality:'Proud, active, very smart',
      size: 3,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 1,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 1
    },{
      name:'Xoloitzciuntli',
      personality:'Loyal, alert, calm',
      size: 3,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 1,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 3
    },{
      name:'Soft Coated Wheaten Terrier',
      personality:'Happy, friendly, deeply devoted',
      size: 3,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 1,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 5
    },{
      name:'Portuguese Water Dog',
      personality: 'Affectionate, athletic, adventurous',
      size: 3,
      activity_level: 4,
      barking_level:3,
      hypoallergenic: 1,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 2
    },{
      name:'Maltese',
      personality:'Gentle, playful, charming',
      size: 1,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 1,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 3
    },{
      name:'Saint Bernard',
      personality:'Inquisitive, playful, charming',
      size: 5,
      activity_level: 3,
      barking_level: 2,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 5,
      trainability: 3
    },{
      name:'Puli',
      personality:'Loyal, smart, home-loving',
      size: 3,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 1,
      trainability: 5
    },{
      name:'Old English Sheepdog',
      personality:'Adaptable, smart, gentle',
      size: 4,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 5
    },{
      name: 'Shiba Inu',
      personality:'Alert, active, attentive',
      size: 2,
      activity_level: 3,
      barking_level: 4,
      hypoallergenic: 0,
      good_with_kids: 3,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 5
    },{
      name:'Shetland Sheepdog',
      personality:'Bright, playful, energetic',
      size: 2,
      activity_level: 1,
      barking_level: 5,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 3,
      trainability: 1
    },{
      name:'Dachshund',
      personality:'Spunky, curious, friendly',
      size: 2,
      activity_level: 3,
      barking_level: 4,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 2,
      shedding: 3,
      trainability: 3
    },{
      name:'Rottweiler',
      personality:'Loyal, loving, confident guardian',
      size: 4,
      activity_level: 3,
      barking_level: 2,
      hypoallergenic: 0,
      good_with_kids: 3,
      good_with_dogs: 1,
      shedding: 3,
      trainability: 3
    },{
      name: 'Vizsla',
      personality:'Gentle, affectionate, energetic',
      size: 3,
      activity_level: 4,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 2,
      shedding: 2,
      trainability: 1
    },{
      name:'Dogue De Bordeaux',
      personality:'Loyal, affectionate, courageous',
      size: 3,
      activity_level: 3,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 4,
      good_with_dogs: 1,
      shedding: 4,
      trainability: 3
    },{
      name:'French Bulldog',
      personality:'Playful, smart, adaptable',
      size: 2,
      activity_level: 2,
      barking_level: 3,
      hypoallergenic: 0,
      good_with_kids: 5,
      good_with_dogs: 3,
      shedding: 4,
      trainability: 3
    }],
  )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', {
        name: 'John Doe',
        isBetaMember: false
      }, {});
    */
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Breeds', null, {});
  }
};
