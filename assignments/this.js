/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Default bindind : This key word will point at the window becasue we are not assigning 'this' to anything 
* 2.  Implicit Binding: This key word is referring to the '.' on the left side 
* 3. Explicit Binding : function call to use a object(this is apply in/to) without putting a property function 
* 4. New Binding: Using the New key word constructs a new object and this points to it. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
                //console.log(this);
// Principle 2

// code example for Implicit Binding
            // const nba = {
            //     name: 'National Basketball association',
            //     hype: 'less than a weeeeeeeeekkkkkk',
            //     hyped: function(){
            //         console.log(this.nba);
            //     }
            // }

// Principle 3

// code example for New Binding
                // function Person(attributes) {
                //     this.name = attributes.name,
                //     this.birthPlace = attributes.birthPlace,
                //     this.phase = attributes.phase,
                //     console.log(this);
                // }
                // const george = new Person ({
                //     name: 'george',
                //     birthPlace: 'Jamaica',
                //     phase: 'Rasta-mi-pasta',
                //     say: function(){
                //         console.log(`${this.name} was born  in ${this.birthPlace} , so he is allowed to say ${this.phase}`);
                //     }
                // });
// Principle 4

// code example for Explicit Binding
                // function job() {
                //     console.log(this.name);
                // }
                // const firstJob = {
                //     name:'Web',
                //     location: 'NYC'
                // }
                // const secondJob = {
                //     name: 'Sales',
                //     location: 'NYC'
                // }
                // job.call(firstJob);
                // job.call(secondJob);