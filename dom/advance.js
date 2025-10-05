// Array Destructing up to 5 depths

/*const user = [["Urfa"], ["BAIUST"], ["CSE"], ["Cumilla"], ["Bangladesh"]];

const [name, university, department, city, country] = user;
console.log({name, university, department, city, country});
*/

// Object Destructing up to 5 depths
const user = {
  name: "Urfa",
  address: {
    city: "Cumilla",
     country: "Bangladesh",
   },
   education: {
    university:"BAIUST",
    college: "CVC",
    school: "NFS",
   },
   department : "CSE",
   current_status: {
    level: 3,
    term: 2,
   }
   
};

 const {name, address, education, department, current_status} = user;

 console.log({ name, address, education, department, current_status});
 
//  Combination Destructuring (5 Depths):
// Object + Array
/*const MyData = { 
    id: 1051,
    details: [ 
        'Academic',
        { 
            major: 'CSE',
            enrollment: [ 
                2023,
                { 
                    status: 'Not Graduated',
                    previous_semester_CGPA: 3.96
                }
            ]
        }
    ]
};
const {
    details: [ 
        , 
        { 
            enrollment: [ 
                , 
                { 
                    previous_semester_CGPA 
                }
            ]
        }
    ]
} = MyData;

console.log({ previous_semester_CGPA });
*/
// Array + Object
/*const MyData = [ 
    "User_Info_Block",
    { 
        userID: 1051,
        academic: [ 
            'CSE',
            { 
                year: 2023,
                grades: [ 
                    3.96 
                ]
            }
        ]
    }
];

const [
    , 
    {
        
        academic: [
            , 
            { 
                grades: [ 
                    previous_semester_CGPA 
                ]
            }
        ]
    }
] = MyData;

console.log({ previous_semester_CGPA });
*/



