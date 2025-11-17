//
let companyDetails = {
  companyName:'JAFS',
  employes:[
    {name:'Anto'},
    {name:'Franklin'},
  ]
};

// let newDetails = companyDetails;
let newDetails = {...companyDetails};

 console.log('Before update', companyDetails)
 console.log('Before update', newDetails)
 
 companyDetails.companyName='AJFS';
 companyDetails.employes[0].name='anto1';
 
 console.log('After update',companyDetails)
 console.log('After update',newDetails)  // while print this using spread operator company name is primitive type so it do deep copy ,
 //  employes is refernce type it keep aray so it do shallow copy

//here deep copy stores primitive data types in objects each primitive data types values store in new independent memory it doesnot refer any values
//shallow copy stores reference types(object,arrays) in object each values refer the same array/object. If one array changes all others also changed