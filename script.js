// 1st argument takes name of the tag  which we want to create 2 is to specify attributes such as  classname,id,events such as onclick etc , 3 is to display on screen
const h1tag=React.createElement('h1',{id:'heading',onClick:()=>{alert('heyy every onr')}}, "hello boii") //creates element 

const root=ReactDOM.createRoot(document.getElementById('root')) // helps to append element create in a dom 

// for Nested Structre we use array 
const parent =
React.createElement("div",{id:"parent"},
       
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"headers"},"Hey I am in child 1 h1 tag"),
    React.createElement("h3",{id:"headers3"},"Hey I am in child 1 h3 tag")] ),

    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"headers2"},"Hey I am in child 2 h1 tag"),
    React.createElement("h3",{id:"headers23"},"Hey I am in child 2 h3 tag")]
                
));



console.log(parent);





root.render(parent);
